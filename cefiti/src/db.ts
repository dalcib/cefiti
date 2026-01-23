// CEFiTI - Database


export interface Regra {
  idprag: number
  desc: string
  part: string[]
  orig: string[]
  dest: string[]
  prag: string
  exig: string[]
}

export interface Files {
  leg: string
  link: string
}

export interface Praga {
  id: number
  prag: string
  hosp: number[]
  pragc: string
  files: number[]
}

export interface Hospedeiro {
  id: number
  nomeVul: string[]
  nomeSci: string
  count_nameVul?: number
}

export interface Legislacao {
  id: number
  leg: string
  link: string
}

export interface Estado {
  estado: string
  UF: string
  ibge?: number
}

// The combined record used in the store
export interface Db extends Omit<Praga, 'files'>, Regra {
  files: Legislacao[]
}


export const hospedeiros: Hospedeiro[] =

  [
    { "id": 1, "nomeSci": "Persea gratissima", "nomeVul": ["Abacate (Persea gratissima)"] },
    { "id": 2, "nomeSci": "Picea abies", "nomeVul": ["Abeto Europeu", "Abeto Vermelho Comum", "Noruega Abeto"] },
    { "id": 3, "nomeSci": "Chrysophyllum cainito", "nomeVul": ["Abiu (C. cainito)", "Bilimbi (C. cainito)", "Caimito", "Carambola amarela (C. cainito)"] },
    { "id": 4, "nomeSci": "Pouteria caimito", "nomeVul": ["Abiu (P. cainito)"] },
    { "id": 5, "nomeSci": "Acacia spp.", "nomeVul": ["Acácia", "Angico", "Jurema", "Unha-de-gato"] },
    { "id": 6, "nomeSci": "Malpighia spp.", "nomeVul": ["Acerola(qualquer espécie)"] },
    { "id": 7, "nomeSci": "Malpighia punicifolia", "nomeVul": ["Acerola (M. punicifolia)"] },
    { "id": 8, "nomeSci": "Malpighia emarginata", "nomeVul": ["Acerola (M. emarginata)"] },
    { "id": 9, "nomeSci": "Chrysobalanus icaco", "nomeVul": ["Ajuru"] },
    { "id": 10, "nomeSci": "Populus x canadensis", "nomeVul": ["Álamo (Populus x canadensis)", "Choupo(P.x canadensis)"] },
    { "id": 11, "nomeSci": "Tilia americana", "nomeVul": ["Álamo Americano", "Tilo"] },
    { "id": 12, "nomeSci": "Populus alba", "nomeVul": ["Álamo Branco", "Choupo Branco"] },
    { "id": 13, "nomeSci": "Populus grandidenta", "nomeVul": ["Álamo Grande Dente"] },
    { "id": 14, "nomeSci": "Populus spp.", "nomeVul": ["Álamo", "Choupo"] },
    { "id": 15, "nomeSci": "Albizia lebbeck", "nomeVul": ["Albízia", "Cabeça-de-negro", "Faveiro"] },
    { "id": 16, "nomeSci": "Alnus incana", "nomeVul": ["Alder Cinza"] },
    { "id": 17, "nomeSci": "Alnus japonica", "nomeVul": ["Alder Japonês"] },
    { "id": 18, "nomeSci": "Alnus glutinosa", "nomeVul": ["Alder Negro", "Amieiro"] },
    { "id": 19, "nomeSci": "Alnus rubra", "nomeVul": ["Alder Vermelha"] },
    { "id": 20, "nomeSci": "Alnus sp.", "nomeVul": ["Alder"] },
    { "id": 21, "nomeSci": "Populus wislizeni", "nomeVul": ["Algodão Americano"] },
    { "id": 22, "nomeSci": "Prunus spp.", "nomeVul": ["Ameixa"] },
    { "id": 23, "nomeSci": "Syzygium cumini", "nomeVul": ["Ameixa-roxa"] },
    { "id": 24, "nomeSci": "Prunus salicina", "nomeVul": ["Ameixeira-japonesa"] },
    { "id": 25, "nomeSci": "Amelanchier laevis", "nomeVul": ["Amelanchier"] },
    { "id": 26, "nomeSci": "Terminalia catappa", "nomeVul": ["Amendoeira", "Sete Copas"] },
    { "id": 27, "nomeSci": "Frangula almus", "nomeVul": ["Amieiro Negro", "Sanguinho"] },
    { "id": 28, "nomeSci": "Eugenia stipitata", "nomeVul": ["Araçá-Boi"] },
    { "id": 29, "nomeSci": "Calycolpus goetheanus", "nomeVul": ["Araçapeua"] },
    { "id": 30, "nomeSci": "Manilkara zapota", "nomeVul": ["Arapaju", "Maçaranduba", "Mararaju", "Sapoti", "Sapotilha"] },
    { "id": 31, "nomeSci": "Crataegus oxyacanthoides (syn: oxyacantha)", "nomeVul": ["Arbusto Espinheiro do Bosque"] },
    { "id": 32, "nomeSci": "Craetaegus monogyna", "nomeVul": ["Arbusto Espinhento", "Espinho Branco"] },
    { "id": 33, "nomeSci": "Fraxinus nigra (syn. sambucifolia)", "nomeVul": ["Árvore Preta"] },
    { "id": 34, "nomeSci": "Avena sativa", "nomeVul": ["Aveia"] },
    { "id": 35, "nomeSci": "Corylus avellana", "nomeVul": ["Avelã"] },
    { "id": 36, "nomeSci": "Corylus sieboldiana", "nomeVul": ["Aveleira Japonesa"] },
    { "id": 37, "nomeSci": "Corylus heterophylla var. thunbergiii", "nomeVul": ["Aveleira Siberiana"] },
    { "id": 38, "nomeSci": "Ilex aquifolium", "nomeVul": ["Azevinho"] },
    { "id": 39, "nomeSci": "Garcinia dulcis", "nomeVul": ["Bacupari"] },
    { "id": 40, "nomeSci": "Myroxylon balsamum", "nomeVul": ["Bálsamo"] },
    { "id": 41, "nomeSci": "Musa spp.", "nomeVul": ["Banana"] },
    { "id": 42, "nomeSci": "Citrus reticulata", "nomeVul": ["Bergamota", "Mandarina,", "Mexerica", "Ponkan", "Tangerina"] },
    { "id": 43, "nomeSci": "Betula papyrifera", "nomeVul": ["Bétula Branca (B.papyrifera)", "Bétula Papel"] },
    { "id": 44, "nomeSci": "Betula pendula (syn:verrucosa)", "nomeVul": ["Bétula Branca (B.pendula)"] },
    { "id": 45, "nomeSci": "Betula pubescens", "nomeVul": ["Bétula Branca (B.pubescens)"] },
    { "id": 46, "nomeSci": "Betula populifolia", "nomeVul": ["Bétula Cinza"] },
    { "id": 47, "nomeSci": "Betula lenta", "nomeVul": ["Bétula Lenta"] },
    { "id": 48, "nomeSci": "Betula nigra", "nomeVul": ["Bétula lenta", "Bétula Negra"] },
    { "id": 49, "nomeSci": "Betula lutea (synonym: alleghaniensis)", "nomeVul": ["Bétula Lutea"] },
    { "id": 50, "nomeSci": "Betula maximowicziana", "nomeVul": ["Bétula Monarca"] },
    { "id": 51, "nomeSci": "Betula sp.", "nomeVul": ["Bétula"] },
    { "id": 52, "nomeSci": "Averrhoa bilimbi", "nomeVul": ["Bilimbi (A. bilimbi)", "Carambola Amarela (A. bilimbi)", "Limão Cayena"] },
    { "id": 53, "nomeSci": "Rollinia omucosa", "nomeVul": ["Biribá"] },
    { "id": 54, "nomeSci": "Acer palmatum", "nomeVul": ["Bordo Japonês"] },
    { "id": 55, "nomeSci": "Acer macrophyllum", "nomeVul": ["Bordo Vermelho (A.macrophyllum)"] },
    { "id": 56, "nomeSci": "Acer rubrum", "nomeVul": ["Bordo Vermelho (A.rubrum)"] },
    { "id": 57, "nomeSci": "Acer mono subsp. Heterophyllum", "nomeVul": ["Bordo (A.mono)"] },
    { "id": 58, "nomeSci": "Acer negundo", "nomeVul": ["Bordo (A.negundo)"] },
    { "id": 59, "nomeSci": "Acer saccharum", "nomeVul": ["Bordo (A.sacharum)"] },
    { "id": 60, "nomeSci": "Acer spicatum", "nomeVul": ["Bordo (A.spicatum)"] },
    { "id": 61, "nomeSci": "Acer pennsylvanicum", "nomeVul": ["Bordo (Acer pennsylvanicum)"] },
    { "id": 62, "nomeSci": "Acer pseudoplatanus", "nomeVul": ["Bordo (Acer pseudoplatanus)", "Padreiro"] },
    { "id": 63, "nomeSci": "Acer sp.", "nomeVul": ["Bordo"] },
    { "id": 64, "nomeSci": "Acer circinatum", "nomeVul": ["Bordo-da-videira"] },
    { "id": 65, "nomeSci": "Cercis canadensis", "nomeVul": ["Broto Vermelho Oriental"] },
    { "id": 66, "nomeSci": "Theobroma cacao", "nomeVul": ["Cacau"] },
    { "id": 67, "nomeSci": "Theobroma speciosum", "nomeVul": ["Cacauí"] },
    { "id": 68, "nomeSci": "Spondias lutea", "nomeVul": ["Cajá (S. lutea)", "Cajá-mirim (S. lutea)", "Cajazeiro (S. lutea)", "Taperebá (S. lutea)"] },
    { "id": 69, "nomeSci": "Spondias mombin", "nomeVul": ["Cajá (S. mombin)", "Cajá-mirim (S. mombin)", "Cajazeiro (S. mombin)", "Taperebá (S. mombin)"] },
    { "id": 70, "nomeSci": "Anacardium occidentale", "nomeVul": ["Caju"] },
    { "id": 71, "nomeSci": "Averrhoa carambola", "nomeVul": ["Carambola"] },
    { "id": 72, "nomeSci": "Carpinus betulas", "nomeVul": ["Cárpino Betulas"] },
    { "id": 73, "nomeSci": "Carpinus sp.", "nomeVul": ["Cárpino"] },
    { "id": 74, "nomeSci": "Quercus laurifolia", "nomeVul": ["Carvalho Água", "Carvalho Folha Diamante", "Carvalho Glorioso", "Carvalho Glorioso do Brejo", "Carvalho Obtuso"] },
    { "id": 75, "nomeSci": "Quercus bicolor", "nomeVul": ["Carvalho Branco do Brejo"] },
    { "id": 76, "nomeSci": "Quercus garryana", "nomeVul": ["Carvalho Branco Oregon", "Carvalho Oregon"] },
    { "id": 77, "nomeSci": "Quercus alba", "nomeVul": ["Carvalho Branco"] },
    { "id": 78, "nomeSci": "Quercus borealis (syn: rubra)", "nomeVul": ["Carvalho Campeão(Q.borealis)", "Carvalho Vermelho do Norte (Q.borealis)"] },
    { "id": 79, "nomeSci": "Quercus rubra", "nomeVul": ["Carvalho Campeão(Q.rubra)", "Carvalho Vermelho do Norte (Q.rubra)"] },
    { "id": 80, "nomeSci": "Quercus montana", "nomeVul": ["Carvalho Castanheiro"] },
    { "id": 81, "nomeSci": "Quercus coccinea", "nomeVul": ["Carvalho Escarlata"] },
    { "id": 82, "nomeSci": "Quercus glandulifera", "nomeVul": ["Carvalho Konara", "Carvalho Koreano"] },
    { "id": 83, "nomeSci": "Quercus mongolica var grosserrata", "nomeVul": ["Carvalho Mongoliano"] },
    { "id": 84, "nomeSci": "Quercus velutina", "nomeVul": ["Carvalho Preto"] },
    { "id": 85, "nomeSci": "Quercus sp.", "nomeVul": ["Carvalho"] },
    { "id": 86, "nomeSci": "Quercus robur", "nomeVul": ["Carvalho-alvarinho", "Carvalho-roble", "Carvalho-vermelho"] },
    { "id": 87, "nomeSci": "Aesculus hippocastanum", "nomeVul": ["Castanha-da-Índia(A.hippocastanum)"] },
    { "id": 88, "nomeSci": "Aesculus sp.", "nomeVul": ["Castanha-da-Índia"] },
    { "id": 89, "nomeSci": "Castanea dentata", "nomeVul": ["Castanheiro Europeu"] },
    { "id": 90, "nomeSci": "Prunus virginiana", "nomeVul": ["Cereja de Pássaro Virginia", "Grão Amargo"] },
    { "id": 91, "nomeSci": "Prunus ssiori", "nomeVul": ["Cereja de Pássaro"] },
    { "id": 92, "nomeSci": "Prunus subhirtella var. pendula", "nomeVul": ["Cerejeira Chorona"] },
    { "id": 93, "nomeSci": "Prunus serotina", "nomeVul": ["Cerejeira Negra"] },
    { "id": 94, "nomeSci": "Prunus avium", "nomeVul": ["Cerejeira"] },
    { "id": 95, "nomeSci": "Camellia sinensis", "nomeVul": ["Chá-da-Índia"] },
    { "id": 96, "nomeSci": "Populus tremula", "nomeVul": ["Choupo Tremedor"] },
    { "id": 97, "nomeSci": "Populus tremuloides", "nomeVul": ["Choupo Trêmulo"] },
    { "id": 98, "nomeSci": "Populus balsamifera", "nomeVul": ["Choupo-bálsamo"] },
    { "id": 99, "nomeSci": "Laburnum anagyrioides", "nomeVul": ["Chuva-de-ouro", "Corrente-de-ouro"] },
    { "id": 100, "nomeSci": "Melia azedarach", "nomeVul": ["Cinamomo"] },
    { "id": 101, "nomeSci": "Fraxinus mandshurica var. Japonica", "nomeVul": ["Cinza Japonês"] },
    { "id": 102, "nomeSci": "Sorbus sp.", "nomeVul": ["Cinza-da-montanha", "Sorva"] },
    { "id": 103, "nomeSci": "Citrus spp.", "nomeVul": ["Citros"] },
    { "id": 104, "nomeSci": "Coprosma areolata", "nomeVul": ["Coprosma Frondoso Fino"] },
    { "id": 105, "nomeSci": "Cocos nucifera", "nomeVul": ["Coqueiro"] },
    { "id": 106, "nomeSci": "Pouteria macrophylla", "nomeVul": ["Cutite"] },
    { "id": 107, "nomeSci": "Theobroma grandiflorum", "nomeVul": ["Cupuaçu"] },
    { "id": 108, "nomeSci": "Fagus americana", "nomeVul": ["Faia Americana"] },
    { "id": 109, "nomeSci": "Fagus sylvantica", "nomeVul": ["Faia Cobre"] },
    { "id": 110, "nomeSci": "Fagus orientalis", "nomeVul": ["Faia do Oriente"] },
    { "id": 111, "nomeSci": "Fagus crenata f. grandifolia (syn. Americana)", "nomeVul": ["Faia Japonesa"] },
    { "id": 112, "nomeSci": "Fagus silvatica f. purpurea", "nomeVul": ["Faia Roxa"] },
    { "id": 113, "nomeSci": "Fagus sp.", "nomeVul": ["Faia"] },
    { "id": 114, "nomeSci": "Aesculus turbinata", "nomeVul": ["Falso Castanho Japonês"] },
    { "id": 115, "nomeSci": "Sorbus aria", "nomeVul": ["Feixe Branco"] },
    { "id": 116, "nomeSci": "Delonix regia", "nomeVul": ["Flamboyant"] },
    { "id": 117, "nomeSci": "Fortunella spp.", "nomeVul": ["Fortunela"] },
    { "id": 118, "nomeSci": "Fraxinus bungeana", "nomeVul": ["Freixo (F.bungeana)"] },
    { "id": 119, "nomeSci": "Fraxinus excelsior", "nomeVul": ["Freixo (F.excelsior)"] },
    { "id": 120, "nomeSci": "Artocarpus altilis", "nomeVul": ["Fruta Pão"] },
    { "id": 121, "nomeSci": "Robinia pseudoacacia", "nomeVul": ["Gafanhoto Preto"] },
    { "id": 122, "nomeSci": "Psidium guajava", "nomeVul": ["Goiaba"] },
    { "id": 123, "nomeSci": "Psidium guineense", "nomeVul": ["Goiaba-araçá"] },
    { "id": 124, "nomeSci": "Nyssa sylvatica", "nomeVul": ["Goma Preta", "Tupelo"] },
    { "id": 125, "nomeSci": "Arenga pinnata", "nomeVul": ["Gomuto"] },
    { "id": 126, "nomeSci": "Heliconia spp.", "nomeVul": ["Helicônia"] },
    { "id": 127, "nomeSci": "Artocarpus integrifolia", "nomeVul": ["Jaca"] },
    { "id": 128, "nomeSci": "Syzygium aqueum", "nomeVul": ["Jambo Branco (S.aqueum)", "Jambo D'água", "Jambosa"] },
    { "id": 129, "nomeSci": "Syzygium jambos", "nomeVul": ["Jambo Amarelo", "Jambo Rosa (S. jambos)"] },
    { "id": 130, "nomeSci": "Syzygium samarangense", "nomeVul": ["Jambo Branco (S.samarangense)", "Jambo Rosa (S. samarangese)"] },
    { "id": 131, "nomeSci": "Syzygium malaccense", "nomeVul": ["Jambo Vermelho"] },
    { "id": 132, "nomeSci": "Juglans sp.", "nomeVul": ["Juglans", "Nogueira"] },
    { "id": 133, "nomeSci": "Ziziphus jujuba", "nomeVul": ["Jujuba (Z. jujuba)", "Jujuba Chinesa"] },
    { "id": 134, "nomeSci": "Ziziphus mauritiana", "nomeVul": ["Jujuba (Z. mauritiana)", "Maçã-de-pobre "] },
    { "id": 135, "nomeSci": "Coprosma lucida", "nomeVul": ["Karamu"] },
    { "id": 136, "nomeSci": "Sophora microphylla", "nomeVul": ["Kowhai", "Sófora"] },
    { "id": 137, "nomeSci": "Citrus aurantium", "nomeVul": ["Laranja Azeda", "Laranja Caipira", "Laranja da Terra"] },
    { "id": 138, "nomeSci": "Citrus sinensis", "nomeVul": ["Laranja", "Laranja Doce"] },
    { "id": 139, "nomeSci": "Licania sp.", "nomeVul": ["Licania"] },
    { "id": 140, "nomeSci": "Rhus typhina", "nomeVul": ["Linda-dos-jardins", "Rustifina Rus", "Sumac Staghorn"] },
    { "id": 141, "nomeSci": "Umbelluraria californica", "nomeVul": ["Louro Califórnia"] },
    { "id": 142, "nomeSci": "Malus communis", "nomeVul": ["Maçã (M. communis)"] },
    { "id": 143, "nomeSci": "Malus pumila var domestica", "nomeVul": ["Maçã (M. pumila var domestica)"] },
    { "id": 144, "nomeSci": "Malus pumila", "nomeVul": ["Maçã (M. pumila)"] },
    { "id": 145, "nomeSci": "Malus x domestica", "nomeVul": ["Maçã (M. x domestica)"] },
    { "id": 146, "nomeSci": "Pyrus malus", "nomeVul": ["Maçã (Pyrus malus)"] },
    { "id": 147, "nomeSci": "Malus sylvestris", "nomeVul": ["Maçã Silvestre"] },
    { "id": 148, "nomeSci": "Malus sp.", "nomeVul": ["Maça"] },
    { "id": 149, "nomeSci": "Carica papaya", "nomeVul": ["Mamão"] },
    { "id": 150, "nomeSci": "Fraxinus mandshurica", "nomeVul": ["Manchu Cinza"] },
    { "id": 151, "nomeSci": "Manihot esculenta", "nomeVul": ["Mandioca"] },
    { "id": 152, "nomeSci": "Mangifera indica", "nomeVul": ["Manga"] },
    { "id": 153, "nomeSci": "Swietenia mahagoni", "nomeVul": ["Mogno Indiano Ocidental"] },
    { "id": 154, "nomeSci": "Switenia macrophyla", "nomeVul": ["Mogno"] },
    { "id": 155, "nomeSci": "Bysonima crassifolia", "nomeVul": ["Murici ou Muruci"] },
    { "id": 156, "nomeSci": "Murraya paniculata", "nomeVul": ["Murta"] },
    { "id": 157, "nomeSci": "Eriobotrya japonica", "nomeVul": ["Nespereira"] },
    { "id": 158, "nomeSci": "Azadirachta indica", "nomeVul": ["Nim"] },
    { "id": 159, "nomeSci": "Carya ovata", "nomeVul": ["Nogueira Amarga Casca de Pelúcia"] },
    { "id": 160, "nomeSci": "Carya tomentosa", "nomeVul": ["Nogueira Amarga Coração Branco"] },
    { "id": 161, "nomeSci": "Carya glabra", "nomeVul": ["Nogueira Amarga de Porco"] },
    { "id": 162, "nomeSci": "Carya spp.", "nomeVul": ["Nogueira Amarga spp"] },
    { "id": 163, "nomeSci": "Carya cordiformis", "nomeVul": ["Nogueira Amarga"] },
    { "id": 164, "nomeSci": "Juglans cinerea", "nomeVul": ["Nogueira Branca"] },
    { "id": 165, "nomeSci": "Juglans regia", "nomeVul": ["Nogueira Comum", "Nogueira europeia"] },
    { "id": 166, "nomeSci": "Carya illinoensis", "nomeVul": ["Nogueira Pecã"] },
    { "id": 167, "nomeSci": "Juglans nigra", "nomeVul": ["Nogueira Preta"] },
    { "id": 168, "nomeSci": "Ulmus americana", "nomeVul": ["Olmo Americano"] },
    { "id": 169, "nomeSci": "Ulmus glabra (syn. montana)", "nomeVul": ["Olmo Escocês"] },
    { "id": 170, "nomeSci": "Ulmus sp.", "nomeVul": ["Olmo", "Ulmeiro"] },
    { "id": 171, "nomeSci": "Opuntia cochenillifera", "nomeVul": ["Palma forrageira"] },
    { "id": 172, "nomeSci": "Cornus muttallii", "nomeVul": ["Pau Cachorro do Pacífico"] },
    { "id": 173, "nomeSci": "Cornus sp.", "nomeVul": ["Pau Cachorro"] },
    { "id": 174, "nomeSci": "Pyrus pyrifolia", "nomeVul": ["Pera Asiática", "Pera Nashi"] },
    { "id": 175, "nomeSci": "Pyrus communis", "nomeVul": ["Pereira Europeia"] },
    { "id": 176, "nomeSci": "Pyrus pyrifolia var culta", "nomeVul": ["Pereira Japonesa"] },
    { "id": 177, "nomeSci": "Capsicum annuum", "nomeVul": ["Pimenta Picante", "Pimenta-do-diabo"] },
    { "id": 178, "nomeSci": "Capsicum chinense", "nomeVul": ["Pimenta-de-Cheiro"] },
    { "id": 179, "nomeSci": "Eugenia uniflora", "nomeVul": ["Pitanga Vermelha"] },
    { "id": 180, "nomeSci": "Platanus orientalis", "nomeVul": ["Plátano", "Plátano Oriental"] },
    { "id": 181, "nomeSci": "Citrus paradisi", "nomeVul": ["Pomelo", "Toranja"] },
    { "id": 182, "nomeSci": "Poncirus spp.", "nomeVul": ["Poncirus"] },
    { "id": 183, "nomeSci": "Ribes sp.", "nomeVul": ["Ribes"] },
    { "id": 184, "nomeSci": "Rosa spp.", "nomeVul": ["Rosa"] },
    { "id": 185, "nomeSci": "Salix alba", "nomeVul": ["Salgueiro Branco"] },
    { "id": 186, "nomeSci": "Salix cinerea", "nomeVul": ["Salgueiro Cinza"] },
    { "id": 187, "nomeSci": "Salix alba var Vitelina", "nomeVul": ["Salgueiro Dourado"] },
    { "id": 188, "nomeSci": "Salix nigricans", "nomeVul": ["Salgueiro Preto"] },
    { "id": 189, "nomeSci": "Salix purpurea", "nomeVul": ["Salgueiro Púrpura", "Vimeiro Púrpura"] },
    { "id": 190, "nomeSci": "Salix amygdalina", "nomeVul": ["Salgueiro Velho Mundo"] },
    { "id": 191, "nomeSci": "Salix amygdaloides", "nomeVul": ["Salgueiro-folha-de-pêssego"] },
    { "id": 192, "nomeSci": "Salix alba L. Coerulea", "nomeVul": ["Salgueiro-taco-de-críquete"] },
    { "id": 193, "nomeSci": "Salix spp.", "nomeVul": ["Salix"] },
    { "id": 194, "nomeSci": "Spondias purpurea", "nomeVul": ["Seriguela"] },
    { "id": 195, "nomeSci": "Hevea brasiliensis", "nomeVul": ["Seringueira"] },
    { "id": 196, "nomeSci": "Sorghum bicolor", "nomeVul": ["Sorgo"] },
    { "id": 197, "nomeSci": "Sorbus domestica", "nomeVul": ["Sorva (S. domestica)"] },
    { "id": 198, "nomeSci": "Tectona grandis", "nomeVul": ["Teca"] },
    { "id": 199, "nomeSci": "Tilia cordata", "nomeVul": ["Teja", "Tejo", "Tella", "Texa", "Tilha", "Tillera"] },
    { "id": 200, "nomeSci": "Theobroma spp.", "nomeVul": ["Theobroma spp"] },
    { "id": 201, "nomeSci": "Tilia sp.", "nomeVul": ["Tília"] },
    { "id": 202, "nomeSci": "Licopersicum esculentum", "nomeVul": ["Tomate"] },
    { "id": 203, "nomeSci": "Sorbus aucuparia", "nomeVul": ["Tramazeira"] },
    { "id": 204, "nomeSci": "Liriodendron tulipifera", "nomeVul": ["Tulipeiro"] },
    { "id": 205, "nomeSci": "Vitis spp. e seus híbridos", "nomeVul": ["Uva", "Videira e seus híbridos"] },
    { "id": 206, "nomeSci": "Viola sp.", "nomeVul": ["Viola"] }

  ];

