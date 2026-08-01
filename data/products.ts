export type Product = {
  id: string;
  name: string;
  category: string;
  grade: string;
  origin: string;
  image: string;
  packSizes: string[];
  highlights: string[];
  description: string;
  specs: { label: string; value: string }[];
};

export const categories = [
  { id: "almonds", name: "Premium Almonds", tagline: "Mamra · California · Gurbandi" },
  { id: "cashews", name: "King-Size Cashews", tagline: "W180 · W240 · Roasted & Salted" },
  { id: "pistachios-walnuts", name: "Afghan Pistachios & Walnuts", tagline: "Hand-cracked, naturally sweet" },
  { id: "dates-figs", name: "Arabian Dates & Dried Figs", tagline: "Anjeer, Ajwa & Medjool" },
  { id: "seeds-trailmix", name: "Organic Seeds & Trail Mixes", tagline: "Chia, pumpkin, flax & blends" },
  { id: "hampers", name: "Festive Gift Hampers", tagline: "Customised for every occasion" },
] as const;

export const products: Product[] = [
  {
    id: "mamra-almond",
    name: "Mamra Almonds",
    category: "almonds",
    grade: "Grade A+ Export",
    origin: "Origin: Kashmir & Iran",
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?q=80&w=1200&auto=format&fit=crop",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Box"],
    highlights: ["High Protein", "Heart Healthy", "Zero Preservatives"],
    description:
      "Rare, oil-rich Mamra almonds — smaller, denser and naturally sweeter than regular varieties, prized in royal Indian kitchens for generations.",
    specs: [
      { label: "Moisture", value: "< 5%" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "1 kg (retail) / 25 kg (bulk)" },
    ],
  },
  {
    id: "california-almond",
    name: "California Almonds",
    category: "almonds",
    grade: "Grade A Export",
    origin: "Origin: California, USA",
    image:
      "https://images.aasaan.shop/stores/nutsmash/products/product_images/product_1758972602774.jpeg",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Box"],
    highlights: ["Rich in Vitamin E", "Heart Healthy", "Non-GMO"],
    description:
      "Uniformly sized, crunchy California almonds sourced directly from certified growers — a daily wellness staple for the whole family.",
    specs: [
      { label: "Moisture", value: "< 6%" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "1 kg (retail) / 25 kg (bulk)" },
    ],
  },
  {
    id: "gurbandi-almond",
    name: "Gurbandi Almonds",
    category: "almonds",
    grade: "100% Organic",
    origin: "Origin: Afghanistan",
    image:
      "https://swaadambarsarde.com/cdn/shop/files/IMG-20240504_195009.png?v=1714833234",
    packSizes: ["250g", "500g", "1kg"],
    highlights: ["Naturally Sweet", "Thin Shell", "Zero Preservatives"],
    description:
      "Long, slender Gurbandi almonds with a distinctive sweetness — a connoisseur's choice, traditionally gifted during weddings and festivals.",
    specs: [
      { label: "Moisture", value: "< 5%" },
      { label: "Shelf Life", value: "10 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "w180-cashew",
    name: "W180 King-Size Cashews",
    category: "cashews",
    grade: "Grade A+ Export",
    origin: "Origin: Kollam, Kerala",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2026/6/614607048/NX/LR/AY/223235808/organic-cashew-nuts-w180-king-size-premium-kaju.png",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Box"],
    highlights: ["Jumbo Size", "Heart Healthy", "Zero Preservatives"],
    description:
      "The largest and most sought-after cashew grade — buttery, whole and beautifully curved, ideal for premium gifting and fine dining.",
    specs: [
      { label: "Count", value: "~180 nuts/lb" },
      { label: "Shelf Life", value: "9 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "1 kg (retail) / 25 kg (bulk)" },
    ],
  },
  {
    id: "w240-cashew",
    name: "W240 Cashews",
    category: "cashews",
    grade: "Grade A Export",
    origin: "Origin: Kollam, Kerala",
    image:
      "https://storage.googleapis.com/shy-pub/67951/1633612264498_cashew.png",
    packSizes: ["250g", "500g", "1kg", "5kg Bulk Box"],
    highlights: ["High Protein", "Everyday Value", "Zero Preservatives"],
    description:
      "Whole, evenly graded cashews with the classic buttery bite — our most popular size for daily snacking and everyday gifting.",
    specs: [
      { label: "Count", value: "~240 nuts/lb" },
      { label: "Shelf Life", value: "9 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "1 kg (retail) / 25 kg (bulk)" },
    ],
  },
  {
    id: "roasted-salted-cashew",
    name: "Roasted & Salted Cashews",
    category: "cashews",
    grade: "Grade A Export",
    origin: "Origin: Kollam, Kerala",
    image:
      "https://royalfantasy.in/cdn/shop/products/Cashew-Nuts-Roasted-Salted-1.jpg?v=1629715679",
    packSizes: ["200g", "500g", "1kg"],
    highlights: ["Slow Roasted", "Lightly Salted", "No Added Oil"],
    description:
      "Dry-roasted in small batches and finished with a whisper of sea salt — a ready-to-eat classic for evening tea time.",
    specs: [
      { label: "Roast Style", value: "Dry roasted, no oil" },
      { label: "Shelf Life", value: "6 months" },
      { label: "Packaging", value: "Resealable stand-up pouch" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "afghan-pistachio",
    name: "Afghan Pistachios",
    category: "pistachios-walnuts",
    grade: "Grade A+ Export",
    origin: "Origin: Kandahar, Afghanistan",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWR2c8y7mSTyZvQHqbh8LKuGEwyu9dlUkwUOfXLr8KKzKotgNoFlHD9fv&s=10",
    packSizes: ["250g", "500g", "1kg"],
    highlights: ["Naturally Split", "Rich in Antioxidants", "Zero Preservatives"],
    description:
      "Naturally sun-cracked Afghan pistachios with a deep, roasted aroma — smaller than Iranian varieties but far more intensely flavoured.",
    specs: [
      { label: "Moisture", value: "< 5%" },
      { label: "Shelf Life", value: "9 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "kashmiri-walnut",
    name: "Kashmiri Walnuts (Kernels)",
    category: "pistachios-walnuts",
    grade: "100% Organic",
    origin: "Origin: Kashmir Valley",
    image:
      "https://www.kissankesar.com/cdn/shop/files/1_c28ddb83-eeb4-4db4-9061-75091c62a130.jpg?v=1733624677",
    packSizes: ["250g", "500g", "1kg"],
    highlights: ["Omega-3 Rich", "Light Colour Kernels", "Zero Preservatives"],
    description:
      "Hand-picked, light-halved walnut kernels from the valleys of Kashmir — mild, buttery and free of any bitterness.",
    specs: [
      { label: "Kernel Colour", value: "Extra Light / Light" },
      { label: "Shelf Life", value: "8 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "ajwa-dates",
    name: "Ajwa Dates",
    category: "dates-figs",
    grade: "Grade A+ Export",
    origin: "Origin: Madinah, Saudi Arabia",
    image:
      "https://srmill.in/wp-content/uploads/2025/09/1000067736.png",
    packSizes: ["250g", "500g", "1kg Gift Box"],
    highlights: ["Soft & Fibre-Rich", "No Added Sugar", "Zero Preservatives"],
    description:
      "Revered Ajwa dates from Madinah with a soft, raisin-like texture and deep caramel notes — a meaningful gift for any occasion.",
    specs: [
      { label: "Moisture", value: "Naturally soft-set" },
      { label: "Shelf Life", value: "9 months" },
      { label: "Packaging", value: "Food-grade gift box" },
      { label: "Minimum Order", value: "250 g (retail) / 15 kg (bulk)" },
    ],
  },
  {
    id: "medjool-dates",
    name: "Medjool Dates",
    category: "dates-figs",
    grade: "Jumbo Grade Export",
    origin: "Origin: Jordan Valley",
    image:
      "https://www.greendna.in/cdn/shop/files/medjool_3_600x.jpg?v=1732195345",
    packSizes: ["500g", "1kg", "2kg Gift Box"],
    highlights: ["Naturally Caramel-Sweet", "Fibre Rich", "Zero Preservatives"],
    description:
      "Large, glossy Medjool dates with a rich caramel flavour and soft chew — often called 'nature's candy' for good reason.",
    specs: [
      { label: "Size", value: "Jumbo (large)" },
      { label: "Shelf Life", value: "6 months (refrigerated: 12)" },
      { label: "Packaging", value: "Food-grade gift box" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "anjeer",
    name: "Dried Anjeer (Figs)",
    category: "dates-figs",
    grade: "Grade A Export",
    origin: "Origin: Afghanistan & Turkey",
    image:
      "https://narayanjigajakwale.in/cdn/shop/files/Anjeer-Small.jpg?v=1727454404",
    packSizes: ["250g", "500g", "1kg"],
    highlights: ["High in Fibre", "Naturally Sun-Dried", "Zero Preservatives"],
    description:
      "Naturally sun-dried figs with a soft, chewy bite and delicate honeyed sweetness — a traditional favourite for daily wellness.",
    specs: [
      { label: "Drying Method", value: "Natural sun-drying" },
      { label: "Shelf Life", value: "9 months" },
      { label: "Packaging", value: "Vacuum-sealed, food-grade" },
      { label: "Minimum Order", value: "500 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "chia-seeds",
    name: "Organic Chia Seeds",
    category: "seeds-trailmix",
    grade: "100% Organic",
    origin: "Origin: Madhya Pradesh, India",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2026/3/595010336/TW/ZQ/SA/57587261/organic-chia-seeds.png",
    packSizes: ["250g", "500g", "1kg"],
    highlights: ["Omega-3 Rich", "High Fibre", "Zero Preservatives"],
    description:
      "Farm-fresh, triple-cleaned chia seeds — a daily superfood staple for smoothies, puddings and everyday nutrition.",
    specs: [
      { label: "Cleaning", value: "Triple-sieved, destoned" },
      { label: "Shelf Life", value: "12 months" },
      { label: "Packaging", value: "Resealable stand-up pouch" },
      { label: "Minimum Order", value: "250 g (retail) / 20 kg (bulk)" },
    ],
  },
  {
    id: "trail-mix",
    name: "Royal Trail Mix",
    category: "seeds-trailmix",
    grade: "Chef-Curated Blend",
    origin: "Origin: Multi-source, India blended",
    image:
      "https://rootedharvest.in/cdn/shop/files/Generated_Image_January_02_2026_-_5_37PM.jpg?v=1767355756&width=1445",
    packSizes: ["200g", "500g", "1kg"],
    highlights: ["High Protein", "No Added Sugar", "Zero Preservatives"],
    description:
      "A hand-tossed blend of almonds, cashews, cranberries, pumpkin seeds and raisins — a wholesome grab-and-go snack.",
    specs: [
      { label: "Composition", value: "6-ingredient nut & seed blend" },
      { label: "Shelf Life", value: "6 months" },
      { label: "Packaging", value: "Resealable stand-up pouch" },
      { label: "Minimum Order", value: "200 g (retail) / 15 kg (bulk)" },
    ],
  },
  {
    id: "royal-hamper",
    name: "Royal Emerald Gift Hamper",
    category: "hampers",
    grade: "100% Organic",
    origin: "Origin: Curated, Pan-India sourced",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmeEu2pAc8W3T_uPWymhnwY2fjNzXZQuuiqNIAnTB0pAsbxhz4VkNJpBiR&s=10",
    packSizes: ["1kg Assorted", "2kg Assorted", "Custom Corporate Box"],
    highlights: ["Festive Packaging", "Customisable", "Zero Preservatives"],
    description:
      "An heirloom-style wooden box featuring Mamra almonds, King-size cashews, Afghan pistachios and Ajwa dates — dressed for Diwali, weddings and corporate gifting.",
    specs: [
      { label: "Contents", value: "4–6 premium varieties, customisable" },
      { label: "Packaging", value: "Wooden/rigid gift box with brand seal" },
      { label: "Personalisation", value: "Logo branding available for corporate orders" },
      { label: "Minimum Order", value: "10 boxes (corporate)" },
    ],
  },
];

export function getProductsByCategory(categoryId: string) {
  return products.filter((p) => p.category === categoryId);
}
