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
      ]),

      simple: [
        {
          label: "Outline of Acedemic Disciplines",
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