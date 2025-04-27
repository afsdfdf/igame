import { ArrowRight } from "lucide-react"
import AnimatedGradientText from "@/components/animated-gradient-text"
import GlowButton from "@/components/glow-button"
import { Button } from "@/components/ui/button"
import ParticleBackground from "@/components/particle-background"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
        <div className="mb-8">
          <AnimatedGradientText className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            AIGAME
          </AnimatedGradientText>
          <h2 className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200 px-4">
            The ultimate decentralized gaming ecosystem on Solana blockchain.
            <br className="hidden sm:block" />
            <span className="text-cyan-400 font-medium">Play. Earn. Trade.</span> All on-chain.
          </h2>
        </div>

        {/* Main Visual */}
        <div className="relative w-full max-w-4xl mx-auto h-48 sm:h-64 md:h-96 mb-8 sm:mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full rounded-xl border border-purple-500/30 shadow-[0_0_50px_rgba(125,95,255,0.3)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-blue-900/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">5 Game Modes</h3>
                  <p className="text-cyan-400 text-lg md:text-xl">Compete. Explore. Earn.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
