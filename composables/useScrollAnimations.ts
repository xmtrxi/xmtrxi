import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollAnimations = () => {
  const scrollY = ref(0)
  const isScrolled = ref(false)
  const animatedElements = ref<Set<Element>>(new Set())

  const updateScrollPosition = () => {
    scrollY.value = window.scrollY
    isScrolled.value = scrollY.value > 50
  }

  const observeElement = (element: Element) => {
    if (!element || animatedElements.value.has(element)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            entry.target.classList.remove('animate-out')
            
            // Add stagger effect for children
            const children = entry.target.querySelectorAll('[data-stagger]')
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-in')
              }, index * 100)
            })
          } else {
            entry.target.classList.remove('animate-in')
            entry.target.classList.add('animate-out')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    )

    observer.observe(element)
    animatedElements.value.add(element)
  }

  const initScrollAnimations = () => {
    // Observe all elements with animation classes
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach(observeElement)
  }

  const parallaxEffect = (element: HTMLElement, speed: number = 0.5) => {
    const rect = element.getBoundingClientRect()
    const scrolled = window.pageYOffset
    const rate = scrolled * -speed
    element.style.transform = `translateY(${rate}px)`
  }

  const handleScroll = () => {
    updateScrollPosition()
    
    // Apply parallax to elements
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    parallaxElements.forEach((element) => {
      const speed = parseFloat(element.getAttribute('data-parallax') || '0.5')
      parallaxEffect(element as HTMLElement, speed)
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initialize animations after a short delay
    setTimeout(initScrollAnimations, 100)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    scrollY,
    isScrolled,
    observeElement,
    initScrollAnimations,
    parallaxEffect
  }
}

// CSS classes for animations (to be added to tailwind.css)
export const scrollAnimationClasses = `
  [data-animate] {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-animate].animate-in {
    opacity: 1;
    transform: translateY(0);
  }

  [data-animate="fade-left"] {
    transform: translateX(-30px);
  }

  [data-animate="fade-right"] {
    transform: translateX(30px);
  }

  [data-animate="scale"] {
    transform: scale(0.9);
  }

  [data-animate="rotate"] {
    transform: rotate(-5deg) scale(0.9);
  }

  [data-stagger] {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  [data-stagger].animate-in {
    opacity: 1;
    transform: translateY(0);
  }
`
