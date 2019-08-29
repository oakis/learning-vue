<template>
  <transition name="slide-fade-zoom" mode="out-in" tag="div">
    <span v-if="isAllCompleted">Awesome, you completed every single task!</span>
  </transition>
</template>

<script>
export default {
  name: "CompletedAllTasks",
  props: ['isAllCompleted'],
};
</script>

<style scoped>
span {
  font-size: 2em;
  -webkit-font-smoothing: antialiased;
}
</style>
