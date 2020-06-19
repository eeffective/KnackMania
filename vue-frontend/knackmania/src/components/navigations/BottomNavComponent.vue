<template>
  <div class="flex h-16 bg-shark-lighter items-center fixed bottom-0 left-0 w-full">
    <div class="container px-16 flex justify-between">
      <MenuIcon class="text-white ml-8 test" :size="32" />
      <CashIcon class="text-white" :size="32" />
      <SoccerIcon class="text-white mr-8" :size="32" @click="lol()"/>
    </div>
  </div>
</template>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CashIcon from "vue-material-design-icons/Cash";
import SoccerIcon from "vue-material-design-icons/Soccer";
export default {
  components: {
    MenuIcon,
    CashIcon,
    SoccerIcon
  },
  methods: {
    lol(){
      console.log('lol je stinks')
    }
  }
};
</script>

<style scoped>
.test {
}
</style>