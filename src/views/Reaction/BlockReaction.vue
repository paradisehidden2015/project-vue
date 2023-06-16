<template>
  <b-container class="pt-5">
    <b-row>
      <b-col class="d-flex justify-content-center">
        <div
          class="box d-flex justify-content-center align-items-center"
          v-if="showBlock"
          @click="stopTimer"
        >
          Click Me
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTimer: 0,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTimer += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTimer);
    },
  },
};
</script>

<style scoped>
.box {
  width: 50vw;
  height: 40vh;
  background-color: #073638;
  border-radius: 10px;
  font-size: 2rem;
  cursor: pointer;
}
</style>
