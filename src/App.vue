<template>
  <fragment>
    <Navigation />
    <main id="app">
      <router-view />
      <atom-spinner
        v-if="!isloaded"
        :animation-duration="1000"
        :size="100"
      />
    </main>
  </fragment>
</template>
<script>
import Navigation from "./components/Navigation";
import { AtomSpinner } from "epic-spinners";
export default {
  data: () => {
    return {
      isloaded: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloaded = true;
      }
    };
  },
  components: {
    Navigation,
    AtomSpinner,
  },
  watch: {
    $route(to) {
      document.title = to.meta.title || "";
    },
  },
};
</script>
<style>
.atom-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
