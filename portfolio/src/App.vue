<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
*{
  background: white;
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html,
body {
  height: 100%;
  margin: 0;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>