export const pragas: Praga[] = //CEFiTI - Pragas

  [
    {
      "id": 1,
      "prag": "Bactrocera carambolae",
      "pragc": "MOSCA-DA-CARAMBOLA",
      "hosp": [70, 125, 120, 127, 52, 71, 29, 177, 149, 9, 137, 181, 42, 138, 179, 39, 202, 8, 152, 30, 122, 69, 68, 194, 128, 129, 131, 130, 26, 133, 134, 155, 178, 3, 28, 139, 4, 106, 123, 53, 23],
      "files": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
      "id": 2,
      "prag": "Schizotetranychus hindustanicus",
      "pragc": "ÁCARO HINDU",
      "hosp": [105, 158, 196, 5, 100, 103],
      "files": [11]
    },
    {
      "id": 3,
      "prag": "Sternochetus mangiferae",
      "pragc": "GORGULHO DA MANGA",
      "hosp": [152],
      "files": [12]
    },
    {
      "id": 4,
      "prag": "BSV e CMV",
      "pragc": "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS",
      "hosp": [41],
      "files": [13]
    },
    {
      "id": 5,
      "prag": "Xanthomonas campestris pv. viticola",
      "pragc": "CANCRO-DA-VIDEIRA",
      "hosp": [205],
      "files": [14]
    },
    {
      "id": 6,
      "prag": "Neonectria ditissima (Neonectria galligena)",
      "pragc": "CANCRO EUROPEU DAS POMÁCEAS",
      "hosp": [148],
      "files": [15]
    },
    {
      "id": 7,
      "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
      "pragc": "HLB",
      "hosp": [103, 117, 182, 156],
      "files": [16]
    },
    {
      "id": 8,
      "prag": "Ralstonia solanacearum raça 2",
      "pragc": "MOKO-DA-BANANEIRA",
      "hosp": [41, 126],
      "files": [17]
    },
    {
      "id": 9,
      "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
      "pragc": "SIGATOKA NEGRA",
      "hosp": [41, 126],
      "files": [18]
    },
    {
      "id": 10,
      "prag": "Xanthomonas citri subsp. citri",
      "pragc": "CANCRO CÍTRICO",
      "hosp": [103, 117, 182],
      "files": [19]
    },
    {
      "id": 11,
      "prag": "Moniliophthora roreri",
      "pragc": "MONILÍASE",
      "hosp": [200],
      "files": [20, 21, 22]
    },
    {
      "id": 12,
      "prag": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
      "pragc": "VASSOURA DE BRUXA DA MANDIOCA",
      "hosp": [151],
      "files": [23, 24]
    }
  ];

