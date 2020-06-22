<template>
  <div class="justify-around w-1/3">
    <svg id="svg" viewBox="0 0 36 36" class="overflow-visible max-w-4/5 orange">
      <path
        class="stroke-8 stroke-white fill-none"
        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="progress-animation stroke-round stroke-8 fill-none stroke-sunset-orange"
        stroke-dasharray="43 100"
        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text
        x="18"
        y="20.35"
        class="fill-white anchor-middle font-serif font-hairline text-xxs"
      >{{percentage}}%</text>
      <text :x="x" :y="y" class="fill-white font-serif font-hairline text-xxs">{{difficulty}}</text>
    </svg>
  </div>
</template>

<script>
export default {
  props: [x, y, difficulty, percentage]
};
</script>