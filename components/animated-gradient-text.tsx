"use client"

import { useEffect, useRef } from "react"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export default function AnimatedGradientText({ text, className = "" }: AnimatedGradientTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textElement = textRef.current
    if (!textElement) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = textElement.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      textElement.style.setProperty("--x", `${x}%`)
      textElement.style.setProperty("--y", `${y}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={textRef}
      className={`bg-clip-text text-transparent bg-gradient-to-r from-[#7D5FFF] via-[#00FFF0] to-[#7D5FFF] animate-gradient ${className}`}
      style={{
        backgroundSize: "200% 200%",
        backgroundPosition: "var(--x, 0%) var(--y, 0%)",
      }}
    >
      {text}
    </div>
  )
}
