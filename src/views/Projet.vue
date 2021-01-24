<template>
  <fragment>
    <h1 class="project auto">My projects</h1>
    <div class="max auto marg">
      <div class="container-items auto">
        <div v-for="projet in projets" v-bind:key="projet.id" class="items">
          <a class="selected" v-bind:href="projet.link" target="_blank">
            <div class="item">
              <div class="items-text">
                <h3 class="title">{{ projet.title }}</h3>
                <p class="text">
                  {{ projet.text }}
                </p>
              </div>
            </div>
          </a>
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
          text: "Simple Bot discord with multiples features with NuxtJS & Bulma.",
          link: "https://cloudify.fun"
        },
        {
          id: 2,
          title: "Portfolio",
          text: "My portfolio with VueJS & Axios",
          link: "https://amineouhani.fr"
        },
        {
          id: 3,
          title: "FoundSneakers",
          text: "Compare and found sneakers at best price Node.JS & Bootstrap.",
          link: "https://foundsneakers.store"
        },
      ],
    };
  },
};
</script>
<style>

</style>
