// ===========================
// Navigation
// ===========================

export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// ===========================
// Home — credentials strip
// ===========================

export interface Credential {
  number: string;
  label: string;
}

export const credentials: Credential[] = [
  { number: "35+", label: "Years Experience" },
  { number: "800+", label: "Projects Completed" },
  { number: "100%", label: "Satisfaction Guarantee" },
  { number: "Local", label: "Family Business" },
];

// ===========================
// Home — service overview cards
// ===========================

export interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
}

export const homeServices: ServiceCard[] = [
  {
    icon: "🪑",
    title: "Bespoke Furniture",
    desc: "Handmade tables, chairs, shelving and storage tailored to your space and style.",
  },
  {
    icon: "🏠",
    title: "Kitchen Fitting",
    desc: "Fully fitted kitchens with solid timber doors, traditional detailing and expert installation.",
  },
  {
    icon: "🪵",
    title: "Staircases",
    desc: "Elegant newel posts, handrails and balusters crafted in oak, ash or pine.",
  },
  {
    icon: "🔨",
    title: "Doors & Windows",
    desc: "Solid hardwood doors, frames and windows built to outlast modern alternatives.",
  },
  {
    icon: "📐",
    title: "Flooring",
    desc: "Solid and engineered hardwood floors, supplied and fitted to the highest standard.",
  },
  {
    icon: "♻️",
    title: "Restoration",
    desc: "Sensitive restoration and repair of antique and period woodwork.",
  },
];

// ===========================
// Home — gallery teaser
// ===========================

export interface GalleryTeaserItem {
  label: string;
  tone: string;
}

export const galleryTeaser: GalleryTeaserItem[] = [
  { label: "Oak Kitchen", tone: "warm" },
  { label: "Walnut Dining Table", tone: "dark" },
  { label: "Period Staircase Restoration", tone: "mid" },
  { label: "Fitted Library", tone: "light" },
];

// ===========================
// Home — testimonials
// ===========================

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Robert and his team built us the most beautiful kitchen we could have imagined. The attention to detail was extraordinary — you can tell these are people who truly love their craft.",
    author: "Sarah & James Whitfield",
    location: "Uppermill",
  },
  {
    quote:
      "We had an old Victorian staircase in a terrible state. They restored it to better than its original condition. Absolutely outstanding workmanship.",
    author: "David Pennington",
    location: "Delph",
  },
  {
    quote:
      "We've used Greenfield Carpentry twice now. The bespoke fitted wardrobes are perfect — they look like they've always been part of the house.",
    author: "The Moorhouse Family",
    location: "Greenfield",
  },
];

// ===========================
// Services page
// ===========================

export interface Service {
  id: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
  materials: string[];
}

