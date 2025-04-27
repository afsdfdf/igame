"use client"

import { motion } from "framer-motion"
import { useDevice } from "@/hooks/useDevice"

interface MobilePageTemplateProps {
  children: React.ReactNode
  title?: string
  description?: string
  showBackButton?: boolean
  onBack?: () => void
}

export function MobilePageTemplate({
  children,
  title,
  description,
  showBackButton = false,
  onBack,
}: MobilePageTemplateProps) {
  const { isMobile } = useDevice()

  if (!isMobile) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="px-4 py-6 space-y-6"
    >
      {/* 页面标题 */}
      {(title || description) && (
        <div className="space-y-2">
          {title && <h1 className="text-2xl font-bold text-white">{title}</h1>}
          {description && <p className="text-gray-400 text-sm">{description}</p>}
        </div>
      )}

      {/* 返回按钮 */}
      {showBackButton && (
        <button
          onClick={onBack}
          className="flex items-center text-gray-400 hover:text-[#00FFF0] transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          返回
        </button>
      )}

      {/* 页面内容 */}
      <div className="space-y-6">{children}</div>
    </motion.div>
  )
} 