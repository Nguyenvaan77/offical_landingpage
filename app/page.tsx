import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProblemsSection from "@/components/ProblemsSection"
import JourneySection from "@/components/JourneySection"
import WhyChooseSection from "@/components/WhyChooseSection"
import FeaturesSection from "@/components/FeaturesSection"
import HowToUseSection from "@/components/HowToUseSection"
import MissionSection from "@/components/MissionSection"
import TeamSection from "@/components/TeamSection"
import FinalCTASection from "@/components/FinalCTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-herb-green-50">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <JourneySection />
      <WhyChooseSection />
      <FeaturesSection />
      <HowToUseSection />
      <MissionSection />
      <TeamSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}
