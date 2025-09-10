<template>
  <!-- Welcome Popup -->
  <div
    v-if="showWelcomePopup"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <div class="w-full max-w-md mx-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <!-- Popup Header -->
      <div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="heroicons:sparkles" class="w-6 h-6" />
            </div>
            <div>
              <h2 class="text-xl font-bold">{{ t('welcomePopupTitle') }}</h2>
              <p class="text-sm opacity-90">{{ t('welcomePopupSubtitle') }}</p>
            </div>
          </div>
          <button
            @click="closeWelcomePopup"
            class="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <Icon name="heroicons:x-mark" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Popup Content -->
      <div class="p-6">
        <p class="text-gray-600 dark:text-gray-300 mb-6 text-center">
          {{ t('welcomePopupMessage') }}
        </p>
        
        <!-- Navigation Options -->
        <div class="space-y-3">
          <h3 class="font-semibold text-gray-800 dark:text-gray-200 mb-3">{{ t('welcomePopupChoose') }}</h3>
          
          <button
            v-for="action in quickActions"
            :key="action.id"
            @click="startWithSection(action.action)"
            class="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-300 dark:hover:border-primary-600 border border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 group"
          >
            <div class="flex items-center space-x-3">
              <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-200">
                <Icon :name="getSectionIcon(action.action)" class="w-4 h-4 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <p class="font-medium text-gray-800 dark:text-gray-200">{{ action.text }}</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">{{ t(`welcomePopupDesc${action.action.charAt(0).toUpperCase() + action.action.slice(1)}`) }}</p>
              </div>
            </div>
          </button>
        </div>

        <!-- Skip Button -->
        <div class="mt-6 text-center">
          <button
            @click="closeWelcomePopup"
            class="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          >
            {{ t('welcomePopupSkip') }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="fixed bottom-4 right-4 z-50">
    <!-- Assistant Button -->
    <button
      v-if="!isOpen"
      @click="openAssistant"
      class="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 transform"
    >
      <Icon 
        :name="isTyping ? 'heroicons:chat-bubble-left-ellipsis' : 'heroicons:chat-bubble-left-right'" 
        class="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200"
      />
      <div v-if="hasNewMessage" class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      <div v-if="hasNewMessage" class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
    </button>

    <!-- Assistant Panel -->
    <div
      v-if="isOpen"
      class="w-80 h-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-600 flex flex-col overflow-hidden"
    >
      <!-- Header -->
      <div class="bg-gradient-to-r from-primary-500 to-secondary-500 p-4 text-white">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <Icon name="heroicons:user" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-semibold">{{ t('assistantTitle') }}</h3>
              <p class="text-xs opacity-90">{{ t('assistantSubtitle') }}</p>
            </div>
          </div>
          <button
            @click="closeAssistant"
            class="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
          >
            <Icon name="heroicons:x-mark" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Chat Messages -->
      <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          class="flex"
          :class="message.type === 'user' ? 'justify-end' : 'justify-start'"
        >
          <div
            class="max-w-[80%] p-3 rounded-2xl"
            :class="message.type === 'user' 
              ? 'bg-primary-500 text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'"
          >
            <p class="text-sm">{{ message.text }}</p>
            <p class="text-xs opacity-70 mt-1">{{ formatTime(message.timestamp) }}</p>
          </div>
        </div>
        
        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-2xl">
            <div class="flex space-x-1">
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div v-if="showQuickActions" class="p-3 border-t border-gray-200 dark:border-gray-600">
        <div class="grid grid-cols-2 gap-2">
          <button
            v-for="action in quickActions"
            :key="action.id"
            @click="sendQuickMessage(action.text, action.action)"
            class="p-2 text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-200 hover:scale-105 transform"
          >
            {{ action.text }}
          </button>
        </div>
      </div>

      <!-- Input -->
      <div class="p-4 border-t border-gray-200 dark:border-gray-600">
        <div class="flex space-x-2">
          <input
            v-model="inputMessage"
            @keyup.enter="sendMessage"
            :placeholder="t('assistantPlaceholder')"
            class="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            @click="sendMessage"
            :disabled="!inputMessage.trim()"
            class="p-2 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 text-white rounded-lg transition-all duration-200 hover:scale-105 transform disabled:transform-none"
          >
            <Icon name="heroicons:paper-airplane" class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Message {
  id: string
  type: 'user' | 'assistant'
  text: string
  timestamp: Date
}

interface QuickAction {
  id: string
  text: string
  action?: string
}

// Static translations for CV Assistant
const translations = {
  fr: {
    assistantTitle: 'Assistant CV',
    assistantPlaceholder: 'Posez-moi une question...',
    assistantQuickSkills: 'Compétences',
    assistantQuickProjects: 'Projets',
    assistantQuickExperience: 'Expérience',
    assistantQuickEducation: 'Formation',
    assistantQuickContact: 'Contact',
    assistantQuickBlog: 'Blog',
    assistantWelcome: 'Bonjour ! Je suis votre assistant CV. Comment puis-je vous aider ?',
    assistantGreeting: 'Salut !',
    assistantIntroduction: 'Je suis votre assistant personnel pour explorer mon portfolio. Que souhaitez-vous découvrir en premier ?',
    assistantMenuOptions: 'Voici toutes les options disponibles :',
    assistantWhatFirst: 'Que voulez-vous voir en premier ?',
    assistantNavigating: 'Navigation vers',
    assistantResponseSkills: 'Voici mes compétences techniques et les technologies que je maîtrise.',
    assistantResponseProjects: 'Découvrez mes projets récents et mes réalisations.',
    assistantResponseExperience: 'Voici mon parcours professionnel et mes expériences.',
    assistantResponseContact: 'Vous pouvez me contacter via le formulaire de contact.',
    assistantResponseEducation: 'Voici mon parcours académique et mes certifications.',
    assistantResponseBlog: 'Consultez mes articles et tutoriels sur le développement web.',
    assistantResponseAbout: 'Je suis Beviryon, développeur fullstack passionné par les technologies modernes.',
    assistantResponseDefault: 'Je peux vous aider à naviguer dans mon portfolio. Que souhaitez-vous voir ?'
  },
  en: {
    assistantTitle: 'CV Assistant',
    assistantPlaceholder: 'Ask me a question...',
    assistantQuickSkills: 'Skills',
    assistantQuickProjects: 'Projects',
    assistantQuickExperience: 'Experience',
    assistantQuickEducation: 'Education',
    assistantQuickContact: 'Contact',
    assistantQuickBlog: 'Blog',
    assistantWelcome: 'Hello! I\'m your CV assistant. How can I help you?',
    assistantGreeting: 'Hi there!',
    assistantIntroduction: 'I\'m your personal assistant to explore my portfolio. What would you like to discover first?',
    assistantMenuOptions: 'Here are all the available options:',
    assistantWhatFirst: 'What would you like to see first?',
    assistantNavigating: 'Navigating to',
    assistantResponseSkills: 'Here are my technical skills and the technologies I master.',
    assistantResponseProjects: 'Discover my recent projects and achievements.',
    assistantResponseExperience: 'Here is my professional journey and experiences.',
    assistantResponseContact: 'You can contact me via the contact form.',
    assistantResponseEducation: 'Here is my academic journey and certifications.',
    assistantResponseBlog: 'Check out my articles and tutorials on web development.',
    assistantResponseAbout: 'I\'m Beviryon, a fullstack developer passionate about modern technologies.',
    assistantResponseDefault: 'I can help you navigate my portfolio. What would you like to see?'
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

const isOpen = ref(false)
const isTyping = ref(false)
const hasNewMessage = ref(false)
const inputMessage = ref('')
const messages = ref<Message[]>([])
const messagesContainer = ref<HTMLElement>()
const showQuickActions = ref(true)
const showWelcomePopup = ref(false)
const hasShownWelcome = ref(false)

const quickActions = computed(() => [
  { id: 'skills', text: t('assistantQuickSkills'), action: 'skills' },
  { id: 'projects', text: t('assistantQuickProjects'), action: 'projects' },
  { id: 'experience', text: t('assistantQuickExperience'), action: 'experience' },
  { id: 'education', text: t('assistantQuickEducation'), action: 'education' },
  { id: 'blog', text: t('assistantQuickBlog'), action: 'blog' },
  { id: 'contact', text: t('assistantQuickContact'), action: 'contact' }
])

// Initialize with welcome popup
let localeInterval: NodeJS.Timeout | null = null

onMounted(() => {
  // Check if welcome has been shown before
  if (process.client) {
    const hasShown = localStorage.getItem('assistant-welcome-shown')
    if (!hasShown) {
      // Show welcome popup after 2 seconds
      setTimeout(() => {
        showWelcomePopup.value = true
      }, 2000)
    } else {
      // Show normal welcome messages
      setTimeout(() => {
        addMessage('assistant', t('assistantWelcome'))
      }, 500)
      
      setTimeout(() => {
        addMessage('assistant', t('assistantIntroduction'))
      }, 2000)
      
      setTimeout(() => {
        addMessage('assistant', t('assistantGuide'))
      }, 4000)
    }
  }
  
  // Auto-open assistant after 8 seconds
  setTimeout(() => {
    if (!isOpen.value) {
      hasNewMessage.value = true
    }
  }, 8000)
  
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

const openAssistant = () => {
  isOpen.value = true
  hasNewMessage.value = false
  nextTick(() => {
    scrollToBottom()
  })
}

const closeAssistant = () => {
  isOpen.value = false
}

const closeWelcomePopup = () => {
  showWelcomePopup.value = false
  hasShownWelcome.value = true
  if (process.client) {
    localStorage.setItem('assistant-welcome-shown', 'true')
  }
}

const startWithSection = (section: string) => {
  closeWelcomePopup()
  openAssistant()
  setTimeout(() => {
    sendQuickMessage(t(`assistantQuick${section.charAt(0).toUpperCase() + section.slice(1)}`), section)
  }, 500)
}

const getSectionIcon = (section: string): string => {
  const icons: Record<string, string> = {
    'skills': 'heroicons:code-bracket',
    'projects': 'heroicons:rocket-launch',
    'experience': 'heroicons:briefcase',
    'education': 'heroicons:academic-cap',
    'blog': 'heroicons:document-text',
    'contact': 'heroicons:envelope'
  }
  return icons[section] || 'heroicons:star'
}

const addMessage = (type: 'user' | 'assistant', text: string) => {
  const message: Message = {
    id: Date.now().toString(),
    type,
    text,
    timestamp: new Date()
  }
  messages.value.push(message)
  
  if (type === 'assistant' && !isOpen.value) {
    hasNewMessage.value = true
  }
  
  nextTick(() => {
    scrollToBottom()
  })
}

const sendMessage = () => {
  if (!inputMessage.value.trim()) return
  
  const userMessage = inputMessage.value.trim()
  addMessage('user', userMessage)
  inputMessage.value = ''
  
  // Show typing indicator
  isTyping.value = true
  showQuickActions.value = false
  
  // Simulate AI response
  setTimeout(() => {
    isTyping.value = false
    const response = generateResponse(userMessage)
    addMessage('assistant', response)
    showQuickActions.value = true
  }, 1500)
}

const sendQuickMessage = (text: string, action?: string) => {
  inputMessage.value = text
  sendMessage()
  
  // Navigate to section if action is provided
  if (action) {
    setTimeout(() => {
      navigateToSection(action)
    }, 2000) // Wait for response to be sent
  }
}

const navigateToSection = (section: string) => {
  const sectionMap: Record<string, string> = {
    'skills': '/#skills',
    'projects': '/#projects', 
    'experience': '/#experience',
    'education': '/#education',
    'contact': '/contact',
    'blog': '/blog'
  }
  
  const target = sectionMap[section]
  if (target) {
    if (target.startsWith('/#')) {
      // Scroll to section on same page
      const element = document.querySelector(target.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        addMessage('assistant', t('assistantNavigating') + ' ' + t(section))
      }
    } else {
      // Navigate to different page
      navigateTo(target)
      addMessage('assistant', t('assistantNavigating') + ' ' + t(section))
    }
  }
}

const generateResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase()
  
  // Skills related
  if (message.includes('compétence') || message.includes('skill') || message.includes('technologie') || message.includes('tech') || message.includes('langage')) {
    return t('assistantResponseSkills')
  }
  
  // Projects related
  if (message.includes('projet') || message.includes('project') || message.includes('travail') || message.includes('work') || message.includes('portfolio')) {
    return t('assistantResponseProjects')
  }
  
  // Experience related
  if (message.includes('expérience') || message.includes('experience') || message.includes('carrière') || message.includes('career') || message.includes('emploi')) {
    return t('assistantResponseExperience')
  }
  
  // Contact related
  if (message.includes('contact') || message.includes('contacter') || message.includes('email') || message.includes('téléphone') || message.includes('phone')) {
    return t('assistantResponseContact')
  }
  
  // Education related
  if (message.includes('formation') || message.includes('éducation') || message.includes('education') || message.includes('diplôme') || message.includes('certification')) {
    return t('assistantResponseEducation')
  }
  
  // Blog related
  if (message.includes('blog') || message.includes('article') || message.includes('écrit') || message.includes('write') || message.includes('tutorial')) {
    return t('assistantResponseBlog')
  }
  
  // General greeting
  if (message.includes('bonjour') || message.includes('salut') || message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return t('assistantResponseGreeting')
  }
  
  // Help related
  if (message.includes('aide') || message.includes('help') || message.includes('comment') || message.includes('how')) {
    return t('assistantResponseHelp')
  }
  
  // About related
  if (message.includes('qui') || message.includes('who') || message.includes('about') || message.includes('à propos')) {
    return t('assistantResponseAbout')
  }
  
  // Default response
  return t('assistantResponseDefault')
}

const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString(currentLocale.value === 'fr' ? 'fr-FR' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

</script>
