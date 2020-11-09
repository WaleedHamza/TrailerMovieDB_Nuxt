<template>
  <img
    class="VuetifyLogo"
    alt="Vuetify Logo"
    src="../static/powered-by-rectangle-green.svg"
  >
</template>

<style>
.VuetifyLogo {
  height: 150px;
  width: 150px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
