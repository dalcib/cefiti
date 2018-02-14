//CEFiTI - Hospedeiros

interface Hospedeiro {
  nomeVul: string
  nomeSci: string
  count?: number
}

const hospedeiros: Hospedeiro[] = ​​​​​[ 
  { nomeVul: 'Abacate(Persea gratissima)',​​​​​ nomeSci: 'Persea gratissima',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Abeto Europeu', nomeSci: 'Picea abies', count: 1 },​​​​​
​​​​​  { nomeVul: 'Abeto Vermelho Comum',​​​​​ nomeSci: 'Picea abies',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Abiu', nomeSci: 'Chrysophyllum cainito', count: 1 },​​​​​
​​​​​  { nomeVul: 'Acerola',​​​​​ nomeSci: 'Malpighia punicifolia',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Acerola(qualquer espécie)',​​​​​ nomeSci: 'Malpighia spp.',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Acácia', nomeSci: 'Acacia sp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Albízia', nomeSci: 'Albizia lebbeck', count: 1 },​​​​​
​​​​​  { nomeVul: 'Alder', nomeSci: 'Alnus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Alder Cinza', nomeSci: 'Alnus incana', count: 1 },​​​​​
​​​​​  { nomeVul: 'Alder Japonês', nomeSci: 'Alnus japonica', count: 1 },​​​​​
​​​​​  { nomeVul: 'Alder Negro', nomeSci: 'Alnus glutinosa', count: 1 },​​​​​
​​​​​  { nomeVul: 'Alder Vermelha', nomeSci: 'Alnus rubra', count: 1 },​​​​​
​​​​​  { nomeVul: 'Algodão Americano',​​​​​ nomeSci: 'Populus wislizeni',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Ameixa', nomeSci: 'Prunus spp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Ameixeira-japonesa',​​​​​ nomeSci: 'Prunus salicina',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Amelanchier',​​​​​ nomeSci: 'Amelanchier laevis',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Amendoeira',​​​​​ nomeSci: 'Terminalia catappa',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Amieiro', nomeSci: 'Alnus glutinosa', count: 1 },​​​​​
​​​​​  { nomeVul: 'Amieiro Negro', nomeSci: 'Frangula almus', count: 1 },​​​​​
​​​​​  { nomeVul: 'Angico', nomeSci: 'Acacia sp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Arapaju', nomeSci: 'Manilkara zapota', count: 1 },​​​​​
​​​​​  { nomeVul: 'Arbusto Espinheiro do Bosque',​​​​​ nomeSci: 'Crataegus oxyacanthoides (syn: oxyacantha)',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Arbusto Espinhento',​​​​​ nomeSci: 'Craetaegus monogyna',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Aveia', nomeSci: 'Avena sativa', count: 1 },​​​​​
​​​​​  { nomeVul: 'Aveleira Japonesa',​​​​​ nomeSci: 'Corylus sieboldiana',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Aveleira Siberiana',​​​​​ nomeSci: 'Corylus heterophylla var. thunbergiii',​​​​​ count: 1 },​​​​​
​​​​​  { nomeVul: 'Avelã', nomeSci: 'Corylus avellana', count: 1 },​​​​​
​​​​​  { nomeVul: 'Azevinho', nomeSci: 'Ilex aquifolium', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bacupari', nomeSci: 'Garcinia dulcis', count: 1 },​​​​​
​​​​​  { nomeVul: 'Banana', nomeSci: 'Musa spp.', count: 3 },​​​​​
​​​​​  { nomeVul: 'Bergamota', nomeSci: 'Citrus reticulata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bilimbi',​​​​​ nomeSci: 'Chrysophyllum cainito',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo', nomeSci: 'Acer sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(A.mono)',​​​​​
​​​​​    nomeSci: 'Acer mono subsp. Heterophyllum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(A.negundo)',​​​​​
​​​​​    nomeSci: 'Acer negundo',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(A.sacharum)',​​​​​
​​​​​    nomeSci: 'Acer saccharum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(A.spicatum)',​​​​​
​​​​​    nomeSci: 'Acer spicatum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(Acer pennsylvanicum)',​​​​​
​​​​​    nomeSci: 'Acer pennsylvanicum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo(Acer pseudoplatanus)',​​​​​
​​​​​    nomeSci: 'Acer pseudoplatanus',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo Japonês', nomeSci: 'Acer palmatum', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo Vermelho(A.macrophyllum)',​​​​​
​​​​​    nomeSci: 'Acer macrophyllum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo Vermelho(A.rubrum)',​​​​​
​​​​​    nomeSci: 'Acer rubrum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bordo-da-videira',​​​​​
​​​​​    nomeSci: 'Acer circinatum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Broto Vermelho Oriental',​​​​​
​​​​​    nomeSci: 'Cercis canadensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bálsamo', nomeSci: 'Myroxylon balsamum', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula', nomeSci: 'Betula sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Branca(B.papyrifera)',​​​​​
​​​​​    nomeSci: 'Betula papyrifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Branca(B.pubescens)',​​​​​
​​​​​    nomeSci: 'Betula pubescens',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Branca(B.pendula)',​​​​​
​​​​​    nomeSci: 'Betula pendula (syn:verrucosa)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Cinza',​​​​​
​​​​​    nomeSci: 'Betula populifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Lenta', nomeSci: 'Betula lenta', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula lenta', nomeSci: 'Betula nigra', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Lutea',​​​​​
​​​​​    nomeSci: 'Betula lutea (synonym: alleghaniensis)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Monarca',​​​​​
​​​​​    nomeSci: 'Betula maximowicziana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Negra', nomeSci: 'Betula nigra', count: 1 },​​​​​
​​​​​  { nomeVul: 'Bétula Papel',​​​​​
​​​​​    nomeSci: 'Betula papyrifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cabeça-de-negro',​​​​​
​​​​​    nomeSci: 'Albizia lebbeck',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Caimito',​​​​​
​​​​​    nomeSci: 'Chrysophyllum cainito',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cajazeiro', nomeSci: 'Spondias lutea', count: 1 },​​​​​
​​​​​  { nomeVul: 'Caju', nomeSci: 'Anacardium occidentale', count: 2 },​​​​​
​​​​​  { nomeVul: 'Carambola', nomeSci: 'Averrhoa carambola', count: 1 },​​​​​
​​​​​  { nomeVul: 'Carambola amarela',​​​​​
​​​​​    nomeSci: 'Chrysophyllum cainito',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho', nomeSci: 'Quercus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Branco', nomeSci: 'Quercus alba', count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Branco do Brejo',​​​​​
​​​​​    nomeSci: 'Quercus bicolor',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Branco Oregon',​​​​​
​​​​​    nomeSci: 'Quercus garryana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Campeão(Q.borealis)',​​​​​
​​​​​    nomeSci: 'Quercus borealis (syn: rubra)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Campeão(Q.rubra)',​​​​​
​​​​​    nomeSci: 'Quercus rubra',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Castanheiro',​​​​​
​​​​​    nomeSci: 'Quercus montana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Escarlata',​​​​​
​​​​​    nomeSci: 'Quercus coccinea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Folha Diamante',​​​​​
​​​​​    nomeSci: 'Quercus laurifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Glorioso',​​​​​
​​​​​    nomeSci: 'Quercus laurifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Glorioso do Brejo',​​​​​
​​​​​    nomeSci: 'Quercus laurifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Konara',​​​​​
​​​​​    nomeSci: 'Quercus glandulifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Koreano',​​​​​
​​​​​    nomeSci: 'Quercus glandulifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Mongoliano',​​​​​
​​​​​    nomeSci: 'Quercus mongolica var grosserrata',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Obtuso',​​​​​
​​​​​    nomeSci: 'Quercus laurifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Oregon',​​​​​
​​​​​    nomeSci: 'Quercus garryana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Preto',​​​​​
​​​​​    nomeSci: 'Quercus velutina',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Vermelho do Norte(Q.borealis)',​​​​​
​​​​​    nomeSci: 'Quercus borealis (syn: rubra)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Vermelho do Norte(Q.rubra)',​​​​​
​​​​​    nomeSci: 'Quercus rubra',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho Água',​​​​​
​​​​​    nomeSci: 'Quercus laurifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho-alvarinho',​​​​​
​​​​​    nomeSci: 'Quercus robur',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho-roble', nomeSci: 'Quercus robur', count: 1 },​​​​​
​​​​​  { nomeVul: 'Carvalho-vermelho',​​​​​
​​​​​    nomeSci: 'Quercus robur',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Castanha-da-Índia',​​​​​
​​​​​    nomeSci: 'Aesculus sp.',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Castanha-da-Índia(A.hippocastanum)',​​​​​
​​​​​    nomeSci: 'Aesculus hippocastanum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Castanheiro Europeu',​​​​​
​​​​​    nomeSci: 'Castanea dentata',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cereja de Pássaro',​​​​​
​​​​​    nomeSci: 'Prunus ssiori',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cereja de Pássaro Virginia',​​​​​
​​​​​    nomeSci: 'Prunus virginiana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cerejeira', nomeSci: 'Prunus avium', count: 1 },​​​​​
​​​​​  { nomeVul: 'Cerejeira Chorona',​​​​​
​​​​​    nomeSci: 'Prunus subhirtella var. pendula',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cerejeira Negra',​​​​​
​​​​​    nomeSci: 'Prunus serotina',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo', nomeSci: 'Populus spp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo(P.x canadensis)',​​​​​
​​​​​    nomeSci: 'Populus x canadensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo Branco', nomeSci: 'Populus alba', count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo Tremedor',​​​​​
​​​​​    nomeSci: 'Populus tremula',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo Trêmulo',​​​​​
​​​​​    nomeSci: 'Populus tremuloides',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Choupo-bálsamo',​​​​​
​​​​​    nomeSci: 'Populus balsamifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Chuva-de-ouro',​​​​​
​​​​​    nomeSci: 'Laburnum anagyrioides',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Chá-da-Índia',​​​​​
​​​​​    nomeSci: 'Camellia sinensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cinamomo', nomeSci: 'Melia azedarach', count: 1 },​​​​​
​​​​​  { nomeVul: 'Cinza Japonês',​​​​​
​​​​​    nomeSci: 'Fraxinus mandshurica var. Japonica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cinza-da-montanha', nomeSci: 'Sorbus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Citros', nomeSci: 'Citrus spp.', count: 4 },​​​​​
​​​​​  { nomeVul: 'Coprosma Frondoso Fino',​​​​​
​​​​​    nomeSci: 'Coprosma areolata',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Coqueiro', nomeSci: 'Cocos nucifera', count: 1 },​​​​​
​​​​​  { nomeVul: 'Corrente-de-ouro',​​​​​
​​​​​    nomeSci: 'Laburnum anagyrioides',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Cárpino', nomeSci: 'Carpinus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Cárpino Betulas',​​​​​
​​​​​    nomeSci: 'Carpinus betulas',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Espinho Branco',​​​​​
​​​​​    nomeSci: 'Craetaegus monogyna',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia', nomeSci: 'Fagus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia Americana',​​​​​
​​​​​    nomeSci: 'Fagus americana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia Cobre', nomeSci: 'Fagus sylvantica', count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia do Oriente',​​​​​
​​​​​    nomeSci: 'Fagus orientalis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia Japonesa',​​​​​
​​​​​    nomeSci: 'Fagus crenata f. grandifolia (syn. Americana)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Faia Roxa',​​​​​
​​​​​    nomeSci: 'Fagus silvatica f. purpurea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Falso Castanho Japonês',​​​​​
​​​​​    nomeSci: 'Aesculus turbinata',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Faveiro', nomeSci: 'Albizia lebbeck', count: 1 },​​​​​
​​​​​  { nomeVul: 'Feixe Branco', nomeSci: 'Sorbus aria', count: 1 },​​​​​
​​​​​  { nomeVul: 'Flamboyant', nomeSci: 'Delonix regia', count: 1 },​​​​​
​​​​​  { nomeVul: 'Fortunela', nomeSci: 'Fortunella spp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Freixo(F.bungeana)',​​​​​
​​​​​    nomeSci: 'Fraxinus bungeana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Freixo(F.excelsior)',​​​​​
​​​​​    nomeSci: 'Fraxinus excelsior',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Fruta Pão', nomeSci: 'Artocarpus altilis', count: 1 },​​​​​
​​​​​  { nomeVul: 'Gafanhoto Preto',​​​​​
​​​​​    nomeSci: 'Robinia pseudoacacia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Goiaba', nomeSci: 'Psidium guajava', count: 1 },​​​​​
​​​​​  { nomeVul: 'Goma Preta', nomeSci: 'Nyssa sylvatica', count: 1 },​​​​​
​​​​​  { nomeVul: 'Gomuto', nomeSci: 'Arenga pinnata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Grão Amargo',​​​​​
​​​​​    nomeSci: 'Prunus virginiana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Helicônia', nomeSci: 'Heliconia spp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Jaca', nomeSci: 'Artocarpus integrifolia', count: 1 },​​​​​
​​​​​  { nomeVul: 'Jambo Branco(S.aqueum)',​​​​​
​​​​​    nomeSci: 'Syzygium aqueum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Jambo Branco(S.samarangense)',​​​​​
​​​​​    nomeSci: 'Syzygium samarangense',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Jambo D\'água',​​​​​
​​​​​    nomeSci: 'Syzygium aqueum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Jambo Rosa', nomeSci: 'Syzygium jambos', count: 1 },​​​​​
​​​​​  { nomeVul: 'Jambo Vermelho',​​​​​
​​​​​    nomeSci: 'Syzygium malaccense',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Juglans', nomeSci: 'Juglans sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Jujuba (Z. jujuba)',​​​​​
​​​​​    nomeSci: 'Ziziphus jujuba',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Jujuba (Z. mauritiana)',​​​​​
​​​​​    nomeSci: 'Ziziphus mauritiana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Jurema', nomeSci: 'Acacia sp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Karamu', nomeSci: 'Coprosma lucida', count: 1 },​​​​​
​​​​​  { nomeVul: 'Kowhai', nomeSci: 'Sophora microphylla', count: 1 },​​​​​
​​​​​  { nomeVul: 'Laranja', nomeSci: 'Citrus sinensis', count: 2 },​​​​​
​​​​​  { nomeVul: 'Laranja Azeda',​​​​​
​​​​​    nomeSci: 'Citrus aurantium',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Limão Cayena',​​​​​
​​​​​    nomeSci: 'Averrhoa bilimbi',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Linda-dos-jardins',​​​​​
​​​​​    nomeSci: 'Rhus typhina',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Louro Califórnia',​​​​​
​​​​​    nomeSci: 'Umbelluraria californica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Manchu Cinza',​​​​​
​​​​​    nomeSci: 'Fraxinus mandshurica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Mandioca', nomeSci: 'Manihot esculenta', count: 1 },​​​​​
​​​​​  { nomeVul: 'Manga', nomeSci: 'Mangifera indica', count: 2 },​​​​​
​​​​​  { nomeVul: 'Mararaju', nomeSci: 'Manilkara zapota', count: 1 },​​​​​
​​​​​  { nomeVul: 'Maça', nomeSci: 'Malus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçaranduba', nomeSci: 'Manilkara zapota', count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã (M. communis)',​​​​​
​​​​​    nomeSci: 'Malus communis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã (M. pumila var domestica)',​​​​​
​​​​​    nomeSci: 'Malus pumila var domestica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã (M. pumila)',​​​​​
​​​​​    nomeSci: 'Malus pumila',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã (M. x domestica)',​​​​​
​​​​​    nomeSci: 'Malus x domestica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã (Pyrus malus)',​​​​​
​​​​​    nomeSci: 'Pyrus malus',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Maçã Silvestre',​​​​​
​​​​​    nomeSci: 'Malus sylvestris',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Mexerica', nomeSci: 'Citrus reticulata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Mogno', nomeSci: 'Switenia macrophyla', count: 1 },​​​​​
​​​​​  { nomeVul: 'Mogno Indiano Ocidental',​​​​​
​​​​​    nomeSci: 'Swietenia mahagoni',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Murta', nomeSci: 'Murraya paniculata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Nespereira',​​​​​
​​​​​    nomeSci: 'Eriobotrya japonica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nim', nomeSci: 'Azadirachta indica', count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira', nomeSci: 'Juglans sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Amarga',​​​​​
​​​​​    nomeSci: 'Carya cordiformis',​​​​​
​​​​​    count: 2 },​​​​​
​​​​​  { nomeVul: 'Nogueira Amarga', nomeSci: 'Carya spp.', count: 0 },​​​​​
​​​​​  { nomeVul: 'Nogueira Amarga Casca de Pelúcia',​​​​​
​​​​​    nomeSci: 'Carya ovata',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Amarga Coração Branco',​​​​​
​​​​​    nomeSci: 'Carya tomentosa',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Amarga de Porco',​​​​​
​​​​​    nomeSci: 'Carya glabra',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Branca',​​​​​
​​​​​    nomeSci: 'Juglans cinerea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Comum', nomeSci: 'Juglans regia', count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira europeia',​​​​​
​​​​​    nomeSci: 'Juglans regia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Pecã',​​​​​
​​​​​    nomeSci: 'Carya illinoensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Nogueira Preta', nomeSci: 'Juglans nigra', count: 1 },​​​​​
​​​​​  { nomeVul: 'Noruega Abeto', nomeSci: 'Picea abies', count: 1 },​​​​​
​​​​​  { nomeVul: 'Olmo', nomeSci: 'Ulmus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Olmo Americano',​​​​​
​​​​​    nomeSci: 'Ulmus americana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Olmo Escocês',​​​​​
​​​​​    nomeSci: 'Ulmus glabra (syn. montana)',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Padreiro', nomeSci: 'Acer pseudoplatanus', count: 1 },​​​​​
​​​​​  { nomeVul: 'Palma forrageira',​​​​​
​​​​​    nomeSci: 'Opuntia cochenillifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pau Cachorro', nomeSci: 'Cornus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Pau Cachorro do Pacífico',​​​​​
​​​​​    nomeSci: 'Cornus muttallii',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pera Asiática',​​​​​
​​​​​    nomeSci: 'Pyrus pyrifolia',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pera Nashi', nomeSci: 'Pyrus pyrifolia', count: 1 },​​​​​
​​​​​  { nomeVul: 'Pereira Europeia',​​​​​
​​​​​    nomeSci: 'Pyrus communis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pereira Japonesa',​​​​​
​​​​​    nomeSci: 'Pyrus pyrifolia var culta',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pimenta Picante',​​​​​
​​​​​    nomeSci: 'Capsicum annuum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pimenta-do-diabo',​​​​​
​​​​​    nomeSci: 'Capsicum annuum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pitanga Vermelha',​​​​​
​​​​​    nomeSci: 'Eugenia uniflora',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Plátano', nomeSci: 'Platanus orientalis', count: 1 },​​​​​
​​​​​  { nomeVul: 'Plátano Oriental',​​​​​
​​​​​    nomeSci: 'Platanus orientalis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Pomelo', nomeSci: 'Citrus paradisi', count: 1 },​​​​​
​​​​​  { nomeVul: 'Poncirus', nomeSci: 'Poncirus spp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Ponkan', nomeSci: 'Citrus reticulata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Ribes', nomeSci: 'Ribes sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Rosa', nomeSci: 'Rosa spp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Rustifina Rus', nomeSci: 'Rhus typhina', count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Branco', nomeSci: 'Salix alba', count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Cinza',​​​​​
​​​​​    nomeSci: 'Salix cinerea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Dourado',​​​​​
​​​​​    nomeSci: 'Salix alba var Vitelina',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Preto',​​​​​
​​​​​    nomeSci: 'Salix nigricans',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Púrpura',​​​​​
​​​​​    nomeSci: 'Salix purpurea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro Velho Mundo',​​​​​
​​​​​    nomeSci: 'Salix amygdalina',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro-folha-de-pêssego',​​​​​
​​​​​    nomeSci: 'Salix amygdaloides',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salgueiro-taco-de-críquete',​​​​​
​​​​​    nomeSci: 'Salix alba L. Coerulea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Salix', nomeSci: 'Salix spp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Sanguinho', nomeSci: 'Frangula almus', count: 1 },​​​​​
​​​​​  { nomeVul: 'Sapoti', nomeSci: 'Manilkara zapota', count: 1 },​​​​​
​​​​​  { nomeVul: 'Seringueira',​​​​​
​​​​​    nomeSci: 'Hevea brasiliensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Sete Copas',​​​​​
​​​​​    nomeSci: 'Terminalia catappa',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Sorgo', nomeSci: 'Sorghum bicolor', count: 1 },​​​​​
​​​​​  { nomeVul: 'Sorva', nomeSci: 'Sorbus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Sorva (S. domestica)',​​​​​
​​​​​    nomeSci: 'Sorbus domestica',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Sumac Staghorn', nomeSci: 'Rhus typhina', count: 1 },​​​​​
​​​​​  { nomeVul: 'Sófora', nomeSci: 'Sophora microphylla', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tangerina', nomeSci: 'Citrus reticulata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Taperebá', nomeSci: 'Spondias lutea', count: 1 },​​​​​
​​​​​  { nomeVul: 'Teca', nomeSci: 'Tectona grandis', count: 1 },​​​​​
​​​​​  { nomeVul: 'Teja', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tejo', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tella', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Texa', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tilha', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tillera', nomeSci: 'Tilia cordata', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tilo', nomeSci: 'Tilia americana', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tomate',​​​​​
​​​​​    nomeSci: 'Licopersicum esculentum',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Toranja', nomeSci: 'Citrus paradisi', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tramazeira', nomeSci: 'Sorbus aucuparia', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tulipeiro',​​​​​
​​​​​    nomeSci: 'Liriodendron tulipifera',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Tupelo', nomeSci: 'Nyssa sylvatica', count: 1 },​​​​​
​​​​​  { nomeVul: 'Tília', nomeSci: 'Tilia sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Ulmeiro', nomeSci: 'Ulmus sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Unha-de-gato', nomeSci: 'Acacia sp.', count: 2 },​​​​​
​​​​​  { nomeVul: 'Videira e seus híbridos',​​​​​
​​​​​    nomeSci: 'Vitis spp. e seus híbridos',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Vimeiro Púrpura',​​​​​
​​​​​    nomeSci: 'Salix purpurea',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Viola', nomeSci: 'Viola sp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Álamo', nomeSci: 'Populus spp.', count: 1 },​​​​​
​​​​​  { nomeVul: 'Álamo (Populus x canadensis)',​​​​​
​​​​​    nomeSci: 'Populus x canadensis',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Álamo Americano',​​​​​
​​​​​    nomeSci: 'Tilia americana',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Álamo Branco', nomeSci: 'Populus alba', count: 1 },​​​​​
​​​​​  { nomeVul: 'Álamo Grande Dente',​​​​​
​​​​​    nomeSci: 'Populus grandidenta',​​​​​
​​​​​    count: 1 },​​​​​
​​​​​  { nomeVul: 'Árvore Preta',​​​​​
​​​​​    nomeSci: 'Fraxinus nigra (syn. sambucifolia)',​​​​​
​​​​​    count: 1 } ]

// prettier-ignore
/*[
  { nomeVul: "Abacate (Persea gratissima)", nomeSci: "Persea gratissima" },
  { nomeVul: "Abeto Europeu", nomeSci: "Picea abies" },
  { nomeVul: "Abeto Vermelho Comum", nomeSci: "Picea abies" },
  { nomeVul: "Abiu", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Acácia", nomeSci: "Acacia sp." },
  { nomeVul: "Açaí", nomeSci: "Euterpe oleracea" },
  { nomeVul: "Açaí-do-Amazonas", nomeSci: "Euterpe precatoria" },
  { nomeVul: "Açaí-solitário", nomeSci: "Euterpe precatoria" },
  { nomeVul: "Acerola (qualquer espécie)", nomeSci: "Malpighia spp." },
  { nomeVul: "Acerola", nomeSci: "Malpighia punicifolia" },
  { nomeVul: "Álamo (Populus x canadensis)", nomeSci: "Populus x canadensis" },
  { nomeVul: "Álamo Americano", nomeSci: "Tilia americana" },
  { nomeVul: "Álamo Branco", nomeSci: "Populus alba" },
  { nomeVul: "Álamo Grande Dente", nomeSci: "Populus grandidenta" },
  { nomeVul: "Álamo", nomeSci: "Populus spp." },
  { nomeVul: "Albízia", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Alder Cinza", nomeSci: "Alnus incana" },
  { nomeVul: "Alder Japonês", nomeSci: "Alnus japonica" },
  { nomeVul: "Alder Negro", nomeSci: "Alnus glutinosa" },
  { nomeVul: "Alder Vermelha", nomeSci: "Alnus rubra" },
  { nomeVul: "Alder", nomeSci: "Alnus sp." },
  { nomeVul: "Algodão Americano", nomeSci: "Populus wislizeni" },
  { nomeVul: "Alpínia purpurata", nomeSci: "Alpínia purpurata" },
  { nomeVul: "Alpínia zerumbet", nomeSci: "Alpínia zerumbet" },
  { nomeVul: "Ameixa", nomeSci: "Prunus spp." },
  { nomeVul: "Ameixeira-japonesa", nomeSci: "Prunus salicina" },
  { nomeVul: "Amelanchier", nomeSci: "Amelanchier laevis" },
  { nomeVul: "Amendoeira", nomeSci: "Terminalia catappa" },
  { nomeVul: "Amieiro Negro", nomeSci: "Frangula almus" },
  { nomeVul: "Amieiro", nomeSci: "Alnus glutinosa" },
  { nomeVul: "Angico", nomeSci: "Acacia sp." },
  { nomeVul: "Arapaju", nomeSci: "Manilkara zapota" },
  { nomeVul: "Arbusto Espinheiro do Bosque", nomeSci: "Crataegus oxyacanthoides (syn: oxyacantha )" },
  { nomeVul: "Arbusto Espinhento", nomeSci: "Craetaegus monogyna" },
  { nomeVul: "Arecaceae (espécies desta família)", nomeSci: "Arecaceae (espécies desta família)" },
  { nomeVul: "Aricuriroba", nomeSci: "Syagrus schizophylla" },
  { nomeVul: "Árvore Preta", nomeSci: "Fraxinus nigra (syn. sambucifolia)" },
  { nomeVul: "Árvore-do-viajante", nomeSci: "Ravenala madagascariensis" },
  { nomeVul: "Aveia", nomeSci: "Avena sativa" },
  { nomeVul: "Avelã", nomeSci: "Corylus avellana" },
  { nomeVul: "Aveleira Japonesa", nomeSci: "Corylus sieboldiana" },
  { nomeVul: "Aveleira Siberiana", nomeSci: "Corylus heterophylla var. thunbergiii" },
  { nomeVul: "Azevinho", nomeSci: "Ilex aquifolium" },
  { nomeVul: "Bacupari", nomeSci: "Garcinia dulcis" },
  { nomeVul: "Bálsamo", nomeSci: "Myroxylon balsamum" },
  { nomeVul: "Banana", nomeSci: "Musa spp." },
  { nomeVul: "Bastão-do-imperador", nomeSci: "Etlingera alatior" },
  { nomeVul: "Bergamota", nomeSci: "Citrus reticulata" },
  { nomeVul: "Bétula Branca (B. papyrifera)", nomeSci: "Betula papyrifera" },
  { nomeVul: "Bétula Branca (B. pubescens)", nomeSci: "Betula pubescens" },
  { nomeVul: "Bétula Cinza", nomeSci: "Betula populifolia" },
  { nomeVul: "Bétula Lenta", nomeSci: "Betula lenta" },
  { nomeVul: "Bétula lenta", nomeSci: "Betula nigra" },
  { nomeVul: "Bétula Lutea", nomeSci: "Betula lutea (synonym: alleghaniensis)" },
  { nomeVul: "Bétula Monarca", nomeSci: "Betula maximowicziana" },
  { nomeVul: "Bétula Negra", nomeSci: "Betula nigra" },
  { nomeVul: "Bétula Papel", nomeSci: "Betula papyrifera" },
  { nomeVul: "Bétula Prata", nomeSci: "Betula pendula (syn: verrucosa)" },
  { nomeVul: "Bétula", nomeSci: "Betula sp." },
  { nomeVul: "Bilimbi", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Bordo (A. mono)", nomeSci: "Acer mono subsp. Heterophyllum" },
  { nomeVul: "Bordo (A. negundo)", nomeSci: "Acer negundo" },
  { nomeVul: "Bordo (A. sacharum)", nomeSci: "Acer saccharum" },
  { nomeVul: "Bordo (A. spicatum)", nomeSci: "Acer spicatum" },
  { nomeVul: "Bordo (Acer pennsylvanicum)", nomeSci: "Acer pennsylvanicum" },
  { nomeVul: "Bordo (Acer pseudoplatanus)", nomeSci: "Acer pseudoplatanus" },
  { nomeVul: "Bordo Japonês", nomeSci: "Acer palmatum" },
  { nomeVul: "Bordo Vermelho (A. macrophyllum)", nomeSci: "Acer macrophyllum" },
  { nomeVul: "Bordo Vermelho (A. rubrum)", nomeSci: "Acer rubrum" },
  { nomeVul: "Bordo", nomeSci: "Acer sp." },
  { nomeVul: "Bordo-da-videira", nomeSci: "Acer circinatum" },
  { nomeVul: "Broto Vermelho Oriental", nomeSci: "Cercis canadensis" },
  { nomeVul: "Buriti", nomeSci: "Mauritia flexuosa" },
  { nomeVul: "Cabeça-de-negro", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Caimito", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Cajazeiro", nomeSci: "Spondias lutea" },
  { nomeVul: "Caju", nomeSci: "Anacardium occidentale" },
  { nomeVul: "Cana-da-Índia", nomeSci: "Canna indica" },
  { nomeVul: "Carambola amarela", nomeSci: "Chrysophyllum cainito" },
  { nomeVul: "Carambola", nomeSci: "Averrhoa carambola" },
  { nomeVul: "Cárpino Betulas", nomeSci: "Carpinus betulas" },
  { nomeVul: "Cárpino", nomeSci: "Carpinus sp." },
  { nomeVul: "Carvalho Água", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Branco do Brejo", nomeSci: "Quercus bicolor" },
  { nomeVul: "Carvalho Branco Oregon", nomeSci: "Quercus garryana" },
  { nomeVul: "Carvalho Branco", nomeSci: "Quercus alba" },
  { nomeVul: "Carvalho Campeão (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
  { nomeVul: "Carvalho Campeão (Q. rubra)", nomeSci: "Quercus rubra" },
  { nomeVul: "Carvalho Castanheiro", nomeSci: "Quercus montana" },
  { nomeVul: "Carvalho Escarlata", nomeSci: "Quercus coccinea" },
  { nomeVul: "Carvalho Folha Diamante", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Glorioso do Brejo", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Glorioso", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Konara", nomeSci: "Quercus glandulifera" },
  { nomeVul: "Carvalho Koreano", nomeSci: "Quercus glandulifera" },
  { nomeVul: "Carvalho Mongoliano", nomeSci: "Quercus mongolica var grosserrata" },
  { nomeVul: "Carvalho Obtuso", nomeSci: "Quercus laurifolia" },
  { nomeVul: "Carvalho Oregon", nomeSci: "Quercus garryana" },
  { nomeVul: "Carvalho Preto", nomeSci: "Quercus velutina" },
  { nomeVul: "Carvalho Vermelho do Norte (Q. borealis)", nomeSci: "Quercus borealis (syn: rubra)" },
  { nomeVul: "Carvalho Vermelho do Norte (Q. rubra)", nomeSci: "Quercus rubra" },
  { nomeVul: "Carvalho", nomeSci: "Quercus sp." },
  { nomeVul: "Carvalho-alvarinho", nomeSci: "Quercus robur" },
  { nomeVul: "Carvalho-roble", nomeSci: "Quercus robur" },
  { nomeVul: "Carvalho-vermelho", nomeSci: "Quercus robur" },
  { nomeVul: "Castanha-da-Índia (A. hippocastanum)", nomeSci: "Aesculus hippocastanum" },
  { nomeVul: "Castanha-da-Índia", nomeSci: "Aesculus sp." },
  { nomeVul: "Castanheiro Europeu", nomeSci: "Castanea dentata" },
  { nomeVul: "Cereja de Pássaro Virginia", nomeSci: "Prunus virginiana" },
  { nomeVul: "Cereja de Pássaro", nomeSci: "Prunus ssiori" },
  { nomeVul: "Cerejeira Chorona", nomeSci: "Prunus subhirtella var. pendula" },
  { nomeVul: "Cerejeira Negra", nomeSci: "Prunus serotina" },
  { nomeVul: "Cerejeira", nomeSci: "Prunus avium" },
  { nomeVul: "Chá-da-Índia", nomeSci: "Camellia sinensis" },
  { nomeVul: "Choupo (P. x canadensis)", nomeSci: "Populus x canadensis" },
  { nomeVul: "Choupo Branco", nomeSci: "Populus alba" },
  { nomeVul: "Choupo Tremedor", nomeSci: "Populus tremula" },
  { nomeVul: "Choupo Trêmulo", nomeSci: "Populus tremuloides" },
  { nomeVul: "Choupo", nomeSci: "Populus spp." },
  { nomeVul: "Choupo-bálsamo", nomeSci: "Populus balsamifera" },
  { nomeVul: "Chuva-de-ouro", nomeSci: "Laburnum anagyrioides" },
  { nomeVul: "Cinamomo", nomeSci: "Melia azedarach" },
  { nomeVul: "Cinza Japonês", nomeSci: "Fraxinus mandshurica var. Japonica" },
  { nomeVul: "Cinza-da-montanha", nomeSci: "Sorbus sp." },
  { nomeVul: "Citros", nomeSci: "Citrus spp." },
  { nomeVul: "Coprosma Frondoso Fino", nomeSci: "Coprosma areolata" },
  { nomeVul: "Coqueiro", nomeSci: "Cocos nucifera" },
  { nomeVul: "Coquinho-azedo", nomeSci: "Butia capitata" },
  { nomeVul: "Corifa", nomeSci: "Corypha umbraculifera" },
  { nomeVul: "Corrente-de-ouro", nomeSci: "Laburnum anagyrioides" },
  { nomeVul: "Cyca", nomeSci: "Cycas spp." },
  { nomeVul: "Dendezeiro", nomeSci: "Elaeis guineensis" },
  { nomeVul: "Espinho Branco", nomeSci: "Craetaegus monogyna" },
  { nomeVul: "Estrelítzia", nomeSci: "Strelitzia reginae" },
  { nomeVul: "Faia Americana", nomeSci: "Fagus americana" },
  { nomeVul: "Faia Cobre", nomeSci: "Fagus sylvantica" },
  { nomeVul: "Faia do Oriente", nomeSci: "Fagus orientalis" },
  { nomeVul: "Faia Japonesa", nomeSci: "Fagus crenata f. grandifolia (syn.Americana)" },
  { nomeVul: "Faia Roxa", nomeSci: "Fagus silvatica f. purpurea" },
  { nomeVul: "Faia", nomeSci: "Fagus sp." },
  { nomeVul: "Falso Castanho Japonês", nomeSci: "Aesculus turbinata" },
  { nomeVul: "Faveiro", nomeSci: "Albizia lebbeck" },
  { nomeVul: "Feixe Branco", nomeSci: "Sorbus aria" },
  { nomeVul: "Flamboyant", nomeSci: "Delonix regia" },
  { nomeVul: "Fortunela", nomeSci: "Fortunella spp." },
  { nomeVul: "Freixo (F. bungeana)", nomeSci: "Fraxinus bungeana" },
  { nomeVul: "Freixo (F. excelsior)", nomeSci: "Fraxinus excelsior" },
  { nomeVul: "Fruta Pão", nomeSci: "Artocarpus altilis" },
  { nomeVul: "Gafanhoto Preto", nomeSci: "Robinia pseudoacacia" },
  { nomeVul: "Goiaba", nomeSci: "Psidium guajava" },
  { nomeVul: "Goma Preta", nomeSci: "Nyssa sylvatica" },
  { nomeVul: "Gomuto", nomeSci: "Arenga pinnata" },
  { nomeVul: "Grão Amargo", nomeSci: "Prunus virginiana" },
  { nomeVul: "Helicônia", nomeSci: "Heliconia spp." },
  { nomeVul: "Heliconiaceae (espécies desta família)", nomeSci: "Heliconiaceae (espécies desta família)" },
  { nomeVul: "Jaca", nomeSci: "Artocarpus integrifolia" },
  { nomeVul: "Jambo Branco (S. aqueum)", nomeSci: "Syzygium aqueum" },
  { nomeVul: "Jambo Branco (S. samarangense)", nomeSci: "Syzygium samarangense" },
  { nomeVul: "Jambo D'água", nomeSci: "Syzygium aqueum" },
  { nomeVul: "Jambo Rosa", nomeSci: "Syzygium jambos" },
  { nomeVul: "Jambo Vermelho", nomeSci: "Syzygium malaccense" },
  { nomeVul: "Jerivá", nomeSci: "Syagrus romanzoffianum" },
  { nomeVul: "Juglans", nomeSci: "Juglans sp." },
  { nomeVul: "Jujuba (Z. jujuba)", nomeSci: "Ziziphus jujuba" },
  { nomeVul: "Jujuba (Z. mauritiana)", nomeSci: "Ziziphus mauritiana" },
  { nomeVul: "Jurema", nomeSci: "Acacia sp." },
  { nomeVul: "Karamu", nomeSci: "Coprosma lucida" },
  { nomeVul: "Kowhai", nomeSci: "Sophora microphylla" },
  { nomeVul: "Laranja", nomeSci: "Citrus sinensis" },
  { nomeVul: "Laranja Azeda", nomeSci: "Citrus aurantium" },
  { nomeVul: "Licuala", nomeSci: "Licuala grandis" },
  { nomeVul: "Lima", nomeSci: "Citrus aurantiifolia" },
  { nomeVul: "Limão Cayena", nomeSci: "Averrhoa bilimbi" },
  { nomeVul: "Limão Tahiti", nomeSci: "Citrus latifolia" },
  { nomeVul: "Limão", nomeSci: "Citrus limon" },
  { nomeVul: "Linda-dos-jardins", nomeSci: "Rhus typhina" },
  { nomeVul: "Louro Califórnia", nomeSci: "Umbelluraria californica" },
  { nomeVul: "Louro-de-baiano", nomeSci: "Alpínia zerumbet" },
  { nomeVul: "Maçã (M. communis)", nomeSci: "Malus communis" },
  { nomeVul: "Maçã (M. pumila var domestica)", nomeSci: "Malus pumila var domestica" },
  { nomeVul: "Maçã (M. pumila)", nomeSci: "Malus pumila" },
  { nomeVul: "Maçã (M. x domestica)", nomeSci: "Malus x domestica" },
  { nomeVul: "Maçã (Pyrus malus)", nomeSci: "Pyrus malus" },
  { nomeVul: "Maçã Silvestre", nomeSci: "Malus sylvestris" },
  { nomeVul: "Maça", nomeSci: "Malus sp." },
  { nomeVul: "Maçaranduba", nomeSci: "Manilkara zapota" },
  { nomeVul: "Manchu Cinza", nomeSci: "Fraxinus mandshurica" },
  { nomeVul: "Mandioca", nomeSci: "Manihot esculenta" },
  { nomeVul: "Manga", nomeSci: "Mangifera indica" },
  { nomeVul: "Mararaju", nomeSci: "Manilkara zapota" },
  { nomeVul: "Mexerica", nomeSci: "Citrus reticulata" },
  { nomeVul: "Miraguama", nomeSci: "Coccothrinax miraguama" },
  { nomeVul: "Mogno Indiano Ocidental", nomeSci: "Swietenia mahagoni" },
  { nomeVul: "Mogno", nomeSci: "Switenia macrophyla" },
  { nomeVul: "Murta", nomeSci: "Murraya paniculata" },
  { nomeVul: "Musaceae (espécies desta família)", nomeSci: "Musaceae (espécies desta família)" },
  { nomeVul: "Nespereira", nomeSci: "Eriobotrya japonica" },
  { nomeVul: "Nim", nomeSci: "Azadirachta indica" },
  { nomeVul: "Nogueira Amarga Casca de Pelúcia", nomeSci: "Carya ovata" },
  { nomeVul: "Nogueira Amarga Coração Branco", nomeSci: "Carya tomentosa" },
  { nomeVul: "Nogueira Amarga de Porco", nomeSci: "Carya glabra" },
  { nomeVul: "Nogueira Amarga", nomeSci: "Carya cordiformis" },
  { nomeVul: "Nogueira Amarga", nomeSci: "Carya spp." },
  { nomeVul: "Nogueira Branca", nomeSci: "Juglans cinerea" },
  { nomeVul: "Nogueira Comum", nomeSci: "Juglans regia" },
  { nomeVul: "Nogueira europeia", nomeSci: "Juglans regia" },
  { nomeVul: "Nogueira Pecã", nomeSci: "Carya illinoensis" },
  { nomeVul: "Nogueira Preta", nomeSci: "Juglans nigra" },
  { nomeVul: "Nogueira", nomeSci: "Juglans sp." },
  { nomeVul: "Noruega Abeto", nomeSci: "Picea abies" },
  { nomeVul: "Olmo Americano", nomeSci: "Ulmus americana" },
  { nomeVul: "Olmo Escocês", nomeSci: "Ulmus glabra (syn. montana)" },
  { nomeVul: "Olmo", nomeSci: "Ulmus sp." },
  { nomeVul: "Padreiro", nomeSci: "Acer pseudoplatanus" },
  { nomeVul: "Palma Corcho", nomeSci: "Microcycas calocoma" },
  { nomeVul: "Palma forrageira", nomeSci: "Opuntia cochenillifera" },
  { nomeVul: "Palmeira (Aiphanes spp.)", nomeSci: "Aiphanes spp." },
  { nomeVul: "Palmeira (Coccothrinax barbadensis)", nomeSci: "Coccothrinax barbadensis" },
  { nomeVul: "Palmeira (Pseudophoenix vinifera)", nomeSci: "Pseudophoenix vinifera" },
  { nomeVul: "Palmeira Areca", nomeSci: "Areca sp." },
  { nomeVul: "Palmeira areca-bambu", nomeSci: "Dypsis lutescens" },
  { nomeVul: "Palmeira arecina", nomeSci: "Veitchia arecina" },
  { nomeVul: "Palmeira Bismarckia", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira chamaedora", nomeSci: "Chamaedora spp." },
  { nomeVul: "Palmeira Fênix", nomeSci: "Phoenix roebelenii" },
  { nomeVul: "Palmeira Real Australiana", nomeSci: "Archontophoenix alexandrae" },
  { nomeVul: "Palmeira Real", nomeSci: "Roystonia regia" },
  { nomeVul: "Palmeira Sagu", nomeSci: "Cycas spp." },
  { nomeVul: "Palmeira Solitária", nomeSci: "Ptychosperma elegans" },
  { nomeVul: "Palmeira- triângulo", nomeSci: "Dypsis decaryi" },
  { nomeVul: "Palmeira-azul", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira-da-California", nomeSci: "Washingtonia robusta" },
  { nomeVul: "Palmeira-de-bismarck", nomeSci: "Bismarckia nobilis" },
  { nomeVul: "Palmeira-de-macarthur", nomeSci: "Ptychosperma macarthurii" },
  { nomeVul: "Palmeira-de-manarano", nomeSci: "Beccariophoenix madagascariensis" },
  { nomeVul: "Palmeira-de-Manila", nomeSci: "Veitchia maerrillii" },
  { nomeVul: "Palmeira-de-saia", nomeSci: "Washingtonia filifera" },
  { nomeVul: "Palmeira-fuso", nomeSci: "Pseudophoenix sargentii" },
  { nomeVul: "Palmeira-imperial-de-Porto Rico", nomeSci: "Roystonea borinquena" },
  { nomeVul: "Palmeira-leque", nomeSci: "Schippia concolor" },
  { nomeVul: "Palmeira-leque-brilhante", nomeSci: "Thrinax radiata" },
  { nomeVul: "Palmeira-leque-da-china", nomeSci: "Livistona chinensis" },
  { nomeVul: "Palmeira-leque-de-Fiji", nomeSci: "Pritchardia pacifica" },
  { nomeVul: "Palmeira-paorotis", nomeSci: "Acoelorraphe wrightii" },
  { nomeVul: "Palmeira-prateada-de-leque", nomeSci: "Coccothrinax argentata" },
  { nomeVul: "Palmeira-princesa", nomeSci: "Dictyosperma album" },
  { nomeVul: "Palmeira-rabo-de-peixe (Caryota mitis)", nomeSci: "Caryota mitis" },
  { nomeVul: "Palmeira-rabo-de-peixe (Caryota urens)", nomeSci: "Caryota urens" },
  { nomeVul: "Palmeira-rabo-de-raposa", nomeSci: "Wodyetia bifurcata" },
  { nomeVul: "Palmeira-ráfia", nomeSci: "Raphis excelsa" },
  { nomeVul: "Pandanaceae (espécies desta família)", nomeSci: "Pandanaceae (espécies desta família)" },
  { nomeVul: "Pau Cachorro do Pacífico", nomeSci: "Cornus muttallii" },
  { nomeVul: "Pau Cachorro", nomeSci: "Cornus sp." },
  { nomeVul: "Pera Asiática", nomeSci: "Pyrus pyrifolia" },
  { nomeVul: "Pera Nashi", nomeSci: "Pyrus pyrifolia" },
  { nomeVul: "Pereira Europeia", nomeSci: "Pyrus communis" },
  { nomeVul: "Pereira Japonesa", nomeSci: "Pyrus pyrifolia var culta" },
  { nomeVul: "Pimenta Picante", nomeSci: "Capsicum annuum" },
  { nomeVul: "Pimenta-do-diabo", nomeSci: "Capsicum annuum" },
  { nomeVul: "Pitanga Vermelha", nomeSci: "Eugenia uniflora" },
  { nomeVul: "Plátano Oriental", nomeSci: "Platanus orientalis" },
  { nomeVul: "Plátano", nomeSci: "Platanus orientalis" },
  { nomeVul: "Pomelo", nomeSci: "Citrus paradisi" },
  { nomeVul: "Poncirus", nomeSci: "Poncirus spp." },
  { nomeVul: "Ponkan", nomeSci: "Citrus reticulata" },
  { nomeVul: "Pritchardia", nomeSci: "Pritchardia vuylstekeana" },
  { nomeVul: "Pupunha Silvestre", nomeSci: "Bactris plumeriana" },
  { nomeVul: "Pupunha", nomeSci: "Bactris gasipaes" },
  { nomeVul: "Ribes", nomeSci: "Ribes sp." },
  { nomeVul: "Rosa", nomeSci: "Rosa spp." },
  { nomeVul: "Rustifina Rus", nomeSci: "Rhus typhina" },
  { nomeVul: "Salgueiro Branco", nomeSci: "Salix alba" },
  { nomeVul: "Salgueiro Cinza", nomeSci: "Salix cinerea" },
  { nomeVul: "Salgueiro Dourado", nomeSci: "Salix alba var Vitelina" },
  { nomeVul: "Salgueiro Preto", nomeSci: "Salix nigricans" },
  { nomeVul: "Salgueiro Púrpura", nomeSci: "Salix purpurea" },
  { nomeVul: "Salgueiro Velho Mundo", nomeSci: "Salix amygdalina" },
  { nomeVul: "Salgueiro-folha-de-pêssego", nomeSci: "Salix amygdaloides" },
  { nomeVul: "Salgueiro-taco-de-críquete", nomeSci: "Salix alba L. Coerulea" },
  { nomeVul: "Salix", nomeSci: "Salix spp." },
  { nomeVul: "Sanguinho", nomeSci: "Frangula almus" },
  { nomeVul: "Sapoti", nomeSci: "Manilkara zapota" },
  { nomeVul: "Seringueira", nomeSci: "Hevea brasiliensis" },
  { nomeVul: "Sete Copas", nomeSci: "Terminalia catappa" },
  { nomeVul: "Sófora", nomeSci: "Sophora microphylla" },
  { nomeVul: "Sorgo", nomeSci: "Sorghum bicolor" },
  { nomeVul: "Sorva (S. domestica)", nomeSci: "Sorbus domestica" },
  { nomeVul: "Sorva", nomeSci: "Sorbus sp." },
  { nomeVul: "Strelitziaceae (espécies desta família)", nomeSci: "Strelitziaceae (espécies desta família)" },
  { nomeVul: "Sumac Staghorn", nomeSci: "Rhus typhina" },
  { nomeVul: "Tamareira", nomeSci: "Phoenix dactylifera" },
  { nomeVul: "Tamareira-das-canárias", nomeSci: "Phoenix canariensis" },
  { nomeVul: "Tamareira-do-Senegal", nomeSci: "Phoenix reclinata" },
  { nomeVul: "Tangerina", nomeSci: "Citrus reticulata" },
  { nomeVul: "Taperebá", nomeSci: "Spondias lutea" },
  { nomeVul: "Teca", nomeSci: "Tectona grandis" },
  { nomeVul: "Teja", nomeSci: "Tilia cordata" },
  { nomeVul: "Tejo", nomeSci: "Tilia cordata" },
  { nomeVul: "Tella", nomeSci: "Tilia cordata" },
  { nomeVul: "Texa", nomeSci: "Tilia cordata" },
  { nomeVul: "Tilha", nomeSci: "Tilia cordata" },
  { nomeVul: "Tília", nomeSci: "Tilia sp." },
  { nomeVul: "Tillera", nomeSci: "Tilia cordata" },
  { nomeVul: "Tilo", nomeSci: "Tilia americana" },
  { nomeVul: "Tomate", nomeSci: "Licopersicum esculentum" },
  { nomeVul: "Toranja", nomeSci: "Citrus paradisi" },
  { nomeVul: "Tramazeira", nomeSci: "Sorbus aucuparia" },
  { nomeVul: "Tulipeiro", nomeSci: "Liriodendron tulipifera" },
  { nomeVul: "Tupelo", nomeSci: "Nyssa sylvatica" },
  { nomeVul: "Ulmeiro", nomeSci: "Ulmus sp." },
  { nomeVul: "Unha-de-gato", nomeSci: "Acacia sp." },
  { nomeVul: "Videira e seus híbridos", nomeSci: "Vitis spp. e seus híbridos" },
  { nomeVul: "Vimeiro Púrpura", nomeSci: "Salix purpurea" },
  { nomeVul: "Viola", nomeSci: "Viola sp." },
  { nomeVul: "Zingiberaceae (espécies desta família)", nomeSci: "Zingiberaceae (espécies desta família)" }
];*/

export { hospedeiros }
