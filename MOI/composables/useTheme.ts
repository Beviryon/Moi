export const useTheme = () => {
  const theme = ref<'dark' | 'light' | 'white'>('dark') // Default to dark mode

  const toggleTheme = () => {
    if (theme.value === 'dark') {
      theme.value = 'light'
    } else if (theme.value === 'light') {
      theme.value = 'white'
    } else {
      theme.value = 'dark'
    }
    applyTheme()
  }

  const setTheme = (newTheme: 'dark' | 'light' | 'white') => {
    theme.value = newTheme
    applyTheme()
  }

  const applyTheme = () => {
    if (process.client) {
      // Remove all theme classes
      document.documentElement.classList.remove('dark', 'light', 'white')
      document.body.classList.remove('dark', 'light', 'white')
      
      // Add current theme class
      document.documentElement.classList.add(theme.value)
      document.body.classList.add(theme.value)
      localStorage.setItem('theme', theme.value)
    }
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme && ['dark', 'light', 'white'].includes(savedTheme)) {
        theme.value = savedTheme as 'dark' | 'light' | 'white'
      } else {
        theme.value = prefersDark ? 'dark' : 'light'
      }
      
      applyTheme()
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    theme: readonly(theme),
    toggleTheme,
    setTheme
  }
}
