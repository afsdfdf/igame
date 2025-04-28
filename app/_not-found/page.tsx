import Link from "next/link"

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-md font-medium transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </main>
  )
} 