import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <FileText className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">Terms & Conditions</h1>
          <p className="text-xs text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="text-sm text-foreground/90 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">1. Fitness & Medical Declaration</h3>
            <p>
              High-altitude trekking requires excellent cardiovascular endurance. By registering, you confirm that you are physically fit to walk 6-8 km per day in snowy or steep terrains, and do not suffer from severe respiratory illnesses, heart conditions, or severe asthma.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">2. Decorum & Environmental Code</h3>
            <p>
              Himalayan Warrior strictly enforces a zero-littering and zero-alcohol policy during treks. Carrying or consuming alcohol, illegal drugs, or littering plastic wraps/bottles on mountain trails will lead to immediate expulsion from the batch without refunds.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">3. Guide/Leader Authority</h3>
            <p>
              The decision of the expedition leader regarding safety parameters, trail modifications, campsite allocations, and emergency evacuations is final and binding on all hikers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
