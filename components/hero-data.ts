import{
  CarFront,
  CircleGauge,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Wrench,
} from "lucide-react";

export type HeroCategory={
  id:string;
  label:string;
  icon:typeof Wrench;
  title:string;
  highlight:string;
  description:string;
  searchPlaceholder:string;
  primaryLabel:string;
  primaryHref:string;
};

export const heroCategories:HeroCategory[]=[
  {
    id:"parts",
    label:"Spare Parts",
    icon:Wrench,
    title:"Everything your vehicle needs.",
    highlight:"Closer than you think.",
    description:
      "Find genuine parts, trusted garages, and automotive services in one unified marketplace.",
    searchPlaceholder: "Search OEM part number, part name, or category...",
    primaryLabel: "Explore Parts",
    primaryHref: "/inventory",
  },
  {
    id: "garages",
    label: "Nearby Garages",
    icon: Store,
    title: "Trusted garages.",
    highlight: "Right around the corner.",
    description:
      "Discover verified workshops and automotive specialists near you.",
    searchPlaceholder: "Search garages, services, or locations...",
    primaryLabel: "Find Garages",
    primaryHref: "/garages",
  },
  {
    id: "tyres",
    label: "Tyres",
    icon: CircleGauge,
    title: "The right tyres.",
    highlight: "For every road.",
    description:
      "Find vehicle-compatible tyres from trusted retailers and specialists.",
    searchPlaceholder: "Search by vehicle, tyre size, or brand...",
    primaryLabel: "Explore Tyres",
    primaryHref: "/tyres",
  },
  {
    id: "accessories",
    label: "Accessories",
    icon: CarFront,
    title: "Upgrade your drive.",
    highlight: "Make it yours.",
    description:
      "Discover automotive accessories for comfort, utility, and everyday driving.",
    searchPlaceholder: "Search accessories for your vehicle...",
    primaryLabel: "Browse Accessories",
    primaryHref: "/accessories",
  },
  {
    id: "wash",
    label: "Car Wash",
    icon: Sparkles,
    title: "Care that shows.",
    highlight: "Inside and out.",
    description:
      "Find nearby car wash and detailing professionals with transparent services.",
    searchPlaceholder: "Search car wash or detailing near you...",
    primaryLabel: "Find Car Wash",
    primaryHref: "/car-wash",
  },
  {
    id: "insurance",
    label: "Insurance",
    icon: ShieldCheck,
    title: "Protection made simple.",
    highlight: "Ride with confidence.",
    description:
      "Explore automotive insurance and vehicle protection services in one place.",
    searchPlaceholder: "Search insurance services...",
    primaryLabel: "Explore Insurance",
    primaryHref: "/insurance",
  },
  {
    id: "towing",
    label: "Towing",
    icon: Truck,
    title: "Help when you need it.",
    highlight: "Wherever you are.",
    description:
      "Connect with nearby towing and roadside-assistance providers quickly.",
    searchPlaceholder: "Search towing or roadside assistance...",
    primaryLabel: "Find Towing",
    primaryHref: "/towing",
  },
];