export const regras: Regra[] = //CEFiTI - Regras

  // prettier-ignore
  [

    //MOSCA-DA-CARAMBOLA
    {
      idprag: 1,
      desc: 'DE UF sem ocorrência de Mosca-da-carambola PARA UF sem ocorrência de Mosca-da-carambola',
      part: ['frutos'],
      orig: ['AC', 'AL', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Bactrocera carambolae',
      exig: [
        `Se os frutos  forem destinados a locais sem ocorrência da praga e transitarem em áreas sob quarentena, deverão:  
I - estar acondicionados em embalagens que não permitam o contato do produto com a praga;  
II - ser transportados em veículos fechados ou, quando abertos, protegidos com tela de malha de 2 mm; e I 
II - estar acompanhados de Permissão de Trânsito de Vegetais - PTV, conforme o disposto no art. 2º, da Instrução Normativa MAPA nº 28, de 24 de agosto de 2016.`,
        `Se o frutos saírem de Unidade da Federação sem ocorrência da praga e transitarem por zona tampão, áreas erradicadas e áreas sem detecção em Unidade da Federação com ocorrência da praga, com destino a outra Unidade da Federação sem ocorrência, deverão: 
I - possuir documento que ateste a origem, podendo ser emitida apenas a PTV, sem a necessidade de CFO/CFOC.  
II- constará a seguinte DA na PTV:  \"A partida foi produzida em UF sem ocorrência de Bactrocera carambolae”.`,
        `Consulte a lista de área sob quarentena, área erradicada, área sem ocorrência e de zona tampão nas Resoluções e Portarias acima.`
      ]
    }, {
      idprag: 1,
      desc: 'DE UF com ocorrência de Mosca-da-carambola PARA qualquer UF',
      part: ['frutos'],
      orig: ['AP', 'AM', 'PA', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Bactrocera carambolae',
      exig: [
        'Se a partida for procedente DE área sob quarentena e de área protegida PARA local sem ocorrência: TRÂNSITO PROIBIDO.',
        'Se a partida for procedente DE zona tampão, de áreas erradicadas e de áreas sem detecção: PTV com a seguinte DA: \"A partida está livre de Bactrocera carambolae”',
        `Se os frutos  forem destinados a locais sem ocorrência da praga e transitarem em áreas sob quarentena, deverão:  
I - estar acondicionados em embalagens que não permitam o contato do produto com a praga;  
II - ser transportados em veículos fechados ou, quando abertos, protegidos com tela de malha de 2 mm; e I 
II - estar acompanhados de Permissão de Trânsito de Vegetais - PTV, conforme o disposto no art. 2º, da Instrução Normativa MAPA nº 28, de 24 de agosto de 2016.`,
        `Se o frutos saírem de Unidade da Federação sem ocorrência da praga e transitarem por zona tampão, áreas erradicadas e áreas sem detecção em Unidade da Federação com ocorrência da praga, com destino a outra Unidade da Federação sem ocorrência, deverão: 
I - possuir documento que ateste a origem, podendo ser emitida apenas a PTV, sem a necessidade de CFO/CFOC.  
II- constará a seguinte DA na PTV:  \"A partida foi produzida em UF sem ocorrência de Bactrocera carambolae”.`,
        `Consulte a lista de área sob quarentena, área erradicada, área sem ocorrência e de zona tampão nas Resoluções e Portarias acima.`
      ]
    },
    //ÁCARO HINDU
    {
      idprag: 2,
      desc: 'DE UF com ocorrência de Ácaro-hindu-dos-citros PARA UF reconhecida pelo MAPA como livre da ocorrência de Ácaro-hindu-dos-citros',
      part: ['plantas', 'mudas', 'raízes', 'caules', 'ramos', 'folhas', 'flores', 'frutos'],
      orig: ['RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Schizotetranychus hindustanicus',
      exig: [
        `TRÂNSITO PROIBIDO.\nMotivo: Ausência de área livre de ácaro-hindu-dos-citros, na origem da partida.`,
        `Para  frutos de Citrus spp. o trânsito é permitido com PTV com a declaração adicional: \"A partida atende às exigências constantes da Instrução Normativa MAPA nº 8, de 17 de abril de 2012, encontra-se livre do Ácaro Hindu dos Citros\";`,
        `Estas exigências fitossanitárias não se aplicam a material in vitro, madeira serrada e, ainda, frutos de coco (Cocus nucifera) secos e descascados;`
      ]
    },

    //BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS
    {
      idprag: 4,
      desc: 'DE qualquer UF PARA qualquer UF',
      part: ['mudas'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'BSV e CMV',
      exig: [
        'PTV com a seguinte declaração adicional: \"A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] -[município e UF de localização do laboratório]\";',
        'As mudas de bananeira que transitarem em desrespeito às determinações deste artigo ficam sujeitas à interceptação, caso em que será determinado o retorno das mesmas ao local de origem e comunicado ao órgão fiscalizador da produção e comércio, para adoção das providências cabíveis, conforme o art. 13, § 2º., da Instrução Normativa MAPA nº. 46, de 27 de dezembro de 2010.'
      ]
    },

    //CANCRO-DA-VIDEIRA
    {
      idprag: 5,
      desc: 'DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira',
      part: ['mudas'],
      orig: ['BA', 'PE', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas campestris pv. viticola',
      exig: [
        'PTV com a seguinte declaração adicional: \"As mudas foram obtidas por micropropagação e indexadas para Xanthomonas campestris pv. viticola\".'
      ]
    }, {
      idprag: 5,
      desc: 'DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira',
      part: ['frutos'],
      orig: ['BA', 'PE', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas campestris pv. viticola',
      exig: [
        'PTV com a seguinte declaração adicional: \"Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária\";',
        'Estas exigências fitossanitárias só se aplicam a frutos, quando destinados a consumo in natura.'
      ]
    }, {
      idprag: 5,
      desc: 'DE UF com ocorrência de Cancro-da-videira PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-da-videira',
      part: ['material para pesquisa'],
      orig: ['BA', 'PE', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas campestris pv. viticola',
      exig: [
        'PTV com a seguinte declaração adicional: \"O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga\".'
      ]
    },

    //CANCRO EUROPEU DAS POMÁCEAS
    {
      idprag: 6,
      desc: 'DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas',
      part: ['mudas', 'sementes', 'estacas', 'bulbos', 'tubérculos', 'manivas', 'toletes', 'gemas', 'ramas', 'rizomas', 'material de propagação'],
      orig: ['PR', 'RS', 'SC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'SE', 'SP', 'TO'],
      prag: 'Neonectria ditissima (Neonectria galligena)',
      exig: [
        'PTV com a seguinte declaração adicional: \"A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena\";',
        'Esta exigência fitossanitária não se aplica a material propagativo in vitro.'
      ]
    }, {
      idprag: 6,
      desc: 'DE UF com ocorrência de Cancro-europeu-das-pomáceas PARA UF reconhecida pelo MAPA como livre da ocorrência de Cancro-europeu-das-pomáceas',
      part: ['frutos'],
      orig: ['PR', 'RS', 'SC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'SE', 'SP', 'TO'],
      prag: 'Neonectria ditissima (Neonectria galligena)',
      exig: [
        'PTV com a seguinte declaração adicional: \"Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma (Instrução Normativa nº 20, de 20 de junho de 2013) e os frutos não apresentam sintomas de Neonectria galligena\".'
      ]
    },

    //GREENING
    {
      idprag: 7,
      desc: 'DE UF com ocorrência de HLB de município com ocorrência da praga e dos municípios limítrofes PARA qualquer UF',
      part: ['mudas', 'estacas', 'gemas', 'ramas', 'raízes', 'material de propagação vegetativo', 'plantas'],
      orig: ['GO', 'MG', 'MS', 'PR', 'SC', 'SP'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
      exig: [
        'PTV, baseado em Certificado Fitossanitário de Origem - CFO, ou Certificado Fitossanitário de Origem Consolidado - CFOC, com a seguinte Declaração Adicional (DA): \"O material de propagação é originário de UF com ocorrência de Candidatus Liberibacter spp, foi produzido em ambiente protegido e encontra-se livre da praga\". \n Obs.: O trânsito de material de propagação vegetativo de plantas hospedeiras de Candidatus Liberibacter spp., quando passar por UF com ocorrência da praga, deverá ser realizado em caminhão com carroceria fechada ou com tela antiafidica.'
      ]
    },

    {
      idprag: 7,
      desc: 'DE UF com ocorrência de HLB, de município sem ocorrência da praga, exceto aqueles limítrofes às áreas de ocorrência, PARA qualquer UF.',
      part: ['mudas', 'estacas', 'gemas', 'ramas', 'raízes', 'material de propagação vegetativo', 'plantas'],
      orig: ['GO', 'MG', 'MS', 'PR', 'SC', 'SP'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
      exig: [
        'PTV, baseado em Certificado Fitossanitário de Origem - CFO, ou Certificado Fitossanitário de Origem Consolidado - CFOC, com a seguinte Declaração Adicional (DA): \"O material de propagação é originário de município sem ocorrência de Candidatus Liberibacter spp., de UF com ocorrência, e encontra-se livre da praga.\".\n Obs.: O trânsito de material de propagação vegetativo de plantas hospedeiras de Candidatus Liberibacter spp., quando passar por UF com ocorrência da praga, deverá ser realizado em caminhão com carroceria fechada ou com tela antiafidica.'
      ]
    },
    {
      idprag: 7,
      desc: 'DE UF sem ocorrência de HLB PARA qualquer UF',
      part: ['mudas', 'estacas', 'gemas', 'ramas', 'raízes', 'material de propagação vegetativo', 'plantas'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'MA', 'MT', 'PA', 'PB', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SE', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
      exig: [
        'PTV com a seguinte declaração adicional: “O material de propagação é originário de UF sem ocorrência de Candidatus Liberibacter spp.”; \n Obs.: O trânsito de material de propagação vegetativo de plantas hospedeiras de Candidatus Liberibacter spp., quando passar por UF com ocorrência da praga deverá ser realizado em caminhão com carroceria fechada ou com tela antiafidica.'
      ]
    },
    {
      idprag: 7,
      desc: 'DE UF com ocorrência de HLB, oriúndos de município com ocorrência da praga e dos municípios limítrofes, PARA UF reconhecida pelo MAPA como sem ocorrência de HLB',
      part: ['frutos'],
      orig: ['GO', 'MG', 'MS', 'PR', 'SC', 'SP'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'MA', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'TO'],
      prag: 'Candidatus liberibacter americanus e Candidatus liberibacter asiaticus',
      exig: [
        'PTV com a seguinte declaração adicional: “Os frutos foram submetidos a beneficiamento primário na origem para retirada de restos vegetais, qual seja, totalmente isentos de folhas e ramos de plantas cítricas”.'
      ]
    },

    //GORGULHO DA MANGA
    {
      idprag: 3,
      desc: 'DE UF com ocorrência PARA qualquer UF',
      part: ['frutos'],
      orig: ['RJ'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Sternochetus mangiferae',
      exig: [
        'PTV com a seguinte Declaração Adicional: \"A partida foi produzida fora da zona interditada e encontra-se livre de Sternochetus mangiferae\".'
      ]
    },

    //MOKO-DA-BANANEIRA
    {
      idprag: 8,
      desc: 'Material para pesquisa DE qualquer UF PARA UF sem ocorrência ou Área Livre de Moko-da-bananeira.',
      part: ['material para pesquisa'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RS', 'SC', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'Autorização da Superintendência Federal de Agricultura e Pecuária (SFA), da UF de origem da partida;',
        'A partida deve ser transportada em recipiente lacrado;',
      ]
    }, {
      idprag: 8,
      desc: 'DE UF com ocorrência de Moko-da-bananeira PARA todas as UFs',
      part: ['mudas', 'rizomas'],
      orig: ['AL', 'AM', 'AP', 'PA', 'RO', 'RR', 'SE'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'TRÂNSITO PROIBIDO, exceto para mudas transportadas in vitro ou micropropagadas. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009',
        'Para mudas transportadas en vitro ou micropropagadas, será exigido: \na)PTV com a seguinte declaração adicional: \"As mudas encontram- se livres de Ralstonia solanacearum raça 2\". \nb) A carga deverá estar lacrada e o número do lacre constar na PTV. \nc) Na PTV deve constar se as mudas são in vitro ou micropropagadas;'
      ]
    }, {
      idprag: 8,
      desc: 'DE Área Livre de Moko-da-bananeira PARA todas as UFs',
      part: ['mudas', 'rizomas'],
      orig: ['CE', 'PE', 'PI', 'RN', 'SC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'PTV com  a seguinte declaração adicional: \"As mudas foram produzidas em Área Livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura e Pecuária.\".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.',
        'A carga deverá estar lacrada e o número do lacre constar na PTV.'
      ]
    }, {
      idprag: 8,
      desc: 'DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs',
      part: ['mudas', 'rizomas'],
      orig: ['AC', 'BA', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PR', 'RJ', 'RS', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'PTV com  a seguinte declaração adicional: \"As mudas se encontram livres de Ralstonia solanacearum raça 2.\".  \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.',
        'Quando transitar pelas UFs AM, AP, PA, RO, RR e SE, onde ocorre a praga, a carga deverá estar lacrada e o número do lacre constar na PTV.'
      ]
    }, {
      idprag: 8,
      desc: 'DE UF com ocorrência de Moko-da-bananeira PARA área livre de Moko-da-bananeira',
      part: ['frutos', 'flores'],
      orig: ['AL', 'AM', 'AP', 'PA', 'RO', 'RR', 'SE'],
      dest: ['CE', 'PE', 'PI', 'RN', 'SC'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
      ]
    }, {
      idprag: 8,
      desc: 'DE área livre de Moko-da-bananeira PARA área livre de Moko-da-bananeira',
      part: ['frutos', 'flores'],
      orig: ['CE', 'PE', 'PI', 'RN', 'SC'],
      dest: ['CE', 'PE', 'PI', 'RN', 'SC'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'PTV com a seguinte declaração adicional: \"As mudas foram produzidas em área livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura e Pecuária\". \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
      ]
    }, {
      idprag: 8,
      desc: 'DE UF sem ocorrência de Moko-da-bananeira PARA todas as UFs',
      part: ['frutos', 'flores'],
      orig: ['AC', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RS', 'SC', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'PTV para comprovar a origem. \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009;'
      ]
    }, {
      idprag: 8,
      desc: 'DE UF com ocorrência de Moko-da-bananeira PARA UF sem ocorrência de Moko-da-bananeira',
      part: ['frutos', 'flores'],
      orig: ['AL', 'AM', 'AP', 'PA', 'RO', 'RR', 'SE'],
      dest: ['AC', 'BA', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PR', 'RJ', 'RS', 'SP', 'TO'],
      prag: 'Ralstonia solanacearum raça 2',
      exig: [
        'OU PTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos em UP onde não foi observada a presença de Ralstonia solanacearum raça 2, nos últimos doze meses\"; OU \nPTV com a seguinte declaração adicional: \"Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga Ralstonia solanacearum raça 2\"; \nObs.: Partida apreendida pela fiscalização de defesa sanitária vegetal, em desacordo com estas exigências, será sumariamente destruída ou retornada à origem, sem prejuízo das demais sanções estabelecidas pela legislação própria, conforme o art. 11 da Instrução Normativa SDA nº. 17, de 27 de maio de 2009.'
      ]
    },

    //SIGATOKA NEGRA
    {
      idprag: 9,
      desc: 'Mudas Micropropagadas DE qualquer UF PARA qualquer UF',
      part: ['mudas'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV;',
        'As mudas deverão ser pré-aclimatadas ou aclimatadas em estufas ou casas de vegetação; e tratadas com fungicidas registrados, 10 (dez) dias antes de sua expedição para as Unidades da Federação;',
        'As mudas também poderão ser transportadas quando ainda in vitro;',
        'A exigência de PTV não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a mudas micropropagadas; Para outras mudas que não sejam micropropagadas, o trânsito é proibido, salvo quando provenientes de bananais de Áreas Livres de Sigatoka Negra.',
      ]
    }, {
      idprag: 9,
      desc: 'Material para pesquisa DE qualquer UF PARA qualquer UF',
      part: ['material para pesquisa'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'Autorização Declaratória emitida pela Área de Sanidade Vegetal da Superintendência Federal da Agricultura - SFA, na Unidade da Federação de origem do material genético;',
        'O material genético deve ser transportado em recipiente lacrado, devendo o número do lacre constar da Autorização Declaratória;',
        'O interessado deve comunicar a SFA de destino da partida, quando do recebimento do material, para inspeção fitossanitária;',
        'Estas exigências fitossanitárias só se aplicam a material genético;'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['CE', 'DF', 'RN'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'GO é área livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['MG'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente do municípios livres de Sigatoka Negra em MG: Águas Vermelhas, Alto Rio Doce, Araçaí, Aracitaba, Araçuaí, Araguari, Araporã, Baldim, Barão de Cocais, Barbacena, Belo Horizonte, Belo Vale, Betim, Bocaiúva, Bom Jesus do Amparo, Bonfim, Brumadinho, Buritizeiro, Cachoeira Dourada, Caetanópolis, Caeté, Campina Verde, Campos Altos, Canápolis, Capim Branco, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Confins, Contagem, Cordisburgo, Coronel Pacheco, Desterro do Melo, Divinésia, Dores do Turvo, Engenheiro Navarro, Ervália, Esmeraldas, Espinosa, Estrela do Sul, Florestal, Francisco Sá, Franscisco Dumont, Frutal, Funilândia, Guaraciama, Guarani, Guidoval, Guiricema, Gurinhatã, Ibirité, Igarapé, Indianópolis, Inhaúma, Ipiaçu, Iraí de Minas, Itabira, Itabirito, Itacarambi, Itaobim, Itapagipe, Itatiaiuçú, Ituiutaba, Iturama, Jaboticatubas, Jaíba, Janaúba, Januária, Jequitaí, Jequitibá, Jequitinhonha, Joaíma, João Pinheiro, Juatuba, Juiz de Fora, Lagamar, Lagoa Formosa, Lagoa Santa, Lassance, Limeira do Oeste, Manga, Mário Campos, Mateus Leme, Matias Cardoso, Mato Verde, Matozinhos, Medina, Mercês, Moeda, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Lima, Nova Ponte, Nova Porteirinha, Nova União, Oliveira Fortes, Pai Pedro, Paiva, Paracatu, Paraopeba, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Pedro Leopoldo, Perdizes, Piau, Pirapora, Piraúba, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Prudente de Morais, Raposos, Ribeirão das Neves, Rio Acima, Rio Manso, Rio Paranaíba, Rio Pomba, Rodeiro, Sabará, Sacramento, Santa Bárbara do Tugúrio, Santa Barbara, Santa Luzia, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Geraldo, São Gonçalo do Abaeté, São Gonçalo do Rio Abaixo, São Gotardo, São João das Missões, São Joaquim de Bicas, São José da Lapa, São Sebastião da Vargem Alegre, Sarzedo, Serra do Salitre, Sete Lagoas, Silveirânia, Tapira, Taquaraçú de Minas, Tocantins, Tupaciguara, Ubá, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia, Veríssimo, Vespasiano e Visconde do Rio Branco;',
        'Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['MS'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: ['PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['GO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente de GO, com exceção dos municípios de Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra ',
      part: ['frutos', 'flores'],
      orig: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      dest: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: ['PTV com a declaração adicional de que a partida é originária de área livre de Sigatoka Negra;',
        'A partida deve estar lacrada para transitar por AC, AL, AM, AP, MA, MG (exceto pelos municípios listados no item 6.1), MS (exceto pelos municípios listados no item 6.2), MT, PA, PE, PI, PR, RS, RJ, RO, RR, SC, SE, SP, TO e GO (somente nos municípios listados no ítem 7);',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Nas UFs de GO, MG e de MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n6.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n6.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      dest: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\";',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Para as UFs de GO, MG e de MS estas exigências só se aplicam a partida destinada a município livre de Sigatoka Negra: \n\n5.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['frutos', 'flores'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'OU Partida isenta de PTV, sendo porém PROIBIDO o trânsito por Área Livre de Sigatoka Negra, listadas no Item 2; OU PTV com a seguinte declaração adicional: \"A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra\", sendo permitido o trânsito por Área Livre de Sigatoka Negra;',
        'ÁREAS LIVRE DE SIGATOKA NEGRA: Unidades da Federação CE, DF, GO, PB, PI, RN, SE, bem como GO, exceto os municípios citados no item 3 e pelos municípios livres de Sigatoka Negra de MG e de MS: \na) Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \nb)Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.',
        'As bananas não podem transitar em cacho, em todo o território nacional;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento dos frutos;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['mudas'],
      orig: ['CE', 'DF', 'GO', 'RN'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['mudas'],
      orig: ['MG'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Alto Rio Doce, Araçaí, Aracitaba, Araçuaí, Araguari, Araporã, Baldim, Barão de Cocais, Barbacena, Belo Horizonte, Belo Vale, Betim, Bocaiúva, Bom Jesus do Amparo, Bonfim, Brumadinho, Buritizeiro, Cachoeira Dourada, Caetanópolis, Caeté, Campina Verde, Campos Altos, Canápolis, Capim Branco, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Confins, Contagem, Cordisburgo, Coronel Pacheco, Desterro do Melo, Divinésia, Dores do Turvo, Engenheiro Navarro, Ervália, Esmeraldas, Espinosa, Estrela do Sul, Florestal, Francisco Sá, Franscisco Dumont, Frutal, Funilândia, Guaraciama, Guarani, Guidoval, Guiricema, Gurinhatã, Ibirité, Igarapé, Indianópolis, Inhaúma, Ipiaçu, Iraí de Minas, Itabira, Itabirito, Itacarambi, Itaobim, Itapagipe, Itatiaiuçú, Ituiutaba, Iturama, Jaboticatubas, Jaíba, Janaúba, Januária, Jequitaí, Jequitibá, Jequitinhonha, Joaíma, João Pinheiro, Juatuba, Juiz de Fora, Lagamar, Lagoa Formosa, Lagoa Santa, Lassance, Limeira do Oeste, Manga, Mário Campos, Mateus Leme, Matias Cardoso, Mato Verde, Matozinhos, Medina, Mercês, Moeda, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Lima, Nova Ponte, Nova Porteirinha, Nova União, Oliveira Fortes, Pai Pedro, Paiva, Paracatu, Paraopeba, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Pedro Leopoldo, Perdizes, Piau, Pirapora, Piraúba, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Prudente de Morais, Raposos, Ribeirão das Neves, Rio Acima, Rio Manso, Rio Paranaíba, Rio Pomba, Rodeiro, Sabará, Sacramento, Santa Bárbara do Tugúrio, Santa Barbara, Santa Luzia, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Geraldo, São Gonçalo do Abaeté, São Gonçalo do Rio Abaixo, São Gotardo, São João das Missões, São Joaquim de Bicas, São José da Lapa, São Sebastião da Vargem Alegre, Sarzedo, Serra do Salitre, Sete Lagoas, Silveirânia, Tapira, Taquaraçú de Minas, Tocantins, Tupaciguara, Ubá, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia, Veríssimo, Vespasiano e Visconde do Rio Branco;.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['mudas'],
      orig: ['GO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente de GO, com exceção dos municípios de Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['mudas'],
      orig: ['MS'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;',
        'exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Estas exigências só se aplicam a partida proveniente de municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ]
    }, {
      idprag: 9,
      desc: 'DE área livre de Sigatoka Negra PARA área livre de Sigatoka Negra',
      part: ['mudas'],
      orig: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      dest: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'PTV com a Declaração Adicional constando que a partida é originária de área livre da Sigatoka Negra.',
        'A partida deve estar lacrada para transitar por AC, AM, AP, MA, MG (exceto pelos municípios listados no item 5.1), MS (exceto pelos municípios listados no item 5.2), MT, PA, PR, RS, RJ, RO, RR, SC, SP e TO;',
        'A partida deve estar livre de folhas de bananeira ou de parte da planta, no acondicionamento das mudas;',
        'Estas exigências não se aplicam às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Para as Ufs de MG e MS estas exigências só se aplicam a partida proveniente e destinada a município livre de Sigatoka Negra: \n\n5.1 -  Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba, Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\n5.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú, Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'Estas exigências só se aplicam a mudas não micropopagadas;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia'
      ]
    }, {
      idprag: 9,
      desc: 'DE área com ocorrência de Sigatoka Negra PARA área livre de Sigatoka Negra',
      part: ['mudas'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      dest: ['CE', 'DF', 'GO', 'MG', 'MS', 'RN'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;',
        'Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Para as UFs de MG e MS, esta proibição só se aplica a partida destinada a município livre de Sigatoka Negra:\n\n3.1 - Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo;\n\n3.2 - Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'GO é livre de Sigatoka Negra, EXCETO os seguintes municípios: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia.'
      ],
    }, {
      idprag: 9,
      desc: 'DE área com ocorrência de Sigatoka Negra PARA área com ocorrência de Sigatoka Negra',
      part: ['mudas'],
      orig: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RS', 'RJ', 'RO', 'RR', 'SE', 'SC', 'SP', 'TO'],
      prag: 'Pseudocercospora fijiensis (Mycosphaerella fijiensis)',
      exig: [
        'TRÂNSITO PROIBIDO para mudas convencionais. Esta proibição não se aplica à mudas micropopagadas;',
        'Esta proibição não se aplica a partida proveniente de município livre de Sigatoka Negra de MG e de MS: \n\na)Municípios livres de Sigatoka Negra de MG: Águas Vermelhas, Araçuaí, Araguari, Araporã, Bocaiúva, Buritizeiro, Cachoeira Dourada, Campina Verde, Campos Altos, Canápolis, Capinópolis, Capitão Enéias, Carmo do Paranaíba, Carneirinho, Cascalho Rico, Catuti, Centralina, Claro dos Poções, Engenheiro Navarro, Espinosa, Estrela do Sul, Francisco Sá, Franscisco Dumont, Frutal, Guaraciama, Gurinhatã, Indianópolis, Ipiaçu, Iraí de Minas, Itacarambi, Itaobim, Itapagipe, Ituiutaba,Iturama, Jaíba, Janaúba, Januária, Jequitaí, Jequitinhonha, Joaíma, João Pinheiro, Lagamar, Lagoa Formosa, Lassance, Limeira do Oeste, Manga, Matias Cardoso, Mato Verde, Medina, Monte Alegre de Minas, Monte Azul, Monte Carmelo, Montes Claros, Nova Ponte, Nova Porteirinha, Pai Pedro, Paracatu, Patos de Minas, Patrocínio, Pedra de Maria da Cruz, Perdizes, Pirapora, Ponto dos Volantes, Porteirinha, Prata, Presidente Olegário, Rio Paranaíba, Sacramento, Santa Rosa da Serra, Santa Vitória, Santo Antonio do Retiro, São Francisco, São Gonçalo do Abaeté, São Gotardo, São João das Missões, Serra do Salitre, Tapira, Tupaciguara, Uberaba, Uberlândia, Unaí, Varjão de Minas, Várzea da Palma, Vazante, Verdelândia e Veríssimo; \n\nb)Municípios livres de Sigatoka Negra de MS: Anaurilândia, Aparecida do Taboado, Bataguassú,Batayporã, Cassilândia, Chapadão do Sul, Inocência, Nova Andradina, Paranaíba,   Selvíria, Taquarussú e Três Lagoas;',
        'Esta proibição não se aplica às espécies Heliconia rostrata, Heliconia bihai, Heliconia augusta, Heliconia chartacea, Heliconia spathocircinada, Heliconia librata, Heliconia psittacorum cultivar Red Opal e Heliconia stricta;',
        'Municípios de GO com ocorrência de Sigatoka Negra: Amorinópolis, Aragarças, Arenópolis, Baliza, Bom Jardim de Goiás, Caiapônia, Diorama, Doverlândia, Fazenda Nova, Iporá, Israelândia, Ivolândia, Jaupaci, Jussara, Mineiros, Moiporá, Montes Claros de Goiás, Palestina de Goiás, Piranhas, Santa Fé de Goiás e Santa Rita do Araguaia;',
        'Esta proibição só se aplica a mudas não micropopagadas;'
      ]
    },

    //CANCRO CÍTRICO

    {
      idprag: 10,
      desc: 'DE UF de status fitossanitário desconhecido para Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga – ALP, Área sob Sistema de Mitigação de Risco - SMR e Área sob Erradicação',
      part: ['frutos', 'material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['AC', 'AP', 'MA'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: ['Proibida a emissão de PTV. TRÂNSITO PROIBIDO.']
    }, {
      idprag: 10,
      desc: 'DE UF de status fitossanitário desconhecido para Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga – ALP, Área sob Sistema de Mitigação de Risco - SMR e Área sob Erradicação',
      part: ['frutos', 'material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['PR'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: ['Se a partida tiver origem os municípios de Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: Proibida a emissão de PTV. TRÂNSITO PROIBIDO.']
    }, {
      idprag: 10,
      desc: 'DE Área Sem Ocorrência de Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco or Área sob Erradicação',
      part: ['frutos'],
      orig: ['AL', 'AM', 'BA', 'DF', 'ES', 'GO', 'MG', 'PB', 'PE', 'RO', 'RJ', 'SE', 'TO'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MT', 'MS', 'PA', 'PI', 'PB', 'PE', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"Os frutos são originários de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida\".',
        'Em GO, os municípios de Cachoeira Dourada, Inaciolândia e Rio Verde são Área sob SMR.',
        'Em GO, os municípios de Itajá, Itarumã, Jataí e Lagoa Santa são Área sob Erradicação.',
        'Em MG, os municípios de Campina Verde, Carneirinho, Formoso, Frutal, Iturama e Planura são Área sob SMR.'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Sem Ocorrência de Cancro Cítrico PARA Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['AL', 'AM', 'BA', 'DF', 'ES', 'GO', 'MG', 'PB', 'PE', 'RO', 'RJ', 'SE', 'TO'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MT', 'MS', 'PA', 'PI', 'PB', 'PE', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"O material de propagação é originário de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Sem Ocorrência de Cancro Cítrico PARA o Estado do Paraná',
      part: ['frutos'],
      orig: ['AL', 'AM', 'BA', 'DF', 'ES', 'GO', 'MG', 'PB', 'PE', 'RO', 'RJ', 'SE', 'TO'],
      dest: ['PR'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: \"Os frutos são originários de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida\".',
        'Em GO, os municípios de Cachoeira Dourada, Inaciolândia e Rio Verde são Área sob SMR.',
        'Em GO, os municípios de Itajá, Itarumã, Jataí e Lagoa Santa são Área sob Erradicação.',
        'Em MG, os municípios de Campina Verde, Carneirinho, Formoso, Frutal, Iturama e Planura são Área sob SMR.'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Sem Ocorrência de Cancro Cítrico PARA o Estado do Paraná',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['AL', 'AM', 'BA', 'DF', 'ES', 'GO', 'MG', 'PB', 'PE', 'RO', 'RJ', 'SE', 'TO'],
      dest: ['PR'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: \"O material de propagação é originário de Área Sem Ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), oficialmente reconhecida\".',
        'Em GO, os municípios de Cachoeira Dourada, Inaciolândia e Rio Verde são Área sob SMR.',
        'Em GO, os municípios de Itajá, Itarumã, Jataí e Lagoa Santa são Área sob Erradicação.',
        'Em MG, os municípios de Campina Verde, Carneirinho, Formoso, Frutal, Iturama e Planura são Área sob SMR.'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Livre de Cancro Cítrico PARA qualquer Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação',
      part: ['frutos'],
      orig: ['PA'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MT', 'MS', 'PA', 'PI', 'PB', 'PE', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"Os frutos são originários de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Livre de Cancro Cítrico PARA qualquer Área Sem Ocorrência, Área Livre de Praga, Área sob Sistema de Mitigação de Risco ou Área sob Erradicação',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['PA'],
      dest: ['AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MG', 'MT', 'MS', 'PA', 'PI', 'PB', 'PE', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"O material de propagação é originário de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE município não incluído nas áreas livres oficialmente reconhecidas PARA qualquer UF',
      part: ['frutos', 'material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['PA'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Proibida a emissão de PTV. TRÂNSITO PROIBIDO.'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Livre de Cancro Cítrico PARA o Estado do Paraná',
      part: ['frutos'],
      orig: ['PA'],
      dest: ['PR'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: \"Os frutos são originários de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área Livre de Cancro Cítrico PARA o Estado do Paraná',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['PA'],
      dest: ['PR'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Se a partida tiver como destino qualquer  município que NÃO seja Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná: PTV com a seguinte DA: \"O material de propagação é originário de Área Livre de Praga para o Cancro Cítrico (Xanthomonas citri subsp. citri) oficialmente reconhecida\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área de Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['CE', 'GO', 'MG', 'MT', 'MS', 'PI', 'RS', 'SP', 'SC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legislação específica em vigor\".',
        'Em GO, os municípios de Cachoeira Dourada, Inaciolândia e Rio Verde são Área sob SMR.',
        'Em MG, os municípios de Campina Verde, Carneirinho, Formoso, Frutal, Iturama e Planura são Área sob SMR.'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área de Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['PR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'SE A PARTIDA TIVER COMO ORIGEM UM DOS MUNICÍPIOS DE RISCO DESCONHECIDO (Adrianópolis, Agudos do Sul, Almirante Tamandaré, Araucária, Antonina, Balsa Nova, Bocaiuva do Sul, Campina Grande do Sul, Campo Largo, Campo Magro, Cerro Azul, Colombo, Contenda, Curitiba, Doutor Ulysses, Fazenda Rio Grande, Guaraqueçaba, Guaratuba, Itaperuçu, Mandirituba, Matinhos, Morretes, Paranaguá, Pinhais, Piraquara, Pontal do Paraná, Quatro Barras, Rio Branco do Sul, São José dos Pinhais, Tijucas do Sul e Tunas do Paraná): Proibida a emissão de PTV. TRÂNSITO PROIBIDO.',
        'SE A PARTIDA TIVER COMO ORIGEM OS DEMAIS MUNICÍPIOS, QUE SÃO ÁREAS DE MITIGAÇÃO DE RISCO: PTV com a seguinte DA: \"O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico (Xanthomonas citri subsp. citri) e foi produzido conforme preconiza a legislação específica em vigor\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Sistema de Manejo de Risco (SMR) de Cancro Cítrico PARA qualquer UF',
      part: ['frutos'],
      orig: ['CE', 'GO', 'MG', 'MT', 'MS', 'PI', 'RS', 'SP', 'SC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'Se a partida contém frutos infestados oriundos de imóvel sob Sistema de Mitigação de Risco (SMR), e tem como destino Indústria de suco, localizada em UF limítrofe, que não está localizada em ALP ou em Área Sem Ocorrência de Cancro Cítrico: \na)PTV com a seguinte DA: \"Frutos contaminados com Cancro Cítrico (Xanthomonas citri subsp. citri) destinados exclusivamente à indústria\". \nb)Os frutos devem ser transportados em veículo fechado ou coberto, e lacrado',
        'Se a partida NÃO contém frutos infestados e é oriunda de imóvel cadastrado no SMR para o Cancro Cítrico e tem como destino	UC ou indústria localizada em UF limítrofe:  \na) PTV com uma das seguintes DAs: \n- \"Os frutos foram produzidos em UP, de imóvel cadastrado no SMR para o Cancro Cítrico, que apresentou até um por cento de frutos com sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri) e se destinam a indústria\"; OU \n- \"Os frutos foram produzidos em UP, de imóvel cadastrado no SMR para o Cancro Cítrico, que apresentou até um por cento de frutos com sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri) e se destinam ao beneficiamento em Unidade de Consolidação\". \nb) Os frutos devem ser transportados em veículo fechado ou coberto e lacrado',
        'Se a partida for formada por frutos oriundos de imóvel sem ocorrência do Cancro Cítrico, localizado em Área sob SMR, com destino para UC ou indústria, localizada em qualquer UF: 	\na) PTV com uma das seguintes DAs: \n- \"Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob SMR, e se destinam a indústria\"; OU \n- \"Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob SMR, e se destinam ao beneficiamento em Unidade de Consolidação\". \nb) Os frutos devem ser transportados em veículo fechado ou coberto',
        'Para todas as demais situações de produtos oriundos de Área de SMR: \na) PTV com as seguintes DAs: \n- \"Os frutos são originários de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco (SMR) reconhecido oficialmente, foram higienizados por imersão em solução com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro Cítrico (Xanthomonas citri subsp. citri)\". \n- Se as embalagens descartáveis ou em caixas plásticas retornáveis forem higienizadas por PULVERIZAÇÃO, adicionar a seguinte DA: \"As caixas plásticas retornáveis foram higienizadas por pulverização em solução de cloreto de benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)\". \n- Se as embalagens descartáveis ou em caixas plásticas retornáveis forem higienizadas por IMERSÃO, adicionar a seguinte DA: \"As caixas plásticas retornáveis foram higienizadas por imersão em solução de cloreto de benzalcônio (amônio quaternário) 125 (cento e vinte e cinco) gramas/litro, na concentração de 0,1% (um décimo percentual)\" \nb) Os frutos devem ser transportados em veículo fechado ou coberto, seja para transporte a granel, em embalagens descartáveis ou em caixas plásticas retornáveis'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área sob Erradicação de Cancro Cítrico PARA qualquer UF',
      part: ['frutos'],
      orig: ['GO', 'RN', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com uma das seguintes DAs: \n -\"Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, foram higienizados com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e encontram-se livres de Xanthomonas citri subsp. citri\".\n -\"Os frutos são provenientes de plantas sadias de imóvel sob supervisão oficial, localizado em Área sob Erradicação, e se destinam à indústria\".\n -\"Os frutos são provenientes de imóvel sem ocorrência do Cancro Cítrico (Xanthomonas citri subsp. citri), localizado em Área sob Erradicação\".'
      ]
    }, {
      idprag: 10,
      desc: 'DE Área sob Erradicação de Cancro Cítrico PARA qualquer UF',
      part: ['material de propagação', 'mudas', 'estacas', 'gemas', 'plantas'],
      orig: ['GO', 'RN', 'RR'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Xanthomonas citri subsp. citri',
      exig: [
        'PTV com a seguinte DA: \"O material de propagação é proveniente de Área sob Erradicação e foi produzido em imóvel sem ocorrência de Cancro Cítrico (Xanthomonas citri subsp. citri), conforme preconiza a legislação específica vigente\".'
      ]
    },

    //MONILÍASE DO CACAUEIRO

    {
      idprag: 11,
      desc: 'DE Área com ocorrência de Monilíase PARA qualquer UF',
      part: ['frutos', 'material de propagação vegetativa', 'polpa in natura (não congelada)'],
      orig: ['AM'],
      dest: ['AC', 'AL', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Moniliophthora roreri',
      exig: [
        'TRÂNSITO PROIBIDO',
        'Obs: Polpa congelada tem trânsito livre'
      ]
    }, {
      idprag: 11,
      desc: 'DE Área com ocorrência de Monilíase PARA qualquer UF', // amêndoas
      part: ['amêndoas'],
      orig: ['AM'],
      dest: ['AC', 'AL', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Moniliophthora roreri',
      exig: [
        'Se a partida for de amêndoas não fermentadas ou não cumprem os requisitos do item abaixo: TRÂNSITO PROIBIDO',
        'Se a partida for de amêndoas fermentadas e secas de cacau, classificadas como Tipo I e II, procedente DE área sob quarentena PARA local sem ocorrência, TRÂNSITO LIVRE obedecendo as seguintes condiçoes: \na) As amêndoas devem estar acondicionadas em sacarias novas;  \nb) Carga deve estar acompanhada de laudo de classificação emitido por classificador credenciado pelo Mapa; \nc) Verificar lista de classificadores credenciados pelo Mapa - https://mapa-indicadores.agricultura.gov.br/publico/extensions/Qualidade_Vegetal/Qualidade_Vegetal.html .'
      ]
    }, {
      idprag: 11,
      desc: 'DE Área sem ocorrência de Monilíase PARA qualquer UF',
      part: ['amêndoas', 'frutos', 'material de propagação vegetativa', 'polpa in natura (não congelada)'],
      orig: ['AL', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Moniliophthora roreri',
      exig: [
        'TRÂNSITO LIVRE - Carga deve ser acompanhada de nota fiscal.'
      ]
    }, {
      idprag: 11,
      desc: 'DE UF with and sem ocorrência de Monilíase PARA qualquer UF',  //Acre
      part: ['frutos', 'material de propagação vegetativa', 'polpa in natura (não congelada)'],
      orig: ['AC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Moniliophthora roreri',
      exig: [
        'Se a partida for proveniente dos municípios Mâncio Lima, Cruzeiro do Sul, Porto Walter, Marechal Taumaturgo, Rodrigues Alves: TRÂNSITO PROIBIDO',
        'Se a partida for proveniente dos demais municípios do Acre: TRÂNSITO LIVRE - Carga deve ser acompanhada de nota fiscal',
        'Obs: Polpa congelada tem trânsito livre'
      ]
    },
    {
      idprag: 11,
      desc: 'DE UF com e sem ocorrência de Monilíase PARA qualquer UF',  //Acre
      part: ['amêndoas'],
      orig: ['AC'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Moniliophthora roreri',
      exig: [
        'Se a partida for de amêndoas não fermentadas ou que não cumprem os requisitos do item seguinte, e são proveniente dos municípios Mâncio Lima, Cruzeiro do Sul, Porto Walter, Marechal Taumaturgo, Rodrigues Alves: TRÂNSITO PROIBIDO',
        'Se a partida for de amêndoas fermentadas e secas de cacau, classificadas como Tipo I e II, procedente dos municípios Mâncio Lima, Cruzeiro do Sul, Porto Walter, Marechal Taumaturgo, Rodrigues Alves, TRÂNSITO LIVRE obedecendo as seguintes condiçoes: \na) As amêndoas devem estar acondicionadas em sacarias novas;  \nb) Carga deve estar acompanhada de laudo de classificação emitido por classificador credenciado pelo Mapa; \nc) Verificar lista de classificadores credenciados pelo Mapa - https://mapa-indicadores.agricultura.gov.br/publico/extensions/Qualidade_Vegetal/Qualidade_Vegetal.html .',
        'Se a partida for proveniente dos demais municípios do Acre: TRÂNSITO LIVRE - Carga deve ser acompanhada de nota fiscal'
      ]
    },

    //VASSOURA DE BRUXA DA MANDIOCA

    {
      idprag: 12,
      desc: 'DE UF sem presença de Rhizoctonia theobromae (Ceratobasidium theobromae) PARA qualquer UF',
      part: ['Materiais vegetais'],
      orig: ['AC', 'AL', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Rhizoctonia theobromae (Ceratobasidium theobromae)',
      exig: [
        `TRÂNSITO LIVRE`,
        `A Permissão de Trânsito de Vegetais - PTV é necessária no caso de a partida de plantas e partes de plantas hospedeiras da praga transitar em áreas com ocorrência, devendo este: 
I - ser transportado em embalagens lacradas; e
II - ser lacrado pelo Responsável Técnico ou pelo Órgão Estadual, ou Distrital de Defesa Sanitária Vegetal na Unidade Federativa de origem e o número do lacre informado na Permissão de Trânsito de Vegetais - PTV.`
      ]
    },
    {
      idprag: 12,
      desc: 'DE UF com presença de Rhizoctonia theobromae (Ceratobasidium theobromae), oriundo de municípios sem ocorrência, PARA quaquer UF',
      part: ['Materiais vegetais'],
      orig: ['AP', 'PA'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Rhizoctonia theobromae (Ceratobasidium theobromae)',
      exig: [
        `PTV, baseada em CFO ou CFOC, com a seguinte DA: \"A partida é originária de município sem ocorrência de Rhizoctonia theobromae, em Unidade Federativa com ocorrência, e encontra-se livre da praga\".`,
        `No caso da partida de plantas e partes de plantas hospedeiras da praga transitar em áreas com ocorrência, deverá esta: 
I - ser transportada em embalagens lacradas; e 
II - ser lacrada pelo Responsável Técnico ou pelo Órgão Estadual, ou Distrital de Defesa Sanitária Vegetal no município de origem e o número do lacre informado na Permissão de Trânsito de Vegetais - PTV.`
      ]
    },
    {
      idprag: 12,
      desc: 'DE UF com presença de Rhizoctonia theobromae (Ceratobasidium theobromae), oriundo de municípios com ocorrência, PARA qualquer UF',
      part: ['Materiais vegetais'],
      orig: ['AP', 'PA'],
      dest: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
      prag: 'Rhizoctonia theobromae (Ceratobasidium theobromae)',
      exig: [
        `Se a partida tiver como origem os municípios de Oiapoque, Calçoene, Amapá, Pracuúba, Tartarugalzinho e Pedra Branca do Amaparí no estado do Amapá, ou os município de Almeirim, Óbidos e Oriximiná, na área da
Terra Indígena do Parque do Tumucumaque no Estado do Pará, municípios de Almeirim, Óbidos e Oriximiná, na área da Terra Indígena do Parque do Tumucumaque: TRÂNSITO PROIBIDO.`
      ]
    },
  ];

export const legislacoes: Legislacao[] =
  [
    { "id": 1, "leg": "Portaria nº 776, de 12/03/2025", "link": "PORT776-2025.pdf" },
    { "id": 2, "leg": "Resolução nº 04, de 29/03/2019", "link": "RES04-2019.pdf" },
    { "id": 3, "leg": "Portaria SDA nº 780, de 06/04/2023", "link": "PORT780-2023.pdf" },
    { "id": 4, "leg": "Portaria MAPA nº 734, de 13/11/2024", "link": "PORT734-2024.pdf" },
    { "id": 5, "leg": "Portaria SDA nº 940, de 17/11/2023", "link": "PORT940-2023.pdf" },
    { "id": 6, "leg": "Portaria MAPA nº 627, de 10/11/2023", "link": "PORT627-2023.pdf" },
    { "id": 7, "leg": "Portaria SDA/MAPA n° 859, de 19/07/2023", "link": "PORT859-2023.pdf" },
    { "id": 8, "leg": "Resolução nº 05, de 31/10/2018", "link": "RES05-2018.pdf" },
    { "id": 9, "leg": "Instrução Normativa SDA n° 2, de 19/01/2018", "link": "IN02-2018.pdf" },
    { "id": 10, "leg": "Portaria SDA/MAPA n° 1503, de 19/12/2025", "link": "PORT1503-2025.pdf" },
    { "id": 11, "leg": "Instrução Normativa MAPA nº 8, de 17/04/2012", "link": "IN08-2012.pdf" },
    { "id": 12, "leg": "Instrução Normativa MAPA/SDA nº. 34, de 05/09/2017", "link": "IN34-2017.pdf" },
    { "id": 13, "leg": "Instrução Normativa MAPA nº 46, de 27/12/2010", "link": "IN46-2010.pdf" },
    { "id": 14, "leg": "Instrução Normativa MAPA nº 2, de 06/02/2014", "link": "IN02-2014.pdf" },
    { "id": 15, "leg": "Instrução Normativa nº 20, de 20/06/2013", "link": "IN20-2013.pdf" },
    { "id": 16, "leg": "Portaria SDA nº 317, de 21/05/2021", "link": "PORT317-2021.pdf" },
    { "id": 17, "leg": "Instrução Normativa SDA/MAPA nº 17, de 27/05/2009", "link": "IN17-2009.pdf" },
    { "id": 18, "leg": "Instrução Normativa SDA/MAPA nº 17, de 31/05/2005", "link": "IN17-2005.pdf" },
    { "id": 19, "leg": "Instrução Normativa nº 21, de 25/04/2018", "link": "IN21-2018.pdf" },
    { "id": 20, "leg": "Portaria SDA nº 703, de 21/11/2022", "link": "PORT703-2022.pdf" },
    { "id": 21, "leg": "Instrução Normativa nº 112, de 11/12/2020", "link": "IN112-2020.pdf" },
    { "id": 22, "leg": "Instrução Normativa nº 38, de 23/06/2008", "link": "IN38-2008.pdf" },
    { "id": 23, "leg": "Portaria SDA/MAPA nº 1.257, de 19/03/2025", "link": "PORT1257-2025.pdf" },
    { "id": 24, "leg": "Portaria SDA/MAPA nº 1.512, de 07/01/2026", "link": "PORT1512-2026.pdf" }

  ];

export const estados: Estado[] = [
  { estado: '', UF: '' },
  { estado: 'Acre', UF: 'AC', ibge: 12 },
  { estado: 'Alagoas', UF: 'AL', ibge: 27 },
  { estado: 'Amazonas', UF: 'AM', ibge: 13 },
  { estado: 'Amapá', UF: 'AP', ibge: 16 },
  { estado: 'Bahia', UF: 'BA', ibge: 29 },
  { estado: 'Ceará', UF: 'CE', ibge: 23 },
  { estado: 'Distrito Federal', UF: 'DF', ibge: 53 },
  { estado: 'Espirito Santo', UF: 'ES', ibge: 32 },
  { estado: 'Goiás', UF: 'GO', ibge: 52 },
  { estado: 'Maranhão', UF: 'MA', ibge: 21 },
  { estado: 'Minas Gerais', UF: 'MG', ibge: 31 },
  { estado: 'Mato Grosso do Sul', UF: 'MS', ibge: 50 },
  { estado: 'Mato Grosso', UF: 'MT', ibge: 51 },
  { estado: 'Pará', UF: 'PA', ibge: 15 },
  { estado: 'Paraíba', UF: 'PB', ibge: 25 },
  { estado: 'Pernambuco', UF: 'PE', ibge: 26 },
  { estado: 'Piauí', UF: 'PI', ibge: 22 },
  { estado: 'Paraná', UF: 'PR', ibge: 41 },
  { estado: 'Rio de janeiro', UF: 'RJ', ibge: 33 },
  { estado: 'Rio Grande do Norte', UF: 'RN', ibge: 24 },
  { estado: 'Rondônia', UF: 'RO', ibge: 11 },
  { estado: 'Roraima', UF: 'RR', ibge: 14 },
  { estado: 'Rio Grande do Sul', UF: 'RS', ibge: 43 },
  { estado: 'Santa Catarina', UF: 'SC', ibge: 42 },
  { estado: 'Sergipe', UF: 'SE', ibge: 28 },
  { estado: 'São Paulo', UF: 'SP', ibge: 35 },
  { estado: 'Tocantins', UF: 'TO', ibge: 17 },
];