export const services: Service[] = [
  {
    id: "bespoke-furniture",
    title: "Bespoke Furniture",
    icon: "🪑",
    summary:
      "Handmade to your exact measurements and specification in our Greenfield workshop.",
    detail: `Every piece of furniture we make is entirely bespoke — conceived in conversation with you and built
    by hand in our workshop from sustainably sourced hardwoods. Whether it is a dining table that will sit at
    the heart of family life for generations, a set of bookcases to fill an awkward alcove, or a window seat
    with hidden storage, we will design and craft something that fits your home and your life perfectly.`,
    materials: ["English Oak", "American Walnut", "Ash", "Scots Pine", "Cherry"],
  },
  {
    id: "kitchen-fitting",
    title: "Kitchen Fitting",
    icon: "🏠",
    summary:
      "Solid timber kitchens designed around your space, installed with exacting precision.",
    detail: `A hand-crafted kitchen is the centrepiece of any home. We work with you from the first sketch to
    the final fitting, designing kitchens that combine practicality with enduring beauty. Our timber doors,
    hand-painted finishes, and traditional joinery details set our kitchens apart from mass-produced alternatives.
    We also supply and fit all associated worktops, appliances, and plumbing connections.`,
    materials: ["Painted Hardwood", "Solid Oak", "Shaker Style", "In-frame", "Handleless"],
  },
  {
    id: "staircases",
    title: "Staircases",
    icon: "🪜",
    summary:
      "Elegant staircases crafted in oak, ash or pine — new builds and refurbishments.",
    detail: `A staircase is one of the most visible and structural elements in a home. We design and build new
    staircases for extensions and new builds, as well as replacing and refurbishing existing ones. From a classic
    closed-string stair with turned newels, to an open-riser contemporary design with glass balustrades, our
    joinery team will create a staircase that is both beautiful and supremely practical.`,
    materials: ["Oak", "Ash", "Pine", "Hemlock", "Painted Softwood"],
  },
  {
    id: "doors-windows",
    title: "Doors & Windows",
    icon: "🚪",
    summary: "Solid hardwood doors and windows built to stand the test of time.",
    detail: `Modern UPVC and composite joinery simply cannot match the beauty, longevity, and repairability of
    solid timber. We manufacture and fit external doors, internal doors, timber windows, and French doors to
    your exact dimensions and style requirements. All external timber is finished with premium microporous paints
    and stains to protect against the Pennine weather.`,
    materials: ["Accoya", "Oak", "Meranti", "Sapele", "Painted Hardwood"],
  },
  {
    id: "flooring",
    title: "Hardwood Flooring",
    icon: "📐",
    summary:
      "Solid and engineered hardwood floors supplied and laid to the highest standard.",
    detail: `A hardwood floor transforms a room. We supply a wide range of solid and engineered hardwood flooring
    and lay it with care and precision, including secret nailing, gluing, and underfloor heating compatibility.
    We can also sand, repair, and refinish existing hardwood floors that have seen better days — often achieving
    results that look better than the original.`,
    materials: ["Solid Oak", "Engineered Oak", "Ash", "Walnut", "Reclaimed Boards"],
  },
  {
    id: "restoration",
    title: "Restoration & Repair",
    icon: "♻️",
    summary:
      "Sensitive restoration of antique, period, and sentimental woodwork.",
    detail: `Old timber has a character and quality that cannot be replicated. We restore period staircases,
    antique furniture, Victorian sash windows, and heritage joinery features with sensitivity and skill,
    always aiming to preserve as much original material as possible. If you have a piece of furniture with
    sentimental value that has seen better days, bring it to us — we often surprise people with what can
    be achieved.`,
    materials: ["Oak", "Mahogany", "Walnut", "Pine", "Ebony Inlay"],
  },
];

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export const processSteps: ProcessStep[] = [
  {
    n: "01",
    title: "Consultation",
    desc: "We visit your home to discuss your requirements, take measurements, and understand your vision.",
  },
  {
    n: "02",
    title: "Design",
    desc: "We prepare detailed drawings and material samples for your review and approval.",
  },
  {
    n: "03",
    title: "Crafting",
    desc: "Your piece is made by hand in our Greenfield workshop using the finest sustainable timbers.",
  },
  {
    n: "04",
    title: "Installation",
    desc: "Our team fits your new joinery with care, protecting your home throughout.",
  },
];

// ===========================
// About page
// ===========================

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initial: string;
  tone: string;
}

export const team: TeamMember[] = [
  {
    name: "Robert Hartley",
    role: "Founder & Master Carpenter",
    bio: `Robert completed his City & Guilds apprenticeship in 1982 and founded Greenfield Carpentry
    five years later from a small workshop off Chew Valley Road. With over 40 years of hands-on
    experience, he still takes the plane to every finished surface personally. He holds membership
    of the Guild of Master Craftsmen and was awarded the Saddleworth Chamber of Commerce
    Business of the Year award in 2019.`,
    initial: "R",
    tone: "dark",
  },
  {
    name: "Daniel Hartley",
    role: "Joiner & Project Manager",
    bio: `Robert's son Daniel joined the family business in 2008 after completing his apprenticeship
    at Oldham College. He manages all client projects from initial survey through to final snagging,
    and leads the kitchen and fitted furniture side of the business. Daniel is particularly well-known
    for his intricate detailing and his ability to solve the awkward structural problems that often
    arise in older properties.`,
    initial: "D",
    tone: "mid",
  },
  {
    name: "Sarah Brennan",
    role: "Designer & Estimator",
    bio: `Sarah joined Greenfield Carpentry in 2015, bringing a background in interior design that
    has transformed how the business approaches commissions. She works with each client to develop
    detailed plans and specifications, helps select timber species and finishes, and produces all
    the detailed quotations. Her drawings bridge the gap between what a client imagines and what
    the workshop can produce.`,
    initial: "S",
    tone: "warm",
  },
];

