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
        {
          difficulty: "easy",
          question: "¿Qué órgano humano tiene la capacidad de regenerarse?",
          options: ["Pulmón", "Hígado", "Riñón", "Corazón"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuántos días tarda la Tierra en dar la vuelta al Sol?",
          options: ["364", "365", "366", "360"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué tipo de animal es la ballena?",
          options: ["Pez", "Mamífero", "Reptil", "Anfibio"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuál es la unidad básica de la herencia genética?",
          options: ["Cromosoma", "Gen", "ADN", "RNA"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué gas se utiliza en los focos tradicionales para evitar que se fundan?",
          options: ["Neón", "Argón", "Helio", "Kriptón"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Quién descubrió la penicilina?",
          options: [
            "Alexander Fleming",
            "Louis Pasteur",
            "Robert Koch",
            "Joseph Lister",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el planeta más cercano al Sol?",
          options: ["Venus", "Mercurio", "Marte", "Tierra"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué gas respiramos principalmente?",
          options: ["Oxígeno", "Nitrógeno", "CO2", "Hidrógeno"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué órgano produce insulina?",
          options: ["Hígado", "Riñón", "Páncreas", "Estómago"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Cuál es la fórmula química del agua oxigenada?",
          options: ["H2O", "H2O2", "HO2", "H3O"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuántos planetas hay en nuestro sistema solar?",
          options: ["7", "8", "9", "10"],
          correct: 1,
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
          difficulty: "easy",
          question:
            "¿Cuántos jugadores tiene un equipo de baloncesto en cancha?",
          options: ["4", "5", "6", "7"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué deporte se utiliza un bate y una pelota?",
          options: ["Golf", "Tenis", "Béisbol", "Hockey"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué país ganó el Mundial de Fútbol de 2014?",
          options: ["Brasil", "Argentina", "Alemania", "Francia"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Cuántos anillos hay en el logo de los Juegos Olímpicos?",
          options: ["4", "5", "6", "7"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Quién fue el primer hombre en correr los 100 metros lisos en menos de 9 segundos?",
          options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Asafa Powell"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿En qué deporte se utiliza el término 'spare'?",
          options: ["Golf", "Boliche", "Tenis", "Cricket"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuántos jugadores tiene un equipo de fútbol en cancha?",
          options: ["9", "10", "11", "12"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿En qué país se inventó el fútbol moderno?",
          options: ["Brasil", "España", "Inglaterra", "Italia"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Cuántos sets se necesitan para ganar un partido de tenis (Grand Slam masculino)?",
          options: ["2", "3", "4", "5"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuánto dura un partido de baloncesto NBA?",
          options: ["40 min", "48 min", "60 min", "52 min"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué país ha ganado más Copas del Mundo de fútbol?",
          options: ["Alemania", "Argentina", "Brasil", "Italia"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
          options: ["1892", "1896", "1900", "1904"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuántos hoyos tiene un campo de golf profesional?",
          options: ["9", "12", "18", "21"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Quién tiene más títulos de Grand Slam en tenis masculino?",
          options: ["Federer", "Nadal", "Djokovic", "Sampras"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿En qué país se originó el karate?",
          options: ["China", "Corea", "Japón", "Tailandia"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué deporte practica LeBron James?",
          options: ["Fútbol americano", "Béisbol", "Baloncesto", "Hockey"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Cuántos puntos vale un touchdown en fútbol americano?",
          options: ["3", "5", "6", "7"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿En qué ciudad se encuentra el estadio Santiago Bernabéu?",
          options: ["Barcelona", "Madrid", "Valencia", "Sevilla"],
          correct: 1,
        },
      ],
    },

    // Arte y Cultura---------------------------------------------------------------------------------

    {
      id: "arte",
      name: "Arte y Cultura",
      icon: "🎨",
      questions: [
        {
          difficulty: "easy",
          question: "¿Qué artista pintó 'La noche estrellada'?",
          options: ["Picasso", "Van Gogh", "Monet", "Dalí"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué instrumento tiene cuerdas y se toca con arco?",
          options: ["Guitarra", "Piano", "Violín", "Flauta"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué compositor escribió 'El Cascanueces'?",
          options: ["Mozart", "Tchaikovsky", "Beethoven", "Brahms"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿De qué país es originario el tango?",
          options: ["Uruguay", "Chile", "Argentina", "España"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Quién escribió 'Fedro'?",
          options: ["Sócrates", "Aristóteles", "Platón", "Heráclito"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿En qué ciudad está la ópera de La Scala?",
          options: ["Nápoles", "Roma", "Milán", "Florencia"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Quién pintó la Mona Lisa?",
          options: [
            "Miguel Ángel",
            "Leonardo da Vinci",
            "Rafael",
            "Botticelli",
          ],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué museo está la Mona Lisa?",
          options: ["El Prado", "British Museum", "Louvre", "Uffizi"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Quién escribió Don Quijote de la Mancha?",
          options: ["Lope de Vega", "Cervantes", "Calderón", "Quevedo"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Quién compuso la Novena Sinfonía?",
          options: ["Mozart", "Bach", "Beethoven", "Vivaldi"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué pintor cortó su propia oreja?",
          options: ["Monet", "Picasso", "Van Gogh", "Dalí"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿De qué país es originario el flamenco?",
          options: ["México", "Argentina", "España", "Portugal"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Quién esculpió el David de mármol en Florencia?",
          options: ["Donatello", "Miguel Ángel", "Bernini", "Rodin"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿En qué año se pintó Guernica de Picasso?",
          options: ["1927", "1937", "1947", "1957"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Quién escribió Cien años de soledad?",
          options: ["Vargas Llosa", "García Márquez", "Borges", "Cortázar"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué instrumento tocaba Beethoven principalmente?",
          options: ["Violín", "Flauta", "Piano", "Guitarra"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué movimiento artístico lideró Salvador Dalí?",
          options: ["Cubismo", "Impresionismo", "Surrealismo", "Expresionismo"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Quién escribió La Divina Comedia?",
          options: ["Petrarca", "Dante Alighieri", "Boccaccio", "Maquiavelo"],
          correct: 1,
        },
      ],
    },

    {
      id: "entretenimiento",
      name: "Entretenimiento",
      icon: "🎬",
      questions: [
        {
          difficulty: "easy",
          question: "¿Qué película de Disney tiene una alfombra mágica?",
          options: ["Aladdin", "La Bella y la Bestia", "Pinocho", "Hércules"],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Cómo se llama el villano de 'El Rey León'?",
          options: ["Jafar", "Scar", "Ursula", "Hades"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué actor interpretó al Joker en 'The Dark Knight'?",
          options: [
            "Joaquin Phoenix",
            "Jack Nicholson",
            "Heath Ledger",
            "Jared Leto",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿En qué película aparece el personaje de 'Forrest Gump'?",
          options: [
            "The Green Mile",
            "Forrest Gump",
            "Cast Away",
            "Philadelphia",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Quién dirigió 'Inception'?",
          options: [
            "Steven Spielberg",
            "Christopher Nolan",
            "David Fincher",
            "Quentin Tarantino",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuál fue la primera película animada de Disney?",
          options: ["Pinocho", "Fantasía", "Blancanieves", "Dumbo"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cómo se llama el ratón más famoso de Disney?",
          options: ["Jerry", "Remy", "Mickey", "Stuart"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué superhéroe es conocido como el Hombre de Acero?",
          options: ["Batman", "Superman", "Iron Man", "Thor"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿En qué saga de películas aparece Darth Vader?",
          options: [
            "Star Trek",
            "Star Wars",
            "Guardianes de la Galaxia",
            "Alien",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué película ganó el Oscar a Mejor Película en 2020?",
          options: ["1917", "Joker", "Parásitos", "Había una vez en Hollywood"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Quién interpretó a Jack en Titanic?",
          options: [
            "Brad Pitt",
            "Tom Cruise",
            "Leonardo DiCaprio",
            "Johnny Depp",
          ],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Cuántas películas de Harry Potter se hicieron?",
          options: ["6", "7", "8", "9"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿En qué año se estrenó la primera película de El Señor de los Anillos?",
          options: ["1999", "2000", "2001", "2002"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Quién dirigió la trilogía de El Padrino?",
          options: [
            "Martin Scorsese",
            "Francis Ford Coppola",
            "Steven Spielberg",
            "Quentin Tarantino",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál es la película más taquillera de la historia (ajustada por inflación)?",
          options: [
            "Avatar",
            "Titanic",
            "Lo que el viento se llevó",
            "Avengers: Endgame",
          ],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué personaje vive en una piña debajo del mar?",
          options: ["Nemo", "Bob Esponja", "Dory", "Patricio"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Quién es el actor detrás de Iron Man en el MCU?",
          options: [
            "Chris Evans",
            "Robert Downey Jr.",
            "Chris Hemsworth",
            "Mark Ruffalo",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuántos Oscars ganó la película Ben-Hur (1959)?",
          options: ["8", "9", "10", "11"],
          correct: 3,
        },
      ],
    },

    // Tecnología---------------------------------------------------------------------------------------

    {
      id: "tecnologia",
      name: "Tecnología",
      icon: "💻",
      questions: [
        {
          difficulty: "easy",
          question: "¿Qué significa 'CPU' en informática?",
          options: [
            "Central Processing Unit",
            "Computer Power Unit",
            "Central Program Utility",
            "Computer Processing Unit",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Qué empresa desarrolló Android?",
          options: ["Apple", "Microsoft", "Google", "Samsung"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué lenguaje se usa comúnmente para crear páginas web?",
          options: ["C++", "HTML", "Java", "Python"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Qué significa 'AI' en tecnología?",
          options: [
            "Artificial Interface",
            "Automated Input",
            "Artificial Intelligence",
            "Advanced Integration",
          ],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Qué empresa creó el lenguaje de programación 'Go'?",
          options: ["Microsoft", "Google", "Apple", "Meta"],
          correct: 1,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué tecnología permite hacer transacciones sin intermediarios?",
          options: ["Cloud computing", "Blockchain", "Machine learning", "IoT"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué empresa creó el iPhone?",
          options: ["Samsung", "Google", "Apple", "Microsoft"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Qué significan las siglas 'WWW'?",
          options: [
            "World Wide Web",
            "World Web Window",
            "Web World Wide",
            "Wide World Web",
          ],
          correct: 0,
        },
        {
          difficulty: "easy",
          question: "¿Quién fundó Microsoft?",
          options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿En qué año se lanzó el primer iPhone?",
          options: ["2005", "2006", "2007", "2008"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question:
            "¿Cuál es el lenguaje de programación más usado en desarrollo web frontend?",
          options: ["Python", "Java", "JavaScript", "C++"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué empresa es dueña de WhatsApp?",
          options: ["Google", "Microsoft", "Meta", "Twitter"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿En qué año fue fundada Google?",
          options: ["1996", "1997", "1998", "1999"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Quién es considerado el padre de la informática?",
          options: [
            "Steve Jobs",
            "Alan Turing",
            "Bill Gates",
            "Tim Berners-Lee",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuál fue el primer navegador web de la historia?",
          options: ["Mosaic", "Netscape", "WorldWideWeb", "Internet Explorer"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question:
            "¿Qué red social es famosa por sus videos cortos y el logo de una nota musical?",
          options: ["Instagram", "TikTok", "Snapchat", "YouTube"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué sistema operativo usa la mayoría de smartphones en el mundo?",
          options: ["iOS", "Windows", "Android", "Linux"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Cuántos bits hay en un byte?",
          options: ["4", "8", "16", "32"],
          correct: 1,
        },
      ],
    },

    // Naturaleza---------------------------------------------------------------------------------------

    {
      id: "naturaleza",
      name: "Naturaleza",
      icon: "🌿",
      questions: [
        {
          difficulty: "easy",
          question: "¿Qué animal hace 'miau'?",
          options: ["Perro", "Gato", "Vaca", "Caballo"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué parte de la planta absorbe el agua?",
          options: ["Hoja", "Tallo", "Raíz", "Flor"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Qué animal puede cambiar de color para camuflajearse?",
          options: ["Rana", "Camaleón", "Serpiente", "Pez payaso"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuántos días tarda la Luna en dar la vuelta a la Tierra?",
          options: ["28", "30", "31", "27"],
          correct: 0,
        },
        {
          difficulty: "hard",
          question: "¿Cuál es el pez más grande del mundo?",
          options: [
            "Tiburón blanco",
            "Tiburón ballena",
            "Manta raya",
            "Pez espada",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Qué animal puede sobrevivir sin agua durante años?",
          options: ["Camello", "Tardígrado", "Rinoceronte", "Cocodrilo"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el animal terrestre más grande?",
          options: ["Rinoceronte", "Hipopótamo", "Elefante africano", "Jirafa"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cuántas patas tiene una araña?",
          options: ["6", "8", "10", "12"],
          correct: 1,
        },
        {
          difficulty: "easy",
          question: "¿Qué animal es el rey de la selva?",
          options: ["Tigre", "León", "Jaguar", "Leopardo"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuál es el animal más venenoso del mundo?",
          options: [
            "Serpiente taipán",
            "Rana dardo venenoso",
            "Medusa irukandji",
            "Araña viuda negra",
          ],
          correct: 1,
        },
        {
          difficulty: "medium",
          question: "¿Cuántos corazones tiene un pulpo?",
          options: ["1", "2", "3", "4"],
          correct: 2,
        },
        {
          difficulty: "medium",
          question: "¿Cuál es el ave más grande del mundo?",
          options: ["Águila", "Cóndor", "Avestruz", "Albatros"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question: "¿Cuál es el único mamífero que puede volar?",
          options: [
            "Ardilla voladora",
            "Murciélago",
            "Colugo",
            "Petauro del azúcar",
          ],
          correct: 1,
        },
        {
          difficulty: "hard",
          question: "¿Cuántos años puede vivir una tortuga de Galápagos?",
          options: ["100", "150", "175", "200"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Qué porcentaje del oxígeno del planeta produce el océano?",
          options: ["30%", "50%", "70%", "90%"],
          correct: 2,
        },
        {
          difficulty: "easy",
          question: "¿Cuál es el animal más rápido del mundo?",
          options: ["León", "Guepardo", "Antílope", "Caballo"],
          correct: 1,
        },
        {
          difficulty: "medium",
          question:
            "¿Qué animal tiene las huellas dactilares más parecidas a las humanas?",
          options: ["Chimpancé", "Gorila", "Koala", "Orangután"],
          correct: 2,
        },
        {
          difficulty: "hard",
          question:
            "¿Cuál es el animal con el cerebro más grande en proporción a su cuerpo?",
          options: ["Delfín", "Elefante", "Hormiga", "Ser humano"],
          correct: 2,
        },
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
    timerOptions: [0, 30, 60, 90],
  },
};
