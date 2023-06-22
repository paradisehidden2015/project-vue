<template>
  <b-navbar type="dark" variant="dark" class="fixed-top">
    <b-navbar-nav class="w-100 d-flex justify-content-between">
      <div class="nav">
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
        <b-nav-item
          ><router-link class="link" :to="{ name: 'Todo' }"
            >Todo</router-link
          ></b-nav-item
        >
      </div>
      <div class="themes">
        <label class="d-flex justify-content-between align-items-center w-100">
          <input type="checkbox" v-model="checkThem" hidden />
          <span
            class="lever"
            :style="checkThem && { background: 'white' }"
            @click="changeThem"
          >
            <b-icon
              :style="checkThem && { left: '45px', color: 'black' }"
              :icon="checkThem ? 'sun-fill' : 'moon-stars-fill'"
            ></b-icon
          ></span>
        </label>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return { checkThem: true };
  },
  methods: {
    changeThem() {
      this.$emit("them-att", this.checkThem);
    },
  },
};
</script>
<style>
.navbar .nav .link {
  color: gray;
  text-decoration: none;
  font-size: 1.3rem;
  padding: 0 5px 0 5px;
  transition: 0.5s;
}
.navbar .nav .link:hover,
.navbar .nav .router-link-active {
  color: aqua;
}
.navbar .themes {
  padding-right: 10px;
  color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar .themes label span.lever {
  width: 70px;
  height: 30px;
  display: inline-block;
  background-color: transparent;
  border-radius: 20px;
  border: 1px solid white;
  padding: 3px;
  position: relative;
  transition: all 1s;
  cursor: pointer;
}
.navbar .themes label .b-icon.bi {
  color: aliceblue;
  position: absolute;
  top: 8px;
  left: 5px;
}
</style>
