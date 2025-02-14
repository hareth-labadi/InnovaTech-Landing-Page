import { ArrowRight, ArrowDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div
      className="relative min-h-screen bg-[#101725] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#101725]/80 to-[#1054f3]/20 pointer-events-none" />
      <div className="relative">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="InnovTech Logo" width={48} height={48} className="h-12 w-auto" priority />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/testimonials" className="text-white/80 hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/help" className="text-white/80 hover:text-white transition-colors">
                Help Center
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="/signup"
                className="px-6 py-2 text-white/80 hover:text-white border border-white/20 rounded-xl transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="px-6 py-2 bg-[#1054f3] text-white rounded-xl hover:bg-[#1054f3]/90 transition-colors"
              >
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto px-4 pt-24 pb-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
              Innovative Tech Solutions to Elevate
              <br />
              Your Business and <span className="inline-block bg-[#1054f3] px-6 py-2 mt-2">Drive the Future</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry&apos;s standard dummy text ever since the 1500s,
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <button className="px-8 py-3 bg-[#1054f3] text-white rounded-xl hover:bg-[#1054f3]/90 transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                Quick Contact
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-8 py-3 text-white border border-white/20  rounded-xl hover:bg-white/5 transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                Learn More
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

