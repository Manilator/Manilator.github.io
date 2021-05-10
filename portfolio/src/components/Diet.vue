<template>
  <div class="container">
    <h1>Diet Planner</h1>
    <form>
      <p>Breakfast/Snack</p>
      <input type="text" placeholder="Breakfast/Snack" ref="breakfast"/>
      <p>Lunch</p>
      <input type="text" placeholder="Lunch/Dinner Meat" ref="meat"/>
      <p>Dinner</p>
      <input type="text" placeholder="Lunch/Dinner Fish" ref="fish"/>
      <input type="submit" value="Submit" class="submit" @click.prevent="getFormValues()"/>
    </form>
    <WeekTable :json="json" :key="week_key"/>
  </div>
</template>

<script>
//var $ = window.$;
//let columns = ["first", "second", "third"];
//let place = -1;

import WeekTable from "./WeekTable.vue";

export default {
  name: "Walls",
  components: {
    WeekTable,
  },
  data: function () {
    return {
      json: {},
      week_key: 0,
    }
  },
  methods: {
    getFormValues() {
      let breakfast = this.$refs.breakfast.value
      let meat = this.$refs.meat.value
      let fish = this.$refs.fish.value
      this.json.breakfast = breakfast.split(",");
      this.json.meat = meat.split(",");
      this.json.fish = fish.split(",");
      this.week_key++;
    }
  },
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  font-family: "Muli";
  background-color: rgba(24, 26, 27, 255);
  color: white;
}

html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 45px;
  margin: 20px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  alin-items: center;
  text-align: center;
}

p {
  font-size: 20px;
  margin-top: 10px;
}

input {
  background-color: #ffffff;
  border-radius: 20px;
  color: #000000;
  font-size: 20px;
  padding: 10px;
  margin: 10px;
  border-width: 3px;
}

.submit {
  background-color: #0d9695;
  border: none;
}

.submit:hover {
  background-color: #19bdbc;
}
</style>
