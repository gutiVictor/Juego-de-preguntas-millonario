const QUESTIONS_DATABASE = {
  categories: [
    {
      id: "geografia",
      name: "Geografía",
      icon: "🌎",
      questions: [
        // === LÍMITES Y DIVISIONES POLÍTICAS ===
        {
          difficulty: "easy",
          question: "¿En qué país se encuentra la ciudad de Buenos Aires?",
          options: ["Argentina", "Chile", "Uruguay", "Brasil"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es la capital de Canadá?",
          options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país africano comparte frontera con Egipto, Sudán, Chad y Libia?",
          options: ["Etiopía", "Sudán del Sur", "Níger", "Libia"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál de los siguientes países NO es miembro de la Unión Europea?",
          options: ["Polonia", "Rumania", "Noruega", "Finlandia"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué país tiene una frontera terrestre con solo un vecino y está rodeado por el Mar Mediterráneo y el Océano Atlántico?",
          options: ["Portugal", "Grecia", "España", "Marruecos"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál es el único país del mundo que tiene soberanía sobre territorios en tres continentes (Europa, Asia y África)?",
          options: ["Turquía", "Rusia", "Francia", "Egipto"],
          correct: 2,
        },

        // === RELIEVE Y ACCIDENTES GEOGRÁFICOS ===
        {
          difficulty: "easy",
          question: "¿Cuál es la cadena montañosa más alta del mundo?",
          options: ["Andes", "Alpes", "Himalaya", "Rocosas"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿En qué continente se encuentra el desierto del Sahara?",
          options: ["Asia", "África", "América", "Oceanía"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué montaña es el punto más alto de América del Norte?",
          options: [
            "Monte McKinley (Denali)",
            "Monte Elbert",
            "Popocatépetl",
            "Aconcagua",
          ],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál de los siguientes desiertos es el más seco del mundo?",
          options: [
            "Desierto de Gobi",
            "Desierto del Sahara",
            "Desierto de Atacama",
            "Desierto de Kalahari",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué placa tectónica colisiona con la placa indoaustraliana para formar el Himalaya?",
          options: [
            "Placa del Pacífico",
            "Placa Euroasiática",
            "Placa Norteamericana",
            "Placa de Nazca",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuál es la meseta más extensa del mundo?",
          options: [
            "Meseta del Tibet",
            "Meseta de Colorado",
            "Meseta de Deccan",
            "Meseta de Anatolia",
          ],
          correct: 0,
        },

        // === HIDROGRAFÍA MUNDIAL ===
        {
          difficulty: "easy",
          question:
            "¿Qué río es el más largo del mundo según la mayoría de las fuentes?",
          options: ["Amazonas", "Nilo", "Misisipi", "Yangtsé"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué océano es el más grande del planeta?",
          options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question: "¿Cuál es el lago más profundo del mundo?",
          options: [
            "Lago Victoria",
            "Lago Superior",
            "Lago Baikal",
            "Lago Tanganica",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué río atraviesa la mayor cantidad de países en el mundo?",
          options: ["Nilo", "Danubio", "Mekong", "Amazonas"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué estrecho conecta el Mar Mediterráneo con el Océano Atlántico?",
          options: [
            "Estrecho de Gibraltar",
            "Estrecho de Bósforo",
            "Estrecho de Magallanes",
            "Estrecho de Malaca",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de estos lagos está ubicado completamente dentro de los Estados Unidos?",
          options: [
            "Lago Superior",
            "Lago Michigan",
            "Lago Hurón",
            "Lago Ontario",
          ],
          correct: 1,
        },

        // === CLIMAS Y BIOMAS ===
        {
          difficulty: "easy",
          question:
            "¿En qué tipo de clima se encuentran las selvas tropicales?",
          options: ["Tropical húmedo", "Desértico", "Polar", "Mediterráneo"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Qué bioma cubre gran parte del norte de Canadá y Rusia?",
          options: ["Selva", "Tundra", "Sabana", "Taiga"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué zona climática se encuentra el clima mediterráneo?",
          options: ["Ecuatorial", "Subtropical", "Templada", "Polar"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué fenómeno climático causa sequías en Australia y lluvias en Sudamérica?",
          options: ["La Niña", "El Niño", "Monzón", "Inversión térmica"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué tipo de clima predomina en la mayor parte de la Península Arábiga?",
          options: [
            "Clima desértico árido (BWh)",
            "Clima semiárido (BSh)",
            "Clima tropical (Aw)",
            "Clima mediterráneo (Csa)",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes biomas tiene la mayor biodiversidad terrestre?",
          options: ["Tundra", "Desierto", "Selva tropical", "Pradera templada"],
          correct: 2,
        },

        // === POBLACIÓN Y DISTRIBUCIÓN HUMANA ===
        {
          difficulty: "easy",
          question: "¿Qué país es el más poblado del mundo en 2025?",
          options: ["India", "China", "Estados Unidos", "Indonesia"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Cuál de las siguientes ciudades es la más poblada del mundo?",
          options: ["Nueva York", "Tokio", "México D.F.", "Sao Paulo"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué continente tiene la densidad poblacional más baja?",
          options: ["Asia", "África", "Oceanía", "Antártida"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question: "¿Cuál país tiene la mayor esperanza de vida en 2025?",
          options: ["Japón", "Suiza", "Singapur", "Mónaco"],
          correct: 3,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué región del mundo tiene la tasa de crecimiento demográfico más alta actualmente?",
          options: [
            "América Latina",
            "Asia Oriental",
            "África Subsahariana",
            "Europa Occidental",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países tiene una población predominantemente rural en 2025?",
          options: ["Alemania", "Etiopía", "Japón", "Australia"],
          correct: 1,
        },

        // === ORGANISMOS INTERNACIONALES Y GEOPOLÍTICA ===
        {
          difficulty: "easy",
          question:
            "¿Cuántos países forman parte de la Organización de las Naciones Unidas (ONU) aproximadamente?",
          options: ["150", "193", "210", "175"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué país es miembro permanente del Consejo de Seguridad de la ONU?",
          options: ["Alemania", "Japón", "Francia", "Brasil"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Cuál de los siguientes países NO pertenece a la OTAN?",
          options: ["Turquía", "Suecia", "Ucrania", "Polonia"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué bloque regional incluye a países como Argentina, Brasil y Paraguay?",
          options: ["ALBA", "MERCOSUR", "CAN", "UNASUR"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué país fue suspendido de la Unión Europea tras el referéndum del Brexit?",
          options: ["Irlanda", "Reino Unido", "Islandia", "Noruega"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de las siguientes naciones no es reconocida por la ONU como estado soberano?",
          options: ["Taiwán", "Corea del Sur", "Singapur", "Mongolia"],
          correct: 0,
        },

        // === PUNTOS EXTREMOS Y DATOS GLOBALES ===
        {
          difficulty: "easy",
          question:
            "¿Cuál es el punto más alto sobre el nivel del mar en la Tierra?",
          options: [
            "Monte Kilimanjaro",
            "Monte Everest",
            "Monte Aconcagua",
            "K2",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué país está más al sur del mundo?",
          options: ["Argentina", "Nueva Zelanda", "Chile", "Sudáfrica"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué país se encuentra el punto más bajo de la Tierra en tierra firme?",
          options: ["Egipto", "Israel", "Irán", "Jordania"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál es el archipiélago más grande del mundo por número de islas?",
          options: ["Filipinas", "Indonesia", "Japón", "Maldivas"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué país tiene el mayor número de zonas horarias?",
          options: ["Rusia", "Estados Unidos", "Francia", "China"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál es el país más joven del mundo (independizado más recientemente)?",
          options: ["Sudán del Sur", "Timor Oriental", "Kosovo", "Montenegro"],
          correct: 0,
        },

        // === RÍOS, MONTAÑAS Y DATOS ADICIONALES ===
        {
          difficulty: "easy",
          question: "¿En qué continente se encuentra el río Amazonas?",
          options: ["África", "Asia", "América del Sur", "Oceanía"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué montaña es considerada sagrada en el hinduismo y está en la India?",
          options: ["Monte Kailash", "Monte Everest", "Nanda Devi", "Aravalli"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes ríos no desemboca en el Océano Atlántico?",
          options: ["Amazonas", "Nilo", "Congo", "Orinoco"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el mar más salado del mundo?",
          options: ["Mar Muerto", "Mar Rojo", "Mar Mediterráneo", "Mar Caspio"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué país alberga el lago Titicaca?",
          options: [
            "Perú y Bolivia",
            "Chile y Argentina",
            "Colombia y Venezuela",
            "Ecuador y Perú",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué país tiene la mayor cantidad de volcanes activos en el mundo?",
          options: ["Japón", "Estados Unidos", "Indonesia", "Italia"],
          correct: 2,
        },

        // === DATOS DE CAPITALES Y FRONTERAS ===
        {
          difficulty: "easy",
          question: "¿Cuál es la capital de Australia?",
          options: ["Sídney", "Melbourne", "Canberra", "Brisbane"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué país africano no tiene costa?",
          options: ["Kenia", "Marruecos", "Etiopía", "Senegal"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de las siguientes capitales está situada más al norte?",
          options: ["Reikiavik", "Oslo", "Helsinki", "Estocolmo"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué país europeo comparte frontera con el mayor número de naciones?",
          options: ["Alemania", "Francia", "Rusia", "Austria"],
          correct: 0,
        },
        // === CLIMAS Y BIOMAS ===
        {
          difficulty: "easy",
          question:
            "¿Qué tipo de clima caracteriza a la mayor parte de la Amazonía según Köppen?",
          options: [
            "BWh (Desértico cálido)",
            "Af (Tropical lluvioso)",
            "Cfb (Oceánico templado)",
            "Dfc (Fresco continental)",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué zona climática se encuentran los países del norte de Europa?",
          options: ["Tropical", "Polar", "Templada", "Ecuatorial"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "Según la clasificación de Köppen, ¿qué letra representa los climas áridos?",
          options: ["A", "B", "C", "D"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué bioma predomina en el norte de Siberia?",
          options: ["Tundra", "Taiga", "Estepa", "Desierto frío"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes climas NO existe en Sudamérica según Köppen?",
          options: [
            "Af (Tropical lluvioso)",
            "BWk (Desértico frío)",
            "ET (Tundra)",
            "Dfa (Continental húmedo cálido)",
          ],
          correct: 3,
        },
        {
          difficulty: "hard",
          question:
            "¿En qué región del mundo se observa con mayor intensidad el fenómeno de los monzones de verano?",
          options: [
            "África occidental",
            "Sudeste asiático",
            "América central",
            "Australia meridional",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué fenómeno climático global está asociado con el calentamiento anómalo del Pacífico ecuatorial?",
          options: ["La Niña", "El Niño", "Inversión térmica", "Efecto Foehn"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué tipo de clima tiene inviernos secos y veranos lluviosos en regiones como el sur de China?",
          options: ["Csa", "Aw", "Cwa", "Am"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué bioma se caracteriza por lluvias estacionales, pastizales altos y fauna migratoria como ñus y cebras?",
          options: ["Selva tropical", "Sabana", "Estepa", "Bosque caducifolio"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué continente se encuentra la mayor extensión de tundra?",
          options: ["Asia", "América del Norte", "Europa", "Antártida"],
          correct: 1,
        },

        // === POBLACIÓN Y DISTRIBUCIÓN HUMANA ===
        {
          difficulty: "easy",
          question:
            "¿Cuál de los siguientes países tiene la menor población del mundo?",
          options: ["Mónaco", "Vaticano", "San Marino", "Liechtenstein"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué región del mundo tiene la mayor densidad poblacional?",
          options: [
            "África subsahariana",
            "Asia meridional",
            "Europa occidental",
            "América del Norte",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál de las siguientes ciudades NO es considerada una megaciudad (más de 10 millones de habitantes)?",
          options: ["Lagos", "Dhaka", "Bogotá", "Shanghái"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país recibe la mayor cantidad de migrantes internacionales en términos absolutos?",
          options: ["Alemania", "Arabia Saudita", "Estados Unidos", "Turquía"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países tiene una tasa de crecimiento poblacional negativa en 2025?",
          options: ["Nigeria", "India", "Japón", "Pakistán"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué región del mundo alberga a más del 60% de la población mundial?",
          options: [
            "África y Europa combinadas",
            "Asia",
            "América Latina",
            "Asia y África combinadas",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el país menos poblado de América del Sur?",
          options: ["Uruguay", "Guyana", "Surinam", "Guayana Francesa"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué ciudad es la más poblada de África en 2025?",
          options: ["El Cairo", "Lagos", "Kinshasa", "Johannesburgo"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países tiene la mayor proporción de población urbana?",
          options: ["Nigeria", "Argentina", "Bangladés", "Etiopía"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué país tiene la mayor población musulmana del mundo?",
          options: ["Arabia Saudita", "Irán", "Indonesia", "Pakistán"],
          correct: 2,
        },

        // === ORGANISMOS INTERNACIONALES Y GEOPOLÍTICA ===
        {
          difficulty: "easy",
          question:
            "¿Cuántos países fundaron originalmente la Unión Europea en 1957?",
          options: ["6", "12", "15", "28"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué organización regional agrupa a países del sudeste asiático como Indonesia, Tailandia y Filipinas?",
          options: ["APEC", "ASEAN", "SAARC", "MERCOSUR"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál de los siguientes países es miembro de la OTAN pero NO de la Unión Europea?",
          options: ["Polonia", "Turquía", "Hungría", "Finlandia"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué bloque económico incluye a México, Estados Unidos y Canadá desde 2020?",
          options: ["NAFTA", "ALCA", "USMCA", "MERCOSUR"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué país fue suspendido de la Comunidad de Estados Latinoamericanos y Caribeños (CELAC) en 2023?",
          options: [
            "Venezuela",
            "Brasil",
            "México",
            "Ninguno ha sido suspendido",
          ],
          correct: 3,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países NO pertenece a la Alianza del Pacífico?",
          options: ["Chile", "Colombia", "Perú", "Argentina"],
          correct: 3,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué país eslavo ortodoxo es miembro de la Unión Europea pero no de la OTAN?",
          options: ["Rumania", "Bulgaria", "Serbia", "Croacia"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué región del mundo es considerada zona de conflicto activo por disputas entre India y Pakistán?",
          options: ["Cachemira", "Baluchistán", "Cachemira", "Punjab"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué organización internacional tiene como objetivo principal la no proliferación de armas nucleares y cuenta con 191 Estados parte?",
          options: [
            "OTAN",
            "ONU",
            "Tratado de No Proliferación Nuclear (TNP)",
            "Agencia Internacional de Energía Atómica (AIEA)",
          ],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Cuál es la lengua más hablada del mundo por número de hablantes nativos?",
          options: ["Inglés", "Español", "Mandarín", "Hindi"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué religión es predominante en los países del norte de África?",
          options: ["Cristianismo", "Hinduismo", "Islam", "Judaísmo"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países tiene tres lenguas oficiales a nivel nacional?",
          options: ["Suiza", "Bélgica", "Canadá", "Sudáfrica"],
          correct: 3,
        },
        {
          difficulty: "easy",
          question: "¿Qué país de América del Sur NO tiene salida al mar?",
          options: ["Paraguay", "Colombia", "Ecuador", "Venezuela"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país ha sido objeto de sanciones internacionales por su programa nuclear y su gobierno teocrático?",
          options: ["Corea del Norte", "Irán", "Siria", "Venezuela"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países es reconocido por la ONU como Estado observador no miembro?",
          options: ["Taiwán", "Palestina", "Kosovo", "Groenlandia"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué continente tiene el mayor número de países miembros de la ONU?",
          options: ["Asia", "África", "Europa", "América"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué alianza militar incluye a países como EE.UU., Reino Unido, Alemania y Turquía?",
          options: ["Unión Europea", "OTAN", "OSCE", "G7"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál de los siguientes países es miembro del BRICS desde 2024?",
          options: ["México", "Egipto", "Arabia Saudita", "Indonesia"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué región del mundo tiene la mayor proporción de países con sistemas federales?",
          options: ["África", "Asia", "América", "Oceanía"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país asiático es miembro de la Commonwealth aunque nunca fue colonia británica?",
          options: ["India", "Mozambique", "Ruanda", "Malasia"],
          correct: 2,
        },

        // === FENÓMENOS CLIMÁTICOS Y DATOS ADICIONALES ===
        {
          difficulty: "easy",
          question:
            "¿Qué nombre recibe la temporada de lluvias intensas en la India y el sudeste asiático?",
          options: ["Tifón", "Ciclón", "Monzón", "Huracán"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué fenómeno se asocia con enfriamiento del Pacífico ecuatorial y sequías en Perú?",
          options: ["El Niño", "La Niña", "MJO", "ENSO"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿En qué tipo de clima según Köppen se registra una precipitación mensual mínima de 60 mm todos los meses?",
          options: ["Am", "Aw", "Af", "BSh"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué bioma se encuentra principalmente entre los trópicos y tiene alta biodiversidad?",
          options: ["Tundra", "Desierto", "Selva tropical", "Bosque boreal"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué región del mundo es más vulnerable a la desertificación?",
          options: [
            "Sahel africano",
            "Amazonas",
            "Escandinavia",
            "Sudeste asiático",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué factor principal determina la distribución de los biomas en el planeta?",
          options: [
            "Latitud y altitud",
            "Presencia de ríos",
            "Tipo de suelo",
            "Actividad humana",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué zona climática se encuentra el Círculo Polar Ártico?",
          options: ["Tropical", "Templada", "Polar", "Subtropical"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué tipo de clima tiene veranos calurosos, inviernos fríos y precipitaciones distribuidas todo el año?",
          options: ["Cfb", "Dfa", "BWh", "Af"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué clima, según Köppen, predomina en la mayor parte de la península ibérica?",
          options: ["Csa", "Csb", "BSh", "Cfa"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué fenómeno climático causa sequías recurrentes en el Cuerno de África?",
          options: [
            "Ciclones tropicales",
            "El Niño",
            "Inundaciones del Nilo",
            "Vientos alisios",
          ],
          correct: 1,
        },
      ],
    },

    // Historia -------------------------------------------------------------------------

    {
      id: "historia",
      name: "Historia",
      icon: "📜",
      questions: [
        {
          difficulty: "easy",
          question:
            "¿Cuál es la antigua civilización que construyó la ciudad de Caral en Perú?",
          options: ["Mochica", "Norte Chico", "Chavín", "Paracas"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué país se levantaron los moáis de la Isla de Pascua?",
          options: ["Polinesia", "Chile", "Perú", "Ecuador"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué imperio construyó la ciudad de Petra en la actual Jordania?",
          options: ["Persa", "Nabateo", "Romano", "Egipcio"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál fue la capital del Imperio Mali en su apogeo?",
          options: ["Timbuktú", "Gao", "Djenné", "Niani"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Qué país fue gobernado por el rey Solimán el Magnífico?",
          options: ["Persia", "Imperio Otomano", "Egipto", "Mogol"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué año Corea se dividió en norte y sur?",
          options: ["1945", "1948", "1950", "1953"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Qué ciudad fue destruida por el Vesubio en el 79 d.C.?",
          options: ["Roma", "Pompeya", "Nápoles", "Sicilia"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Quién fue el explorador que llegó a Australia en 1770 para Gran Bretaña?",
          options: ["James Cook", "Francis Drake", "Hawkins", "Vancouver"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Qué imperio usaba el quipu como sistema de registro?",
          options: ["Azteca", "Inca", "Maya", "Chibcha"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué país se proclamó la primera constitución de Asia en 1890?",
          options: ["Japón", "Corea", "China", "Siam"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué país fue colonizado por los neerlandeses y recibió el nombre de Nueva Holanda?",
          options: ["Sudáfrica", "Australia", "Nueva Zelanda", "Indonesia"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál fue la capital del Imperio Kanem-Bornu?",
          options: ["Njimi", "Kano", "Gao", "Kanem"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿En qué año se abolió la esclavitud en Brasil?",
          options: ["1865", "1878", "1888", "1900"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué ciudad fue fundada por los fenicios con el nombre de Qart-Hadasht?",
          options: ["Cartago", "Tiro", "Sidón", "Byblos"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué país venció en la Batalla de Adwa en 1896 contra Italia?",
          options: ["Etiopía", "Somalia", "Eritrea", "Sudán"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué dinastía china construyó la mayor parte de la Gran Muralla que hoy se ve?",
          options: ["Tang", "Ming", "Qing", "Han"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué año se independizó Ghana del Reino Unido?",
          options: ["1955", "1957", "1960", "1963"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué país fue gobernado por los khmeres de Angkor?",
          options: ["Tailandia", "Laos", "Camboya", "Vietnam"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Quién fue el último emperador de China?",
          options: ["Guangxu", "Puyi", "Xuantong", "Cixi"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué año se inauguró el Canal de Panamá?",
          options: ["1904", "1910", "1914", "1920"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué guerra enfrentó a Paraguay contra Argentina, Brasil y Uruguay?",
          options: [
            "Guerra del Chaco",
            "Guerra de la Triple Alianza",
            "Guerra de los Triples",
            "Guerra Grande",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿En qué año se disolvió la Federación Centroamericana?",
          options: ["1838", "1840", "1842", "1845"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué imperio controló la Ruta de la Seda durante la mayor parte de la Edad Media?",
          options: ["Bizantino", "Árabe", "Mongol", "Persa Sasánida"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Tratado de Gante que reconoció la independencia de Haití?",
          options: ["1823", "1825", "1827", "1830"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué país africano nunca fue colonizado por Europa?",
          options: ["Liberia", "Etiopía", "Sudán", "Somalia"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Quién fue el emperador que trasladó la capital del Imperio Bizantino a Constantinopla?",
          options: ["Teodosio", "Constantino I", "Justiniano", "Heraclio"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se fundó la ciudad de Kioto como capital de Japón?",
          options: ["710", "794", "1185", "1333"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué reino africano construyó las iglesias talladas en roca de Lalibela?",
          options: ["Etiopía", "Nubia", "Sudán", "Somalia"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Pacto de No Alineación en Bandung?",
          options: ["1953", "1955", "1957", "1959"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país derrotó a la Armada Española en la Batalla de Trafalgar?",
          options: ["Francia", "Reino Unido", "Portugal", "Países Bajos"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se fundó la ciudad de Quebec por los franceses?",
          options: ["1605", "1608", "1612", "1615"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué imperio construyó la ciudad de Timbuktú como centro académico?",
          options: [
            "Imperio Songhai",
            "Imperio Mali",
            "Imperio Ghana",
            "Imperio Kanem-Bornu",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Tratado de Shimonoseki que perdió China frente a Japón?",
          options: ["1894", "1895", "1896", "1898"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qu país europeo fue el primero en establecer un asentamiento permanente en Sudáfrica?",
          options: ["Portugal", "Países Bajos", "Reino Unido", "Francia"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿En qué año se proclamó la República de Turquía?",
          options: ["1919", "1920", "1922", "1923"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué civilización andina construyó la ciudad de Chan Chan?",
          options: ["Chimú", "Mochica", "Chachapoya", "Lambayeque"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Tratado de Nankín que cedió Hong Kong a Gran Bretaña?",
          options: ["1839", "1840", "1842", "1845"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué país latinoamericano fue gobernado por Francia entre 1864 y 1867?",
          options: ["México", "República Dominicana", "Haití", "Guatemala"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se fundó la ciudad de Vladivostok en el extremo oriental de Rusia?",
          options: ["1858", "1860", "1862", "1865"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué imperio africano controló la costa de oro actual Ghana entre los siglos XI-XIII?",
          options: [
            "Imperio Ghana",
            "Imperio Mali",
            "Imperio Songhai",
            "Reino Akwamu",
          ],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Tratado de Guadalupe-Hidalgo que terminó la guerra México-EE.UU.?",
          options: ["1846", "1847", "1848", "1850"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué país asiático fue conocido como Siam hasta 1939?",
          options: ["Myanmar", "Tailandia", "Laos", "Camboya"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se fundó la ciudad de Melbourne durante la fiebre del oro?",
          options: ["1835", "1837", "1840", "1851"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué reino africano construyó la gran muralla de Benín?",
          options: [
            "Reino de Benín",
            "Reino de Ashanti",
            "Reino de Oyo",
            "Reino de Dahomey",
          ],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se firmó el Tratado de Portsmouth que terminó la guerra Rusia-Japón?",
          options: ["1904", "1905", "1906", "1907"],
          correct: 1,
        },

        {
          difficulty: "easy",
          question: "¿Cuál fue la principal herramienta del Paleolítico?",
          options: [
            "Hacha de piedra pulida",
            "Rueda",
            "Cuchillo de sílex",
            "Arado",
          ],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué descubrimiento marcó el inicio del Neolítico?",
          options: [
            "Uso del fuego",
            "Agricultura y sedentarismo",
            "Rueda",
            "Metal",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué emperador romano dividió el Imperio en Oriente y Occidente?",
          options: ["Constantino", "Teodosio", "Diocleciano", "Augusto"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿En qué año fue coronado Napoleón emperador?",
          options: ["1799", "1804", "1806", "1812"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué dinastía china construyó la Gran Muralla en su mayor parte?",
          options: ["Tang", "Ming", "Qin", "Song"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué pueblo germánico fundó un reino en Tolosa (actual Toulouse)?",
          options: ["Ostrogodos", "Visigodos", "Vándalos", "Francos"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué isla fueron halladas las pinturas rupestres más famosas de la prehistoria española?",
          options: ["Gran Canaria", "Tenerife", "Altamira", "Ibiza"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué título se dio Napoleón tras el golpe de Estado de 1799?",
          options: ["Rey", "Cónsul vitalicio", "Emperador", "Director"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué dinastía china inventó el papel?",
          options: ["Han", "Tang", "Song", "Qin"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué caudillo visigodo venció a los romanos en Adrianópolis en 378?",
          options: ["Alarico", "Ataúlfo", "Leovigildo", "Recesvinto"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué emperador romano promulgó el Edicto de Milán en 313?",
          options: ["Constantino", "Diocleciano", "Teodosio", "Valente"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿En qué batalla Napoleón fue derrotado definitivamente?",
          options: ["Austerlitz", "Waterloo", "Leipzig", "Borodino"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué dinastía china inició la construcción del Gran Canal?",
          options: ["Sui", "Tang", "Song", "Yuan"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué rey visigodo promulgó el Código Liber Iudiciorum?",
          options: ["Leovigildo", "Recesvinto", "Ataúlfo", "Sisebuto"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué período prehistórico sigue al Paleolítico?",
          options: ["Neolítico", "Calcolítico", "Edad de Bronce", "Mesolítico"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué emperador romano hizo del cristianismo religión oficial del Imperio?",
          options: ["Constantino", "Teodosio", "Justiniano", "Valente"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿En qué año fue exiliado Napoleón a Santa Elena?",
          options: ["1812", "1814", "1815", "1821"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué dinastía china gobernó durante la expedición de Zheng He?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué reino germánico estableció Clodoveo I?",
          options: ["Visigodo", "Ostrogodo", "Franco", "Burgundio"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué yacimiento español es símbolo del Neolítico con su recinto circular de piedra?",
          options: ["Altamira", "Atapuerca", "Los Millares", "Antequera"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué tratado dividió el Imperio romano en 395?",
          options: [
            "Edicto de Milán",
            "Concordato de Worms",
            "Testamento de Teodosio",
            "Pacto de Tordesillas",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué código legal redactó Justiniano?",
          options: [
            "Codex Theodosianus",
            "Corpus Iuris Civilis",
            "Edicto de Rotari",
            "Lex Salica",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué batalla los godos derrotaron y mataron al emperador Valente?",
          options: [
            "Adrianópolis",
            "Frígido",
            "Campo Catalaúnico",
            "Río Mundo",
          ],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué sistema usaban los visigodos para repartirse tierras conquistadas?",
          options: ["Feudo", "Pacto de hospitalidad", "Sortes", "Beneficium"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué emperador chino mandó quemar libros y enterrar a los eruditos?",
          options: ["Han Wudi", "Qin Shi Huang", "Tang Taizong", "Kublai Khan"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué código publicó Napoleón en 1804?",
          options: [
            "Código Penal",
            "Código de Comercio",
            "Código Civil",
            "Código Rural",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla del 9 a.C. detuvo la expansión romana en Germania?",
          options: [
            "Batalla del Limes",
            "Batalla del Río Mundo",
            "Batalla de Teutoburgo",
            "Batalla de Idistaviso",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china usó por primera vez el examen impercial basado en textos confucianos?",
          options: ["Han", "Sui", "Tang", "Song"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Qué tratado firmó Napoleón con la Santa Sede en 1801?",
          options: [
            "Concordato",
            "Código Napoleónico",
            "Pacto de Fontainebleau",
            "Edicto de Nantes",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué emperador romano de origen godó fue depuesto en 476?",
          options: ["Romulo Augústulo", "Odoacro", "Teodoric", "Ricimer"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué dinastía china fue fundada por los manchúes?",
          options: ["Yuan", "Ming", "Qing", "Tang"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué ley visigoda regulaba la convivencia entre romanos y godos?",
          options: [
            "Lex Romana Visigothorum",
            "Breviario de Alarico",
            "Codex Euricianus",
            "Liber Iudiciorum",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿En qué año entraron las tropas napoleónicas en Moscú?",
          options: ["1811", "1812", "1813", "1814"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador bizantino reconquistó gran parte del occidente en el siglo VI?",
          options: ["Justiniano", "Heraclio", "Tiberio", "Mauricio"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué yacimiento español aporta los restos humanos más antiguos de Europa (>1,2 Ma)?",
          options: ["Altamira", "Atapuerca", "Los Millares", "El Argar"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla naval selló la supremacía francesa en el Mediterráneo frente a la Armada de Egipto en 1798?",
          options: ["Abukir", "Trafalgar", "Nilo", "Acre"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china patrocinó la enciclopedia 'Yongle Dadian'?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué caudillo vándalo saqueó Roma en 455?",
          options: ["Genserico", "Hunerico", "Gelimer", "Guntram"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué edicto romano fijó los precios máximos en 301 d.C.?",
          options: [
            "Edicto de Milán",
            "Edicto de Diocleciano",
            "Edicto de Tesalónica",
            "Edicto de Ravena",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador chino mandó constracer la Ciudad Prohibida en Beijing?",
          options: ["Hongwu", "Yongle", "Kangxi", "Qianlong"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla visigoda tuvo lugar en 507 contra los francos?",
          options: ["Vouillé", "Campo Catalaúnico", "Adrianópolis", "Orléans"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué sistema napoleónico bloqueó el comercio británico en Europa?",
          options: [
            "Liga de los Pueblos",
            "Sistema Continental",
            "Pacto de Fontainebleau",
            "Decreto de Berlín",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china sufrió la invasión de los jürchen que la obligó a trasladar la capital al sur?",
          options: ["Tang", "Song", "Yuan", "Ming"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador romano permitió el saqueo de Roma por godos en 410?",
          options: ["Honorio", "Arcadio", "Valente", "Graciano"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué código visigodo fue promulgado por Eurico en 475?",
          options: [
            "Codex Euricianus",
            "Liber Iudiciorum",
            "Breviario de Alarico",
            "Lex Salica",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿En qué año Napoleón abdicó por primera vez?",
          options: ["1813", "1814", "1815", "1816"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china implantó el sistema de registro de la población 'baojia'?",
          options: ["Song", "Ming", "Yuan", "Qing"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué conspiración interna pretendía restaurar la República en tiempos de Napoleón?",
          options: [
            "Conspiración de Pichegru",
            "Conspiración de los Dagos",
            "Conspiración de Malet",
            "Conspiración de Cadoudal",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador romano construyó el muro de Antonino en Britania?",
          options: ["Antonino Pío", "Adriano", "Trajano", "Marco Aurelio"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué dinastía china enfrentó la rebelión de los Boxers?",
          options: ["Ming", "Qing", "Song", "Yuan"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla visigoda de 531 opuso a Teudis al usurpador Agila?",
          options: ["Campo Catalaúnico", "Sevilla", "Tarraco", "Oporto"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué decreto napoleónico anexionó la Toscana al Imperio en 1808?",
          options: [
            "Decreto de Fontainebleau",
            "Decreto de Bayona",
            "Decreto de Valençay",
            "Decreto de Lyon",
          ],
          correct: 3,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador bizantino introdujo el tema de los 'temas' o distritos militares?",
          options: ["Heraclio", "Justiniano", "León III", "Basilio I"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué yacimiento francés reveló arte paleolítico de 30 000 años con estilos polícromos?",
          options: ["Chauvet", "Lascaux", "Altamira", "Niaux"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china usó por primera vez la pólvora militar?",
          options: ["Tang", "Song", "Yuan", "Ming"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué campaña napoleónica se saldó con la retirada desde Moscú?",
          options: [
            "Campaña de Rusia 1812",
            "Campaña de Prusia 1806",
            "Campaña de Polonia 1807",
            "Campaña de Silesia 1813",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué emperador romano creó la guardia pretoriana?",
          options: ["Augusto", "Tiberio", "Claudio", "Nerón"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué rey visigodo promulgó la unificación religiosa en el III Concilio de Toledo?",
          options: ["Recesvinto", "Leovigildo", "Sisebuto", "Atanagildo"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china llevó a cabo la expedición de Zheng He?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué tratado de 1807 dividía Portugal entre Napoleón y Godoy?",
          options: [
            "Tratado de Fontainebleau",
            "Tratado de Tilsit",
            "Tratado de Bayona",
            "Tratado de Valençay",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Cuál fue la principal herramienta del Paleolítico?",
          options: [
            "Hacha de piedra pulida",
            "Rueda",
            "Cuchillo de sílex",
            "Arado",
          ],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué descubrimiento marcó el inicio del Neolítico?",
          options: [
            "Uso del fuego",
            "Agricultura y sedentarismo",
            "Rueda",
            "Metal",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué emperador romano dividió el Imperio en Oriente y Occidente?",
          options: ["Constantino", "Teodosio", "Diocleciano", "Augusto"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿En qué año fue coronado Napoleón emperador?",
          options: ["1799", "1804", "1806", "1812"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué dinastía china construyó la Gran Muralla en su mayor parte?",
          options: ["Tang", "Ming", "Qin", "Song"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué pueblo germánico fundó un reino en Tolosa (actual Toulouse)?",
          options: ["Ostrogodos", "Visigodos", "Vándalos", "Francos"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué isla fueron halladas las pinturas rupestres más famosas de la prehistoria española?",
          options: ["Gran Canaria", "Tenerife", "Altamira", "Ibiza"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué título se dio Napoleón tras el golpe de Estado de 1799?",
          options: ["Rey", "Cónsul vitalicio", "Emperador", "Director"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué dinastía china inventó el papel?",
          options: ["Han", "Tang", "Song", "Qin"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué caudillo visigodo venció a los romanos en Adrianópolis en 378?",
          options: ["Alarico", "Ataúlfo", "Leovigildo", "Recesvinto"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué emperador romano promulgó el Edicto de Milán en 313?",
          options: ["Constantino", "Diocleciano", "Teodosio", "Valente"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿En qué batalla Napoleón fue derrotado definitivamente?",
          options: ["Austerlitz", "Waterloo", "Leipzig", "Borodino"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué dinastía china inició la construcción del Gran Canal?",
          options: ["Sui", "Tang", "Song", "Yuan"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué rey visigodo promulgó el Código Liber Iudiciorum?",
          options: ["Leovigildo", "Recesvinto", "Ataúlfo", "Sisebuto"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué período prehistórico sigue al Paleolítico?",
          options: ["Neolítico", "Calcolítico", "Edad de Bronce", "Mesolítico"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué emperador romano hizo del cristianismo religión oficial del Imperio?",
          options: ["Constantino", "Teodosio", "Justiniano", "Valente"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿En qué año fue exiliado Napoleón a Santa Elena?",
          options: ["1812", "1814", "1815", "1821"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué dinastía china gobernó durante la expedición de Zheng He?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué reino germánico estableció Clodoveo I?",
          options: ["Visigodo", "Ostrogodo", "Franco", "Burgundio"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué yacimiento español es símbolo del Neolítico con su recinto circular de piedra?",
          options: ["Altamira", "Atapuerca", "Los Millares", "Antequera"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué tratado dividió el Imperio romano en 395?",
          options: [
            "Edicto de Milán",
            "Concordato de Worms",
            "Testamento de Teodosio",
            "Pacto de Tordesillas",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué código legal redactó Justiniano?",
          options: [
            "Codex Theodosianus",
            "Corpus Iuris Civilis",
            "Edicto de Rotari",
            "Lex Salica",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué batalla los godos derrotaron y mataron al emperador Valente?",
          options: [
            "Adrianópolis",
            "Frígido",
            "Campo Catalaúnico",
            "Río Mundo",
          ],
          correct: 0,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué sistema usaban los visigodos para repartirse tierras conquistadas?",
          options: ["Feudo", "Pacto de hospitalidad", "Sortes", "Beneficium"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué emperador chino mandó quemar libros y enterrar a los eruditos?",
          options: ["Han Wudi", "Qin Shi Huang", "Tang Taizong", "Kublai Khan"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué código publicó Napoleón en 1804?",
          options: [
            "Código Penal",
            "Código de Comercio",
            "Código Civil",
            "Código Rural",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla del 9 a.C. detuvo la expansión romana en Germania?",
          options: [
            "Batalla del Limes",
            "Batalla del Río Mundo",
            "Batalla de Teutoburgo",
            "Batalla de Idistaviso",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china usó por primera vez el examen impercial basado en textos confucianos?",
          options: ["Han", "Sui", "Tang", "Song"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Qué tratado firmó Napoleón con la Santa Sede en 1801?",
          options: [
            "Concordato",
            "Código Napoleónico",
            "Pacto de Fontainebleau",
            "Edicto de Nantes",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué emperador romano de origen godó fue depuesto en 476?",
          options: ["Romulo Augústulo", "Odoacro", "Teodoric", "Ricimer"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué dinastía china fue fundada por los manchúes?",
          options: ["Yuan", "Ming", "Qing", "Tang"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué ley visigoda regulaba la convivencia entre romanos y godos?",
          options: [
            "Lex Romana Visigothorum",
            "Breviario de Alarico",
            "Codex Euricianus",
            "Liber Iudiciorum",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿En qué año entraron las tropas napoleónicas en Moscú?",
          options: ["1811", "1812", "1813", "1814"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador bizantino reconquistó gran parte del occidente en el siglo VI?",
          options: ["Justiniano", "Heraclio", "Tiberio", "Mauricio"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué yacimiento español aporta los restos humanos más antiguos de Europa (>1,2 Ma)?",
          options: ["Altamira", "Atapuerca", "Los Millares", "El Argar"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla naval selló la supremacía francesa en el Mediterráneo frente a la Armada de Egipto en 1798?",
          options: ["Abukir", "Trafalgar", "Nilo", "Acre"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china patrocinó la enciclopedia 'Yongle Dadian'?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué caudillo vándalo saqueó Roma en 455?",
          options: ["Genserico", "Hunerico", "Gelimer", "Guntram"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué edicto romano fijó los precios máximos en 301 d.C.?",
          options: [
            "Edicto de Milán",
            "Edicto de Diocleciano",
            "Edicto de Tesalónica",
            "Edicto de Ravena",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador chino mandó constracer la Ciudad Prohibida en Beijing?",
          options: ["Hongwu", "Yongle", "Kangxi", "Qianlong"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla visigoda tuvo lugar en 507 contra los francos?",
          options: ["Vouillé", "Campo Catalaúnico", "Adrianópolis", "Orléans"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué sistema napoleónico bloqueó el comercio británico en Europa?",
          options: [
            "Liga de los Pueblos",
            "Sistema Continental",
            "Pacto de Fontainebleau",
            "Decreto de Berlín",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china sufrió la invasión de los jürchen que la obligó a trasladar la capital al sur?",
          options: ["Tang", "Song", "Yuan", "Ming"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador romano permitió el saqueo de Roma por godos en 410?",
          options: ["Honorio", "Arcadio", "Valente", "Graciano"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué código visigodo fue promulgado por Eurico en 475?",
          options: [
            "Codex Euricianus",
            "Liber Iudiciorum",
            "Breviario de Alarico",
            "Lex Salica",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿En qué año Napoleón abdicó por primera vez?",
          options: ["1813", "1814", "1815", "1816"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china implantó el sistema de registro de la población 'baojia'?",
          options: ["Song", "Ming", "Yuan", "Qing"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué conspiración interna pretendía restaurar la República en tiempos de Napoleón?",
          options: [
            "Conspiración de Pichegru",
            "Conspiración de los Dagos",
            "Conspiración de Malet",
            "Conspiración de Cadoudal",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador romano construyó el muro de Antonino en Britania?",
          options: ["Antonino Pío", "Adriano", "Trajano", "Marco Aurelio"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué dinastía china enfrentó la rebelión de los Boxers?",
          options: ["Ming", "Qing", "Song", "Yuan"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué batalla visigoda de 531 opuso a Teudis al usurpador Agila?",
          options: ["Campo Catalaúnico", "Sevilla", "Tarraco", "Oporto"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué decreto napoleónico anexionó la Toscana al Imperio en 1808?",
          options: [
            "Decreto de Fontainebleau",
            "Decreto de Bayona",
            "Decreto de Valençay",
            "Decreto de Lyon",
          ],
          correct: 3,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué emperador bizantino introdujo el tema de los 'temas' o distritos militares?",
          options: ["Heraclio", "Justiniano", "León III", "Basilio I"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué yacimiento francés reveló arte paleolítico de 30 000 años con estilos polícromos?",
          options: ["Chauvet", "Lascaux", "Altamira", "Niaux"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china usó por primera vez la pólvora militar?",
          options: ["Tang", "Song", "Yuan", "Ming"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué campaña napoleónica se saldó con la retirada desde Moscú?",
          options: [
            "Campaña de Rusia 1812",
            "Campaña de Prusia 1806",
            "Campaña de Polonia 1807",
            "Campaña de Silesia 1813",
          ],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Qué emperador romano creó la guardia pretoriana?",
          options: ["Augusto", "Tiberio", "Claudio", "Nerón"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué rey visigodo promulgó la unificación religiosa en el III Concilio de Toledo?",
          options: ["Recesvinto", "Leovigildo", "Sisebuto", "Atanagildo"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué dinastía china llevó a cabo la expedición de Zheng He?",
          options: ["Yuan", "Ming", "Qing", "Song"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué tratado de 1807 dividía Portugal entre Napoleón y Godoy?",
          options: [
            "Tratado de Fontainebleau",
            "Tratado de Tilsit",
            "Tratado de Bayona",
            "Tratado de Valençay",
          ],
          correct: 0,
        },
      ],
    },

    // Ciencia---------------------------------------------------------------------------------------

    {
      id: "ciencia",
      name: "Ciencia",
      icon: "🔬",
      questions: [
        // === FÍSICA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Cuál es la unidad SI de fuerza?",
          options: ["Julio", "Newton", "Vatio", "Pascal"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "Según la primera ley de Newton, un objeto en reposo permanecerá en reposo a menos que:",
          options: [
            "Se aplique una fuerza neta",
            "Se enfríe",
            "Se eleve",
            "Cambia de color",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿A cuántos metros equivalen 2.5 kilómetros?",
          options: ["25", "250", "2500", "0.25"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué fenómeno explica la formación de imágenes en un espejo plano?",
          options: ["Refracción", "Difracción", "Reflexión", "Absorción"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es la unidad SI de energía?",
          options: ["Newton", "Vatio", "Julio", "Culombio"],
          correct: 2,
        },

        // === FÍSICA - MEDIO ===
        {
          difficulty: "medium",
          question:
            "En un circuito en serie con dos resistencias de 4 Ω y 6 Ω, ¿cuál es la resistencia total?",
          options: ["10 Ω", "2.4 Ω", "24 Ω", "1.5 Ω"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "La energía mecánica total de un sistema se conserva si:",
          options: [
            "Hay fricción",
            "Actúan solo fuerzas conservativas",
            "La masa cambia",
            "La velocidad es constante",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué ley de la termodinámica afirma que la entropía del universo tiende a aumentar?",
          options: ["Primera", "Segunda", "Tercera", "Ley cero"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "La frecuencia de una onda se mide en:",
          options: ["Metros", "Julios", "Hercios", "Newtons"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué ocurre con la velocidad de la luz al pasar del aire al vidrio?",
          options: ["Aumenta", "Disminuye", "Se invierte", "No cambia"],
          correct: 1,
        },

        // === FÍSICA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "Según la relatividad especial, ¿qué sucede con el tiempo para un observador en movimiento rápido?",
          options: ["Se acelera", "Se detiene", "Se dilata", "Se invierte"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "En el efecto fotoeléctrico, ¿qué propiedad de la luz determina si se emiten electrones?",
          options: [
            "Intensidad",
            "Frecuencia",
            "Longitud de onda",
            "Velocidad",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué fenómeno se observa cuando dos ondas coherentes se superponen y forman franjas brillantes y oscuras?",
          options: [
            "Difracción",
            "Refracción",
            "Interferencia",
            "Polarización",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "En un movimiento circular uniformemente variado (MCUV), ¿qué magnitud cambia con el tiempo?",
          options: [
            "Radio",
            "Velocidad angular",
            "Masa",
            "Dirección del centro",
          ],
          correct: 1,
        },

        // === QUÍMICA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Cuál es el símbolo químico del sodio?",
          options: ["So", "Sd", "Na", "S"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cómo se llama el compuesto NaCl?",
          options: [
            "Cloruro de sodio",
            "Sodio cloroso",
            "Hipoclorito de sodio",
            "Clorato de sodio",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué estado de la materia las partículas están muy juntas y vibran en posición fija?",
          options: ["Líquido", "Gaseoso", "Sólido", "Plasma"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el número atómico del oxígeno?",
          options: ["6", "8", "16", "10"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué elemento está en el grupo 1 y período 2 de la tabla periódica?",
          options: ["Litio", "Sodio", "Potasio", "Hidrógeno"],
          correct: 0,
        },

        // === QUÍMICA - MEDIO ===
        {
          difficulty: "medium",
          question:
            "¿Cuántos moles de agua se producen al reaccionar 2 moles de H₂ con 1 mol de O₂?",
          options: ["1", "2", "3", "4"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "Una solución con pH = 3 es:",
          options: ["Básica", "Neutra", "Ácida", "Amortiguadora"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué tipo de enlace predomina en el NaCl?",
          options: ["Covalente", "Metálico", "Iónico", "Dipolo-dipolo"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "La entalpía de reacción se refiere a:",
          options: [
            "Cambio de entropía",
            "Cambio de volumen",
            "Cambio de calor a presión constante",
            "Energía de activación",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué ion produce un sabor agrio en las soluciones?",
          options: ["OH⁻", "Na⁺", "H⁺", "Cl⁻"],
          correct: 2,
        },

        // === QUÍMICA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué parámetro mide la velocidad de una reacción química en función de la concentración de reactivos?",
          options: [
            "Constante de equilibrio",
            "Orden de reacción",
            "Energía libre",
            "Entropía",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "En una celda galvánica, la oxidación ocurre en:",
          options: ["Cátodo", "Ánodo", "Puente salino", "Electrolito"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué tipo de orbital molecular se forma por superposición lateral de orbitales p?",
          options: ["σ (sigma)", "π (pi)", "δ (delta)", "φ (phi)"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué número cuántico define la forma del orbital?",
          options: ["Principal", "Azimutal", "Magnético", "De espín"],
          correct: 1,
        },

        // === BIOLOGÍA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Cuál es la unidad básica de la vida?",
          options: ["Átomo", "Molécula", "Célula", "Tejido"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué orgánulo realiza la fotosíntesis en las células vegetales?",
          options: ["Mitocondria", "Núcleo", "Cloroplasto", "Ribosoma"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué gas liberan las plantas durante la fotosíntesis?",
          options: ["Dióxido de carbono", "Nitrógeno", "Oxígeno", "Metano"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Cuál es el nivel de organización inmediatamente superior al órgano?",
          options: ["Célula", "Tejido", "Sistema", "Organismo"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué elemento es fijado por bacterias en el ciclo del nitrógeno?",
          options: ["Oxígeno", "Carbono", "Nitrógeno", "Azufre"],
          correct: 2,
        },

        // === BIOLOGÍA - MEDIO ===
        {
          difficulty: "medium",
          question:
            "En la herencia mendeliana, si dos progenitores heterocigotos (Aa) se cruzan, ¿qué proporción de descendencia es homocigota recesiva?",
          options: ["25%", "50%", "75%", "100%"],
          correct: 0,
        },
        {
          difficulty: "medium",
          question: "¿Qué enzima es clave en la replicación del ADN?",
          options: ["ARN polimerasa", "Ligasa", "ADN polimerasa", "Helicasa"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué sistema regula la homeostasis del calcio en el cuerpo humano?",
          options: ["Nervioso", "Endocrino", "Inmunológico", "Digestivo"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿A qué dominio pertenece el ser humano?",
          options: ["Bacteria", "Arquea", "Eukarya", "Protista"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál de los siguientes es un ejemplo de tejido conjuntivo?",
          options: ["Músculo cardiaco", "Epidermis", "Hueso", "Neurona"],
          correct: 2,
        },

        // === BIOLOGÍA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué técnica permite amplificar segmentos específicos de ADN in vitro?",
          options: [
            "Electroforesis",
            "Secuenciación de Sanger",
            "PCR",
            "Western blot",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "En inmunología, ¿qué células producen anticuerpos?",
          options: ["Células T", "Macrófagos", "Células B", "Neutrófilos"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué modelo describe el crecimiento poblacional con límite de carga ambiental?",
          options: ["Exponencial", "Logístico", "Geométrico", "Aleatorio"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué enzima utiliza CRISPR-Cas9 para cortar ADN?",
          options: ["Ligasa", "Helicasa", "Nucleasa", "Polimerasa"],
          correct: 2,
        },

        // === ASTRONOMÍA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Cuál es el planeta más cercano al Sol?",
          options: ["Venus", "Tierra", "Marte", "Mercurio"],
          correct: 3,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué fase lunar ocurre cuando la Luna está entre la Tierra y el Sol?",
          options: [
            "Luna llena",
            "Cuarto creciente",
            "Luna nueva",
            "Cuarto menguante",
          ],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es la estrella más cercana a la Tierra?",
          options: ["Sirio", "Alfa Centauri", "Sol", "Betelgeuse"],
          correct: 2,
        },

        // === ASTRONOMÍA - MEDIO ===
        {
          difficulty: "medium",
          question:
            "Según la tercera ley de Kepler, el cuadrado del período orbital es proporcional al cubo de:",
          options: [
            "La masa del planeta",
            "El radio ecuatorial",
            "La distancia media al Sol",
            "La excentricidad",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué tipo espectral corresponde a estrellas rojas y frías como Betelgeuse?",
          options: ["O", "B", "G", "M"],
          correct: 3,
        },
        {
          difficulty: "medium",
          question: "¿Cuántos años luz hay en un pársec aproximadamente?",
          options: ["1.0", "3.26", "10", "0.5"],
          correct: 1,
        },

        // === ASTRONOMÍA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué observación sugiere la existencia de materia oscura en galaxias espirales?",
          options: [
            "Luz excesiva",
            "Curvas de rotación planas",
            "Explosiones de rayos gamma",
            "Alineación de cuásares",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "El método de tránsito para detectar exoplanetas mide:",
          options: [
            "Cambio en la velocidad radial",
            "Disminución en el brillo estelar",
            "Ondas gravitacionales",
            "Desplazamiento espectral",
          ],
          correct: 1,
        },

        // === CIENCIAS DE LA TIERRA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Cuál es la capa más externa de la Tierra?",
          options: ["Manto", "Núcleo", "Corteza", "Litósfera"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué tipo de roca se forma por enfriamiento del magma?",
          options: ["Sedimentaria", "Metamórfica", "Ígnea", "Orgánica"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué mide la escala de Richter?",
          options: [
            "Intensidad del viento",
            "Magnitud de un terremoto",
            "Presión atmosférica",
            "Temperatura del manto",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el océano más grande del mundo?",
          options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
          correct: 3,
        },

        // === CIENCIAS DE LA TIERRA - MEDIO ===
        {
          difficulty: "medium",
          question:
            "¿Qué proceso ocurre cuando una placa tectónica se hunde bajo otra?",
          options: ["Divergencia", "Subducción", "Transformación", "Acreción"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué diferencia principal existe entre clima y tiempo atmosférico?",
          options: [
            "El clima cambia diariamente",
            "El tiempo se mide en siglos",
            "El clima es promedio a largo plazo",
            "El tiempo es global",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué gas es fijado por bacterias en el ciclo del nitrógeno?",
          options: ["O₂", "CO₂", "N₂", "CH₄"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué tipo de onda sísmica no viaja por líquidos?",
          options: ["Onda P", "Onda S", "Onda superficial", "Onda L"],
          correct: 1,
        },

        // === CIENCIAS DE LA TIERRA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué evidencia proporciona el paleomagnetismo en las rocas oceánicas?",
          options: [
            "Edad de los fósiles",
            "Expansión del fondo oceánico",
            "Composición del núcleo",
            "Origen de los continentes",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué fenómeno oceánico describe la circulación profunda impulsada por diferencias de temperatura y salinidad?",
          options: [
            "Corriente de Humboldt",
            "El Niño",
            "Circulación termohalina",
            "Marea de resaca",
          ],
          correct: 2,
        },

        // === MATEMÁTICAS APLICADAS - FÁCIL ===
        {
          difficulty: "easy",
          question: "Si 2 kg de manzanas cuestan $4, ¿cuánto cuestan 5 kg?",
          options: ["$6", "$8", "$10", "$12"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué porcentaje representa 1/4?",
          options: ["10%", "25%", "40%", "50%"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "Si 'x' y 'y' son directamente proporcionales, y x=2 cuando y=6, ¿cuánto es y cuando x=5?",
          options: ["10", "12", "15", "18"],
          correct: 2,
        },

        // === MATEMÁTICAS APLICADAS - MEDIO ===
        {
          difficulty: "medium",
          question:
            "Si el pH de una solución es 2, ¿cuál es la concentración de H⁺ en mol/L?",
          options: ["0.1", "0.01", "0.001", "1"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuál es el logaritmo en base 10 de 1000?",
          options: ["1", "2", "3", "4"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "En estadística, ¿qué mide la desviación estándar?",
          options: [
            "Valor promedio",
            "Valor máximo",
            "Dispersión de los datos",
            "Frecuencia acumulada",
          ],
          correct: 2,
        },

        // === MATEMÁTICAS APLICADAS - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "Si un instrumento mide con error ±0.1 y otro con ±0.2, ¿cuál es el error combinado en una suma?",
          options: ["±0.1", "±0.2", "±0.3", "±0.02"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "En cinética química, la derivada parcial de la concentración respecto al tiempo representa:",
          options: [
            "Energía de activación",
            "Velocidad de reacción",
            "Orden global",
            "Constante de equilibrio",
          ],
          correct: 1,
        },

        // === HISTORIA DE LA CIENCIA - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Quién propuso el modelo heliocéntrico del sistema solar?",
          options: ["Galileo", "Kepler", "Copérnico", "Newton"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿En qué año el ser humano llegó a la Luna por primera vez?",
          options: ["1967", "1969", "1971", "1975"],
          correct: 1,
        },

        // === HISTORIA DE LA CIENCIA - MEDIO ===
        {
          difficulty: "medium",
          question: "¿Qué demostró el experimento de Michelson-Morley?",
          options: [
            "Existencia del éter",
            "Velocidad variable de la luz",
            "Ausencia del éter luminífero",
            "Dualidad onda-partícula",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué contribución clave hizo Rosalind Franklin al estudio del ADN?",
          options: [
            "Modelo de doble hélice",
            "Fotografía de rayos X 51",
            "Descubrimiento de bases nitrogenadas",
            "Síntesis de ADN",
          ],
          correct: 1,
        },

        // === HISTORIA DE LA CIENCIA - DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué descubrimiento se anunció en 2015 por LIGO y confirmó una predicción de Einstein?",
          options: [
            "Materia oscura",
            "Neutrinos estériles",
            "Ondas gravitacionales",
            "Bosón de Higgs",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué logró el telescopio espacial James Webb (JWST) tras su lanzamiento en 2022?",
          options: [
            "Aterrizar en Marte",
            "Detectar vida extraterrestre",
            "Observar galaxias tempranas del universo",
            "Medir la expansión del universo con precisión cuántica",
          ],
          correct: 2,
        },

        // === TEMAS TRANSVERSALES “HOT” - FÁCIL ===
        {
          difficulty: "easy",
          question: "¿Qué tipo de energía se obtiene del viento?",
          options: ["Geotérmica", "Hidráulica", "Eólica", "Biomasa"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Cuál gas de efecto invernadero es el principal responsable del cambio climático actual?",
          options: [
            "Metano",
            "Dióxido de carbono",
            "Óxidos de nitrógeno",
            "Vapor de agua",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué principio ético recomienda actuar con cautela ante riesgos científicos desconocidos?",
          options: [
            "Principio de responsabilidad",
            "Principio de precaución",
            "Principio de justicia",
            "Principio de autonomía",
          ],
          correct: 1,
        },

        // === TEMAS TRANSVERSALES – MEDIO ===
        {
          difficulty: "medium",
          question: "¿Qué significa CO₂-eq en estudios climáticos?",
          options: [
            "Concentración de oxígeno",
            "Dióxido de carbono equivalente",
            "Ciclo del carbono equilibrado",
            "Compuestos orgánicos volátiles",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué tecnología permite editar genes con alta precisión?",
          options: ["PCR", "CRISPR", "Electroporación", "Clonación somática"],
          "correct": 1,
        },
        {
          difficulty: "medium",
          question: "En biotecnología, ¿qué son las células CHO?",
          options: [
            "Células madre humanas",
            "Células hepáticas de rata",
            "Células de ovario de hámster chino",
            "Células tumorales",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué proceso asegura la calidad de investigaciones científicas antes de su publicación?",
          options: [
            "Revisión por pares",
            "Evaluación ciudadana",
            "Validación gubernamental",
            "Auditoría financiera",
          ],
          correct: 0,
        },

        // === TEMAS TRANSVERSALES – DIFÍCIL ===
        {
          difficulty: "hard",
          question:
            "¿Qué logró Google en 2019 con su procesador Sycamore en computación cuántica?",
          options: [
            "Primera simulación cuántica",
            "Supremacía cuántica",
            "Teletransporte cuántico",
            "Criptografía post-cuántica",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué son los 'tipping points' en el contexto del cambio climático?",
          options: [
            "Puntos de medición",
            "Umbral de cambio irreversible",
            "Zonas de protección",
            "Eventos meteorológicos extremos",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué técnica se usa en bioimpresión 3D para crear tejidos vivos?",
          options: [
            "Láser de CO₂",
            "Tinta conductora",
            "Bioink con células",
            "Resina fotopolimerizable",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué concepto describe el calentamiento global equivalente de un gas respecto al CO₂ durante 100 años?",
          options: [
            "GWP (Potencial de Calentamiento Global)",
            "IPCC",
            "RCP",
            "ALBEDO",
          ],
          correct: 0,
        },
      ],
    },

    // Deportes--------------------------------------------------------------------------------------

    {
      id: "deportes",
      name: "Deportes",
      icon: "⚽",
      questions: [
        {
          "difficulty": "easy",
          "question": "¿Cuántos jugadores titulares tiene un equipo de fútbol en el campo?",
          "options": ["10", "11", "12", "9"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿En qué país se inventó el ajedrez moderno?",
          "options": ["India", "China", "Irán", "Egipto"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos metros tiene una piscina olímpica de longitud?",
          "options": ["25 m", "50 m", "100 m", "40 m"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué deporte se juega con un balón ovalado y se practica en la NFL?",
          "options": ["Rugby", "Fútbol americano", "Aussie Rules", "Fútbol canadiense"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos mundiales de la FIFA ha ganado Brasil hasta 2023?",
          "options": ["4", "5", "6", "3"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué prueba de atletismo corre exactamente 42,195 km?",
          "options": ["Maratón", "Media maratón", "10 km", "Ultramaratón"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿En qué deporte se usa el término ‘libre’ para una jugada después de falta?",
          "options": ["Baloncesto", "Balonmano", "Fútbol", "Rugby"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos movimientos puede hacer un caballo de ajedrez en su primera jugada?",
          "options": ["2", "4", "6", "8"],
          "correct": 3
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país ganó el oro en 100 m lisos en los Juegos Olímpicos de Río 2016?",
          "options": ["Jamaica", "Estados Unidos", "Gran Bretaña", "Canadá"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos tiros de penalización se lanzan en un partido de waterpolo tras falta mayor?",
          "options": ["1", "2", "3", "0"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué deporte se juega en Wimbledon?",
          "options": ["Tenis", "Croquet", "Golf", "Cricket"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué color tiene la tarjeta de expulsión en voleibol?",
          "options": ["Rojo", "Amarillo", "Azul", "Blanco"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos jugadores componen un equipo de béisbol en el campo?",
          "options": ["8", "9", "10", "11"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿En qué deporte se usa un ‘mallet’ (mazo) para golpear una bola?",
          "options": ["Polo", "Cricket", "Golf", "Hockey sobre hielo"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país ganó la medalla de oro en baloncesto masculino en Tokio 2020?",
          "options": ["Estados Unidos", "Francia", "Australia", "Eslovenia"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos segundos debe durar como mínimo un round de boxeo olímpico?",
          "options": ["120 s", "180 s", "90 s", "60 s"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué deporte se practica en un ‘dojo’?",
          "options": ["Judo", "Taekwondo", "Karate", "Todos los anteriores"],
          "correct": 3
        },
        {
          "difficulty": "easy",
          "question": "¿Qué equipo tiene el récord de más Copas de Europa/Champions League ganadas?",
          "options": ["Barcelona", "Bayern Múnich", "Real Madrid", "Milan"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿En qué deporte se utiliza la técnica de ‘spike’?",
          "options": ["Voleibol", "Tenis", "Badminton", "Waterpolo"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué juego tradicional japonés se parece a las ‘cometas’ y se usa en festivales?",
          "options": ["Tako-age", "Kendama", "Hanetsuki", "Karuta"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Quién fue el primer ajedrecista en superar el ELO 2800 FIDE?",
          "options": ["Kasparov", "Karpov", "Carlsen", "Fischer"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿En qué año se introdujo el ‘Tie-break’ en el tenis de Grand Slam?",
          "options": ["1968", "1970", "1972", "1974"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué nadador fue el primero en bajar de 47 s en 100 m espalda en larga piscina?",
          "options": ["Ryan Murphy", "Aaron Peirsol", "Xu Jiayu", "Camille Lacourt"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó el primer oro olímpico en rugby 7 masculino (Río 2016)?",
          "options": ["Sudáfrica", "Gran Bretaña", "Fiyi", "Australia"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Cuántos mundiales de atletismo ha ganado Usain Bolt en pruebas individuales?",
          "options": ["7", "8", "9", "11"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué jugador de fútbol ha marcado en más finales de Champions League?",
          "options": ["Cristiano Ronaldo", "Lionel Messi", "Gareth Bale", "Alfredo Di Stéfano"],
          "correct": 3
        },
        {
          "difficulty": "medium",
          "question": "¿En qué deporte se utiliza el sistema de puntuación ‘ippon’?",
          "options": ["Judo", "Lucha", "Karate", "Sumo"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué mujer posee el récord mundial de salto con pértiga al aire libre?",
          "options": ["Katie Moon", "Anzhelika Sidorova", "Elena Isinbayeva", "Sandi Morris"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Cuántos kilómetros tiene la prueba de ‘Ironman’ de natación?",
          "options": ["1,5 km", "1,9 km", "3,8 km", "5 km"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país inventó el juego tradicional de ‘kabaddi’?",
          "options": ["India", "Bangladés", "Pakistán", "Nepal"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué equipo de la NBA tiene el récord de más victorias en una temporada regular (73)?",
          "options": ["Lakers", "Bulls", "Warriors", "Celtics"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿En qué deporte se habla de ‘sacar un ciclo’ (single, doble, triple y HR en un mismo juego)?",
          "options": ["Cricket", "Béisbol", "Softbol", "Rounders"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ha ganado más medallas totales en atletismo de todos los tiempos?",
          "options": ["URSS/Rusia", "Estados Unidos", "Alemania", "Gran Bretaña"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Cuántos segundos como mínimo debe durar un saque de voleibol desde el silbato del árbitro?",
          "options": ["5 s", "8 s", "10 s", "15 s"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué ajedrecista ganó el Campeonato Mundial 2023 contra Ding Liren?",
          "options": ["Ian Nepomniachtchi", "Magnus Carlsen", "Fabiano Caruana", "Hikaru Nakamura"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿En qué deporte se usa la técnica de ‘Fosbury flop’?",
          "options": ["Salto alto", "Salto con pértiga", "Salto largo", "Triple salto"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó la medalla de oro en waterpolo masculino en Tokio 2020?",
          "options": ["Serbia", "Grecia", "Hungría", "Croacia"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué velocidad aproximada alcanza un saque de tenis profesional récord (km/h)?",
          "options": ["220", "240", "263", "281"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Cuántos mundiales de fútbol femenino ha ganado Estados Unidos hasta 2023?",
          "options": ["3", "4", "5", "6"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué juego tradicional escocés se juega en un ‘curling rink’?",
          "options": ["Curling", "Shinty", "Golf", "Tossing the caber"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué nadador etíope fue el primero en ganar una medalla olímpica en natación para África?",
          "options": ["Dawit Abebe", "Robel Kiros", "Yonas Kinde", "No ha ocurrido aún"],
          "correct": 3
        },
        {
          "difficulty": "medium",
          "question": "¿En qué deporte se utiliza el ‘scrum’?",
          "options": ["Rugby unión", "Rugby league", "Fútbol americano", "Australian Rules"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó el oro en balonmano femenino en Río 2016?",
          "options": ["Rusia", "Francia", "Noruega", "Países Bajos"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Cuántos cuadros hay en un tablero de ajedrez?",
          "options": ["32", "64", "72", "100"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué atleta ha ganado más medallas olímpicas en la historia del atletismo?",
          "options": ["Carl Lewis", "Usain Bolt", "Paavo Nurmi", "Allyson Felix"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué jugador de ajedrez tiene el récord de partidas invictas consecutivas (125)?",
          "options": ["Bobby Fischer", "Magnus Carlsen", "Mikhail Tal", "José Raúl Capablanca"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿En qué año se estableció el primer récord mundial oficial de natación reconocido por la FINA?",
          "options": ["1906", "1908", "1912", "1924"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el primer oro olímpico en patinaje artístico (1908)?",
          "options": ["Suecia", "Reino Unido", "Alemania", "Estados Unidos"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Cuál es la distancia exacta del ‘Maratón de Boston’ en millas?",
          "options": ["26,21875", "26,2", "26,385", "26,5"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué nadador fue el primero en bajar de 1:50 en 200 m espalda (larga)?",
          "options": ["Ryan Murphy", "Aaron Peirsol", "Evgeny Rylov", "Mitch Larkin"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó la medalla de oro en hockey sobre hierba femenino en Tokio 2020?",
          "options": ["Países Bajos", "Argentina", "Gran Bretaña", "Australia"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿En qué deporte se utiliza el término ‘chinaman’ para un tipo de lanzamiento?",
          "options": ["Cricket", "Béisbol", "Petanca", "Boliche"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué atleta posee el récord mundial actual de lanzamiento de martillo masculino?",
          "options": ["Paweł Fajdek", "Mykhaylo Kokhan", "Ethan Katzberg", "Wojciech Nowicki"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Cuántos movimientos legales máximos puede haber en una posición de ajedrez (sin promoción)?",
          "options": ["218", "219", "220", "221"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó la primera Copa Mundial de Fútbol de la FIFA (1930)?",
          "options": ["Argentina", "Uruguay", "Italia", "Brasil"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿En qué deporte se habla de ‘albatros’?",
          "options": ["Golf", "Cricket", "Béisbol", "Tenis"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué velocidad media aproximada se alcanza en el descenso masculino de esquí alpino (km/h)?",
          "options": ["80", "100", "120", "140"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el oro en waterpolo femenino en Río 2016?",
          "options": ["Estados Unidos", "Italia", "España", "Australia"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué juego tradicional mongol se practica durante el Naadam y significa ‘lucha’?",
          "options": ["Bökh", "Kuresh", "Sumo", "Ssireum"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Cuántos mundiales de atletismo ha ganado Allyson Felix en postas + individuales?",
          "options": ["11", "13", "14", "16"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el primer oro olímpico en rugby 7 femenino (Río 2016)?",
          "options": ["Canadá", "Australia", "Nueva Zelanda", "Estados Unidos"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿En qué deporte se utiliza el ‘Third-man rule’?",
          "options": ["Cricket", "Rugby league", "Hockey sobre hielo", "Australian Rules"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué nadador fue el primero en ganar 8 medallas de oro en una sola Olimpiada?",
          "options": ["Mark Spitz", "Michael Phelps", "Katie Ledecky", "Alexander Popov"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Cuál es la puntuación máxima teórica en una rutina de clavados de 10 m (6 clavados, grado 3,8)?",
          "options": ["480", "540", "600", "720"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país inventó el juego tradicional de ‘tejo’ declarado deporte nacional?",
          "options": ["Colombia", "Venezuela", "Ecuador", "Panamá"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué ajedrecista fue campeón mundial durante 27 años consecutivos?",
          "options": ["Emanuel Lasker", "Garry Kasparov", "Anatoly Karpov", "Mikhail Botvinnik"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿En qué año se introdujo el video-arbitraje (VAR) en la Copa Mundial de la FIFA?",
          "options": ["2014", "2018", "2022", "2010"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué velocidad máxima registrada tiene un saque de bádminton (km/h)?",
          "options": ["332", "408", "493", "565"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el oro en patinaje de velocidad por equipos femenino en Pekín 2022?",
          "options": ["Países Bajos", "Canadá", "Japón", "Estados Unidos"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Cuántos ‘perfect games’ ha lanzado en MLB un mismo pitcher (máximo histórico)?",
          "options": ["1", "2", "3", "4"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué juego tradicional africano se conoce como ‘bao’ y pertenece a la familia mancala?",
          "options": ["Oware", "Bao", "Kalah", "Songo"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó la primera medalla de oro olímpica en skateboarding (Tokio 2020)?",
          "options": ["Estados Unidos", "Brasil", "Japón", "Australia"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Cuántos mundiales de squash ha ganado Jahangir Khan consecutivamente?",
          "options": ["6", "8", "10", "12"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿En qué deporte se utiliza la ‘regla de los 24 segundos’?",
          "options": ["Baloncesto", "Balonmano", "Waterpolo", "Snooker"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué velocidad media se alcanza en la prueba de keirin masculino (km/h)?",
          "options": ["60", "70", "80", "90"],
          "correct": 1
        }
      ],
    },

    // Arte y Cultura---------------------------------------------------------------------------------

    {
      id: "arte",
      name: "Arte y Cultura",
      icon: "🎨",
      questions: [
        {
          "difficulty": "easy",
          "question": "¿Quién pintó la Mona Lisa?",
          "options": ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué arquitectura es famosa por sus pirámides de Giza?",
          "options": ["Egipto", "Grecia", "Roma", "China"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué movimiento artístico siguió al Renacimiento?",
          "options": ["Barroco", "Impresionismo", "Surrealismo", "Romanticismo"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué instrumento típico japonés tiene 13 cuerdas?",
          "options": ["Shamisen", "Koto", "Taiko", "Shakuhachi"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Quién escribió 'Cien años de soledad'?",
          "options": ["Mario Vargas Llosa", "Pablo Neruda", "Gabriel García Márquez", "Isabel Allende"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué ciudad alberga el festival de cine más antiguo del mundo?",
          "options": ["Cannes", "Venecia", "Berlín", "Oscar"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué danza tradicional española incluye 'palmas'?",
          "options": ["Flamenco", "Sevillanas", "Jota", "Sardana"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué civilización construyó Machu Picchu?",
          "options": ["Azteca", "Maya", "Inca", "Tolteca"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película ganó el primer Oscar a Mejor Película?",
          "options": ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué símbolo representa la paz en la cultura hindú?",
          "options": ["Om", "Yin-yang", "Cruz", "Ankh"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país es famoso por el Carnaval de Río?",
          "options": ["Argentina", "Brasil", "Colombia", "Uruguay"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de arte es 'El Pensador' de Auguste Rodin?",
          "options": ["Pintura", "Escultura", "Arquitectura", "Grabado"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué género musical nació en Jamaica?",
          "options": ["Reggae", "Salsa", "Samba", "Calypso"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué autor griego escribió la 'Odisea'?",
          "options": ["Sófocles", "Homero", "Platón", "Aristóteles"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué ciudad es famosa por el muro de los lamentos?",
          "options": ["Jerusalén", "Roma", "Atenas", "El Cairo"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué instrumento típico escocés suena con bolsa de aire?",
          "options": ["Flauta", "Gaita", "Arpa", "Violín"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué estilo arquitectónico es la catedral de Notre-Dame?",
          "options": ["Gótico", "Románico", "Barroco", "Renacimiento"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de Disney está basada en Hamlet?",
          "options": ["Bambi", "El Rey León", "Frozen", "Moana"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país celebra el festival de Diwali?",
          "options": ["India", "Tailandia", "China", "Japón"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de arte son los 'tótems' de América del Norte?",
          "options": ["Textil", "Escultura", "Pintura mural", "Orfebrería"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué autor escribió 'Don Quijote de la Mancha'?",
          "options": ["Lope de Vega", "Cervantes", "Garcilaso", "Quevedo"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué movimiento artístico usaba puntos de color (Seurat)?",
          "options": ["Impresionismo", "Post-impresionismo", "Puntillismo", "Fauvismo"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué ciudad es famosa por la 'Feria del Libro'?",
          "options": ["Madrid", "Barcelona", "Buenos Aires", "Guadalajara"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué instrumento típico africano es un 'lamellófono'?",
          "options": ["Mbira", "Djembe", "Kora", "Balafón"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué civilización construyó la ciudad de Teotihuacán?",
          "options": ["Maya", "Tolteca", "Teotihuacana", "Azteca"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué director dirigió 'Titanic'?",
          "options": ["Steven Spielberg", "James Cameron", "George Lucas", "Ridley Scott"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de arte es el 'origami'?",
          "options": ["Papiroflexia", "Pintura", "Escultura", "Textil"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país es famoso por el 'K-pop'?",
          "options": ["Japón", "Corea del Sur", "China", "Tailandia"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué símbolo representa el infinito en matemáticas y arte?",
          "options": ["∞", "π", "φ", "α"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué autor escribió 'Romeo y Julieta'?",
          "options": ["Christopher Marlowe", "William Shakespeare", "Ben Jonson", "John Milton"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué arquitecto diseñó la Sagrada Familia?",
          "options": ["Antoni Gaudí", "Lluís Domènech", "Josep Puig", "César Pelli"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué movimiento artístico lideró André Breton?",
          "options": ["Dadaísmo", "Surrealismo", "Futurismo", "Constructivismo"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué compositor escribió 'Carmina Burana'?",
          "options": ["Carl Orff", "Richard Strauss", "Gustav Mahler", "Hans Zimmer"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué ciudad alberga el Museo del Prado?",
          "options": ["Barcelona", "Madrid", "Sevilla", "Valencia"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué escritora ganó el Nobel 2022?",
          "options": ["Annie Ernaux", "Louise Glück", "Peter Handke", "Olga Tokarczuk"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película ganó el Palma de Oro 2023?",
          "options": ["Anatomy of a Fall", "Triangle of Sadness", "Titane", "Parasitos"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de técnica es el 'sfumato' de Leonardo?",
          "options": ["Dibujo", "Pintura", "Escultura", "Grabado"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el teatro kabuki?",
          "options": ["China", "Corea", "Japón", "Vietnam"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué autor escribió 'Crimen y castigo'?",
          "options": ["Tolstói", "Dostoyevski", "Gógol", "Turguénev"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estilo musical mezcla jazz y rock con improvisación?",
          "options": ["Fusion", "Bebop", "Swing", "Cool jazz"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué arquitecto diseñó el Museo Guggenheim de Bilbao?",
          "options": ["Frank Gehry", "I. M. Pei", "Tadao Ando", "Zaha Hadid"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué civilización construyó Borobudur?",
          "options": ["Khmer", "Sailendra", "Srivijaya", "Majapahit"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué autor escribió 'Ficciones'?",
          "options": ["Julio Cortázar", "Jorge Luis Borges", "Adolfo Bioy", "Leopoldo Marechal"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de arte son los 'mandala' tibetanos?",
          "options": ["Pintura", "Arena ritual", "Textil", "Escultura"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Parásitos'?",
          "options": ["Park Chan-wook", "Bong Joon-ho", "Kim Ki-duk", "Lee Chang-dong"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el 'reggaetón'?",
          "options": ["Colombia", "Puerto Rico", "México", "República Dominicana"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué escritora escribió 'La casa de los espíritus'?",
          "options": ["Isabel Allende", "Elena Poniatowska", "Rosario Castellanos", "Laura Esquivel"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estilo arquitectónico es la Opera de Sídney?",
          "options": ["Expresionista", "Modernista", "Deconstructivista", "High-tech"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué compositor escribió el 'Bolero'?",
          "options": ["Debussy", "Ravel", "Satie", "Saint-Saëns"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué ciudad es famosa por el festival 'Oktoberfest'?",
          "options": ["Viena", "Múnich", "Berlín", "Salzburgo"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de arte es el 'ukiyo-e' japonés?",
          "options": ["Xilografía", "Pintura al óleo", "Talla en piedra", "Acuarela"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué autor escribió 'El extranjero'?",
          "options": ["Sartre", "Camus", "Beauvoir", "Malraux"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por los 'tango'?",
          "options": ["Uruguay", "Chile", "Argentina", "Brasil"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estilo musical es 'trap' en sus orígenes?",
          "options": ["Electrónica", "Hip-hop sureño", "Reggae", "Drum and bass"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué arquitecto diseñó la Torre Eiffel?",
          "options": ["Eiffel", "Gustave Eiffel", "Bartholdi", "Viollet-le-Duc"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué escritor ganó el Cervantes 2023?",
          "options": ["Luis Mateo Díez", "Luis Landero", "Javier Marías", "Luis García Montero"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de arte es 'El Grito' de Munch?",
          "options": ["Óleo", "Pastel", "Litografía", "Acuarela"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el 'Kathakali'?",
          "options": ["India", "Tailandia", "Indonesia", "Malasia"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Roma' (2018)?",
          "options": ["Iñárritu", "Cuarón", "Del Toro", "Lubezki"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estilo literario es 'realismo mágico'?",
          "options": ["Corriente latinoamericana", "Escuela rusa", "Vanguardia italiana", "Posmodernismo"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué instrumento típico árabe tiene 11 cuerdas dobles?",
          "options": ["Oud", "Qanun", "Buzuq", "Saz"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué ciudad es famosa por el 'Carnaval de Venecia'?",
          "options": ["Venecia", "Nápoles", "Florencia", "Verona"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué arquitecto diseñó el 'Fallingwater'?",
          "options": ["Wright", "Le Corbusier", "Mies", "Gropius"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué escultor creó 'La puerta del infierno'?",
          "options": ["Rodin", "Camille Claudel", "Bartholdi", "Maillol"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'Rayuela'?",
          "options": ["Cortázar", "Borges", "Sabato", "Onetti"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué compositor escribió 'Threnody for the Victims of Hiroshima'?",
          "options": ["Penderecki", "Ligeti", "Xenakis", "Stockhausen"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué ciudad alberga la Bienal de Arte más antigua (1895)?",
          "options": ["Venecia", "São Paulo", "Kassel", "Liverpool"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo arquitectónico es la Catedral de Brasilia?",
          "options": ["Bauhaus", "Brutalismo", "Modernismo brasileño", "Deconstructivista"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué pintor firmó solo con su apellido invertido?",
          "options": ["Magritte", "Munch", "Turner", "Monet"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué escritor ganó el Nobel 1958 y rechazó el premio?",
          "options": ["Pasternak", "Sartre", "Camus", "García Márquez"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrumento típico mongol produce armónicos?",
          "options": ["Morin khuur", "Tovshuur", "Khoomei", "Limbe"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Sátántangó' (7 h 12 min)?",
          "options": ["Tarr", "Jancsó", "Makavejev", "Szabó"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de arte es 'Land art'?",
          "options": ["Intervención en paisaje", "Óleo hiperrealista", "Collage urbano", "Fotografía"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa de la Música' en Porto?",
          "options": ["Rem Koolhaas", "Álvaro Siza", "Eduardo Souto", "Herzog"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'El hombre sin atributos'?",
          "options": ["Musil", "Broch", "Roth", "Doderer"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué civilización creó los 'Ife bronzes'?",
          "options": ["Yoruba", "Ashanti", "Dahomey", "Benín"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo musical es 'spectralism'?",
          "options": ["Electroacústica francesa", "Post-serialista", "Minimalista", "Aleatoria"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué pintor creó 'Las meninas' versión pop?",
          "options": ["Picasso", "Warhol", "Lichtenstein", "Hockney"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué escritora ganó el Booker 2019 y el Pulitzer 2020 por la misma obra?",
          "options": ["Bernardine Evaristo", "Margaret Atwood", "Colson Whitehead", "Hilary Mantel"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué ciudad alberga la Documenta 2027?",
          "options": ["Kassel", "Atenas", "Berlín", "Viena"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa Barragán'?",
          "options": ["Barragán", "Legorreta", "Goeritz", "Candela"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'Tralics'?",
          "options": ["Péter Esterházy", "Krasznahorkai", "Nádas", "Spiró"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrumento típico andino tiene 10 cuerdas dobles?",
          "options": ["Charango", "Ronroco", "Tiple", "Cuatro"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo cinematográfico es 'Dogma 95'?",
          "options": ["Von Trier", "Lars", "Danés", "Todos"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué pintor creó 'El escolar desnudo' (1955)?",
          "options": ["Bacon", "Freud", "Auerbach", "Kossoff"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió '2666'?",
          "options": ["Bolaño", "Piglia", "Aira", "Volok"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa de Vidrio' en Londres?",
          "options": ["Fry", "Lubetkin", "Prix", "Chipperfield"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de arte es 'Arte Povera'?",
          "options": ["Italiano 60s", "Alemán 80s", "Japonés 50s", "Francés 70s"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor ganó el Cervantes 2024?",
          "options": ["Luis Landero", "Almudena Grandes", "Javier Cercas", "Luis Mateo Díez"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrumento típico polinesio es de cuerda pulsada?",
          "options": ["Ukulele", "Pahu", "Ipu", "Kundu"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo literario es 'nouveau roman'?",
          "options": ["Francés 50s", "Alemán 60s", "Italiano 70s", "Español 80s"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'El ángel exterminador'?",
          "options": ["Buñuel", "Almodóvar", "Saura", "Erice"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa Milà'?",
          "options": ["Gaudí", "Puig", "Domènech", "Jujol"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'Los siete locos'?",
          "options": ["Roberto Arlt", "Borges", "Cortázar", "Mallea"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de arte es 'Bioarte'?",
          "options": ["Biología + arte", "Performance", "Robótica", "NFT"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrumento típico siberiano es de arco y crin?",
          "options": ["Morin khuur", "Topshuur", "Byzaanchy", "Chanzy"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo cinematográfico es 'Slow cinema'?",
          "options": ["Tarkovski", "Tarr", "Tsai", "Todos"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'La guerra del fin del mundo'?",
          "options": ["Vargas Llosa", "Bryce", "Fuentes", "Paz"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa de la Cascada'?",
          "options": ["Wright", "Neutra", "Lautner", "Schindler"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de arte es 'Guerrilla Girls'?",
          "options": ["Activismo", "Performance", "Instalación", "Todos"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrumento típico mapuche es de trompeta?",
          "options": ["Trutruca", "Kultrún", "Pifilka", "Ñorquin"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué autor escribió 'La invención de Morel'?",
          "options": ["Bioy", "Borges", "Arlt", "Mujica"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué arquitecto diseñó la 'Casa Vicens'?",
          "options": ["Gaudí", "Puig", "Domènech", "Jujol"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué estilo literario es 'hiperrealismo'?",
          "options": ["Posmoderno", "Romántico", "Barroco", "Clásico"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Sátántangó'?",
          "options": ["Tarr", "Jancsó", "Makavejev", "Szabó"],
          "correct": 0
        }
      ],
    },

    // Entretenimiento------------------------------------------------------------------------------------

    {
      id: "entretenimiento",
      name: "Entretenimiento",
      icon: "🎬",
      questions: [
        {
          "difficulty": "easy",
          "question": "¿Quiénes son considerados los padres del cine por su primera proyección pública en 1895?",
          "options": ["Thomas Edison y William Kennedy", "Auguste y Louis Lumière", "George Méliès y Charles Pathé", "D. W. Griffith y Mack Sennett"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿En qué año se estrenó la primera película sonora, 'The Jazz Singer'?",
          "options": ["1925", "1927", "1929", "1931"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de Disney fue la primera en color de la historia?",
          "options": ["Snow White", "Fantasia", "Pinocchio", "Cinderella"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Quién interpretó a Forrest Gump en la película homónima?",
          "options": ["Tom Cruise", "Tom Hanks", "Robin Williams", "Kevin Costner"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Cuál fue la primera película en superar los mil millones de dólares en taquilla?",
          "options": ["Titanic", "Avatar", "The Avengers", "Star Wars: Episodio I"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país es el origen del cine Bollywood?",
          "options": ["Pakistán", "India", "Bangladés", "Sri Lanka"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué personaje dice la frase 'May the Force be with you'?",
          "options": ["Obi-Wan Kenobi", "Han Solo", "Yoda", "Luke Skywalker"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película ganó el Óscar a Mejor Película en 1998?",
          "options": ["Titanic", "Shakespeare in Love", "Saving Private Ryan", "The English Patient"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué género populariza 'The Blair Witch Project'?",
          "options": ["Slasher", "Found footage", "Psychological horror", "Gothic horror"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué estudio animó 'Toy Story' (1995)?",
          "options": ["DreamWorks", "Pixar", "Blue Sky", "Sony Pictures"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Quién dirigió 'Titanic'?",
          "options": ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Robert Zemeckis"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué superhéroe dijo 'I am Iron Man'?",
          "options": ["Tony Stark", "Steve Rogers", "Bruce Banner", "Peter Parker"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿En qué película aparece el personaje Jack Sparrow por primera vez?",
          "options": ["Pirates of the Caribbean: The Curse of the Black Pearl", "Dead Man's Chest", "At World's End", "On Stranger Tides"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película animada japonesa ganó el Óscar en 2003?",
          "options": ["Spirited Away", "Princess Mononoke", "Howl's Moving Castle", "My Neighbor Totoro"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país es famoso por el cine de autor de Pedro Almodóvar?",
          "options": ["México", "España", "Argentina", "Chile"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué frase dice Darth Vader a Luke Skywalker revelando su parentesco?",
          "options": ["I am your father", "Join me", "The Force is strong", "You are my son"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de Marvel inició el Universo Cinematográfico Marvel (MCU)?",
          "options": ["Iron Man", "The Incredible Hulk", "Thor", "Captain America"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué género populariza 'The Godfather'?",
          "options": ["Gangster", "Noir", "Thriller", "Drama policial"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué actriz interpretó a Marilyn Monroe en 'Blonde' (2022)?",
          "options": ["Margot Robbie", "Ana de Armas", "Scarlett Johansson", "Emma Stone"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de Disney incluye la canción 'Let It Go'?",
          "options": ["Tangled", "Frozen", "Moana", "Brave"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué festival de cine se celebra en Cannes?",
          "options": ["Festival de Cannes", "Berlinale", "Venecia", "Sundance"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué actor interpretó al Joker en 'The Dark Knight'?",
          "options": ["Joaquin Phoenix", "Heath Ledger", "Jared Leto", "Jack Nicholson"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película animada fue la primera en ser nominada al Óscar a Mejor Película?",
          "options": ["Beauty and the Beast", "The Lion King", "Toy Story", "Shrek"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país produce más películas al año que Hollywood?",
          "options": ["China", "India", "Nigeria", "Corea del Sur"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué frase dice el robot WALL·E repetidamente?",
          "options": ["EVE", "Home", "WALL·E", "Hello"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de ciencia ficción popularizó el término 'Matrix'?",
          "options": ["Blade Runner", "The Matrix", "Minority Report", "Ghost in the Shell"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué estudio japonés produjo 'Spirited Away'?",
          "options": ["Toei", "Studio Ghibli", "Madhouse", "Gainax"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué actor ha interpretado a James Bond más veces?",
          "options": ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué película de superhéroes fue la primera en ser nominada al Óscar a Mejor Película?",
          "options": ["Black Panther", "The Dark Knight", "Joker", "Logan"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué país es famoso por el cine de 'giallo'?",
          "options": ["Francia", "Italia", "España", "Alemania"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué técnica introdujo Georges Méliès en el cine?",
          "options": ["Stop-motion", "Trucaje y efectos especiales", "Sonido sincronizado", "Cinemascope"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película ganó el Palma de Oro en 2023?",
          "options": ["Anatomy of a Fall", "Triangle of Sadness", "Titane", "The Zone of Interest"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Rashomon'?",
          "options": ["Yasujirō Ozu", "Akira Kurosawa", "Kenji Mizoguchi", "Mikio Naruse"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2023?",
          "options": ["Argentina", "Alemania", "Corea del Sur", "España"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de culto dirigió David Lynch en 1977?",
          "options": ["Blue Velvet", "Eraserhead", "Mulholland Drive", "Lost Highway"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actriz ganó el Óscar por 'La La Land'?",
          "options": ["Emma Stone", "Emma Watson", "Natalie Portman", "Jennifer Lawrence"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película marcó el debut de Quentin Tarantino como director?",
          "options": ["Reservoir Dogs", "Pulp Fiction", "True Romance", "Natural Born Killers"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el cine neorrealista?",
          "options": ["Francia", "Italia", "Alemania", "España"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de Marvel fue la primera en pasar los 2 mil millones?",
          "options": ["The Avengers", "Avengers: Infinity War", "Avengers: Endgame", "Spider-Man: No Way Home"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Parasite'?",
          "options": ["Park Chan-wook", "Bong Joon-ho", "Kim Ki-duk", "Lee Chang-dong"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película ganó el Óscar a Mejor Película en 2020?",
          "options": ["1917", "Parasite", "Joker", "Once Upon a Time in Hollywood"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué técnica de iluminación se atribuye a Gregg Toland en 'Citizen Kane'?",
          "options": ["High-key", "Low-key", "Deep focus", "Chiaroscuro"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actor interpretó a The Dude en 'The Big Lebowski'?",
          "options": ["John Goodman", "Steve Buscemi", "Jeff Bridges", "John Turturro"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de Studio Ghibli está basada en un cuento de Diana Wynne Jones?",
          "options": ["Howl's Moving Castle", "Spirited Away", "Princess Mononoke", "Kiki's Delivery Service"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó el Ariel a Mejor Película en 2023?",
          "options": ["México", "Argentina", "Colombia", "Chile"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué género populariza 'The Blair Witch Project'?",
          "options": ["Found footage", "Slasher", "Psychological horror", "Gothic horror"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Pan's Labyrinth'?",
          "options": ["Alfonso Cuarón", "Guillermo del Toro", "Alejandro González Iñárritu", "Carlos Reygadas"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de culto dirigida por Richard Kelly trata de viajes en el tiempo?",
          "options": ["Primer", "Donnie Darko", "Looper", "Source Code"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actriz interpretó a Imperator Furiosa en 'Mad Max: Fury Road'?",
          "options": ["Margot Robbie", "Charlize Theron", "Emily Blunt", "Zoe Saldaña"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el cine de 'Nuevo Hollywood'?",
          "options": ["Estados Unidos", "Francia", "Italia", "Reino Unido"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de Christopher Nolan utiliza el concepto de 'inversión temporal'?",
          "options": ["Inception", "Interstellar", "Tenet", "Memento"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actor ganó el Óscar por 'The Revenant'?",
          "options": ["Brad Pitt", "Leonardo DiCaprio", "Matthew McConaughey", "Christian Bale"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película animada japonesa fue nominada al Óscar en 2023?",
          "options": ["The Boy and the Heron", "Suzume", "Belle", "Your Name"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'The Grand Budapest Hotel'?",
          "options": ["Wes Anderson", "Taika Waititi", "Noah Baumbach", "Spike Jonze"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de Marvel fue la primera en tener una escena post-créditos?",
          "options": ["Iron Man", "The Incredible Hulk", "Thor", "Captain America"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el cine de 'Nuevo Realismo'?",
          "options": ["Italia", "Francia", "España", "Alemania"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actriz interpretó a Marge Gunderson en 'Fargo'?",
          "options": ["Julianne Moore", "Frances McDormand", "Laura Dern", "Holly Hunter"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de culto dirigida por David Fincher trata sobre el club de la pelea?",
          "options": ["Se7en", "Fight Club", "Zodiac", "The Social Network"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2022?",
          "options": ["Japan", "Denmark", "Iran", "Norway"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué director dirigió 'Moonlight'?",
          "options": ["Barry Jenkins", "Steve McQueen", "Jordan Peele", "Ryan Coogler"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué película de Studio Ghibli fue nominada al Óscar en 2014?",
          "options": ["The Wind Rises", "When Marnie Was There", "The Tale of the Princess Kaguya", "From Up on Poppy Hill"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué actor interpretó a Jordan Belfort en 'The Wolf of Wall Street'?",
          "options": ["Brad Pitt", "Leonardo DiCaprio", "Christian Bale", "Matt Damon"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué país es famoso por el cine de 'slow cinema'?",
          "options": ["Hungary", "Iran", "Russia", "All of the above"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de montaje introdujo Lev Kuleshov en la URSS?",
          "options": ["Kuleshov Effect", "Match cut", "Jump cut", "Cross cutting"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Yasujirō Ozu termina con la imagen de una ola?",
          "options": ["Tokyo Story", "An Autumn Afternoon", "Floating Weeds", "The End of Summer"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Sátántangó' (7 horas 12 min)?",
          "options": ["Béla Tarr", "Miklós Jancsó", "István Szabó", "Zoltán Fábri"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película ganó la Palma de Oro en 2022?",
          "options": ["Triangle of Sadness", "Titane", "Parasite", "Anatomy of a Fall"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué actor interpretó a Travis Bickle en 'Taxi Driver'?",
          "options": ["Al Pacino", "Robert De Niro", "Harvey Keitel", "Christopher Walken"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Andrei Tarkovsky fue rodada durante 7 años?",
          "options": ["Stalker", "Mirror", "Nostalghia", "The Sacrifice"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2021?",
          "options": ["Denmark", "Iran", "Norway", "Japan"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Persona'?",
          "options": ["Ingmar Bergman", "Carl Theodor Dreyer", "Victor Sjöström", "Lars von Trier"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de culto dirigida por Alejandro Jodorowsky es de 1973?",
          "options": ["El Topo", "The Holy Mountain", "Santa Sangre", "Fando y Lis"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de iluminación se atribuye a Gregg Toland en 'Citizen Kane'?",
          "options": ["Deep focus", "High-key", "Low-key", "Chiaroscuro"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Wong Kar-wai está filmada en cámara lenta y posee un estilo visual muy estilizado?",
          "options": ["In the Mood for Love", "Chungking Express", "2046", "Fallen Angels"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Act of Killing'?",
          "options": ["Joshua Oppenheimer", "Werner Herzog", "Errol Morris", "Claude Lanzmann"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Michelangelo Antonioni termina con el zoom infinito a una isla?",
          "options": ["L'Avventura", "La Notte", "L'Eclisse", "The Passenger"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2020?",
          "options": ["South Korea", "Spain", "Poland", "France"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Mirror'?",
          "options": ["Andrei Tarkovsky", "Sergei Parajanov", "Aleksandr Sokurov", "Elem Klimov"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de culto dirigida by David Lynch es de 1977?",
          "options": ["Eraserhead", "Blue Velvet", "Mulholland Drive", "Inland Empire"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de montaje popularizó Sergei Eisenstein en 'Battleship Potemkin'?",
          "options": ["Montage of attractions", "Match cut", "Jump cut", "Cross cutting"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Béla Tarr dura 450 minutos y tiene 39 planos secuencia?",
          "options": ["Sátántangó", "Werckmeister Harmonies", "The Turin Horse", "Damnation"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Close-up'?",
          "options": ["Abbas Kiarostami", "Asghar Farhadi", "Mohsen Makhmalbaf", "Jafar Panahi"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Tsai Ming-liang tiene solo 14 planos fijos?",
          "options": ["Stray Dogs", "Goodbye, Dragon Inn", "The Wayward Cloud", "What Time Is It There?"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2019?",
          "options": ["Mexico", "Japan", "Poland", "South Korea"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Spirit of the Beehive'?",
          "options": ["Víctor Erice", "Carlos Saura", "Luis Buñuel", "Fernando Trueba"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Apichatpong Weerasethakul ganó la Palma de Oro en 2010?",
          "options": ["Uncle Boonmee Who Can Recall His Past Lives", "Tropical Malady", "Syndromes and a Century", "Cemetery of Splendour"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de cámara popularizó Emmanuel Lubezki en 'Birdman'?",
          "options": ["Single-take illusion", "360-degree shot", "Dolly zoom", "Steadicam"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Color of Pomegranates'?",
          "options": ["Sergei Parajanov", "Tarkovsky", "Sokurov", "Klimov"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Chantal Akerman dura 3 horas y 20 minutos en una cocina?",
          "options": ["Jeanne Dielman", "News from Home", "Les Rendez-vous d'Anna", "No Home Movie"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2018?",
          "options": ["Chile", "Lebanon", "Sweden", "Russia"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The House Is Black'?",
          "options": ["Forugh Farrokhzad", "Kiarostami", "Makhmalbaf", "Panahi"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Hou Hsiao-hsien ganó la Palma de Oro en 2015?",
          "options": ["The Assassin", "Three Times", "Flight of the Red Balloon", "Millennium Mambo"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de sonido popularizó 'Dolby Atmos' en cine?",
          "options": ["Object-based audio", "Stereo", "5.1", "Mono"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'Werckmeister Harmonies'?",
          "options": ["Béla Tarr", "Jancsó", "Szabó", "Márta Mészáros"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Lav Diaz dura 4 horas y 10 minutos y tiene 14 planos?",
          "options": ["Death in the Land of Encantos", "Melancholia", "Heremias", "Evolution of a Filipino Family"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué país ganó el Óscar a Mejor Película Internacional en 2017?",
          "options": ["Iran", "Sweden", "Germany", "Chile"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Turin Horse'?",
          "options": ["Béla Tarr", "Jancsó", "Szabó", "Klimov"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué película de Carlos Reygadas ganó la Palma de Oro en 2012?",
          "options": ["Post Tenebras Lux", "Silent Light", "Battle in Heaven", "Our Time"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica de proyección popularizó 'IMAX'?",
          "options": ["70 mm", "35 mm", "Digital 4K", "16 mm"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué director dirigió 'The Mirror' y 'Stalker'?",
          "options": ["Tarkovsky", "Parajanov", "Sokurov", "Klimov"],
          "correct": 0
        }
      ],
    },

    // Tecnología---------------------------------------------------------------------------------------

    {
      id: "tecnologia",
      name: "Tecnología",
      icon: "💻",
      questions: [
        {
          "difficulty": "easy",
          "question": "¿Qué componente de la computadora se conoce como el 'cerebro' del sistema?",
          "options": ["RAM", "CPU", "Disco duro", "GPU"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Cuántos bits hay en un byte?",
          "options": ["4", "8", "16", "32"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué significa la sigla 'RAM'?",
          "options": ["Random Access Memory", "Read And Manage", "Random Archive Memory", "Read Access Manager"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué unidad mide la frecuencia de la CPU?",
          "options": ["Mbps", "GHz", "GB", "ms"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué sistema operativo es desarrollado por Microsoft?",
          "options": ["macOS", "Linux", "Windows", "Android"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué protocolo se usa para navegar páginas web de forma segura?",
          "options": ["HTTP", "FTP", "HTTPS", "TCP"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué lenguaje se utiliza principalmente para estructurar páginas web?",
          "options": ["Python", "HTML", "Java", "C++"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué dispositivo convierte señal digital a sonido en una PC?",
          "options": ["GPU", "Tarjeta de sonido", "NIC", "Router"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de memoria es volátil?",
          "options": ["SSD", "RAM", "HDD", "DVD"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué sigla significa 'World Wide Web'?",
          "options": ["WWW", "W3", "Web", "Todas son válidas"],
          "correct": 3
        },
        {
          "difficulty": "easy",
          "question": "¿Qué empresa desarrolló Android?",
          "options": ["Apple", "Microsoft", "Google", "Samsung"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de archivo suele terminar en '.jpg'?",
          "options": ["Video", "Imagen", "Audio", "Texto"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué periférico se usa para imprimir documentos?",
          "options": ["Scanner", "Plotter", "Impresora", "Proyector"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué red inalámbrica de corto alcance usan los auriculares?",
          "options": ["Wi-Fi", "NFC", "Bluetooth", "5G"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué significa 'CPU'?",
          "options": ["Central Processing Unit", "Computer Power Unit", "Central Power Unit", "Core Processing Unit"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué lenguaje se usa para dar estilo a páginas web?",
          "options": ["CSS", "HTML", "PHP", "SQL"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué dispositivo almacena datos en chips flash sin partes móviles?",
          "options": ["HDD", "SSD", "DVD", "Cinta"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué protocolo permite enviar correos electrónicos?",
          "options": ["HTTP", "FTP", "SMTP", "TCP"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tecla se usa para pegar en Windows?",
          "options": ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+P"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué significa 'IoT'?",
          "options": ["Internet of Things", "Information of Technology", "Input/Output Tool", "Internal Operating Tool"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué empresa creó el iPhone?",
          "options": ["Samsung", "Apple", "Google", "Microsoft"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de malware cifra tus archivos y pide rescate?",
          "options": ["Virus", "Troyano", "Ransomware", "Spyware"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué unidad mide la velocidad de internet?",
          "options": ["GHz", "Mbps", "GB", "ms"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué herramienta se usa para cortar y pegar fragmentos de imagen?",
          "options": ["Calculadora", "Editor de imágenes", "Bloc de notas", "Reproductor"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué significa 'GPU'?",
          "options": ["General Processing Unit", "Graphics Processing Unit", "General Power Unit", "Graphics Power Unit"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de red cubre un edificio o campus?",
          "options": ["WAN", "LAN", "MAN", "PAN"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué lenguaje usa la etiqueta <div>?",
          "options": ["Python", "HTML", "CSS", "JavaScript"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué dispositivo traduce nombres de dominio a IP?",
          "options": ["Router", "DNS", "Switch", "Hub"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué versión de IP tiene 128 bits?",
          "options": ["IPv2", "IPv4", "IPv6", "IPv8"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué significa 'PDF'?",
          "options": ["Pretty Document Format", "Portable Document Format", "Public Document File", "Printable Document File"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué periférico se usa para introducir dibujos físicos al PC?",
          "options": ["Impresora", "Scanner", "Plotter", "Webcam"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de algoritmo es el 'ordenamiento burbuja'?",
          "options": ["Búsqueda", "Ordenamiento", "Compresión", "Encriptación"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué empresa desarrolló Windows?",
          "options": ["Apple", "Microsoft", "Google", "IBM"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué arquitectura de computadora separa programa y datos en la misma memoria?",
          "options": ["Harvard", "Von Neumann", "RISC", "CISC"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué paradigma usa funciones puras y evita estados mutables?",
          "options": ["Orientado a objetos", "Funcional", "Procedural", "Lógico"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué protocolo usa el puerto 443 por defecto?",
          "options": ["HTTP", "HTTPS", "FTP", "SSH"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de red cubre una ciudad entera?",
          "options": ["LAN", "MAN", "WAN", "PAN"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué unidad mide la latencia de red?",
          "options": ["Mbps", "GHz", "ms", "GB"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué lenguaje se ejecuta solo en el navegador del cliente?",
          "options": ["PHP", "Python", "JavaScript", "SQL"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué modelo de nube ofrece solo aplicaciones a través de internet?",
          "options": ["IaaS", "PaaS", "SaaS", "FaaS"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de ataque sobrecarga un servidor con muchas peticiones?",
          "options": ["Phishing", "DDoS", "SQLi", "XSS"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué técnica divide un disco en varias áreas lógicas?",
          "options": ["Formateo", "Particionado", "Defrag", "Compresión"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de memoria se borra al apagar Raspberry Pi?",
          "options": ["SD", "RAM", "EEPROM", "Flash"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué capa del modelo OSI maneja rutas entre redes?",
          "options": ["Transporte", "Red", "Enlace", "Sesión"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué comando de Linux lista archivos?",
          "options": ["dir", "ls", "list", "show"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de cifrado usa la misma clave para cifrar y descifrar?",
          "options": ["Asimétrico", "Simétrico", "Hash", "Salado"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué herramienta contiene 'git commit'?",
          "options": ["Git", "Docker", "Jenkins", "Kubernetes"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de red neuronal es buena para imágenes?",
          "options": ["RNN", "CNN", "MLP", "SVM"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tecnología permite ejecutar funciones sin servidor dedicado?",
          "options": ["IaaS", "PaaS", "Serverless", "Bare-metal"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estándar Wi-Fi usa la banda de 5 GHz y alcanza 9.6 Gb/s?",
          "options": ["Wi-Fi 5", "Wi-Fi 6", "Wi-Fi 4", "Bluetooth 5"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué instrucción de Python devuelve un iterable de números?",
          "options": ["range()", "list()", "iter()", "next()"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué archivo de Docker describe la imagen?",
          "options": ["docker.yml", "Dockerfile", "container.json", "image.txt"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de malware se replica solo sin anfitrión?",
          "options": ["Gusano", "Virus", "Troyano", "Spyware"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué protocolo envía correos sin cifrar?",
          "options": ["SMTPS", "IMAPS", "SMTP", "POP3S"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué capa OSI ofrece fiabilidad con ACK y retransmisión?",
          "options": ["Red", "Transporte", "Enlace", "Física"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de base de datos es MongoDB?",
          "options": ["Relacional", "NoSQL", "Grafo", "Clave-valor"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué herramienta orquesta contenedores en producción?",
          "options": ["Docker Compose", "Kubernetes", "Vagrant", "VirtualBox"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de ataque inyecta código JavaScript en una web?",
          "options": ["SQLi", "XSS", "CSRF", "DoS"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué componente convierte código fuente a código máquina?",
          "options": ["Intérprete", "Compilador", "Linker", "Loader"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué ley dice que el número de transistores se duplica cada dos años?",
          "options": ["Metcalfe", "Moore", "Amdahl", "Brooks"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de GPU integrada usa Apple Silicon?",
          "options": ["Radeon", "Mali", "Apple GPU", "NVIDIA"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué estándar permite 4K a 120 Hz en HDMI?",
          "options": ["HDMI 1.4", "HDMI 2.0", "HDMI 2.1", "DisplayPort 1.2"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de aprendizaje no necesita etiquetas?",
          "options": ["Supervisado", "No supervisado", "Reforzado", "Semi-supervisado"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué servicio AWS ofrece almacenamiento de objetos?",
          "options": ["EC2", "S3", "RDS", "Lambda"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué comando compila un programa C con gcc?",
          "options": ["gcc -o prog prog.c", "make prog", "build prog.c", "compile prog"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de ataque aprovecha la ejecución especulativa en CPUs?",
          "options": ["Spectre", "Buffer overflow", "DDoS", "Phishing"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de red neuronal usa LSTM para olvidar información?",
          "options": ["CNN", "RNN", "GAN", "Transformer"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica criptográfica usa curvas elípticas?",
          "options": ["RSA", "ECC", "DSA", "DH"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué capa de Kubernetes gestiona despliegues y réplicas?",
          "options": ["kube-proxy", "etcd", "Controller Manager", "Scheduler"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de consistencia ofrece eventualmente DynamoDB?",
          "options": ["Strong", "Eventual", "Linearizable", "Serializable"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrucción x86 implementa barrera de memoria completa?",
          "options": ["NOP", "MFENCE", "CPUID", "HLT"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué algoritmo consenso usa Bitcoin?",
          "options": ["PoS", "PoW", "DPoS", "PBFT"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de qubit usa superconductores y Josephson junctions?",
          "options": ["Ion atrapado", "Spin nuclear", "Superconducting", "Fotónico"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica reduce el modelo tras entrenamiento (BERT → DistilBERT)?",
          "options": ["Pruning", "Quantization", "Knowledge distillation", "Low-rank factorization"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de ataque intercambia dos transacciones en mempool?",
          "options": ["51 %", "Double-spending", "Race attack", "Selfish mining"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué métrica mide tokens de salida por segundo en LLM?",
          "options": ["FLOPS", "TPS", "Latency", "Throughput"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica permite firmas agregadas en Bitcoin (BIP 340)?",
          "options": ["Schnorr", "ECDSA", "RSA", "BLS"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de ataque usa canal lateral de caché L1?",
          "options": ["Rowhammer", "Prime+Probe", "Meltdown", "Spectre"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué consistencia ofrece Raft frente a Paxos?",
          "options": ["Eventual", "Linearizable", "Causal", "Sequential"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica cuántica usa teleportación para corregir errores?",
          "options": ["Surface code", "Shor code", "Steane code", "Teleportation-based QC"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de red neuronal usa atención cruzada en Transformers?",
          "options": ["CNN", "RNN", "Self-attention", "Autoencoder"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué instrucción RISC-V implementa fence de memoria?",
          "options": ["fence", "mfence", "sync", "barrier"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de rollup publica datos en L1 Ethereum?",
          "options": ["Optimistic", "ZK", "Validium", "Plasma"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué métrica evalúa tokens mal predichos en LLM?",
          "options": ["BLEU", "ROUGE", "Perplexity", "F1"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica reduce precisión de pesos de 32 a 8 bits?",
          "options": ["Pruning", "Quantization", "Distillation", "Sparsification"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de ataque usa fallos de página para inferir claves?",
          "options": ["Rowhammer", "Page-fault", "Cache-timing", "Spectre"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué algoritmo consenso usa Tendermint?",
          "options": ["PBFT", "PoS", "DPoS", "BFT"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica cuántica usa 'superdense coding'?",
          "options": ["Teleportation", "Entanglement", "QEC", "Shor"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de prueba verifica conocimiento sin revelar información?",
          "options": ["PoW", "PoS", "ZK-SNARK", "BLS"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué métrica mide qubits lógicos frente a físicos?",
          "options": ["Fidelity", "Error rate", "Overhead ratio", "T1 time"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica permite ejecutar contratos privados en Ethereum?",
          "options": ["zk-EVM", "Optimistic", "Plasma", "State channels"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de ataque utiliza 'branch shadowing' en CPUs?",
          "options": ["Spectre v2", "Meltdown", "Foreshadow", "ZombieLoad"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué consistencia ofrece Calvin frente a Raft?",
          "options": ["Eventual", "Linearizable", "Sequential", "Causal"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué técnica cuántica usa 'surface code' para 1 000 qubits físicos → 1 lógico?",
          "options": ["QEC", "Teleportation", "Entanglement", "Superdense"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de rollup usa pruebas de fraude en lugar de validez?",
          "options": ["ZK", "Optimistic", "Validium", "Plasma"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué métrica evalúa eficiencia energética de supercomputadoras?",
          "options": ["FLOPS", "Green500", "TOP500", "TPS"],
          "correct": 1
        }
      ],
    },

    // Naturaleza---------------------------------------------------------------------------------------

    {
      id: "naturaleza",
      name: "Naturaleza",
      icon: "🌿",
      questions: [
        {
          "difficulty": "easy",
          "question": "¿Qué órgano de la planta realiza la fotosíntesis?",
          "options": ["Raíz", "Tallo", "Hoja", "Flor"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué gas liberan las plantas durante la fotosíntesis?",
          "options": ["Dióxido de carbono", "Oxígeno", "Nitrógeno", "Hidrógeno"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué parte de la flor contiene los óvulos?",
          "options": ["Estambre", "Pistilo", "Pétalo", "Sépalo"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué grupo de plantas produce flores y frutos?",
          "options": ["Gimnospermas", "Angiospermas", "Pteridofitas", "Briofitas"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué proceso pierden agua las plantas por las hojas?",
          "options": ["Fotosíntesis", "Transpiración", "Respiración", "Germinación"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta carnívora tiene trampas en forma de jarra?",
          "options": ["Drosera", "Dionaea", "Nepenthes", "Utricularia"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué adaptación tienen las cactáceas para almacenar agua?",
          "options": ["Hojas anchas", "Tallo suculento", "Raíz corta", "Flor grande"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de reproducción usan las esporas?",
          "options": ["Sexual", "Asexual", "Partenogenesis", "Clonación"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué polinizador típico visita las flores de lavanda?",
          "options": ["Colibrí", "Abeja", "Murciélago", "Viento"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta es fuente natural de aspirina?",
          "options": ["Digital", "Salix (sauce)", "Belladona", "Eucalipto"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué gas utilizan las plantas en la respiración celular?",
          "options": ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Metano"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué fruto tiene semillas en el exterior?",
          "options": ["Manzana", "Fresa", "Plátano", "Naranja"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué horizonte del suelo es rico en materia orgánica?",
          "options": ["A", "B", "C", "R"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué bioma alberga la mayor biodiversidad vegetal?",
          "options": ["Tundra", "Desierto", "Selva tropical", "Taiga"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta flota en lagos y es considerada maleza invasora?",
          "options": ["Loto", "Jacinto de agua", "Nenúfar", "Alga"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué pigmento da color verde a las hojas?",
          "options": ["Caroteno", "Clorofila", "Xantofila", "Antocianina"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué órgano absorbe agua y minerales en la planta?",
          "options": ["Hoja", "Tallo", "Raíz", "Flor"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de planta vive sobre otra sin parasitarla?",
          "options": ["Parasita", "Epífita", "Carnívora", "Halófita"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué sustancia forman los tubos de las equisetáceas?",
          "options": ["Celulosa", "Lignina", "Sílice", "Pectina"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué proceso convierte N₂ atmosférico en amonio usable por plantas?",
          "options": ["Nitrificación", "Fijación biológica", "Desnitrificación", "Amonificación"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta produce algodón comercial?",
          "options": ["Gossypium", "Linum", "Cannabis", "Corchorus"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Quo órgano de la célula vegetal almacena cloroplastos?",
          "options": ["Mitocondria", "Cloroplasto", "Vacuola", "Núcleo"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de fruto es el tomate botánicamente?",
          "options": ["Baya", "Drupa", "Capsula", "Aquenio"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta es un cactus columnar del desierto de Sonora?",
          "options": ["Saguaro", "Opuntia", "Peyote", "Barrel"],
          "correct": 0
        },
        {
          "difficulty": "easy",
          "question": "¿Qué hongo forma micorriza con raíces de árboles?",
          "options": ["Bacteria", "Hongo", "Alga", "Liquen"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué planta marina produce oxígeno y forma praderas submarinas?",
          "options": ["Alga roja", "Posidonia", "Kelpy", "Sargazo"],
          "correct": 1
        },
        {
          "difficulty": "easy",
          "question": "¿Qué color suelen tener las hojas en otoño por los carotenoides?",
          "options": ["Rojo", "Verde", "Amarillo", "Azul"],
          "correct": 2
        },
        {
          "difficulty": "easy",
          "question": "¿Qué tipo de semilla necesita estratificación fría para germinar?",
          "options": ["Cactus", "Conífera", "Manzana", "Hierba"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de fotosíntesis usan las plantas de clima seco para evitar pérdida de agua?",
          "options": ["C3", "C4", "CAM", "C2"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué phytohormona regula la caída de hojas?",
          "options": ["Auxina", "Giberelina", "Abscísico", "Citoquinina"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de célula vegetal tiene paredes lignificadas y muerte programada?",
          "options": ["Parénquima", "Colénquima", "Esfénquima", "Xilema"],
          "correct": 3
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta produce ricina, un potente veneno?",
          "options": ["Ricinus", "Digital", "Atropa", "Conium"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué órgano forman los nódulos en leguminosas?",
          "options": ["Raíz", "Tallo", "Hoja", "Flor"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué grupo de plantas carece de sistema vascular?",
          "options": ["Pteridofitas", "Angiospermas", "Briofitas", "Gimnospermas"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de polinización realizan los quirópteros?",
          "options": ["Anemofilia", "Entomofilia", "Quirópterofilia", "Ornitofilia"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué compuesto da olor característico a la tierra tras llover?",
          "options": ["Geosmina", "Clorofila", "Etileno", "Metano"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de fruto es la nuez botánicamente?",
          "options": ["Baya", "Drupa", "Capsula", "Aquenio"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Quo proceso abre los poros del estoma al aumentar luz?",
          "options": ["Apertura potásmica", "Cierre calcico", "Transpiración", "Fotosíntesis"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta endémica de Socorro está en peligro crítico?",
          "options": ["Arce", "Cedro", "Guayacán", "Síndrome de Socorro"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de fotosíntesis usan el maíz y la caña?",
          "options": ["C3", "C4", "CAM", "C2"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué enzima fija CO₂ en el ciclo de Calvin?",
          "options": ["Rubisco", "PEP-carboxilasa", "Nitrato-reductasa", "ATP-sintasa"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta produce capsaicina en sus frutos?",
          "options": ["Pimiento", "Tomate", "Berenjena", "Papa"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de raíz poseen las orquídeas epífitas?",
          "options": ["Pivotante", "Adventicia", "Aérea velamen", "Nodulada"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué órgano secretan las glándulas de néctar?",
          "options": ["Sépalo", "Pétalo", "Estambre", "Flor"],
          "correct": 3
        },
        {
          "difficulty": "medium",
          "question": "¿Qué grupo de plantas tiene semillas desnudas?",
          "options": ["Angiospermas", "Gimnospermas", "Pteridofitas", "Briofitas"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Quo tipo de simbiosis forman los micorrizas?",
          "options": ["Mutualismo", "Comensalismo", "Parasitismo", "Competencia"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta marina es endémica del Mediterráneo y forma praderas?",
          "options": ["Posidonia oceanica", "Zostera", "Cymodocea", "Thalassia"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de célula vegetal realiza la fotosíntesis?",
          "options": ["Epidermis", "Parénquima en empalizada", "Xilema", "Floema"],
          "correct": 1
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta produce alcaloides como la morfina?",
          "options": ["Adormidera", "Belladona", "Digital", "Estramonio"],
          "correct": 0
        },
        {
          "difficulty": "medium",
          "question": "¿Qué tipo de crecimiento vegetal es indeterminado?",
          "options": ["Primario", "Secundario", "Apical", "Intercalar"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué pigmento da color rojo a los frutos maduros?",
          "options": ["Clorofila", "Caroteno", "Licopeno", "Xantofila"],
          "correct": 2
        },
        {
          "difficulty": "medium",
          "question": "¿Qué planta xerófita abre sus estomas solo de noche?",
          "options": ["Cactus", "Acacia", "Algodón", "Roble"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de RNA transporta aminoácidos durante la traducción en cloroplastos?",
          "options": ["mRNA", "tRNA", "rRNA", "snRNA"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué proteína de la pared celular vegetal confiere rigidez?",
          "options": ["Celulosa", "Lignina", "Pectina", "Callosa"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Quo mecanismo de co-evolución planta-polinizador propuso Darwin con Angraecum?",
          "options": ["Mimetismo", "Polinización por esphingidos", "Camuflaje", "Parasitismo"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué enzima clave permite la fijación de nitrógeno en nódulos de leguminosas?",
          "options": ["Nitrogenasa", "Nitrato-reductasa", "Nitrito-reductasa", "Glutamina-sintetasa"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de fotoreceptor detecta luz roja lejana en plantas?",
          "options": ["Fito cromo", "Criptocromo", "Fototropina", "Rieske"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de planta fue revivida de una semilla de 32 000 años en Siberia?",
          "options": ["Silene stenophylla", "Arctic lupine", "Cotton grass", "Saxifraga"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de selección natural favorece la toxicidad en plantas?",
          "options": ["Selección direccional", "Estabilizante", "Disruptiva", "Sexual"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué plántulas toleran 2 000 Gy de radiación gamma en experimentos de ISS?",
          "options": ["Arabidopsis", "Tabaco", "Trigo", "Arroz"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta la isla de Socorro (México)?",
          "options": ["15 %", "30 %", "50 %", "70 %"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de defensa vegetal activa el sistema SA frente a patógenos?",
          "options": ["R genes", "PAMP-triggered immunity", "Effector-triggered immunity", "Hormona salicílica"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de RNA silenciador regula genes de maduración en tomate?",
          "options": ["miRNA", "siRNA", "lncRNA", "piRNA"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué proteína de resistencia (R) detecta efectores de patógenos?",
          "options": ["NB-LRR", "LRR-RLK", "PRR", "PIP"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de arce fue reintroducida en Socorro tras extinguirse en el siglo XX?",
          "options": ["Acer binzayedii", "Acer grandidentatum", "Acer saccharum", "Acer rubrum"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de metabolismo secundario producen benzoxazinoides en maíz?",
          "options": ["Alcaloides", "Terpenoides", "Fenilpropanoides", "Glucosinolatos"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de señalización utiliza óxido nítrico en plantas?",
          "options": ["ROS", "NO", "SA", "JA"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de selección deja huella de selección balanceada en genomas vegetales?",
          "options": ["Selección direccional", "Estabilizante", "Disruptiva", "Funda"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué método CRISPR editó el gen ALS en tomate para resistencia?",
          "options": ["CRISPR-Cas9", "CRISPR-Cpf1", "Base editing", "Prime editing"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta el archipiélago de Revillagigedo?",
          "options": ["10 %", "25 %", "40 %", "60 %"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de tolerancia a sal activa el NHX1 en cloroplastos?",
          "options": ["Compartimentalización de Na+", "Excreción", "Osmoprotección", "Ajuste osmótico"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de RNA viral derivado induce silenciamiento en plantas?",
          "options": ["vsiRNA", "miRNA", "siRNA", "piRNA"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de cactus columnar endémico de Querétaro está en riesgo?",
          "options": ["Cephalocereus senilis", "Polaskia chende", "Echinocactus grusonii", "Stenocereus queretaroensis"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de defensa activa el sistema jasmonato frente a herbívoros?",
          "options": ["Proteasas", "PI", "PR genes", "ROS"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta la Sierra Gorda (México)?",
          "options": ["5 %", "15 %", "25 %", "35 %"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué método de propagación vegetativa usa meristemos para clones masivos?",
          "options": ["Estaca", "Acodo", "Micropropagación", "Injerto"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de metabolismo secundario produce taxol en Taxus?",
          "options": ["Alcaloide", "Terpenoide", "Fenilpropanoide", "Glucosinolato"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de señalización utiliza etileno en maduración de frutos?",
          "options": ["Receptores ETR", "Fito cromo", "Criptocromo", "Phototropina"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de pino endémico de Baja California está en riesgo?",
          "options": ["Pinus lagunae", "Pinus radiata", "Pinus arizonica", "Pinus hartwegii"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta el Cañón del Sumidero?",
          "options": ["5 %", "10 %", "20 %", "30 %"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de tolerancia a sequía activa LEA proteins en semillas?",
          "options": ["Osmoprotección", "Desecación", "Ajuste osmótico", "Compartimentalización"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué método de edición base permite cambiar C→T sin doble ruptura?",
          "options": ["CRISPR-Cas9", "Base editing", "Prime editing", "CRISPR-Cpf1"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de RNA guía dirige Cas9 al gen blanco en edición vegetal?",
          "options": ["sgRNA", "miRNA", "siRNA", "piRNA"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de defensa activa PR genes tras ataque de hongos?",
          "options": ["SA", "JA", "ET", "ABA"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de encino endémico de Querétaro forma bosques en el 20 % del estado?",
          "options": ["Quercus rugosa", "Quercus eduardi", "Quercus deserticola", "Quercus resinosa"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta el Valle de los Fantasmas?",
          "options": ["5 %", "15 %", "25 %", "35 %"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de señalización utiliza ROS como segunda señal en plantas?",
          "options": ["SA", "JA", "ET", "ABA"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué método de propagación in vitro usa callos para regenerar plantas?",
          "options": ["Micropropagación", "Estaca", "Acodo", "Injerto"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de metabolismo secundario produce morfina en Papaver?",
          "options": ["Alcaloide", "Terpenoide", "Fenilpropanoide", "Glucosinolato"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de tolerancia a calor activa HSPs en cloroplastos?",
          "options": ["Desnaturalización", "Plegamiento", "Compartimentalización", "Ajuste osmótico"],
          "correct": 1
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de cactus endémico de Querétaro forma 'cardonales'?",
          "options": ["Cephalocereus senilis", "Polaskia chende", "Echinocactus grusonii", "Myrtillocactus geometrizans"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta la Sierra de Alvarez?",
          "options": ["10 %", "20 %", "30 %", "40 %"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de defensa vegetal activa callosa en plasmodesmos?",
          "options": ["Virus", "Hongo", "Bacteria", "Nematodo"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué método de edición permite insertar grandes fragmentos sin DSB?",
          "options": ["CRISPR-Cas9", "Prime editing", "CAST", "BIBAC"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de RNA antisense regula la maduración de tomate rin?",
          "options": ["siRNA", "miRNA", "lncRNA", "asRNA"],
          "correct": 3
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de tolerancia a frió activa AFPs en plantas?",
          "options": ["Crioprotección", "Ajuste osmótico", "Compartimentalización", "Desecación"],
          "correct": 0
        },
        {
          "difficulty": "hard",
          "question": "¿Qué especie de pino endémico de Sierra Gorda forma bosques en altitud?",
          "options": ["Pinus pseudostrobus", "Pinus leiophylla", "Pinus montezumae", "Pinus herrerae"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué tipo de endemismo vegetal presenta el noreste de Querétaro?",
          "options": ["15 %", "25 %", "35 %", "45 %"],
          "correct": 2
        },
        {
          "difficulty": "hard",
          "question": "¿Qué mecanismo de señalización utiliza Ca²⁺ como segunda señal en plantas?",
          "options": ["ROS", "NO", "SA", "JA"],
          "correct": 0
        }
      ],
    },
  ],
  config: {
    prizeLevels: [
      100, 500, 1000, 2000, 5000, 10000, 20000, 50000, 75000, 100000, 150000,
      250000, 500000, 750000, 1000000, 1500000, 3000000, 5000000, 10000000,
      20000000,
    ],
    safeHavens: [4, 9, 14],
    questionConfig: {
      easy: { startLevel: 0, endLevel: 6 },
      medium: { startLevel: 7, endLevel: 13 },
      hard: { startLevel: 14, endLevel: 19 },
    },
    timerOptions: [0, 15,30, 60, 90],
  },
};


