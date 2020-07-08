<template>
  <div class="animated-background">
      <div class="forms">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
          <img src="../assets/x.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.animated-background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.forms img {
    position: absolute;
    height: 30px;
    background-color: transparent;
    fill: white;
    filter: invert(0);
}

.forms img:nth-child(1) {
    top: 12%;
    left: 42%;
    animation: animate 10s linear infinite;
}

.forms img:nth-child(2) {
    top: 70%;
    left: 50%;
    animation: animate 7s linear infinite;
}

.forms img:nth-child(3) {
    top: 13%;
    left: 6%;
    animation: animate 9s linear infinite;
}

.forms img:nth-child(4) {
    top: 67%;
    left: 60%;
    animation: animate 10s linear infinite;
}

.forms img:nth-child(5) {
    top: 67%;
    left: 10%;
    animation: animate 6s linear infinite;
}

.forms img:nth-child(6) {
    top: 80%;
    left: 70%;
    animation: animate 11s linear infinite;
}

.forms img:nth-child(7) {
    top: 60%;
    left: 80%;
    animation: animate 12s linear infinite;
}

.forms img:nth-child(8) {
    top: 32%;
    left: 25%;
    animation: animate 14s linear infinite;
}

.forms img:nth-child(9) {
    top: 90%;
    left: 25%;
    animation: animate 9s linear infinite;
}

.forms img:nth-child(10) {
    top: 20%;
    left: 80%;
    animation: animate 5s linear infinite;
}

.forms img:nth-child(11) {
    top: 90%;
    left: 90%;
    animation: animate 4s linear infinite;
}

@keyframes animate{
    0%{
        transform: scale(0) translate(0) rotate(0);
        opacity: 1;
    }
    100%{
        transform: scale(1.3) translateY(-90px) rotate(360deg);
        opacity: 0;
    }
}
/*
@media (prefers-color-scheme: dark) {
.forms img {
    filter: invert(100);
  }
}
*/
</style>
