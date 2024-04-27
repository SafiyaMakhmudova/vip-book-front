<template>
    <main>
    <navbarVue/>
      <slot />
      <footerVue />
    </main>
  </template>
    
<script setup >

import navbarVue from '../components/navbar.vue';
import footerVue from '../components/footer.vue';
</script>
    
  