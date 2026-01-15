//CEFiTI - Regras

// prettier-ignore
export const regras = globalThis.regras = [

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
]
