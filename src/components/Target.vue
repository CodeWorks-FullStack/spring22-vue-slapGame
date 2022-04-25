<template>
  <div class="col-md-10">
    <div class="bg-light rounded shadow">
      <img :src="target.img" alt="" class="img-fluid rounded-top" />
      <div class="d-flex align-items-center justify-content-between p-2">
        <!-- NOTE this is binding this class to the corresponding method below to set the class dynamically -->
        <h6 :class="setHealthColor(target)">Health: {{ target.health }}</h6>
        <button class="btn btn-success" v-if="isDead" @click="reset(target)">
          Reset
        </button>
        <button class="btn btn-danger" @click="slap(target)">Slap</button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
export default {
  // NOTE this is the 'parameter' of a prop. Think of this as us setting up data to be received by the child component.
  props: {
    target: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    // We will put methods in the return
    return {
      // This will return a bool that we can use in the template to conditionally render things
      isDead: computed(() => props.target.health === 0),
      slap(target) {
        target.health -= Math.floor(Math.random() * 20);
        if (target.health < 0) {
          target.health = 0;
        }
      },
      reset(target) {
        target.health = 100;
      },
      setHealthColor(target) {
        if (target.health < 30) {
          return "text-danger";
        } else if (target.health < 60) {
          return "text-warning";
        } else {
          return "text-success";
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
