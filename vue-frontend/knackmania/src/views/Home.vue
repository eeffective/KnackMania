<template>
  <div class="bg-shark text-white font-serif overflow-hidden">
    <router-link to="/saved/1">
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
        class="focus:outline-none relative left-border w-1/5 bg-egg-blue justify-center flex pl-8"
      >
      <ArrowLeft class="absolute right-0 mt-13" :size="45" />
      </button>
      <div class="p-8 font-serif text-center uppercase">{{ knacks[index].name }}</div>
      <button
        :disabled="index == knacks.length -1"
        @click="next"
        class="relative focus:outline-none right-border w-1/5 bg-egg-blue min-h-full justify-center flex pl-8"
      >
        <ArrowRight class="absolute mt-13 right-0" :size="45" />
      </button>
    </div>
    <div class="flex justify-center mt-8">
      <router-link v-bind:to="'/details/' + knacks[index].id">
        <h5 class="px-10 py-2 bg-gradient-egg rounded-1 font-semibold">Check details</h5>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ArrowRight from "vue-material-design-icons/ArrowRight";
import ArrowLeft from "vue-material-design-icons/ArrowLeft";
export default {
  components: {
    ArrowRight,
    ArrowLeft
  },
  data() {
    return {
      knacks: [],
      index: 0
    };
  },
  methods: {
    next() {
      this.index++;
    },
    prev() {
      this.index--;
    }
  },
  created() {
    axios.get("https://knackmania.herokuapp.com/api/knacks/").then(response => {
      this.knacks = response.data;
      console.log(this.knacks);
    });
  }
};
</script>
