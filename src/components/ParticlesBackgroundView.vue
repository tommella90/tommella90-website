<template>
    <div id="particles-background">
      <vue-particles
        color="#74b970"
        :particleOpacity=".1"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="5"
        linesColor="#84d7a6"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="10"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      />
    </div>
  </template>
  
  <style scoped>
  #particles-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  #particles-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 100%);
    pointer-events: none; /* Ensure it doesn't interfere with user interactions */
    z-index: 1; /* This should sit above the particles */
  }
  </style>
  