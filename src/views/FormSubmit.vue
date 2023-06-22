<template>
  <div class="main">
    <b-container>
      <b-row class="d-flex justify-content-center">
        <b-col
          class="d-flex justify-content-center"
          cols="12"
          sm="9"
          md="7"
          lg="5"
        >
          <b-form
            class="form p-5 w-100"
            @submit.prevent="Submit"
            @reset="reset"
          >
            <div class="group mt-0">
              <label for="email" class="d-block">Email:</label>
              <b-form-input
                type="email"
                id="email"
                v-model="email"
              ></b-form-input>
            </div>
            <div class="group">
              <label for="password" class="d-block">Password :</label>
              <b-form-input
                type="password"
                id="password"
                v-model="password"
              ></b-form-input>
            </div>
            <div class="group">
              <label for="role" class="d-block">Role :</label>
              <select class="select p-2" v-model="role">
                <option value="WebDeveloper">Web Developer</option>
                <option value="UiDeveloper">UI Developer</option>
              </select>
            </div>
            <div class="group pill">
              <label for="skill" class="d-block">Skills :</label>
              <b-form-input
                type="text"
                id="skill"
                v-model="tempSkill"
                ref="skill"
              ></b-form-input>
              <b-button variant="outline-success" class="add" @click="addSkill"
                >+</b-button
              >
              <div class="skills m-2" v-for="skill in skills" :key="skill">
                <span class="close" @click="deleteSkill(skill)">×</span>
                <span class="kill">{{ skill }}</span>
              </div>
            </div>
            <div class="group terms">
              <b-form-checkbox v-model="terms">
                I Accept The Terms And Use</b-form-checkbox
              >
            </div>
            <div class="button">
              <b-button type="submit" variant="primary" class="w-50"
                >Submit</b-button
              >
              <b-button type="reset" variant="danger" class="m-3 w-25"
                >Reset</b-button
              >
            </div>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "webDeveloper",
      terms: false,
      tempSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill() {
      if (this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          let kill = this.tempSkill.replace(",", "");
          this.skills.push(kill);
        }
        this.tempSkill = "";
        this.$refs.skill.focus();
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    reset() {
      this.skills = [];
    },
  },
};
</script>

<style scoped>
.form {
  height: 85vh;
  background-color: #2f2f2f;
  border-radius: 10px;
  position: relative;
}
input {
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: white;
  outline: none;
}
input:focus {
  background-color: transparent;
  color: white;
}
select {
  width: 100%;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
}
option {
  background-color: #2f2f2f;
  color: white;
}
.group {
  height: 15%;
}
.group label {
  color: white;
}
.pill {
  position: relative;
}
.add {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  right: 0;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skills {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  background-color: #484848;
  border-radius: 5px;
  position: relative;
  padding-right: 5px;
  font-size: 1.2rem;
}
.skills .close {
  width: 10px;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid red;
  color: red;
  font-size: 0.5rem;
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 2px;
  margin-right: 5px;
}
.terms {
  height: auto;
  color: white;
}
.button {
  width: 100%;
  margin-left: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
}
/* #skill ~ p {
  color: #c75f04;
} */
</style>
