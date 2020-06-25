<template>
  <div class="bg-shark justify-center p-5 flex text-white w-full sticky top-0 left-0">
    <div class="tracking-wide-title font-serif font-semibold text-xl">
      KnackMania
      <span v-if="showOfflineText">(OFFLINE)</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOfflineText: false
    };
  },
  created() {
    window.addEventListener("load", () => {
      if (navigator.onLine) {
        this.showOfflineText = false;
      } else {
        this.offlineText = true;
      }
    });
  }
};
</script>