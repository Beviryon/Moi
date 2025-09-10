import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    
    // Make GSAP available globally
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
  }
})
