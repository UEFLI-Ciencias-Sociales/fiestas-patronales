import imageSaraguro from 'src/assets/images/CristhelLuisanaBecerraOrtiz_Saraguro.jpeg'
import imageMacara from 'src/assets/images/KennyAnabelGualánCalderón_Macara.jpeg';
import imageCelica from 'src/assets/images/AnneSalomeLunaJiménez_Celica.jpeg';
import imageChaguarpamba from 'src/assets/images/DanielaVictoriaMaldonadoLoor_Chaguarpamba.jpeg';
import imageEspindola from 'src/assets/images/DanielaRominaMauradJara_Espindola.jpeg';
import imageLoja from 'src/assets/images/AndreaPaulinaCastroVallejo_Loja.jpeg';
import imageCatamayo from 'src/assets/images/JénniferAnahíCastroRomero_Catamayo.jpeg';
import imageCalvas from 'src/assets/images/FabianaLucíaCuevaCarrión_Calvas.jpeg';
import imageZapotillo from 'src/assets/images/KarlaLizethMontoyaAbendaño_Zapotillo.jpeg'
import imagePindal from 'src/assets/images/ValeryDanaheSilvaLandacay_Pindal.jpeg';
import imageQuilanga from 'src/assets/images/RosaEmiliaCarrilloChumbe_Quilanga.jpeg';
import imageOlmedo from 'src/assets/images/MélanieJudithQuevedoMoreno_Olmedo.jpeg';
import imageGonzanama from 'src/assets/images/ArianaScarletSotoJiménez_Gonzanama.jpeg';
import imagePaltas from 'src/assets/images/AinhoaCatherineJiménezRojas_Paltas.jpeg';
import imagePuyango from 'src/assets/images/TatianaElizabethArévaloOrtega_Puyango.jpeg';
import imageSozoranga from 'src/assets/images/AlinaBrigitteCeliCarrillo_Sozoranga.jpeg';


import audioSaraguro from 'src/assets/audios/Saraguro.mp3';
import audioMacara from 'src/assets/audios/Macará.mp4';
import audioCelica from 'src/assets/audios/Celica.mp3';
import audioChaguarpamba from 'src/assets/audios/Chaguarpamba.mp3';
import audioEspindola from 'src/assets/audios/Espindola.mp3';
import audioLoja from 'src/assets/audios/Loja.mp3';
import audioCatamayo from 'src/assets/audios/Catamayo.mp3';
import audioCalvas from 'src/assets/audios/Calvas.mp3';
import audioZapotillo from 'src/assets/audios/Zapotillo.m4a';
import audioPindal from 'src/assets/audios/Pindal.m4a';
import audioQuilanga from 'src/assets/audios/Quilanga.m4a';
import audioOlmedo from 'src/assets/audios/Olmedo.m4a';
import audioGonzanama from 'src/assets/audios/Gonzanama.mp3';
import audioPaltas from 'src/assets/audios/Paltas.m4a';
import audioPuyango from 'src/assets/audios/Puyango.mp3';
import audioSozoranga from 'src/assets/audios/Sozoranga.m4a';

const SARAGURO_IMAGE =
  "https://i.pinimg.com/736x/08/ee/bb/08eebb831d4dc83cd668e6094bc18a8f--ecuador-south-america.jpg";
const GONZANAMA_IMAGE =
  "https://lahora.com.ec/contenido/cache/55/gonzanama-incluye-agenda-cultural-en-sus-fiestas-imagen-1-_20200921071226-2000x2000.jpg";
const MACARA_IMAGE =
  "https://www.eltelegrafo.com.ec/media/k2/items/cache/5a5446717f3084461345c7151d7275bf_XL.jpg";
const CELICA_IMAGE =
  "https://lahora.com.ec/contenido/cache/50/celica-prepara-sus-fiestas-de-cantonizacion-imagen-1-_20181017062940-2000x2000.jpg";
const CHAGUARPAMBA_IMAGE =
  "https://www.turismo.gob.ec/wp-content/uploads/2020/08/57012606_1257375671083883_5056411581072539648_o.jpg";
const EPINDOLA_IMAGE =
  "https://lahora.com.ec/contenido/cache/48/espindola-confirma-casos-de-covid-19-imagen-1-_2020078102145-682x512.jpg";
const LOJA_IMAGE =
  "https://www.presidencia.gob.ec/wp-content/uploads/2017/11/Loja.jpg";
