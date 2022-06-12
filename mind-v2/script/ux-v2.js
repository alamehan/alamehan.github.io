const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI
    let nilai = ref([
      "UXD",
      "1 Foundations of UX design",
      "2 UX Design Process: Empathize, Define, Ideate",
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    function defaultNode(nilai) {
      let node = [
        "UXD",
        "1 Foundations of UX design",
        "2 UX Design Process: Empathize, Define, Ideate",
      ]

      setTimeout(() => { nilai.tree.collapseAll() }, 100);                // tutup seluruh node
      setTimeout(() => { nilai.tree.setExpanded(node[0], true) }, 100);   // true/buka node "UXD"
      setTimeout(() => { nilai.tree.setExpanded(node[1], true) }, 100);   // true/buka node "1 Foundations of UX design"
      setTimeout(() => { nilai.tree.setExpanded(node[2], true) }, 100);   // true/buka node "2 UX Design Process: Empathize, Define, Ideate"
    }

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU
    function toggleNode(nilai) {
      let node = "UXD"
      nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    }

    return {
      filter,
      filterRef,
      defaultNode,
      toggleNode,

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50% 
      // 🔴 GANTI LAGI KE 50 🔴
      splitterModel: ref(80),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected: ref("UXD"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded: nilai,

      simple: [
        {
          label: "UXD",
          avatar: "../assets/ux/general/ux-headline.png",
          children: [

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT A                              */
            /* -------------------------------------------------------------------------- */

            {
              label: "1 Foundations of UX design",
              avatar: "../assets/ux/general/ux-course-1.png",
              children: [
                {
                  label: "1.1 Introducing UX design",
                  icon: "feed",
                  children: [
                    {
                      label: "Study tips",
                      children: [
                        { label: "Plan your time" },
                        { label: "Learn in order" },
                        { label: "Be curious" },
                        { label: "Take notes" },
                        { label: "Chat with other learners" },
                      ]
                    },
                    {
                      label: "UX resources",
                      children: [
                        { label: "Interaction Design Foundation" },
                        { label: "Adobe XD Ideas" },
                        { label: "UX Collective on Medium" },
                        { label: "Nielsen Norman Group" },
                        { label: "UXDatabase.io" },
                      ]
                    },
                    {
                      label: "UX careers",
                      children: [
                        { label: "Interaction designer" },
                        { label: "Visual designer" },
                        { label: "Motion designer" },
                        { label: "VR/AR designer" },
                        { label: "UX researcher" },
                        { label: "UX writer" },
                        { label: "UX program manager" },
                        { label: "UX engineer" },
                        { label: "Conversation designer" },
                      ]
                    },
                    {
                      label: "Product development life cycle",
                      children: [
                        { label: "Brainstorm" },
                        { label: "Define" },
                        { label: "Design" },
                        {
                          label: "Test",
                          children: [
                            { label: "Alpha testing" },
                            { label: "Beta testing" },
                          ]
                        },
                        { label: "Launch" },
                      ]
                    },
                    {
                      label: "Characteristics of a good UX",
                      children: [
                        { label: "Usable" },
                        { label: "Equitable" },
                        { label: "Enjoyable" },
                        { label: "Useful" },
                      ]
                    },
                    {
                      label: "Types of UX designer",
                      children: [
                        { label: "Generalist" },
                        { label: "Specialist" },
                        { label: "T-shaped" },
                      ]
                    },
                    {
                      label: "Types of companies that hire UX designer",
                      children: [
                        { label: "Startups and small businesses" },
                        { label: "Big companies" },
                        { label: "Design agencies" },
                        { label: "Advertising agencies" },
                        { label: "Freelancers" },
                      ]
                    },
                    {
                      label: "Start your career",
                      children: [
                        { label: "Internship" },
                        { label: "Apprenticeships" },
                        { label: "Freelancers" },
                        { label: "Entry-level jobs" },
                      ]
                    },
                    { label: "Lorem" },
                    { label: "Lorem" },
                  ]
                },
                {
                  label: "1.2 Thinking like a UX designer",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                  ]
                },
                {
                  label: "1.3 Joining design sprints",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                  ]
                },
                {
                  label: "1.4 Integrating research into the design process",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                    { label: "Lorem" },
                  ]
                },
              ]
            },

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT B                              */
            /* -------------------------------------------------------------------------- */

            {
              label: "2 UX Design Process: Empathize, Define, Ideate",
              avatar: "../assets/ux/general/ux-course-2.png",
              children: [
                {
                  label: "2.1 Lorem",
                  icon: "feed",
                  children: [
                    { label: "Lorem" },
                    { label: "Lorem" },
                    {
                      label: "Lorem",
                      children: [
                        { label: "Lorem" },
                        { label: "Lorem" },
                        { label: "Lorem" },
                        { label: "Lorem" },
                      ]
                    },
                  ]
                },
              ]
            },

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT C                              */
            /* -------------------------------------------------------------------------- */

            /* -------------------------------------------------------------------------- */
            /*                              ANCHOR CONTENT D                              */
            /* -------------------------------------------------------------------------- */

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