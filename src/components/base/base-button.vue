<template>
    <div class="flex">
      <button
        :icon="icon"
        :color="color"
        :class="class"
        :disabled="disabled"
      >
        <slot />
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    icon?: string;
    color?: string;
    class?: string;
    disabled?: boolean;
  }>();
  </script>
  
 