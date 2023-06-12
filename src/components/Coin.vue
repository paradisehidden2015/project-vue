<template>
  <div>
    <div class="blockchain pt-4" v-if="status == true">
      <!-- <b-container>
      <b-row class="d-flex justify-content-center m-2">
        <b-col cols="5">
          <b-form-input
            placeholder="Enter your coin name..."
            @keydown="inputChange"
          ></b-form-input>
        </b-col>
        <b-col cols="3">
          <b-form-select
            class="selected w-100 h-100 rounded-1"
            :value="null"
            @change="changeSort"
          >
            <b-form-select-option value="null">Market Cap</b-form-select-option>
            <b-form-select-option value="highest">Highest</b-form-select-option>
            <b-form-select-option value="lowest">Lowest</b-form-select-option>
            <b-form-select-option value="a-z">A-Z</b-form-select-option>
            <b-form-select-option value="z-a">Z-A</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
    </b-container> -->

      <b-container fluid>
        <b-row class="mt-5 row-coin">
          <b-col cols="3" class="mb-2 title"> Image </b-col>
          <b-col cols="3" class="title"> Symbol </b-col>
          <b-col class="title"> Name </b-col>
          <b-col class="title"> Current Price </b-col>
          <b-col class="title"> Market Cap </b-col>
        </b-row>
        <b-row
          v-for="coin in allCoin"
          :key="coin.id"
          class="mt-2 row-coin d-flex align-items-center"
        >
          <b-col cols="3" class="mb-2 text">
            <img :src="coin.image" alt="" class="rounded-circle w-25" />
            <!-- <img src="https://loremflickr.com/120/120" class="rounded-pill" /> -->
          </b-col>
          <b-col cols="3" class="text">
            <p>{{ coin.symbol }}</p>
            <!-- btc -->
          </b-col>
          <b-col class="text">
            <p>{{ coin.name }}</p>
            <!-- Bitcoin -->
          </b-col>
          <b-col class="text">
            <p>{{ coin.current_price }}</p>
            $
            <!-- 165465 $ -->
          </b-col>
          <b-col class="text">
            <p>{{ coin.market_cap }}</p>
            <!-- 45346348343 -->
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="empty" v-if="status == false">.</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Coin",

  components: {},

  data() {
    return {
      allCoin: {},
      status: null,
      // filterCoin: {},
      // sortItem: "",
    };
  },
  methods: {
    callCoins() {
      axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
        .then((res) => {
          console.log(res);
          this.allCoin = res.data;
          this.status = true;
        })
        .catch((error) => {
          console.error("error =>", error.message);
          this.status = false;
        });
    },
    // inputChange(e) {
    //   console.log(e.target._value);
    //   this.filterCoin.symbol = [
    //     ...this.allCoin.symbol.includes(e.target.value),
    //   ];
    //   console.log(this.filterCoin);
    // },
    // changeSort(e) {
    //   this.sortItem = e;
    // },
  },
  mounted() {
    this.callCoins();
  },
};
</script>
<style scoped>
.empty {
  height: 100vh;
  background-color: #a3a3a3;
}
.blockchain {
  background-color: #434343;
  color: aliceblue;
}
.selected {
  border: 1px solid #ccc;
}
.row-coin {
  border-bottom: 1px solid #ccc;
}
.row-coin .title {
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
}
.text {
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
