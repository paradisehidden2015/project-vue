<template>
  <b-navbar type="dark" variant="dark" class="fixed-top">
    <b-navbar-nav>
      <b-nav-item
        ><router-link class="link" :to="{ name: 'Weather' }"
          >Weather</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'Calculator' }"
          >Calculator</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'Selection' }"
          >Selection</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'Coin' }"
          >Coin</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'Reaction' }"
          >Reaction</router-link
        ></b-nav-item
      >
      <b-nav-item
        ><router-link class="link" :to="{ name: 'FormSubmit' }"
          >FormSubmit</router-link
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
  padding: 0 5px 0 5px;
  transition: 0.5s;
}
.link:hover {
  color: aqua;
}
</style>
