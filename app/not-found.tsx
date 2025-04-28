"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import AnimatedGradientText from "@/components/animated-gradient-text"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <AnimatedGradientText text="404 - Page Not Found" />
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
            Return to Home
          </Button>
        </Link>
      </div>
    </main>
  )
} 