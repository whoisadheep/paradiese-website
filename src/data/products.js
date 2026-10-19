// Centralized Product & Brand Information for Paradiese Sundry Crunchy
// "Taste Never Ends"

export const products = [
  {
    id: 'tomato-powder',
    name: 'Tomato Powder',
    category: 'Vegetable Powder',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Carefully dehydrated tomato powder that adds rich colour, tangy flavour and natural aroma to your cooking. Perfect for instant soups, gravies, marinades, and seasonings.',
    image: '/images/products/tomato-showcase.webp',
    posterImage: '/images/products/tomato-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups', 'Curries', 'Snacks', 'Marinades', 'Sauces', 'Beverages'],
    color: '#C0392B',
  },
  {
    id: 'ginger-powder',
    name: 'Ginger Powder',
    category: 'Vegetable Powder',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Aromatic dehydrated ginger powder packed with warm, zesty spice notes. Convenient to use in morning teas, curries, marinades, bakery items, and savoury snacks.',
    image: '/images/products/ginger-showcase.webp',
    posterImage: '/images/products/ginger-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups', 'Curries', 'Snacks', 'Marinades', 'Salad Dressings', 'Beverages'],
    color: '#D4A017',
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'Spice Powder',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Vibrant dehydrated red chilli powder bringing natural heat, deep ruby hue, and bold culinary punch to every regional dish and savoury snack.',
    image: '/images/products/red-chilli-showcase.webp',
    posterImage: '/images/products/red-chilli-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Curries', 'Sabzis', 'Dals', 'Pickles', 'Snacks', 'Rice Dishes'],
    color: '#E74C3C',
  },
  {
    id: 'onion-powder',
    name: 'Onion Powder',
    category: 'Vegetable Powder',
    tagline: 'Pure • Natural • No Preservatives',
    description:
      'Gently dehydrated onion powder delivering the full savoury depth and sweetness of fresh onions without peeling or crying. Essential for gravies, rubs, and snacks.',
    image: '/images/products/onion-showcase.webp',
    posterImage: '/images/products/onion-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups', 'Curries', 'Snacks', 'Marinades', 'Salad Dressings', 'Ready Mixes'],
    color: '#8E44AD',
  },
  {
    id: 'garlic-powder',
    name: 'Garlic Powder',
    category: 'Vegetable Powder',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Intensely aromatic garlic powder with authentic roasted notes. Dissolves seamlessly into garlic breads, sauces, soups, curries, and dry rubs.',
    image: '/images/products/garlic-showcase.webp',
    posterImage: '/images/products/garlic-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups', 'Curries', 'Snacks', 'Marinades', 'Salad Dressings', 'Ready Mixes'],
    color: '#B8860B',
  },
  {
    id: 'kashmiri-chilli-powder',
    name: 'Kashmiri Chilli Powder',
    category: 'Spice Powder',
    tagline: 'Rich Color • Mild Heat • Pure Taste',
    description:
      'Celebrated for its brilliant crimson color and gentle warmth. Imparts a luxurious hue to tandoori marinades, curries, pickles, and gravies without overwhelming pungency.',
    image: '/images/products/kashmiri-chilli-showcase.webp',
    posterImage: '/images/products/kashmiri-chilli-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Curries', 'Tandoori', 'Pickles', 'Snacks', 'Soups', 'Rice Dishes'],
    color: '#C0392B',
  },
];

// Centralized brand identity and contact configuration
export const brandInfo = {
  name: 'PARADIESE',
  subname: 'SUNDRY CRUNCHY',
  tagline: 'Taste Never Ends',
  category: 'Natural Dehydrated Food Products & Spice Powders',
  description:
    'Thoughtfully dehydrated ingredients that bring the natural flavour, colour and aroma of real food to your everyday cooking.',
  email: 'info@paradiesesundrycrunchy.com',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  website: 'paradiesesundrycrunchy.com',
  packagingSizes: ['100 g', '200 g', '500 g', '1 kg'],
};

// Navigation links matching exact reference design
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Products', href: '#products' },
  { label: 'Quality', href: '#quality' },
  { label: 'Contact', href: '#contact' },
];

// Culinary applications
export const culinaryApplications = [
  {
    name: 'Soups & Stews',
    tag: 'Instant Richness',
    description: 'Instant body, deep aroma, and comforting warmth with zero prep time.',
    image: '/images/culinary/soups.webp',
  },
  {
    name: 'Curries & Gravies',
    tag: 'Authentic Flavour',
    description: 'Vibrant natural color and hearty base texture for everyday curries.',
    image: '/images/culinary/curries.webp',
  },
  {
    name: 'Crunchy Snacks',
    tag: 'Even Dusting',
    description: 'Fine powders cling perfectly to makhanas, chips, nuts, and savouries.',
    image: '/images/culinary/snacks.webp',
  },
  {
    name: 'Marinades & Rubs',
    tag: 'Deep Infusion',
    description: 'Uniform spice distribution that seals flavor into paneer, tofu, or meats.',
    image: '/images/culinary/marinades.webp',
  },
  {
    name: 'Sauces & Dips',
    tag: 'Silky Texture',
    description: 'Blends seamlessly without clumping into chutneys, ketchups, and spreads.',
    image: '/images/culinary/sauces.webp',
  },
  {
    name: 'Rice Dishes & Biryanis',
    tag: 'Aromatic Finish',
    description: 'Subtle fragrant warmth layered evenly throughout pulaos and biryanis.',
    image: '/images/culinary/rice-dishes.webp',
  },
];
