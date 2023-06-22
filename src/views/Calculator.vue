<template>
  <div class="main">
    <b-container
      class="calculator d-flex justify-content-center align-items-center"
    >
      <b-row class="d-flex justify-content-center align-items-center">
        <b-col sm="8" md="6" lg="5">
          <div class="calculator-box position-relative">
            <div
              class="display p-2 d-flex justify-align-content-start align-items-center position-relative"
            >
              <span>|</span>{{ display }}
            </div>
            <div
              class="oprator2 p-2 position-relative d-flex justify-align-content-start align-items-center"
            >
              {{ display == display2 ? "" : collection }}
            </div>
            <div class="mt-2">
              <b-button variant="warning" class="btn" @click="append('÷')"
                >÷</b-button
              >
              <b-button variant="warning" class="btn" @click="append('%')"
                >%</b-button
              >
              <b-button variant="warning" class="btn clear" @click="append('c')"
                >C</b-button
              >
              <b-button variant="warning" class="btn" @click="append('×')"
                >×</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('9')"
                >9</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('8')"
                >8</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('7')"
                >7</b-button
              >
              <b-button variant="warning" class="btn" @click="append('-')"
                >-</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('6')"
                >6</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('5')"
                >5</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('4')"
                >4</b-button
              >
              <b-button variant="warning" class="btn" @click="append('+')"
                >+</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('3')"
                >3</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('2')"
                >2</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('1')"
                >1</b-button
              >
              <b-button variant="warning" class="btn" @click="equal"
                >=</b-button
              >
              <b-button variant="secondary" class="btn" @click="dot"
                >.</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('0')"
                >0</b-button
              >
              <b-button variant="secondary" class="btn" @click="append('00')"
                >00</b-button
              >
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "calculator",

  components: {},

  data() {
    return {
      display: "",
      display2: "",
      collection: "",
      operator: null,
      previous: null,
      operatorClick: false,
      equalClick: false,
    };
  },
  methods: {
    clear() {
      this.display = "";
      this.display2 = "";
      this.collection = "";
      this.previous = null;
      this.operator = null;
      this.operatorClick = false;
      this.equalClick = false;
    },
    append(number) {
      this.display += number;
      if (this.equalClick === true) {
        this.clear();
      }
      if (number === "+") {
        this.operator = (a, b) => a + b;
        this.setPrevious();
      } else if (number === "-") {
        this.operator = (a, b) => a - b;
        this.setPrevious();
      } else if (number === "×") {
        this.operator = (a, b) => a * b;
        this.setPrevious();
      } else if (number === "÷") {
        this.operator = (a, b) => a / b;
        this.setPrevious();
      } else if (number === "%") {
        this.operator = (a, b) => (a / b) * 100;
        this.setPrevious();
      } else {
        if (this.operatorClick) {
          this.display2 = "";
          this.collection = "";
          this.operatorClick = false;
        }

        this.display2 += number;
        this.collection += number;

        if (number === "c") {
          this.clear();
        }
        if (this.previous !== number) {
          this.collection = `${this.operator(
            parseFloat(this.previous),
            parseFloat(this.display2)
          )}`;
        }
      }
    },
    dot() {
      if (this.display2.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.collection;
      this.operatorClick = true;
      this.display2 = "";
      this.collection = "";
    },
    equal() {
      this.display2 = `${this.operator(
        parseFloat(this.previous),
        parseFloat(this.display2)
      )}`;
      this.previous = this.display2;
      this.collection = this.display2;
      this.display = this.collection;
      this.equalClick = true;
    },
  },
};
</script>
<style scoped>
.calculator {
  height: 90vh;
}
.calculator-box {
  /* width: 20vw; */
  height: 450px;
  border: 1px solid #828282;
  direction: rtl;
  border-radius: 10px;
  overflow: hidden;
  font-size: 1.5rem;
  box-shadow: 1px 1px 20px 10px #5b5b5b;
}
.display {
  height: 13%;
  background-color: #5c5c5c;
  color: aliceblue;
  font-size: 2rem;
  padding-bottom: 30px;
}
.display span {
  animation: pointer 1.1s infinite;
  font-size: 2.5rem;
}
@keyframes pointer {
  0% {
    color: aliceblue;
  }
  50% {
    color: transparent;
  }
  100% {
    color: aliceblue;
  }
}
.oprator2 {
  top: 0;
  left: 0;
  width: 100%;
  height: 8%;
  color: aliceblue;
  background-color: #5c5c5c;
  border-bottom: 1px solid #ccc;
}
.btn {
  width: 20%;
  height: 12%;
  font-size: 1.7rem;
  margin: 2%;
}
.clear {
  width: 45%;
}
</style>
