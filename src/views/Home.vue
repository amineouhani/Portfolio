<template>
  <div class="container auto">
    <div class="big">
      <h1>
        Hi, I'm
        <span @click="Open()" class="fancy pointer">A</span>mine<span
          class="fancy"
          >.</span
        >
      </h1>
      <p>Developer web from <bold>Bordeaux</bold></p>
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

        <a
          class="social-icons__link"
          rel="me"
          title="Discord"
          style="margin-top: -19px"
          href="https://dsc.bio/reactjs"
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
                href="https://spotify.com"
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
import axios from "axios";
export default {
  data() {
    return {
      title: "Home",
      spotify: null,
    };
  },
  created() {
    window.addEventListener("keyup", this.listen);
  },
  mounted() {
    axios
      .get(
        "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=amineprojet&api_key=62816987eec5933a0fad21657ab72e57&format=json&limit=1"
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
          "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=amineprojet&api_key=62816987eec5933a0fad21657ab72e57&format=json&limit=1"
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
img {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  border-radius: 5px;
}
spotify {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  opacity: 0.8;
  cursor: pointer;
}
.items:before,
.items:hover,
.items:after {
  opacity: 1;
  transition: all 0.4s ease-out;
}
</style>