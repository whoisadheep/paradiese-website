// Centralized Product & Brand Information for Paradiese Sundry Crunchy
// "Taste Never Ends"

export const productCategories = [
  { id: 'all', label: 'All Products' },
  { id: 'vegetable', label: 'Vegetable Powders' },
  { id: 'spice', label: 'Spices & Whole' },
  { id: 'superfood', label: 'Fruits & Superfoods' },
];

export const products = [
  // ── Vegetable Powders ──
  {
    id: 'tomato-powder',
    name: 'Tomato Powder',
    category: 'Vegetable Powder',
    filterCategory: 'vegetable',
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
    id: 'onion-powder',
    name: 'Onion Powder',
    category: 'Vegetable Powder',
    filterCategory: 'vegetable',
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
    filterCategory: 'vegetable',
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
    id: 'carrot-powder',
    name: 'Carrot Powder',
    category: 'Vegetable Powder',
    filterCategory: 'vegetable',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Sun-ripened carrots dehydrated at gentle temperatures to lock in natural sweetness, beta-carotene, and dietary nutrients. Dissolves easily into broths, bakery batters, baby purees, and pasta sauces.',
    image: '/images/products/carrot-showcase.webp',
    posterImage: '/images/products/carrot-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups & Broths', 'Baby Purees', 'Baking & Cakes', 'Pasta & Noodles', 'Smoothies', 'Sauces'],
    color: '#E65100',
  },
  {
    id: 'beetroot-powder',
    name: 'Beetroot Powder',
    category: 'Vegetable Powder',
    filterCategory: 'vegetable',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Vivid ruby-red dehydrated beetroot powder full of natural nitrates, betalains, and iron. Lends an exquisite natural magenta color and subtle earthy sweetness to rotis, idlis, red velvet bakes, pre-workout drinks, and soups.',
    image: '/images/products/beetroot-showcase.webp',
    posterImage: '/images/products/beetroot-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Rotis & Idlis', 'Pre-workout Drinks', 'Baking & Red Velvet', 'Soups', 'Smoothies', 'Natural Food Coloring'],
    color: '#880E4F',
  },

  // ── Spices & Whole ──
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    category: 'Spice Powder',
    filterCategory: 'spice',
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
    id: 'kashmiri-chilli-powder',
    name: 'Kashmiri Chilli Powder',
    category: 'Spice Powder',
    filterCategory: 'spice',
    tagline: 'Rich Color • Mild Heat • Pure Taste',
    description:
      'Celebrated for its brilliant crimson color and gentle warmth. Imparts a luxurious hue to tandoori marinades, curries, pickles, and gravies without overwhelming pungency.',
    image: '/images/products/kashmiri-chilli-showcase.webp',
    posterImage: '/images/products/kashmiri-chilli-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Curries', 'Tandoori', 'Pickles', 'Snacks', 'Soups', 'Rice Dishes'],
    color: '#C0392B',
  },
  {
    id: 'ginger-powder',
    name: 'Ginger Powder',
    category: 'Spice Powder',
    filterCategory: 'spice',
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
    id: 'dhaniya-powder',
    name: 'Dhaniya Powder',
    category: 'Spice Powder',
    filterCategory: 'spice',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Finely dehydrated and aromatic coriander seed powder with earthy, citrusy undertones. Forms the quintessential fragrant base for Indian gravies, curries, sabzis, rasams, and spice blends.',
    image: '/images/products/dhaniya-showcase.webp',
    posterImage: '/images/products/dhaniya-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Curries', 'Dals & Sambhars', 'Sabzis', 'Spice Mixes', 'Marinades', 'Gravies'],
    color: '#8A6D3B',
  },
  {
    id: 'jeera-whole',
    name: 'Jeera Whole',
    category: 'Whole Spice',
    filterCategory: 'spice',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Select premium whole cumin seeds packed with intense warm aroma and essential thymol oils. Essential for tadkas, tempering dals, aromatic pulaos, roasted jeera powder, and digestive brews.',
    image: '/images/products/jeera-whole-showcase.webp',
    posterImage: '/images/products/jeera-whole-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Tadkas & Tempering', 'Biryanis & Pulaos', 'Dals', 'Digestive Drinks', 'Curries', 'Raitas'],
    color: '#6F4E37',
  },
  {
    id: 'black-pepper-powder',
    name: 'Black Pepper Powder',
    category: 'Spice Powder',
    filterCategory: 'spice',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Bold and freshly ground dehydrated black pepper powder delivering sharp, pungent heat and rich essential piperine oils. Elevates soups, stir-fries, egg preparations, grilled marinades, and everyday seasoning.',
    image: '/images/products/black-pepper-showcase.webp',
    posterImage: '/images/products/black-pepper-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Soups', 'Marinades', 'Stir-Fries', 'Eggs & Salads', 'Rubs', 'Seasonings'],
    color: '#2C3E50',
  },

  // ── Fruits & Superfoods ──
  {
    id: 'amla-powder',
    name: 'Amla Powder',
    category: 'Superfood Powder',
    filterCategory: 'superfood',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Nutrient-dense dehydrated Indian gooseberry (Amla) powder, naturally rich in Vitamin C and potent antioxidants. Ideal for wellness smoothies, immunity shots, herbal teas, ayurvedic formulations, and hair & skin care.',
    image: '/images/products/amla-showcase.webp',
    posterImage: '/images/products/amla-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Smoothies', 'Immunity Teas', 'Juices', 'Herbal Mixes', 'Wellness Shots', 'Hair & Skin Care'],
    color: '#5B8C32',
  },
  {
    id: 'banana-powder',
    name: 'Banana Powder',
    category: 'Fruit Powder',
    filterCategory: 'superfood',
    tagline: 'Pure • Natural • Healthy',
    description:
      'Naturally dehydrated raw banana powder loaded with resistant starch, potassium, and essential gut-friendly dietary fibre. Perfect for baby foods, smoothies, gluten-free baking, pancakes, and health milkshakes.',
    image: '/images/products/banana-showcase.webp',
    posterImage: '/images/products/banana-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Baby Foods', 'Smoothies', 'Baking & Pancakes', 'Milkshakes', 'Porridges', 'Desserts'],
    color: '#E5A823',
  },
  {
    id: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'Superfood Powder',
    filterCategory: 'superfood',
    tagline: 'Pure • Natural • Healthy',
    description:
      '100% pure shade-dried moringa leaf powder, the miracle tree superfood. Exceptionally rich in iron, calcium, plant protein, and multivitamins to elevate green smoothies, soups, rotis, and wellness teas.',
    image: '/images/products/moringa-showcase.webp',
    posterImage: '/images/products/moringa-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Green Smoothies', 'Soups', 'Parathas & Rotis', 'Herbal Teas', 'Salad Sprinkles', 'Daily Health Drinks'],
    color: '#2E6F40',
  },
  {
    id: 'dehydrated-fruits-mix',
    name: 'Dehydrated Fruits Mix',
    category: 'Dehydrated Fruit Slice',
    filterCategory: 'superfood',
    tagline: 'Apple • Kiwi • Dragon Fruit',
    description:
      'A premium artisan medley of real dehydrated apple, kiwi, and dragon fruit slices. Packed with natural vitamins, minerals, and crunch without added sugars or preservatives. Ideal for guilt-free snacking, trail mixes, cereals, and mocktails.',
    image: '/images/products/dehydrated-fruits-mix-showcase.webp',
    posterImage: '/images/products/dehydrated-fruits-mix-poster.webp',
    sizes: ['100 g', '200 g', '500 g', '1 kg'],
    applications: ['Snacking', 'Cereal & Granola', 'Yogurt Bowls', 'Trail Mixes', 'Teas & Mocktails', 'Baking'],
    color: '#C2185B',
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
  email: 'Paradiesesundrycrunchi@gmail.com',
  phone: '+91 99203 29133',
  whatsapp: '919920329133',
  displayWhatsapp: '+91 99203 29133',
  website: 'paradiesesundrycrunchy.com',
  packagingSizes: ['100 g', '200 g', '500 g', '1 kg'],
  headOffice: {
    title: 'Head Office',
    line1: 'House No. 100, Shop No. 8, Gurudev Shopping Plaza',
    line2: 'Mandai Road, Near Thakkar Sweet, Thange Aaley',
    cityStateZip: 'Bhiwandi, Thane, Maharashtra, India – 421302',
    full: 'House No. 100, Shop No. 8, Gurudev Shopping Plaza, Mandai Road, Near Thakkar Sweet, Thange Aaley, Bhiwandi, Thane, Maharashtra, India – 421302',
    mapsUrl: 'https://maps.google.com/?q=Gurudev+Shopping+Plaza+Mandai+Road+Bhiwandi+Thane+421302',
  },
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