const CATAMAYO_IMAGE =
  "https://radioluzyvidafm.com/wp-content/uploads/2018/05/1-32.jpg";
const CALVAS_IMAGE = "http://www.gobiernocalvas.gob.ec/images/DSC02487.jpg";
const ZAPOTILLO_IMAGE =
  "https://lahora.com.ec/contenido/cache/4f/zapotillo-celebra-38-anos-de-cantonizacion-imagen-1-_20180826071947-682x512.jpg";
const PIDAL_IMAGE =
  "https://www.turismo.gob.ec/wp-content/uploads/2020/08/Iglesia-y-parque.jpg";
const QUILANGA_IMAGE =
  "https://lahora.com.ec/contenido/cache/33/hoy__quilanga_esta_de_aniversario_2010117060910-1200x800.jpg";
const OLMEDO_IMAGE = "https://ec.viajandox.com/uploads/Olmedo_4.jpg";
const PALTAS_IMAGE =
  "https://www.turismo.gob.ec/wp-content/uploads/2020/06/LOJA-PALTAS-PARQUE-CENTRAL-1-scaled.jpg";
const PUYANGO_IMAGE =
  "https://vivacatamayo.org/wp-content/uploads/2021/01/Con-la-inauguracion-de-obras-Puyango-conmemora-74-anos-de-vida-Politica.jpg";
const SOZORANGA_IMAGE =
  "https://imagenes.extra.ec/files/image_full/uploads/2020/07/09/5f071577ab22a.jpeg";

