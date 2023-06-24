<template>
  <div class="main">
    <b-container class="d-flex flex-column">
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="6">
          <NavbarPage />
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="6">
          <FilterNav @filterChange="current = $event" :current="current" />
        </b-col>
      </b-row>
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col cols="6">
          <div v-if="projects.length">
            <div v-for="project in filteredProjects" :key="project.id">
              <SingleProject
                :project="project"
                @delete="handleDelete"
                @complete="handleComplete"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarPage from "../../components/NavbarPage.vue";
import SingleProject from "../../components/SingleProject.vue";
import FilterNav from "../../components/FilterNav.vue";

export default {
  components: { NavbarPage, SingleProject, FilterNav },
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((item) => {
        return item.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((item) => {
        return item.id === id;
      });
      p.complete = !p.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((item) => item.complete);
      } else if (this.current === "ongoing") {
        return this.projects.filter((item) => !item.complete);
      } else {
        return this.projects;
      }
    },
  },
};
</script>

<style scoped></style>
