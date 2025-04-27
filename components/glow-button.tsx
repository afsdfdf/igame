"use client"

import type { ReactNode } from "react"
// import { Button } from "@/components/ui/button" // Removed Button import
// import { cn } from "@/lib/utils" // Removed cn import

interface GlowButtonProps {
  children: ReactNode
  size?: "default" | "sm" | "lg"
  className?: string
  onClick?: () => void
  [x: string]: any // Allows passing other props
}

// 优化发光按钮在移动端的触摸体验

// 增加触摸区域和调整大小
export default function GlowButton({ children, size = "default", className = "", ...props }: GlowButtonProps) {
  const sizeClasses = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg",
  }

  return (
    <button
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#7D5FFF] to-[#00FFF0] font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98] ${
        sizeClasses[size]
      } ${className}`}
      {...props}
    >
      <span className="absolute inset-0 bg-gradient-to-br from-[#7D5FFF] to-[#00FFF0] opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></span>
      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#7D5FFF] to-[#00FFF0]"></span>
      <span className="absolute inset-[1.5px] rounded-[6px] bg-[#0F0B1F] transition-all duration-300 group-hover:bg-[#1A123A]"></span>
      <span className="relative flex items-center justify-center gap-1 sm:gap-2">{children}</span>
    </button>
  )
}
