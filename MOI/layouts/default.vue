<template>
  <div class="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 white:bg-white/95 backdrop-blur-md border-b border-gray-700/50 light:border-gray-200/50 white:border-gray-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2 group">
            <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">B</span>
            </div>
            <span class="font-display font-bold text-xl gradient-text">Beviryon</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink 
              v-for="item in navigation" 
              :key="item.name"
              :to="item.href"
              class="text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 hover:text-primary-400 transition-colors duration-200 relative group font-medium"
            >
              {{ item.name }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </NuxtLink>
          </div>

          <!-- Language & Theme Toggle & Mobile Menu Button -->
          <div class="flex items-center space-x-2">
            <!-- Language Toggle -->
            <div class="relative">
              <select
                :value="currentLocale"
                @change="setLocale($event.target.value)"
                class="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 white:bg-gray-100/50 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-200/50 white:hover:bg-gray-200/50 transition-colors duration-200 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 text-sm border-none outline-none cursor-pointer"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>

            <!-- Theme Toggle -->
            <div class="relative">
              <select
                :value="theme"
                @change="setTheme($event.target.value)"
                class="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-100/50 white:bg-gray-100/50 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-200/50 white:hover:bg-gray-200/50 transition-colors duration-200 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 text-sm border-none outline-none cursor-pointer"
              >
                <option value="dark">🌙</option>
                <option value="light">☀️</option>
                <option value="white">⚪</option>
              </select>
            </div>

            <!-- Mobile Menu Button -->
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="md:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
            >
              <Icon 
                :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
                class="w-5 h-5 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        v-show="mobileMenuOpen"
        class="md:hidden bg-gray-900/95 dark:bg-gray-900/95 light:bg-white/95 white:bg-white/95 backdrop-blur-md border-t border-gray-700/50 light:border-gray-200/50 white:border-gray-200/50"
      >
        <div class="px-4 py-4 space-y-2">
          <NuxtLink 
            v-for="item in navigation" 
            :key="item.name"
            :to="item.href"
            @click="mobileMenuOpen = false"
            class="block px-3 py-2 text-gray-200 dark:text-primary-300 light:text-gray-700 white:text-gray-800 hover:text-primary-400 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 light:hover:bg-gray-100/50 white:hover:bg-gray-100/50 rounded-lg transition-colors duration-200 font-medium"
          >
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800/50 border-t border-gray-700/50 mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Brand -->
          <div class="space-y-4">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">B</span>
              </div>
              <span class="font-display font-bold text-xl gradient-text">Beviryon Issanga Ngoulou</span>
            </div>
            <p class="text-gray-400 dark:text-gray-300 text-sm">
              Fullstack Developer passionate about creating amazing web experiences with modern technologies.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-200 dark:text-primary-300">Quick Links</h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="item in navigation" 
                :key="item.name"
                :to="item.href"
                class="block text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>

          <!-- Social Links -->
          <div class="space-y-4">
            <h3 class="font-semibold text-gray-200 dark:text-primary-300">Connect</h3>
            <div class="flex space-x-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-gray-700/50 hover:bg-primary-600 rounded-lg transition-colors duration-200 group"
                :title="social.name"
              >
                <Icon 
                  :name="social.icon" 
                  class="w-5 h-5 text-gray-400 dark:text-primary-400 group-hover:text-white transition-colors duration-200"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-gray-700/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-gray-400 dark:text-gray-300 text-sm">
            © {{ currentYear }} Beviryon Issanga Ngoulou. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <NuxtLink to="/privacy" class="text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/contact" class="text-gray-400 dark:text-primary-400 hover:text-primary-400 transition-colors duration-200 text-sm">
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>

    <!-- Cookie Consent Banner -->
    <CookieConsent v-if="showCookieBanner" @accept="acceptCookies" @reject="rejectCookies" />
    
    <!-- CV Assistant -->
    <CVAssistant />
  </div>
</template>

<script setup lang="ts">
const { theme, toggleTheme, setTheme } = useTheme()
const mobileMenuOpen = ref(false)
const showCookieBanner = ref(false)

const currentYear = new Date().getFullYear()

// Static translations for navigation to avoid SSR issues
const navigationTranslations = {
  fr: {
    home: 'Accueil',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    education: 'Formation',
    blog: 'Blog',
    contact: 'Contact'
  },
  en: {
    home: 'Home',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    blog: 'Blog',
    contact: 'Contact'
  }
}

// Get current locale
const getCurrentLocale = () => {
  if (process.client) {
    return localStorage.getItem('locale') || 'fr'
  }
  return 'fr'
}

const currentLocale = ref(getCurrentLocale())

// Safe translation function
const t = (key: string) => {
  const locale = currentLocale.value as 'fr' | 'en'
  return navigationTranslations[locale]?.[key] || navigationTranslations.en[key] || key
}

// Set locale function
const setLocale = (newLocale: 'fr' | 'en') => {
  currentLocale.value = newLocale
  if (process.client) {
    localStorage.setItem('locale', newLocale)
  }
}

const navigation = computed(() => [
  { name: t('home'), href: '/' },
  { name: t('skills'), href: '/#skills' },
  { name: t('projects'), href: '/#projects' },
  { name: t('experience'), href: '/#experience' },
  { name: t('education'), href: '/#education' },
  { name: t('blog'), href: '/blog' },
  { name: t('contact'), href: '/contact' }
])

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Beviryon', icon: 'heroicons:code-bracket' },
  { name: 'Portfolio', href: 'https://portfolio-beviryon.vercel.app/', icon: 'heroicons:globe-alt' },
  { name: 'Email', href: 'mailto:viryon.ngoulou@gmail.com', icon: 'heroicons:envelope' },
  { name: 'Téléphone', href: 'tel:0763217791', icon: 'heroicons:phone' }
]

// Check cookie consent on mount
let localeInterval: NodeJS.Timeout | null = null

onMounted(() => {
  if (process.client) {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      showCookieBanner.value = true
    }
    
    // Update locale when it changes
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

const acceptCookies = () => {
  if (process.client) {
    localStorage.setItem('cookie-consent', 'accepted')
    showCookieBanner.value = false
  }
}

const rejectCookies = () => {
  if (process.client) {
    localStorage.setItem('cookie-consent', 'rejected')
    showCookieBanner.value = false
  }
}

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  mobileMenuOpen.value = false
})
</script>
