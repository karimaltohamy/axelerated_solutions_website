import { Hero, Services, Products, Projects, ContactCTA, Testimonials } from "@/components/pages/home";

export default function Home() {
  return (
    <div className="text-on-surface overflow-x-hidden">
      <Hero />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
