const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI
    let nilai = ref([
      "User Experience (UX) design",
      "1 Foundations of UX design",
      "2 UX Design Process: Emphatize, Define, Ideate",
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    function defaultNode(nilai) {
      let node = [
        "User Experience (UX) design",
        "1 Foundations of UX design",
        "2 UX Design Process: Emphatize, Define, Ideate",
      ]
      
      setTimeout(() => { nilai.tree.collapseAll() }, 100);                // tutup seluruh node
      setTimeout(() => { nilai.tree.setExpanded(node[0], true) }, 100);   // true/buka node "User Experience (UX) design"
      setTimeout(() => { nilai.tree.setExpanded(node[1], true) }, 100);   // true/buka node "1 Foundations of UX design"
      setTimeout(() => { nilai.tree.setExpanded(node[2], true) }, 100);   // true/buka node "2 UX Design Process: Emphatize, Define, Ideate"
    }

    // 3️⃣ JIKA DIPERLUKAN GUNAKAN TOGGLE UNTUK NODE TERTENTU
    function toggleNode(nilai) {
      let node = "User Experience (UX) design"
      nilai.tree.isExpanded(node) === true ? nilai.tree.setExpanded(node, false) : nilai.tree.setExpanded(node, true)
    }

    return {
      filter,
      filterRef,
      defaultNode,
      toggleNode,

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50%
      splitterModel: ref(50),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected: ref("User Experience (UX) design"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded: nilai,

      simple: [
        {
          label: "User Experience (UX) design",
          avatar: "../assets/ux/general/ux-headline.png",
          children: [

            // =========================================================================================================== //

            {
              label: "1 Foundations of UX design",
              avatar: "../assets/ux/general/ux-course-1.png",
              children: [
                {
                  label: "1.1 UX Careers",
                  icon: "feed",
                  children: [
                    { label: "Interaction designer ⇢" },
                    { label: "Visual designer ⇢" },
                    { label: "Motion designer ⇢" },
                    { label: "VR/AR designer ⇢" },
                    { label: "UX researcher ⇢" },
                    { label: "UX writer ⇢" },
                    { label: "UX program manager ⇢" },
                    { label: "UX engineer ⇢" },
                    { label: "Conversation designer ⇢" },
                  ]
                },
                {
                  label: "1.2 Product development life cycle",
                  icon: "feed",
                  children: [
                    { label: "Brainstrom ⇢" },
                    { label: "Define ⇢" },
                    { label: "Design ⇢" },
                    { label: "Test ⇢" },
                    { label: "Launch ⇢" },
                  ]
                },
                {
                  label: "1.3 Characteristics of a good UX",
                  icon: "feed",
                  children: [
                    { label: "Usable ⇢" },
                    { label: "Equitable ⇢" },
                    { label: "Enjoyable ⇢" },
                    { label: "Useful ⇢" },
                  ]
                },
                {
                  label: "1.4 Types of companies",
                  icon: "feed",
                  children: [
                    { label: "Startups and small business ⇢" },
                    { label: "Big companies ⇢" },
                    { label: "Design agencies ⇢" },
                    { label: "Advertising agencies ⇢" },
                    { label: "Freelancers ⇢" },
                  ]
                },
                {
                  label: "1.5 Design frameworks",
                  icon: "feed",
                  children: [
                    {
                      label: "User-centered design process",
                      children: [
                        { label: "Understand how the user experiences the product ⇢" },
                        { label: "Specify the user’s needs ⇢" },
                        { label: "Design solutions to those user problems ⇢" },
                        { label: "Evaluate solutions against the user’s needs ⇢" },
                      ]
                    },
                    {
                      label: "The five elements of UX design",
                      children: [
                        { label: "Strategy ⇢" },
                        { label: "Scope ⇢" },
                        { label: "Structure ⇢" },
                        { label: "Skeleton ⇢" },
                        { label: "Surface ⇢" },
                      ]
                    },
                    {
                      label: "Design thinking process 🔥",
                      children: [
                        { label: "Emphatize ⇢" },
                        { label: "Define ⇢" },
                        { label: "Ideate ⇢" },
                        { label: "Prototype ⇢" },
                        { label: "Test ⇢" },
                      ]
                    },
                    {
                      label: "Think like a designer",
                      children: [
                        {
                          label: "Lean UX",
                          children: [
                            { label: "Think ⇢" },
                            { label: "Make ⇢" },
                            { label: "Check ⇢" },
                          ]
                        },
                        {
                          label: "Double diamond",
                          children: [
                            { label: "Discover the problem ⇢" },
                            { label: "Define the problem ⇢" },
                            { label: "Develop solutions for the problems ⇢" },
                            { label: "Deliver the product ⇢" },
                          ]
                        },
                      ]
                    },
                  ]
                },
                {
                  label: "1.6 Key considerations when designing for various platforms",
                  icon: "feed",
                  children: [
                    { label: "Screen size ⇢" },
                    { label: "Interaction ⇢" },
                    { label: "Content layout ⇢" },
                    { label: "Functionality ⇢" },
                    {
                      label: "The four Cs",
                      children: [
                        { label: "Consistency ⇢" },
                        { label: "Continuity ⇢" },
                        { label: "Context ⇢" },
                        { label: "Complementary ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.7 Globally accessible products",
                  icon: "feed",
                  children: [
                    {
                      label: "Awareness is everything",
                      children: [
                        { label: "Learn about global user communities and how they use technology ⇢" },
                        { label: "Be mindful about representing users inclusively ⇢" },
                        { label: "Accommodate different levels of literacy and many different languages ⇢" },
                        { label: "Empower your users when it comes to privacy, safety, and security ⇢" },
                      ]
                    },
                    {
                      label: "Context matters",
                      children: [
                        { label: "Build great user experiences for modest devices ⇢" },
                        { label: "Ensure that your app functions seamlessly in intermittent networks—and when offline ⇢" },
                        { label: "Keep usage costs low ⇢" },
                        { label: "Treat accessibility settings as critical, not just as a checklist ⇢" },
                      ]
                    },
                    {
                      label: "Be inclusive by default",
                      children: [
                        { label: "Consider environmental contrasts like sun and shade ⇢" },
                        { label: "Color has meaning—use it wisely ⇢" },
                        { label: "Design for various screen conditions and input abilities ⇢" },
                        { label: "Go big: Larger tap/touch targets ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.8 Design sprints",
                  icon: "feed",
                  children: [
                    {
                      label: "Planning",
                      children: [
                        { label: "Scope and structuring ⇢" },
                        { label: "Gather research and data ⇢" },
                        { label: "Prepare and set the tone ⇢" },
                        { label: "Post sprint ⇢" },
                      ]
                    },
                    {
                      label: "Methodology",
                      children: [
                        { label: "Understand ⇢" },
                        { label: "Define ⇢" },
                        { label: "Sketch ⇢" },
                        { label: "Decide ⇢" },
                        { label: "Prototype ⇢" },
                        { label: "Validate ⇢" },
                      ]
                    },
                    {
                      label: "Retrospective",
                      children: [
                        { label: "What went well? ⇢" },
                        { label: "What can be improved? ⇢" },
                        { label: "Lessons learned ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.9 Create a portfolio",
                  icon: "feed",
                  children: [
                    {
                      label: "Website builder",
                      children: [
                        { label: "Squarespace ⇢" },
                        { label: "Webflow ⇢" },
                        { label: "Wix ⇢" },
                        { label: "Google sites ⇢" },
                      ]
                    },
                    {
                      label: "Plan your portfolio website",
                      children: [
                        { label: "Name and personal logo ⇢" },
                        { label: "Navigation menu ⇢" },
                        { label: "Work samples ⇢" },
                        { label: "About me (Interests, experiences, passions) ⇢" },
                        { label: "Contact information (Email, resume link, online profiles link: LinkedIn, etc) ⇢" },
                        { label: "Color scheme (One primary color and one accent color) ⇢" },
                      ]
                    },
                    {
                      label: "Personal branding",
                      children: [
                        {
                          label: "Consistency is key",
                          children: [
                            { label: "Oprah Winfrey is strongly associated with inspiration and hope ⇢" },
                            { label: "Sarah Cooper is tied to satirical comedy ⇢" },
                            { label: "Bill Nye is famous for learning science in a fun way ⇢" },
                          ]
                        },
                        {
                          label: "Develop personal brand",
                          children: [
                            { label: "Create a personal logo ⇢" },
                            { label: "Make the most of fonts and colors ⇢" },
                            { label: "Keep your voice consistent ⇢" },
                            { label: "Use graphics, animations, and photography ⇢" },
                            { label: "Be yourself ⇢" },
                          ]
                        },
                      ]
                    },
                    {
                      label: "Create an online profiles",
                      children: [
                        { label: "Your name ⇢" },
                        { label: "Your education, including certificate program ⇢" },
                        { label: "Your work experience or interests ⇢" },
                        { label: "Your skills & qualifications ⇢" },
                        { label: "Outstanding achievements ⇢" },
                        { label: "A professional photo of yourself ⇢" },
                        { label: "Contact & links to social media profiles ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.10 Networking",
                  icon: "feed",
                  children: [
                    {
                      label: "Where to meet professionals/mentor?",
                      children: [
                        { label: "Online (LinkedIn, Medium, Dribbble, etc) ⇢" },
                        { label: "In person (Lectures, seminars, certificate program, etc) ⇢" },
                      ]
                    },
                    {
                      label: "How to reach out?",
                      children: [
                        { label: "Fill out and update your profile ⇢" },
                        { label: "Introducte yourself with a personalized message ⇢" },
                        { label: "Keep it short ⇢" },
                        { label: "Don't ask for a job ⇢" },
                        { label: "Be clear about what you want ⇢" },
                        { label: "Say thank you ⇢" },
                      ]
                    },
                  ]
                },
                {
                  label: "1.11 Impostor syndrome",
                  icon: "feed",
                  children: [
                    {
                      label: "Effects",
                      children: [
                        { label: "Impostor syndrome is the belief that you’re unskilled, inferior to others, or bad at your job, despite your successes ⇢" },
                        { label: "Not applying to jobs unless you meet every requirement ⇢" },
                        { label: "Taking on extra work to make sure you’re “doing it all” and to look more capable in front of your peers ⇢" },
                        { label: "Not attending networking events or career fairs because you’re nervous or anxious ⇢" },
                        { label: "Downplaying your abilities during conversations ⇢" },
                        { label: "Shrugging off compliments because you don’t believe them ⇢" },
                      ]
                    },
                    {
                      label: "How to manage?",
                      children: [
                        { label: "Acknowledge your thoughts ⇢" },
                        { label: "Own your accomplishments ⇢" },
                        { label: "Be honest with yourself ⇢" },
                        { label: "Have a conversation ⇢" },
                        { label: "Wear something that makes you feel confident ⇢" },
                        { label: "Help someone else ⇢" },
                        { label: "Fake it till you make it ⇢" },
                        { label: "Go with a friend ⇢" },
                        { label: "Get to know people ⇢" },
                        { label: "Know that you're not alone ⇢" },
                      ]
                    },
                  ]
                },
              ]
            },

            // =========================================================================================================== //

            {
              label: "2 UX Design Process: Emphatize, Define, Ideate",
              avatar: "../assets/ux/general/ux-course-2.png",
              children: [
                {
                  label: "2.1 ",
                  icon: "feed",
                  children: [
                    { label: "..." },
                    { label: "..." },
                    { label: "..." },
                    { label: "..." },
                    { label: "..." },
                  ]
                },
                {
                  label: "2.2 ",
                  icon: "feed",
                },
                {
                  label: "2.3 ",
                  icon: "feed",
                },
                {
                  label: "2.4 ",
                  icon: "feed",
                },
                {
                  label: "2.5 ",
                  icon: "feed",
                },
              ]
            },

            // =========================================================================================================== //

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