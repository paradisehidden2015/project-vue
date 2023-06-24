<template>
  <div class="main">
    <b-container class="">
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="6">
          <NavbarPage />
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="6">
          <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" required />
            <label>Details:</label>
            <textarea v-model="details"></textarea>
            <button>Add Project</button>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarPage from "../../components/NavbarPage.vue";
export default {
  components: { NavbarPage },
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push({ name: "Todo" });
        })
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
form {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background-color: #00ce89;
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
