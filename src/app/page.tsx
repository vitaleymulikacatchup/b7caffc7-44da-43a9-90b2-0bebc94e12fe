"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/FeatureCardThree';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { id: "hero-image", url: "https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Elegant white Mediterranean building with ornate balconies under a clear blue sky." },
  { id: "about-image", url: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling." },
  { id: "contact-media", url: "https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Experience serene luxury at a Dubai resort with traditional architecture and tranquil pool." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal brandName="HotelName" />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to HotelName"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc="https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Explore Rooms", href: "rooms" },
              { text: "Contact Us", href: "contact" }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Exceptional Service", description: "Our staff provides top-notch service to ensure a delightful stay.", icon: "Award" },
              { title: "Central Location", description: "Conveniently located near major attractions and transit options.", icon: "MapPin" }
            ]}
            imageSrc="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardThree
            features={[
              { id: "01", title: "Elegant Rooms", description: "Enjoy stunning views and luxurious accommodations.", imageSrc: "https://images.pexels.com/photos/6010421/pexels-photo-6010421.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Get in Touch"
            description="Have questions or need assistance? Our team is here to help."
            imageSrc="https://images.pexels.com/photos/8484840/pexels-photo-8484840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-blue-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "About", items: [ { label: "Our Story", href: "our-story" }, { label: "Careers", href: "careers" } ] },
              { title: "Services", items: [ { label: "Dining", href: "dining" }, { label: "Spa", href: "spa" } ] }
            ]}
            copyrightText="© 2023 HotelName"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}