import {
  Activity,
  Box,
  CircleDot,
  ClipboardCheck,
  Cpu,
  Disc3,
  Droplets,
  Gauge,
  Layers3,
  LockKeyhole,
  Search,
  SlidersHorizontal,
  Sparkles,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  siBmw,
  siHonda,
  siHyundai,
  siKia,
  siMahindra,
  siMg,
  siRenault,
  siSkoda,
  siSuzuki,
  siTata,
  siToyota,
  siVolkswagen,
} from "simple-icons";

export type SearchMode = "part" | "vin" | "vehicle";

export const brands = [
  { name: "Maruti Suzuki", icon: siSuzuki },
  { name: "Tata Motors", icon: siTata },
  { name: "Mahindra", icon: siMahindra },
  { name: "Toyota", icon: siToyota },
  { name: "Hyundai", icon: siHyundai },
  { name: "Volkswagen", icon: siVolkswagen },
  { name: "Honda", icon: siHonda },
  { name: "Kia", icon: siKia },
  { name: "Škoda", icon: siSkoda },
  { name: "Renault", icon: siRenault },
  { name: "MG", icon: siMg },
  { name: "BMW", icon: siBmw },
];

export const workflow: {
  number: string;
  title: string;
  description: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Raise an enquiry",
    description:
      "Tell us the part number, name, or send a photo, along with your vehicle brand, model, and trim. A VIN helps us confirm exact fitment.",
    note: "Part number, name, photo, or VIN",
    icon: Search,
  },
  {
    number: "02",
    title: "We source from verified vendors",
    description:
      "Our procurement team searches its network of verified, authorised vendors for genuine OE parts. No market haggling required.",
    note: "Genuine OE parts sourced first",
    icon: Zap,
  },
  {
    number: "03",
    title: "Get a clear quote",
    description:
      "Review one consolidated quote with the part, OE / OEM / OES classification, price, and delivery time. No hidden charges.",
    note: "Classification on every quote",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Accept and pay securely",
    description:
      "Accept the quote and pay by UPI QR or bank transfer. Your order is confirmed to the vendor only after payment is verified.",
    note: "Payment verified before confirmation",
    icon: LockKeyhole,
  },
  {
    number: "05",
    title: "Track your order",
    description:
      "Follow your order from confirmation through dispatch, with updates in your Sparelab chat — the same thread where your enquiry began.",
    note: "Updates in your enquiry chat",
    icon: Activity,
  },
  {
    number: "06",
    title: "Delivered to your door",
    description:
      "The right part arrives at your workshop or fleet yard. If there is a wrong part or quality issue, our team handles the return with the vendor.",
    note: "Returns handled with the vendor",
    icon: Truck,
  },
];

export const testimonials = [
  {
    quote:
      "One RFQ in the morning and the genuine part is at my workshop by evening. Sparelab has replaced three phone calls and a market run.",
    name: "Ravi Kumar",
    role: "RK Auto Garage, Bengaluru",
    initials: "RK",
  },
  {
    quote:
      "For a 40-vehicle fleet, downtime is everything. Verified OE parts with a clear quote before we commit — that's why we moved our sourcing here.",
    name: "Meera Nair",
    role: "Fleet operations, Chennai",
    initials: "MN",
  },
  {
    quote:
      "As a vendor, I list my stock once and get serious, ready-to-buy demand. Payments are clean and the process is transparent.",
    name: "Imran Shaikh",
    role: "Authorised parts distributor, Pune",
    initials: "IS",
  },
];

export const categories: { title: string; count: string; icon: LucideIcon }[] = [
  { title: "Engine Parts", count: "34,120 items", icon: Gauge },
  { title: "Braking Systems", count: "18,490 items", icon: Disc3 },
  {
    title: "Suspension & Steering",
    count: "22,300 items",
    icon: SlidersHorizontal,
  },
  { title: "Tyres & Wheels", count: "14,800 items", icon: CircleDot },
  { title: "Lubricants & Fluids", count: "8,900 items", icon: Droplets },
  { title: "Electrical & Sensors", count: "27,150 items", icon: Cpu },
  { title: "Filters & Intake", count: "12,600 items", icon: Layers3 },
  { title: "Lighting & Bulbs", count: "15,400 items", icon: Sparkles },
  { title: "Body & Panels", count: "19,800 items", icon: Box },
  { title: "Interior & Trims", count: "10,240 items", icon: Activity },
];

const publicAssetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const products = [
  {
    title: "Brembo 256mm Ventilated Front Disc",
    fit: "VW Polo, Vento, Skoda Rapid · 1.2 TSI / 1.6 MPI",
    price: "₹3,450",
    part: "09.7011.14",
    stock: "14 in stock",
    type: "OEM / OES",
    image: publicAssetPath("/products/brake-disc.png"),
  },
  {
    title: "Monroe Front Gas Strut Damper",
    fit: "Hyundai Creta, Kia Seltos · 2019–2024",
    price: "₹4,890",
    part: "G8164-MN",
    stock: "8 in stock",
    type: "TIER-1 OEM",
    image: publicAssetPath("/products/front-struts.png"),
  },
  {
    title: "Bosch Common Rail Injector",
    fit: "Tata Nexon 1.5 Revotorq Diesel, Altroz",
    price: "₹8,950",
    part: "0445110-CR",
    stock: "Low stock · 3",
    type: "GENUINE OES",
    image: publicAssetPath("/products/common-rail-injector.png"),
  },
  {
    title: "Gates PowerGrip Timing Kit + Pump",
    fit: "Maruti Suzuki Swift, Baleno, Dzire · K-Series",
    price: "₹5,120",
    part: "KP15669XS",
    stock: "19 in stock",
    type: "TIER-1 KIT",
    image: publicAssetPath("/products/timing-kit.png"),
  },
];
