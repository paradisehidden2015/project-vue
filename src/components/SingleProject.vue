<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions d-flex justify-content-between align-items-center">
      <h3 @click="showDetails = !showDetails">{{ project.title }}</h3>
      <div class="icons d-flex justify-content-between align-items-center">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <b-icon icon="pencil"></b-icon>
        </router-link>
        <b-icon icon="trash" @click="deleteProject"></b-icon>
        <b-icon icon="check-lg" @click="changeComplete"></b-icon>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ project.details }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err.message));
    },
    changeComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          complete: !this.project.complete,
        }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err.message));
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px auto;
  background: white;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.5);
  border-left: 4px solid #e90074;
  color: #434343;
}
h3 {
  cursor: pointer;
  width: 80%;
}
.icons {
  width: 80px;
  font-size: 1.2rem;
  color: #c2c2c2;
  cursor: pointer;
}
.icons a {
  color: #c2c2c2;
}
.icons svg:hover {
  color: #434343;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
</style>
