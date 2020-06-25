<template>
  <div class="h-16 bg-shark-lighter items-center fixed bottom-0 left-0 w-full">
    <div class="nav-container flex justify-between">
      <router-link to="/home">
        <Home class="text-white mt-4" :size="36" />
      </router-link>
      <Download v-if="showDownload" @click="install" :size="36" class="text-white" />
      <router-link to="/saved/1">
        <List class="text-white" :size="36" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Home from "vue-material-design-icons/Home";
import List from "vue-material-design-icons/FormatListBulleted";
import Download from "vue-material-design-icons/Download";

let installEvent;
export default {
    components: {
    Home,
    List,
    Download
  },
  data() {
    return {
      showDownload: false
    };
  },
  created() {
    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      installEvent = e;
      this.showDownload = true;
    });
  },
  methods: {
    install(){
      this.showDownload = false;
      installEvent.prompt();
      installEvent.userChoice.then(() => {
        installEvent = null;
      })
    }
  }
};
</script>

<style scoped>
</style>


  
  methods: {
    
  }
};