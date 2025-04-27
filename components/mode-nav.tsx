"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Trophy, Gamepad2, Users, Mountain, Sparkles, ArrowLeft } from "lucide-react"

export default function ModeNav() {
  const pathname = usePathname()

  const modes = [
    { name: "PVP", path: "/modes/pvp", icon: <Trophy className="h-5 w-5" /> },
    { name: "Casual", path: "/modes/casual", icon: <Gamepad2 className="h-5 w-5" /> },
    { name: "Team", path: "/modes/team", icon: <Users className="h-5 w-5" /> },
    { name: "Adventure", path: "/modes/adventure", icon: <Mountain className="h-5 w-5" /> },
    { name: "Lucky", path: "/modes/lucky", icon: <Sparkles className="h-5 w-5" /> },
  ]

  return (
    <div className="bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center text-gray-300 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>

          <nav className="flex space-x-1">
            {modes.map((mode) => (
              <Link
                key={mode.path}
                href={mode.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                  pathname === mode.path
                    ? "bg-purple-900/50 text-white"
                    : "text-gray-300 hover:bg-purple-900/30 hover:text-white",
                )}
              >
                <span className="mr-2">{mode.icon}</span>
                <span>{mode.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
