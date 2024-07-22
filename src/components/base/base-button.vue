<template>
  <button :class="['btn', props.class]" :style="{ backgroundColor: props.color }" :disabled="props.disabled">
    <i v-if="props.icon" :class="props.icon"></i>
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

// const props = defineProps({
//   icon: {
//     type: String,
//     default: ''
//   },
//   color: {
//     type: String,
//     default: '#000' // Default color if not provided
//   },
//   class: {
//     type: String,
//     default: ''
  
//   disabled: {
//     type: Boolean,
//     default: false
//   }
// });
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
