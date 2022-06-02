const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    return {
      filter,
      filterRef,

      // ⚠️ TAB YANG AKTIF PERTAMA KALI
      selected: ref("Outline of Acedemic Disciplines"),

      // ⚠️ DEFAULT CHILD NODE YANG TERBUKA
      expanded: ref([
        "Outline of Acedemic Disciplines",
        "1 Humanities",
        "2 Social science",
        "3 Natural science",
        "4 Formal science",
        "5 Applied science",
      ]),

      simple: [
        {
          label: "Outline of Acedemic Disciplines",
          avatar: "../assets/academic-disciplines/academic-disciplines-headline.png",
          children: [

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

            {
              label: "1 Humanities",
              avatar: "../assets/academic-disciplines/academic-disciplines-1-humanities.png",
              children: [

                // =========================================================================================================== //

                {
                  label: "1.1 Performing arts",
                  children: [
                    {
                      label: "Music",
                      children: [
                        { label: "Accompanying" },
                        { label: "Chamber music" },
                        { label: "Church music" },
                        {
                          label: "Conducting",
                          children: [
                            { label: "Choral conducting" },
                            { label: "Orchestral conducting" },
                            { label: "Wind ensemble conducting" },
                          ]
                        },
                        { label: "Early music" },
                        { label: "Jazz studies" },
                        { label: "Musical composition" },
                        { label: "Music education ➀" },
                        { label: "Music history" },
                        {
                          label: "Musicology",
                          children: [
                            { label: "Historical musicology" },
                            { label: "Systematic musicology" },
                          ]
                        },
                        { label: "Ethnomusicology" },
                        { label: "Music theory" },
                        { label: "Orchestral studies" },
                        {
                          label: "Organology",
                          children: [
                            { label: "Organ and historical keyboards" },
                            { label: "Piano" },
                            { label: "Strings, harp, oud, and guitar" },
                            { label: "Singing" },
                            { label: "Woodwinds, brass, and percussion" },
                          ]
                        },
                        { label: "Recording" },
                      ]
                    },
                    {
                      label: "Dance",
                      children: [
                        { label: "Choreography" },
                        { label: "Dance notation" },
                        { label: "Ethnochoreology" },
                        { label: "History of dance" },
                      ]
                    },
                    {
                      label: "Television ➀",
                      children: [
                        { label: "Television studies ➀" },
                      ]
                    },
                    {
                      label: "Theatre",
                      children: [
                        { label: "Acting" },
                        { label: "Directing" },
                        { label: "Dramaturgy" },
                        { label: "History" },
                        { label: "Musical theatre" },
                        { label: "Playwrighting" },
                        { label: "Puppetry" },
                        { label: "Scenography" },
                        { label: "Stage design" },
                        { label: "Ventriloquism" },
                      ]
                    },
                    {
                      label: "Film ➀",
                      children: [
                        { label: "Animation ➀" },
                        { label: "Film criticism" },
                        { label: "Filmmaking" },
                        { label: "Film theory" },
                        { label: "Live action" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.2 Visual arts",
                  children: [
                    {
                      label: "Applied arts",
                      children: [
                        { label: "Animation ➁" },
                        { label: "Calligraphy" },
                        { label: "Decorative arts ➀" },
                        { label: "Mixed media" },
                        { label: "Printmaking" },
                        { label: "Studio art" },
                        {
                          label: "Architecture ➀",
                          children: [
                            { label: "Interior architecture ➀" },
                            {
                              label: "Landscape architecture ➀",
                              children: [
                                { label: "Landscape design ➀" },
                                { label: "Landscape planning" },
                              ]
                            },
                            { label: "Architectural analytics ➀" },
                            { label: "Historic preservation ➀" },
                            { label: "Interior design (interior architecture) ➀" },
                            { label: "Technical drawing ➀" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Fashion",
                    },
                    {
                      label: "Fine arts",
                      children: [
                        {
                          label: "Graphic arts",
                          children: [
                            { label: "Drawing" },
                            { label: "Painting" },
                            { label: "Photography" },
                          ]
                        },
                        { label: "Sculpture" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.3 History",
                  children: [
                    { label: "African history" },
                    { label: "American history" },
                    {
                      label: "Ancient history",
                      children: [
                        { label: "Ancient Egypt" },
                        { label: "Carthage" },
                        { label: "Ancient Greek history" },
                        { label: "Ancient Roman history" },
                        { label: "Assyrian Civilization" },
                        { label: "Bronze Age Civilizations" },
                        { label: "Biblical history" },
                        { label: "History of the Indus Valley Civilization" },
                        { label: "Preclassic Maya" },
                        { label: "History of Mesopotamia" },
                        { label: "The Stone Age" },
                        { label: "History of the Yangtze civilization" },
                        { label: "History of the Yellow River civilization" },
                      ]
                    },
                    {
                      label: "Asian history",
                      children: [
                        { label: "Chinese history" },
                        { label: "Indian history" },
                        { label: "Indonesian history" },
                        { label: "Iranian history" },
                      ]
                    },
                    { label: "Australian history" },
                    { label: "Cultural history" },
                    { label: "Ecclesiastical history of the Catholic Church" },
                    { label: "Economic history" },
                    { label: "Environmental history" },
                    { label: "European history" },
                    { label: "Intellectual history" },
                    { label: "Jewish history" },
                    { label: "Latin American history" },
                    { label: "Modern history" },
                    {
                      label: "Philosophical history",
                      children: [
                        { label: "Ancient philosophy" },
                        { label: "Contemporary philosophy" },
                        {
                          label: "Medieval philosophy",
                          children: [
                            { label: "Humanism" },
                            { label: "Scholasticism" },
                          ]
                        },
                        { label: "Modern philosophy" },
                      ]
                    },
                    {
                      label: "Political history ➀",
                      children: [
                        { label: "History of political thought" },
                      ]
                    },
                    { label: "Pre-Columbian era history" },
                    { label: "Prehistory" },
                    { label: "Public history" },
                    { label: "Russian history" },
                    { label: "Scientific history" },
                    { label: "Technological history" },
                    { label: "World history" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.4 Languages and literature",
                  children: [
                    {
                      label: "Linguistics",
                      children: [
                        { label: "Applied linguistics" },
                        { label: "Composition studies" },
                        { label: "Computational linguistics" },
                        { label: "Discourse analysis" },
                        { label: "English studies" },
                        { label: "Etymology" },
                        { label: "Grammar" },
                        { label: "Grammatology" },
                        { label: "Historical linguistics" },
                        { label: "History of linguistics" },
                        { label: "Interlinguistics" },
                        { label: "Lexicology" },
                        { label: "Linguistic typology" },
                        { label: "Morphology (linguistics)" },
                        { label: "Natural language processing" },
                        { label: "Philology" },
                        { label: "Phonetics" },
                        { label: "Phonology" },
                        { label: "Pragmatics" },
                        { label: "Psycholinguistics" },
                        { label: "Rhetoric" },
                        { label: "Semantics" },
                        { label: "Semiotics" },
                        { label: "Sociolinguistics ➀" },
                        { label: "Syntax" },
                        { label: "Usage" },
                        { label: "Word usage" },
                      ]
                    },
                    { label: "Comics studies" },
                    { label: "Comparative literature" },
                    {
                      label: "Creative writing",
                      children: [
                        { label: "Fiction" },
                        { label: "Non-fiction" },
                      ]
                    },
                    { label: "English literature" },
                    {
                      label: "History of literature",
                      children: [
                        { label: "Ancient literature" },
                        { label: "Medieval literature" },
                        { label: "Post-colonial literature" },
                        { label: "Post-modern literature" },
                      ]
                    },
                    {
                      label: "Literary theory",
                      children: [
                        { label: "Critical theory" },
                        { label: "Literary criticism" },
                        { label: "Poetics" },
                      ]
                    },
                    { label: "Poetry" },
                    {
                      label: "World literature",
                      children: [
                        { label: "African-American literature" },
                        { label: "American literature" },
                        { label: "British literature" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.5 Law",
                  children: [
                    { label: "Administrative law ➀" },
                    { label: "Canon law ➁" },
                    {
                      label: "Civil law ➀",
                      children: [
                        { label: "Admiralty law ➀" },
                        { label: "Animal law/Animal rights ➀" },
                        { label: "Civil procedure ➀" },
                        { label: "Common law ➀" },
                        { label: "Contract law ➀" },
                        { label: "Corporations ➀" },
                        { label: "Environmental law ➀" },
                        { label: "Family law ➀" },
                        { label: "Federal law ➀" },
                        {
                          label: "International law ➀",
                          children: [
                            { label: "Public international law ➀" },
                            { label: "Supranational law ➀" },
                          ]
                        },
                        { label: "Labor law ➀" },
                        { label: "Property law ➀" },
                        { label: "Tax law ➀" },
                        { label: "Tort law ➀" },
                      ]
                    },
                    { label: "Comparative law ➀" },
                    { label: "Competition law ➀" },
                    { label: "Constitutional law ➀" },
                    {
                      label: "Criminal law ➀",
                      children: [
                        { label: "Criminal justice ➀" },
                        {
                          label: "Criminal procedure ➀",
                          children: [
                            { label: "Forensic science ➀" },
                            { label: "Police science ➀" },
                          ]
                        },
                      ]
                    },
                    { label: "Islamic law ➀" },
                    { label: "Jewish law ➀" },
                    { label: "Jurisprudence (Philosophy of Law) ➀" },
                    {
                      label: "Legal management ➀",
                      children: [
                        { label: "Commercial law" },
                        { label: "Corporate law ➀" },
                      ]
                    },
                    { label: "Procedural law ➀" },
                    { label: "Substantive law ➀" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.6 Philosophy",
                  children: [
                    { label: "Aesthetics" },
                    {
                      label: "Applied philosophy",
                      children: [
                        { label: "Philosophy of economics" },
                        { label: "Philosophy of education" },
                        { label: "Philosophy of engineering" },
                        { label: "Philosophy of history" },
                        { label: "Philosophy of language" },
                        { label: "Philosophy of law" },
                        { label: "Philosophy of mathematics" },
                        { label: "Philosophy of music" },
                        { label: "Philosophy of psychology" },
                        { label: "Philosophy of religion" },
                        {
                          label: "Philosophy of physical sciences",
                          children: [
                            { label: "Philosophy of biology" },
                            { label: "Philosophy of chemistry" },
                            { label: "Philosophy of physics" },
                          ]
                        },
                        { label: "Philosophy of social science" },
                        { label: "Philosophy of technology" },
                        { label: "Systems philosophy" },
                      ]
                    },
                    {
                      label: "Epistemology",
                      children: [
                        { label: "Justification" },
                        { label: "Reasoning errors" },
                      ]
                    },
                    {
                      label: "Ethics",
                      children: [
                        {
                          label: "Applied ethics",
                          children: [
                            { label: "Animal rights" },
                            { label: "Bioethics" },
                            { label: "Environmental ethics" },
                          ]
                        },
                        { label: "Meta-ethics" },
                        { label: "Moral psychology, Descriptive ethics, Value theory" },
                        {
                          label: "Normative ethics",
                          children: [
                            { label: "Virtue ethics" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Logic",
                      children: [
                        { label: "Mathematical logic" },
                        { label: "Philosophical logic" },
                      ]
                    },
                    { label: "Meta-philosophy" },
                    {
                      label: "Metaphysics",
                      children: [
                        { label: "Philosophy of Action" },
                        { label: "Determinism and Free will" },
                        { label: "Ontology" },
                        {
                          label: "Philosophy of mind",
                          children: [
                            { label: "Philosophy of pain" },
                            { label: "Philosophy of artificial intelligence" },
                            { label: "Philosophy of perception" },
                          ]
                        },
                        { label: "Philosophy of space and time" },
                        { label: "Teleology" },
                        { label: "Theism and Atheism" },
                      ]
                    },
                    {
                      label: "Philosophical traditions and schools",
                      children: [
                        { label: "African philosophy" },
                        { label: "Analytic philosophy" },
                        { label: "Aristotelianism" },
                        { label: "Continental philosophy" },
                        { label: "Eastern philosophy" },
                        { label: "Feminist philosophy ➀" },
                        { label: "Platonism" },
                      ]
                    },
                    {
                      label: "Social philosophy and political philosophy",
                      children: [
                        { label: "Anarchism" },
                        { label: "Feminist philosophy ➁" },
                        { label: "Libertarianism" },
                        { label: "Marxism" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "1.7 Theology",
                  children: [
                    {
                      label: "Biblical studies",
                      children: [
                        { label: "Biblical Hebrew, Koine Greek, Aramaic" },
                      ]
                    },
                    { label: "Religious studies" },
                    {
                      label: "Buddhist theology",
                      children: [
                        { label: "Pali Studies" },
                      ]
                    },
                    {
                      label: "Christian theology",
                      children: [
                        { label: "Anglican theology" },
                        { label: "Baptist theology" },
                        { label: "Catholic theology" },
                        { label: "Eastern Orthodox theology" },
                        { label: "Protestant theology" },
                      ]
                    },
                    {
                      label: "Hindu theology",
                      children: [
                        { label: "Sanskrit Studies" },
                        { label: "Dravidian Studies" },
                      ]
                    },
                    { label: "Jewish theology" },
                    {
                      label: "Muslim theology",
                      children: [
                        { label: "Arabic Studies" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

              ]
            },

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

            {
              label: "2 Social science",
              avatar: "../assets/academic-disciplines/academic-disciplines-2-social-science.png",
              children: [

                // =========================================================================================================== //

                {
                  label: "2.1 Anthropology",
                  children: [
                    { label: "Biological anthropology" },
                    { label: "Linguistic anthropology" },
                    { label: "Cultural anthropology" },
                    { label: "Social anthropology" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.2 Archaeology",
                  children: [
                    { label: "Biocultural anthropology" },
                    { label: "Evolutionary anthropology" },
                    { label: "Feminist archaeology" },
                    { label: "Forensic anthropology" },
                    { label: "Maritime archaeology" },
                    { label: "Palaeoanthropology" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.3 Economics",
                  children: [
                    { label: "Agricultural economics ➀" },
                    { label: "Anarchist economics" },
                    { label: "Applied economics" },
                    { label: "Behavioural economics" },
                    { label: "Bioeconomics" },
                    { label: "Complexity economics" },
                    { label: "Computational economics ➀" },
                    { label: "Consumer economics" },
                    { label: "Development economics" },
                    { label: "Ecological economics" },
                    { label: "Econometrics ➀" },
                    { label: "Economic geography ➀" },
                    { label: "Economic sociology ➀" },
                    { label: "Economic systems" },
                    { label: "Education economics" },
                    { label: "Energy economics" },
                    { label: "Entrepreneurial economics" },
                    { label: "Environmental economics" },
                    { label: "Evolutionary economics" },
                    { label: "Experimental economics" },
                    { label: "Feminist economics" },
                    { label: "Financial econometrics" },
                    { label: "Financial economics" },
                    { label: "Green economics" },
                    { label: "Growth economics" },
                    { label: "Human development theory" },
                    { label: "Industrial organization" },
                    { label: "Information economics" },
                    { label: "Institutional economics" },
                    { label: "International economics" },
                    { label: "Islamic economics" },
                    { label: "Labor economics ➀" },
                    { label: "Law and economics" },
                    { label: "Macroeconomics" },
                    { label: "Managerial economics" },
                    { label: "Marxian economics" },
                    { label: "Mathematical economics" },
                    { label: "Microeconomics" },
                    { label: "Monetary economics" },
                    { label: "Neuroeconomics" },
                    { label: "Participatory economics" },
                    { label: "Political economy ➀" },
                    { label: "Public economics" },
                    { label: "Public finance" },
                    { label: "Real estate economics" },
                    { label: "Resource economics" },
                    { label: "Social choice theory ➀" },
                    { label: "Socialist economics" },
                    { label: "Socioeconomics" },
                    { label: "Transport economics" },
                    { label: "Welfare economics" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.4 Geography",
                  children: [
                    {
                      label: "Physical geography ➀",
                      children: [
                        { label: "Atmology" },
                        { label: "Biogeography" },
                        { label: "Climatology" },
                        { label: "Coastal geography" },
                        { label: "Emergency management ➀" },
                        { label: "Environmental geography" },
                        { label: "Geobiology ➀" },
                        { label: "Geochemistry ➀" },
                        { label: "Geology" },
                        { label: "Geomatics" },
                        { label: "Geomorphology" },
                        { label: "Geophysics ➀" },
                        { label: "Glaciology ➀" },
                        { label: "Hydrology ➀" },
                        { label: "Landscape ecology ➀" },
                        { label: "Lithology" },
                        { label: "Meteorology" },
                        { label: "Mineralogy" },
                        { label: "Oceanography" },
                        { label: "Palaeogeography" },
                        { label: "Palaeontology" },
                        { label: "Petrology" },
                        { label: "Quaternary science ➀" },
                        { label: "Soil geography" },
                      ]
                    },
                    {
                      label: "Human geography",
                      children: [
                        { label: "Behavioural geography" },
                        { label: "Cognitive geography" },
                        { label: "Cultural geography" },
                        { label: "Development geography" },
                        { label: "Economic geography ➁" },
                        { label: "Health geography" },
                        { label: "Historical geography" },
                        { label: "Language geography" },
                        { label: "Mathematical geography" },
                        { label: "Marketing geography" },
                        { label: "Military geography" },
                        { label: "Political geography" },
                        { label: "Population geography" },
                        { label: "Religion geography" },
                        { label: "Social geography" },
                        { label: "Strategic geography" },
                        { label: "Time geography" },
                        { label: "Tourism geography" },
                        { label: "Transport geography" },
                        { label: "Urban geography" },
                      ]
                    },
                    { label: "Integrated geography" },
                    {
                      label: "Cartography",
                      children: [
                        { label: "Celestial cartography" },
                        { label: "Planetary cartography" },
                        { label: "Topography" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.5 Political science",
                  children: [
                    { label: "American politics" },
                    { label: "Canadian politics" },
                    { label: "Civics" },
                    { label: "Comparative politics" },
                    { label: "European studies ➀" },
                    { label: "Geopolitics (Political geography)" },
                    { label: "International relations" },
                    { label: "International organizations" },
                    { label: "Nationalism studies" },
                    { label: "Peace and conflict studies ➀" },
                    { label: "Policy studies ➀" },
                    { label: "Political behavior" },
                    { label: "Political culture" },
                    { label: "Political economy ➁" },
                    { label: "Political history ➁" },
                    { label: "Political philosophy" },
                    { label: "Public administration ➀" },
                    { label: "Public law" },
                    { label: "Psephology" },
                    { label: "Social choice theory ➁" },
                    { label: "Singapore politics" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.6 Psychology",
                  children: [
                    { label: "Abnormal psychology" },
                    { label: "Applied psychology" },
                    { label: "Biological psychology" },
                    { label: "Clinical neuropsychology" },
                    { label: "Clinical psychology" },
                    { label: "Cognitive psychology" },
                    { label: "Community psychology" },
                    { label: "Comparative psychology" },
                    { label: "Conservation psychology" },
                    { label: "Consumer psychology" },
                    { label: "Counseling psychology" },
                    { label: "Criminal psychology" },
                    {
                      label: "Cultural psychology",
                      children: [
                        { label: "Asian psychology" },
                        { label: "Black psychology" },
                      ]
                    },
                    { label: "Developmental psychology" },
                    { label: "Differential psychology" },
                    { label: "Ecological psychology" },
                    { label: "Educational psychology ➀" },
                    { label: "Environmental psychology" },
                    { label: "Evolutionary psychology" },
                    { label: "Experimental psychology" },
                    { label: "Group psychology" },
                    { label: "Family psychology" },
                    { label: "Feminine psychology" },
                    { label: "Forensic developmental psychology" },
                    { label: "Forensic psychology" },
                    { label: "Health psychology" },
                    { label: "Humanistic psychology" },
                    { label: "Indigenous psychology" },
                    { label: "Legal psychology" },
                    { label: "Mathematical psychology" },
                    { label: "Media psychology" },
                    { label: "Medical psychology" },
                    { label: "Military psychology" },
                    { label: "Moral psychology and Descriptive ethics" },
                    { label: "Music psychology" },
                    { label: "Neuropsychology" },
                    { label: "Occupational health psychology" },
                    { label: "Occupational psychology" },
                    { label: "Organizational psychology (a.k.a., Industrial Psychology)" },
                    { label: "Parapsychology" },
                    { label: "Pediatric psychology" },
                    { label: "Pedology (children study)" },
                    { label: "Personality psychology" },
                    { label: "Phenomenology ➀" },
                    { label: "Political psychology" },
                    { label: "Positive psychology" },
                    { label: "Psychoanalysis" },
                    { label: "Psychobiology" },
                    { label: "Psychology of religion" },
                    { label: "Psychometrics" },
                    {
                      label: "Psychopathology",
                      children: [
                        { label: "Child psychopathology" },
                      ]
                    },
                    { label: "Psychophysics" },
                    { label: "Quantitative psychology" },
                    { label: "Rehabilitation psychology" },
                    { label: "School psychology" },
                    { label: "Social psychology ➀" },
                    { label: "Sport psychology ➀" },
                    { label: "Traffic psychology" },
                    { label: "Transpersonal psychology" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.7 Sociology",
                  children: [
                    { label: "Analytical sociology" },
                    {
                      label: "Applied sociology",
                      children: [
                        { label: "Leisure studies ➀" },
                        { label: "Political sociology" },
                        { label: "Public sociology" },
                        { label: "Social engineering" },
                      ]
                    },
                    { label: "Architectural sociology" },
                    {
                      label: "Area studies",
                      children: [
                        { label: "African studies" },
                        {
                          label: "American studies",
                          children: [
                            { label: "Appalachian studies" },
                            { label: "Canadian studies" },
                            { label: "Latin American studies" },
                          ]
                        },
                        {
                          label: "Asian studies",
                          children: [
                            { label: "Central Asian studies" },
                            { label: "East Asian studies" },
                            { label: "Indology" },
                            { label: "Iranian studies" },
                            { label: "Japanese studies" },
                            { label: "Korean studies" },
                            { label: "Pakistan studies" },
                            { label: "Sindhology" },
                            { label: "Sinology" },
                            { label: "Southeast Asian studies" },
                            { label: "Thai studies" },
                          ]
                        },
                        { label: "Australian studies" },
                        {
                          label: "European studies ➁",
                          children: [
                            { label: "Celtic studies" },
                            { label: "German studies" },
                            { label: "Sociology in Poland" },
                            { label: "Scandinavian studies" },
                            { label: "Slavic studies" },
                          ]
                        },
                        {
                          label: "Middle Eastern studies",
                          children: [
                            { label: "Arab studies" },
                            { label: "Assyriology" },
                            { label: "Egyptology" },
                            { label: "Jewish studies" },
                          ]
                        },
                      ]
                    },
                    { label: "Behavioral sociology" },
                    {
                      label: "Collective behavior",
                      children: [
                        { label: "Social movements" },
                      ]
                    },
                    {
                      label: "Community informatics ➀",
                      children: [
                        { label: "Social network analysis" },
                      ]
                    },
                    { label: "Comparative sociology" },
                    { label: "Conflict theory" },
                    { label: "Criminology/Criminal justice" },
                    { label: "Critical management studies" },
                    { label: "Critical sociology" },
                    { label: "Cultural sociology" },
                    {
                      label: "Cultural studies/ethnic studies",
                      children: [
                        { label: "Africana studies" },
                        { label: "Cross-cultural studies" },
                        { label: "Culturology" },
                        { label: "Deaf studies" },
                        { label: "Ethnology" },
                        { label: "Utopian studies" },
                        { label: "Whiteness studies" },
                      ]
                    },
                    { label: "Demography/Population" },
                    { label: "Digital sociology" },
                    { label: "Dramaturgical sociology" },
                    { label: "Economic sociology ➁" },
                    { label: "Educational sociology" },
                    { label: "Empirical sociology" },
                    { label: "Environmental sociology" },
                    { label: "Evolutionary sociology" },
                    { label: "Feminist sociology" },
                    { label: "Figurational sociology" },
                    { label: "Futures studies" },
                    {
                      label: "Gender studies",
                      children: [
                        { label: "Men's studies" },
                        { label: "Women's studies" },
                      ]
                    },
                    { label: "Historical sociology" },
                    { label: "Human ecology ➀" },
                    { label: "Humanistic sociology" },
                    { label: "Industrial sociology" },
                    { label: "Interactionism" },
                    {
                      label: "Interpretive sociology",
                      children: [
                        { label: "Ethnomethodology" },
                        { label: "Phenomenology ➁" },
                        { label: "Social constructionism" },
                        { label: "Symbolic interactionism" },
                      ]
                    },
                    { label: "Jealousy sociology" },
                    { label: "Macrosociology" },
                    { label: "Marxist sociology" },
                    { label: "Mathematical sociology" },
                    { label: "Medical sociology" },
                    { label: "Mesosociology" },
                    { label: "Microsociology" },
                    { label: "Military sociology" },
                    { label: "Natural resource sociology" },
                    { label: "Organizational studies ➀" },
                    { label: "Phenomenological sociology" },
                    { label: "Policy sociology" },
                    { label: "Psychoanalytic sociology" },
                    { label: "Science studies/Science and technology studies" },
                    {
                      label: "Sexology ➀",
                      children: [
                        { label: "Heterosexism" },
                        { label: "Human sexual behavior" },
                        { label: "Human sexuality" },
                        { label: "Queer studies/Queer theory" },
                        { label: "Sex education" },
                      ]
                    },
                    { label: "Social capital" },
                    { label: "Social change" },
                    { label: "Social conflict theory" },
                    {
                      label: "Social control",
                      children: [
                        { label: "Pure sociology" },
                      ]
                    },
                    { label: "Social economy" },
                    { label: "Social philosophy" },
                    { label: "Social policy ➀" },
                    { label: "Social psychology ➁" },
                    { label: "Social stratification" },
                    { label: "Social theory" },
                    {
                      label: "Social transformation",
                      children: [
                        { label: "Computational sociology ➀" },
                        {
                          label: "Economic sociology/Socioeconomics",
                          children: [
                            { label: "Economic development" },
                            { label: "Social development" },
                          ]
                        },
                      ]
                    },
                    { label: "Sociobiology" },
                    { label: "Sociocybernetics ➀" },
                    { label: "Sociolinguistics ➁" },
                    { label: "Sociology of aging" },
                    { label: "Sociology of agriculture" },
                    { label: "Sociology of art" },
                    { label: "Sociology of autism" },
                    { label: "Sociology of childhood" },
                    { label: "Sociology of conflict" },
                    { label: "Sociology of culture" },
                    { label: "Sociology of cyberspace" },
                    { label: "Sociology of development" },
                    { label: "Sociology of deviance" },
                    { label: "Sociology of disaster" },
                    { label: "Sociology of education ➀" },
                    { label: "Sociology of emotions" },
                    { label: "Sociology of fatherhood" },
                    { label: "Sociology of finance" },
                    { label: "Sociology of food" },
                    { label: "Sociology of gender" },
                    { label: "Sociology of generations" },
                    { label: "Sociology of globalization" },
                    { label: "Sociology of government" },
                    { label: "Sociology of health and illness" },
                    { label: "Sociology of human consciousness" },
                    { label: "Sociology of immigration" },
                    { label: "Sociology of knowledge" },
                    { label: "Sociology of language" },
                    { label: "Sociology of law" },
                    { label: "Sociology of leisure" },
                    { label: "Sociology of literature" },
                    { label: "Sociology of markets" },
                    { label: "Sociology of marriage" },
                    { label: "Sociology of motherhood" },
                    { label: "Sociology of music" },
                    { label: "Sociology of natural resources" },
                    { label: "Sociology of organizations" },
                    { label: "Sociology of peace, war, and social conflict" },
                    { label: "Sociology of punishment" },
                    { label: "Sociology of race and ethnic relations" },
                    { label: "Sociology of religion" },
                    { label: "Sociology of risk" },
                    { label: "Sociology of science" },
                    { label: "Sociology of scientific knowledge" },
                    { label: "Sociology of social change" },
                    { label: "Sociology of social movements" },
                    { label: "Sociology of space" },
                    { label: "Sociology of sport ➀" },
                    { label: "Sociology of technology" },
                    { label: "Sociology of terrorism" },
                    { label: "Sociology of the body" },
                    { label: "Sociology of the family" },
                    { label: "Sociology of the history of science" },
                    { label: "Sociology of the Internet" },
                    { label: "Sociology of work" },
                    { label: "Sociomusicology" },
                    { label: "Structural sociology" },
                    { label: "Theoretical sociology" },
                    { label: "Urban studies or Urban sociology/Rural sociology" },
                    { label: "Victimology" },
                    { label: "Visual sociology" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "2.8 Social work",
                  children: [
                    { label: "Clinical social work" },
                    { label: "Community practice ➀" },
                    { label: "Mental health ➀" },
                    { label: "Psychosocial rehabilitation" },
                    { label: "Person-centered therapy" },
                    { label: "Family therapy" },
                    { label: "Financial social work" },
                  ]
                },

                // =========================================================================================================== //

              ]
            },

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

            {
              label: "3 Natural science",
              avatar: "../assets/academic-disciplines/academic-disciplines-3-natural-science.png",
              children: [

                // =========================================================================================================== //

                {
                  label: "3.1 Biology",
                  children: [
                    { label: "Aerobiology" },
                    {
                      label: "Anatomy",
                      children: [
                        { label: "Comparative anatomy" },
                        { label: "Human anatomy" },
                      ]
                    },
                    { label: "Biochemistry ➀" },
                    { label: "Bioinformatics" },
                    { label: "Biophysics ➀" },
                    { label: "Biotechnology" },
                    {
                      label: "Botany",
                      children: [
                        { label: "Ethnobotany" },
                        { label: "Phycology" },
                      ]
                    },
                    { label: "Cell biology" },
                    { label: "Chronobiology" },
                    { label: "Computational biology" },
                    { label: "Cryobiology" },
                    {
                      label: "Developmental biology",
                      children: [
                        { label: "Embryology" },
                        { label: "Teratology" },
                      ]
                    },
                    {
                      label: "Ecology ➀",
                      children: [
                        { label: "Agroecology ➀" },
                        { label: "Ethnoecology" },
                        { label: "Human ecology ➁" },
                        { label: "Landscape ecology ➁" },
                      ]
                    },
                    { label: "Endocrinology ➀" },
                    { label: "Epigenetics" },
                    {
                      label: "Ethnobiology",
                      children: [
                        { label: "Anthrozoology" },
                      ]
                    },
                    { label: "Evolutionary biology" },
                    {
                      label: "Genetics",
                      children: [
                        { label: "Behavioural genetics" },
                        { label: "Molecular genetics ➀" },
                        { label: "Population genetics" },
                      ]
                    },
                    { label: "Histology ➀" },
                    { label: "Human biology" },
                    { label: "Immunology" },
                    { label: "Limnology" },
                    { label: "Linnaean taxonomy" },
                    { label: "Marine biology" },
                    { label: "Mathematical biology" },
                    {
                      label: "Microbiology",
                      children: [
                        { label: "Bacteriology" },
                        { label: "Protistology" },
                      ]
                    },
                    { label: "Molecular biology ➀" },
                    { label: "Mycology" },
                    {
                      label: "Neuroscience",
                      children: [
                        { label: "Behavioral neuroscience" },
                      ]
                    },
                    { label: "Nutrition ➀" },
                    {
                      label: "Paleobiology ➀",
                      children: [
                        { label: "Paleontology ➀" },
                      ]
                    },
                    { label: "Parasitology ➀" },
                    {
                      label: "Pathology ➀",
                      children: [
                        { label: "Anatomical pathology" },
                        { label: "Clinical pathology" },
                        { label: "Dermatopathology" },
                        { label: "Forensic pathology" },
                        { label: "Hematopathology" },
                        { label: "Histopathology" },
                        { label: "Molecular pathology" },
                        { label: "Surgical pathology" },
                      ]
                    },
                    {
                      label: "Physiology",
                      children: [
                        {
                          label: "Human physiology",
                          children: [
                            { label: "Exercise physiology ➀" },
                          ]
                        },
                      ]
                    },
                    { label: "Structural Biology" },
                    { label: "Systematics (Taxonomy)" },
                    { label: "Systems biology ➀" },
                    {
                      label: "Virology",
                      children: [
                        { label: "Molecular virology" },
                      ]
                    },
                    { label: "Xenobiology" },
                    {
                      label: "Zoology",
                      children: [
                        { label: "Animal communications" },
                        { label: "Apiology" },
                        { label: "Arachnology" },
                        { label: "Arthropodology" },
                        { label: "Batrachology" },
                        { label: "Bryozoology" },
                        { label: "Carcinology" },
                        { label: "Cetology" },
                        { label: "Cnidariology" },
                        {
                          label: "Entomology ➀",
                          children: [
                            { label: "Forensic entomology" },
                          ]
                        },
                        { label: "Ethnozoology" },
                        { label: "Ethology" },
                        { label: "Helminthology" },
                        { label: "Herpetology" },
                        { label: "Ichthyology" },
                        { label: "Invertebrate zoology" },
                        {
                          label: "Mammalogy",
                          children: [
                            { label: "Cynology" },
                            { label: "Felinology" },
                          ]
                        },
                        {
                          label: "Malacology",
                          children: [
                            { label: "Conchology" },
                            { label: "Limacology" },
                            { label: "Teuthology" },
                          ]
                        },
                        { label: "Myriapodology" },
                        { label: "Myrmecology" },
                        { label: "Nematology" },
                        { label: "Neuroethology" },
                        { label: "Oology" },
                        { label: "Ornithology" },
                        { label: "Planktology" },
                        { label: "Primatology" },
                        { label: "Zootomy" },
                        { label: "Zoosemiotics" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "3.2 Chemistry",
                  children: [
                    { label: "Agrochemistry" },
                    { label: "Analytical chemistry" },
                    { label: "Astrochemistry" },
                    { label: "Atmospheric chemistry" },
                    { label: "Biochemistry ➁" },
                    { label: "Chemical biology" },
                    { label: "Chemical engineering" },
                    { label: "Cheminformatics" },
                    { label: "Computational chemistry ➀" },
                    { label: "Cosmochemistry" },
                    { label: "Electrochemistry" },
                    { label: "Environmental chemistry ➀" },
                    { label: "Femtochemistry" },
                    { label: "Flavor" },
                    { label: "Flow chemistry" },
                    { label: "Geochemistry ➁" },
                    { label: "Green chemistry" },
                    { label: "Histochemistry" },
                    { label: "Hydrogenation" },
                    { label: "Immunochemistry" },
                    { label: "Inorganic chemistry" },
                    { label: "Marine chemistry" },
                    { label: "Mathematical chemistry" },
                    { label: "Mechanochemistry" },
                    { label: "Medicinal chemistry" },
                    { label: "Molecular biology ➁" },
                    { label: "Molecular mechanics" },
                    { label: "Nanotechnology ➀" },
                    { label: "Natural product chemistry" },
                    { label: "Neurochemistry" },
                    { label: "Oenology" },
                    { label: "Organic chemistry" },
                    { label: "Organometallic chemistry" },
                    { label: "Petrochemistry" },
                    { label: "Pharmacology ➀" },
                    { label: "Photochemistry" },
                    { label: "Physical chemistry" },
                    { label: "Physical organic chemistry" },
                    { label: "Phytochemistry" },
                    { label: "Polymer chemistry" },
                    { label: "Quantum chemistry" },
                    { label: "Radiochemistry" },
                    { label: "Solid-state chemistry" },
                    { label: "Sonochemistry" },
                    { label: "Supramolecular chemistry" },
                    { label: "Surface chemistry" },
                    { label: "Synthetic chemistry" },
                    { label: "Theoretical chemistry" },
                    { label: "Thermochemistry" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "3.3 Earth science",
                  children: [
                    { label: "Edaphology" },
                    { label: "Environmental chemistry ➁" },
                    { label: "Environmental science" },
                    { label: "Gemology" },
                    { label: "Geochemistry ➂" },
                    { label: "Geodesy" },
                    {
                      label: "Physical geography ➁",
                      children: [
                        { label: "Atmospheric science / Meteorology" },
                        { label: "Biogeography / Phytogeography" },
                        { label: "Climatology / Paleoclimatology / Palaeogeography" },
                        { label: "Coastal geography / Oceanography" },
                        { label: "Edaphology / Pedology or Soil science" },
                        { label: "Geobiology ➁" },
                        { label: "Geology (Geomorphology, Mineralogy, Petrology, Sedimentology, Speleology, Tectonics, Volcanology)" },
                        { label: "Geostatistics" },
                        { label: "Glaciology ➁" },
                        { label: "Hydrology/ Limnology / Hydrogeology" },
                        { label: "Landscape ecology ➂" },
                        { label: "Quaternary science ➁" },
                      ]
                    },
                    { label: "Geophysics ➁" },
                    {
                      label: "Paleontology ➁",
                      children: [
                        { label: "Paleobiology ➁" },
                        { label: "Paleoecology" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "3.4 Space science",
                  children: [
                    { label: "Astrobiology" },
                    {
                      label: "Astronomy",
                      children: [
                        {
                          label: "Observational astronomy",
                          children: [
                            { label: "Gamma ray astronomy" },
                            { label: "Infrared astronomy" },
                            { label: "Microwave astronomy" },
                            { label: "Optical astronomy" },
                            { label: "Radio astronomy" },
                            { label: "UV astronomy" },
                            { label: "X-ray astronomy" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Astrophysics ➀",
                      children: [
                        {
                          label: "Gravitational astronomy",
                          children: [
                            { label: "Black holes" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Cosmology",
                      children: [
                        { label: "Physical cosmology" },
                      ]
                    },
                    { label: "Interstellar medium" },
                    {
                      label: "Numerical simulations",
                      children: [
                        { label: "Astrophysical plasma" },
                        { label: "Galaxy formation and evolution" },
                        { label: "High-energy astrophysics" },
                        { label: "Hydrodynamics" },
                        { label: "Magnetohydrodynamics" },
                        { label: "Star formation" },
                      ]
                    },
                    {
                      label: "Stellar astrophysics",
                      children: [
                        { label: "Helioseismology" },
                        { label: "Stellar evolution" },
                        { label: "Stellar nucleosynthesis" },
                      ]
                    },
                    { label: "Planetary science" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "3.5 Physics",
                  children: [
                    { label: "Acoustics" },
                    { label: "Aerodynamics" },
                    { label: "Applied physics ➀" },
                    { label: "Astrophysics ➁" },
                    { label: "Atomic, molecular, and optical physics" },
                    { label: "Biophysics ➁" },
                    { label: "Computational physics ➀" },
                    { label: "Condensed matter physics" },
                    { label: "Cryogenics" },
                    { label: "Electricity" },
                    { label: "Electromagnetism" },
                    { label: "Elementary particle physics" },
                    { label: "Experimental physics" },
                    { label: "Fluid dynamics" },
                    { label: "Geophysics ➂" },
                    { label: "Mathematical physics ➀" },
                    { label: "Mechanics" },
                    { label: "Medical physics" },
                    { label: "Molecular physics" },
                    { label: "Newtonian dynamics" },
                    { label: "Nuclear physics" },
                    { label: "Optics" },
                    { label: "Plasma physics" },
                    { label: "Quantum physics" },
                    { label: "Solid mechanics" },
                    { label: "Solid state physics" },
                    { label: "Statistical mechanics ➀" },
                    { label: "Theoretical physics" },
                    { label: "Thermal physics" },
                    { label: "Thermodynamics ➀" },
                  ]
                },

                // =========================================================================================================== //

              ]
            },

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

            {
              label: "4 Formal science",
              avatar: "../assets/academic-disciplines/academic-disciplines-4-formal-science.png",
              children: [

                // =========================================================================================================== //

                {
                  label: "4.1 Computer science",
                  children: [
                    {
                      label: "Logic in computer science",
                      children: [
                        { label: "Formal methods (Formal verification) ➀" },
                        { label: "Logic programming ➀" },
                        {
                          label: "Multi-valued logic",
                          children: [
                            { label: "Fuzzy logic" },
                          ]
                        },
                        { label: "Programming language semantics" },
                        { label: "Type theory ➀" },
                      ]
                    },
                    {
                      label: "Algorithms",
                      children: [
                        { label: "Computational geometry" },
                        { label: "Distributed algorithms" },
                        { label: "Parallel algorithms" },
                        { label: "Randomized algorithms" },
                      ]
                    },
                    {
                      label: "Artificial intelligence",
                      children: [
                        {
                          label: "Cognitive science",
                          children: [
                            { label: "Automated reasoning" },
                            { label: "Computer vision" },
                            {
                              label: "Machine learning",
                              children: [
                                { label: "Artificial neural networks" },
                              ]
                            },
                            { label: "Natural language processing (Computational linguistics)" },
                          ]
                        },
                        { label: "Expert systems" },
                        { label: "Robotics ➀" },
                      ]
                    },
                    { label: "Data structures" },
                    { label: "Computer architecture" },
                    {
                      label: "Computer graphics",
                      children: [
                        { label: "Image processing" },
                        { label: "Scientific visualization" },
                      ]
                    },
                    {
                      label: "Computer communications (networks)",
                      children: [
                        { label: "Cloud computing" },
                        { label: "Information theory ➀" },
                        { label: "Internet, World Wide Web" },
                        { label: "Ubiquitous computing" },
                        { label: "Wireless computing (Mobile computing)" },
                      ]
                    },
                    {
                      label: "Computer security and reliability",
                      children: [
                        { label: "Cryptography ➀" },
                        { label: "Fault-tolerant computing" },
                      ]
                    },
                    {
                      label: "Computing in mathematics, natural sciences, engineering, and medicine",
                      children: [
                        { label: "Algebraic (symbolic) computation" },
                        { label: "Computational biology (bioinformatics)" },
                        { label: "Computational chemistry ➁" },
                        { label: "Computational mathematics" },
                        { label: "Computational neuroscience" },
                        { label: "Computational number theory" },
                        { label: "Computational physics ➁" },
                        {
                          label: "Computer-aided engineering",
                          children: [
                            { label: "Computational fluid dynamics" },
                            { label: "Finite element analysis" },
                          ]
                        },
                        { label: "Numerical analysis ➀" },
                        { label: "Scientific computing (Computational science)" },
                      ]
                    },
                    {
                      label: "Computing in social sciences, arts, humanities, and professions",
                      children: [
                        { label: "Community informatics ➁" },
                        { label: "Computational economics ➁" },
                        { label: "Computational finance" },
                        { label: "Computational sociology ➁" },
                        { label: "Digital humanities (Humanities computing)" },
                        { label: "History of computer hardware" },
                        { label: "History of computer science" },
                        { label: "Humanistic informatics" },
                        {
                          label: "Databases",
                          children: [
                            { label: "Distributed databases" },
                            { label: "Object databases" },
                            { label: "Relational databases" },
                          ]
                        },
                        { label: "Data management" },
                        { label: "Data mining" },
                        { label: "Information architecture ➀" },
                        { label: "Information management" },
                        { label: "Information retrieval ➀" },
                        { label: "Knowledge management ➀" },
                        {
                          label: "Multimedia, hypermedia",
                          children: [
                            { label: "Sound and music computing" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Distributed computing",
                      children: [
                        { label: "Grid computing" },
                      ]
                    },
                    { label: "Human-computer interaction ➀" },
                    { label: "Operating systems" },
                    {
                      label: "Parallel computing",
                      children: [
                        { label: "High-performance computing" },
                      ]
                    },
                    {
                      label: "Programming languages",
                      children: [
                        { label: "Compilers" },
                        {
                          label: "Programming paradigms",
                          children: [
                            { label: "Concurrent programming" },
                            { label: "Functional programming" },
                            { label: "Imperative programming" },
                            { label: "Logic programming ➁" },
                            { label: "Object-oriented programming" },
                          ]
                        },
                        { label: "Program semantics" },
                        { label: "Type theory ➁" },
                      ]
                    },
                    { label: "Quantum computing ➀" },
                    {
                      label: "Software engineering",
                      children: [
                        { label: "Formal methods (Formal verification) ➁" },
                      ]
                    },
                    {
                      label: "Theory of computation ➀",
                      children: [
                        { label: "Automata theory (Formal languages)" },
                        { label: "Computability theory" },
                        { label: "Computational complexity theory ➀" },
                        { label: "Concurrency theory" },
                      ]
                    },
                    { label: "VLSI design" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "4.2 Pure Mathematics",
                  children: [
                    {
                      label: "Mathematical logic and Foundations of mathematics",
                      children: [
                        { label: "Intuitionistic logic" },
                        { label: "Modal logic" },
                        { label: "Model theory" },
                        { label: "Proof theory" },
                        { label: "Recursion theory" },
                        { label: "Set theory" },
                      ]
                    },
                    {
                      label: "Algebra",
                      children: [
                        { label: "Associative algebra" },
                        {
                          label: "Category theory",
                          children: [
                            { label: "Topos theory" },
                          ]
                        },
                        { label: "Differential algebra" },
                        { label: "Field theory" },
                        {
                          label: "Group theory",
                          children: [
                            { label: "Group representation" },
                          ]
                        },
                        { label: "Homological algebra" },
                        { label: "K-theory" },
                        { label: "Lattice theory (Order theory)" },
                        { label: "Lie algebra" },
                        { label: "Linear algebra (Vector space)" },
                        { label: "Multilinear algebra" },
                        { label: "Non-associative algebra" },
                        { label: "Representation theory" },
                        {
                          label: "Ring theory",
                          children: [
                            { label: "Commutative algebra" },
                            { label: "Noncommutative algebra" },
                          ]
                        },
                        { label: "Universal algebra" },
                      ]
                    },
                    {
                      label: "Analysis",
                      children: [
                        { label: "Complex analysis" },
                        {
                          label: "Functional analysis",
                          children: [
                            { label: "Operator theory" },
                          ]
                        },
                        {
                          label: "Harmonic analysis",
                          children: [
                            { label: "Fourier analysis" },
                          ]
                        },
                        { label: "Non-standard analysis" },
                        { label: "Ordinary differential equations" },
                        { label: "p-adic analysis" },
                        { label: "Partial differential equations" },
                        {
                          label: "Real analysis",
                          children: [
                            { label: "Calculus" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Probability theory",
                      children: [
                        { label: "Ergodic theory" },
                        {
                          label: "Measure theory",
                          children: [
                            { label: "Integral geometry ➀" },
                          ]
                        },
                        { label: "Stochastic process" },
                      ]
                    },
                    {
                      label: "Geometry and Topology",
                      children: [
                        { label: "Affine geometry" },
                        { label: "Algebraic geometry" },
                        { label: "Algebraic topology" },
                        { label: "Convex geometry" },
                        { label: "Differential topology" },
                        { label: "Discrete geometry" },
                        { label: "Finite geometry" },
                        { label: "Galois geometry" },
                        { label: "General topology" },
                        { label: "Geometric topology" },
                        { label: "Integral geometry ➁" },
                        { label: "Noncommutative geometry" },
                        { label: "Non-Euclidean geometry" },
                        { label: "Projective geometry" },
                      ]
                    },
                    {
                      label: "Number theory",
                      children: [
                        { label: "Algebraic number theory" },
                        { label: "Analytic number theory" },
                        { label: "Arithmetic combinatorics" },
                        { label: "Geometric number theory" },
                      ]
                    },
                  ]
                },

                {
                  label: "4.3 Applied Mathematics",
                  children: [
                    { label: "Approximation theory" },
                    {
                      label: "Combinatorics",
                      children: [
                        { label: "Coding theory" },
                      ]
                    },
                    { label: "Cryptography ➁" },
                    {
                      label: "Dynamical systems ➀",
                      children: [
                        { label: "Chaos theory ➀" },
                        { label: "Fractal geometry" },
                      ]
                    },
                    { label: "Game theory ➀" },
                    { label: "Graph theory" },
                    { label: "Information theory ➁" },
                    {
                      label: "Mathematical physics ➁",
                      children: [
                        { label: "Quantum field theory" },
                        {
                          label: "Quantum gravity",
                          children: [
                            { label: "String theory" },
                          ]
                        },
                        { label: "Quantum mechanics" },
                        { label: "Statistical mechanics ➁" },
                      ]
                    },
                    { label: "Numerical analysis ➁" },
                    {
                      label: "Operations research ➀",
                      children: [
                        { label: "Assignment problem" },
                        { label: "Decision analysis" },
                        { label: "Dynamic programming" },
                        { label: "Inventory theory" },
                        { label: "Linear programming" },
                        { label: "Mathematical optimization" },
                        { label: "Optimal maintenance" },
                        { label: "Real options analysis" },
                        { label: "Scheduling" },
                        { label: "Stochastic processes" },
                        { label: "Systems analysis ➀" },
                      ]
                    },
                    {
                      label: "Statistics ➀",
                      children: [
                        { label: "Actuarial science" },
                        { label: "Demography" },
                        { label: "Econometrics ➁" },
                        { label: "Mathematical statistics" },
                        { label: "Data visualization" },
                      ]
                    },
                    {
                      label: "Theory of computation ➁",
                      children: [
                        { label: "Computational complexity theory ➁" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

              ]
            },

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

            {
              label: "5 Applied science",
              avatar: "../assets/academic-disciplines/academic-disciplines-5-applied-science.png",
              children: [

                // =========================================================================================================== //

                {
                  label: "5.1 Agriculture",
                  children: [
                    { label: "Aeroponics" },
                    { label: "Agroecology ➁" },
                    { label: "Agrology" },
                    { label: "Agronomy" },
                    {
                      label: "Animal husbandry (Animal science)",
                      children: [
                        { label: "Beekeeping (Apiculture)" },
                      ]
                    },
                    { label: "Anthroponics" },
                    { label: "Agricultural economics ➁" },
                    {
                      label: "Agricultural engineering",
                      children: [
                        { label: "Biological systems engineering ➀" },
                        { label: "Food engineering ➀" },
                      ]
                    },
                    { label: "Aquaculture" },
                    { label: "Aquaponics" },
                    { label: "Enology" },
                    { label: "Entomology ➁" },
                    { label: "Fogponics" },
                    {
                      label: "Food science",
                      children: [
                        { label: "Culinary arts" },
                      ]
                    },
                    { label: "Forestry" },
                    { label: "Horticulture" },
                    { label: "Hydrology ➁" },
                    { label: "Hydroponics" },
                    { label: "Pedology" },
                    {
                      label: "Plant science",
                      children: [
                        { label: "Pomology" },
                      ]
                    },
                    { label: "Pest control" },
                    { label: "Purification" },
                    { label: "Viticulture" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.2 Architecture and design",
                  children: [
                    {
                      label: "Architecture ➁",
                      children: [
                        { label: "Interior architecture ➁" },
                        { label: "Landscape architecture ➁" },
                      ]
                    },
                    { label: "Architectural analytics ➁" },
                    { label: "Historic preservation ➁" },
                    { label: "Interior design (interior architecture) ➁" },
                    { label: "Landscape architecture (landscape planning)" },
                    { label: "Landscape design ➁" },
                    { label: "Urban planning (urban design)" },
                    {
                      label: "Visual communication",
                      children: [
                        {
                          label: "Graphic design",
                          children: [
                            { label: "Type design" },
                          ]
                        },
                        { label: "Technical drawing ➁" },
                      ]
                    },
                    {
                      label: "Industrial design (product design)",
                      children: [
                        { label: "Ergonomics ➀" },
                        { label: "Toy and amusement design ➀" },
                      ]
                    },
                    {
                      label: "User experience design",
                      children: [
                        { label: "Interaction design" },
                        { label: "Information architecture ➁" },
                        { label: "User interface design" },
                        { label: "User experience evaluation" },
                      ]
                    },
                    { label: "Decorative arts ➁" },
                    { label: "Fashion design" },
                    { label: "Textile design" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.3 Business",
                  children: [
                    {
                      label: "Accounting",
                      children: [
                        { label: "Accounting research" },
                        { label: "Accounting scholarship" },
                      ]
                    },
                    { label: "Business administration" },
                    { label: "Business analysis" },
                    { label: "Business ethics" },
                    { label: "Business law ➀" },
                    { label: "Business management" },
                    { label: "E-Business" },
                    { label: "Entrepreneurship" },
                    { label: "Finance" },
                    {
                      label: "Industrial and labor relations",
                      children: [
                        { label: "Collective bargaining" },
                        { label: "Human resources" },
                        { label: "Organizational studies ➁" },
                        { label: "Labor economics ➁" },
                        { label: "Labor history" },
                      ]
                    },
                    {
                      label: "Information systems (Business informatics)",
                      children: [
                        { label: "Management information systems" },
                        { label: "Health informatics" },
                      ]
                    },
                    { label: "Information technology" },
                    { label: "International trade" },
                    { label: "Management ➀" },
                    { label: "Marketing ➀" },
                    { label: "Operations management" },
                    { label: "Purchasing" },
                    { label: "Risk management and insurance" },
                    { label: "Systems science ➀" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.4 Divinity",
                  children: [
                    { label: "Canon law ➂" },
                    { label: "Church history" },
                    {
                      label: "Field ministry",
                      children: [
                        { label: "Pastoral counseling" },
                        { label: "Pastoral theology" },
                        { label: "Religious education techniques" },
                        { label: "Homiletics" },
                        { label: "Liturgy" },
                        { label: "Sacred music" },
                        { label: "Missiology" },
                      ]
                    },
                    { label: "Hermeneutics" },
                    {
                      label: "Scriptural study and languages",
                      children: [
                        { label: "Biblical Hebrew" },
                        { label: "Biblical studies/Sacred scripture" },
                        { label: "Vedic Study" },
                        { label: "New Testament Greek" },
                        { label: "Latin" },
                        { label: "Old Church Slavonic" },
                      ]
                    },
                    {
                      label: "Theology",
                      children: [
                        { label: "Dogmatic theology" },
                        { label: "Ecclesiology" },
                        { label: "Sacramental theology" },
                        { label: "Systematic theology" },
                        { label: "Christian ethics" },
                        { label: "Hindu ethics" },
                        { label: "Moral theology" },
                        { label: "Historical theology" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.5 Education",
                  children: [
                    { label: "Comparative education" },
                    { label: "Critical pedagogy" },
                    {
                      label: "Curriculum and instruction",
                      children: [
                        { label: "Alternative education" },
                        { label: "Early childhood education" },
                        { label: "Elementary education" },
                        { label: "Secondary education" },
                        { label: "Higher education" },
                        { label: "Mastery learning" },
                        { label: "Cooperative learning" },
                        { label: "Agricultural education" },
                        { label: "Art education" },
                        { label: "Bilingual education" },
                        { label: "Chemistry education" },
                        { label: "Counselor education" },
                        { label: "Language education" },
                        { label: "Legal education" },
                        { label: "Mathematics education" },
                        { label: "Medical education" },
                        { label: "Military education and training" },
                        { label: "Music education ➁" },
                        { label: "Nursing education" },
                        { label: "Outdoor education" },
                        { label: "Peace education" },
                        { label: "Physical education/Sports coaching" },
                        { label: "Physics education" },
                        { label: "Reading education" },
                        { label: "Religious education" },
                        { label: "Science education" },
                        { label: "Special education" },
                        { label: "Sex education ➁" },
                        { label: "Sociology of education ➁" },
                        { label: "Technology education" },
                        { label: "Vocational education" },
                      ]
                    },
                    { label: "Educational leadership" },
                    { label: "Educational philosophy" },
                    { label: "Educational psychology ➁" },
                    { label: "Educational technology" },
                    { label: "Distance education ➀" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.6 Engineering and technology",
                  children: [
                    {
                      label: "Chemical Engineering",
                      children: [
                        {
                          label: "Bioengineering",
                          children: [
                            { label: "Biochemical engineering" },
                            { label: "Biomolecular engineering" },
                          ]
                        },
                        { label: "Catalysis" },
                        { label: "Materials engineering" },
                        { label: "Molecular engineering" },
                        { label: "Nanotechnology ➁" },
                        { label: "Polymer engineering ➀" },
                        {
                          label: "Process design",
                          children: [
                            { label: "Petroleum engineering" },
                            { label: "Nuclear engineering" },
                            { label: "Food engineering ➁" },
                          ]
                        },
                        { label: "Process engineering" },
                        { label: "Reaction engineering" },
                        { label: "Thermodynamics ➁" },
                        { label: "Transport phenomena" },
                      ]
                    },
                    {
                      label: "Civil Engineering",
                      children: [
                        { label: "Coastal engineering" },
                        { label: "Earthquake engineering" },
                        { label: "Ecological engineering" },
                        { label: "Environmental engineering" },
                        {
                          label: "Geotechnical engineering",
                          children: [
                            { label: "Engineering geology" },
                          ]
                        },
                        { label: "Hydraulic engineering" },
                        { label: "Mining engineering" },
                        {
                          label: "Transportation engineering",
                          children: [
                            { label: "Highway engineering" },
                          ]
                        },
                        {
                          label: "Structural engineering",
                          children: [
                            { label: "Architectural engineering" },
                          ]
                        },
                        { label: "Structural mechanics" },
                        { label: "Surveying" },
                      ]
                    },
                    {
                      label: "Educational Technology",
                      children: [
                        {
                          label: "Instructional design",
                          children: [
                            { label: "Distance education ➁" },
                            { label: "Instructional simulation" },
                          ]
                        },
                        { label: "Human performance technology" },
                        { label: "Knowledge management ➁" },
                      ]
                    },
                    {
                      label: "Electrical Engineering",
                      children: [
                        { label: "Applied physics ➁" },
                        { label: "Computer engineering" },
                        { label: "Computer science" },
                        {
                          label: "Control systems engineering",
                          children: [
                            { label: "Control theory ➀" },
                          ]
                        },
                        {
                          label: "Electronic engineering",
                          children: [
                            { label: "Instrumentation engineering" },
                          ]
                        },
                        {
                          label: "Engineering physics",
                          children: [
                            { label: "Photonics ➀" },
                          ]
                        },
                        { label: "Information theory ➂" },
                        { label: "Mechatronics ➀" },
                        { label: "Power engineering" },
                        { label: "Quantum computing ➁" },
                        { label: "Robotics ➁" },
                        { label: "Semiconductors ➀" },
                        { label: "Telecommunications engineering" },
                      ]
                    },
                    {
                      label: "Materials Science and Engineering",
                      children: [
                        { label: "Biomaterials" },
                        { label: "Ceramic engineering" },
                        { label: "Crystallography" },
                        { label: "Nanomaterials" },
                        { label: "Photonics ➁" },
                        { label: "Physical Metallurgy" },
                        { label: "Polymer engineering ➁" },
                        { label: "Polymer science" },
                        { label: "Semiconductors ➁" },
                      ]
                    },
                    {
                      label: "Mechanical Engineering",
                      children: [
                        {
                          label: "Aerospace engineering",
                          children: [
                            { label: "Aeronautics" },
                            { label: "Astronautics" },
                          ]
                        },
                        { label: "Acoustical engineering" },
                        { label: "Automotive engineering" },
                        {
                          label: "Biomedical engineering",
                          children: [
                            { label: "Biomechanical engineering" },
                            { label: "Neural engineering" },
                          ]
                        },
                        { label: "Continuum mechanics" },
                        { label: "Fluid mechanics" },
                        { label: "Heat transfer" },
                        { label: "Industrial engineering" },
                        { label: "Manufacturing engineering" },
                        { label: "Marine engineering" },
                        { label: "Mass transfer" },
                        { label: "Mechatronics ➁" },
                        { label: "Nanoengineering" },
                        { label: "Ocean engineering" },
                        { label: "Optical engineering" },
                        { label: "Robotics ➂" },
                        { label: "Thermodynamics ➂" },
                      ]
                    },
                    {
                      label: "Systems science ➁",
                      children: [
                        { label: "Chaos theory ➁" },
                        { label: "Complex systems" },
                        { label: "Conceptual systems" },
                        {
                          label: "Control theory ➁",
                          children: [
                            { label: "Affect control theory" },
                            { label: "Control engineering" },
                            { label: "Control systems" },
                            { label: "Dynamical systems ➁" },
                            { label: "Perceptual control theory" },
                          ]
                        },
                        {
                          label: "Cybernetics",
                          children: [
                            { label: "Biocybernetics" },
                            { label: "Engineering cybernetics" },
                            { label: "Management cybernetics" },
                            { label: "Medical cybernetics" },
                            { label: "New Cybernetics" },
                            { label: "Second-order cybernetics" },
                            { label: "Sociocybernetics ➁" },
                          ]
                        },
                        { label: "Network science" },
                        { label: "Operations research ➁" },
                        {
                          label: "Systems biology ➁",
                          children: [
                            { label: "Computational systems biology" },
                            { label: "Synthetic biology" },
                            { label: "Systems immunology" },
                            { label: "Systems neuroscience" },
                          ]
                        },
                        {
                          label: "System dynamics",
                          children: [
                            { label: "Social dynamics" },
                          ]
                        },
                        {
                          label: "Systems ecology",
                          children: [
                            { label: "Ecosystem ecology" },
                          ]
                        },
                        {
                          label: "Systems engineering",
                          children: [
                            { label: "Biological systems engineering ➁" },
                            { label: "Earth systems engineering and management" },
                            { label: "Enterprise systems engineering" },
                            { label: "Systems analysis ➁" },
                          ]
                        },
                        {
                          label: "Systems psychology",
                          children: [
                            { label: "Ergonomics ➁" },
                            { label: "Family systems theory" },
                            { label: "Systemic therapy" },
                          ]
                        },
                        {
                          label: "Systems theory",
                          children: [
                            { label: "Biochemical systems theory" },
                            { label: "Ecological systems theory" },
                            { label: "Developmental systems theory" },
                            { label: "General systems theory" },
                            { label: "Living systems theory" },
                            { label: "LTI system theory" },
                            { label: "Mathematical system theory" },
                            { label: "Sociotechnical systems theory" },
                            { label: "World-systems theory" },
                          ]
                        },
                        { label: "Systems theory in anthropology" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.7 Environmental studies and forestry",
                  children: [
                    {
                      label: "Environmental management",
                      children: [
                        { label: "Coastal management" },
                        { label: "Fisheries management" },
                        { label: "Land management" },
                        { label: "Natural resource management" },
                        { label: "Waste management" },
                        { label: "Wildlife management" },
                      ]
                    },
                    { label: "Environmental policy ➀" },
                    { label: "Wildlife observation" },
                    { label: "Recreation ecology" },
                    { label: "Silviculture" },
                    {
                      label: "Sustainability studies",
                      children: [
                        { label: "Sustainable development" },
                      ]
                    },
                    { label: "Toxicology" },
                    { label: "Ecology ➁" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.8 Family and consumer science",
                  children: [
                    { label: "Consumer education" },
                    { label: "Housing" },
                    { label: "Interior design" },
                    {
                      label: "Nutrition ➁",
                      children: [
                        { label: "Foodservice management" },
                      ]
                    },
                    { label: "Textiles" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.9 Human physical performance and recreation",
                  children: [
                    { label: "Biomechanics / Sports biomechanics" },
                    { label: "Sports coaching" },
                    { label: "Escapology" },
                    { label: "Ergonomics ➂" },
                    {
                      label: "Physical fitness ➀",
                      children: [
                        { label: "Aerobics" },
                        { label: "Personal trainer / Personal fitness training" },
                      ]
                    },
                    { label: "Game design" },
                    { label: "Exercise physiology ➁" },
                    { label: "Kinesiology / Exercise physiology / Performance science" },
                    { label: "Leisure studies ➁" },
                    { label: "Navigation" },
                    { label: "Outdoor activity" },
                    { label: "Physical activity" },
                    { label: "Physical education / Pedagogy" },
                    { label: "Sociology of sport ➁" },
                    { label: "Sexology ➁" },
                    { label: "Sports / exercise" },
                    { label: "Sports journalism / sportscasting ➀" },
                    {
                      label: "Sport management",
                      children: [
                        { label: "Athletic director" },
                      ]
                    },
                    { label: "Sport psychology ➁" },
                    {
                      label: "Sports medicine ➀",
                      children: [
                        { label: "Athletic training" },
                      ]
                    },
                    {
                      label: "Survival skills",
                      children: [
                        { label: "Batoning" },
                        { label: "Bushcraft" },
                        { label: "Scoutcraft" },
                        { label: "Woodcraft" },
                      ]
                    },
                    { label: "Toy and amusement design ➁" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.10 Journalism, media studies and communication",
                  children: [
                    {
                      label: "Journalism",
                      children: [
                        { label: "Broadcast journalism" },
                        { label: "Digital journalism" },
                        { label: "Literary journalism" },
                        { label: "New media journalism" },
                        { label: "Print journalism" },
                        { label: "Sports journalism / sportscasting ➁" },
                      ]
                    },
                    {
                      label: "Media studies (Mass media)",
                      children: [
                        { label: "Newspaper" },
                        { label: "Magazine" },
                        { label: "Radio" },
                        {
                          label: "Television ➁",
                          children: [
                            { label: "Television studies ➁" },
                          ]
                        },
                        {
                          label: "Film ➁",
                          children: [
                            { label: "Film studies" },
                          ]
                        },
                        { label: "Game studies" },
                        { label: "Fan studies" },
                      ]
                    },
                    {
                      label: "Narratology",
                      children: [
                        { label: "Internet" },
                      ]
                    },
                    {
                      label: "Communication studies",
                      children: [
                        { label: "Advertising" },
                        { label: "Animal communication" },
                        { label: "Communication design" },
                        { label: "Conspiracy theory" },
                        { label: "Digital media" },
                        { label: "Electronic media" },
                        { label: "Environmental communication" },
                        { label: "Hoax" },
                        { label: "Information theory ➃" },
                        { label: "Intercultural communication" },
                        { label: "Marketing ➁" },
                        { label: "Mass communication" },
                        { label: "Nonverbal communication" },
                        { label: "Organizational communication" },
                        { label: "Popular culture studies" },
                        { label: "Propaganda" },
                        { label: "Public relations" },
                        { label: "Speech communication" },
                        { label: "Technical writing" },
                        { label: "Translation" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.11 Law",
                  children: [
                    {
                      label: "Legal management ➁",
                      children: [
                        { label: "Corporate law ➁" },
                        { label: "Mercantile law" },
                        { label: "Business law ➁" },
                      ]
                    },
                    { label: "Administrative law ➁" },
                    { label: "Canon law ➀" },
                    { label: "Comparative law ➁" },
                    { label: "Constitutional law ➁" },
                    { label: "Competition law ➁" },
                    {
                      label: "Criminal law ➁",
                      children: [
                        { label: "Criminal procedure ➁" },
                        {
                          label: "Criminal justice ➁",
                          children: [
                            { label: "Police science ➁" },
                            { label: "Forensic science ➁" },
                          ]
                        },
                      ]
                    },
                    { label: "Islamic law ➁" },
                    { label: "Jewish law ➁" },
                    { label: "Jurisprudence (Philosophy of Law) ➁" },
                    {
                      label: "Civil law ➁",
                      children: [
                        { label: "Admiralty law ➁" },
                        { label: "Animal law/Animal rights ➁" },
                        { label: "Common law ➁" },
                        { label: "Corporations ➁" },
                        { label: "Civil procedure ➁" },
                        { label: "Contract law ➁" },
                        { label: "Environmental law ➁" },
                        { label: "Family law ➁" },
                        { label: "Federal law ➁" },
                        {
                          label: "International law ➁",
                          children: [
                            { label: "Public international law ➁" },
                            { label: "Supranational law ➁" },
                          ]
                        },
                        { label: "Labor law ➁" },
                        { label: "Paralegal studies" },
                        { label: "Property law ➁" },
                        { label: "Tax law ➁" },
                        { label: "Tort law ➁" },
                      ]
                    },
                    { label: "Law enforcement ➀" },
                    { label: "Procedural law ➁" },
                    { label: "Substantive law ➁" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.12 Library and museum studies",
                  children: [
                    { label: "Archival science" },
                    { label: "Archivist" },
                    { label: "Bibliographic databases" },
                    { label: "Bibliometrics" },
                    { label: "Bookmobile" },
                    {
                      label: "Cataloging",
                      children: [
                        { label: "Citation analysis" },
                      ]
                    },
                    { label: "Categorization" },
                    {
                      label: "Classification",
                      children: [
                        { label: "Library classification" },
                        { label: "Taxonomic classification" },
                        { label: "Scientific classification" },
                        { label: "Statistical classification" },
                        { label: "Security classification" },
                        { label: "Film classification" },
                      ]
                    },
                    { label: "Collections care" },
                    { label: "Collection management" },
                    { label: "Collection Management Policy" },
                    { label: "Conservation science" },
                    { label: "Conservation and restoration of cultural heritage" },
                    { label: "Curator" },
                    { label: "Data storage" },
                    { label: "Database management" },
                    { label: "Data modeling" },
                    { label: "Digital preservation" },
                    { label: "Dissemination" },
                    { label: "Film preservation" },
                    { label: "Five laws of library science" },
                    { label: "Historic preservation ➂" },
                    { label: "History of library science" },
                    { label: "Human-computer interaction ➁" },
                    { label: "Indexer" },
                    { label: "Informatics" },
                    { label: "Information architecture ➂" },
                    { label: "Information broker" },
                    { label: "Information literacy" },
                    { label: "Information retrieval ➁" },
                    { label: "Information science" },
                    { label: "Information systems and technology" },
                    { label: "Integrated library system" },
                    { label: "Interlibrary loan" },
                    { label: "Knowledge engineering" },
                    { label: "Knowledge management ➂" },
                    { label: "Library" },
                    { label: "Library binding" },
                    { label: "Library circulation" },
                    { label: "Library instruction" },
                    { label: "Library portal" },
                    { label: "Library technical services" },
                    { label: "Management ➁" },
                    { label: "Mass deacidification" },
                    { label: "Museology" },
                    {
                      label: "Museum education",
                      children: [
                        { label: "Museum administration" },
                      ]
                    },
                    { label: "Object conservation" },
                    { label: "Preservation" },
                    { label: "Prospect research" },
                    { label: "Readers' advisory" },
                    { label: "Records management" },
                    { label: "Reference" },
                    { label: "Reference desk" },
                    { label: "Reference management software" },
                    { label: "Registrar" },
                    { label: "Research methods" },
                    { label: "Slow fire" },
                    { label: "Special library" },
                    { label: "Statistics ➁" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.13 Medicine and health",
                  children: [
                    { label: "Alternative medicine" },
                    { label: "Audiology" },
                    {
                      label: "Clinical laboratory sciences/Clinical pathology/Laboratory medicine",
                      children: [
                        { label: "Clinical biochemistry" },
                        { label: "Cytogenetics" },
                        { label: "Cytohematology" },
                        { label: "Cytology" },
                        { label: "Haemostasiology" },
                        { label: "Histology ➁" },
                        { label: "Clinical immunology" },
                        { label: "Clinical microbiology" },
                        { label: "Molecular genetics ➁" },
                        { label: "Parasitology ➁" },
                      ]
                    },
                    { label: "Clinical physiology" },
                    {
                      label: "Dentistry",
                      children: [
                        { label: "Dental hygiene and epidemiology" },
                        { label: "Dental surgery" },
                        { label: "Endodontics" },
                        { label: "Implantology" },
                        { label: "Oral and maxillofacial surgery" },
                        { label: "Orthodontics" },
                        { label: "Periodontics" },
                        { label: "Prosthodontics" },
                      ]
                    },
                    { label: "Dermatology" },
                    { label: "Emergency medicine" },
                    { label: "Epidemiology" },
                    { label: "Geriatrics" },
                    { label: "Gynaecology" },
                    { label: "Health informatics/Clinical informatics" },
                    { label: "Hematology" },
                    { label: "Holistic medicine" },
                    { label: "Infectious disease" },
                    { label: "Intensive care medicine" },
                    {
                      label: "Internal medicine",
                      children: [
                        {
                          label: "Cardiology",
                          children: [
                            { label: "Cardiac electrophysiology" },
                          ]
                        },
                        { label: "Endocrinology ➁" },
                        { label: "Gastroenterology" },
                        { label: "Hepatology" },
                        { label: "Nephrology" },
                        { label: "Neurology" },
                        { label: "Oncology" },
                        { label: "Pulmonology" },
                        { label: "Rheumatology" },
                      ]
                    },
                    { label: "Medical toxicology" },
                    { label: "Music therapy" },
                    { label: "Nursing" },
                    { label: "Nutrition and dietetics" },
                    { label: "Obstetrics" },
                    { label: "Occupational hygiene" },
                    { label: "Occupational therapy" },
                    { label: "Occupational toxicology" },
                    {
                      label: "Ophthalmology",
                      children: [
                        { label: "Neuro-ophthalmology" },
                      ]
                    },
                    { label: "Optometry" },
                    { label: "Otolaryngology" },
                    { label: "Pathology ➁" },
                    { label: "Pediatrics" },
                    {
                      label: "Pharmaceutical sciences",
                      children: [
                        { label: "Pharmaceutical chemistry" },
                        { label: "Pharmaceutical toxicology" },
                        { label: "Pharmaceutics" },
                        { label: "Pharmacocybernetics" },
                        { label: "Pharmacodynamics" },
                        { label: "Pharmacogenomics" },
                        { label: "Pharmacognosy" },
                        { label: "Pharmacokinetics" },
                        { label: "Pharmacology ➁" },
                        { label: "Pharmacy" },
                      ]
                    },
                    {
                      label: "Physical fitness ➁",
                      children: [
                        { label: "Group Fitness / aerobics" },
                        { label: "Kinesiology / Exercise science / Human performance" },
                        { label: "Personal fitness training" },
                      ]
                    },
                    { label: "Physical therapy" },
                    { label: "Physiotherapy" },
                    { label: "Podiatry" },
                    { label: "Preventive medicine" },
                    {
                      label: "Primary care",
                      children: [
                        { label: "General practice" },
                      ]
                    },
                    {
                      label: "Psychiatry",
                      children: [
                        { label: "Forensic psychiatry" },
                      ]
                    },
                    { label: "Psychology" },
                    { label: "Public health" },
                    { label: "Radiology" },
                    { label: "Recreational therapy" },
                    { label: "Rehabilitation medicine" },
                    { label: "Respiratory therapy" },
                    { label: "Sleep medicine" },
                    { label: "Speech–language pathology" },
                    { label: "Sports medicine ➁" },
                    {
                      label: "Surgery",
                      children: [
                        { label: "Bariatric surgery" },
                        { label: "Cardiothoracic surgery" },
                        { label: "Neurosurgery" },
                        { label: "Orthoptics" },
                        { label: "Orthopedic surgery" },
                        { label: "Plastic surgery" },
                        { label: "Trauma surgery" },
                        { label: "Traumatology" },
                      ]
                    },
                    { label: "Traditional medicine" },
                    {
                      label: "Urology",
                      children: [
                        { label: "Andrology" },
                      ]
                    },
                    { label: "Veterinary medicine" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.14 Military sciences",
                  children: [
                    { label: "Amphibious warfare" },
                    { label: "Artillery ➀" },
                    {
                      label: "Battlespace",
                      children: [
                        { label: "Air" },
                        { label: "Information" },
                        { label: "Land" },
                        { label: "Sea" },
                        { label: "Space" },
                      ]
                    },
                    { label: "Campaigning" },
                    { label: "Military engineering" },
                    { label: "Doctrine ➀" },
                    { label: "Espionage" },
                    { label: "Game theory ➁" },
                    {
                      label: "Grand strategy",
                      children: [
                        { label: "Containment" },
                        { label: "Limited war" },
                        { label: "Military science" },
                        { label: "Philosophy of war" },
                        { label: "Strategic studies" },
                        { label: "Total war" },
                        { label: "War" },
                      ]
                    },
                    { label: "Leadership" },
                    {
                      label: "Logistics ➀",
                      children: [
                        { label: "Materiel" },
                        { label: "Supply chain management" },
                      ]
                    },
                    { label: "Military operation ➀" },
                    {
                      label: "Military history",
                      children: [
                        { label: "Prehistoric" },
                        { label: "Ancient" },
                        { label: "Medieval" },
                        { label: "Early modern" },
                        { label: "Industrial" },
                        { label: "Modern" },
                        { label: "Fourth-generation warfare" },
                      ]
                    },
                    { label: "Military intelligence" },
                    { label: "Military law" },
                    { label: "Military medicine" },
                    {
                      label: "Naval science",
                      children: [
                        { label: "Naval engineering" },
                        { label: "Naval tactics ➀" },
                        { label: "Naval architecture" },
                      ]
                    },
                    {
                      label: "Organization",
                      children: [
                        { label: "Command and control" },
                        { label: "Doctrine ➁" },
                        { label: "Education and training" },
                        { label: "Engineers" },
                        { label: "Intelligence" },
                        { label: "Ranks" },
                        { label: "Staff" },
                        { label: "Technology and equipment" },
                        { label: "Military exercises" },
                        { label: "Military simulation" },
                        { label: "Military sports" },
                      ]
                    },
                    {
                      label: "Strategy",
                      children: [
                        { label: "Attrition" },
                        { label: "Deception" },
                        { label: "Defensive" },
                        { label: "Offensive" },
                        { label: "Counter-offensive" },
                        { label: "Maneuver" },
                        { label: "Goal" },
                        { label: "Naval" },
                      ]
                    },
                    {
                      label: "Tactics",
                      children: [
                        { label: "Aerial" },
                        { label: "Battle" },
                        { label: "Cavalry ➀" },
                        { label: "Charge" },
                        { label: "Counter-attack" },
                        { label: "Counter-insurgency" },
                        { label: "Counter-intelligence" },
                        { label: "Counter-terrorism" },
                        { label: "Foxhole" },
                        { label: "Endemic warfare" },
                        { label: "Guerrilla warfare" },
                        { label: "Infiltration" },
                        { label: "Irregular warfare" },
                        { label: "Morale" },
                        { label: "Naval tactics ➁" },
                        { label: "Siege" },
                        { label: "Surgical strike" },
                        { label: "Tactical objective" },
                        { label: "Trench warfare" },
                      ]
                    },
                    {
                      label: "Military weapons",
                      children: [
                        { label: "Armor" },
                        { label: "Artillery ➁" },
                        { label: "Biological" },
                        { label: "Cavalry ➁" },
                        { label: "Conventional" },
                        { label: "Chemical" },
                        { label: "Cyber" },
                        { label: "Economic" },
                        { label: "Electronic" },
                        { label: "Infantry" },
                        { label: "Nuclear" },
                        { label: "Psychological" },
                        { label: "Unconventional" },
                      ]
                    },
                    {
                      label: "Other Military",
                      children: [
                        { label: "Arms control" },
                        { label: "Arms race" },
                        { label: "Assassination" },
                        { label: "Asymmetric warfare" },
                        { label: "Civil defense" },
                        { label: "Clandestine operation" },
                        { label: "Collateral damage" },
                        { label: "Cold war (general term)" },
                        { label: "Combat" },
                        { label: "Covert operation" },
                        { label: "Cyberwarfare" },
                        { label: "Defense industry" },
                        { label: "Disarmament" },
                        { label: "Intelligence agency" },
                        { label: "Laws of war" },
                        { label: "Mercenary" },
                        { label: "Military campaign" },
                        { label: "Military operation ➁" },
                        { label: "Mock combat" },
                        { label: "Network-centric warfare" },
                        { label: "Paramilitary" },
                        { label: "Principles of war" },
                        { label: "Private defense agency" },
                        { label: "Private military company" },
                        { label: "Proxy war" },
                        { label: "Religious war" },
                        { label: "Security" },
                        { label: "Special forces" },
                        { label: "Special operations" },
                        { label: "Theater (warfare)" },
                        { label: "Theft" },
                        { label: "Undercover" },
                        { label: "War crimes" },
                        { label: "Warrior" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.15 Public administration",
                  children: [
                    { label: "Civil service" },
                    { label: "Corrections ➀" },
                    { label: "Conservation biology" },
                    { label: "Criminal justice ➂" },
                    { label: "Disaster research" },
                    { label: "Disaster response" },
                    { label: "Emergency management ➁" },
                    { label: "Emergency services" },
                    { label: "Fire safety (Structural fire protection)" },
                    { label: "Fire ecology (Wildland fire management)" },
                    { label: "Governmental affairs" },
                    { label: "International affairs" },
                    { label: "Law enforcement ➁" },
                    { label: "Peace and conflict studies ➁" },
                    { label: "Police science ➂" },
                    {
                      label: "Policy studies ➁",
                      children: [
                        { label: "Policy analysis" },
                      ]
                    },
                    {
                      label: "Public administration ➁",
                      children: [
                        { label: "Nonprofit administration" },
                        { label: "Non-governmental organization (NGO) administration" },
                        { label: "Public policy doctrine" },
                        { label: "Public policy school" },
                        { label: "Regulation" },
                      ]
                    },
                    { label: "Public safety" },
                    { label: "Public service" },
                    {
                      label: "Public policy",
                      children: [
                        { label: "Agricultural policy" },
                        { label: "Commercial policy" },
                        { label: "Cultural policy" },
                        { label: "Domestic policy" },
                        {
                          label: "Drug policy",
                          children: [
                            { label: "Drug policy reform" },
                          ]
                        },
                        {
                          label: "Economic policy",
                          children: [
                            { label: "Fiscal policy" },
                            { label: "Incomes policy" },
                            { label: "Industrial policy" },
                            { label: "Investment policy" },
                            { label: "Monetary policy" },
                            { label: "Tax policy" },
                          ]
                        },
                        { label: "Education policy" },
                        {
                          label: "Energy policy",
                          children: [
                            { label: "Nuclear energy policy" },
                            { label: "Renewable energy policy" },
                          ]
                        },
                        { label: "Environmental policy ➁" },
                        { label: "Food policy" },
                        { label: "Foreign policy" },
                        {
                          label: "Health policy",
                          children: [
                            { label: "Pharmaceutical policy" },
                            { label: "Vaccination policy" },
                          ]
                        },
                        { label: "Housing policy" },
                        { label: "Immigration policy" },
                        { label: "Knowledge policy" },
                        { label: "Language policy" },
                        { label: "Military policy" },
                        {
                          label: "Science policy",
                          children: [
                            { label: "Climate change policy" },
                            { label: "Stem cell research policy" },
                            { label: "Space policy" },
                            { label: "Technology policy" },
                          ]
                        },
                        { label: "Security policy" },
                        { label: "Social policy ➁" },
                        { label: "Public policy by country" },
                      ]
                    },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.16 Social work",
                  children: [
                    { label: "Child welfare" },
                    {
                      label: "Community practice ➁",
                      children: [
                        { label: "Community organizing" },
                        { label: "Social policy ➂" },
                      ]
                    },
                    { label: "Human Services" },
                    { label: "Corrections ➁" },
                    { label: "Gerontology" },
                    { label: "Medical social work" },
                    { label: "Mental health ➁" },
                    { label: "School social work" },
                  ]
                },

                // =========================================================================================================== //

                {
                  label: "5.17 Transportation",
                  children: [
                    { label: "Highway safety" },
                    { label: "Infographics" },
                    { label: "Intermodal transportation studies" },
                    { label: "Logistics ➁" },
                    {
                      label: "Marine transportation",
                      children: [
                        { label: "Port management" },
                        { label: "Seafaring" },
                      ]
                    },
                    { label: "Operations research ➂" },
                    { label: "Mass transit" },
                    { label: "Travel" },
                    { label: "Vehicles" },
                  ]
                },

                // =========================================================================================================== //

              ]
            },

            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
            // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

          ]
        }
      ],

      resetFilter() {
        filter.value = "";
        filterRef.value.focus();
      }
    };
  }
});

app.use(Quasar, { config: {} });
app.mount("#q-app");