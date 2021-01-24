<template>
  <fragment>
    <div class="container auto marg">
      <h1>
        <font-awesome-icon class="icons" :icon="['fas', 'code']" /> My Skills
      </h1>

      <p>
        <font-awesome-icon class="icons html5" :icon="['fab', 'html5']" />
      </p>
      <div class="container">
        <div class="skills html"><position class="position">60%</position></div>
      </div>

      <p><font-awesome-icon class="icons css3" :icon="['fab', 'css3']" /></p>
      <div class="container">
        <div class="skills css"><position class="position">55%</position></div>
      </div>

      <p>
        <font-awesome-icon class="icons javascript" :icon="['fab', 'js']" />
      </p>
      <div class="container">
        <div class="skills js"><position class="position">45%</position></div>
      </div>

      <p><font-awesome-icon class="icons php8" :icon="['fab', 'php']" /></p>
      <div class="container">
        <div class="skills php"><position class="position">40%</position></div>
      </div>

      <p><font-awesome-icon class="icons vuejs" :icon="['fab', 'vuejs']" /></p>
      <div class="container">
        <div class="skills vue"><position class="position">45%</position></div>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {};
</script>
<style>
</style>