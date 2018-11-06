//CEFiTI - Pragas

export interface Praga {
  prag: string
  hosp: string[]
  pragc: string
  files: [
    {
      leg: string
      link: string
    }
  ]
}

const pragas: Praga[] = [
  /*{
    prag: 'Raoiella indica',
    pragc: 'ÁCARO-VERMELHO-DAS-PALMEIRAS',
    hosp: [
      'Euterpe oleracea',
      'Euterpe precatoria',
      'Alpínia purpurata',
      'Alpínia zerumbet',
      'Syagrus schizophylla',
      'Ravenala madagascariensis',
      'Musa spp.',
      'Etlingera alatior',
      'Mauritia flexuosa',
      'Canna indica',
      'Cocos nucifera',
      'Butia capitata',
      'Corypha umbraculifera',
      'Elaeis guineensis',
      'Strelitzia reginae',
      'Heliconia spp.',
      'Syagrus romanzoffianum',
      'Licuala grandis',
      'Coccothrinax miraguama',
      'Microcycas calocoma',
      'Coccothrinax barbadensis',
      'Aiphanes spp.',
      'Pseudophoenix vinifera',
      'Dypsis lutescens',
      'Veitchia arecina',
      'Chamaedora spp.',
      'Veitchia maerrillii',
      'Phoenix roebelenii',
      'Acoelorraphe wrightii',
      'Wodyetia bifurcata',
      'Archontophoenix alexandrae',
      'Cycas spp.',
      'Areca sp.',
      'Bismarckia nobilis',
      'Washingtonia robusta',
      'Ptychosperma macarthurii',
      'Beccariophoenix madagascariensis',
      'Bactris plumeriana',
      'Washingtonia filifera',
      'Pseudophoenix sargentii',
      'Roystonea borinquena',
      'Schippia concolor',
      'Thrinax radiata',
      'Livistona chinensis',
      'Pritchardia pacifica',
      'Coccothrinax argentata',
      'Dictyosperma album',
      'Caryota mitis',
      'Caryota urens',
      'Raphis excelsa',
      'Roystonia regia',
      'Ptychosperma elegans',
      'Dypsis decaryi',
      'Pritchardia vuylstekeana',
      'Bactris gasipaes',
      'Bactris plumeriana',
      'Phoenix dactylifera',
      'Phoenix canariensis',
      'Phoenix reclinata',
      'Arecaceae (espécies desta família)',
      'Heliconiaceae (espécies desta família)',
      'Musaceae (espécies desta família)',
      'Pandanaceae (espécies desta família)',
      'Strelitziaceae (espécies desta família)',
      'Zingiberaceae (espécies desta família)',
    ],
    files: [
      { leg: 'Instrução Normativa MAPA nº 14, de 6 de abril de 2010', link: 'IN14-2010.pdf' },
    ],
  },*/
  {
    prag: 'Bactrocera carambolae',
    pragc: 'MOSCA-DA-CARAMBOLA',
    hosp: [
      'Averrhoa carambola',
      'Psidium guajava',
      'Syzygium malaccense',
      'Citrus aurantium',
      'Manilkara zapota',
      'Mangifera indica',
      'Malpighia punicifolia',
      'Terminalia catappa',
      'Garcinia dulcis',
      'Chrysophyllum cainito',
      'Spondias lutea',
      'Anacardium occidentale',
      'Artocarpus altilis',
      'Arenga pinnata',
      'Artocarpus integrifolia',
      'Syzygium samarangense',
      'Syzygium aqueum',
      'Syzygium jambos',
      'Ziziphus mauritiana',
      'Ziziphus jujuba',
      'Citrus sinensis',
      'Averrhoa bilimbi',
      'Capsicum annuum',
      'Eugenia uniflora',
      'Citrus paradisi',
      'Citrus reticulata',
      'Licopersicum esculentum',
    ],
    files: [{ leg: 'Portaria SDA/MAPA nº 21, de 25 de março de 1999', link: 'PORT21-1999.pdf' }],
  },
  {
    prag: 'Schizotetranychus hindustanicus',
    pragc: 'ÁCARO HINDU',
    hosp: [
      'Cocos nucifera',
      'Azadirachta indica',
      'Sorghum bicolor',
      'Acacia sp.',
      'Melia azedarach',
      'Citrus spp.',
    ],
    files: [
      { leg: 'Instrução Normativa MAPA nº 8, de 17 de abril de 2012', link: 'IN08-2012.pdf' },
    ],
  },
  {
    prag: 'BSV e CMV',
    pragc: 'BANANA STREAK VIRUS e CUCUMBER MOSAIC VIRUS',
    hosp: ['Musa spp.'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 46, de 27 de dezembro de 2010', link: 'IN46-2010.pdf' },
    ],
  },
  {
    prag: 'Xanthomonas campestris pv. viticola',
    pragc: 'CANCRO-DA-VIDEIRA',
    hosp: ['Vitis spp. e seus híbridos'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 2, de 6 de fevereiro de 2014', link: 'IN02-2014.pdf' },
    ],
  },
  {
    prag: 'Neonectria ditissima (Neonectria galligena)',
    pragc: 'CANCRO EUROPEU DAS POMÁCEAS',
    hosp: ['Malus sp.'],
    files: [{ leg: 'Instrução Normativa nº 20, de 20 de junho de 2013', link: 'IN20-2013.pdf' }],
  },
  {
    prag: 'Candidatus Liberibacter spp.',
    pragc: 'GREENING',
    hosp: ['Citrus spp.', 'Fortunella spp.', 'Poncirus spp.', 'Murraya paniculata'],
    files: [{ leg: 'Instrução Normativa nº 53, de 16 de outubro de 2008', link: 'IN53-2008.pdf' }],
  },
  {
    prag: 'Guignardia citricarpa (=Phyllosticta citricarpa)',
    pragc: 'PINTA-PRETA-DOS-CITROS',
    hosp: ['Citrus spp.'],
    files: [
      { leg: 'Instrução Normativa MAPA nº 3, de 8 de janeiro de 2008', link: 'IN03-2008.pdf' },
    ],
  },
  {
    prag: 'Sinoxylon conigerum',
    pragc: 'BROCA CONÍGERA',
    hosp: [
      'Myroxylon balsamum',
      'Anacardium occidentale',
      'Delonix regia',
      'Manihot esculenta',
      'Mangifera indica',
      'Switenia macrophyla',
      'Hevea brasiliensis',
      'Tectona grandis',
    ],
    files: [{ leg: '', link: '' }],
  },
  {
    prag: 'Ralstonia solanacearum raça 2',
    pragc: 'MOKO-DA-BANANEIRA',
    hosp: ['Musa spp.', 'Heliconia spp.'],
    files: [
      { leg: 'Instrução Normativa SDA/MAPA nº 17, de 27 de maio de 2009', link: 'IN17-2009.pdf' },
    ],
  },
  {
    prag: 'Mycosphaerella fijiensis',
    pragc: 'SIGATOKA NEGRA',
    hosp: ['Musa spp.', 'Heliconia spp.'],
    files: [
      { leg: 'Instrução Normativa SDA/MAPA nº 17, de 31 de maio de 2005', link: 'IN17-2005.pdf' },
    ],
  },
  {
    prag: 'Anthonomus tomentosus',
    pragc: 'ANTHONOMUS TOMENTOSUS',
    hosp: ['Malpighia spp.'],
    files: [
      {
        leg: 'Instrução Normativa MAPA/SDA nº. 38, de 01 de outubro de 2018',
        link: 'IN38-2018.pdf',
      },
    ],
  },
  {
    prag: 'Xanthomonas citri subsp. citri',
    pragc: 'CANCRO CÍTRICO',
    hosp: ['Citrus spp.', 'Fortunella spp.', 'Poncirus spp.'],
    files: [{ leg: 'Instrução Normativa nº 21, de 25 de abril de 2018', link: 'IN21-2018.pdf' }],
  },
]

export { pragas }
