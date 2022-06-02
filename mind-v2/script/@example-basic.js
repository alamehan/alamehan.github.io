const { ref } = Vue;

const app = Vue.createApp({
  setup() {
    const filter = ref("");
    const filterRef = ref(null);

    return {
      filter,
      filterRef,

      // ⚠️ TAB YANG AKTIF PERTAMA KALI
      selected: ref("Root"),

      // ⚠️ DEFAULT CHILD NODE YANG TERBUKA
      expanded: ref([
        "Root",
        "Good food (with icon)"
      ]),

      simple: [
        {
          label: "Root",
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