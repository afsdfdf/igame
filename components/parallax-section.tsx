"use client"

import { useRef, useEffect, type ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
}

export default function ParallaxSection({ children, speed = 0.5 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const sectionTop = section.offsetTop
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Check if section is in viewport
      if (scrollPosition + viewportHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
        const distance = scrollPosition - sectionTop + viewportHeight
        const parallaxOffset = distance * speed

        section.style.backgroundPositionY = `${parallaxOffset}px`

        // Apply subtle transform to children
        const childrenContainer = section.firstElementChild as HTMLElement
        if (childrenContainer) {
          childrenContainer.style.transform = `translateY(${parallaxOffset * 0.1}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black to-purple-950 bg-fixed"
      style={{ backgroundImage: "url('/images/blockchain-bg.jpg')", backgroundSize: "cover" }}
    >
      <div className="relative transition-transform duration-300 ease-out">{children}</div>
    </section>
  )
}
