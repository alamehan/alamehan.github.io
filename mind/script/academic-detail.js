/*
CATATAN PENTING:

Ubah setiap nama variable:
- var_tree_academic_detail
- var_hierarchy_academic_detail
- var_select_academic_detail
- var_data_academic_detail
- MyTree_academic_detail
- myTree_academic_detail
- .hierarchy-container-academic-detail

Sesuai keperluan. Gunakan CTRL+H untuk "replace all", pastikan Match Case aktif.
*/



"use strict";

/*jshint esversion: 6 */
(function () {
  'use strict';
}());

let var_tree_academic_detail = d3.tree;
let var_hierarchy_academic_detail = d3.hierarchy;
let var_select_academic_detail = d3.select;
let var_data_academic_detail = {
  "name": "Outline of Acedemic Disciplines",
  "children": [

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📕 1 Humanities",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 1.1 Performing arts",
          "children": [
            {
              "name": "Music",
              "children": [
                { "name": "Accompanying" },
                { "name": "Chamber music" },
                { "name": "Church music" },
                {
                  "name": "Conducting",
                  "children": [
                    { "name": "Choral conducting" },
                    { "name": "Orchestral conducting" },
                    { "name": "Wind ensemble conducting" },
                  ]
                },
                { "name": "Early music" },
                { "name": "Jazz studies (outline)" },
                { "name": "Musical composition" },
                { "name": "Music education" },
                { "name": "Music history" },
                {
                  "name": "Musicology",
                  "children": [
                    { "name": "Historical musicology" },
                    { "name": "Systematic musicology" },
                  ]
                },
                { "name": "Ethnomusicology" },
                { "name": "Music theory" },
                { "name": "Orchestral studies" },
                {
                  "name": "Organology",
                  "children": [
                    { "name": "Organ and historical keyboards" },
                    { "name": "Piano" },
                    { "name": "Strings, harp, oud, and guitar (outline)" },
                    { "name": "Singing" },
                    { "name": "Woodwinds, brass, and percussion" },
                  ]
                },
                { "name": "Recording" },
              ]
            },
            {
              "name": "Dance",
              "children": [
                { "name": "Choreography" },
                { "name": "Dance notation" },
                { "name": "Ethnochoreology" },
                { "name": "History of dance" },
              ]
            },
            {
              "name": "Television",
              "children": [
                { "name": "Television studies" },
              ]
            },
            {
              "name": "Theatre",
              "children": [
                { "name": "Acting" },
                { "name": "Directing" },
                { "name": "Dramaturgy" },
                { "name": "History" },
                { "name": "Musical theatre" },
                { "name": "Playwrighting" },
                { "name": "Puppetry" },
                { "name": "Scenography" },
                { "name": "Stage design" },
                { "name": "Ventriloquism" },
              ]
            },
            {
              "name": "Film",
              "children": [
                { "name": "Animation" },
                { "name": "Film criticism" },
                { "name": "Filmmaking" },
                { "name": "Film theory" },
                { "name": "Live action" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.2 Visual arts",
          "children": [
            {
              "name": "Applied arts",
              "children": [
                { "name": "Animation" },
                { "name": "Calligraphy" },
                { "name": "Decorative arts" },
                { "name": "Mixed media" },
                { "name": "Printmaking" },
                { "name": "Studio art" },
                {
                  "name": "Architecture (Outline of architecture)",
                  "children": [
                    { "name": "Interior architecture" },
                    {
                      "name": "Landscape architecture",
                      "children": [
                        { "name": "Landscape design" },
                        { "name": "Landscape planning" },
                      ]
                    },
                    { "name": "Architectural analytics" },
                    { "name": "Historic preservation" },
                    { "name": "Interior design (interior architecture)" },
                    { "name": "Technical drawing" },
                  ]
                },
              ]
            },
            {
              "name": "Fashion",
            },
            {
              "name": "Fine arts",
              "children": [
                {
                  "name": "Graphic arts", "children": [
                    { "name": "Drawing (outline)" },
                    { "name": "Painting (outline)" },
                    { "name": "Photography (outline)" },
                  ]
                },
                { "name": "Sculpture (outline)" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.3 History",
          "children": [
            { "name": "African history" },
            { "name": "American history" },
            {
              "name": "Ancient history",
              "children": [
                { "name": "Ancient Egypt" },
                { "name": "Carthage" },
                { "name": "Ancient Greek history (outline)" },
                { "name": "Ancient Roman history (outline)" },
                { "name": "Assyrian Civilization" },
                { "name": "Bronze Age Civilizations" },
                { "name": "Biblical history" },
                { "name": "History of the Indus Valley Civilization" },
                { "name": "Preclassic Maya" },
                { "name": "History of Mesopotamia" },
                { "name": "The Stone Age" },
                { "name": "History of the Yangtze civilization" },
                { "name": "History of the Yellow River civilization" },
              ]
            },
            {
              "name": "Asian history",
              "children": [
                { "name": "Chinese history" },
                { "name": "Indian history (outline)" },
                { "name": "Indonesian history" },
                { "name": "Iranian history" },
              ]
            },
            { "name": "Australian history" },
            { "name": "Cultural history" },
            { "name": "Ecclesiastical history of the Catholic Church" },
            { "name": "Economic history" },
            { "name": "Environmental history" },
            { "name": "European history" },
            { "name": "Intellectual history" },
            { "name": "Jewish history" },
            { "name": "Latin American history" },
            { "name": "Modern history" },
            {
              "name": "Philosophical history",
              "children": [
                { "name": "Ancient philosophy" },
                { "name": "Contemporary philosophy" },
                {
                  "name": "Medieval philosophy",
                  "children": [
                    { "name": "Humanism (outline)" },
                    { "name": "Scholasticism" },
                  ]
                },
                { "name": "Modern philosophy" },
              ]
            },
            {
              "name": "Political history", "children": [
                { "name": "History of political thought" },
              ]
            },
            { "name": "Pre-Columbian era history" },
            { "name": "Prehistory" },
            { "name": "Public history" },
            { "name": "Russian history" },
            { "name": "Scientific history" },
            { "name": "Technological history" },
            { "name": "World history" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.4 Languages and literature",
          "children": [
            {
              "name": "Linguistics (Outline of linguistics)",
              "children": [
                { "name": "Applied linguistics" },
                { "name": "Composition studies" },
                { "name": "Computational linguistics" },
                { "name": "Discourse analysis" },
                { "name": "English studies" },
                { "name": "Etymology" },
                { "name": "Grammar" },
                { "name": "Grammatology" },
                { "name": "Historical linguistics" },
                { "name": "History of linguistics" },
                { "name": "Interlinguistics" },
                { "name": "Lexicology" },
                { "name": "Linguistic typology" },
                { "name": "Morphology (linguistics)" },
                { "name": "Natural language processing" },
                { "name": "Philology" },
                { "name": "Phonetics" },
                { "name": "Phonology" },
                { "name": "Pragmatics" },
                { "name": "Psycholinguistics" },
                { "name": "Rhetoric" },
                { "name": "Semantics" },
                { "name": "Semiotics (outline)" },
                { "name": "Sociolinguistics" },
                { "name": "Syntax" },
                { "name": "Usage" },
                { "name": "Word usage" },
              ]
            },
            { "name": "Comics studies" },
            { "name": "Comparative literature" },
            {
              "name": "Creative writing", "children": [
                { "name": "Fiction (outline)" },
                { "name": "Non-fiction" },
              ]
            },
            { "name": "English literature" },
            {
              "name": "History of literature",
              "children": [
                { "name": "Ancient literature" },
                { "name": "Medieval literature" },
                { "name": "Post-colonial literature" },
                { "name": "Post-modern literature" },
              ]
            },
            {
              "name": "Literary theory",
              "children": [
                { "name": "Critical theory (outline)" },
                { "name": "Literary criticism" },
                { "name": "Poetics" },
              ]
            },
            { "name": "Poetry" },
            {
              "name": "World literature",
              "children": [
                { "name": "African-American literature" },
                { "name": "American literature" },
                { "name": "British literature" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.5 Law",
          "children": [
            { "name": "Administrative law" },
            { "name": "Canon law" },
            {
              "name": "Civil law",
              "children": [
                { "name": "Admiralty law" },
                { "name": "Animal law/Animal rights" },
                { "name": "Civil procedure" },
                { "name": "Common law" },
                { "name": "Contract law" },
                { "name": "Corporations" },
                { "name": "Environmental law" },
                { "name": "Family law" },
                { "name": "Federal law" },
                {
                  "name": "International law",
                  "children": [
                    { "name": "Public international law" },
                    { "name": "Supranational law" },
                  ]
                },
                { "name": "Labor law" },
                { "name": "Property law" },
                { "name": "Tax law" },
                { "name": "Tort law (outline)" },
              ]
            },
            { "name": "Comparative law" },
            { "name": "Competition law" },
            { "name": "Constitutional law" },
            {
              "name": "Criminal law",
              "children": [
                { "name": "Criminal justice (outline)" },
                {
                  "name": "Criminal procedure",
                  "children": [
                    { "name": "Forensic science (outline)" },
                    { "name": "Police science" },
                  ]
                },
              ]
            },
            { "name": "Islamic law" },
            { "name": "Jewish law (outline)" },
            { "name": "Jurisprudence (Philosophy of Law)" },
            {
              "name": "Legal management",
              "children": [
                { "name": "Commercial law" },
                { "name": "Corporate law" },
              ]
            },
            { "name": "Procedural law" },
            { "name": "Substantive law" },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.6 Philosophy",
          "children": [
            { "name": "Aesthetics (outline)" },
            {
              "name": "Applied philosophy",
              "children": [
                { "name": "Philosophy of economics" },
                { "name": "Philosophy of education" },
                { "name": "Philosophy of engineering" },
                { "name": "Philosophy of history" },
                { "name": "Philosophy of language" },
                { "name": "Philosophy of law" },
                { "name": "Philosophy of mathematics" },
                { "name": "Philosophy of music" },
                { "name": "Philosophy of psychology" },
                { "name": "Philosophy of religion" },
                {
                  "name": "Philosophy of physical sciences",
                  "children": [
                    { "name": "Philosophy of biology" },
                    { "name": "Philosophy of chemistry" },
                    { "name": "Philosophy of physics" },
                  ]
                },
                { "name": "Philosophy of social science" },
                { "name": "Philosophy of technology" },
                { "name": "Systems philosophy" },
              ]
            },
            {
              "name": "Epistemology (outline)",
              "children": [
                { "name": "Justification" },
                { "name": "Reasoning errors" },
              ]
            },
            {
              "name": "Ethics (outline)",
              "children": [
                {
                  "name": "Applied ethics",
                  "children": [
                    { "name": "Animal rights" },
                    { "name": "Bioethics" },
                    { "name": "Environmental ethics" },
                  ]
                },
                { "name": "Meta-ethics" },
                { "name": "Moral psychology, Descriptive ethics, Value theory" },
                {
                  "name": "Normative ethics",
                  "children": [
                    { "name": "Virtue ethics" },
                  ]
                },
              ]
            },
            {
              "name": "Logic (outline)",
              "children": [
                { "name": "Mathematical logic" },
                { "name": "Philosophical logic" },
              ]
            },
            { "name": "Meta-philosophy" },
            {
              "name": "Metaphysics (outline)",
              "children": [
                { "name": "Philosophy of Action" },
                { "name": "Determinism and Free will" },
                { "name": "Ontology" },
                {
                  "name": "Philosophy of mind",
                  "children": [
                    { "name": "Philosophy of pain" },
                    { "name": "Philosophy of artificial intelligence" },
                    { "name": "Philosophy of perception" },
                  ]
                },
                { "name": "Philosophy of space and time" },
                { "name": "Teleology" },
                { "name": "Theism and Atheism" },
              ]
            },
            {
              "name": "Philosophical traditions and schools",
              "children": [
                { "name": "African philosophy" },
                { "name": "Analytic philosophy" },
                { "name": "Aristotelianism" },
                { "name": "Continental philosophy" },
                { "name": "Eastern philosophy" },
                { "name": "Feminist philosophy" },
                { "name": "Platonism" },
              ]
            },
            {
              "name": "Social philosophy and political philosophy",
              "children": [
                { "name": "Anarchism (outline)" },
                { "name": "Feminist philosophy" },
                { "name": "Libertarianism (outline)" },
                { "name": "Marxism" },
              ]
            },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 1.7 Theology",
          "children": [
            {
              "name": "Biblical studies",
              "children": [
                { "name": "Biblical Hebrew, Koine Greek, Aramaic" },
              ]
            },
            { "name": "Religious studies" },
            {
              "name": "Buddhist theology",
              "children": [
                { "name": "Pali Studies" },
              ]
            },
            {
              "name": "Christian theology",
              "children": [
                { "name": "Anglican theology" },
                { "name": "Baptist theology" },
                { "name": "Catholic theology" },
                { "name": "Eastern Orthodox theology" },
                { "name": "Protestant theology" },
              ]
            },
            {
              "name": "Hindu theology",
              "children": [
                { "name": "Sanskrit Studies" },
                { "name": "Dravidian Studies" },
              ]
            },
            { "name": "Jewish theology" },
            {
              "name": "Muslim theology",
              "children": [
                { "name": "Arabic Studies" },
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
      "name": "📒 2 Social science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 2.1 Anthropology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.2 Archaeology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.3 Economics",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.4 Geography",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.5 Political science",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.6 Psychology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.7 Sociology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 2.8 Social work",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📗 3 Natural science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 3.1 Biology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.2 Chemistry",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.3 Earth science",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.4 Space science",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 3.5 Physics",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📘 4 Formal science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 4.1 Computer science",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 4.2 Mathematics",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

    {
      "name": "📙 5 Applied science",
      "children": [

        // =========================================================================================================== //

        {
          "name": "👉 5.1 Agriculture",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.2 Architecture and design",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.3 Business",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.4 Divinity",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.5 Education",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.6 Engineering and technology",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.7 Environmental studies and forestry",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.8 Family and consumer science",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.9 Human physical performance and recreation",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.10 Journalism, media studies and communication",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.11 Law",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.12 Library and museum studies",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.13 Medicine and health",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.14 Military sciences",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.15 Public administration",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.16 Social work",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

        {
          "name": "👉 5.17 Transportation",
          "children": [
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
            { "name": "..." },
          ]
        },

        // =========================================================================================================== //

      ]
    },

    
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //
    // 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴 //

  ]
};

class MyTree_academic_detail {
  constructor() {
    this.connector = function (d) {
      //curved 
      /*return "M" + d.y + "," + d.x +
         "C" + (d.y + d.parent.y) / 2 + "," + d.x +
         " " + (d.y + d.parent.y) / 2 + "," + d.parent.x +
         " " + d.parent.y + "," + d.parent.x;*/
      //straight
      return "M" + d.parent.y + "," + d.parent.x
        + "V" + d.x + "H" + d.y;
    };
    this.collapse = (d) => {
      if (d.children) {
        d._children = d.children;
        d._children.forEach(this.collapse);
        d.children = null;
      }
    };
    this.click = (d) => {
      if (d.children) {
        d._children = d.children;
        d.children = null;
      }
      else {
        d.children = d._children;
        d._children = null;
      }
      this.update(d);
    };
    this.update = (source) => {
      this.width = 800;
      // Compute the new tree layout.
      let nodes = this.var_tree_academic_detail(this.root);
      let nodesSort = [];
      nodes.eachBefore(function (n) {
        nodesSort.push(n);
      });
      this.height = Math.max(500, nodesSort.length * this.barHeight + this.margin.top + this.margin.bottom);
      let links = nodesSort.slice(1);
      // Compute the "layout".
      nodesSort.forEach((n, i) => {
        n.x = i * this.barHeight;
      });
      d3.select('svg').transition()
        .duration(this.duration)
        .attr("height", this.height);
      // Update the nodes…
      let node = this.svg.selectAll('g.node')
        .data(nodesSort, function (d) {
          return d.id || (d.id = ++this.i);
        });
      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append('g')
        .attr('class', 'node')
        .attr('transform', function () {
          return 'translate(' + source.y0 + ',' + source.x0 + ')';
        })
        .on('click', this.click);
      nodeEnter.append('circle')
        .attr('r', 1e-6)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeEnter.append('text')
        .attr('x', function (d) {
          return d.children || d._children ? 10 : 10;
        })
        .attr('dy', '.35em')
        .attr('text-anchor', function (d) {
          return d.children || d._children ? 'start' : 'start';
        })
        .text(function (d) {
          if (d.data.name.length > 100) { // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
            return d.data.name.substring(0, 100) + '...'; // <--⚠️⚠️⚠️Jumlah karakter sebelum di collapse (...)⚠️⚠️⚠️
          }
          else {
            return d.data.name;
          }
        })
        .style('fill-opacity', 1e-6);
      nodeEnter.append('svg:title').text(function (d) {
        return d.data.name;
      });
      // Transition nodes to their new position.
      let nodeUpdate = node.merge(nodeEnter)
        .transition()
        .duration(this.duration);
      nodeUpdate
        .attr('transform', function (d) {
          return 'translate(' + d.y + ',' + d.x + ')';
        });
      nodeUpdate.select('circle')
        .attr('r', 4.5)
        .style('fill', function (d) {
          return d._children ? 'lightsteelblue' : '#fff';
        });
      nodeUpdate.select('text')
        .style('fill-opacity', 1);
      // Transition exiting nodes to the parent's new position (and remove the nodes)
      var nodeExit = node.exit().transition()
        .duration(this.duration);
      nodeExit
        .attr('transform', function (d) {
          return 'translate(' + source.y + ',' + source.x + ')';
        })
        .remove();
      nodeExit.select('circle')
        .attr('r', 1e-6);
      nodeExit.select('text')
        .style('fill-opacity', 1e-6);
      // Update the links…
      var link = this.svg.selectAll('path.link')
        .data(links, function (d) {
          // return d.target.id;
          var id = d.id + '->' + d.parent.id;
          return id;
        });
      // Enter any new links at the parent's previous position.
      let linkEnter = link.enter().insert('path', 'g')
        .attr('class', 'link')
        .attr('d', (d) => {
          var o = { x: source.x0, y: source.y0, parent: { x: source.x0, y: source.y0 } };
          return this.connector(o);
        });
      // Transition links to their new position.
      link.merge(linkEnter).transition()
        .duration(this.duration)
        .attr('d', this.connector);
      // // Transition exiting nodes to the parent's new position.
      link.exit().transition()
        .duration(this.duration)
        .attr('d', (d) => {
          var o = { x: source.x, y: source.y, parent: { x: source.x, y: source.y } };
          return this.connector(o);
        })
        .remove();
      // Stash the old positions for transition.
      nodesSort.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };
  }
  $onInit() {
    this.margin = { top: 20, right: 10, bottom: 20, left: 10 };
    this.width = 1400 - this.margin.right - this.margin.left;
    this.height = 800 - this.margin.top - this.margin.bottom;
    this.barHeight = 20;
    this.barWidth = this.width * .8;
    this.i = 0;
    this.duration = 750;
    this.var_tree_academic_detail = var_tree_academic_detail().size([this.width, this.height]);
    // this.tree = tree().nodeSize([0, 30]);
    this.var_tree_academic_detail = var_tree_academic_detail().nodeSize([0, 30]);
    this.root = this.var_tree_academic_detail(var_hierarchy_academic_detail(var_data_academic_detail));
    this.root.each((d) => {
      d.name = d.id; //transferring name to a name variable
      d.id = this.i; //Assigning numerical Ids
      this.i++;
    });
    this.root.x0 = this.root.x;
    this.root.y0 = this.root.y;
    this.svg = var_select_academic_detail('.hierarchy-container-academic-detail').append('svg')
      .attr('width', this.width + this.margin.right + this.margin.left)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    // this.root.children.forEach(this.collapse);
    this.update(this.root);
  }
}
;
let myTree_academic_detail = new MyTree_academic_detail();
myTree_academic_detail.$onInit();