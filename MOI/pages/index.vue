 <template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <!-- Particle Background -->
      <div ref="particleContainer" class="absolute inset-0 overflow-hidden pointer-events-none">
        <!-- Particles will be generated here -->
      </div>

      <!-- Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 light:from-gray-50 light:via-gray-100 light:to-gray-50 white:from-white white:via-gray-50 white:to-white"></div>
      <div class="absolute inset-0 bg-gradient-to-tr from-primary-900/20 via-transparent to-secondary-900/20 dark:from-primary-900/20 light:from-primary-100/20 white:from-primary-50/20"></div>

      <!-- Content -->
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Column - Text Content -->
          <div class="text-center lg:text-left">
            <!-- Greeting -->
            <div ref="greeting" class="mb-4">
              <span class="text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600 font-medium text-lg">{{ t('greeting') }}</span>
            </div>

            <!-- Name -->
            <h1 ref="name" class="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span class="gradient-text">{{ t('name') }}</span>
            </h1>

            <!-- Title -->
            <div ref="title" class="mb-6">
              <h2 class="text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 light:text-gray-700 white:text-gray-800 font-medium">
                {{ t('title') }}
              </h2>
            </div>

            <!-- Graduation Badge -->
            <div class="mb-8">
              <div class="graduation-badge inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 dark:border-primary-500/30 light:border-primary-600/30 white:border-primary-600/30">
                <Icon name="heroicons:academic-cap" class="w-5 h-5 text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600 mr-2" />
                <span class="text-sm font-medium text-primary-300 dark:text-primary-300 light:text-primary-700 white:text-primary-700">
                  EEMI Graduate 2024
                </span>
              </div>
            </div>

            <!-- Typing Animation -->
            <div ref="typingContainer" class="mb-8">
              <p class="text-lg sm:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 min-h-[2rem]">
                <span ref="typingText" class="inline-block"></span>
                <span class="typing-cursor text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600">|</span>
              </p>
            </div>

            <!-- CTA Buttons -->
            <div ref="ctaButtons" class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <NuxtLink to="/#projects" class="btn-primary group">
                <span>{{ t('viewProjects') }}</span>
                <Icon name="heroicons:arrow-right" class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </NuxtLink>
              <NuxtLink to="/contact" class="btn-secondary group">
                <span>{{ t('contactMe') }}</span>
                <Icon name="heroicons:envelope" class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" />
              </NuxtLink>
            </div>
          </div>

          <!-- Right Column - Profile Image -->
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <!-- Profile Image Container -->
              <div class="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
                <!-- Decorative Elements -->
                <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full opacity-20 animate-pulse"></div>
                <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                
                <!-- Main Image -->
                <div class="profile-float relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-500/20 dark:border-primary-500/20 light:border-primary-600/30 white:border-primary-600/30">
                  <img 
                    src="/moi.jpg" 
                    alt="Beviryon Issanga Ngoulou - EEMI Graduate 2024"
                    class="w-full h-full object-cover object-center"
                  />
                  <!-- Overlay Gradient -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                <!-- Floating Elements -->
                <div class="absolute top-8 -left-8 bg-white/10 dark:bg-white/10 light:bg-gray-800/10 white:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-white/20 light:border-gray-300/20 white:border-gray-300/20">
                  <div class="flex items-center space-x-2">
                    <Icon name="heroicons:code-bracket" class="w-6 h-6 text-primary-400 dark:text-primary-400 light:text-primary-600 white:text-primary-600" />
                    <span class="text-sm font-medium text-white dark:text-white light:text-gray-800 white:text-gray-800">Fullstack</span>
                  </div>
                </div>

                <div class="absolute bottom-8 -right-8 bg-white/10 dark:bg-white/10 light:bg-gray-800/10 white:bg-gray-800/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 dark:border-white/20 light:border-gray-300/20 white:border-gray-300/20">
                  <div class="flex items-center space-x-2">
                    <Icon name="heroicons:academic-cap" class="w-6 h-6 text-secondary-400 dark:text-secondary-400 light:text-secondary-600 white:text-secondary-600" />
                    <span class="text-sm font-medium text-white dark:text-white light:text-gray-800 white:text-gray-800">EEMI 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div ref="scrollIndicator" class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div class="flex flex-col items-center space-y-2 text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600">
            <span class="text-sm">{{ t('scrollToExplore') }}</span>
            <div class="w-6 h-10 border-2 border-gray-400 dark:border-gray-400 light:border-gray-600 white:border-gray-600 rounded-full flex justify-center">
              <div class="w-1 h-3 bg-gray-400 dark:bg-gray-400 light:bg-gray-600 white:bg-gray-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title -->
        <div ref="skillsTitle" class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">
            {{ t('skillsTitle') }}
          </h2>
          <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t('skillsDescription') }}
          </p>
        </div>

        <!-- Skills Grid -->
        <div ref="skillsGrid" class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div 
            v-for="skill in visibleSkills" 
            :key="skill.name"
            class="skill-card card card-hover group cursor-pointer"
          >
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon :name="skill.icon" class="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                {{ skill.name }}
              </h3>
              <p class="text-sm text-gray-400 dark:text-gray-300 mt-1">
                {{ skill.level }}
              </p>
            </div>
          </div>
        </div>

        <!-- Show More/Less Button -->
        <div class="text-center">
          <button 
            @click="toggleShowAllSkills"
            class="btn-secondary group"
          >
            <span>{{ showAllSkills ? t('showLess') : t('showMore') }}</span>
            <Icon 
              :name="showAllSkills ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" 
              class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" 
            />
          </button>
        </div>

        <!-- Additional Skills (Hidden by default) -->
        <div 
          v-show="showAllSkills"
          ref="additionalSkills"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        >
          <div 
            v-for="skill in additionalSkills" 
            :key="skill.name"
            class="skill-card card card-hover group cursor-pointer"
          >
            <div class="text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon :name="skill.icon" class="w-8 h-8 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                {{ skill.name }}
              </h3>
              <p class="text-sm text-gray-400 dark:text-gray-300 mt-1">
                {{ skill.level }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100/50 white:bg-gray-50/50">
      <div class="max-w-7xl mx-auto">
        <!-- Section Title -->
        <div ref="projectsTitle" class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">
            {{ t('projectsTitle') }}
          </h2>
          <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg max-w-2xl mx-auto">
            {{ t('projectsDescription') }}
          </p>
        </div>

        <!-- Projects Grid -->
        <div ref="projectsGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in visibleProjects" 
            :key="project.id"
            class="card card-hover group"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden rounded-lg mb-4">
              <div v-if="project.image" class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div v-else class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <Icon name="heroicons:code-bracket" class="w-12 h-12 text-primary-400" />
              </div>
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a 
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="View on GitHub"
                >
                  <Icon name="heroicons:code-bracket" class="w-5 h-5 text-white" />
                </a>
                <a 
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="View Live Demo"
                >
                  <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            <!-- Project Info -->
            <div>
              <h3 class="font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300 mb-2">
                {{ project.title }}
              </h3>
              <p class="text-gray-400 dark:text-gray-300 text-sm mb-4">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-primary-600/20 text-primary-300 dark:text-primary-200 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Show More/Less Button -->
        <div class="text-center mt-8">
          <button 
            @click="toggleShowAllProjects"
            class="btn-secondary group"
          >
            <span>{{ showAllProjects ? t('showLess') : t('showMore') }}</span>
            <Icon 
              :name="showAllProjects ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" 
              class="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-200" 
            />
          </button>
        </div>

        <!-- Additional Projects (Hidden by default) -->
        <div 
          v-show="showAllProjects"
          ref="additionalProjects"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          <div 
            v-for="project in additionalProjects" 
            :key="project.id"
            :class="project.isGitHubCard ? 'card card-hover group cursor-pointer bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 hover:border-primary-500 transition-all duration-300' : 'card card-hover group'"
            @click="project.isGitHubCard ? window.open(project.github, '_blank') : null"
          >
            <!-- Project Image -->
            <div class="relative overflow-hidden rounded-lg mb-4">
              <div v-if="project.image" class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <div v-else class="aspect-video bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <Icon name="heroicons:code-bracket" class="w-12 h-12 text-primary-400" />
              </div>
              <div v-if="!project.isGitHubCard" class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <a 
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="View on GitHub"
                >
                  <Icon name="heroicons:code-bracket" class="w-5 h-5 text-white" />
                </a>
                <a 
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200"
                  title="View Live Demo"
                >
                  <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 text-white" />
                </a>
              </div>
              <!-- GitHub Card Overlay -->
              <div v-if="project.isGitHubCard" class="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div class="text-center">
                  <Icon name="heroicons:arrow-top-right-on-square" class="w-8 h-8 text-white mb-2 mx-auto" />
                  <p class="text-white font-semibold">Voir sur GitHub</p>
                </div>
              </div>
            </div>

            <!-- Project Info -->
            <div>
              <h3 :class="project.isGitHubCard ? 'font-semibold text-white group-hover:text-primary-300 transition-colors duration-300 mb-2' : 'font-semibold text-gray-200 dark:text-gray-100 group-hover:text-white transition-colors duration-300 mb-2'">
                {{ project.title }}
              </h3>
              <p :class="project.isGitHubCard ? 'text-gray-300 text-sm mb-4' : 'text-gray-400 dark:text-gray-300 text-sm mb-4'">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  :class="project.isGitHubCard ? 'px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full' : 'px-2 py-1 bg-primary-600/20 text-primary-300 dark:text-primary-200 text-xs rounded-full'"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section id="experience" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30 dark:bg-gray-900/30 light:bg-gray-50/50 white:bg-white/50">
      <div class="max-w-4xl mx-auto">
        <!-- Section Title -->
        <div ref="experienceTitle" class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">
            {{ t('experienceTitle') }}
          </h2>
          <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg">
            {{ t('experienceDescription') }}
          </p>
        </div>

        <!-- Timeline -->
        <div ref="timeline" class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <!-- Timeline Items -->
          <div 
            v-for="(experience, index) in experiences" 
            :key="index"
            class="relative flex items-start space-x-8 mb-12 last:mb-0"
          >
            <!-- Timeline Dot -->
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10">
              <Icon :name="experience.icon" class="w-6 h-6 text-white" />
            </div>

            <!-- Content -->
            <div class="flex-1 card">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 class="font-semibold text-gray-200 dark:text-gray-100">{{ experience.title }}</h3>
                <span class="text-sm text-primary-400 dark:text-primary-300">{{ experience.period }}</span>
              </div>
              <p class="text-primary-300 dark:text-primary-200 font-medium mb-2">{{ experience.company }}</p>
              <p class="text-gray-400 dark:text-gray-300 text-sm">{{ experience.description }}</p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span 
                  v-for="tech in experience.technologies" 
                  :key="tech"
                  class="px-2 py-1 bg-gray-700/50 dark:bg-gray-600/50 text-gray-300 dark:text-gray-200 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30 dark:bg-gray-800/30 light:bg-gray-100/50 white:bg-gray-50/50">
      <div class="max-w-4xl mx-auto">
        <!-- Section Title -->
        <div ref="educationTitle" class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-display font-bold gradient-text mb-4">
            {{ t('educationTitle') }}
          </h2>
          <p class="text-gray-400 dark:text-gray-400 light:text-gray-600 white:text-gray-600 text-lg">
            {{ t('educationDescription') }}
          </p>
        </div>

        <!-- Education Timeline -->
        <div ref="educationTimeline" class="relative">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <!-- Education Items -->
          <div 
            v-for="(education, index) in educations" 
            :key="index"
            class="relative flex items-start space-x-8 mb-12 last:mb-0"
          >
            <!-- Timeline Dot -->
            <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10">
              <Icon :name="education.icon" class="w-6 h-6 text-white" />
            </div>

            <!-- Content -->
            <div class="flex-1 card">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 class="font-semibold text-gray-200 dark:text-gray-100">{{ education.title }}</h3>
                <span class="text-sm text-primary-400 dark:text-primary-300">{{ education.period }}</span>
              </div>
              <p class="text-primary-300 dark:text-primary-200 font-medium mb-2">{{ education.institution }}</p>
              <p class="text-gray-400 dark:text-gray-300 text-sm mb-4">{{ education.description }}</p>
              
              <!-- Skills/Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in education.skills" 
                  :key="skill"
                  class="px-2 py-1 bg-gray-700/50 dark:bg-gray-600/50 text-gray-300 dark:text-gray-200 text-xs rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { fadeInUp, fadeInLeft, fadeInRight, staggerChildren, createParticles, cursorGlow } = useAnimations()

// Static translations for index page
const translations = {
  fr: {
    greeting: 'Salut, je suis',
    name: 'Beviryon Issanga Ngoulou',
    title: 'Développeur Fullstack',
    description: 'Passionné par la création d\'expériences web modernes et performantes',
    viewProjects: 'Voir mes projets',
    contactMe: 'Me contacter',
    scrollDown: 'Défiler vers le bas',
    skillsTitle: 'Compétences & Technologies',
    skillsDescription: 'Technologies et outils que j\'utilise pour créer des applications exceptionnelles',
    showMore: 'Voir plus',
    showLess: 'Voir moins',
    projectsTitle: 'Projets Récents',
    projectsDescription: 'Quelques-uns de mes projets récents qui démontrent mes compétences',
    experienceTitle: 'Expérience Professionnelle',
    experienceDescription: 'Mon parcours professionnel et les défis que j\'ai relevés',
    educationTitle: 'Formation & Certifications',
    educationDescription: 'Mon parcours académique et mes certifications professionnelles'
  },
  en: {
    greeting: 'Hi, I\'m',
    name: 'Beviryon Issanga Ngoulou',
    title: 'Fullstack Developer',
    description: 'Passionate about creating modern and performant web experiences',
    viewProjects: 'View my projects',
    contactMe: 'Contact me',
    scrollDown: 'Scroll down',
    skillsTitle: 'Skills & Technologies',
    skillsDescription: 'Technologies and tools I use to create exceptional applications',
    showMore: 'Show more',
    showLess: 'Show less',
    projectsTitle: 'Recent Projects',
    projectsDescription: 'Some of my recent projects that showcase my skills',
    experienceTitle: 'Professional Experience',
    experienceDescription: 'My professional journey and the challenges I\'ve tackled',
    educationTitle: 'Education & Certifications',
    educationDescription: 'My academic journey and professional certifications'
  }
}

// Safe translation function
const t = (key: string) => {
  const locale = currentLocale.value as 'fr' | 'en'
  return translations[locale]?.[key] || translations.en[key] || key
}

// Refs for animations
const greeting = ref<HTMLElement>()
const name = ref<HTMLElement>()
const title = ref<HTMLElement>()
const typingContainer = ref<HTMLElement>()
const typingText = ref<HTMLElement>()
const ctaButtons = ref<HTMLElement>()
const scrollIndicator = ref<HTMLElement>()
const skillsTitle = ref<HTMLElement>()
const skillsGrid = ref<HTMLElement>()
const projectsTitle = ref<HTMLElement>()
const projectsGrid = ref<HTMLElement>()
const experienceTitle = ref<HTMLElement>()
const timeline = ref<HTMLElement>()
const educationTitle = ref<HTMLElement>()
const educationTimeline = ref<HTMLElement>()
const particleContainer = ref<HTMLElement>()

// Skills data
const skills = [
  { name: 'HTML5', icon: 'heroicons:code-bracket', level: 'Expert' },
  { name: 'CSS3', icon: 'heroicons:paint-brush', level: 'Expert' },
  { name: 'JavaScript', icon: 'heroicons:code-bracket', level: 'Expert' },
  { name: 'Vue.js', icon: 'heroicons:cube', level: 'Intermediate' },
  { name: 'React.js', icon: 'heroicons:cube', level: 'Advanced' },
  { name: 'Angular', icon: 'heroicons:cube', level: 'Débutant' },
  { name: 'Node.js', icon: 'heroicons:server', level: 'Advanced' },
  { name: 'PHP', icon: 'heroicons:wrench-screwdriver', level: 'Intermediate' },
  { name: 'Python', icon: 'heroicons:wrench-screwdriver', level: 'Intermediate' },
  { name: 'SQL', icon: 'heroicons:circle-stack', level: 'Intermediate' },
  { name: 'Git', icon: 'heroicons:code-branch', level: 'Expert' },
  { name: 'Docker', icon: 'heroicons:swatch', level: 'Intermediate' }
]

// Skills display logic
const showAllSkills = ref(false)

const visibleSkills = computed(() => {
  return skills.slice(0, 4)
})

const additionalSkills = computed(() => {
  return skills.slice(4)
})

const toggleShowAllSkills = () => {
  showAllSkills.value = !showAllSkills.value
}

// Projects display logic
const showAllProjects = ref(false)

const visibleProjects = computed(() => {
  return projects.slice(0, 3)
})

const additionalProjects = computed(() => {
  return projects.slice(3)
})

const toggleShowAllProjects = () => {
  showAllProjects.value = !showAllProjects.value
}

// Projects data
const projects = [
  {
    id: 1,
    title: 'Site Agence Immobilière MVB',
    description: 'Plateforme complète pour une agence immobilière avec interface moderne, navigation intuitive et fonctionnalités PWA. Design professionnel avec section héro, popup d\'installation mobile et gestion complète des biens immobiliers.',
    technologies: ['Next.js', 'TypeScript', 'Strapi', 'PWA', 'Responsive Design'],
    github: 'https://github.com/beviryon',
    demo: 'https://mvb-site.vercel.app/',
    image: '/projects/mvb-immobilier.jpg'
  },
  {
    id: 2,
    title: 'FlexBeat - Association Sportive',
    description: 'Site web moderne pour une association sportive à Brazzaville spécialisée dans le fitness, activités culturelles et cardio plein air. Interface intuitive avec fonctionnalités PWA et design responsive.',
    technologies: ['Vue.js', 'TypeScript', 'TailwindCSS', 'PWA', 'Vercel'],
    github: 'https://github.com/beviryon',
    demo: 'https://flexbeat.vercel.app/',
    image: '/projects/flexbeat.png'
  },

  {
    id: 3,
    title: 'Trevixia - Solutions Digitales',
    description: 'Site web corporate pour une entreprise spécialisée dans les solutions digitales et l\'automatisation pour PME. Interface moderne avec dégradé purple/blue, simulateur de devis et chat widget intégré.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Chat Widget', 'Responsive Design'],
    github: 'https://github.com/beviryon',
    demo: 'https://trevixia-web.netlify.app/',
    image: '/projects/trevixia.png'
  },
  {
    id: 4,
    title: 'Trevixia Formation - Plateforme LMS',
    description: 'Plateforme de formation complète avec gestion des utilisateurs, cours interactifs, suivi des notes et planning. Interface moderne avec authentification sécurisée pour étudiants et administrateurs.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Authentication', 'Database', 'JSON', 'Vercel'],
    github: 'https://github.com/beviryon',
    demo: 'https://formation-trevixia-7wye.vercel.app/login',
    image: '/projects/trevixia-formation.png'
  },
  {
    id: 5,
    title: 'Site E-commerce',
    description: 'Plateforme e-commerce complète avec panier, paiement et gestion des commandes',
  technologies: [ 'HTML5', 'CSS3', 'Firebase', 'Node.js', 'Express', 'Sequelize', 'SQL'],
    github: 'https://github.com/beviryon',
    demo: 'https://ryonv.com',
    image: '/projects/ecommerce.png'
  },
  {
    id: 6,
    title: 'Site Autofacturation',
    description: 'Application web pour la gestion et génération automatique de factures',
    technologies: ['React.js', 'Node.js', 'Express', 'Sequelize', 'SQL'],
    github: 'https://github.com/beviryon',
    demo: 'https://github.com/Beviryon',
    image: '/projects/autofacturation.png'
  },
  {
    id: 7,
    title: 'Gestion Réclamations GEXSI',
    description: 'Projet entreprise : Extraction et transformation de données avec Talend',
    technologies: ['SQL', 'Talend', 'Excel', 'ETL'],
    github: 'https://github.com/beviryon',
    demo: 'https://github.com/Beviryon',
    image: '/projects/gexsi.png'
  },
  {
    id: 8,
    title: 'Voir plus de projets',
    description: 'Découvrez tous mes autres projets, contributions open-source et réalisations sur mon profil GitHub. Plus de 20+ projets disponibles !',
    technologies: ['GitHub', 'Open Source', 'Divers projets', 'Contributions'],
    github: 'https://github.com/beviryon',
    demo: 'https://github.com/beviryon',
    image: '/projects/github-showcase.png',
    isGitHubCard: true
  }
]

