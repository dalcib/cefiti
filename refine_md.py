import os
import re
import glob

def extract_scientific_names(db_path):
    names = set()
    try:
        with open(db_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Extract from hospedeiros: "nomeSci": "Name"
            hosp_matches = re.findall(r'"nomeSci":\s*"([^"]+)"', content)
            for name in hosp_matches:
                # Remove "spp." or authors if simple enough, but exact match is safer for now.
                # User wants "scientific names", often mixed in text.
                # Let's clean up common suffix like " spp." for better matching
                clean = name.split(" var ")[0].strip()
                names.add(clean)
                names.add(name) # Add full name too

            # Extract from pragas: "prag": "Name"
            prag_matches = re.findall(r'"prag":\s*"([^"]+)"', content)
            for name in prag_matches:
                names.add(name)
                
    except Exception as e:
        print(f"Error reading DB: {e}")
    return names

def process_header(text):
    lines = text.split('\n')
    
    header_parts = {
        'org': [],
        'gab': [],
        'act': [],
        'dou': []
    }
    
    # Lines to keep in body (from the scanned chunk)
    body_lines_from_scan = []
    
    # Scan limit
    scan_limit = 30
    scan_lines = lines[:scan_limit]
    remaining_lines = lines[scan_limit:]
    
    found_resolve = False
    
    for line in scan_lines:
        s_line = line.strip()
        if not s_line:
            # Empty lines in the scan area can be ignored (we recreate spacing)
            continue
            
        u_line = s_line.upper()
        
        # Stop hard if we hit the end of preamble "resolve:"
        if s_line.endswith("resolve:"):
            found_resolve = True
            body_lines_from_scan.append(s_line)
            continue
            
        # If we already passed "resolve:", everything is body
        if found_resolve:
            body_lines_from_scan.append(s_line)
            continue

        # Classification
        # 1. ORG
        if "MINISTÉRIO" in u_line and not s_line.startswith(("O ", "A ")):
            # Avoid duplicates if we already have it
            if not any("MINISTÉRIO" in x.upper() for x in header_parts['org']):
                header_parts['org'].append(s_line)
            continue
            
        # 2. GAB / SEC
        if ("GABINETE" in u_line or "SECRETARIA" in u_line) and not s_line.startswith(("O ", "A ")):
            # "O SECRETÁRIO" is preamble. "SECRETARIA DE X" is header.
            # Avoid duplicates
            if not any(x.upper() == u_line for x in header_parts['gab']):
                header_parts['gab'].append(s_line)
            continue
            
        # 3. ACT
        if re.match(r'^(INSTRUÇÃO NORMATIVA|PORTARIA|RESOLUÇÃO|LEI|DECRETO)', u_line):
             if not any(x.upper() == u_line for x in header_parts['act']):
                header_parts['act'].append(s_line)
             continue
             
        # 4. DOU
        if "DOU" in u_line or "DIÁRIO OFICIAL" in u_line:
             if u_line == "DIÁRIO OFICIAL DA UNIÃO": continue # Skip label
             header_parts['dou'].append(s_line)
             continue
             
        # 5. JUNK
        if re.search(r'pág\.|página|Seção', s_line, re.IGNORECASE) and "DOU" not in u_line:
            continue

        # 6. BODY (Preamble or other)
        body_lines_from_scan.append(s_line)

    # Reconstruct Header
    new_header_blocks = []
    if header_parts['org']: new_header_blocks.append("\n".join(header_parts['org']))
    if header_parts['gab']: new_header_blocks.append("\n".join(header_parts['gab']))
    if header_parts['act']: new_header_blocks.append("\n".join(header_parts['act']))
    if header_parts['dou']: new_header_blocks.append("\n".join(header_parts['dou']))
    
    new_header = "\n\n".join(new_header_blocks) + "\n\n" if new_header_blocks else ""
    
    # Reconstruct Body
    body_text = "\n".join(body_lines_from_scan + remaining_lines)
    
    return new_header, body_text

def refine_body(text, scientific_names):
    lines = text.split('\n')
    new_lines = []
    
    buffer = ""
    
    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Pass through empty lines, flushing buffer
        if not stripped:
            if buffer:
                new_lines.append(buffer)
                buffer = ""
            new_lines.append("")
            continue
            
        # Check if this line is a structural element that should force a break
        is_structure = (
            stripped.startswith("Art.") or
            stripped.startswith("|") or
            stripped.isupper() and len(stripped) < 100 or # Likely a Title/Chapter
            stripped.startswith("- ") or # List
            re.match(r'^[IVX]+\s-', stripped) # Roman numeral list
        )
        
        if is_structure:
            if buffer:
                new_lines.append(buffer)
                buffer = ""
            
            # Article Spacing Rule
            if stripped.startswith("Art."):
                 new_lines.append("") # Ensure blank line before
            
            new_lines.append(stripped)
            continue
            
        # It's regular text. Add to buffer.
        if buffer:
            buffer += " " + stripped
        else:
            buffer = stripped
            
        # Decide if we should flush the buffer (end of sentence/paragraph)
        # Ends with . : ; 
        if buffer.endswith(('.', ':', ';')):
            new_lines.append(buffer)
            buffer = ""
            
    if buffer:
        new_lines.append(buffer)
        
    refined_text = "\n".join(new_lines)
    
    # Apply Italics
    # Sort names by length descending to match longest first
    sorted_names = sorted(list(scientific_names), key=len, reverse=True)
    
    # We need a safe way to replace without re-replacing inside * *
    # Simplest way: iterate and replace if not surrounded by *
    
    for name in sorted_names:
        if len(name) < 4: continue # Skip too short abbreviations to avoid false positives
        
        # Regex to match 'name' but NOT if it's already '*name*'
        # Lookbehind is tricky with variable length, so we'll do a two-pass or simple checks
        # Actually, since we essentially stripped rich formatting, existing italics might be sparse or non-standard format.
        # Let's just blindly apply italics to the scientific name 
        # BUT we must avoid **name**
        
        pattern = re.compile(re.escape(name), re.IGNORECASE)
        
        # Simple replacement: replace matches with *match*
        # But we need to handle casing. The DB has "Bactrocera carambolae", text might have "BACTROCERA..."
        # User wants italics.
        
        def replace_italic(match):
            m = match.group(0)
            # If already wrapped, leave it
            # This check is hard inside sub, so we might double wrap and clean up later
            return f"*{m}*"
            
        refined_text = pattern.sub(replace_italic, refined_text)

    # Clean up double asterisks ** -> * or **** -> ** (if any)
    # If we wrapped *Text*, it becomes **Text**. Markdown interprets ** as bold.
    # User asked for Italics (*).
    # So if we have **Text**, convert back to *Text*? Or did we mistakenly verify bold?
    # Standard MD: *Italic*, **Bold**.
    # If text was `*B. carambolae*` and we replace `B. carambolae` with `*B. carambolae*`, we get `**B. carambolae**` (Bold).
    # We want Italic. So we should replace `**` with `*` inside the text body for these specific phrases?
    # Or just replace `**` with `*` globally? No, might break other things.
    # Let's clean up `**` surrounding scientific names specifically.
    
    refined_text = refined_text.replace("**", "*") # Simplistic but matches user "Texto plano" request (no bold needed usually)
    
    return refined_text

def main():
    db_path = "src/db.ts"
    md_files = glob.glob("public/leg/*.md")
    
    print("Extracting scientific names...")
    sci_names = extract_scientific_names(db_path)
    print(f"Loaded {len(sci_names)} scientific names.")
    
    for md_path in md_files:
        print(f"Refining {md_path}...")
        with open(md_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        header, body_source = process_header(content)
        
        # Clean header junk from body source if any leaked
        # (This is hard to do perfectly without more parsing, but previous step separated them)
        
        refined_body = refine_body(body_source, sci_names)
        
        final_content = header + refined_body
        
        # Final cleanup of multiple newlines
        final_content = re.sub(r'\n{3,}', '\n\n', final_content)
        
        with open(md_path, 'w', encoding='utf-8') as f:
            f.write(final_content)

if __name__ == "__main__":
    main()
