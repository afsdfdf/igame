import { ArrowRight } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import GlowButton from "@/components/glow-button"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 md:gap-16 py-16">
        {/* Left: Text */}
        <div className="flex-1 text-left md:pr-8">
          <AnimatedGradientText className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            AIGAME
          </AnimatedGradientText>
          <h2 className="text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed text-gray-200 mb-6">
            The ultimate decentralized gaming ecosystem on Solana blockchain.<br className="hidden sm:block" />
            <span className="text-cyan-400 font-medium">Play. Earn. Trade.</span> All on-chain.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <GlowButton size="lg" className="w-full sm:w-auto text-base sm:text-lg py-5 sm:py-6">
              Start Playing
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </GlowButton>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-cyan-500 text-cyan-400 hover:bg-cyan-950/50 py-5 sm:py-6 h-auto text-base sm:text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-xl">
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-purple-500/30">
            <Image
              src="/images/hero-bg.jpg"
              alt="AIGAME Hero"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <svg className="w-6 h-6 text-cyan-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
