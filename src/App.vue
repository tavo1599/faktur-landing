<script setup lang="ts">
import TheNavbar from './components/landing/TheNavbar.vue'
import TheFooter from './components/landing/TheFooter.vue'
import WhatsAppButton from './components/landing/WhatsAppButton.vue'
import BackToTop from './components/landing/BackToTop.vue'
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
  <WhatsAppButton />
  <BackToTop />
</template>
