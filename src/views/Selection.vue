<template>
  <div class="main">
    <div class="d-flex justify-content-around pt-5">
      <b-form-select
        v-model="selected"
        class="selected mt-5 rounded-1"
        @change="checkSelectBox"
      >
        <b-form-select-option value="null"
          >Please select an option</b-form-select-option
        >
        <b-form-select-option value="iran">Iran</b-form-select-option>
        <b-form-select-option value="usa">Usa</b-form-select-option>
        <b-form-select-option value="turkey">Turkey</b-form-select-option>
      </b-form-select>
      <b-form-select class="selected mt-5 rounded-1" @change="checkSelectBox">
        <b-form-select-option v-for="city in mainCities" :key="city">{{
          city
        }}</b-form-select-option>
      </b-form-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "selection",

  components: {},

  data() {
    return {
      selected: null,
      countries: {
        iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan"],
        turkey: ["Ezmir", "Istanbul", "Antalia", "Ankara"],
        usa: ["San Diego", "Los Angles", "New York"],
      },
      mainCities: [],
    };
  },
  methods: {
    checkSelectBox(e) {
      if (e !== "null") {
        this.mainCities = [...this.countries[e]];
      } else {
        this.mainCities = [];
      }
    },
  },
};
</script>
<style scoped>
.selected {
  width: 30vw;
  border: 1px solid #ccc;
}
</style>
