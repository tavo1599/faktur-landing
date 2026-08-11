<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { initReveal } from '../composables/reveal'
import HeroSection from '../components/landing/HeroSection.vue'
import TrustBar from '../components/landing/TrustBar.vue'
import StatsBand from '../components/landing/StatsBand.vue'
import FeaturesBento from '../components/landing/FeaturesBento.vue'
import HowItWorks from '../components/landing/HowItWorks.vue'
import ModulesShowcase from '../components/landing/ModulesShowcase.vue'
import PricingSection from '../components/landing/PricingSection.vue'
import FaqSection from '../components/landing/FaqSection.vue'
import ContactSection from '../components/landing/ContactSection.vue'
import FinalCta from '../components/landing/FinalCta.vue'

onMounted(() => nextTick(initReveal))
</script>

<template>
  <main>
    <HeroSection />
    <StatsBand />
    <TrustBar />
    <FeaturesBento />
    <HowItWorks />
    <ModulesShowcase />
    <PricingSection />
    <FaqSection />
    <ContactSection />
    <FinalCta />
  </main>
</template>