// Experience data
const experiences = [
  {
    title: 'Développeur web en Alternance',
    company: 'Eurexo sas',
    period: 'Sept 2023 - Juillet 2024',
    description: 'Développement d\'applications web et participation à des projets de développement',
    technologies: ['JavaScript', 'Node.js', 'API REST', 'SQL'],
    icon: 'heroicons:code-bracket'
  },
  {
    title: 'Stagiaire Technicien SRS',
    company: 'VNB IT',
    period: 'Juin - Juillet 2022',
    description: 'Stage en continuité d\'activité et sécurité des systèmes d\'information',
    technologies: ['Analyse de risques', 'Sécurité informatique', 'Continuité d\'activité'],
    icon: 'heroicons:shield-check'
  }
]

// Education data
const educations = [
  {
    title: 'Master Tech Full Stack',
    institution: 'ETNA',
    period: '2025 - 2027',
    description: 'Programme destiné à former des experts capables de concevoir, piloter et sécuriser des projets web. Maîtrise du développement full stack avec Angular, Django, React, Node.js, Flutter, et Go.',
    skills: ['Angular', 'Django', 'React', 'Node.js', 'Flutter', 'Go', 'Architecture logicielle', 'DevOps', 'Cybersécurité'],
    icon: 'heroicons:academic-cap'
  },
  {
    title: 'Bachelor 3 Chef de projets digitaux',
    institution: 'EEMI',
    period: '2023 - 2024',
    description: 'Formation en gestion de projet digital avec spécialisation en développement backend et technologies web modernes.',
    skills: ['Backend Flask', 'Framework SASS', 'Linux', 'Docker', 'Git', 'Modélisation UML'],
    icon: 'heroicons:book-open'
  }
]

