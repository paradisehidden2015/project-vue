<template>
  <div class="d-flex flex-column align-items-center">
    <p class="mt-3">Reaction: {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "عالی بود";
    } else if (this.score < 400) {
      this.rank = "هی بد نبود";
    } else {
      this.rank = "حلزون کی بودی";
    }
  },
};
</script>

<style scoped>
p {
  font-size: 2rem;
}
.rank {
  color: #073638;
  font-weight: bold;
}
</style>
