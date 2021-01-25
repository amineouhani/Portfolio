<template>
  <fragment>
    <nav class="nav max auto marg mobile">
      <ul class="app">
        <li>
          <router-link class="logo" to="/">
            <font-awesome-icon class="item-nav" :icon="['fas', 'bolt']"
          /></router-link>
        </li>
        <li class="space">
          <router-link class="item-nav" to="/projet">Projects</router-link>
        </li>
        <li class="space">
          <router-link class="item-nav" to="/blog">Blog</router-link>
        </li>
      </ul>
    </nav>
  </fragment>
</template>
<script>
export default {};
</script>
<style>
.space {
  padding-left: 20px;
}
</style>