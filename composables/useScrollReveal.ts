export const useScrollReveal = () => {
  const observeElements = (selector: string, options = {}) => {
    if (!process.client) return

    const defaultOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return observer
  }

  const animateCounter = (element: HTMLElement, target: number, duration = 2000) => {
    if (!element) return

    const start = 0
    const startTime = Date.now()

    const updateCounter = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.floor(start + (target - start) * progress)
      element.textContent = current.toString()

      if (progress < 1) {
        requestAnimationFrame(updateCounter)
      }
    }

    updateCounter()
  }

  return {
    observeElements,
    animateCounter,
  }
}
