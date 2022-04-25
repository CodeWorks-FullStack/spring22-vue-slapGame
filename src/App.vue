<template>
  <!-- NOTE the template portion is going to the scaffolding of how we want a page or component to look -->
  <header>
    <!-- This is a component -->
    <Navbar />
  </header>
  <main>
    <!-- NOTE router-view shows what 'page' we are currently visiting -->
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
      Made with 💖 by CodeWorks
    </div>
  </footer>
</template>

<script>
// NOTE this is where all of our JS logic will go - think of this as the controller
import { computed } from "vue";
import { AppState } from "./AppState";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>

<style lang="scss">
//NOTE this is where we would put styling for our components and pages
@import "./assets/scss/main.scss";
</style>
