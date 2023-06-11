<template>
  <div class="weather-box">
    <div class="search-box">
      <b-input-group size="lg" class="mb-2">
        <b-input-group-prepend is-text @click="fetchWeather" class="iconSearch">
          <b-icon
            font-scale="3"
            animation="throb"
            icon="search"
            class="icon"
          ></b-icon>
        </b-input-group-prepend>
        <b-form-input
          type="search"
          class="search-bar"
          placeholder="Search for weather conditions"
          v-model="query"
          @keypress="fetchWeather"
        ></b-form-input>
      </b-input-group>
    </div>

    <div
      class="d-flex justify-content-center align-items-center flex-column mt-2"
      v-if="weather.main !== undefined"
    >
      <b-card no-body class="description">
        <template #header>
          <h4 class="location">
            Country: <span>{{ weather.name }} , {{ weather.sys.country }}</span>
          </h4>
        </template>

        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title-temp"
            >Temp:
            <span>{{ Math.floor(weather.main.temp) }}</span>
            C</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Feels Like:
            <span>{{ Math.floor(weather.main.feels_like) }}</span>
            C</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Max Temp:
            <span>{{ Math.floor(weather.main.temp_max) }}</span>
            C</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Min Temp:
            <span>{{ Math.floor(weather.main.temp_min) }}</span> C</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Sunrise: <span>{{ dateSunrise() }}</span></b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Sunset: <span>{{ dateSunset() }}</span></b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Pressure:
            <span>{{ weather.main.pressure }}</span> hPa</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >Humidity: <span>{{ weather.main.humidity }}</span> %</b-card-title
          >
        </b-card-body>
        <b-card-body
          class="b-card-body d-flex justify-align-content-start align-items-center"
        >
          <b-card-title class="b-card-title"
            >WindSpeed: <span>{{ weather.wind.speed }}</span> m/h</b-card-title
          >
        </b-card-body>
        <div
          class="d-flex justify-content-center"
          v-if="weather.weather[0].icon !== undefined"
        >
          <b-card-img
            style="max-width: 6rem"
            :src="
              'https://openweathermap.org/img/wn/' +
              weather.weather[0].icon +
              '@2x.png'
            "
            alt="Image"
          ></b-card-img>
        </div>
        <b-card-footer class="b-card-footer"
          >Status:
          <span>{{ weather.weather[0].description }}</span></b-card-footer
        >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "weather",
  data() {
    return {
      api_key: "ef3f828cf0c8ea1efbaa3e9ed840577f",
      api: "https://api.openweathermap.org/data/2.5",
      query: "",
      weather: {},
    };
  },
  methods: {
    fetchWeather(e) {
      console.log(e);
      if (e.key == "Enter" || e.type == "click") {
        fetch(
          `${this.api}/weather?q=${this.query}&appid=${this.api_key}&units=metric`
        )
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            console.log(response);
            this.weather = response;
          });
      }
    },
    dateSunrise() {
      let myDate = new Date(this.weather.sys.sunrise * 1000);
      let hour = "0" + myDate.getHours();
      let minute = "0" + myDate.getMinutes();
      let second = "0" + myDate.getSeconds();

      return (
        hour.substring(1) +
        ":" +
        minute.substring(1) +
        ":" +
        second.substring(1)
      );
    },
    dateSunset() {
      let myDates = new Date(this.weather.sys.sunset * 1000);
      let hours = "0" + myDates.getHours();
      let minutes = "0" + myDates.getMinutes();
      let seconds = "0" + myDates.getSeconds();

      return (
        hours.substring(1) +
        ":" +
        minutes.substring(1) +
        ":" +
        seconds.substring(1)
      );
    },
  },
};
</script>
<style scoped>
.iconSearch:hover .icon {
  color: cornflowerblue;
  transition: 1s;
  cursor: pointer;
}
.description {
  box-shadow: 1px 1px 5px 3px #ccc;
}
.card-img {
  width: 300px;
}
span {
  color: #0f0f70;
}
.location {
  font-size: 1.6rem;
}
.b-card-body {
  border-bottom: 1px solid #ccc;
}
.b-card-title-temp {
  font-size: 1.7rem;
}
.b-card-title {
  font-size: 1.3rem;
}
.temp {
  background-color: aquamarine;
  width: 200px;
  height: 100px;
  font-size: 3rem;
  border: 1px solid #908f8f;
  border-radius: 10px;
}
.tempNumber {
  font-size: 3rem;
  color: #0f0f70;
}
.status {
  font-size: 2rem;
}
.b-card-footer {
  font-size: 1.3rem;
}
</style>
