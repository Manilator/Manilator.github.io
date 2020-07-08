<template>
  <div class="principal">
    <div id="dev">Designer & Front-end Developer</div>
    <a id="logo">
      <img src="../assets/logo1.png" height="200px">
    </a>
    <div id="name">Miguel Solino</div>
    <div id="desc">Bachelors Degree in Computer Engineering @ University of Minho</div>
    <div id="navbar">
      <a href="" id="navbar-item">
        <img src="../assets/twitter.png" alt="Twitter" height="40px">
      </a>
      <a href="" id="navbar-item">
        <img src="../assets/github.png" alt="Github" height="40px">
      </a>
      <a href="" id="navbar-item">
        <img src="../assets/linkedin.png" alt="Linkedin" height="40px">
      </a>
      <a href="" id="navbar-item">
        <img src="../assets/email.png" alt="Email" height="40px">
      </a>
      <div id="madeby">© Miguel Solino</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    logo: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.principal {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
}

#logo {
  margin-bottom: 50px;
}

#name {
  padding: 10px;
  padding-bottom: 0px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(41, 40, 44);
}

#dev {
  margin: 20px;
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(41, 40, 44);
}



#desc {
  margin: auto;
  width: 60%;
  text-align: center;
  color: rgb(29, 29, 37);
}

#navbar {
  margin: 20px;
}
 
#navbar-item img {
  margin: 10px;
  background-color: transparent;
  transition: transform .1s ease;
}

#navbar-item:hover img{
  opacity: 80%;
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.5); 
  transition: transform .1s ease;
}

#madeby {
  color: grey;
  margin: 10px;
}
</style>
