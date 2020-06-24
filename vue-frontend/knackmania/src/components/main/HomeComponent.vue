<template>
  <div v-if="index === knackIndex" class="bg-shark text-white font-serif overflow-hidden">
    <router-link to="/list">
      <div class="mr-8 ml-8 bg-shark-lighter rounded-1 mt-12 flex justify-center">
        <div class="w-4/5 p-8 ml-12 font-serif font-semibold">Saved Knacks</div>
        <div class="right-border w-1/5 bg-egg-blue min-h-full justify-center flex pl-8">
          <button class="rotate-90 pt-4 font-serif">GO</button>
        </div>
      </div>
    </router-link>
    <div class="h-40 mr-8 ml-8 bg-shark-lighter rounded-1 mt-12 flex justify-center">
      <div class="left-border w-1/5 bg-egg-blue justify-center flex pl-8">
        <button :disabled="knackIndex == 0" @click="prevKnack()" class="text-center pt-3half rotate-90 font-serif uppercase font-semibold">PREVIOUS</button>
      </div>
      <div class="p-8 font-serif text-center uppercase">{{ knack.name }}</div>
      <div class="right-border w-1/5 bg-egg-blue min-h-full justify-center flex pl-8">
        <button
         :disabled="index == arrayLength - 1"
          @click="nextKnack()"
          class="rotate-90 text-center pt-3half font-serif uppercase font-semibold"
        >NEXT</button>
      </div>
    </div>
    <div class="flex justify-center mt-8">
      <router-link v-bind:to="'/details/1'">
        <button class="px-10 py-2 bg-gradient-egg rounded-1 font-semibold">Submit</button>
      </router-link>
    </div>
  </div>
</template>

<script>
 import { mapGetters } from "vuex";
export default {
  props: [
    "index",
    "incrementIndex",
    "decrementIndex",
    "arrayLength",
    "knack",
    "increaseIndex"
  ],
  computed: {
     ...mapGetters('knack', ['knackIndex', 'knacks', 'knack'])
  },
  methods: {
    nextKnack() {
      this.incrementIndex();
    },
    prevKnack() {
      this.decrementIndex();
    }
  }
};
</script>