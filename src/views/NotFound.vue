<template>
  <div class="container auto">
    <div class="big">
      <h1>
        <span class="fancy">A</span>n <span class="fancy">E</span>rror
        <span class="fancy">I</span>s <span class="fancy">O</span>ccured<span
          class="fancy"
        >
          P<whitecol>lease</whitecol> C<whitecol>ome</whitecol>
          B<whitecol>ack</whitecol>.</span
        >

        <font-awesome-icon
          class="fancy error-icon"
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

</style>