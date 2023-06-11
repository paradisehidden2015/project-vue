<template>
  <b-navbar type="dark" variant="dark" class="fixed-top">
    <b-navbar-nav>
      <b-nav-item
        ><router-link class="link" :to="{ name: 'weather' }"
          >Weather</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'calculator' }"
          >Calculator</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'selection' }"
          >Selection</router-link
        ></b-nav-item
      >
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",

  components: {},

  data() {
    return {};
  },
};
</script>
<style scoped>
.link {
  color: gray;
  text-decoration: none;
  font-size: 1.3rem;
}
</style>
