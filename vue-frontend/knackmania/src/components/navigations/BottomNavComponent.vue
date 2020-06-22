<template>
  <div class="flex h-16 bg-shark-lighter items-center fixed bottom-0 left-0 w-full">
    <div class="container px-16 flex justify-between">
      <CompassRose class="text-white ml-8 test" :size="36" />
      <MenuIcon class="text-white" :size="36" />
      <AccountCircleOutline class="text-white mr-8" :size="36" @click="lol()" to="/" />
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu";
import CompassRose from "vue-material-design-icons/CompassRose";
import AccountCircleOutline from "vue-material-design-icons/AccountCircleOutline";
export default {
  components: {
    MenuIcon,
    CompassRose,
    AccountCircleOutline
  },
  methods: {
    lol() {
      console.log("lol je stinks");
    }
  }
};
</script>

<style scoped>

</style>