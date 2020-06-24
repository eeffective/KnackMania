<template>
  <div class="bg-shark text-white font-serif overflow-hidden">
    <router-link to="/list">
      <div class="mr-8 ml-8 bg-shark-lighter rounded-1 mt-12 flex justify-center">
        <div class="w-4/5 p-8 ml-12 font-serif font-semibold">Saved Knacks</div>
        <div class="right-border w-1/5 bg-egg-blue min-h-full justify-center flex pl-8">
          <h5 class="rotate-90 pt-4 font-serif">GO</h5>
        </div>
      </div>
    </router-link>
    <div class="h-40 mr-8 ml-8 bg-shark-lighter rounded-1 mt-12 flex justify-center">
      <button
        :disabled="index <= 0"
        @click="prev"
        class="left-border w-1/5 bg-egg-blue justify-center flex pl-8"
      >
        <h5 class="rotate-90-2 font-serif mt-16 mr-6 uppercase font-semibold">PREVIOUS</h5>
      </button>
      <div class="p-8 font-serif text-center uppercase">{{ allKnacks[index].name }}</div>
      <button
        :disabled="index == allKnacks.length -1"
        @click="next "
        class="right-border w-1/5 bg-egg-blue min-h-full justify-center flex pl-8"
      >
        <h5 class="rotate-90 text-center mr-6 mt-16 font-serif uppercase font-semibold">NEXT</h5>
      </button>
    </div>
    <div class="flex justify-center mt-8">
      <router-link v-bind:to="'/details/' + allKnacks[index].id">
        <h5 class="px-10 py-2 bg-gradient-egg rounded-1 font-semibold">Submit</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      index: 0
    };
  },
  methods: {
    ...mapActions(["getKnacks"]),
    next() {
      this.index++;
    },
    prev() {
      this.index--;
    }
  },
  created() {},
  computed: {
    ...mapGetters(["allKnacks"]),
    knacks() {
      return this.getKnacks();
    }
  },
  mounted() {},
  updated() {}
};
</script>
