<template>
  <div>
    <v-top-nav></v-top-nav>
    <router-view></router-view>
    <v-bottom-nav></v-bottom-nav>
  </div>
</template>

<script>
import TopNavComponent from "./components/navigations/TopNavComponent";
import BottomNavComponent from "./components/navigations/BottomNavComponent";

export default {
  name: "App",

  components: {
    "v-top-nav": TopNavComponent,
    "v-bottom-nav": BottomNavComponent
  },

  data: () => ({
    //
  })
};
</script>
