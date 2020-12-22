<template>
  <div class="principal">
    <div id="dev"><p ref="dev">Designer & Front-end Developer</p></div>
    <div id="logo" >
      <img src="../assets/logo1.svg" height="200px" ref="logo">
    </div>
    <div id="name"><p ref="name">Miguel Solino</p></div>
    <div id="desc"><p ref="desc">Bachelors Degree in Computer Engineering @ University of Minho</p></div>
    <div id="navbar">
      <a href="https://twitter.com/Manilator" id="navbar-item" >
        <img src="../assets/twitter.svg" alt="Twitter" height="40px" id="twitter" ref="twitter">
      </a>
      <a href="https://open.spotify.com/user/manilator777" id="navbar-item" >
        <img src="../assets/spotify.svg" alt="Spotify" height="40px" id="spotify" ref="spotify">
      </a>
      <a href="https://github.com/Manilator" id="navbar-item" >
        <img src="../assets/github.svg" alt="Github" height="40px" id="github" ref="github">
      </a>
      <a href="https://www.linkedin.com/in/miguelsolino/" id="navbar-item">
        <img src="../assets/linkedin.svg" alt="Linkedin" height="40px" id="linkedin" ref="linkedin">
      </a>
      <a href="mailto:miguel.solino@protonmail.com" id="navbar-item">
        <img src="../assets/email.svg" alt="Email" height="40px" id="email" ref="email">
      </a>
      <div id="madeby"><p ref="madeby">© Miguel Solino</p></div>
    </div>
  </div>
</template>

<script>
import { Power4, Back, gsap } from 'gsap'
var $ = window.$

export default {
  mounted() { 
    const { logo, dev, name, desc, madeby, twitter, github, linkedin, email, spotify } = this.$refs
    const timeline = gsap.timeline(); 
    
    timeline.from(dev,1,{
      y: 250,
      ease: Power4.easeOut,
    }, '+=0.2')
    .from(logo,1,{
      y: 250,
      ease: Power4.easeOut,
    },'-=0.5' )
    .from(name,1,{
      y: 100,
      ease: Power4.easeOut,
    },'-=0.6' )
    .from(desc,1,{
      y: 100,
      ease: Power4.easeOut,
    },'-=0.6' )
    .from(twitter,1,{
      scale: 0,
      ease: Back.easeOut.config(5),
    },'-=0.6' )
    .from(spotify,1,{
      scale: 0,
      ease: Back.easeOut.config(5),
    },'-=0.6' )
    .from(github,1,{
      scale: 0,
      ease: Back.easeOut.config(5),
    },'-=0.6' )
    .from(linkedin,1,{
      scale: 0,
      ease: Back.easeOut.config(5),
    },'-=0.6' )
    .from(email,1,{
      scale: 0,
      ease: Back.easeOut.config(5),
    },'-=0.6' )
    .from(madeby,1,{
      y: 100,
      ease: Power4.easeOut,
    },'-=0.6' ) 

    $('#twitter').hover(function() {
    gsap.to(twitter, 0.5, {scale:1.5, ease: Power4.easeOut});
    },
    function() {
    gsap.to(twitter, 0.5, {scale:1, ease: Power4.easeOut});
    });
    $('#spotify').hover(function() {
    gsap.to(spotify, 0.5, {scale:1.5, ease: Power4.easeOut});
    },
    function() {
    gsap.to(spotify, 0.5, {scale:1, ease: Power4.easeOut});
    });
    $('#github').hover(function() {
    gsap.to(github, 0.5, {scale:1.5, ease: Power4.easeOut});
    },
    function() {
    gsap.to(github, 0.5, {scale:1, ease: Power4.easeOut});
    });
    $('#linkedin').hover(function() {
    gsap.to(linkedin, 0.5, {scale:1.5, ease: Power4.easeOut});
    },
    function() {
    gsap.to(linkedin, 0.5, {scale:1, ease: Power4.easeOut});
    });
    $('#email').hover(function() {
    gsap.to(email, 0.5, {scale:1.5, ease: Power4.easeOut});
    },
    function() {
    gsap.to(email, 0.5, {scale:1, ease: Power4.easeOut});
    });
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
  overflow: hidden;
}

#name {
  padding: 10px;
  padding-bottom: 0px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(41, 40, 44);
  overflow: hidden;
}

#dev {
  margin: 20px;
  margin-bottom: 40px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(41, 40, 44);
  overflow: hidden;
}

#desc {
  margin: auto;
  width: 60%;
  text-align: center;
  color: rgb(29, 29, 37);
  overflow: hidden;
}

#navbar {
  margin: 20px;
}
 
#navbar-item {
  outline : none;
}

#navbar-item img {
  margin: 10px;
  background-color: transparent;
  outline : none;
}

#madeby {
  color: grey;
  margin: 10px;
  overflow: hidden;
}
</style>
