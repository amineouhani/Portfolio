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
        <div class="skills html"><position class="position">75%</position></div>
      </div>

      <p><font-awesome-icon class="icons css3" :icon="['fab', 'css3']" /></p>
      <div class="container">
        <div class="skills css"><position class="position">55%</position></div>
      </div>

      <p>
        <font-awesome-icon class="icons javascript" :icon="['fab', 'js']" />
      </p>
      <div class="container">
        <div class="skills js"><position class="position">65%</position></div>
      </div>

      <p><font-awesome-icon class="icons php8" :icon="['fab', 'php']" /></p>
      <div class="container">
        <div class="skills php"><position class="position">40%</position></div>
      </div>

      <p><font-awesome-icon class="icons vuejs" :icon="['fab', 'vuejs']" /></p>
      <div class="container">
        <div class="skills vue"><position class="position">50%</position></div>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
};
</script>
<style>
.icons {
  font-size: 25px;
}
.html5 {
  color: #f2682e;
}
.php8 {
  color: #8993be;
}
.css3 {
  color: #44a9dc;
}
.javascript {
  color: #f2bf26;
}
.vuejs {
  color: #41b883;
}
.container {
  margin: 0 auto !important;
}
.position {
    margin-right: 1px;
    background-color: #fdfdfd4a;
    padding: 9px;
    border-radius: 20px;
}
.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fbfbfb;
  border-radius: 20px;
}

.html {
  width: 70%;
  background-color: #e07040;
}
.css {
  width: 55%;
  background-color: #52b6e7;
}
.js {
  width: 65%;
  background-color: #f2b836;
}
.php {
  width: 40%;
  background-color: #7982aa;
}
.vue {
  width: 50%;
  background-color: #50c791;
}
</style>