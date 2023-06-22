<template>
  <div class="main">
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-center">
          <p>Reaction Timer</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex justify-content-center">
          <b-button class="btn" size="lg" @click="start" :disabled="isPlaying"
            >Click</b-button
          >
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <ResultReaction v-if="showResult" :score="score" />
        </b-col>
      </b-row>
      <b-row>
        <b-col class="d-flex justify-content-center">
          <BlockReaction v-if="isPlaying" :delay="delay" @end="endGame" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import BlockReaction from "./BlockReaction.vue";
import ResultReaction from "./ResultReaction.vue";
export default {
  components: { BlockReaction, ResultReaction },
  data() {
    return {
      delay: null,
      isPlaying: false,
      showResult: false,
      score: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResult = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResult = true;
    },
  },
};
</script>
<style scoped>
.main {
  font-size: 4rem;
}
.btn {
  width: 10vw;
  background-color: #073638;
  border: 1px solid #041e1f;
}
.btn[disabled] {
  opacity: 0.1;
}
</style>
