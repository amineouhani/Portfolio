<template>
  <div class="container auto">
    <div class="big">
      <h1>
        Hi, I'm
        <span @click="Open()" class="fancy pointer">{{ letter }}</span
        >{{ name }}<span class="fancy">.</span>
      </h1>
      <p>
        Developer web from <bold>{{ city }}</bold>
      </p>
      <span class="handle">
        <a v-bind:href="twitter" target="_blank">{{ twitterTag }}</a>
      </span>
      <div class="social-icons">
        <a
          class="social-icons__link"
          rel="me"
          title="GitHub"
          v-bind:href="github"
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
          v-bind:href="linkedin"
          target="_blank"
        >
          <font-awesome-icon
            id="social-icons_icons"
            :icon="['fab', 'linkedin']"
          />
        </a>

        <a
          class="social-icons__link"
          rel="me"
          title="Discord"
          style="margin-top: -19px"
          v-bind:href="discordbio"
          target="_blank"
        >
          <font-awesome-icon
            id="social-icons_icons"
            :icon="['fab', 'discord']"
          />
        </a>
      </div>
      <div class="items adjustement">
        <div class="item">
          <div v-if="spotify" class="items-text spotify">
            <p class="title flex">
              <font-awesome-icon
                class="spotify-icon"
                :icon="['fab', 'spotify']"
              />
              <spotify>{{ spotify.recenttracks.track[0].name }}</spotify>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//<img //v-bind:src="spotify.recenttracks.track[0].image[2]['#text']"/>
const song = require("../assets/easterEgg/ohnono.mp3");
import set from "../config";
import axios from "axios";
const link = "https://www.last.fm/music/"
export default {
  data() {
    return {
      title: "Home",
      spotify: null,
      letter: set.letter,
      city: set.city,
      name: set.name,
      twitter: set.twitter,
      twitterTag: set.twitterTag,
      github: set.github,
      discordbio: set.discordbio,
      linkedin: set.linkedin,
      link: link
    };
  },
  created() {
    window.addEventListener("keyup", this.listen);
  },
  mounted() {
    axios
      .get(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&$user=${set.apiUser}&api_key=${set.apiKey}&format=json&limit=1`
      )
      .then((response) => {
        this.spotify = response.data;
        this.loading = false;
      })
      .catch((e) => (this.loading = false));
    setInterval(this.updateSpotify, 5000);
  },
  methods: {
    Open() {
      var audio = new Audio(song);
      audio.play();
    },
    updateSpotify() {
      axios
        .get(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${set.apiUser}&api_key=${set.apiKey}&format=json&limit=1`
        )
        .then((response) => {
          this.spotify = response.data;
        });
    },
    reset() {
      Object.keys(this.isChecked).forEach((k) => {
        this.isChecked[k] = false;
      });
      this.current = 0;
    },
    listen(e) {
      const key = e.which || e.keyCode || e.detail;
      if (this.keys.includes(key)) {
        if (key === this.keys[this.current]) {
          this.current += 1;
          this.isChecked[this.current - 1] = true;
          if (this.current === this.keys.length) {
            this.reset();
          }
        } else {
          this.reset();
        }
      }
    },
  },
};
</script>

<style>
</style>