// Get current locale
const getCurrentLocale = () => {
  if (process.client) {
    return localStorage.getItem('locale') || 'fr'
  }
  return 'fr'
}

const currentLocale = ref(getCurrentLocale())

// Typing animation text
const typingTexts = computed(() => [
  t('description'),
  currentLocale.value === 'fr' ? 'Créer des applications évolutives' : 'Creating scalable applications',
  currentLocale.value === 'fr' ? 'Concevoir de belles interfaces' : 'Crafting beautiful user interfaces',
  currentLocale.value === 'fr' ? 'Développer des systèmes backend robustes' : 'Developing robust backend systems',
  currentLocale.value === 'fr' ? 'Optimiser les performances' : 'Optimizing for performance'
])

let currentTextIndex = 0
let isDeleting = false
let currentText = ''

// Typing animation function
const typeText = () => {
  if (!typingText.value) return

  const fullText = typingTexts.value[currentTextIndex]
  
  if (isDeleting) {
    currentText = fullText.substring(0, currentText.length - 1)
  } else {
    currentText = fullText.substring(0, currentText.length + 1)
  }

  typingText.value.textContent = currentText

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && currentText === fullText) {
    typeSpeed = 2000 // Pause at end
  } else if (isDeleting && currentText === '') {
    isDeleting = false
    currentTextIndex = (currentTextIndex + 1) % typingTexts.value.length
    typeSpeed = 500
  }

  setTimeout(typeText, typeSpeed)
}

