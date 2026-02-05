import { Header } from "@/components/sections/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EquipmentSection } from "@/components/sections/EquipmentSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/sections/Footer";
import { ServiceSelection } from "@/components/sections/ServiceSelection";
import { MapSection } from "@/components/sections/MapSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ConsultationForm } from "@/components/sections/ConsultationForm";
import { ScrollDebugger } from "@/components/ScrollDebugger";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white">
      <div className="flex flex-col w-full max-w-[1400px] gap-4 md:gap-6 px-4 py-8">
        <Header />
        <AboutSection />
        <WhyChooseUs />
        <ProjectsSection />
        <EquipmentSection />
        <ServiceSelection />
        <TrustedBySection />
        <FAQSection />
        <ConsultationForm />
        <MapSection />
        <Footer />
        <ScrollDebugger />
      </div>
    </main>
  );
}