export const provinces = [
  {
    province: "Saraguro",
    path: "https://silvanacondo14.wixsite.com/blog-historico",
    summary: {
      english: "Saraguro located in the Province of Loja, opens the door of its culture and tradition to take its tourists to a magical ancestral time.It is characterized by the authenticity of its indigenous communities, its great traditions and its beautiful lands. The name of Saraguro comes from Sara which means Corn and Guro that means: Pot; giving way to be known as the place of corn or as the land of corn.Its inhabitants are charismatic, humble and proud of their ancestors, they are also extremely believers and mythological because despite the passage of time, it can be appreciated that some myths and beliefs are still preserved among the indigenous and peasants of Saraguro, the same as they manifest through music, dance, gastronomy and their Andean and religious festivities.",
      spanish: "Saraguro ubicado en la Provincia de Loja, te abre la puerta de su cultura y tradición para llevar a sus turistas a un mágico tiempo ancestral. Se caracteriza por la autenticidad de sus comunidades indígenas, sus grandes tradiciones y sus hermosas tierras. El nombre de Saraguro viene de Sara que significa Maíz y Guro que significa Olla; dando paso a que sea conocido como el lugar del maíz o como: la tierra del maíz.Sus habitantes son carismáticos, humildes y orgullosos de sus ancestros, también son extremadamente creyentes y mitológicos pues a pesar del paso de los tiempos, se puede apreciar que aún se conservan algunos mitos y creencias entre los indígenas y campesinos de Saraguro, las mismas que se manifiestan a través de la música, danza, gastronomía y sus festividades andinas y religiosas.",
    },
    leftImage: SARAGURO_IMAGE,
    showDialog: true,
    dialog:
      "Los saraguros, fueron en sus orígenes, mitimaes enviados por el inca Huayna Cápac cuando emprendió la conquista de Quito.",
    studentImage: imageSaraguro,
    studentName: "Cristhel Luisana Becerra Ortiz",
    studentAudio: audioSaraguro
  },
  {
    province: "Macará",
    path: "",
    summary: {
      english: "Macará is a canton in the province of Loja, of Inca origin from a so-called Macarara tribe, but its name was adapted and by the continuous use the last syllable was suppressed, remaining in Macará.Its climate is dry subtropical, giving way to the place to be more attractive for its tourism and to enjoy its cantonization festivals, it is celebrated every September 22.Its inhabitants are hard-working and hospitable, giving way to the enjoyment and delight of the Macará River and its different trails, which give life to the place, people can practice sports such as cycling or mountaineering.Macará welcomes you to take you to live an experience of ancestral wealth, declared a magical town of Ecuador.",
      spanish: "Macará es un cantón de provincia de Loja, de origen incásico de una llamada tribu Macarara, pero su nombre se fue adaptando por el continuo uso se suprimió la última sílaba, quedando en Macará. Su clima es subtropical seco, dando paso al lugar para ser más llamativo para su turismo y disfrutar de sus fiestas de cantonización se la celebra cada 22 de septiembre.Sus habitantes son trabajadores y hospitalarios dando paso a un disfrute y deleite del Río Macará y sus diferentes senderos, que dan vida al lugar, se puede realizar deportes como el ciclismo o el montañismo.Macará da la bienvenida para llevarlos a vivir una experiencia de riqueza ancestral, declarado pueblo mágico del Ecuador.",
    },
    rightImage: MACARA_IMAGE,
    showDialog: true,
    dialog:
      "Macara ha sido identificado por su gran agricultura y libre comercio en su frontera con Perú",
    studentImage:
      imageMacara,
    studentName: "Kenny Anabel Gualán Calderón",
    studentAudio: audioMacara
  },
  {
    province: "Celica",
    path: "",
    summary: {
      english: "Due to the intense color of its sky, this canton is also known as the “Celestial City”. Its friendly, cheerful and hard-working people with a topography reflected in contrasts: Bluish Mountains, green and deep valleys, diverse climatic levels, exuberant agriculture and varied livestock make of it a unique place. It was founded over indigenous settlements even older than the Incas. Hence, archaeological vestiges are kept on display in a museum, which together with the ruins of an ancient citadel, are impressive examples of its tradition.",
      spanish: "Por el intenso color de su cielo, Célica es conocida como la “Ciudad Celeste” su gente amigable, alegre y trabajadora de topografía plasmada de contrastes: azuladas montañas, verdes y profundos avalles, diversos pisos climáticos, exuberante agricultura y variada ganadería, fue fundada sobre poblados indígenas aún más antiguos a los Incas. De allí que se mantienen en exposición vestigios arqueológicos en un museo, que junto a las ruinas de una antiquísima ciudadela son muestras impresionantes de su tradición. ",
    },
    leftImage: CELICA_IMAGE,
    showDialog: true,
    dialog:
      "Conocida como la Celestial Célica, fue fundada sobre poblados indígenas aún más antiguos a los Incas.",
    studentImage: imageCelica,
    studentName: "Anne Salome Luna Jiménez",
    studentAudio: audioCelica
  },
  {
    province: "Chaguarpamba",
    path: "",
    summary: {
      english: "Located to northwest of the Loja province.  It is found in a transition zone between the Coast and the Ecuadorian Andes.  It has beautiful rural landscapes, lush vegetation and generous productive land.  Its economic activity is agriculture and livestock.  It is famous for the production of orange, banana, mango, cocoa and coffee.",
      spanish: "Ubicado al noroeste de la provincia de Loja. Se encuentra en una zona de transición entre la Costa y los Andes ecuatorianos. Posee bellos paisajes rurales, exuberante vegetación y generoso suelo productivo. Su actividad económica es la agricultura y ganadería. Es famosa por su producción de naranja, banano, mango, cacao y café.",
    },
    rightImage: CHAGUARPAMBA_IMAGE,
    showDialog: true,
    dialog:
      "Chaguarpamba es famosa por su producción de naranja, banano, mango, cacao y Café.",
    studentImage: imageChaguarpamba,
    studentName: "Daniela Victoria Maldonado Loor",
    studentAudio: audioChaguarpamba
  },
  {
    province: "Espíndola",
    path: "",
    summary: {
      english: "The Espindola canton is located in a privileged place. About natural resources, it has an exuberant natural wealth that is beneficial for the country. This canton is also characterized by its social equity and its inhabitants are generous and friendly; they receive tourists with great affection so that, they get enchanted with this paradise that is part of Ecuador.",
      spanish: "El cantón Espíndola se encuentra ubicado en un sitio privilegiado en el tema de recursos naturales, se caracteriza por su equidad social y sus recursos naturales exuberantemente beneficiosos para el país, sus habitantes son generosos, amables y reciben a los turistas con los brazos abiertos para que conozcan este paraíso que es parte del Ecuador.",
    },
    leftImage: EPINDOLA_IMAGE,
    showDialog: true,
    dialog:
      "Entre los principales cultivos destacados esta la caña de azúcar, maíz, café, camote, yuca, guineo, tomate, cebolla y cebada.",
    studentImage: imageEspindola,
    studentName: "Daniela Romina Maurad Jara",
    studentAudio: audioEspindola
  },
  {
    province: "Loja",
    path: "",
    summary: {
      english: "Also known as Inmaculada Concepción de Loja, it is an Ecuadorian province, city, and canton that takes the same name for the three categories. The city itself is the largest and most populated area of the province. On this city, three rivers go across it, they are: The Zamora, The Malacatos, and The Jipiro’s rivers. Loja is located in the south of the Inter-Andean Region of Ecuador in the Zamora River valley, at 2060 meters above the sea level (m.s.n.m.), and with an average weather of 18 ° C; it is also characterized by a tropical and warm Andean weather.Loja is also known as the 'Musical and Cultural Capital of Ecuador' for its architecture, cultural diversity, and its contribution to the Ecuadorian arts, science, music and letters; furthermore, for being the birthplace of many celebrities of the Ecuadorian society.",
      spanish: "Loja, también conocida como Inmaculada Concepción de Loja, es una ciudad ecuatoriana, cabecera cantonal del Cantón Loja y capital de la Provincia de Loja, así como la urbe más grande y poblada de la misma. Se encuentra atravesada por los ríos Zamora, Malacatos y Jipiro; Está ubicada al sur de la Región interandina del Ecuador, en la hoya del río Zamora, a una altitud de 2060 sobre el nivel del mar m.s.n.m.  y con un clima ecuatorial de 18 °C en promedio, con marcada influencia de clima tropical y templado andino.Es llamada la 'Capital Musical y Cultural del Ecuador' por su arquitectura, su diversidad cultural, su aporte a las artes, ciencias, música y letras ecuatorianas y por ser el lugar de nacimiento de muchos personajes ilustres de la sociedad ecuatoriana.",
    },
    rightImage: LOJA_IMAGE,
    showDialog: true,
    dialog:
      "En el año de 1897, Loja fue la primera ciudad del Ecuador en contar con energía eléctrica.",
    studentImage: imageLoja,
    studentName: "Andrea Paulina Castro Vallejo",
    studentAudio: audioLoja
  },
  {
    province: "Catamayo",
    path: "",
    summary: {
      english: "It is an Ecuadorian canton, which capital takes the same name as the canton “Catamayo”; Also, it is the second largest and most populated town of Loja province located in the south of the Inter-Andean Region, and settled down in the flat land of Catamayo Valley and the external margins of the western Andes mountains of Catamayo river. It is along the Trapichillo River, at an altitude of 1238 meters above the sea level (m.s.n.m.) and with a dry tropical climate of 24 ° C on average.",
      spanish: "El Cantón Catamayo, es una ciudad ecuatoriana; cabecera cantonal del Cantón Catamayo, así como la segunda urbe más grande y poblada de la Provincia de Loja. Se localiza al sur de la Región interandina, asentada en la llanura del valle de Catamayo, en losflancos externos de la cordillera occidental de los Andes en la hoya del río Catamayo; Está por el río Trapichillo, a una altitud de 1238 metros sobre el nivel del mar (m.s.n.m.) y con un clima tropical seco de 24°C en promedio.",
    },
    leftImage: CATAMAYO_IMAGE,
    showDialog: true,
    dialog:
      "Se caracteriza por maravillosos paisajes naturales en los que se destaca una flora y fauna exuberantes.",
    studentImage: imageCatamayo,
    studentName: "Jénnifer Anahí Castro Romero",
    studentAudio: audioCatamayo
  },
  {
    province: "Calvas",
    path: "",
    summary: {
      english: "this Canton is a wonderful piece of land in the province of Loja, in Ecuador. The origin of its name is on behalf of the river that serves as the border with Peru. It is a place of tourist wealth by its wonderful landscapes that offer a stunning panorama. The total population in this canton is of 28,185 inhabitants according to the last census carried out in 2010. For 2020, it was expected a population of 31,000 inhabitants, distributed in 47% in the urban area, 28% in the periphery, and 24 % in the rural parishes.",
      spanish: "El Cantón Calvas es un pedazo territorial maravilloso de la provincia de Loja en el Ecuador. El origen de su nombre se debe al río del mismo nombre que sirve de frontera con el Perú. Es un lugar de riqueza turística debido a sus paisajes maravillosos que ofrecen una panorámica sorprendente. La población total en el cantón Calvas es de 28.185 habitantes de acuerdo al censo realizado en 2010, para 2020 se estima una población de 31,000 habitantes, la cual está distribuida en un 47% en la zona urbana, 28% en la periferie, y 24% en las parroquias rurales.",
    },
    rightImage: CALVAS_IMAGE,
    showDialog: true,
    dialog:
      "Se asegura que era el sitio preferido por Huayna Cápac quien, descansaba en el lugar y se refrescaba en este balneario natural.",
    studentImage: imageCalvas,
    studentName: "Fabiana Lucía Cueva Carrión",
    studentAudio: audioCalvas
  },
  {
    province: "Zapotillo",
    path: "",
    summary: {
      english: "Zapotillo is one of the most beautiful places in the province of Loja, its name is the diminutive given to it by its first settlers, due to the abundance of the sapote, an exotic fruit that grows in the place, it is also characterized by the exuberant beauty of its nature, full of tamarinds, carobs and palm trees, that invade the senses with their flavourings. On August 27th, they celebrate their cantonization festivities. The warm climate of Zapotillo gives the way to an oasis of trees like; palm, carob, tamarinds, almond, faiques, guayacanes, gualtacos, barbascos, jacks, charanes and bougainvilleas.",
      spanish: "Zapotillo es  uno de los lugares más hermosos de la provincia de Loja, su nombre es el diminutivo que le dieron sus primeros pobladores, debido a la abundancia de la fruta exótica el zapote que se da en el lugar, también se caracteriza por la belleza exuberante de su naturaleza llena de tamarindos, algarrobos y palmeras que invaden los sentidos con sus aromas. Celebran sus fiestas de cantonización cada 27 de agosto.El cálido clima de Zapotillo da paso a un oasis de palmeras, algarrobos, tamarindos, almendros, faiques, guayacanes, gualtacos, barbascos, sotas, charanes y buganvillas.",
    },
    leftImage: ZAPOTILLO_IMAGE,
    showDialog: true,
    dialog:
      'Una vez al año, en los meses de diciembre a enero se puede presenciar del "Florecmiento de los Guayacanes"',
    studentImage: imageZapotillo,
    studentName: "Karla Lizeth Montoya Abendaño",
    studentAudio: audioZapotillo
  },
  {
    province: "Pindal",
    path: "",
    summary: {
      english: "Pindal welcomes you with beautiful natural landscapes, that invite tourists to explore and discover them with their varied geography. Pindal fertile land with charismatic, simple and cheerful people, that cultivate their products and hopes to obtain a promising future for their children with the work and organization of their people, promoters of the progress and advancement of their beloved city, show the world that they do not They are only a canton but a family that watches over their children.This beautiful town located in the province of Loja, receives the name of toponymic pindal (pindu = cane) they call it that, because of the mayority of pindos that make up most of the vegetation.",
      spanish: "Pindal te recibe con lindos paisajes naturales que invitan al turista a recorrerlos y conocer su variada geografía. Pindal tiene fértil tierra en la que sus habitantes carismáticos, sencillos y alegres cultivan sus productos y esperanzas para obtener un futuro prometedor para sus hijos con el trabajo y la organización de su gente, promotores del progreso y adelanto de su querida ciudad demuestran al mundo que no solo son un cantón sino una familia que vela por sus niños.Este lindo cantón situado en la provincia de Loja recibe este nombre toponímico pindal (pindu = caña) lo llaman así por la gran cantidad de pindos que forman la mayor parte de la vegetación.",
    },
    rightImage: PIDAL_IMAGE,
    showDialog: true,
    dialog:
      'Este sector la agricultura y ganadería, catalogada como "La Cápital Maicera del Ecuador"',
    studentImage: imagePindal,
    studentName: "Valery Danahe Silva Landacay",
    studentAudio: audioPindal
  },
  {
    province: "Quilanga",
    path: "",
    summary: {
      english: "Quilanga is located in the province of Loja, which in Quechua means \"Nest of Gavilanes\" is so called because on the hill El Chiro that watches over the city, hawks nest, which are birds of prey called quiquillicos.Its soil is fertile and rich, in this town harvest beans, linseed, peas, oranges, avocados, cherimoya, guavas, lemons, yucca, banana, peanuts, etc. The work of inhabitants makes Quilanga more special, they are working, simple and happy to be part of this beautiful land. On each November 8th, they celebrate their canonization.",
      spanish: "Quilanga está situado en la provincia de Loja, que en quechua significa “Nido de Gavilanes”  se lo llama así porque en el cerro El Chiro que vigila la ciudad, anidan los gavilanes que son aves de rapiña llamados quiquillicos.Su suelo es fértil y rico en este se cosecha fréjol, linaza, arveja, naranja, aguacates, chirimoya, guabas, limones, yuca, guineo, maní, etc. el trabajo de sus habitantes lo hace más especial a Quilanga, son gente de trabajo, sencillos y alegres al ser parte de esta hermosa tierra. Celebran su cantonización cada 8 de noviembre.",
    },
    leftImage: QUILANGA_IMAGE,
    showDialog: true,
    dialog:
      '"Las Cuevas" situadas al pie del Cerro El Chiro, donde se han encontrado numerosos cráneos y huesos humanos.',
    studentImage: imageQuilanga,
    studentName: "Rosa Emilia Carrillo Chumbe",
    studentAudio: audioQuilanga,
  },
  {
    province: "Olmedo",
    path: "",
    summary: {
      english: "Olmedo canton is located in the Province of Loja. It is the smallest but its greatness/grandeur is in its people who have received national recognition for their production of coffee and other products on a smaller scale such as peanuts, fruit products and grains.In this beautiful canton, there is evidence of the pre-Incan aboriginal Palta ethnic group with a notable impact on the provincial identity. Without a doubt, Olmedo Canton is a place that one has to visit to explore/discover. It is enriched with innumerable cultural traditions in various fields and specificities, both artisan, utilitarian and productive, as well as artistic and culinary.",
      spanish: "El cantón Olmedo está ubicado en la Provincia de Loja, es el más pequeño pero su grandeza está en sus habitantes que han recibido reconocimientos a nivel nacional por su producción de café y otros productos en menor escala como el maní, productos frutales y granos. En este hermoso cantón hay evidencia de la etnia aborigen preincaica Palta de incidencia notable en la identidad provincial. Sin duda alguna, el Cantón Olmedo es un sitio que uno tiene que visitar para conocer, enriquecido con innumerables tradiciones culturales en diversos ámbitos y especificidades, tanto artesanales utilitaria y productivas, como artísticas y culinarias.",
    },
    rightImage: OLMEDO_IMAGE,
    showDialog: true,
    dialog:
      "Ha recibido reconocimientos a nivel nacional por su producción de café y otros productos como el maní, productos frutales y granos.",
    studentImage: imageOlmedo,
    studentName: "Mélanie Judith Quevedo Moreno",
    studentAudio: audioOlmedo
  },
  {
    province: "Gonzanamá",
    path: "",
    summary: {
      english: "The Gonzanama canton is located in the navel of the beautiful province of Loja and enjoys two moderate climates: cold and temperate, giving way to being a beautiful place to enjoy.Its name is made up of two Quichua-palta words: Gonza = surname of the chief of the Anama tribe; and anama = esteemed land, coveted land. This canton has beautiful natural attractions full of magic that will lead you to relaxation and enjoy wonderful tourist settings that will delight your eyes. Among them: El mirador del Cerro Columbo, El baño Fluvial de Lansaca, Las Aguas sulfurosas de La BandaGonzanamá opens its arms to receive tourists with the peculiar meaning of its name \"favorite place for the god of the waters.\"",
      spanish: "El cantón Gonzanamá, se encuentra ubicado en el ombligo de la hermosa provincia de Loja y goza de dos climas moderados: frio y templado, dando paso a ser un lugar hermoso para disfrutar. Su nombre está formado por dos palabras quichua-palta: Gonza = apellido del cacique de la tribu de los anamáes; y anama = tierra estimada, tierra codiciada. Este cantón tiene hermosos atractivos naturales llenos de magia que te llevarán a la relajación y disfrutar de escenarios turísticos maravillosos que deleitarán tu vista. Entre ellos: El mirador del Cerro Columbo, El baño Fluvial de Lansaca, Las Aguas sulfurosas de La Banda. Gonzanamá abre sus brazos para recibir a los turistas con el peculiar significado de su nombre “lugar predilecto para el dios de las aguas”.",
    },
    leftImage: GONZANAMA_IMAGE,
    showDialog: true,
    dialog:
      "La especie que predomina es el ganado bovino, lo que ha permitido que se haya destacado como un centro productor de queso.",
    studentImage: imageGonzanama,
    studentName: "Ariana Scarlet Soto Jiménez",
    studentAudio: audioGonzanama
  },
  {
    province: "Paltas",
    path: "",
    summary: {
      english: "Paltas is a canton in the province of Loja, named after the presence of the pre-Inca Paltan ethnic group. All rural parishes have their annual fairs, where farmers, ranchers, small and large merchants meet to exhibit their products. Sundays at the cantonal head, are days of true animation and commercial activity. It also has privileged places in terms of tourism such as spas, lookouts that are a great attraction for those who visit it.",
      spanish: "Es un cantón de la provincia de Loja lleva este nombre por la presencia de la etnia preincaica Palta, Todas las parroquias rurales tienen sus ferias anuales, donde se dan cita, agricultores, ganaderos, pequeños y grandes comerciantes. Los domingos en la cabecera cantonal, son días de verdadera animación y actividad comercial, además tiene lugares privilegiados en cuanto a turismo ya que cuenta con balnearios, miradores que son un gran atractivo para quienes lo visitan. ",
    },
    rightImage: PALTAS_IMAGE,
    showDialog: true,
    dialog:
      "Lleva su nombre por la presencia de la etnia preincaica Palta, fundamental de la etnografía e historia de la provincia de Loja.",
    studentImage: imagePaltas,
    studentName: "Ainhoa Catherine Jiménez Rojas",
    studentAudio: audioPaltas
  },
  {
    province: "Puyango",
    path: "",
    summary: {
      english: "the presence of the Puyango canton in these territories dates from approximately 1000 years, because archaeological and ethnographic scientific works have not yet been carried out that attest to the true prehistory of this native sector; The numerous archaeological remains found in different parts of the canton, the petroglyphs and oral testimonies that have been transmitted from generation to generation, give an account of the historical richness that the Puyango canton keeps, not yet known.",
      spanish: "La presencia del cantón Puyango en estos territorios data de unos 1000 años aproximadamente, porque aún no se han realizado trabajos científicos arqueológicos y etnográficos que den fe de la verdadera prehistoria de este sector patrio; los numerosos restos arqueológicos encontrados en diferentes partes del cantón, los petroglifos y testimonios orales que se han transmitido de generación en generación, dan cuenta de la riqueza histórica que guarda el cantón Puyango, todavía no conocida. ",
    },
    leftImage: PUYANGO_IMAGE,
    showDialog: true,
    dialog:
      "“Bosque Petrificado Puyango” por ser el bosque petrificado con una colección de fósiles vegetales y animales más grande del mundo",
    studentImage: imagePuyango,
    studentName: "Tatiana Elizabeth Arévalo Ortega",
    studentAudio: audioPuyango
  },
  {
    province: "Sozoranga",
    path: "",
    summary: {
      english: "Sozoranga is a cozy and colonial canton whose Geography is a mountain range decline and is composed of plateaus and streams, the climate is dry and is part of the area of ​​influence of the Catamayo - Chira Basin., In addition to its friendly and cultured people who welcomes you to your paradise. Sozoranga is a place full of tradition, culture and history, where the tourist goes back to the colonial era of Loja. Its natural tourist places can be found in the El Tundo Natural Reserve, Jatumpamba-Jorupe natural forest and vegetation, Naún Briones cave, El Ceibal forest, river resorts such as: La Florida and Santa Ana; among others.",
      spanish: "Sozoranga es un cantón acogedor y colonial cuya Geografía es una declinación de cordillera y está compuesta por mesetas y quebradas, el clima es seco y forma parte de zona de influencia de la Cuenca Catamayo - Chira., además de su gente amable y culta que da la bienvenida a su paraíso. Sozoranga es lugar lleno de tradición, cultura e historia, en donde el turista se remota a la época colonial de Loja. Sus lugares naturales turísticos los podemos encontrar en la Reserva Natural el Tundo, Bosque natural y vegetación Jatumpamba-Jorupe, la cueva de Naún Briones, bosque El Ceibal, los balnearios fluviales como: La Florida y Santa Ana; entre otros.",
    },
    rightImage: SOZORANGA_IMAGE,
    showDialog: true,
    dialog:
      "En Sozoranga se encuentra gran diversidad de cultivos, como: maíz y caña de azúcar , el fréjol y el café.",
    studentImage: imageSozoranga,
    studentName: "Alina Brigitte Celi Carrillo",
    studentAudio: audioSozoranga
  },
];
