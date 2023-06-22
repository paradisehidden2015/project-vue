<template>
  <div>
    <Navbar @them-att="changeThem" />
    <router-view :class="them ? 'light' : 'dark'" />
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      them: false,
    };
  },
  methods: {
    changeThem(checkThem) {
      this.them = checkThem;
    },
  },
};
</script>
<style>
@font-face {
  font-family: Yekan;
  src: url(./assets/Yekan.ttf);
}
body,
html {
  background-color: #434343;
}
body div {
  /* font-family: Yekan; */
  font-family: "Arvo", serif;
}
.main {
  width: 100vw;
  height: 100vh;
  padding-top: 80px;
}
.dark {
  background-color: #434343;
  color: aliceblue;
}
.light {
  background-color: aliceblue;
  color: #434343;
}
</style>
