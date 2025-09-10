<template>
  <div class="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <!-- Back Button -->
      <div ref="backButton" class="mb-8">
        <button 
          @click="navigateTo('/blog')"
          class="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 group"
        >
          <Icon name="heroicons:arrow-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          <span>Back to Blog</span>
        </button>
      </div>

      <!-- Article Header -->
      <header ref="articleHeader" class="mb-12">
        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-4">
          <span 
            v-for="tag in data.tags" 
            :key="tag"
            class="px-3 py-1 bg-primary-600/20 text-primary-300 text-sm rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold gradient-text mb-6">
          {{ data.title }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 text-gray-400">
          <div class="flex items-center space-x-4">
            <span>{{ formatDate(data.date) }}</span>
            <span>•</span>
            <span>{{ data.author }}</span>
          </div>
          <div class="flex items-center space-x-2">
            <Icon name="heroicons:clock" class="w-4 h-4" />
            <span>{{ readingTime }} min read</span>
          </div>
        </div>
      </header>

      <!-- Article Content -->
      <article ref="articleContent" class="prose prose-lg prose-invert max-w-none">
        <ContentRenderer :value="data" />
      </article>

      <!-- Article Footer -->
      <footer ref="articleFooter" class="mt-16 pt-8 border-t border-gray-700/50">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <!-- Author Info -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <span class="text-white font-bold">B</span>
            </div>
            <div>
              <h3 class="font-semibold text-gray-200">{{ data.author }}</h3>
              <p class="text-sm text-gray-400">Fullstack Developer</p>
            </div>
          </div>

          <!-- Share Buttons -->
          <div class="flex space-x-3">
            <button 
              @click="shareOnTwitter"
              class="p-2 bg-gray-700/50 hover:bg-blue-600 rounded-lg transition-colors duration-200"
              title="Share on Twitter"
            >
              <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            <button 
              @click="shareOnLinkedIn"
              class="p-2 bg-gray-700/50 hover:bg-blue-700 rounded-lg transition-colors duration-200"
              title="Share on LinkedIn"
            >
              <Icon name="heroicons:user-group" class="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
            <button 
              @click="copyLink"
              class="p-2 bg-gray-700/50 hover:bg-gray-600 rounded-lg transition-colors duration-200"
              title="Copy Link"
            >
              <Icon name="heroicons:link" class="w-5 h-5 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
      </footer>

      <!-- Related Posts -->
      <section v-if="relatedPosts.length > 0" ref="relatedPostsSection" class="mt-20">
        <h2 class="text-2xl font-display font-bold gradient-text mb-8">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article 
            v-for="post in relatedPosts" 
            :key="post._path"
            class="card card-hover group cursor-pointer"
            @click="navigateToPost(post._path)"
          >
            <div class="flex space-x-4">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="heroicons:document-text" class="w-6 h-6 text-primary-400" />
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300 mb-1">
                  {{ post.title }}
                </h3>
                <p class="text-gray-400 text-sm line-clamp-2">
                  {{ post.description }}
                </p>
                <div class="flex items-center space-x-2 mt-2 text-xs text-gray-500">
                  <span>{{ formatDate(post.date) }}</span>
                  <span>•</span>
                  <span>{{ post.author }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { fadeInUp, staggerChildren } = useAnimations()

// Refs for animations
const backButton = ref<HTMLElement>()
const articleHeader = ref<HTMLElement>()
const articleContent = ref<HTMLElement>()
const articleFooter = ref<HTMLElement>()
const relatedPostsSection = ref<HTMLElement>()

// Get the current route
const route = useRoute()

// Fetch the current post
const { data } = await queryContent(route.path).findOne()

// Calculate reading time
const readingTime = computed(() => {
  const wordsPerMinute = 200
  const wordCount = data.body?.children?.reduce((count: number, child: any) => {
    if (child.type === 'element' && child.tag === 'p') {
      return count + (child.children?.[0]?.value?.split(' ')?.length || 0)
    }
    return count
  }, 0) || 0
  
  return Math.ceil(wordCount / wordsPerMinute)
})

// Fetch related posts
const { data: allPosts } = await queryContent('/blog')
  .sort({ date: -1 })
  .find()

const relatedPosts = computed(() => {
  return allPosts
    .filter(post => post._path !== route.path)
    .filter(post => post.tags?.some((tag: string) => data.tags?.includes(tag)))
    .slice(0, 2)
})

// Format date function
const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Navigate to post
const navigateToPost = (path: string) => {
  navigateTo(path)
}

// Share functions
const shareOnTwitter = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(data.title)}&url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank')
}

const shareOnLinkedIn = () => {
  const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`
  window.open(url, '_blank')
}

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href)
    // You could add a toast notification here
  } catch (err) {
    console.error('Failed to copy link:', err)
  }
}

// Initialize animations
onMounted(() => {
  fadeInUp(backButton.value, 0.2)
  fadeInUp(articleHeader.value, 0.4)
  fadeInUp(articleContent.value, 0.6)
  fadeInUp(articleFooter.value, 0.8)
  if (relatedPostsSection.value) {
    fadeInUp(relatedPostsSection.value, 1.0)
  }
})

// SEO
useHead({
  title: `${data.title} - Beviryon's Blog`,
  meta: [
    { name: 'description', content: data.description },
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: data.date },
    { property: 'article:author', content: data.author },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: data.title },
    { name: 'twitter:description', content: data.description }
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

/* Custom prose styles for dark mode */
:deep(.prose) {
  color: #e5e7eb;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3),
:deep(.prose h4),
:deep(.prose h5),
:deep(.prose h6) {
  color: #f9fafb;
}

:deep(.prose a) {
  color: #60a5fa;
  text-decoration: none;
}

:deep(.prose a:hover) {
  color: #93c5fd;
  text-decoration: underline;
}

:deep(.prose code) {
  background-color: #374151;
  color: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-size: 0.875em;
}

:deep(.prose pre) {
  background-color: #1f2937;
  border: 1px solid #374151;
}

:deep(.prose pre code) {
  background-color: transparent;
  padding: 0;
}

:deep(.prose blockquote) {
  border-left-color: #3b82f6;
  color: #d1d5db;
}

:deep(.prose table) {
  border-color: #374151;
}

:deep(.prose th) {
  background-color: #374151;
  border-color: #4b5563;
}

:deep(.prose td) {
  border-color: #374151;
}
</style>
