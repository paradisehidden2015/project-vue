<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
@font-face {
  font-family: Yekan;
  src: url(./assets/Yekan.ttf);
}
body div {
  font-family: Yekan;
}
</style>
