<template>
  <div class="font-serif">
    <div class="w-full block mb-8 bg-shark-lighter text-white px-4 bolder py-2 text-lg">
      <h5>{{knack.name}}</h5>
      <h2 class="text-shark-lightest text-sm">{{knack.difficulty}} | {{knack.study}}</h2>
    </div>

    <div class="text-white mx-8 bg-shark-lighter rounded-lg">
      <div class="text-lg px-5 pt-2">Necessities</div>
      <div class="text-sm px-5 pb-2 text-shark-lightest">- {{knack.needs}}</div>
    </div>

    <div class="mt-8 text-white mx-8 bg-shark-lighter rounded-lg">
      <div class="text-lg px-5 pt-2">Tutorial</div>
      <div class="mt-2 ml-1 pb-2">
        <iframe
          :src="knack.videoTutorial"
          allow=" autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="flex justify-center mt-8 text-white">
      <router-link to="/home">
        <button class="px-10 mr-2 py-2 bg-gradient-egg rounded-1 font-semibold">Back</button>
      </router-link>
      <button class="px-10 ml-2 py-2 bg-gradient-egg rounded-1 font-semibold">Save</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      id: this.$route.params.id,
      knack: {
      }
    }
  },
  created() {
    axios.get(`https://knackmania.herokuapp.com/api/knacks/${this.id}`)
      .then(response => {
        this.knack = response.data;
        console.log(this.knack)
      });
  }
};
</script>