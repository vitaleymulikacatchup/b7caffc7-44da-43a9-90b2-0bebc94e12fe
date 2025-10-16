"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = /* provided JSON array */
[
  { "id": "hero-image", "url": "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance." },
  { "id": "contact-image", "url": "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Cozy and modern hotel bedroom interior with elegant decor and soft lighting." },
  { "id": "footer-logo", "url": "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Modern hotel building exterior in Stuttgart, Germany, during daytime. Urban architecture and design." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Hotel"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Hotel"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[{ text: "Book Now", href: "contact" }]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Our hotel offers world-class amenities and impeccable service.",
              "Located at the heart of downtown, we ensure a memorable stay."
            ]}
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="Reach out to us for reservations and inquiries."
            imageSrc="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            className="bg-blue-50 text-gray-800"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [
                { label: "Home", href: "home" },
                { label: "About", href: "about" },
                { label: "Contact", href: "contact" }
              ] }
            ]}
            logoSrc="https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            copyrightText="© 2025 | Hotel"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}