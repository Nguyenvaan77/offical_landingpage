import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden bg-gradient-to-br from-herb-green-50 via-herb-green-100 to-herb-green-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/img/memcab/background.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-herb-green-50/10 via-herb-green-100/10 to-herb-green-200/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Animated */}
          <div className="space-y-6 animate-fade-in-left visible">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-herb-green-900 leading-tight">
                LangConnect
                <span className="block text-herb-green-600">Gặp đúng thầy, chữa đúng bệnh</span>
              </h1>

              <p className="text-xl text-herb-green-800 leading-relaxed max-w-2xl">
                Chỉ trong vài phút, bạn có thể kết nối với <strong className="text-herb-green-700">lương y</strong> đã
                được xác minh hồ sơ – để khám đúng bệnh, dùng đúng thuốc, an tâm điều trị.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-herb-green-500 to-herb-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-herb-green-600 hover:to-herb-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>🌿 Tìm thầy thuốc phù hợp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image - Animated */}
          <div className="relative animate-fade-in-right visible">
            <div className="relative z-10">
              <Image
                src="/img/memcab/appimg-ok.png"
                alt="LangConnect App"
                width={600}
                height={700}
                className="w-full h-auto rounded-3xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-herb-green-300/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-herb-green-400/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