export interface Value {
  title: string;
  desc: string;
}

export const values: Value[] = [
  {
    title: "Honesty",
    desc: "We tell you what is possible, what it costs, and how long it will take — and we keep our word.",
  },
  {
    title: "Quality",
    desc: "We would rather do fewer jobs and do them properly. Every piece leaves the workshop to a standard we are proud of.",
  },
  {
    title: "Sustainability",
    desc: "We source timber from certified sustainable forests and use water-based finishes wherever possible.",
  },
  {
    title: "Community",
    desc: "We are part of Greenfield and Saddleworth. We support local suppliers, local apprentices, and local causes.",
  },
];

export interface Accreditation {
  title: string;
  detail: string;
}

export const accreditations: Accreditation[] = [
  {
    title: "Guild of Master Craftsmen",
    detail:
      "Full member since 2003. Only craftspeople meeting rigorous quality standards are admitted.",
  },
  {
    title: "CSCS Registered",
    detail:
      "All site operatives hold current CSCS cards, ensuring health and safety competence.",
  },
  {
    title: "FSC Certified Timber",
    detail:
      "We source timber exclusively from FSC-certified merchants committed to sustainable forestry.",
  },
  {
    title: "Trustmark Registered",
    detail:
      "Trustmark is the Government-endorsed quality scheme for tradespeople working in and around the home.",
  },
];

// ===========================
// Gallery page
// ===========================

export const galleryCategories: string[] = [
  "All",
  "Furniture",
  "Kitchens",
  "Staircases",
  "Flooring",
  "Restoration",
];

export interface GalleryProject {
  title: string;
  category: string;
  tone: string;
  size: string;
  location: string;
  year: string;
}

export const galleryProjects: GalleryProject[] = [
  { title: "Handmade Oak Kitchen", category: "Kitchens", tone: "warm", size: "large", location: "Uppermill", year: "2024" },
  { title: "Walnut Dining Table & Chairs", category: "Furniture", tone: "dark", size: "normal", location: "Greenfield", year: "2024" },
  { title: "Victorian Staircase Restoration", category: "Staircases", tone: "mid", size: "tall", location: "Delph", year: "2023" },
  { title: "Fitted Library & Study", category: "Furniture", tone: "light", size: "normal", location: "Dobcross", year: "2023" },
  { title: "Herringbone Oak Flooring", category: "Flooring", tone: "grain", size: "normal", location: "Mossley", year: "2023" },
  { title: "Painted Shaker Kitchen", category: "Kitchens", tone: "soft", size: "large", location: "Saddleworth", year: "2023" },
  { title: "Open-Riser Oak Staircase", category: "Staircases", tone: "dark", size: "tall", location: "Greenfield", year: "2022" },
  { title: "Antique Dresser Restoration", category: "Restoration", tone: "warm", size: "normal", location: "Diggle", year: "2022" },
  { title: "Custom Wardrobe Suite", category: "Furniture", tone: "mid", size: "normal", location: "Grasscroft", year: "2022" },
  { title: "Reclaimed Board Flooring", category: "Flooring", tone: "rustic", size: "normal", location: "Lydgate", year: "2022" },
  { title: "Home Office Joinery", category: "Furniture", tone: "light", size: "normal", location: "Uppermill", year: "2021" },
  { title: "Period Sash Window Restoration", category: "Restoration", tone: "grain", size: "normal", location: "Springhead", year: "2021" },
];

export const serviceAreas: string[] = [
  "Greenfield",
  "Uppermill",
  "Delph",
  "Dobcross",
  "Diggle",
  "Mossley",
  "Oldham",
  "Tameside",
  "Stockport",
  "Manchester",
];

// ===========================
// Contact page
// ===========================

export interface OpeningHours {
  day: string;
  hours: string;
}

export const openingHours: OpeningHours[] = [
  { day: "Monday - Friday", hours: "8:00 am - 5:30 pm" },
  { day: "Saturday", hours: "9:00 am - 1:00 pm" },
  { day: "Sunday", hours: "Closed" },
];

export const serviceOptions: string[] = [
  "Bespoke Furniture",
  "Kitchen Fitting",
  "Staircase",
  "Doors & Windows",
  "Hardwood Flooring",
  "Restoration & Repair",
  "Other / Not Sure Yet",
];
