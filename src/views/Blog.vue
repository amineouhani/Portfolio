<template>
  <fragment>
    <div style="margin-top: 2rem" class="auto marg blog">
      <h1 style="height: 80px; margin-left: 10px" class="auto">Blog</h1>
      <div v-for="blog in blogs" v-bind:key="blog.id" class="box">
        <header class="box__header">
          <div class="box__app">
            <i class="icon">
              <font-awesome-icon class="icon-blog" :icon="['fas', 'blog']"
            /></i>
            {{ blog.title }}
          </div>
          <time> {{ blog.time }} </time>
        </header>
        <section class="box__content">
          <p class="color-text">{{ blog.content }}</p>
        </section>

        <footer class="box__footer">{{ blog.author }}</footer>
      </div>
      <div class="space"></div>
    </div>
  </fragment>
</template>
<style>
.space {
  height: 10px;
}
.blog {
  max-width: 44rem;
}
.rem {
  margin-top: 2rem;
}
</style>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "lorem ipsum",
          content: "lorem ipsum dude",
          time: "21h55",
          author: "Amine",
        },
      ],
    };
  },
};
</script>