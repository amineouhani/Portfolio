<template>
  <fragment>
    <nav class="nav max auto marg">
      <ul class="app">
        <li>
          <router-link style="font-weight: 800; margin-right: 1.5rem" to="/">
            <font-awesome-icon :icon="['fas', 'bolt']"
          /></router-link>
        </li>
        <li class="space">
          <router-link to="/projet">Projects</router-link>
        </li>
        <li class="space">
          <router-link to="/blog">Blog</router-link>
        </li>
        <li class="space">
          <router-link to="/skills">Skills</router-link>
        </li>
      </ul>
    </nav>
  </fragment>
</template>
<script>
export default {

};
</script>
<style>
.space {
  padding-left: 20px;
}
</style>