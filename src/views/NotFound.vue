<template>
  <div class="container auto">
    <div class="big">
      <h1>
        <span class="fancy">A</span>n <span class="fancy">E</span>rror
        <span class="fancy">I</span>s <span class="fancy">O</span>ccured<span
          class="fancy"
        >
          p<whitecol>lease</whitecol> c<whitecol>ome</whitecol>
          b<whitecol>ack</whitecol>.</span
        >

        <font-awesome-icon
          class="fancy"
          style="font-size: 40px; margin-left: 9px"
          :icon="['fas', 'exclamation-circle']"
        />
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Error",
    };
  },
};
</script>

<style>
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
h1,
h2,
h3,
h4,
span,
div,
p {
  animation: 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0s 1 slideInFromLeft;
}
</style>