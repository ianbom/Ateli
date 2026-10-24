export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  brandName: "NOIREL",
  fullBrandName: "NOIREL STUDIO",
  descriptor: "INTERIOR ARCHITECTURE",
  industry: "Interior Architecture & Spatial Design",
  tagline: "Spaces shaped by intention.",
  metaDescription: "NOIREL STUDIO is an international interior architecture and spatial design practice crafting contemporary, timeless residences and monolithic spaces grounded in restraint, materiality, and light.",

  hero: {
    tag: "Interior architecture studio",
    headingMain: "We shape architectural",
    headingAccent: "interiors",
    headingMiddle: "grounded in",
    headingEmphasis: "materiality, restraint, and light.",
    ctaPrimary: "GET IN TOUCH",
    ctaPrimaryHref: "#contact",
    ctaSecondary: "OUR PROJECTS",
    ctaSecondaryHref: "/projects",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2400",
  },

  about: {
    tag: "Who we are",
    headlineMain: "NOIREL. A studio that focuses on",
    headlineEmphasis: "lasting design.",
    paragraphs: [
      "NOIREL STUDIO is an interior architecture practice rooted in the philosophy of quiet restraint and structural permanence. We believe spaces should not be curated for momentary trends, but shaped with profound intention—where every proportion, plane, and shadow serves purpose.",
      "From the tactile weight of hand-finished travertine to the warmth of smoked oak and custom monolithic joinery, our work balances architectural precision with an organic, lived-in atmosphere. We sculpt environments that speak softly yet leave an enduring impression.",
    ],
    studioImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1600",
  },

  principal: {
    tag: "The principal",
    headlineMain: "Meet",
    headlineEmphasis: "Adrian Vale.",
    role: "Creative Director & Founder",
    bio: [
      "Adrian Vale is a contemporary interior architect whose practice has evolved through two decades of bespoke residential and cultural commissions across Europe and Asia. Trained in classical architecture and material craft, Adrian founded NOIREL STUDIO as an uncompromising pursuit of spatial harmony, quiet luxury, and timeless material language.",
      "His design philosophy centres on reductive form—stripping away visual noise to unveil the essential poetry of space. At the heart of his approach is an acute sensitivity to how light sculpts raw stone, how brushed metals patina with time, and how balanced volumes create an immediate sense of emotional sanctuary.",
    ],
    portraitImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=85&w=1200",
  },

  contact: {
    tag: "Get in touch with us",
    headingLine1: "Have a space in mind?",
    headingLine2: "Let's shape something exceptional.",
    whatsappText: "INQUIRE VIA WHATSAPP",
    whatsappUrl: "https://wa.me/12125550198",
    email: "contact@noirelstudio.com",
    phone: "+1 (212) 555-0198",
    address: "76 Mercer Street, SoHo, New York, NY 10012",
    instagramUrl: "https://instagram.com",
  },

  navLinks: [
    { label: "HOME", href: "/" },
    { label: "PROJECTS", href: "/projects" },
    { label: "ABOUT", href: "/#about" },
    { label: "CONTACT", href: "#contact" },
  ],

  footerColumns: {
    generalInquiries: {
      title: "GENERAL INQUIRIES",
      email: "contact@noirelstudio.com",
      phone: "+1 (212) 555-0198",
    },
    socialMedia: {
      title: "SOCIAL MEDIA",
      links: [
        { label: "Instagram", href: "https://instagram.com" },
      ],
    },
    menu: {
      title: "MENU",
      links: [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/#about" },
        { label: "Contact", href: "#contact" },
      ],
    },
    copyright: "2026 © by NOIREL STUDIO",
  },
};
