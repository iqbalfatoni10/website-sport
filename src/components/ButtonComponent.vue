<script setup>
defineProps({
  name: String,
  variant: String,
});
</script>

<template>
  <button :class="'btn btn-' + variant">{{ name }}</button>
</template>

<style scoped>
.btn-yellow {
  background-color: #e88a1a;
}
</style>
