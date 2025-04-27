import type React from "react"
import ModeNav from "@/components/mode-nav"

export default function ModesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <ModeNav />
      {children}
    </div>
  )
}
