export const useAnimations = () => {
  const fadeInUp = (element: string | Element, delay = 0) => {
    if (process.client && window.gsap) {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          delay,
          ease: "power2.out"
        }
      )
    }
  }

  const fadeInLeft = (element: string | Element, delay = 0) => {
    if (process.client && window.gsap) {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          x: -50 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay,
          ease: "power2.out"
        }
      )
    }
  }

  const fadeInRight = (element: string | Element, delay = 0) => {
    if (process.client && window.gsap) {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          x: 50 
        },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8, 
          delay,
          ease: "power2.out"
        }
      )
    }
  }

  const scaleIn = (element: string | Element, delay = 0) => {
    if (process.client && window.gsap) {
      gsap.fromTo(element, 
        { 
          opacity: 0, 
          scale: 0.8 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          delay,
          ease: "back.out(1.7)"
        }
      )
    }
  }

  const staggerChildren = (parent: string | Element, children: string, delay = 0.1) => {
    if (process.client && window.gsap) {
      gsap.fromTo(children, 
        { 
          opacity: 0, 
          y: 30 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: delay,
          ease: "power2.out"
        }
      )
    }
  }

  const parallaxScroll = (element: string | Element, speed = 0.5) => {
    if (process.client && window.gsap && window.ScrollTrigger) {
      gsap.to(element, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }
  }

  const typingAnimation = (element: string | Element, text: string, speed = 0.05) => {
    if (process.client && window.gsap) {
      gsap.to(element, {
        text: text,
        duration: text.length * speed,
        ease: "none"
      })
    }
  }

  const createParticles = (container: string | Element, count = 50) => {
    if (process.client) {
      const containerEl = typeof container === 'string' ? document.querySelector(container) : container
      if (!containerEl) return

      for (let i = 0; i < count; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.width = Math.random() * 4 + 2 + 'px'
        particle.style.height = particle.style.width
        particle.style.animationDelay = Math.random() * 6 + 's'
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's'
        
        containerEl.appendChild(particle)
      }
    }
  }

  const cursorGlow = () => {
    if (process.client) {
      const cursor = document.createElement('div')
      cursor.className = 'fixed w-8 h-8 bg-primary-500/30 rounded-full pointer-events-none z-50 mix-blend-difference'
      cursor.style.transform = 'translate(-50%, -50%)'
      document.body.appendChild(cursor)

      let mouseX = 0, mouseY = 0
      let cursorX = 0, cursorY = 0

      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
      })

      const animateCursor = () => {
        cursorX += (mouseX - cursorX) * 0.1
        cursorY += (mouseY - cursorY) * 0.1
        cursor.style.left = cursorX + 'px'
        cursor.style.top = cursorY + 'px'
        requestAnimationFrame(animateCursor)
      }
      animateCursor()

      // Add glow effect on hover
      document.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)'
      })

      document.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      })
    }
  }

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerChildren,
    parallaxScroll,
    typingAnimation,
    createParticles,
    cursorGlow
  }
}
