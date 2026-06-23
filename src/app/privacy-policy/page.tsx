import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <ShieldCheck className="h-10 w-10 text-primary mx-auto" />
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">Privacy Policy</h1>
          <p className="text-xs text-muted-foreground">Last updated: June 2026</p>
        </div>

        <div className="text-sm text-foreground/90 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">1. Information We Collect</h3>
            <p>
              To process forest permissions and wildlife sanctuary entries with local government bodies (like the Uttarakhand Forest Department), we collect name, age, gender, contact number, emergency coordinates, email address, Aadhaar card number, and fitness self-attestations.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">2. Document Storage & Security</h3>
            <p>
              Your uploaded Aadhaar cards and health certificates are stored in secure cloud systems. Access is restricted to permit clearing administrators. Once your trek batch is completed and safety clearances are cleared, your document uploads are permanently deleted from our servers.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-base font-extrabold uppercase tracking-wide border-l-2 border-primary pl-2 text-foreground">3. Third-Party Sharing</h3>
            <p>
              We do not sell, rent, or lease your personal information. We only share details with government authorities, forest check-posts, and local homestays as legally required to clear national park entrance fees and register hikers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
