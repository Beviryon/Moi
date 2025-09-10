<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app setup
const getCurrentLocale = () => {
  if (process.client) {
    return localStorage.getItem('locale') || 'fr'
  }
  return 'fr'
}

const currentLocale = ref(getCurrentLocale())

useHead({
  htmlAttrs: {
    lang: computed(() => currentLocale.value),
    class: 'dark'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})

// Initialize theme on app start
let localeInterval: NodeJS.Timeout | null = null

onMounted(() => {
  // Theme will be initialized by the useTheme composable
  
  // Update locale when it changes
  if (process.client) {
    const updateLocale = () => {
      const newLocale = localStorage.getItem('locale') || 'fr'
      if (newLocale !== currentLocale.value) {
        currentLocale.value = newLocale
      }
    }
    
    // Check for locale changes periodically
    localeInterval = setInterval(updateLocale, 1000)
    
    // Also listen for storage events
    window.addEventListener('storage', updateLocale)
  }
})

onUnmounted(() => {
  if (process.client) {
    // Cleanup interval
    if (localeInterval) {
      clearInterval(localeInterval)
    }
    
    // Cleanup storage event listener
    const updateLocale = () => {
      const newLocale = localStorage.getItem('locale') || 'fr'
      if (newLocale !== currentLocale.value) {
        currentLocale.value = newLocale
      }
    }
    window.removeEventListener('storage', updateLocale)
  }
})
</script>
