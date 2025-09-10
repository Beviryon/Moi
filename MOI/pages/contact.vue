<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div ref="header" class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
          Get In Touch
        </h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? I'd love to hear from you. 
          Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div ref="contactForm" class="card">
          <h2 class="text-2xl font-display font-bold text-gray-200 mb-6">
            Send a Message
          </h2>

          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"
                placeholder="Your full name"
                :class="{ 'ring-2 ring-red-500': errors.name }"
              />
              <p v-if="errors.name" class="mt-1 text-sm text-red-400">
                {{ errors.name }}
              </p>
            </div>

            <!-- Email Field -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"
                placeholder="your.email@example.com"
                :class="{ 'ring-2 ring-red-500': errors.email }"
              />
              <p v-if="errors.email" class="mt-1 text-sm text-red-400">
                {{ errors.email }}
              </p>
            </div>

            <!-- Subject Field -->
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
                Subject *
              </label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"
                placeholder="What's this about?"
                :class="{ 'ring-2 ring-red-500': errors.subject }"
              />
              <p v-if="errors.subject" class="mt-1 text-sm text-red-400">
                {{ errors.subject }}
              </p>
            </div>

            <!-- Message Field -->
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400 resize-none"
                placeholder="Tell me about your project or idea..."
                :class="{ 'ring-2 ring-red-500': errors.message }"
              ></textarea>
              <p v-if="errors.message" class="mt-1 text-sm text-red-400">
                {{ errors.message }}
              </p>
            </div>

            <!-- GDPR Consent -->
            <div class="flex items-start space-x-3">
              <input
                id="gdpr-consent"
                v-model="form.gdprConsent"
                type="checkbox"
                required
                class="mt-1 w-4 h-4 text-primary-600 bg-gray-800 border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
              />
              <label for="gdpr-consent" class="text-sm text-gray-300">
                I agree to the processing of my personal data in accordance with the 
                <NuxtLink to="/privacy" class="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  Privacy Policy
                </NuxtLink>
                *
              </label>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else class="flex items-center space-x-2">
                <Icon name="heroicons:arrow-path" class="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </span>
            </button>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-600/20 border border-green-600/50 rounded-lg">
            <div class="flex items-center space-x-2">
              <Icon name="heroicons:check-circle" class="w-5 h-5 text-green-400" />
              <p class="text-green-300">Message sent successfully! I'll get back to you soon.</p>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div ref="contactInfo" class="space-y-8">
          <!-- Contact Details -->
          <div class="card">
            <h3 class="text-xl font-display font-bold text-gray-200 mb-6">
              Contact Information
            </h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-400">Email</p>
                  <a 
                    href="mailto:viryon.ngoulou@gmail.com" 
                    class="text-gray-200 hover:text-primary-400 transition-colors duration-200"
                  >
                    viryon.ngoulou@gmail.com
                  </a>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-400">Location</p>
                  <p class="text-gray-200">Paris, Île-de-France</p>
                </div>
              </div>

              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <Icon name="heroicons:clock" class="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p class="text-sm text-gray-400">Response Time</p>
                  <p class="text-gray-200">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="card">
            <h3 class="text-xl font-display font-bold text-gray-200 mb-6">
              Connect With Me
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center space-x-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 group"
              >
                <Icon :name="social.icon" class="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-200" />
                <span class="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {{ social.name }}
                </span>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="card">
            <h3 class="text-xl font-display font-bold text-gray-200 mb-6">
              Availability
            </h3>
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-gray-300">Available for new projects</span>
              </div>
              <p class="text-gray-400 text-sm">
                I'm currently accepting new projects and collaborations. 
                Whether you need a full-stack application, a website redesign, 
                or technical consultation, I'm here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { fadeInUp, staggerChildren } = useAnimations()

// Refs for animations
const header = ref<HTMLElement>()
const contactForm = ref<HTMLElement>()
const contactInfo = ref<HTMLElement>()

// Form data
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  gdprConsent: false
})

// Form state
const isSubmitting = ref(false)
const showSuccess = ref(false)
const errors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Social links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/beviryon', icon: 'heroicons:code-bracket' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/beviryon', icon: 'heroicons:user-group' },
  { name: 'Twitter', href: 'https://twitter.com/beviryon', icon: 'heroicons:chat-bubble-left-right' },
  { name: 'Email', href: 'mailto:contact@beviryon.dev', icon: 'heroicons:envelope' }
]

// Form validation
const validateForm = () => {
  // Clear previous errors
  Object.keys(errors).forEach(key => {
    errors[key as keyof typeof errors] = ''
  })

  let isValid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address'
    isValid = false
  }

  if (!form.subject.trim()) {
    errors.subject = 'Subject is required'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  }

  if (!form.gdprConsent) {
    // You could add a GDPR error here if needed
    isValid = false
  }

  return isValid
}

// Submit form
const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real application, you would send the data to your backend
    console.log('Form submitted:', form)
    
    // Show success message
    showSuccess.value = true
    
    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
      gdprConsent: false
    })
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false
  }
}

// Initialize animations
onMounted(() => {
  fadeInUp(header.value, 0.2)
  fadeInUp(contactForm.value, 0.4)
  fadeInUp(contactInfo.value, 0.6)
})

// SEO
useHead({
  title: 'Contact - Beviryon Issanga Ngoulou',
  meta: [
    { name: 'description', content: 'Get in touch with Beviryon Issanga Ngoulou for your next web development project. Available for collaborations and consultations.' }
  ]
})
</script>
