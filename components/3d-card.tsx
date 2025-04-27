"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Card3DProps {
  children: ReactNode
  className?: string
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth out the mouse tracking with springs
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)
  const scale = useSpring(hovering ? 1.05 : 1, springConfig)
  const brightness = useSpring(hovering ? 1.1 : 1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate normalized mouse position (-0.5 to 0.5)
    const normalizedX = (e.clientX - centerX) / rect.width
    const normalizedY = (e.clientY - centerY) / rect.height

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => {
        setHovering(false)
        mouseX.set(0)
        mouseY.set(0)
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          filter: `brightness(${brightness})`,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full"
      >
        {children}

        {/* Reflection/glow effect */}
        <motion.div
          className="absolute inset-0 rounded-lg bg-gradient-to-tr from-[#7D5FFF]/0 via-[#7D5FFF]/10 to-[#00FFF0]/20 opacity-0 pointer-events-none"
          style={{
            opacity: useTransform(scale, [1, 1.05], [0, 0.8]),
          }}
        />
      </motion.div>
    </motion.div>
  )
}
