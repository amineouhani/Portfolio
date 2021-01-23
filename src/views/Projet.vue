<template>
  <fragment>
    <h1 class="project auto">My projects</h1>
    <div class="max auto marg">
      <div class="container-items auto">
        <div v-for="projet in projets" v-bind:key="projet.id" class="items">
          <div class="item">
            <div class="items-text">
              <h3 class="title">{{ projet.title }}</h3>
              <p class="text">
                {{ projet.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>
<script>
export default {
  data() {
    return {
      title: "My projets",
      projets: [
        {
          id: 1,
          title: "Cloudify",
          text: "Simple Bot discord with multiples features.",
        },
        {
          id: 2,
          title: "Portfolio",
          text: "My portfolio with VueJS",
        },
        {
          id: 3,
          title: "Epihelpcie",
          text: "no more content of this website at the moment.",
        },
      ],
    };
  },
};
</script>
<style>
</style>
