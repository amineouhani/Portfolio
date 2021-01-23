<template>
  <div class="container auto">
    <div class="big">
      <h1>
        Hi, I'm <span class="fancy">A</span>mine<span class="fancy">.</span>
      </h1>
      <p>Developer web and <bold>student</bold> from Bordeaux</p>
      <span class="handle">
        <a href="https://twitter.com/fuckthisimoutd" target="_blank"
          >@amineohn</a
        >
      </span>
      <div class="social-icons">
        <a
          class="social-icons__link"
          rel="me"
          title="GitHub"
          href="https://github.com/amineouhani"
          target="_blank"
        >
          <font-awesome-icon
            id="social-icons_icons"
            :icon="['fab', 'github']"
          />
        </a>
        <a
          class="social-icons__link"
          rel="me"
          title="Linkedin"
          href="https://www.linkedin.com/in/amine-ouhani-41b362176/"
          target="_blank"
        >
          <font-awesome-icon
            id="social-icons_icons"
            :icon="['fab', 'linkedin']"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home",
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