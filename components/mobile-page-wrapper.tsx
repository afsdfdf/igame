"use client"

import { useDevice } from "@/hooks/useDevice"
import { motion } from "framer-motion"

interface MobilePageWrapperProps {
  children: React.ReactNode
  mobileContent: React.ReactNode
}

export function MobilePageWrapper({ children, mobileContent }: MobilePageWrapperProps) {
  const { isMobile } = useDevice()

  if (isMobile) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="min-h-screen bg-black"
      >
        {mobileContent}
      </motion.div>
    )
  }

  return <>{children}</>
}