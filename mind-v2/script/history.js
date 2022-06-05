const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    // 1️⃣ ATUR NODE YANG TERBUKA PERTAMA KALI

    let nilai__1 = ref([
      "Root__1",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__2 = ref([
      "Root__2",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__3 = ref([
      "Root__3",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__4 = ref([
      "Root__4",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__5 = ref([
      "Root__5",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__6 = ref([
      "Root__6",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    let nilai__7 = ref([
      "Root__7",
      "Good food (with icon)",
      "Pleasant surroundings (with icon)"
    ])

    // 2️⃣ ATUR DEFAULT NODE YANG TERBUKA (SAMA KAYA POINT 1 DI ATAS)
    
    function defaultNode__1(pohon) {
      let node = [
        "Root__1",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__2(pohon) {
      let node = [
        "Root__2",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__3(pohon) {
      let node = [
        "Root__3",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__4(pohon) {
      let node = [
        "Root__4",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__5(pohon) {
      let node = [
        "Root__5",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__6(pohon) {
      let node = [
        "Root__6",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    function defaultNode__7(pohon) {
      let node = [
        "Root__7",
        "Good food (with icon)",
        "Pleasant surroundings (with icon)"
      ]
      console.log(node)
      setTimeout(() => { pohon.tree.collapseAll() }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[0], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[1], true) }, 100);
      setTimeout(() => { pohon.tree.setExpanded(node[2], true) }, 100);
    }

    return {
      filter,
      filterRef,
      defaultNode__1,
      defaultNode__2,
      defaultNode__3,
      defaultNode__4,
      defaultNode__5,
      defaultNode__6,
      defaultNode__7,

      // ⚠️ TAB YANG AKTIF (SELECTED) PERTAMA KALI
      tab: ref('tab__1'),

      // ⚠️ PEMBAGIAN (SPLIT) TREE 50% & DETAIL 50%
      splitterModel: ref(50),

      // ⚠️ NODE YANG AKTIF (SELECTED) PERTAMA KALI
      selected__1: ref("Root__1"),
      selected__2: ref("Root__2"),
      selected__3: ref("Root__3"),
      selected__4: ref("Root__4"),
      selected__5: ref("Root__5"),
      selected__6: ref("Root__6"),
      selected__7: ref("Root__7"),

      // ⚠️ NODE YANG TERBUKA (EXPANDED) PERTAMA KALI
      expanded__1: nilai__1,
      expanded__2: nilai__2,
      expanded__3: nilai__3,
      expanded__4: nilai__4,
      expanded__5: nilai__5,
      expanded__6: nilai__6,
      expanded__7: nilai__7,

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 1                               */
      /* -------------------------------------------------------------------------- */

      data__1: [
        {
          label: "Root__1",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 2                               */
      /* -------------------------------------------------------------------------- */

      data__2: [
        {
          label: "Root__2",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 3                               */
      /* -------------------------------------------------------------------------- */

      data__3: [
        {
          label: "Root__3",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 4                               */
      /* -------------------------------------------------------------------------- */

      data__4: [
        {
          label: "Root__4",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 5                               */
      /* -------------------------------------------------------------------------- */

      data__5: [
        {
          label: "Root__5",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 6                               */
      /* -------------------------------------------------------------------------- */

      data__6: [
        {
          label: "Root__6",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
        }
      ],

      /* -------------------------------------------------------------------------- */
      /*                                ANCHOR DATA 7                               */
      /* -------------------------------------------------------------------------- */

      data__7: [
        {
          label: "Root__7",
          avatar: "../assets/boy-avatar.png",
          children: [
            {
              label: "Good food (with icon)",
              icon: "restaurant_menu",
              children: [
                { label: "Quality ingredients" },
                { label: "Good recipe" }]
            },
            {
              label: "Good service (disabled node with icon)",
              icon: "room_service",
              disabled: true,
              children: [
                { label: "Prompt attention" },
                { label: "Professional waiter" }]
            },
            {
              label: "Pleasant surroundings (with icon)",
              icon: "photo",
              children: [
                {
                  label: "Happy atmosphere (with image)",
                  img: "../assets/logo_calendar_128px.png"
                },
                { label: "Good table presentation" },
                { label: "Pleasing decor" }]
            }]
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