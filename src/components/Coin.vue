<template>
  <div class="blockchain">
    <b-container>
      <b-row class="d-flex justify-content-center m-2">
        <b-col cols="5">
          <b-form-input
            placeholder="Enter your coin name..."
            @keyup="inputChange"
          ></b-form-input>
        </b-col>
        <b-col cols="3">
          <b-form-select
            class="selected w-100 h-100 rounded-1"
            :value="null"
            @change="selectChange"
          >
            <b-form-select-option value="null">Market Cap</b-form-select-option>
            <b-form-select-option value="highest">Highest</b-form-select-option>
            <b-form-select-option value="lowest">Lowest</b-form-select-option>
            <b-form-select-option value="a-z">A-Z</b-form-select-option>
            <b-form-select-option value="z-a">Z-A</b-form-select-option>
          </b-form-select>
        </b-col>
      </b-row>
    </b-container>

    <b-container fluid>
      <b-row class="mt-5 row-coin">
        <b-col class="mb-2 title"> Icon </b-col>
        <b-col class="title"> Symbol </b-col>
        <b-col class="title"> Name </b-col>
        <b-col class="title"> Current Price </b-col>
        <b-col class="title"> Market Cap </b-col>
        <b-col class="title"> Web Site </b-col>
      </b-row>
      <b-row
        v-for="coin in allCoin"
        :key="coin.id"
        class="hoverCoin mt-2 row-coin d-flex align-items-center"
      >
        <b-col class="mb-2 text">
          <img :src="coin.icon" alt="" class="rounded-circle w-25" />
          <!-- <img src="https://loremflickr.com/120/120" class="rounded-pill" /> -->
        </b-col>
        <b-col class="text">
          <p>{{ coin.symbol }}</p>
          <!-- btc -->
        </b-col>
        <b-col class="text">
          <p>{{ coin.name }}</p>
          <!-- Bitcoin -->
        </b-col>
        <b-col class="text">
          <p>{{ coin.price.toFixed(3) }} $</p>

          <!-- 165465 $ -->
        </b-col>
        <b-col class="text">
          <p>{{ coin.marketCap }}</p>
          <!-- 45346348343 -->
        </b-col>
        <b-col class="text">
          <a :href="coin.websiteUrl" target="_blank">{{ coin.websiteUrl }}</a>
          <!-- 45346348343 -->
        </b-col>
      </b-row>
    </b-container>
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
    };
  },
  methods: {
    callCoins() {
      axios("https://api.coinstats.app/public/v1/coins?skip=0")
        .then((res) => {
          this.allCoin = res.data.coins;
        })
        .catch((error) => {
          console.error("error =>", error.message);
        });
    },
    inputChange(e) {
      const event = e.target._value;
      if (event) {
        this.allCoin = this.allCoin.filter(
          (coin) =>
            coin.symbol.toLowerCase().includes(event.trim().toLowerCase()) ||
            coin.name.toLowerCase().includes(event.trim().toLowerCase())
        );
        if (e.key == "Backspace") {
          this.allCoin = this.callCoins();
        }
      }
    },
    selectChange(e) {
      this.allCoin = this.allCoin.sort((x, y) => {
        switch (e) {
          case "null":
            return y.marketCap - x.marketCap;
          case "highest":
            return y.price - x.price;
          case "lowest":
            return x.price - y.price;
          case "a-z":
            return x.name.localeCompare(y.name);
          case "z-a":
            return y.name.localeCompare(x.name);
          default:
            return y.marketCap - x.marketCap;
        }
      });
    },
  },
  mounted() {
    this.callCoins();
  },
};
</script>
<style scoped>
.blockchain {
  background-color: #434343;
  color: aliceblue;
  padding-top: 80px;
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
.hoverCoin {
  transition: 0.5s;
}
.hoverCoin:hover {
  background-color: #343434;
  color: aqua;
}
a {
  color: aliceblue;
  text-decoration: none;
  font-size: 1rem;
}
.hoverCoin:hover a {
  color: aqua;
}
</style>