// Initialize animations
onMounted(() => {
  // Create particles
  createParticles(particleContainer.value, 50)
  
  // Initialize cursor glow
  cursorGlow()

  // Hero section animations
  fadeInUp(greeting.value, 0.2)
  fadeInUp(name.value, 0.4)
  fadeInUp(title.value, 0.6)
  fadeInUp(typingContainer.value, 0.8)
  fadeInUp(ctaButtons.value, 1.0)
  fadeInUp(scrollIndicator.value, 1.2)

  // Start typing animation
  setTimeout(typeText, 1000)

  // Skills section animations
  fadeInUp(skillsTitle.value, 0.2)
  staggerChildren(skillsGrid.value, '.card', 0.1)

  // Projects section animations
  fadeInUp(projectsTitle.value, 0.2)
  staggerChildren(projectsGrid.value, '.card', 0.1)

  // Experience section animations
  fadeInUp(experienceTitle.value, 0.2)
  staggerChildren(timeline.value, '.relative', 0.2)

  // Education section animations
  fadeInUp(educationTitle.value, 0.2)
  staggerChildren(educationTimeline.value, '.relative', 0.2)
  
  // Update locale when it changes
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

// SEO
useHead({
  title: 'Beviryon Issanga Ngoulou - Fullstack Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Beviryon Issanga Ngoulou - Expert Fullstack Developer specializing in Vue.js, AdonisJS, and modern web technologies' }
  ]
})
</script>
