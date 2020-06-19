<template>
  <div>
    <div class="w-full block mb-8 bg-shark-lighter text-white px-4 bolder py-2 text-xl">
      Solve A Rubik's Cube
      <span class="float-right text-shark-lightest">Medium</span>
    </div>

    <div class="text-white mx-8 bg-shark-lighter rounded-lg">
      <div class="text-lg px-5 pt-2">Necessities</div>
      <div class="text-sm px-5 pb-2 text-shark-lightest">- Drums</div>
      <div class="text-sm px-5 pb-2 text-shark-lightest">- Drums</div>
    </div>

    <div class="mt-8 text-white mx-8 bg-shark-lighter rounded-lg">
      <div class="text-lg px-5 pt-2">Tutorial</div>
      <div class>
        <video src poster class onclick="this.play()"></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    components: {
      
    }
};
</script>