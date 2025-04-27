"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    startTimeRef.current = null
    countRef.current = 0
    setCount(0)

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp
      }

      const progress = timestamp - startTimeRef.current
      const percentage = Math.min(progress / duration, 1)

      // Easing function for smoother animation
      const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4)
      const easedPercentage = easeOutQuart(percentage)

      const currentCount = Math.floor(easedPercentage * value)

      if (currentCount !== countRef.current) {
        countRef.current = currentCount
        setCount(currentCount)
      }

      if (percentage < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    requestAnimationFrame(animate)
  }, [value, duration])

  return (
    <span className={cn(className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
