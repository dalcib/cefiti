// CEFiTI - Database

var dbVersion = 4;
var estados = [
  {
    "estado": "Acre",
    "UF": "AC",
    "ibge": 12
  },
  {
    "estado": "Alagoas",
    "UF": "AL",
    "ibge": 27
  },
  {
    "estado": "Amazonas",
    "UF": "AM",
    "ibge": 13
  },
  {
    "estado": "Amapá",
    "UF": "AP",
    "ibge": 16
  },
  {
    "estado": "Bahia",
    "UF": "BA",
    "ibge": 29
  },
  {
    "estado": "Ceará",
    "UF": "CE",
    "ibge": 23
  },
  {
    "estado": "Distrito Federal",
    "UF": "DF",
    "ibge": 53
  },
  {
    "estado": "Espirito Santo",
    "UF": "ES",
    "ibge": 32
  },
  {
    "estado": "Goiás",
    "UF": "GO",
    "ibge": 52
  },
  {
    "estado": "Maranhão",
    "UF": "MA",
    "ibge": 21
  },
  {
    "estado": "Minas Gerais",
    "UF": "MG",
    "ibge": 31
  },
  {
    "estado": "Mato Grosso do Sul",
    "UF": "MS",
    "ibge": 50
  },
  {
    "estado": "Mato Grosso",
    "UF": "MT",
    "ibge": 51
  },
  {
    "estado": "Pará",
    "UF": "PA",
    "ibge": 15
  },
  {
    "estado": "Paraíba",
    "UF": "PB",
    "ibge": 25
  },
  {
    "estado": "Pernambuco",
    "UF": "PE",
    "ibge": 26
  },
  {
    "estado": "Piauí",
    "UF": "PI",
    "ibge": 22
  },
  {
    "estado": "Paraná",
    "UF": "PR",
    "ibge": 41
  },
  {
    "estado": "Rio de janeiro",
    "UF": "RJ",
    "ibge": 33
  },
  {
    "estado": "Rio Grande do Norte",
    "UF": "RN",
    "ibge": 24
  },
  {
    "estado": "Rondônia",
    "UF": "RO",
    "ibge": 11
  },
  {
    "estado": "Roraima",
    "UF": "RR",
    "ibge": 14
  },
  {
    "estado": "Rio Grande do Sul",
    "UF": "RS",
    "ibge": 43
  },
  {
    "estado": "Santa Catarina",
    "UF": "SC",
    "ibge": 42
  },
  {
    "estado": "Sergipe",
    "UF": "SE",
    "ibge": 28
  },
  {
    "estado": "São Paulo",
    "UF": "SP",
    "ibge": 35
  },
  {
    "estado": "Tocantins",
    "UF": "TO",
    "ibge": 17
  }
];
var hospedeiros = [
  {
    "id": 100,
    "nomeSci": "Melia azedarach",
    "nomeVul": [
      "Cinamomo"
    ]
  },
  {
    "id": 103,
    "nomeSci": "Citrus spp.",
    "nomeVul": [
      "Citros"
    ]
  },
  {
    "id": 105,
    "nomeSci": "Cocos nucifera",
    "nomeVul": [
      "Coqueiro"
    ]
  },
  {
    "id": 106,
    "nomeSci": "Pouteria macrophylla",
    "nomeVul": [
      "Cutite"
    ]
  },
  {
    "id": 117,
    "nomeSci": "Fortunella spp.",
    "nomeVul": [
      "Fortunela"
    ]
  },
  {
    "id": 120,
    "nomeSci": "Artocarpus altilis",
    "nomeVul": [
      "Fruta Pão"
    ]
  },
  {
    "id": 122,
    "nomeSci": "Psidium guajava",
    "nomeVul": [
      "Goiaba"
    ]
  },
  {
    "id": 123,
    "nomeSci": "Psidium guineense",
    "nomeVul": [
      "Goiaba-araçá"
    ]
  },
  {
    "id": 125,
    "nomeSci": "Arenga pinnata",
    "nomeVul": [
      "Gomuto"
    ]
  },
  {
    "id": 126,
    "nomeSci": "Heliconia spp.",
    "nomeVul": [
      "Helicônia"
    ]
  },
  {
    "id": 127,
    "nomeSci": "Artocarpus integrifolia",
    "nomeVul": [
      "Jaca"
    ]
  },
  {
    "id": 128,
    "nomeSci": "Syzygium aqueum",
    "nomeVul": [
      "Jambo Branco (S.aqueum)",
      "Jambo D'água",
      "Jambosa"
    ]
  },
  {
    "id": 129,
    "nomeSci": "Syzygium jambos",
    "nomeVul": [
      "Jambo Amarelo",
      "Jambo Rosa (S. jambos)"
    ]
  },
  {
    "id": 130,
    "nomeSci": "Syzygium samarangense",
    "nomeVul": [
      "Jambo Branco (S.samarangense)",
      "Jambo Rosa (S. samarangese)"
    ]
  },
  {
    "id": 131,
    "nomeSci": "Syzygium malaccense",
    "nomeVul": [
      "Jambo Vermelho"
    ]
  },
  {
    "id": 133,
    "nomeSci": "Ziziphus jujuba",
    "nomeVul": [
      "Jujuba (Z. jujuba)",
      "Jujuba Chinesa"
    ]
  },
  {
    "id": 134,
    "nomeSci": "Ziziphus mauritiana",
    "nomeVul": [
      "Jujuba (Z. mauritiana)",
      "Maçã-de-pobre "
    ]
  },
  {
    "id": 137,
    "nomeSci": "Citrus aurantium",
    "nomeVul": [
      "Laranja Azeda",
      "Laranja Caipira",
      "Laranja da Terra"
    ]
  },
  {
    "id": 138,
    "nomeSci": "Citrus sinensis",
    "nomeVul": [
      "Laranja",
      "Laranja Doce"
    ]
  },
  {
    "id": 139,
    "nomeSci": "Licania sp.",
    "nomeVul": [
      "Licania"
    ]
  },
  {
    "id": 148,
    "nomeSci": "Malus sp.",
    "nomeVul": [
      "Maça"
    ]
  },
  {
    "id": 149,
    "nomeSci": "Carica papaya",
    "nomeVul": [
      "Mamão"
    ]
  },
  {
    "id": 151,
    "nomeSci": "Manihot esculenta",
    "nomeVul": [
      "Mandioca"
    ]
  },
  {
    "id": 152,
    "nomeSci": "Mangifera indica",
    "nomeVul": [
      "Manga"
    ]
  },
  {
    "id": 155,
    "nomeSci": "Bysonima crassifolia",
    "nomeVul": [
      "Murici ou Muruci"
    ]
  },
  {
    "id": 156,
    "nomeSci": "Murraya paniculata",
    "nomeVul": [
      "Murta"
    ]
  },
  {
    "id": 158,
    "nomeSci": "Azadirachta indica",
    "nomeVul": [
      "Nim"
    ]
  },
  {
    "id": 177,
    "nomeSci": "Capsicum annuum",
    "nomeVul": [
      "Pimenta Picante",
      "Pimenta-do-diabo"
    ]
  },
  {
    "id": 178,
    "nomeSci": "Capsicum chinense",
    "nomeVul": [
      "Pimenta-de-Cheiro"
    ]
  },
  {
    "id": 179,
    "nomeSci": "Eugenia uniflora",
    "nomeVul": [
      "Pitanga Vermelha"
    ]
  },
  {
    "id": 181,
    "nomeSci": "Citrus paradisi",
    "nomeVul": [
      "Pomelo",
      "Toranja"
    ]
  },
  {
    "id": 182,
    "nomeSci": "Poncirus spp.",
    "nomeVul": [
      "Poncirus"
    ]
  },
  {
    "id": 194,
    "nomeSci": "Spondias purpurea",
    "nomeVul": [
      "Seriguela"
    ]
  },
  {
    "id": 196,
    "nomeSci": "Sorghum bicolor",
    "nomeVul": [
      "Sorgo"
    ]
  },
  {
    "id": 200,
    "nomeSci": "Theobroma spp.",
    "nomeVul": [
      "Theobroma spp"
    ]
  },
  {
    "id": 202,
    "nomeSci": "Licopersicum esculentum",
    "nomeVul": [
      "Tomate"
    ]
  },
  {
    "id": 205,
    "nomeSci": "Vitis spp. e seus híbridos",
    "nomeVul": [
      "Uva",
      "Videira e seus híbridos"
    ]
  },
  {
    "id": 23,
    "nomeSci": "Syzygium cumini",
    "nomeVul": [
      "Ameixa-roxa"
    ]
  },
  {
    "id": 26,
    "nomeSci": "Terminalia catappa",
    "nomeVul": [
      "Amendoeira",
      "Sete Copas"
    ]
  },
  {
    "id": 28,
    "nomeSci": "Eugenia stipitata",
    "nomeVul": [
      "Araçá-Boi"
    ]
  },
  {
    "id": 29,
    "nomeSci": "Calycolpus goetheanus",
    "nomeVul": [
      "Araçapeua"
    ]
  },
  {
    "id": 3,
    "nomeSci": "Chrysophyllum cainito",
    "nomeVul": [
      "Abiu (C. cainito)",
      "Bilimbi (C. cainito)",
      "Caimito",
      "Carambola amarela (C. cainito)"
    ]
  },
  {
    "id": 30,
    "nomeSci": "Manilkara zapota",
    "nomeVul": [
      "Arapaju",
      "Maçaranduba",
      "Mararaju",
      "Sapoti",
      "Sapotilha"
    ]
  },
  {
    "id": 39,
    "nomeSci": "Garcinia dulcis",
    "nomeVul": [
      "Bacupari"
    ]
  },
  {
    "id": 4,
    "nomeSci": "Pouteria caimito",
    "nomeVul": [
      "Abiu (P. cainito)"
    ]
  },
  {
    "id": 41,
    "nomeSci": "Musa spp.",
    "nomeVul": [
      "Banana"
    ]
  },
  {
    "id": 42,
    "nomeSci": "Citrus reticulata",
    "nomeVul": [
      "Bergamota",
      "Mandarina,",
      "Mexerica",
      "Ponkan",
      "Tangerina"
    ]
  },
  {
    "id": 5,
    "nomeSci": "Acacia spp.",
    "nomeVul": [
      "Acácia",
      "Angico",
      "Jurema",
      "Unha-de-gato"
    ]
  },
  {
    "id": 52,
    "nomeSci": "Averrhoa bilimbi",
    "nomeVul": [
      "Bilimbi (A. bilimbi)",
      "Carambola Amarela (A. bilimbi)",
      "Limão Cayena"
    ]
  },
  {
    "id": 53,
    "nomeSci": "Rollinia omucosa",
    "nomeVul": [
      "Biribá"
    ]
  },
  {
    "id": 68,
    "nomeSci": "Spondias lutea",
    "nomeVul": [
      "Cajá (S. lutea)",
      "Cajá-mirim (S. lutea)",
      "Cajazeiro (S. lutea)",
      "Taperebá (S. lutea)"
    ]
  },
  {
    "id": 69,
    "nomeSci": "Spondias mombin",
    "nomeVul": [
      "Cajá (S. mombin)",
      "Cajá-mirim (S. mombin)",
      "Cajazeiro (S. mombin)",
      "Taperebá (S. mombin)"
    ]
  },
  {
    "id": 70,
    "nomeSci": "Anacardium occidentale",
    "nomeVul": [
      "Caju"
    ]
  },
  {
    "id": 71,
    "nomeSci": "Averrhoa carambola",
    "nomeVul": [
      "Carambola"
    ]
  },
  {
    "id": 8,
    "nomeSci": "Malpighia emarginata",
    "nomeVul": [
      "Acerola (M. emarginata)"
    ]
  },
  {
    "id": 9,
    "nomeSci": "Chrysobalanus icaco",
    "nomeVul": [
      "Ajuru"
    ]
  }
];
var legislacoes = [
  {
    "id": "IN02-2014",
    "leg": "Instrução Normativa MAPA nº 2",
    "data": "06/02/2014"
  },
  {
    "id": "IN02-2018",
    "leg": "Instrução Normativa SDA n° 2",
    "data": "19/01/2018"
  },
  {
    "id": "IN08-2012",
    "leg": "Instrução Normativa MAPA nº 8",
    "data": "17/04/2012"
  },
  {
    "id": "IN112-2020",
    "leg": "Instrução Normativa nº 112",
    "data": "11/12/2020"
  },
  {
    "id": "IN17-2005",
    "leg": "Instrução Normativa SDA/MAPA nº 17",
    "data": "31/05/2005"
  },
  {
    "id": "IN17-2009",
    "leg": "Instrução Normativa SDA/MAPA nº 17",
    "data": "27/05/2009"
  },
  {
    "id": "IN20-2013",
    "leg": "Instrução Normativa nº 20",
    "data": "20/06/2013"
  },
  {
    "id": "IN21-2018",
    "leg": "Instrução Normativa nº 21",
    "data": "25/04/2018"
  },
  {
    "id": "IN28-2016",
    "leg": "Instrução Normativa nº 28",
    "data": "25/08/2016"
  },
  {
    "id": "IN34-2017",
    "leg": "Instrução Normativa MAPA/SDA nº. 34",
    "data": "05/09/2017"
  },
  {
    "id": "IN38-2008",
    "leg": "Instrução Normativa nº 38",
    "data": "23/06/2008"
  },
  {
    "id": "IN46-2010",
    "leg": "Instrução Normativa MAPA nº 46",
    "data": "27/12/2010"
  },
  {
    "id": "PORT1257-2025",
    "leg": "Portaria SDA/MAPA nº 1.257",
    "data": "19/03/2025"
  },
  {
    "data": "04/07/2025",
    "id": "PORT1326-2025",
    "leg": "Portaria SDA nº 1326"
  },
  {
    "id": "PORT1503-2025",
    "leg": "Portaria SDA/MAPA n° 1503",
    "data": "19/12/2025"
  },
  {
    "id": "PORT1512-2026",
    "leg": "Portaria SDA/MAPA nº 1.512",
    "data": "07/01/2026"
  },
  {
    "id": "PORT317-2021",
    "leg": "Portaria SDA nº 317",
    "data": "21/05/2021"
  },
  {
    "id": "PORT627-2023",
    "leg": "Portaria MAPA nº 627",
    "data": "10/11/2023"
  },
  {
    "id": "PORT703-2022",
    "leg": "Portaria SDA nº 703",
    "data": "21/11/2022"
  },
  {
    "id": "PORT734-2024",
    "leg": "Portaria MAPA nº 734",
    "data": "13/11/2024"
  },
  {
    "id": "PORT776-2025",
    "leg": "Portaria nº 776",
    "data": "12/03/2025"
  },
  {
    "id": "PORT780-2023",
    "leg": "Portaria SDA nº 780",
    "data": "06/04/2023"
  },
  {
    "id": "PORT859-2023",
    "leg": "Portaria SDA/MAPA n° 859",
    "data": "19/07/2023"
  },
  {
    "id": "PORT940-2023",
    "leg": "Portaria SDA nº 940",
    "data": "17/11/2023"
  },
  {
    "id": "RES04-2019",
    "leg": "Resolução nº 04",
    "data": "29/03/2019"
  },
  {
    "id": "RES05-2018",
    "leg": "Resolução nº 05",
    "data": "31/10/2018"
  }
];
var pragas = [
  {
    "id": 4,
    "prag": "BSV e CMV",
    "pragc": "BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS",
    "hosp": [
      41
    ],
    "files": [
      "IN46-2010"
    ]
  },
  {
    "id": 1,
    "prag": "Bactrocera carambolae",
    "pragc": "MOSCA-DA-CARAMBOLA",
    "hosp": [
      70,
      125,
      120,
      127,
      52,
      71,
      29,
      177,
      149,
      9,
      137,
      181,
      42,
      138,
      179,
      39,
      202,
      8,
      152,
      30,
      122,
      69,
      68,
      194,
      128,
      129,
      131,
      130,
      26,
      133,
      134,
      155,
      178,
      3,
      28,
      139,
      4,
      106,
      123,
      53,
      23
    ],
    "files": [
      "PORT776-2025",
      "RES04-2019",
      "PORT780-2023",
      "PORT734-2024",
      "PORT940-2023",
      "PORT627-2023",
      "PORT859-2023",
      "RES05-2018",
      "IN02-2018",
      "PORT1503-2025"
    ]
  },
  {
    "id": 7,
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "pragc": "HLB",
    "hosp": [
      103,
      117,
      182,
      156
    ],
    "files": [
      "PORT1326-2025"
    ]
  },
  {
    "id": 11,
    "prag": "Moniliophthora roreri",
    "pragc": "MONILÍASE",
    "hosp": [
      200
    ],
    "files": [
      "PORT703-2022",
      "IN112-2020",
      "IN38-2008"
    ]
  },
  {
    "id": 6,
    "prag": "Neonectria ditissima (Neonectria galligena)",
    "pragc": "CANCRO EUROPEU DAS POMÁCEAS",
    "hosp": [
      148
    ],
    "files": [
      "IN20-2013"
    ]
  },
  {
    "id": 9,
    "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "pragc": "SIGATOKA NEGRA",
    "hosp": [
      41,
      126
    ],
    "files": [
      "IN17-2005"
    ]
  },
  {
    "id": 8,
    "prag": "Ralstonia solanacearum raça 2",
    "pragc": "MOKO-DA-BANANEIRA",
    "hosp": [
      41,
      126
    ],
    "files": [
      "IN17-2009"
    ]
  },
  {
    "id": 12,
    "prag": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
    "pragc": "VASSOURA DE BRUXA DA MANDIOCA",
    "hosp": [
      151
    ],
    "files": [
      "PORT1257-2025",
      "PORT1512-2026"
    ]
  },
  {
    "id": 2,
    "prag": "Schizotetranychus hindustanicus",
    "pragc": "ÁCARO HINDU",
    "hosp": [
      105,
      158,
      196,
      5,
      100,
      103
    ],
    "files": [
      "IN08-2012"
    ]
  },
  {
    "id": 3,
    "prag": "Sternochetus mangiferae",
    "pragc": "GORGULHO DA MANGA",
    "hosp": [
      152
    ],
    "files": [
      "IN34-2017"
    ]
  },
  {
    "id": 5,
    "prag": "Xanthomonas campestris pv. viticola",
    "pragc": "CANCRO-DA-VIDEIRA",
    "hosp": [
      205
    ],
    "files": [
      "IN02-2014"
    ]
  },
  {
    "id": 10,
    "prag": "Xanthomonas citri subsp. citri",
    "pragc": "CANCRO CÍTRICO",
    "hosp": [
      103,
      117,
      182
    ],
    "files": [
      "IN21-2018"
    ]
  }
];
var rules = [
  {
    "prag": "BSV e CMV",
    "desc": "Trânsito de mudas de bananeira entre quaisquer áreas",
    "status_origem": [
      "Todas as Áreas"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "mudas"
    ],
    "exig": [
      "O trânsito de mudas de bananeira só é permitido com a Permissão de Trânsito de Vegetais (PTV).",
      "A PTV deverá estar embasada em CFO/CFOC contendo a seguinte Declaração Adicional: 'A partida encontra-se livre dos vírus Banana streak virus (BSV) e Cucumber mosaic virus (CMV), de acordo com o laudo laboratorial [nº do laudo], [nome do laboratório] - [município e UF de localização do laboratório]'."
    ],
    "leg": "IN MAPA Nº 46/2010, Art. 10 e Art. 13"
  },
  {
    "prag": "Bactrocera carambolae",
    "desc": "De Área com Ocorrência (sob quarentena) para qualquer destino",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "TRÂNSITO PROIBIDO, pois são proibidas a saída e a certificação fitossanitária de origem de frutos hospedeiros de áreas sob quarentena.",
      "EXCEÇÃO 1: Trânsito permitido para frutos oriundos de locais em Sistema de Mitigação de Risco (SMR) reconhecido pelo DSV, acompanhados de Certificação Fitossanitária de Origem (CFO) e Permissão de Trânsito de Vegetais (PTV), desde que aprovado tratamento quarentenário para a praga.",
      "EXCEÇÃO 2: Trânsito permitido para frutos oriundos de locais de produção livres de Bactrocera carambolae (ambientes protegidos e cadastrados), expedidos com CFO e PTV.",
      "O envio que transitar por área sob quarentena ou área transiente deverá estar acondicionado em embalagens que não permitam o contato com a praga, transportado em veículos fechados ou com tela de malha de no máximo 2 mm. O veículo deverá ser lacrado pelo Órgão Estadual na entrada e ter o lacre removido na saída, mediante inspeção."
    ],
    "leg": "Portaria MAPA Nº 776/2025, Art. 19, II; Art. 20, IV e V; Art. 21, §2º"
  },
  {
    "prag": "Bactrocera carambolae",
    "desc": "De Zona Tampão para qualquer destino",
    "status_origem": [
      "Zona Tampão"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "O trânsito é PERMITIDO, por meio de emissão de Certificação Fitossanitária de Origem (CFO) e Permissão de Trânsito de Vegetais (PTV).",
      "O envio que transitar em áreas sob quarentena ou área transiente deverá obedecer o uso de embalagens seguras, veículos fechados ou com tela de 2mm, além da lacração na entrada e deslacração na saída da área sob risco."
    ],
    "leg": "Portaria MAPA Nº 776/2025, Art. 20, inciso III; Art. 21, §2º"
  },
  {
    "prag": "Bactrocera carambolae",
    "desc": "De municípios sem ocorrência/tampão localizados em UFs com ocorrência",
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "leg": "Portaria MAPA Nº 776/2025, Art. 21",
    "status_origem": [
      "Área Sem Registro de UF Com Ocorrência"
    ],
    "exig": [
      "O trânsito é PERMITIDO, por meio de emissão de Certificação Fitossanitária de Origem (CFO) e Permissão de Trânsito de Vegetais (PTV).",
      "O envio que transitar em áreas sob quarentena ou transiente deverá transitar em embalagens e veículos adequados acompanhados de lacres do Órgão Defesa Sanitária Vegetal, com Declaração Adicional que os frutos são provenientes de Área Erradicada, Área Transiente Erradicada, Zona Tampão, SMR reconhecido pelo DSV ou Locais Livres reconhecidos pelo DSV."
    ]
  },
  {
    "prag": "Bactrocera carambolae",
    "desc": "De UF sem ocorrência para UF sem ocorrência",
    "part": [
      "frutos"
    ],
    "exig": [
      "TRÂNSITO LIVRE. A certificação fitossanitária de origem (CFO/CFOC) e a PTV são dispensadas, desde que a carga não transite por área com ocorrência da praga.",
      "Caso transite por área sob risco, será EXIGIDA PTV e o transporte seguro com embalagens/veículos de proteção adequadas (tela 2mm) e controle via lacres do órgão estadual.",
      "Deverá constar obrigatoriamente na PTV emitida a Declaração Adicional: \"A partida foi produzida em UF sem ocorrência de Bactrocera carambolae\"."
    ],
    "leg": "Portaria MAPA Nº 776/2025, Art. 18; Art. 21",
    "status_destino": [
      "Todas as Áreas"
    ],
    "status_origem": [
      "UF Sem Registro"
    ]
  },
  {
    "prag": "Bactrocera carambolae",
    "desc": "De UF sem ocorrência para UF com ocorrência",
    "status_origem": [
      "UF Sem Registro"
    ],
    "status_destino": [
      "Área Com Ocorrência",
      "Zona Tampão",
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "A CFO/CFOC é dispensada, mas é EXIGIDA PTV por ser lote destinado a Unidade Federativa com ocorrência da praga.",
      "Se transitar em áreas sob risco severo, exigências de telas e lacres se aplicam.",
      "Deverá constar obrigatoriamente na PTV emitida a Declaração Adicional: \"A partida foi produzida em UF sem ocorrência de Bactrocera carambolae\"."
    ],
    "leg": "Portaria MAPA Nº 776/2025, Art. 21"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "De municípios com ocorrência de HLB e aqueles limítrofes dentro da mesma UF para município sem registro (Frutos de citros)",
    "status_origem": [
      "Área Com Ocorrência",
      "Zona Tampão"
    ],
    "status_destino": [
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "O trânsito interestadual deve ser amparado por PTV (baseado em CFO/CFOC) com a Declaração Adicional: \"Os frutos foram submetidos à escovação e ao beneficiamento primário na origem para retirada de restos vegetais, qual seja, totalmente isentos de folhas e ramos de plantas cítricas\".",
      "Obs: A etapa de escovação não é obrigatória para frutos de tangerina Ponkan (Citrus reticulata Blanco)."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 21 e Art. 23, inciso I"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "De município sem ocorrência (em UF com ocorrência) para Área Sem Registro (Frutos)",
    "status_origem": [
      "Área Sem Registro de UF Com Ocorrência"
    ],
    "status_destino": [
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "O trânsito interestadual deve ser amparado por PTV (baseado em CFO/CFOC) com a Declaração Adicional: \"A partida é originária de município sem ocorrência de HLB, em UF com ocorrência, e encontra-se livre da praga\"."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 23, inciso II"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "Trânsito de material de propagação de UF Sem Ocorrência",
    "status_origem": [
      "Área Sem Registro"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "material de propagação vegetativa"
    ],
    "exig": [
      "O trânsito deve ser amparado por PTV com a Declaração Adicional: \"O material de propagação é originário de UF sem ocorrência de HLB, foi produzido em ambiente protegido e encontra-se livre da praga\".",
      "O transporte deve ser realizado em caminhão com carroceria fechada ou com tela antiafídica."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 25 e Art. 28"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "Trânsito de material de propagação de UF com Ocorrência",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro de UF Com Ocorrência"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "material de propagação vegetativa"
    ],
    "exig": [
      "O trânsito deve ser amparado por PTV (baseado em CFO/CFOC) com a Declaração Adicional: \"O material de propagação é originário de UF com ocorrência de HLB, foi produzido em ambiente protegido e encontra-se livre da praga\".",
      "O transporte deve ser realizado em caminhão com carroceria fechada ou com tela antiafídica."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 26 e Art. 28"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "Trânsito de Murraya paniculata",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro de UF Com Ocorrência"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "material de propagação vegetativa",
      "sementes",
      "frutos"
    ],
    "exig": [
      "Fica PROIBIDO o trânsito de plantas ou partes de plantas de Murraya paniculata (Murta), provenientes de UF com ocorrência de HLB."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 24"
  },
  {
    "prag": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "desc": "Trânsito de Sementes",
    "status_origem": [
      "Todas as Áreas"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "sementes"
    ],
    "exig": [
      "TRÂNSITO LIVRE no território nacional para sementes botânicas de plantas hospedeiras de HLB, inclusive daquelas utilizadas para a produção de porta-enxertos."
    ],
    "leg": "Portaria SDA/MAPA Nº 1.326/2025, Art. 27"
  },
  {
    "prag": "Moniliophthora roreri",
    "desc": "Trânsito de amêndoas fermentadas e secas de cacau de Área sob Quarentena (Com Ocorrência)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sob Quarentena"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "amêndoas"
    ],
    "exig": [
      "O trânsito é PERMITIDO para amêndoas de cacau fermentadas e secas Tipo I e II, desde que estas sejam acondicionadas em sacarias novas e acompanhadas por laudo de classificação emitido por classificador credenciado pelo MAPA, visando a não disseminação da praga por embalagens contaminadas."
    ],
    "leg": "IN MAPA Nº 112/2020, Art. 12, §3º"
  },
  {
    "prag": "Moniliophthora roreri",
    "desc": "Trânsito de material hospedeiro sensível de Área sob Quarentena (Com Ocorrência)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sob Quarentena"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos",
      "material de propagação vegetativa"
    ],
    "exig": [
      "Trânsito PROIBIDO. Os artigos regulamentados só podem ser comercializados quando desinfestados oficialmente."
    ],
    "leg": "IN MAPA Nº 112/2020, Art. 12, §1º e §2º"
  },
  {
    "prag": "Neonectria ditissima (Neonectria galligena)",
    "desc": "De UF com Ocorrência para qualquer destino (Frutos)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Permissão de Trânsito de Vegetais (PTV) embasada em CFO/CFOC com a seguinte Declaração Adicional: 'Na unidade de produção e Unidade de Consolidação - UC foram adotados os procedimentos de controle e prevenção previstos nesta norma e os frutos não apresentam sintomas de Neonectria galligena'."
    ],
    "leg": "IN MAPA Nº 20/2013, Art. 7º, § 2º"
  },
  {
    "prag": "Neonectria ditissima (Neonectria galligena)",
    "desc": "De UF com Ocorrência para qualquer destino (Material propagativo, exceto in vitro)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "material de propagação vegetativa"
    ],
    "exig": [
      "Permissão de Trânsito de Vegetais (PTV) embasada em CFO/CFOC com a seguinte Declaração Adicional: 'A Unidade de produção foi inspecionada oficialmente durante o período de produção e não foi constatada a presença de sintomas de infecção pela praga Neonectria galligena'.",
      "Exceção: O trânsito de material in vitro é LIVRE."
    ],
    "leg": "IN MAPA Nº 20/2013, Art. 7º, § 3º"
  },
  {
    "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "desc": "De Área Com Ocorrência para UF Sem Ocorrência ou Área Livre (Frutos)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "UF Sem Registro",
      "Área Livre de Praga"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Trânsito PROIBIDO.",
      "Em qualquer caso, as bananas não podem transitar em cacho em todo o território nacional e as partidas devem ser acondicionadas de forma isenta de folhas ou pedaços de folhas da bananeira."
    ],
    "leg": "IN MAPA Nº 17/2005, Art. 2º"
  },
  {
    "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "desc": "De Área sob SMR para qualquer destino (Frutos)",
    "status_origem": [
      "Área de SMR"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Trânsito PERMITIDO. PTV embasada em CFO/CFOC com a DA: 'A partida é originária de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco para Sigatoka Negra'.",
      "Em qualquer caso, as bananas não podem transitar em cacho em todo o território nacional e as partidas devem ser acondicionadas de forma isenta de folhas ou pedaços de folhas da bananeira."
    ],
    "leg": "IN MAPA Nº 17/2005, Art. 2º, inc. VI e Anexo II, item 6.5.1"
  },
  {
    "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "desc": "De Área Com Ocorrência para Área com Ocorrência (Frutos)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Área Com Ocorrência"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Trânsito PERMITIDO. Vedada a passagem por Área Livre ou UF sem ocorrência sem carga lacrada garantindo não disseminação.",
      "Em qualquer caso, as bananas não podem transitar em cacho em todo o território nacional e as partidas devem ser acondicionadas de forma isenta de folhas ou pedaços de folhas da bananeira."
    ],
    "leg": "IN MAPA Nº 17/2005, Art. 2º, inc. V e Anexo I, item 5.4"
  },
  {
    "prag": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "desc": "Trânsito de mudas não micropropagadas oriundas de áreas infestadas",
    "status_origem": [
      "Área Com Ocorrência",
      "Área de SMR"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "mudas"
    ],
    "exig": [
      "Trânsito PROIBIDO para mudas não micropropagadas que não sejam de Área Livre de Sigatoka.",
      "EXCEÇÃO para micropropagadas: permitidas se in vitro ou pré-aclimatadas e tratadas com fungicida 10 dias antes da expedição.",
      "As exigências não se aplicam a mudas das espécies Heliconia rostrata, H. bihai, H. augusta, H. chartacea, H. spathocircinada, H. librata, H. psittacorum cultivar Red Opal e H. stricta."
    ],
    "leg": "IN MAPA Nº 17/2005, Art. 3º e 4º"
  },
  {
    "prag": "Ralstonia solanacearum raça 2",
    "desc": "De Área Com Ocorrência para qualquer destino (Mudas)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "mudas",
      "rizomas"
    ],
    "exig": [
      "Trânsito PROIBIDO.",
      "EXCEÇÃO: Permitido se in vitro OU se micropropagadas sem contato com solo.",
      "EXCEÇÃO 2: É permitido o trânsito (por exemplo, com fins de pesquisa) condicionado à Autorização da Área de Sanidade Vegetal da Superintendência Federal de Agricultura, Pecuária e Abastecimento (SFA) da UF de origem, sendo a partida obrigatoriamente transportada em recipiente lacrado.",
      "Para exceções, exigir PTV fundamentada em CFO com DA: 'As mudas encontram-se livres de Ralstonia solanacearum raça 2.' (veículo deverá ser lacrado)."
    ],
    "leg": "IN MAPA Nº 17/2009, Art. 3º e 4º"
  },
  {
    "prag": "Ralstonia solanacearum raça 2",
    "desc": "De ALP Moko (Área Livre de Praga) para qualquer destino (Mudas)",
    "status_origem": [
      "Área Livre de Praga (ALP)",
      "Área Livre de Praga"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "mudas",
      "rizomas"
    ],
    "exig": [
      "Trânsito PERMITIDO acompanhado de PTV fundamentada em CFO com a DA: 'As mudas foram produzidas em Área Livre de Ralstonia solanacearum raça 2, oficialmente reconhecida pelo Ministério da Agricultura, Pecuária e Abastecimento.' (Carga lacrada)."
    ],
    "leg": "IN MAPA Nº 17/2009, Art. 5º"
  },
  {
    "prag": "Ralstonia solanacearum raça 2",
    "desc": "De Área Com Ocorrência para ALP ou UF sem ocorrência (Frutos)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Área Livre de Praga (ALP)",
      "Área Livre de Praga",
      "UF Sem Registro"
    ],
    "part": [
      "frutos",
      "inflorescências"
    ],
    "exig": [
      "Para ALP Moko: PTV + DA 'Os frutos ou inflorescências foram produzidos sob aplicação de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga... (SMR)'.",
      "Para UF sem ocorrência: PTV embasada em CFO contendo DA de que não foi observada presença na UP nos últimos 12 meses OU produzidos sob SMR."
    ],
    "leg": "IN MAPA Nº 17/2009, Art. 7º e 9º"
  },
  {
    "prag": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
    "desc": "De UF Sem Registro para qualquer destino",
    "status_origem": [
      "UF Sem Registro"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "plantas",
      "partes de plantas"
    ],
    "exig": [
      "Certificação de origem (CFO/CFOC) e PTV dispensadas.",
      "EXCEÇÃO: PTV é necessária se transitar por áreas com ocorrência, exigindo também embalagem lacrada e lacre relatado."
    ],
    "leg": "Portaria SDA/MAPA Nº 1257/2025, Art. 5º"
  },
  {
    "prag": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
    "desc": "De Municípios sem ocorrência localizados em UF com ocorrência",
    "status_origem": [
      "Área Sem Registro"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "plantas",
      "partes de plantas"
    ],
    "exig": [
      "Trânsito interestadual PERMITIDO com PTV baseada em CFO/CFOC.",
      "DA obrigatória: 'A partida é originária de município sem ocorrência de Rhizoctonia theobromae, em Unidade Federativa com ocorrência, e encontra-se livre da praga'.",
      "Se transitar por área com ocorrência: embalagens fechadas e lacradas."
    ],
    "leg": "Portaria SDA/MAPA Nº 1257/2025, Art. 6º"
  },
  {
    "prag": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
    "desc": "De Área Com Ocorrência para qualquer destino",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "plantas",
      "partes de plantas"
    ],
    "exig": [
      "Trânsito PROIBIDO."
    ],
    "leg": "Portaria SDA/MAPA Nº 1257/2025, Art. 7º"
  },
  {
    "prag": "Schizotetranychus hindustanicus",
    "desc": "De Área com Ocorrência para UF Sem Registro (frutos de Citrus spp. e frutos secos e descascados de Cocos nucifera)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Trânsito PERMITIDO para frutos de Citrus spp. mediante beneficiamento e inspeção: \n - CFO/CFOC com DA: 'Os frutos foram imersos em solução de hipoclorito de sódio a 200 ppm por 10 minutos, seguido de lavagem com solução de detergente neutro, escovação, secagem e aplicação de cera e encontram-se livres do Ácaro Hindu dos Citros'. \n - PTV com DA: 'A partida atende às exigências constantes da IN MAPA Nº 08/2012 e encontra-se livre do Ácaro Hindu dos Citros'.",
      "Para frutos secos e descascados de Cocos nucifera o trânsito é LIVRE.",
      "Para frutos de outras espécies que não sejam Citrus spp. ou Cocos nucifera o trânsito é PROIBIDO."
    ],
    "leg": "IN MAPA Nº 08/2012, Art. 1º, Parágrafo único e Art. 2º"
  },
  {
    "prag": "Schizotetranychus hindustanicus",
    "desc": "De Área com Ocorrência para UF Sem Registro (outras espécies e partes)",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "Área Sem Registro"
    ],
    "part": [
      "plantas",
      "mudas",
      "raízes",
      "caules",
      "ramos",
      "folhas",
      "flores"
    ],
    "exig": [
      "TRÂNSITO PROIBIDO.",
      "Exceção: O trânsito de material in vitro e madeira serrada é permitido."
    ],
    "leg": "IN MAPA Nº 08/2012, Art. 1º"
  },
  {
    "prag": "Sternochetus mangiferae",
    "desc": "De Área com Ocorrência (Zona Interditada) para áreas indenes",
    "status_origem": [
      "Área Com Ocorrência"
    ],
    "status_destino": [
      "UF Sem Registro",
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "TRÂNSITO PROIBIDO."
    ],
    "leg": "IN MAPA Nº 34/2017, Art. 2º"
  },
  {
    "prag": "Sternochetus mangiferae",
    "desc": "De municípios sem ocorrência localizados em UF com Área Com Ocorrência para áreas indenes",
    "status_origem": [
      "Área Sem Registro"
    ],
    "status_destino": [
      "UF Sem Registro",
      "Área Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "Trânsito condicionado à apresentação de Permissão de Trânsito de Vegetais (PTV) embasada em CFO/CFOC com a Declaração Adicional: 'A partida foi produzida fora da zona interditada e encontra-se livre de Sternochetus mangiferae'."
    ],
    "leg": "IN MAPA Nº 34/2017, Art. 3º"
  },
  {
    "prag": "Xanthomonas campestris pv. viticola",
    "desc": "De UF com Ocorrência para UF Sem Ocorrência (Mudas)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro"
    ],
    "status_destino": [
      "UF Sem Registro"
    ],
    "exig": [
      "O trânsito só é permitido quando as mudas forem acompanhadas de Permissão de Trânsito de Vegetais (PTV) com a seguinte Declaração Adicional: 'As mudas foram obtidas por micropropagação e indexadas para Xanthomonas campestris pv. viticola'."
    ],
    "leg": "IN MAPA Nº 02/2014, Art. 6º, Inciso I",
    "part": [
      "mudas"
    ]
  },
  {
    "prag": "Xanthomonas campestris pv. viticola",
    "desc": "De UF com Ocorrência para UF Sem Ocorrência (Frutos para consumo in natura)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro"
    ],
    "status_destino": [
      "UF Sem Registro"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "O trânsito só é permitido quando os frutos forem acompanhados de Permissão de Trânsito de Vegetais (PTV) com a seguinte Declaração Adicional: 'Os frutos foram produzidos em propriedade onde são adotadas as medidas de prevenção e controle do cancro bacteriano da videira, previstas na legislação fitossanitária'."
    ],
    "leg": "IN MAPA Nº 02/2014, Art. 6º, Inciso II"
  },
  {
    "prag": "Xanthomonas campestris pv. viticola",
    "desc": "De UF com Ocorrência para UF Sem Ocorrência (Material para pesquisa)",
    "status_origem": [
      "Área Com Ocorrência",
      "Área Sem Registro"
    ],
    "status_destino": [
      "UF Sem Registro"
    ],
    "part": [
      "material vegetal para pesquisa"
    ],
    "exig": [
      "Permissão de Trânsito de Vegetais (PTV) com a seguinte Declaração Adicional: 'O material foi lacrado na origem, sob número de lacre X, e embalado de maneira a garantir a não dispersão da praga'.",
      "É necessária a assinatura de Termo de Compromisso pelo pesquisador e comunicação entre Órgãos Estaduais."
    ],
    "leg": "IN MAPA Nº 02/2014, Art. 6º, Inciso III"
  },
  {
    "prag": "Xanthomonas citri subsp. citri",
    "desc": "De Área de Status Desconhecido para qualquer destino",
    "status_origem": [
      "Área de Status Desconhecido"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos",
      "material de propagação vegetativa"
    ],
    "exig": [
      "Trânsito PROIBIDO."
    ],
    "leg": "IN MAPA Nº 21/2018, Art. 3º, §2º"
  },
  {
    "prag": "Xanthomonas citri subsp. citri",
    "desc": "De UF Sem Registro, Área Sem Ocorrência ou ALP",
    "status_origem": [
      "UF Sem Registro",
      "Área Sem Ocorrência",
      "Área Livre de Praga"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos",
      "material de propagação vegetativa"
    ],
    "exig": [
      "PTV embasada em CFO/CFOC constando DA adequada ao status ('Os frutos/material são originários de Área Sem Ocorrência...' ou 'originários de Área Livre de Praga...')."
    ],
    "leg": "IN MAPA Nº 21/2018, Art. 13 e 26"
  },
  {
    "prag": "Xanthomonas citri subsp. citri",
    "desc": "De Área sob SMR para qualquer destino (Frutos)",
    "status_origem": [
      "Área de SMR"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos"
    ],
    "exig": [
      "PTV embasada em CFO/CFOC com DA: 'Os frutos são originários de Unidade de Produção onde foi implantado o Sistema de Mitigação de Risco (SMR) reconhecido oficialmente, foram higienizados por imersão em solução com Hipoclorito de Sódio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro Cítrico'.",
      "Veículo fechado ou coberto e caixas higienizadas."
    ],
    "leg": "IN MAPA Nº 21/2018, Art. 50 e 51"
  },
  {
    "prag": "Xanthomonas citri subsp. citri",
    "desc": "De Área sob SMR para qualquer destino (Mudas)",
    "status_origem": [
      "Área de SMR"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "material de propagação vegetativa"
    ],
    "exig": [
      "PTV embasada em CFO com DA: 'O material de propagação é proveniente de Área sob SMR, se encontra livre de Cancro Cítrico e foi produzido conforme preconiza a legislação específica em vigor'.",
      "Material deve ter sido cultivado albergado em ambiente isolado."
    ],
    "leg": "IN MAPA Nº 21/2018, Art. 52"
  },
  {
    "prag": "Xanthomonas citri subsp. citri",
    "desc": "De Área sob Erradicação para qualquer destino",
    "status_origem": [
      "Área Sob Erradicação"
    ],
    "status_destino": [
      "Todas as Áreas"
    ],
    "part": [
      "frutos",
      "material de propagação vegetativa"
    ],
    "exig": [
      "Frutos de imóvel interditado (desde que sadias/higienizados) ou de imóvel sem ocorrência -> Permitido (PTV com DA específica Art. 66/67).",
      "Mudas SOMENTE de imóvel sem ocorrência (PTV com DA Art. 68)."
    ],
    "leg": "IN MAPA Nº 21/2018, Arts. 66, 67 e 68"
  }
];
var status_municipio = [
  {
    "praga": "Bactrocera carambolae",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "AP",
            "ibge": 16,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AM",
            "ibge": 13,
            "municipios": [
              190,
              260,
              356
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              30,
              50,
              70,
              110,
              180,
              200,
              250,
              280,
              300,
              310,
              390,
              450,
              490,
              510,
              520,
              530,
              570,
              580,
              590,
              600,
              630,
              640,
              770,
              790,
              797
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Zona Tampão",
        "estados": [
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              10,
              20,
              40,
              60,
              80,
              85,
              90,
              95,
              100,
              120,
              130,
              140,
              145,
              150,
              160,
              170,
              172,
              190,
              195,
              210,
              220,
              230,
              240,
              260,
              275,
              285,
              290,
              307,
              320,
              330,
              340,
              345,
              350,
              400,
              410,
              430,
              440,
              442,
              445,
              460,
              470,
              475,
              480,
              495,
              500,
              540,
              548,
              560,
              565,
              610,
              611,
              619,
              620,
              635,
              650,
              655,
              660,
              680,
              690,
              700,
              710,
              720,
              740,
              746,
              747,
              760,
              780,
              795,
              796,
              800,
              803,
              815,
              820,
              830,
              835
            ]
          },
          {
            "uf": "AM",
            "ibge": 13,
            "municipios": [
              353
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Sem Registro de UF Com Ocorrência",
        "estados": [
          {
            "uf": "AM",
            "ibge": 13,
            "municipios": [
              2
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              335,
              343,
              815,
              275,
              277,
              370,
              420,
              509,
              553,
              503,
              405,
              550,
              812,
              270,
              276,
              545,
              613,
              660,
              670,
              13,
              157,
              280,
              618,
              175,
              549,
              563,
              715,
              745,
              750,
              34,
              543,
              730,
              808,
              178,
              309,
              380,
              506,
              810,
              125,
              215,
              304,
              616,
              775,
              840
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "UF Sem Registro",
        "estados": [
          {
            "uf": "RO",
            "ibge": 11,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AC",
            "ibge": 12,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "TO",
            "ibge": 17,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MA",
            "ibge": 21,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PI",
            "ibge": 22,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "CE",
            "ibge": 23,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RN",
            "ibge": 24,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PB",
            "ibge": 25,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PE",
            "ibge": 26,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AL",
            "ibge": 27,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SE",
            "ibge": 28,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "BA",
            "ibge": 29,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "ES",
            "ibge": 32,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RJ",
            "ibge": 33,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SP",
            "ibge": 35,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RS",
            "ibge": 43,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MT",
            "ibge": 51,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "DF",
            "ibge": 53,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Candidatus liberibacter americanus e Candidatus liberibacter asiaticus",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1070,
              1090,
              1160,
              1190,
              1280,
              1400,
              1440,
              1730,
              1770,
              1970,
              2060,
              2230,
              2240,
              2630,
              2710,
              2830,
              2870,
              2890,
              2950,
              3010,
              3060,
              3300,
              3420,
              3430,
              3540,
              3780,
              3862,
              4070,
              4130,
              4190,
              4260,
              4320,
              4340,
              4410,
              4460,
              4560,
              4600,
              4720,
              4810,
              4990,
              5040,
              5130,
              5150,
              5180,
              5250,
              5280,
              6120,
              6200,
              6292,
              6390,
              6470,
              6500,
              6530,
              6680,
              6740,
              6810,
              6820,
              6900,
              6930,
              6940,
              6980,
              7010,
              7170,
              7200,
              150,
              200,
              260,
              400,
              510,
              640,
              670,
              740,
              800,
              810,
              830,
              840,
              890
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              60,
              80,
              85,
              90,
              100,
              200,
              240,
              270,
              315,
              375,
              400,
              430,
              460,
              470,
              480,
              490,
              515,
              568,
              570,
              620,
              635,
              660,
              710,
              755,
              770,
              790,
              795,
              797,
              800,
              840
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              1000,
              1030,
              1040,
              1100,
              1130,
              1140,
              1155,
              1160,
              1180,
              1190,
              1210,
              1240,
              1270,
              1275,
              1300,
              1310,
              1350,
              1360,
              1370,
              1375,
              1380,
              1410,
              1420,
              1470,
              1480,
              1490,
              1500,
              1520,
              1535,
              1550,
              1575,
              1580,
              1590,
              1600,
              1605,
              1630,
              1640,
              1650,
              1660,
              1690,
              1700,
              1710,
              1720,
              1721,
              1740,
              1750,
              1800,
              1810,
              1840,
              1880,
              1885,
              1965,
              1970,
              1980,
              2033,
              2040,
              2050,
              2125,
              2130,
              2160,
              2180,
              2190,
              2240,
              2260,
              2270,
              2280,
              2310,
              2320,
              2340,
              2360,
              2370,
              2380,
              2390,
              2395,
              2402,
              2410,
              2420,
              2430,
              2450,
              2460,
              2470,
              2490,
              2500,
              2520,
              2535,
              2555,
              2600,
              2610,
              2625,
              2630,
              2640,
              2650,
              2670,
              2680,
              2690,
              2730,
              2740,
              2770,
              2810,
              2830,
              2840,
              2850,
              2880,
              10,
              50,
              60,
              80,
              90,
              100,
              110,
              115,
              140,
              150,
              190,
              200,
              210,
              220,
              240,
              270,
              280,
              320,
              340,
              347,
              350,
              360,
              370,
              380,
              480,
              510,
              550,
              560,
              640,
              655,
              660,
              670,
              725,
              730,
              780,
              790,
              810,
              820,
              830,
              840,
              860,
              890,
              910,
              920,
              980
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              1670,
              1690,
              1950,
              10,
              640
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1850,
              110,
              485
            ]
          },
          {
            "uf": "SP",
            "ibge": 35,
            "municipios": [
              9999
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Zona Tampão",
        "estados": [
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1230,
              1450,
              1540,
              1630,
              1680,
              1730,
              1880,
              2060,
              2119,
              10,
              350,
              410,
              505,
              815,
              840,
              915
            ]
          },
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1000,
              1010,
              1020,
              1030,
              1040,
              1050,
              1100,
              1110,
              1120,
              1130,
              1140,
              1150,
              1170,
              1200,
              1230,
              1240,
              1250,
              1260,
              1270,
              1290,
              1300,
              1310,
              1320,
              1330,
              1340,
              1350,
              1360,
              1370,
              1380,
              1390,
              1410,
              1420,
              1430,
              1450,
              1455,
              1460,
              1470,
              1480,
              1510,
              1520,
              1530,
              1550,
              1570,
              1590,
              1600,
              1610,
              1620,
              1630,
              1640,
              1650,
              1660,
              1670,
              1680,
              1690,
              1700,
              1720,
              1740,
              1750,
              1820,
              1830,
              1840,
              1860,
              1870,
              1880,
              1890,
              1900,
              1910,
              1920,
              1930,
              1940,
              1950,
              1960,
              1980,
              2010,
              2020,
              2030,
              2040,
              2050,
              2070,
              2080,
              2110,
              2125,
              2140,
              2190,
              2210,
              2220,
              2260,
              2270,
              2280,
              2290,
              2310,
              2320,
              2330,
              2340,
              2350,
              2360,
              2390,
              2410,
              2440,
              2450,
              2470,
              2480,
              2490,
              2500,
              2510,
              2520,
              2530,
              2540,
              2560,
              2570,
              2580,
              2590,
              2600,
              2610,
              2620,
              2640,
              2650,
              2660,
              2680,
              2690,
              2700,
              2720,
              2730,
              2740,
              2750,
              2760,
              2780,
              2790,
              2800,
              2810,
              2840,
              2850,
              2860,
              2880,
              2900,
              2910,
              2920,
              2930,
              2960,
              2970,
              2980,
              2990,
              3000,
              3030,
              3040,
              3050,
              3070,
              3150,
              3160,
              3190,
              3220,
              3290,
              3310,
              3340,
              3350,
              3370,
              3375,
              3380,
              3440,
              3450,
              3480,
              3490,
              3590,
              3665,
              3690,
              3740,
              3820,
              3840,
              3880,
              3900,
              3910,
              3980,
              3990,
              4015,
              4040,
              4230,
              4300,
              4310,
              4380,
              4450,
              4500,
              4510,
              4520,
              4610,
              4710,
              4730,
              4760,
              4790,
              4800,
              4830,
              4910,
              4970,
              4980,
              5050,
              5060,
              5070,
              5090,
              5100,
              5160,
              5170,
              5260,
              5270,
              5290,
              5300,
              5420,
              5470,
              5530,
              5550,
              5580,
              5610,
              5690,
              5830,
              5880,
              5920,
              5960,
              5990,
              6000,
              6040,
              6080,
              6130,
              6150,
              6180,
              6220,
              6230,
              6250,
              6294,
              6320,
              6430,
              6440,
              6460,
              6490,
              6510,
              6520,
              6540,
              6553,
              6580,
              6640,
              6700,
              6780,
              6880,
              6905,
              6910,
              6990,
              7020,
              7043,
              7060,
              7070,
              7110,
              7210,
              7220,
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              120,
              130,
              140,
              160,
              190,
              210,
              220,
              280,
              310,
              320,
              340,
              360,
              410,
              420,
              430,
              440,
              450,
              460,
              470,
              480,
              490,
              520,
              530,
              540,
              550,
              560,
              570,
              590,
              630,
              680,
              710,
              720,
              750,
              760,
              780,
              790,
              850,
              860,
              870,
              900,
              910,
              950,
              970
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Sem Registro de UF Com Ocorrência",
        "estados": [
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1060,
              1080,
              1115,
              1180,
              1205,
              1210,
              1220,
              1265,
              1490,
              1500,
              1535,
              1540,
              1545,
              1547,
              1560,
              1580,
              1615,
              1710,
              1760,
              1780,
              1783,
              1787,
              1790,
              1800,
              1810,
              1850,
              1990,
              1995,
              2000,
              2015,
              2083,
              2087,
              2090,
              2100,
              2120,
              2130,
              2150,
              2160,
              2170,
              2180,
              2200,
              2235,
              2245,
              2247,
              2250,
              2300,
              2352,
              2370,
              2380,
              2385,
              2400,
              2420,
              2430,
              2460,
              2550,
              2595,
              2670,
              2675,
              2695,
              2705,
              2707,
              2733,
              2735,
              2737,
              2738,
              2770,
              2820,
              2825,
              2940,
              2965,
              3005,
              3020,
              3055,
              3065,
              3080,
              3090,
              3100,
              3110,
              3115,
              3120,
              3130,
              3140,
              3170,
              3180,
              3200,
              3210,
              3230,
              3240,
              3250,
              3260,
              3270,
              3280,
              3320,
              3330,
              3360,
              3390,
              3400,
              3410,
              3460,
              3470,
              3500,
              3505,
              3507,
              3510,
              3520,
              3530,
              3535,
              3545,
              3550,
              3560,
              3570,
              3580,
              3600,
              3610,
              3620,
              3630,
              3640,
              3650,
              3652,
              3655,
              3657,
              3660,
              3670,
              3680,
              3695,
              3700,
              3710,
              3720,
              3730,
              3750,
              3753,
              3760,
              3770,
              3790,
              3800,
              3810,
              3830,
              3835,
              3850,
              3860,
              3865,
              3867,
              3868,
              3870,
              3890,
              3920,
              3925,
              3930,
              3940,
              3950,
              3960,
              3970,
              4000,
              4010,
              4020,
              4030,
              4050,
              4053,
              4055,
              4060,
              4080,
              4085,
              4090,
              4100,
              4110,
              4120,
              4140,
              4150,
              4160,
              4170,
              4180,
              4200,
              4210,
              4220,
              4225,
              4240,
              4250,
              4270,
              4280,
              4290,
              4315,
              4330,
              4345,
              4350,
              4360,
              4370,
              4390,
              4400,
              4420,
              4430,
              4435,
              4437,
              4440,
              4465,
              4467,
              4470,
              4480,
              4490,
              4505,
              4530,
              4535,
              4537,
              4540,
              4545,
              4550,
              4570,
              4580,
              4585,
              4587,
              4590,
              4620,
              4625,
              4630,
              4640,
              4650,
              4655,
              4660,
              4670,
              4675,
              4690,
              4700,
              4740,
              4750,
              4770,
              4780,
              4795,
              4820,
              4840,
              4850,
              4860,
              4870,
              4875,
              4880,
              4890,
              4900,
              4915,
              4920,
              4930,
              4940,
              4950,
              4960,
              4995,
              5000,
              5010,
              5015,
              5020,
              5030,
              5053,
              5057,
              5080,
              5110,
              5120,
              5140,
              5190,
              5200,
              5210,
              5213,
              5217,
              5220,
              5230,
              5240,
              5310,
              5320,
              5330,
              5340,
              5350,
              5360,
              5370,
              5380,
              5390,
              5400,
              5410,
              5415,
              5430,
              5440,
              5445,
              5450,
              5460,
              5480,
              5490,
              5500,
              5510,
              5520,
              5540,
              5560,
              5570,
              5590,
              5600,
              5620,
              5630,
              5640,
              5645,
              5650,
              5660,
              5670,
              5680,
              5700,
              5710,
              5720,
              5725,
              5727,
              5730,
              5733,
              5737,
              5740,
              5750,
              5760,
              5765,
              5770,
              5780,
              5790,
              5800,
              5810,
              5820,
              5840,
              5850,
              5860,
              5870,
              5890,
              5895,
              5900,
              5910,
              5930,
              5935,
              5940,
              5950,
              5970,
              5980,
              6010,
              6020,
              6030,
              6045,
              6050,
              6060,
              6070,
              6090,
              6095,
              6100,
              6105,
              6110,
              6140,
              6160,
              6165,
              6170,
              6190,
              6210,
              6225,
              6240,
              6245,
              6255,
              6257,
              6260,
              6265,
              6270,
              6280,
              6290,
              6295,
              6300,
              6310,
              6330,
              6340,
              6350,
              6360,
              6370,
              6380,
              6400,
              6410,
              6420,
              6443,
              6447,
              6450,
              6480,
              6550,
              6555,
              6556,
              6557,
              6560,
              6570,
              6590,
              6600,
              6610,
              6620,
              6630,
              6650,
              6660,
              6670,
              6690,
              6695,
              6710,
              6720,
              6730,
              6750,
              6760,
              6770,
              6790,
              6800,
              6805,
              6830,
              6840,
              6850,
              6860,
              6870,
              6890,
              6920,
              6935,
              6950,
              6960,
              6970,
              7000,
              7005,
              7030,
              7040,
              7047,
              7050,
              7052,
              7057,
              7065,
              7075,
              7080,
              7090,
              7100,
              7103,
              7107,
              7115,
              7120,
              7130,
              7140,
              7150,
              7160,
              7180,
              7190,
              10,
              110,
              163,
              170,
              180,
              205,
              230,
              240,
              250,
              285,
              290,
              300,
              330,
              350,
              370,
              375,
              380,
              390,
              445,
              500,
              600,
              610,
              620,
              650,
              665,
              660,
              690,
              700,
              730,
              770,
              820,
              825,
              855,
              880,
              920,
              925,
              930,
              940,
              945,
              980,
              960,
              270,
              990,
              90,
              100
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              25,
              70,
              110,
              124,
              150,
              190,
              210,
              215,
              220,
              230,
              260,
              280,
              290,
              295,
              310,
              320,
              325,
              330,
              345,
              348,
              350,
              370,
              390,
              380,
              410,
              440,
              450,
              500,
              510,
              520,
              525,
              540,
              560,
              580,
              600,
              625,
              630,
              627,
              640,
              690,
              720,
              730,
              740,
              750,
              780,
              793,
              769,
              830,
              20
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              1005,
              1007,
              1010,
              1020,
              1050,
              1060,
              1065,
              1070,
              1080,
              1090,
              1095,
              1110,
              1120,
              1125,
              1150,
              1170,
              1200,
              1220,
              1230,
              1250,
              1260,
              1280,
              1290,
              1295,
              1320,
              1325,
              1330,
              1340,
              1342,
              1345,
              1373,
              1390,
              1400,
              1430,
              1435,
              1440,
              1450,
              1460,
              1510,
              1530,
              1540,
              1545,
              1560,
              1570,
              1573,
              1585,
              1610,
              1620,
              1670,
              1680,
              1695,
              1705,
              1722,
              1725,
              1727,
              1729,
              1730,
              1745,
              1760,
              1770,
              1780,
              1790,
              1820,
              1830,
              1845,
              1850,
              1860,
              1870,
              1890,
              1900,
              1910,
              1915,
              1920,
              1925,
              1930,
              1940,
              1950,
              1960,
              1990,
              1995,
              2000,
              2010,
              2015,
              2020,
              2030,
              2035,
              2060,
              2065,
              2070,
              2080,
              2085,
              2090,
              2100,
              2110,
              2120,
              2135,
              2140,
              2150,
              2170,
              2175,
              2200,
              2210,
              2215,
              2217,
              2220,
              2230,
              2250,
              2265,
              2290,
              2300,
              2330,
              2350,
              2382,
              2385,
              2400,
              2405,
              2440,
              2480,
              2510,
              2530,
              2540,
              2545,
              2550,
              2560,
              2570,
              2575,
              2580,
              2590,
              2620,
              2627,
              2635,
              2660,
              2665,
              2667,
              2700,
              2710,
              2720,
              2750,
              2760,
              2780,
              2785,
              2788,
              2790,
              2795,
              2796,
              2800,
              2820,
              2853,
              2855,
              2860,
              2862,
              2863,
              2865,
              2870,
              20,
              30,
              40,
              45,
              70,
              105,
              120,
              130,
              160,
              165,
              170,
              180,
              185,
              230,
              250,
              260,
              275,
              290,
              300,
              302,
              304,
              305,
              310,
              315,
              322,
              330,
              335,
              337,
              345,
              400,
              390,
              395,
              405,
              420,
              425,
              430,
              410,
              442,
              445,
              450,
              460,
              465,
              470,
              490,
              500,
              520,
              540,
              570,
              580,
              590,
              600,
              610,
              620,
              630,
              645,
              650,
              680,
              657,
              685,
              690,
              700,
              440,
              530,
              715,
              710,
              712,
              720,
              750,
              753,
              740,
              752,
              754,
              755,
              760,
              765,
              773,
              775,
              785,
              800,
              845,
              832,
              770,
              850,
              855,
              865,
              870,
              895,
              900,
              930,
              940,
              950,
              960,
              880,
              965,
              970,
              975,
              990
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              1000,
              1003,
              1005,
              1010,
              1020,
              1030,
              1040,
              1050,
              1055,
              1060,
              1070,
              1080,
              1085,
              1090,
              1100,
              1105,
              1110,
              1120,
              1125,
              1130,
              1140,
              1145,
              1150,
              1160,
              1165,
              1170,
              1175,
              1180,
              1185,
              1187,
              1189,
              1190,
              1200,
              1205,
              1210,
              1220,
              1223,
              1225,
              1227,
              1230,
              1240,
              1250,
              1260,
              1265,
              1270,
              1280,
              1290,
              1300,
              1310,
              1315,
              1320,
              1330,
              1335,
              1340,
              1350,
              1360,
              1370,
              1380,
              1390,
              1400,
              1410,
              1415,
              1420,
              1430,
              1440,
              1450,
              1460,
              1470,
              1480,
              1490,
              1500,
              1505,
              1507,
              1510,
              1520,
              1530,
              1535,
              1540,
              1545,
              1550,
              1555,
              1560,
              1565,
              1567,
              1568,
              1569,
              1570,
              1575,
              1580,
              1590,
              1600,
              1605,
              1610,
              1620,
              1625,
              1630,
              1635,
              1640,
              1650,
              1660,
              1680,
              1700,
              1710,
              1715,
              1720,
              1725,
              1730,
              1740,
              1750,
              1755,
              1760,
              1770,
              1775,
              1780,
              1790,
              1795,
              1800,
              1810,
              1820,
              1825,
              1830,
              1835,
              1840,
              1850,
              1860,
              1870,
              1875,
              1880,
              1885,
              1890,
              1895,
              1900,
              1910,
              1915,
              1917,
              1920,
              1930,
              1935,
              1940,
              1960,
              1970,
              1985,
              2000,
              5,
              20,
              30,
              70,
              75,
              80,
              90,
              100,
              110,
              120,
              125,
              127,
              130,
              140,
              150,
              160,
              165,
              170,
              180,
              190,
              195,
              205,
              200,
              207,
              208,
              209,
              210,
              213,
              215,
              220,
              230,
              240,
              243,
              250,
              253,
              257,
              260,
              245,
              270,
              280,
              285,
              287,
              290,
              310,
              315,
              320,
              330,
              340,
              350,
              360,
              370,
              380,
              390,
              395,
              325,
              400,
              410,
              300,
              415,
              417,
              419,
              420,
              425,
              430,
              435,
              440,
              445,
              455,
              450,
              460,
              470,
              475,
              480,
              490,
              500,
              510,
              515,
              517,
              519,
              520,
              530,
              535,
              540,
              543,
              545,
              550,
              555,
              560,
              570,
              580,
              590,
              600,
              620,
              610,
              630,
              650,
              660,
              665,
              670,
              675,
              680,
              690,
              710,
              720,
              730,
              740,
              750,
              757,
              760,
              765,
              768,
              770,
              775,
              780,
              785,
              790,
              810,
              820,
              830,
              840,
              845,
              850,
              800,
              700,
              860,
              870,
              880,
              890,
              895,
              900,
              910,
              915,
              917,
              920,
              930,
              940,
              945,
              950,
              960,
              970,
              980,
              985,
              990,
              40,
              55,
              60,
              50
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1000,
              1010,
              1015,
              1020,
              1030,
              1040,
              1056,
              1060,
              1080,
              1090,
              1100,
              1120,
              1130,
              1140,
              1150,
              1160,
              1170,
              1180,
              1190,
              1200,
              1205,
              1210,
              1220,
              1225,
              1250,
              1260,
              1270,
              1280,
              1290,
              1295,
              1300,
              1305,
              1308,
              1310,
              1340,
              1350,
              1370,
              1375,
              1377,
              1380,
              1385,
              1390,
              1400,
              1405,
              1410,
              1440,
              1460,
              1470,
              1480,
              1483,
              1486,
              1487,
              1490,
              1500,
              1520,
              1523,
              1525,
              1530,
              1550,
              1560,
              1565,
              1570,
              1580,
              1590,
              1600,
              1640,
              1645,
              1690,
              1710,
              1720,
              1740,
              1760,
              1770,
              1800,
              1805,
              1810,
              1830,
              1839,
              1860,
              1870,
              1878,
              1890,
              1900,
              1910,
              1920,
              1925,
              1930,
              1935,
              1940,
              1945,
              1950,
              1960,
              1970,
              1971,
              1973,
              1975,
              1980,
              1990,
              2000,
              2005,
              2010,
              2015,
              2020,
              2026,
              2028,
              2040,
              2045,
              2050,
              2068,
              2070,
              2100,
              2108,
              2130,
              2140,
              2145,
              2150,
              2155,
              2157,
              2160,
              2170,
              2180,
              2185,
              2190,
              2200,
              2205,
              2220,
              2230,
              5,
              13,
              15,
              30,
              50,
              55,
              60,
              80,
              82,
              85,
              90,
              120,
              130,
              140,
              145,
              150,
              170,
              180,
              215,
              160,
              235,
              250,
              260,
              280,
              310,
              320,
              330,
              340,
              355,
              357,
              360,
              380,
              390,
              393,
              396,
              400,
              425,
              420,
              440,
              450,
              455,
              460,
              465,
              470,
              480,
              490,
              495,
              500,
              510,
              520,
              530,
              430,
              540,
              545,
              547,
              549,
              551,
              552,
              590,
              580,
              620,
              630,
              640,
              650,
              660,
              570,
              670,
              680,
              690,
              710,
              830,
              725,
              735,
              740,
              750,
              753,
              760,
              780,
              790,
              800,
              810,
              850,
              880,
              860,
              910,
              890,
              870,
              920,
              940,
              929,
              945,
              960,
              980,
              970,
              990,
              993,
              995,
              17,
              20,
              25
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Neonectria ditissima (Neonectria galligena)",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "RS",
            "ibge": 43,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Pseudocercospora fijiensis (Mycosphaerella fijiensis)",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "AM",
            "ibge": 13,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AP",
            "ibge": 16,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PB",
            "ibge": 25,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RJ",
            "ibge": 33,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RO",
            "ibge": 11,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SE",
            "ibge": 28,
            "municipios": [
              9999
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Livre de Praga",
        "estados": [
          {
            "uf": "CE",
            "ibge": 23,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "DF",
            "ibge": 53,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RN",
            "ibge": 24,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1000,
              1010,
              1015,
              1040,
              1056,
              1060,
              1080,
              1090,
              1100,
              1120,
              1130,
              1140,
              1150,
              1170,
              1180,
              1190,
              1210,
              1225,
              1230,
              1250,
              1260,
              1270,
              1280,
              1290,
              1295,
              1300,
              1305,
              1308,
              1350,
              1375,
              1380,
              1385,
              1390,
              1400,
              1405,
              1410,
              1440,
              1450,
              1460,
              1470,
              1480,
              1483,
              1486,
              1487,
              1490,
              1500,
              1520,
              1523,
              1525,
              1530,
              1540,
              1550,
              1560,
              1570,
              1580,
              1590,
              1600,
              1630,
              1640,
              1643,
              1645,
              1680,
              1690,
              1710,
              1730,
              1740,
              1760,
              1770,
              1800,
              1805,
              1810,
              1830,
              1839,
              1850,
              1860,
              1870,
              1878,
              1880,
              1890,
              1900,
              1910,
              1930,
              1935,
              1945,
              1950,
              1960,
              1970,
              1971,
              1973,
              1975,
              1980,
              1990,
              2000,
              2005,
              2010,
              2015,
              2020,
              2040,
              2045,
              2050,
              2060,
              2068,
              2070,
              2100,
              2108,
              2119,
              2130,
              2140,
              2145,
              2150,
              2155,
              2157,
              2160,
              2170,
              2180,
              2185,
              2190,
              2200,
              2205,
              2220,
              2230,
              9999,
              5,
              10,
              13,
              15,
              17,
              20,
              25,
              30,
              50,
              55,
              60,
              80,
              82,
              85,
              110,
              120,
              130,
              140,
              145,
              150,
              160,
              180,
              215,
              230,
              250,
              260,
              280,
              320,
              350,
              355,
              357,
              360,
              380,
              390,
              393,
              396,
              400,
              410,
              420,
              425,
              430,
              450,
              455,
              460,
              465,
              470,
              480,
              485,
              490,
              495,
              500,
              505,
              510,
              520,
              530,
              540,
              545,
              547,
              549,
              551,
              552,
              570,
              580,
              590,
              620,
              630,
              640,
              650,
              660,
              670,
              680,
              690,
              800,
              810,
              815,
              830,
              840,
              850,
              860,
              870,
              880,
              890,
              910,
              915,
              920,
              929,
              940,
              945,
              960,
              970,
              980,
              990,
              993,
              995
            ]
          },
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1110,
              1150,
              1180,
              1260,
              1270,
              1430,
              1455,
              1500,
              1547,
              1580,
              1650,
              2380,
              2430,
              2480,
              2660,
              2670,
              2710,
              2825,
              2910,
              3070,
              3140,
              3160,
              3210,
              3330,
              3340,
              3420,
              3440,
              3505,
              3510,
              3520,
              3560,
              3630,
              3710,
              3750,
              3810,
              3862,
              3930,
              4085,
              4100,
              4140,
              4280,
              4290,
              4310,
              4330,
              4500,
              4505,
              4655,
              4700,
              4800,
              4810,
              4915,
              4980,
              5120,
              5217,
              5220,
              5280,
              5340,
              5550,
              5690,
              5970,
              5980,
              6045,
              6110,
              6170,
              6210,
              6245,
              6680,
              6810,
              6960,
              7010,
              7020,
              7040,
              7075,
              7080,
              7100,
              7103,
              7110,
              100,
              340,
              350,
              375,
              730,
              940,
              980
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              80,
              100,
              190,
              200,
              290,
              295,
              440,
              620,
              630,
              780,
              797,
              830
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área de SMR",
        "estados": [
          {
            "uf": "AC",
            "ibge": 12,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AL",
            "ibge": 27,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "BA",
            "ibge": 29,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "ES",
            "ibge": 32,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MA",
            "ibge": 21,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MT",
            "ibge": 51,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PE",
            "ibge": 26,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PI",
            "ibge": 22,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RS",
            "ibge": 43,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SP",
            "ibge": 35,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "TO",
            "ibge": 17,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1020,
              1030,
              1160,
              1200,
              1220,
              1310,
              1340,
              1370,
              1565,
              1720,
              1925,
              1940,
              90,
              170,
              235,
              310,
              340,
              440,
              710,
              725,
              760
            ]
          },
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1000,
              1010,
              1020,
              1030,
              1040,
              1050,
              1060,
              1070,
              1080,
              1090,
              1100,
              1115,
              1120,
              1130,
              1140,
              1160,
              1190,
              1200,
              1205,
              1210,
              1220,
              1230,
              1240,
              1250,
              1280,
              1290,
              1300,
              1310,
              1320,
              1330,
              1350,
              1360,
              1370,
              1380,
              1390,
              1400,
              1410,
              1420,
              1440,
              1450,
              1460,
              1470,
              1480,
              1490,
              1510,
              1520,
              1530,
              1535,
              1540,
              1545,
              1550,
              1560,
              1570,
              1590,
              1600,
              1610,
              1615,
              1620,
              1630,
              1640,
              1660,
              1670,
              1680,
              1690,
              1700,
              1710,
              1720,
              1730,
              1740,
              1750,
              1760,
              1770,
              1780,
              1790,
              1800,
              1810,
              1820,
              1830,
              1840,
              1850,
              1860,
              1870,
              1880,
              1890,
              1900,
              1910,
              1920,
              1930,
              1940,
              1950,
              1960,
              1970,
              1980,
              1990,
              1995,
              2000,
              2010,
              2015,
              2020,
              2030,
              2040,
              2050,
              2060,
              2070,
              2080,
              2083,
              2087,
              2090,
              2100,
              2110,
              2120,
              2125,
              2130,
              2140,
              2150,
              2160,
              2170,
              2180,
              2190,
              2200,
              2210,
              2220,
              2230,
              2235,
              2240,
              2245,
              2247,
              2250,
              2260,
              2270,
              2280,
              2290,
              2300,
              2310,
              2320,
              2330,
              2340,
              2350,
              2352,
              2360,
              2370,
              2385,
              2390,
              2400,
              2410,
              2420,
              2440,
              2450,
              2460,
              2470,
              2490,
              2500,
              2510,
              2520,
              2530,
              2540,
              2550,
              2560,
              2570,
              2580,
              2590,
              2595,
              2600,
              2610,
              2620,
              2630,
              2640,
              2650,
              2675,
              2680,
              2690,
              2695,
              2700,
              2705,
              2707,
              2720,
              2730,
              2733,
              2735,
              2737,
              2738,
              2740,
              2750,
              2760,
              2770,
              2780,
              2790,
              2800,
              2810,
              2820,
              2830,
              2840,
              2850,
              2860,
              2870,
              2880,
              2890,
              2900,
              2920,
              2930,
              2940,
              2950,
              2960,
              2970,
              2980,
              2990,
              3000,
              3010,
              3020,
              3030,
              3040,
              3050,
              3055,
              3060,
              3065,
              3080,
              3090,
              3100,
              3110,
              3115,
              3120,
              3130,
              3150,
              3170,
              3180,
              3190,
              3200,
              3220,
              3230,
              3240,
              3250,
              3260,
              3270,
              3280,
              3290,
              3300,
              3310,
              3320,
              3350,
              3360,
              3370,
              3375,
              3380,
              3390,
              3400,
              3410,
              3430,
              3450,
              3460,
              3470,
              3480,
              3490,
              3500,
              3530,
              3535,
              3540,
              3545,
              3550,
              3570,
              3580,
              3590,
              3600,
              3610,
              3620,
              3640,
              3650,
              3652,
              3655,
              3657,
              3660,
              3665,
              3670,
              3680,
              3690,
              3695,
              3700,
              3720,
              3730,
              3740,
              3760,
              3770,
              3780,
              3790,
              3800,
              3820,
              3830,
              3835,
              3840,
              3850,
              3860,
              3865,
              3867,
              3868,
              3870,
              3880,
              3890,
              3900,
              3910,
              3920,
              3925,
              3940,
              3950,
              3960,
              3970,
              3980,
              3990,
              4000,
              4010,
              4015,
              4020,
              4030,
              4040,
              4050,
              4053,
              4055,
              4060,
              4070,
              4080,
              4090,
              4110,
              4120,
              4130,
              4150,
              4160,
              4170,
              4180,
              4190,
              4200,
              4210,
              4220,
              4225,
              4230,
              4240,
              4250,
              4260,
              4270,
              4300,
              4315,
              4320,
              4340,
              4345,
              4350,
              4360,
              4370,
              4380,
              4390,
              4400,
              4410,
              4420,
              4430,
              4435,
              4437,
              4440,
              4450,
              4460,
              4465,
              4467,
              4470,
              4480,
              4490,
              4510,
              4520,
              4530,
              4535,
              4537,
              4540,
              4545,
              4550,
              4560,
              4570,
              4580,
              4585,
              4587,
              4590,
              4600,
              4610,
              4620,
              4625,
              4630,
              4640,
              4650,
              4660,
              4670,
              4675,
              4690,
              4710,
              4720,
              4730,
              4740,
              4750,
              4760,
              4770,
              4780,
              4790,
              4820,
              4830,
              4840,
              4850,
              4860,
              4870,
              4875,
              4880,
              4890,
              4900,
              4910,
              4920,
              4930,
              4940,
              4950,
              4960,
              4970,
              4990,
              4995,
              5000,
              5010,
              5015,
              5020,
              5030,
              5040,
              5050,
              5053,
              5057,
              5060,
              5070,
              5080,
              5090,
              5100,
              5110,
              5130,
              5140,
              5150,
              5170,
              5180,
              5190,
              5200,
              5210,
              5213,
              5250,
              5260,
              5270,
              5290,
              5300,
              5310,
              5320,
              5330,
              5350,
              5360,
              5370,
              5380,
              5390,
              5400,
              5410,
              5415,
              5420,
              5430,
              5440,
              5445,
              5450,
              5460,
              5470,
              5480,
              5490,
              5500,
              5510,
              5520,
              5530,
              5540,
              5550,
              5560,
              5570,
              5580,
              5590,
              5600,
              5610,
              5620,
              5630,
              5640,
              5645,
              5650,
              5670,
              5680,
              5700,
              5710,
              5720,
              5725,
              5727,
              5730,
              5733,
              5737,
              5740,
              5750,
              5760,
              5770,
              5780,
              5790,
              5800,
              5810,
              5820,
              5830,
              5840,
              5850,
              5860,
              5870,
              5880,
              5890,
              5895,
              5900,
              5910,
              5920,
              5930,
              5940,
              5950,
              5960,
              5990,
              6000,
              6010,
              6020,
              6030,
              6040,
              6050,
              6060,
              6070,
              6080,
              6090,
              6095,
              6100,
              6105,
              6120,
              6130,
              6140,
              6150,
              6160,
              6180,
              6190,
              6200,
              6220,
              6225,
              6230,
              6240,
              6250,
              6255,
              6257,
              6260,
              6265,
              6270,
              6280,
              6290,
              6292,
              6294,
              6295,
              6300,
              6310,
              6320,
              6330,
              6340,
              6350,
              6360,
              6370,
              6380,
              6390,
              6400,
              6410,
              6420,
              6430,
              6440,
              6443,
              6447,
              6450,
              6460,
              6470,
              6480,
              6490,
              6500,
              6510,
              6520,
              6530,
              6540,
              6550,
              6553,
              6555,
              6556,
              6557,
              6560,
              6570,
              6580,
              6590,
              6600,
              6610,
              6620,
              6630,
              6640,
              6650,
              6660,
              6670,
              6690,
              6695,
              6700,
              6710,
              6720,
              6730,
              6740,
              6750,
              6760,
              6770,
              6780,
              6790,
              6800,
              6805,
              6820,
              6830,
              6840,
              6850,
              6860,
              6870,
              6880,
              6890,
              6900,
              6905,
              6910,
              6920,
              6930,
              6935,
              6940,
              6950,
              6970,
              6980,
              6990,
              7000,
              7005,
              7030,
              7043,
              7047,
              7050,
              7052,
              7057,
              7060,
              7065,
              7070,
              7090,
              7107,
              7115,
              7120,
              7130,
              7140,
              7150,
              7160,
              7170,
              7180,
              7190,
              7200,
              7210,
              7220,
              10,
              20,
              30,
              40,
              50,
              60,
              70,
              80,
              90,
              110,
              120,
              130,
              140,
              150,
              160,
              163,
              170,
              180,
              190,
              200,
              205,
              210,
              220,
              230,
              240,
              250,
              260,
              270,
              280,
              285,
              290,
              300,
              310,
              320,
              330,
              360,
              370,
              380,
              390,
              400,
              410,
              420,
              440,
              445,
              450,
              460,
              470,
              480,
              490,
              500,
              510,
              520,
              530,
              540,
              550,
              560,
              570,
              590,
              600,
              610,
              620,
              630,
              640,
              650,
              660,
              663,
              667,
              670,
              680,
              690,
              700,
              710,
              720,
              740,
              750,
              760,
              770,
              780,
              790,
              800,
              810,
              820,
              825,
              830,
              840,
              850,
              860,
              870,
              880,
              890,
              900,
              910,
              920,
              925,
              930,
              945,
              950,
              960,
              970,
              990
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              20,
              25,
              60,
              70,
              85,
              90,
              110,
              124,
              150,
              210,
              215,
              220,
              230,
              240,
              260,
              270,
              280,
              310,
              315,
              320,
              325,
              330,
              345,
              348,
              350,
              370,
              375,
              380,
              390,
              400,
              410,
              430,
              450,
              460,
              470,
              480,
              490,
              500,
              510,
              515,
              520,
              525,
              540,
              560,
              568,
              570,
              580,
              600,
              625,
              627,
              635,
              640,
              660,
              690,
              710,
              720,
              730,
              740,
              750,
              755,
              769,
              770,
              790,
              793,
              795,
              800,
              840
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Ralstonia solanacearum raça 2",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "AL",
            "ibge": 27,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AM",
            "ibge": 13,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AP",
            "ibge": 16,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RO",
            "ibge": 11,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SE",
            "ibge": 28,
            "municipios": [
              9999
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Livre de Praga",
        "estados": [
          {
            "uf": "CE",
            "ibge": 23,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PE",
            "ibge": 26,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PI",
            "ibge": 22,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RN",
            "ibge": 24,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Rhizoctonia theobromae (Ceratobasidium theobromae)",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "AP",
            "ibge": 16,
            "municipios": [
              10,
              15,
              20,
              50,
              55,
              70,
              5,
              23,
              21,
              53,
              30
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              50,
              510,
              530
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Schizotetranychus hindustanicus",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Sternochetus mangiferae",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "RJ",
            "ibge": 33,
            "municipios": [
              45,
              170,
              250,
              285,
              320,
              330,
              360,
              455,
              555
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Xanthomonas campestris pv. viticola",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "BA",
            "ibge": 29,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PE",
            "ibge": 26,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RN",
            "ibge": 24,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  },
  {
    "praga": "Xanthomonas citri subsp. citri",
    "status": [
      {
        "status_fitossanitário": "Área Com Ocorrência",
        "estados": [
          {
            "uf": "MA",
            "ibge": 21,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              10,
              13,
              20,
              30,
              34,
              50,
              60,
              70,
              80,
              85,
              90,
              95,
              100,
              110,
              120,
              125,
              130,
              140,
              150,
              157,
              160,
              170,
              172,
              175,
              178,
              180,
              190,
              195,
              200,
              210,
              215,
              220,
              240,
              250,
              260,
              270,
              275,
              276,
              277,
              280,
              285,
              290,
              293,
              295,
              300,
              304,
              309,
              310,
              320,
              330,
              340,
              345,
              360,
              370,
              375,
              380,
              390,
              400,
              405,
              410,
              420,
              430,
              440,
              442,
              445,
              450,
              460,
              470,
              490,
              497,
              500,
              503,
              506,
              510,
              520,
              530,
              543,
              548,
              549,
              550,
              553,
              555,
              560,
              563,
              565,
              570,
              580,
              590,
              610,
              611,
              613,
              616,
              618,
              619,
              620,
              630,
              635,
              640,
              650,
              655,
              658,
              660,
              670,
              690,
              700,
              710,
              715,
              720,
              730,
              740,
              745,
              746,
              747,
              750,
              760,
              770,
              775,
              780,
              790,
              795,
              796,
              797,
              800,
              803,
              805,
              808,
              810,
              812,
              815,
              820,
              830,
              835,
              840
            ]
          },
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              1040,
              1370,
              1440,
              1610,
              1690,
              1720,
              1820,
              1980,
              2080,
              2140,
              2220,
              2390,
              2550,
              2710,
              2770,
              2850,
              690,
              710
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Sob Erradicação",
        "estados": [
          {
            "uf": "RN",
            "ibge": 24,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1080,
              1130,
              1190,
              1225,
              2040
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área Livre de Praga",
        "estados": [
          {
            "uf": "PA",
            "ibge": 15,
            "municipios": [
              40,
              145,
              230,
              307,
              350,
              475,
              480,
              495,
              540,
              600,
              680
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área de Status Desconhecido",
        "estados": [
          {
            "uf": "AC",
            "ibge": 12,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AP",
            "ibge": 16,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "AM",
            "ibge": 21,
            "municipios": [
              9999
            ]
          }
        ]
      },
      {
        "status_fitossanitário": "Área de SMR",
        "estados": [
          {
            "uf": "PR",
            "ibge": 41,
            "municipios": [
              1000,
              1005,
              1007,
              1010,
              1020,
              1030,
              1040,
              1050,
              1060,
              1065,
              1070,
              1080,
              1090,
              1095,
              1100,
              1110,
              1120,
              1130,
              1140,
              1150,
              1155,
              1160,
              1170,
              1180,
              1190,
              1200,
              1210,
              1220,
              1230,
              1240,
              1250,
              1260,
              1270,
              1275,
              1280,
              1290,
              1295,
              1300,
              1310,
              1320,
              1325,
              1330,
              1340,
              1342,
              1345,
              1350,
              1360,
              1370,
              1373,
              1375,
              1380,
              1390,
              1400,
              1410,
              1420,
              1435,
              1440,
              1450,
              1460,
              1470,
              1480,
              1490,
              1500,
              1510,
              1520,
              1530,
              1535,
              1540,
              1545,
              1550,
              1560,
              1573,
              1575,
              1580,
              1585,
              1590,
              1600,
              1605,
              1610,
              1630,
              1640,
              1650,
              1660,
              1670,
              1680,
              1690,
              1695,
              1700,
              1705,
              1710,
              1720,
              1721,
              1722,
              1725,
              1727,
              1729,
              1730,
              1740,
              1745,
              1750,
              1760,
              1770,
              1780,
              1790,
              1800,
              1810,
              1830,
              1840,
              1845,
              1850,
              1860,
              1870,
              1880,
              1885,
              1890,
              1900,
              1910,
              1920,
              1925,
              1930,
              1940,
              1960,
              1965,
              1970,
              1980,
              1990,
              2000,
              2010,
              2015,
              2020,
              2030,
              2033,
              2035,
              2040,
              2050,
              2060,
              2065,
              2070,
              2085,
              2090,
              2100,
              2110,
              2120,
              2125,
              2130,
              2135,
              2140,
              2150,
              2160,
              2170,
              2175,
              2180,
              2190,
              2200,
              2210,
              2215,
              2217,
              2230,
              2240,
              2250,
              2260,
              2265,
              2270,
              2280,
              2290,
              2300,
              2310,
              2320,
              2330,
              2340,
              2350,
              2360,
              2370,
              2380,
              2382,
              2385,
              2390,
              2395,
              2400,
              2402,
              2405,
              2410,
              2420,
              2430,
              2440,
              2450,
              2460,
              2470,
              2480,
              2490,
              2500,
              2510,
              2520,
              2530,
              2535,
              2540,
              2545,
              2555,
              2560,
              2570,
              2575,
              2580,
              2590,
              2600,
              2610,
              2620,
              2625,
              2627,
              2630,
              2635,
              2640,
              2650,
              2660,
              2665,
              2667,
              2670,
              2680,
              2690,
              2700,
              2710,
              2720,
              2730,
              2740,
              2750,
              2770,
              2780,
              2785,
              2790,
              2795,
              2796,
              2800,
              2810,
              2820,
              2830,
              2840,
              2850,
              2853,
              2855,
              2860,
              2862,
              2865,
              2870,
              2880,
              10,
              45,
              50,
              60,
              70,
              80,
              90,
              100,
              105,
              110,
              115,
              130,
              140,
              150,
              160,
              165,
              170,
              185,
              190,
              200,
              210,
              220,
              240,
              250,
              260,
              270,
              275,
              280,
              290,
              300,
              302,
              304,
              305,
              315,
              320,
              322,
              330,
              335,
              337,
              340,
              345,
              347,
              350,
              360,
              370,
              380,
              390,
              395,
              405,
              410,
              430,
              440,
              442,
              445,
              450,
              460,
              465,
              470,
              480,
              490,
              500,
              510,
              530,
              540,
              550,
              560,
              570,
              590,
              600,
              610,
              630,
              640,
              645,
              650,
              655,
              657,
              660,
              670,
              680,
              685,
              700,
              710,
              712,
              715,
              720,
              725,
              730,
              740,
              750,
              752,
              753,
              754,
              755,
              760,
              770,
              773,
              775,
              780,
              785,
              790,
              800,
              810,
              820,
              830,
              832,
              840,
              845,
              850,
              855,
              860,
              865,
              870,
              880,
              890,
              895,
              900,
              910,
              920,
              930,
              940,
              965,
              970,
              975,
              980,
              990
            ]
          },
          {
            "uf": "GO",
            "ibge": 52,
            "municipios": [
              1150,
              1210,
              1850,
              1880,
              350,
              410,
              425,
              650,
              915,
              993
            ]
          },
          {
            "uf": "MG",
            "ibge": 31,
            "municipios": [
              1110,
              1455,
              2620,
              2710,
              3420,
              3440,
              5160
            ]
          },
          {
            "uf": "CE",
            "ibge": 23,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RR",
            "ibge": 14,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MT",
            "ibge": 51,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "MS",
            "ibge": 50,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "PI",
            "ibge": 22,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "RS",
            "ibge": 43,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SP",
            "ibge": 35,
            "municipios": [
              9999
            ]
          },
          {
            "uf": "SC",
            "ibge": 42,
            "municipios": [
              9999
            ]
          }
        ]
      }
    ]
  }
];

export {
  dbVersion,
  estados,
  hospedeiros,
  legislacoes,
  pragas,
  rules,
  status_municipio
};
