<template>
  <div class="mt-5">
    <navbar />
    <router-view class="p-4" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
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
