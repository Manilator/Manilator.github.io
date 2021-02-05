<template>
  <div class="main-container">
    <div class="main-title">Wallpapers</div>
    <div class="container">
      <div class="vertical-container" id="first"></div>
      <div class="vertical-container" id="second"></div>
      <div class="vertical-container" id="third"></div>
    </div>
  </div>
</template>

<script>

var $ = window.$;
let columns = ["first", "second", "third"];
let place = -1;

export default {
  name: "Walls",
  components: {},
  mounted() {
    this.getWallpapers();
  },
  methods: {
    getWallpapers() {
      $.getJSON(
        "https://raw.githubusercontent.com/Manilator/manilator.github.io/gh-pages/portfolio/src/walls.json",
        function (data) {
          console.log(data);
          for (let i in data) {
            var div = $("<div />", {
              class: "wall-container",
            });
            var a = $("<a />", {
              target:"_blank",
              href: data[i].src,
            });
            var title = $("<div />", {
              class: "title",
              text: i,
            });
            var img = $("<img />", {
              class: "wallpaper",
              ref: "wallpaper",
              src: data[i].src,
              alt: "MyAlt",
            });
            if (place >= columns.length - 1) place = 0;
            else place++;
            console.log(place);
            console.log(columns.length);
            img.appendTo(a);
            title.appendTo(a);
            a.appendTo(div);
            div.appendTo($(`#${columns[place]}`));
          }
        }
      );
    },
  },
};
</script>

<style>
:root {
  --column-space: 24px;
  --row-space: 24px;
  --columns: 3;
}

* {
  padding: 0px;
  margin: 0px;
  background-color: transparent;
  font-family: "Muli";
  background-color: rgba(24,26,27,255);
  color: white;
}

.main-title {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
}

.container {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 10px;
}

.vertical-container {
  display: flex;
  flex-direction: column;
}

.wall-container {
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
  overflow: hidden;
}

.wallpaper {
  width: 500px;
  height: 100%;
  display: block;
  position: relative;
  transition: transform 0.2s ease;
}

.title {
  opacity: 0;
  position: absolute;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.466);
  color: white;
  font-size: 20px;
  bottom: -12.5px;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transition: opacity 0.2s ease;
  backdrop-filter: blur(3px);
}

.wall-container:hover .wallpaper {
    transform: scale(1.05);
}

.wall-container:hover .title {
  opacity: 1;
}
</style>
