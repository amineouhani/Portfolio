<template>
  <fragment>
    <nav class="nav max auto marg mobile">
      <ul class="app">
        <li>
          <router-link class="logo" to="/">
            <font-awesome-icon class="item-nav" :icon="['fas', 'bolt']" />
          </router-link>
        </li>
        <li
          v-for="navigation in navigation"
          v-bind:key="navigation.id"
          class="space"
        >
          <router-link class="item-nav" v-bind:to="navigation.to">
            {{navigation.name }}
          </router-link>
        </li>
      </ul>
    </nav>
  </fragment>
</template>
<script>
export default {
  data() {
    return {
      navigation: [
        {
          id: 1,
          to: "/projects",
          name: "Projects",
        },
        {
          id: 2,
          to: "/blog",
          name: "Blog",
        },
      ],
    };
  },
};
</script>
<style>
.space {
  padding-left: 20px;
}
</style>