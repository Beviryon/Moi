<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 p-4">
    <div class="max-w-4xl mx-auto">
      <div class="glass rounded-xl p-6 border border-gray-700/50">
        <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <!-- Cookie Icon -->
          <div class="flex-shrink-0">
            <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
              <Icon name="heroicons:shield-check" class="w-6 h-6 text-primary-400" />
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <h3 class="font-semibold text-gray-200 mb-2">{{ t('cookieConsent') }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              {{ t('cookieDescription') }}
              <NuxtLink to="/privacy" class="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                {{ t('privacyPolicy') }}
              </NuxtLink>.
            </p>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 w-full md:w-auto">
            <button
              @click="$emit('reject')"
              class="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200"
            >
              {{ t('rejectAll') }}
            </button>
            <button
              @click="$emit('accept')"
              class="btn-primary text-sm"
            >
              {{ t('acceptAll') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Static translations for Cookie Consent
const translations = {
  fr: {
    cookieConsent: 'Consentement aux cookies',
    cookieDescription: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre utilisation des cookies. Consultez notre',
    privacyPolicy: 'Politique de confidentialité',
    rejectAll: 'Tout refuser',
    acceptAll: 'Tout accepter'
  },
  en: {
    cookieConsent: 'Cookie Consent',
    cookieDescription: 'We use cookies to improve your experience. By continuing to browse, you accept our use of cookies. See our',
    privacyPolicy: 'Privacy Policy',
    rejectAll: 'Reject All',
    acceptAll: 'Accept All'
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
  return translations[locale]?.[key] || translations.en[key] || key
}

defineEmits<{
  accept: []
  reject: []
}>()
</script>
