<template>
  <div class="h-16 bg-shark-lighter items-center fixed bottom-0 left-0 w-full">
    <div class="container flex justify-between">
      <router-link to="/home">
        <Home class="text-white mt-4" :size="36" />
      </router-link>
      <router-link to="/list">
        <List class="text-white" :size="36" @click="lol()" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Home from "vue-material-design-icons/Home";
import List from "vue-material-design-icons/FormatListBulleted";
export default {
  components: {
    Home,
    List,
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