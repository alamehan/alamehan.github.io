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

      customize: [
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
                  ]
                },
                {
                  label: "1.2 Thinking like a UX designer",
                  icon: "feed",
                  children: [
                    {
                      label: "Important terms",
                      children: [
                        { label: "User" },
                        { label: "End user" },
                        { label: "Potential user" },
                      ]
                    },
                    {
                      label: "Design frameworks",
                      children: [
                        {
                          label: "User-centered design (UCD)",
                          children: [
                            { label: "Understand" },
                            { label: "Specify" },
                            { label: "Design" },
                            { label: "Evaluate" },
                          ]
                        },
                        {
                          label: "The five elements of UXD",
                          children: [
                            { label: "Strategy" },
                            { label: "Scope" },
                            { label: "Structure" },
                            { label: "Skeleton" },
                            { label: "Surface" },
                          ]
                        },
                        {
                          label: "Design thinking ✅",
                          children: [
                            { label: "Emphatize" },
                            { label: "Define" },
                            { label: "Ideate" },
                            { label: "Prototype" },
                            { label: "Test" },
                          ]
                        },
                        {
                          label: "Lean UX",
                          children: [
                            { label: "Think" },
                            { label: "Make" },
                            { label: "Check" },
                          ]
                        },
                        {
                          label: "Double diamond",
                          children: [
                            { label: "Discover the problem" },
                            { label: "Define the problem" },
                            { label: "Develop solutions" },
                            { label: "Deliver the product" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Core principles in design frameworks",
                      children: [
                        { label: "Focus on the user" },
                        { label: "Create solutions that address the user’s problems" },
                        { label: "Collaborate with teammates across departments" },
                        { label: "Validate your designs" },
                        { label: "Iterate as needed to design the right UX" },
                      ]
                    },
                    {
                      label: "Assistive technology",
                      children: [
                        { label: "Color modification" },
                        { label: "Voice control" },
                        { label: "Screen readers" },
                        { label: "Alternative text" },
                      ]
                    },
                    {
                      label: "Big issues facing the Next Billion Users",
                      body: 'story',
                      story: '(People who are new to the internet)',
                      children: [
                        { label: "Cost" },
                        { label: "Connectivity" },
                        { label: "Digital literacy" },
                        { label: "Literacy in general" },
                      ]
                    },
                    {
                      label: "User first in your design",
                      children: [
                        { label: "Universal design: One solution for everyone" },
                        { label: "Inclusive design: Solve for one, extend to many" },
                        {
                          label: "Equity-focused design: Acessible and fair to all groups",
                          body: 'story',
                          story: 'Note: Know the difference between equality vs. equity',
                        },
                      ]
                    },
                    {
                      label: "Common platforms",
                      children: [
                        { label: "Desktop computers" },
                        { label: "Laptop computers" },
                        { label: "Mobile phones" },
                        { label: "Tablets" },
                        { label: "Wearables (e.g. smartwatches)" },
                        { label: "TVs" },
                        { label: "Smart displays" },
                      ]
                    },
                    {
                      label: "Key considerations when designing for different platforms",
                      body: 'story',
                      story: 'Note: Design should be responsive to the devices',
                      children: [
                        { label: "Screen size" },
                        { label: "Interaction" },
                        { label: "Content layout" },
                        { label: "Functionality" },
                      ]
                    },
                    {
                      label: "The four Cs of designing for multiple platforms",
                      body: 'story',
                      story: 'Note: Users behave differently depending on their device',
                      children: [
                        { label: "Consistency" },
                        { label: "Continuity" },
                        { label: "Context" },
                        { label: "Complementary" },
                      ]
                    },
                    {
                      label: "Designing for mobile UX",
                      body: 'story',
                      story: 'Note: Mobile device usage has been booming',
                      children: [
                        { label: "Call-to-action buttons should be placed front and center" },
                        { label: "Navigation menus should be short and simple" },
                        { label: "Gestures should be intuitive and familiar: tapping & swiping" },
                        { label: "Design for both: Potrait and horizontal landscape view" },
                        { label: "Reduce visual clutter: Keep the visual experience simple" },
                      ]
                    },
                    {
                      label: "Designing for Global Accessibility",
                      body: 'story',
                      story: 'Best practice: Read the Accessibility Guide for Google Material',
                      children: [
                        { label: "Learn about global user communities and how they use technology" },
                        { label: "Be mindful about representing users inclusively" },
                        { label: "Accommodate different levels of literacy and many different languages" },
                        { label: "Empower your users when it comes to privacy, safety, and security" },
                        { label: "Build great user experiences for modest devices" },
                        { label: "Ensure that your app functions seamlessly in intermittent networks—and when offline" },
                        { label: "Keep usage costs low" },
                        { label: "Treat accessibility settings as critical, not just as a checklist" },
                        { label: "Consider environmental contrasts like sun and shade" },
                        { label: "Color has meaning—use it wisely" },
                        { label: "Design for various screen conditions and input abilities" },
                        { label: "Go big: Larger screen device, larger tap target, etc" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.3 Joining design sprints",
                  icon: "feed",
                  children: [
                    {
                      label: "Planning",
                      children: [
                        { label: "Scope and structuring" },
                        { label: "Gather research and data" },
                        { label: "Prepare and set the tone" },
                        { label: "Post sprint" },
                      ]
                    },
                    {
                      label: "Methodology",
                      children: [
                        { label: "Understand" },
                        { label: "Define" },
                        { label: "Sketch" },
                        { label: "Decide" },
                        { label: "Prototype" },
                        { label: "Validate" },
                      ]
                    },
                    {
                      label: "Retrospective",
                      children: [
                        { label: "What went well?" },
                        { label: "What can be improved?" },
                        { label: "Lessons learned" },
                      ]
                    },
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