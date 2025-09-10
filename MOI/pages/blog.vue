<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div ref="header" class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl font-display font-bold gradient-text mb-4">
          {{ t('blog') }}
        </h1>
        <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto">
          {{ t('blogDescription') }}
        </p>
      </div>

      <!-- Featured Post -->
      <div ref="featuredPostSection" class="mb-16">
        <div v-if="featuredPost" class="card card-hover group cursor-pointer" @click="navigateToPost(featuredPost._path)">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Featured Image -->
            <div class="relative overflow-hidden rounded-lg">
              <div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <Icon name="heroicons:document-text" class="w-16 h-16 text-primary-400" />
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Icon name="heroicons:arrow-right" class="w-12 h-12 text-white transform group-hover:translate-x-2 transition-transform duration-200" />
              </div>
            </div>

            <!-- Featured Content -->
            <div class="flex flex-col justify-center">
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tag in featuredPost.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-primary-600/20 text-primary-300 text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>

              <h2 class="text-2xl sm:text-3xl font-display font-bold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 white:group-hover:text-gray-900 transition-colors duration-300 mb-4">
                {{ featuredPost.title }}
              </h2>

              <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg mb-6 line-clamp-4">
                {{ featuredPost.description }}
              </p>

              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <span>{{ formatDate(featuredPost.date) }}</span>
                  <span>•</span>
                  <span>{{ featuredPost.author }}</span>
                  <span>•</span>
                  <span>{{ calculateReadingTime(featuredPost) }} min read</span>
                </div>
                <Icon name="heroicons:arrow-right" class="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div ref="postsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="post in regularPosts" 
          :key="post._path"
          class="card card-hover group cursor-pointer"
          @click="navigateToPost(post._path)"
        >
          <!-- Post Image -->
          <div class="relative overflow-hidden rounded-lg mb-4">
            <div class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
              <Icon name="heroicons:document-text" class="w-12 h-12 text-primary-400" />
            </div>
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Icon name="heroicons:arrow-right" class="w-8 h-8 text-white transform group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>

          <!-- Post Content -->
          <div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-3">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Title -->
            <h2 class="font-semibold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 group-hover:text-white dark:group-hover:text-white light:group-hover:text-gray-900 white:group-hover:text-gray-900 transition-colors duration-300 mb-2 line-clamp-2">
              {{ post.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-sm mb-4 line-clamp-3">
              {{ post.description }}
            </p>

            <!-- Meta -->
            <div class="flex items-center justify-between text-xs text-gray-500">
              <span>{{ formatDate(post.date) }}</span>
              <span>{{ calculateReadingTime(post) }} min read</span>
            </div>
          </div>
        </article>
      </div>

      <!-- Empty State -->
      <div v-if="!posts || posts.length === 0" class="text-center py-16">
        <Icon name="heroicons:document-text" class="w-16 h-16 text-gray-600 dark:text-gray-600 light:text-gray-400 white:text-gray-400 mx-auto mb-4" />
        <h3 class="text-xl font-semibold text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 mb-2">{{ t('noPostsYet') }}</h3>
        <p class="text-gray-500 dark:text-gray-500 light:text-gray-500 white:text-gray-500">{{ t('checkBackSoon') }}</p>
      </div>

      <!-- Newsletter Signup -->
      <div ref="newsletter" class="mt-20">
        <div class="card text-center">
          <div class="max-w-2xl mx-auto">
            <Icon name="heroicons:envelope" class="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 class="text-2xl font-display font-bold text-gray-200 dark:text-gray-200 light:text-gray-800 white:text-gray-800 mb-4">
              {{ t('stayUpdated') }}
            </h3>
            <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 mb-6">
              {{ t('newsletterDescription') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 text-gray-100 placeholder-gray-400"
              />
              <button class="btn-primary whitespace-nowrap">
                {{ t('subscribe') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { fadeInUp, staggerChildren } = useAnimations()

// Static translations to avoid SSR issues
const translations = {
  fr: {
    blog: 'Blog',
    blogDescription: 'Pensées, tutoriels et insights sur le développement web moderne',
    noPostsYet: 'Aucun article pour le moment',
    checkBackSoon: 'Revenez bientôt pour du nouveau contenu !',
    stayUpdated: 'Restez informé',
    newsletterDescription: 'Soyez notifié quand je publie de nouveaux articles sur le développement web, Vue.js et les technologies modernes.',
    subscribe: 'S\'abonner'
  },
  en: {
    blog: 'Blog',
    blogDescription: 'Thoughts, tutorials, and insights about modern web development',
    noPostsYet: 'No posts yet',
    checkBackSoon: 'Check back soon for new content!',
    stayUpdated: 'Stay Updated',
    newsletterDescription: 'Get notified when I publish new articles about web development, Vue.js, and modern technologies.',
    subscribe: 'Subscribe'
  }
}

// Get current locale from localStorage or default to 'fr'
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

// Update locale when it changes
onMounted(() => {
  // Listen for locale changes from other components
  if (process.client) {
    const updateLocale = () => {
      const newLocale = localStorage.getItem('locale') || 'fr'
      if (newLocale !== currentLocale.value) {
        currentLocale.value = newLocale
      }
    }
    
    // Check for locale changes periodically
    setInterval(updateLocale, 1000)
    
    // Also listen for storage events
    window.addEventListener('storage', updateLocale)
    
    // Cleanup
    onUnmounted(() => {
      window.removeEventListener('storage', updateLocale)
    })
  }
})

// Refs for animations
const header = ref<HTMLElement>()
const featuredPostSection = ref<HTMLElement>()
const postsGrid = ref<HTMLElement>()
const newsletter = ref<HTMLElement>()

// Fetch blog posts
const { data: posts } = await queryContent('/blog')
  .sort({ date: -1 })
  .find()

// Separate featured and regular posts
const featuredPost = computed(() => posts?.[0] || null)
const regularPosts = computed(() => posts?.slice(1) || [])

// Format date function
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Calculate reading time
const calculateReadingTime = (post: any) => {
  const wordsPerMinute = 200
  const wordCount = post.body?.children?.reduce((count: number, child: any) => {
    if (child.type === 'element' && child.tag === 'p') {
      return count + (child.children?.[0]?.value?.split(' ')?.length || 0)
    }
    return count
  }, 0) || 0
  
  return Math.ceil(wordCount / wordsPerMinute) || 5
}

// Navigate to post
const navigateToPost = (path: string) => {
  navigateTo(path)
}

// Initialize animations
onMounted(() => {
  fadeInUp(header.value, 0.2)
  fadeInUp(featuredPostSection.value, 0.4)
  staggerChildren(postsGrid.value, 'article', 0.1)
  fadeInUp(newsletter.value, 0.6)
})

// SEO
useHead({
  title: 'Blog - Beviryon Issanga Ngoulou',
  meta: [
    { name: 'description', content: 'Read the latest thoughts, tutorials, and insights about modern web development from Beviryon Issanga Ngoulou' }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
