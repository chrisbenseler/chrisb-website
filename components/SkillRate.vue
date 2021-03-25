<template>
  <div>
    <span
      v-for="item in [1, 2, 3, 4, 5]"
      :key="item"
      v-bind:class="{ active: item <= rate }"
      >{{
    }}</span>
  </div>
</template>

<script>
export default {
  props: {
    rate: Number
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
}
span {
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--fourth-color);
  background: #EEEEEE;
  border-radius: 1rem;
  margin-left: 0.2rem;
  opacity: 0.5;
}
span.active {
  opacity: 1;
  background: var(--fourth-color);
}
</style>
