export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  scope: string;
  description: string;
  coverImage: string;
  gallery: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "the-solace-residence",
    title: "THE SOLACE RESIDENCE",
    category: "RESIDENTIAL",
    year: "2026",
    location: "Tribeca, New York",
    scope: "Interior Architecture + Bespoke Millwork",
    description: "A private penthouse residence shaped by warm earthen minimalism, monolithic fluted limestone, and custom smoked oak volumes. Every room balances quiet geometry with natural illumination to create an intimate urban sanctuary.",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "monolith-house",
    title: "MONOLITH HOUSE",
    category: "RESIDENTIAL",
    year: "2025",
    location: "Engadin Valley, Switzerland",
    scope: "Full Interior Architecture & FF&E",
    description: "An exploration of sculptural form, understated luxury, and an intimate dialogue between charcoal quartzite, board-formed concrete, and blackened larch facing panoramic alpine peaks.",
    coverImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "echo-villa",
    title: "ECHO VILLA",
    category: "RESIDENTIAL",
    year: "2025",
    location: "Comporta, Portugal",
    scope: "Interior Architecture + Landscape Transition",
    description: "A modern coastal sanctuary balancing tactile microcement, brushed aged bronze, and expansive ceiling voids that frame gentle maritime breezes and shifting dune shadows.",
    coverImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: true,
  },
  {
    id: "4",
    slug: "lumen-pavilion",
    title: "LUMEN PAVILION",
    category: "COMMERCIAL",
    year: "2025",
    location: "Ginza, Tokyo",
    scope: "Spatial Concept + Architectural Lighting",
    description: "A private tasting pavilion and salon articulated with cast smoked glass, recessed grazing luminaires, and monolithic black granite blocks celebrating shadow and material honesty.",
    coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
  {
    id: "5",
    slug: "sera-residence",
    title: "SERA RESIDENCE",
    category: "RESIDENTIAL",
    year: "2024",
    location: "Brera, Milan",
    scope: "Historic Palazzo Interior Transformation",
    description: "Heritage architectural vaulted ceilings preserved and juxtaposed with contemporary dark fumed oak paneling, honed Ceppo di Gré stone, and sculptural patinated bronze fixtures.",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
  {
    id: "6",
    slug: "atelier-nord",
    title: "ATELIER NORD",
    category: "COMMERCIAL",
    year: "2024",
    location: "Stockholm, Sweden",
    scope: "Creative Studio Architecture + Custom Furniture",
    description: "A spatial studio designed for architectural focus, pairing Douglas fir linear joinery with acoustic dark linen screens, raw stainless steel workstations, and soft diffused skylights.",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
  {
    id: "7",
    slug: "kaien-gallery",
    title: "KAIEN GALLERY",
    category: "COMMERCIAL",
    year: "2024",
    location: "Kyoto, Japan",
    scope: "Exhibition Space & Private Viewing Rooms",
    description: "Charcoal yakisugi wall linings paired with monolithic honed basalt plinths and rice paper acoustic partitions, creating an introspective realm for antique tactile arts.",
    coverImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
  {
    id: "8",
    slug: "terra-apartment",
    title: "TERRA APARTMENT",
    category: "RESIDENTIAL",
    year: "2023",
    location: "Eixample, Barcelona",
    scope: "Penthouse Renovation + Bespoke Furniture",
    description: "Handcrafted dark terracotta tiles, arched lime-wash portals, and patinated brass accents establishing a serene, sun-tempered refuge above the city bustle.",
    coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
  {
    id: "9",
    slug: "vale-house",
    title: "VALE HOUSE",
    category: "RESIDENTIAL",
    year: "2023",
    location: "Cotswolds, UK",
    scope: "Country Estate Interior Architecture",
    description: "Modernized heritage Cotswold stone farmhouse integrating contemporary dark Belgian limestone floors, dark oak post-and-beam construction, and bronze-framed meadow vistas.",
    coverImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1600",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=85&w=1600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=1600",
    ],
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getOtherProjects(currentSlug: string, count = 4): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, count);
}
