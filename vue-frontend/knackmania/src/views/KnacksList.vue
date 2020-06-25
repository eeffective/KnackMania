<template>
  <div class="font-serif">
    <div class="w-full mb-6 bg-shark-lighter text-white pl-4 bolder py-2 text-xl">Saved Knacks</div>
    <ul>
      <li v-for="knack in user.savedKnacks" :key="knack.id" class="mb-4">
        <div class="text-white mx-8 bg-shark-lighter rounded-lg">
          <div class="text-base px-5 pt-2 font-semibold">{{knack.name}}</div>
          <div class="text-sm px-5 pb-2 text-shark-lightest">{{knack.difficulty}} | {{knack.study}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      user: {}
    };
  },
  created() {
    axios
      .get(`https://knackmania.herokuapp.com/api/users/${this.id}`)
      .then(response => {
        this.user = response.data;
        console.log(this.user);
      });
  }
};
</script>