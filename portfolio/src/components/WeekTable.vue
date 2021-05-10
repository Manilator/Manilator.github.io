<template>
  <div class="container">
    <table>
      <tr>
        <th></th>
        <th scope="col">Monday</th>
        <th scope="col">Tuesday</th>
        <th scope="col">Wednesday</th>
        <th scope="col">Thursday</th>
        <th scope="col">Friday</th>
      </tr>
      <tr id="breakfast">
        <th scope="row">BreakFast</th>
      </tr>
      <tr id="snack1">
        <th scope="row">Snack 1</th>
      </tr>
      <tr id="lunch">
        <th scope="row">Lunch</th>
      </tr>
      <tr id="snack2">
        <th scope="row">Snack 2</th>
      </tr>
      <tr id="dinner">
        <th scope="row">Dinner</th>
      </tr>
      <tr id="snack3">
        <th scope="row">Snack 3</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "WeekTable",
  props: {
    json: {},
  },
  mounted() {
    if (this.json.breakfast && this.json.meat && this.json.fish) {
      this.fillArray(this.json.breakfast);
      this.fillArray(this.json.meat);
      this.fillArray(this.json.fish);
      this.json.breakfast = this.shuffle(this.json.breakfast);
      this.json.meat = this.shuffle(this.json.meat);
      this.json.fish = this.shuffle(this.json.fish);
      console.log(this.json.breakfast);
      this.fillWeekTable();
    }
  },
  methods: {
    fillArray(array) {
      if (array.length === 0 || array[0] === "") return 0;
      while (array.length < 5) {
        const pos = Math.floor(Math.random() * (array.length - 0) + 0);
        array.push(array[pos]);
      }
      console.log(array);
    },
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
    fillWeekTable() {
        this.fillWeekTableLine(this.json.breakfast, "breakfast");
        this.fillWeekTableLine(this.json.breakfast, "snack1");
        this.fillWeekTableLine(this.json.meat, "lunch");
        this.fillWeekTableLine(this.json.breakfast, "snack2");
        this.fillWeekTableLine(this.json.fish, "dinner");
        this.fillWeekTableLine(this.json.breakfast, "snack3");
    },
    fillWeekTableLine(array, id) {
      let element = document.getElementById(id);
      for (let i = 0; i < 5; i++) {
        element.innerHTML += `<td>${array[i]}</td>`;
      }
      this.shuffle(array);
    },
  },
};
</script>

<style>
th {
  padding: 10px;
}
</style>
