<template>
  <div class="container-fluid">
    <div class="row p-2">
      <!-- NOTE you can only reference the variable in a v-for from within it's scope -->
      <!-- NOTE target is a 'banana' word for the variable holding the object we are iterating -->
      <!-- NOTE targets is the collection we are iterating over -->
      <!-- NOTE :target="target" is us passing a prop down to the child component as we iterate -->
      <div class="col-md-4" v-for="target in targets" :key="target.id">
        <img
          :src="target.img"
          alt=""
          class="selectable"
          data-bs-toggle="modal"
          data-bs-target="#target-modal"
          @click="activeTarget = target"
        />
      </div>
    </div>
  </div>

  <!-- Target modal component being injected here -->
  <Modal id="target-modal">
    <!-- NOTE this template #modal-title is looking for a slot with the same name to inject into -->
    <template #modal-title>
      <!-- Using elvis operator to allow the activeTarget to be null because it won't technically exist until we set it -->
      <h3>{{ activeTarget?.name }}</h3>
    </template>
    <template #modal-body>
      <Target :target="activeTarget" v-if="activeTarget" />
    </template>
  </Modal>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  // NOTE think of this as the "constructor" of the controller here
  name: "Home",
  setup() {
    // NOTE ref is reactive, takes a value (obj, bool, array, etc) and returns a reactive mutable object.
    // If you are going to set values to a ref externally (with v-model/forms), you need to use .value when pulling data out
    let activeTarget = ref();
    // This is a localized state - abstracted this to the Appstate
    // const state = reactive({
    //   targets: [
    //     {
    //       id: 1,
    //       name: "Joe Exotic",
    //       img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Joe_Exotic_%28Santa_Rose_County_Jail%29.png/800px-Joe_Exotic_%28Santa_Rose_County_Jail%29.png",
    //       health: 100,
    //     },
    //     {
    //       id: 2,
    //       name: "Master Chief",
    //       img: "https://cdn1.dotesports.com/wp-content/uploads/2021/08/09111246/MasterChief.jpg",
    //       health: 100,
    //     },
    //     {
    //       id: 3,
    //       name: "Carol Baskins",
    //       img: "https://www.thewrap.com/wp-content/uploads/2020/08/Carole-Baskin-1.jpg",
    //       health: 100,
    //     },
    //   ],
    // });
    // NOTE in order to access js variables, functions, in the above template etc they HAVE to be returned
    return {
      activeTarget,
      // NOTE think of the computed as the 'ProxyState.on' of vue
      targets: computed(() => AppState.targets),
    };
  },
};
</script>

<style scoped lang="scss">
// NOTE scoped keeps the styling in just this page
img {
  border-radius: 50%;
  height: 100px;
  width: 100px;
}
</style>
