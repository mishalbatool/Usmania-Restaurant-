export interface SpecialtyItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  prepHighlight: string;
  servingSuggestion: string;
  spiciness?: 'Mild' | 'Medium' | 'Rich & Spiced';
}

export interface MenuItem {
  id: string;
  name: string;
  urduName?: string;
  category: 'kunna-handi' | 'karahi' | 'biryani-rice' | 'bbq' | 'tandoor' | 'desserts';
  description: string;
  portionType?: string;
  specialtyTag?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  category: string;
  image: string;
}

export const RESTAURANT_INFO = {
  name: 'New Usmania Restaurant',
  locationTag: 'Chiniot',
  fullName: 'New Usmania Restaurant – Chiniot',
  tagline: 'Authentic Taste • Traditional Hospitality',
  heroHeading: 'A Taste of Tradition, A Flavor to Remember',
  heroSubheading: 'Discover the authentic flavors of Chiniot, from our signature Mutton Kunna to delicious desi favorites.',
  storyHeading: 'Tradition Served with Every Bite',
  storyText: 'Welcome to New Usmania Restaurant – Chiniot, the home of authentic desi flavors and traditional Chinioti hospitality. Our specialty Mutton Kunna is cooked to perfection in a traditional clay pot and served fresh with naan. Along with Kunna, we offer Biryani, BBQ, Karahi, Handi, and many more delicious dishes prepared with care. Complete your meal with our special ice cream. Whether you are dining with family, enjoying a meal with friends, or gathering together for a special occasion, we welcome you with warmth and traditional hospitality.',
  address: 'Main Sargodha Road, near Railway Station, Chiniot, 35400, Pakistan',
  social: {
    facebook: 'https://www.facebook.com/nes.tle.355',
    tiktok: 'https://www.tiktok.com/@newusmaniarestaurant',
    instagram: 'https://www.instagram.com/newusmaniarestaurantchiniot/',
    whatsapp: 'https://wa.me/923007709927?text=Assalam-o-Alaikum%20New%20Usmania%20Restaurant,%20I%20would%20like%20to%20place%20an%20order.',
  },
  googleMapsQueryUrl: 'https://www.google.com/maps/search/?api=1&query=New+Usmania+Restaurant+Main+Sargodha+Road+near+Railway+Station+Chiniot+35400+Pakistan',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=New+Usmania+Restaurant+Main+Sargodha+Road+near+Railway+Station+Chiniot+35400+Pakistan',
  serviceOptions: [
    {
      title: 'Cash Only',
      description: 'Traditional cash payment accepted at counter upon dining completion.',
      iconName: 'Banknote',
    },
    {
      title: 'All-You-Can-Eat',
      description: 'Generous hospitality with traditional dining packages and spreads.',
      iconName: 'UtensilsCrossed',
    },
    {
      title: 'Happy-Hour Food',
      description: 'Special afternoon and evening food pairings and freshly baked naan.',
      iconName: 'Clock',
    },
  ],
  whyVisitUs: [
    {
      id: 'authentic-desi',
      title: 'Authentic Desi Flavors',
      description: 'Time-honored recipes passed down through generations using pure spices and traditional techniques.',
      icon: 'Flame',
    },
    {
      id: 'clay-pot-kunna',
      title: 'Signature Clay-Pot Mutton Kunna',
      description: 'Slow-simmered for hours in sealed earthen pots, releasing rich natural juices and melt-in-the-mouth tenderness.',
      icon: 'Soup',
    },
    {
      id: 'chinioti-hospitality',
      title: 'Traditional Chinioti Hospitality',
      description: 'Warm, gracious, and attentive service true to the cultural heritage of Chiniot.',
      icon: 'HeartHandshake',
    },
    {
      id: 'desi-variety',
      title: 'A Variety of Desi Favorites',
      description: 'A comprehensive menu spanning charcoal BBQ, aromatic Biryani, handis, and wok-sizzled karahis.',
      icon: 'Utensils',
    },
    {
      id: 'family-dining',
      title: 'A Welcoming Family Dining Experience',
      description: 'Spacious, comfortable seating suited for families, friends, gatherings, and travelers.',
      icon: 'Users',
    },
  ],
};

export const SIGNATURE_SPECIALTIES: SpecialtyItem[] = [
  {
    id: 'mutton-kunna',
    name: 'Signature Mutton Kunna',
    category: 'Clay-Pot Heritage',
    description: 'Traditionally slow-cooked in a clay pot, rich in flavor and served with fresh naan.',
    image: '/images/mutton-kunna.jpg',
    prepHighlight: 'Sealed Earthen Matka Cooking',
    servingSuggestion: 'Best paired with piping hot Roghni Naan',
    spiciness: 'Rich & Spiced',
  },
  {
    id: 'desi-biryani',
    name: 'Desi Biryani',
    category: 'Aromatic Rice',
    description: 'Aromatic rice with traditional spices.',
    image: '/images/biryani.jpg',
    prepHighlight: 'Dum-Pukht Saffron Layering',
    servingSuggestion: 'Served with fresh raita & salad',
    spiciness: 'Medium',
  },
  {
    id: 'bbq-selection',
    name: 'BBQ Selection',
    category: 'Charcoal Grills',
    description: 'Delicious grilled favorites.',
    image: '/images/bbq-platter.jpg',
    prepHighlight: 'Smoky Charcoal Fire Skewering',
    servingSuggestion: 'Accompanied by mint chutney & onion rings',
    spiciness: 'Medium',
  },
  {
    id: 'chicken-mutton-karahi',
    name: 'Chicken & Mutton Karahi',
    category: 'Wok Specialties',
    description: 'Classic desi cooking with rich, flavorful masala.',
    image: '/images/karahi.jpg',
    prepHighlight: 'High-Flame Iron Wok Sizzle',
    servingSuggestion: 'Garnished with ginger slivers & green chilies',
    spiciness: 'Rich & Spiced',
  },
  {
    id: 'traditional-handi',
    name: 'Traditional Handi',
    category: 'Velvet Curries',
    description: 'Comforting desi flavors prepared with care.',
    image: '/images/handi.jpg',
    prepHighlight: 'Slow-Braised in Earthen Vessels',
    servingSuggestion: 'Served with soft tandoori butter naan',
    spiciness: 'Mild',
  },
  {
    id: 'usmania-ice-cream',
    name: 'Usmania Special Ice Cream',
    category: 'Sweet Finale',
    description: 'A delightful sweet treat to finish your meal.',
    image: '/images/usmania-ice-cream.jpg',
    prepHighlight: 'Artisanal Pistachio & Saffron Blend',
    servingSuggestion: 'Topped with crushed nuts and rose syrup',
    spiciness: 'Mild',
  },
];

export const FULL_MENU_ITEMS: MenuItem[] = [
  // Kunna & Handi
  {
    id: 'm1',
    name: 'Chinioti Mutton Kunna',
    urduName: 'چنیوٹی مٹن کُنہ',
    category: 'kunna-handi',
    description: 'Tender mutton shank slow-cooked in traditional clay earthen pot with roasted whole spices, bone marrow essence, and thickened natural gravy.',
    portionType: 'Clay Pot Serving',
    specialtyTag: 'Signature Specialty',
  },
  {
    id: 'm2',
    name: 'Mutton Kunna with Nalli (Bone Marrow)',
    urduName: 'مٹن کُنہ معہ نلی',
    category: 'kunna-handi',
    description: 'Our celebrated Chinioti recipe elevated with succulent bone marrow shanks simmering in velvety rich spiced broth.',
    portionType: 'Clay Pot Serving',
    specialtyTag: 'Chef Choice',
  },
  {
    id: 'm3',
    name: 'Traditional Chicken Handi (Boneless)',
    urduName: 'روایتی چکن ہانڈی',
    category: 'kunna-handi',
    description: 'Succulent boneless chicken morsels braised in a velvety yoghurt, cream, and almond-infused onion masala.',
    portionType: 'Half / Full Pot',
  },
  {
    id: 'm4',
    name: 'Mutton Handi Desi Masala',
    urduName: 'مٹن ہانڈی دیسی مصالحہ',
    category: 'kunna-handi',
    description: 'Select cuts of fresh mutton gently simmered in earthen handi with crushed coriander, black pepper, and butter.',
    portionType: 'Half / Full Pot',
  },

  // Karahi
  {
    id: 'm5',
    name: 'Usmania Special Chicken Karahi',
    urduName: 'عثمانیہ سپیشل چکن کڑاہی',
    category: 'karahi',
    description: 'Cooked fresh on high flame in cast iron wok with vine-ripened tomatoes, garlic, ginger, and fresh green chilies.',
    portionType: 'Half / Full Wok',
    specialtyTag: 'Popular',
  },
  {
    id: 'm6',
    name: 'Chinioti Mutton Karahi',
    urduName: 'چنیوٹی مٹن کڑاہی',
    category: 'karahi',
    description: 'Fresh local mutton wok-fried to tender perfection in pure butter and traditional whole spices.',
    portionType: 'Half / Full Wok',
  },
  {
    id: 'm7',
    name: 'White Chicken Karahi',
    urduName: 'وائٹ چکن کڑاہی',
    category: 'karahi',
    description: 'Mild, rich white gravy with fresh dairy cream, yoghurt, crushed white pepper, and green cardamom.',
    portionType: 'Half / Full Wok',
  },

  // Biryani & Rice
  {
    id: 'm8',
    name: 'Special Desi Chicken Biryani',
    urduName: 'سپیشل دیسی چکن بریانی',
    category: 'biryani-rice',
    description: 'Fragrant basmati rice layered with tender spiced chicken, golden saffron milk, fried onions, and whole garam masala.',
    portionType: 'Single / Family Platter',
    specialtyTag: 'Signature',
  },
  {
    id: 'm9',
    name: 'Mutton Dum Biryani',
    urduName: 'مٹن دم بریانی',
    category: 'biryani-rice',
    description: 'Traditional slow-steamed mutton biryani with aromatic herbs, dried plum, and infused basmati grains.',
    portionType: 'Single / Family Platter',
  },
  {
    id: 'm10',
    name: 'Zarda (Sweet Saffron Rice)',
    urduName: 'روایتی زعفرانی زردہ',
    category: 'biryani-rice',
    description: 'Traditional celebration rice infused with saffron, khoya, candied fruits, and toasted nuts.',
    portionType: 'Serving Portion',
  },

  // BBQ
  {
    id: 'm11',
    name: 'Beef & Mutton Seekh Kabab',
    urduName: 'سیخ کباب',
    category: 'bbq',
    description: 'Fine minced meat blended with onions, fresh mint, coriander, and roasted spices, charcoal-grilled to juicy tenderness.',
    portionType: 'Platter of 4 / 8 Pieces',
  },
  {
    id: 'm12',
    name: 'Chicken Malai Boti',
    urduName: 'چکن ملائی بوٹی',
    category: 'bbq',
    description: 'Melt-in-your-mouth boneless chicken marinated in rich heavy cream, green chilies, and white pepper on skewers.',
    portionType: 'Skewer Plate',
  },
  {
    id: 'm13',
    name: 'Chicken Tikka (Breast / Leg)',
    urduName: 'چکن تکہ',
    category: 'bbq',
    description: 'Classic tandoor-charred chicken piece coated in spicy yogurt marinade with lemon juice and chaat masala.',
    portionType: 'Single Quarter',
  },
  {
    id: 'm14',
    name: 'Mixed BBQ Feast Platter',
    urduName: 'مکس بی بی کیو پلیٹر',
    category: 'bbq',
    description: 'An assortment of Seekh Kababs, Chicken Malai Boti, Chicken Tikka, and grilled onions with mint raita.',
    portionType: 'Large Shared Platter',
    specialtyTag: 'Family Favorite',
  },

  // Tandoor & Breads
  {
    id: 'm15',
    name: 'Special Roghni Naan',
    urduName: 'سپیشل روغنی نان',
    category: 'tandoor',
    description: 'Fluffy tandoori bread glazed with clarified desi ghee and sprinkled with toasted sesame and kalonji seeds.',
    portionType: 'Fresh from Clay Tandoor',
  },
  {
    id: 'm16',
    name: 'Garlic Butter Naan',
    urduName: 'گارلک بٹر نان',
    category: 'tandoor',
    description: 'Crisp and soft flatbread infused with roasted garlic and fresh cilantro, brushed with pure butter.',
    portionType: 'Fresh from Clay Tandoor',
  },
  {
    id: 'm17',
    name: 'Kalonji Tandoori Roti',
    urduName: 'کلونجی تندوری روٹی',
    category: 'tandoor',
    description: 'Wholesome whole wheat roti baked against traditional earthen tandoor walls.',
    portionType: 'Single Fresh',
  },

  // Desserts
  {
    id: 'm18',
    name: 'Usmania Special Ice Cream',
    urduName: 'عثمانیہ سپیشل آئس کریم',
    category: 'desserts',
    description: 'Our signature rich ice cream blend with pistachio, saffron kulfi essence, slivered almonds, and silver leaf.',
    portionType: 'Double Scoop Coupe',
    specialtyTag: 'Signature Dessert',
  },
  {
    id: 'm19',
    name: 'Traditional Kulfi Falooda',
    urduName: 'روایتی کلفی فالودہ',
    category: 'desserts',
    description: 'Chilled condensed milk kulfi served over sweet cornstarch vermicelli, tukhm-e-balanga (chia seeds), and rose syrup.',
    portionType: 'Dessert Glass',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Signature Mutton Kunna in Clay Pot',
    caption: 'Slow-simmered in authentic earthen matka vessels with bone marrow shanks and aromatic gravy.',
    category: 'Kunna Heritage',
    image: '/images/mutton-kunna.jpg',
  },
  {
    id: 'g2',
    title: 'Piping Hot Tandoori Roghni Naan',
    caption: 'Fresh out of the glowing clay tandoor, brushed with desi ghee and sesame seeds.',
    category: 'Fresh Breads',
    image: '/images/fresh-naan.jpg',
  },
  {
    id: 'g3',
    title: 'Aromatic Desi Dum Biryani',
    caption: 'Long-grain basmati infused with royal saffron, fried golden onions, and fragrant spices.',
    category: 'Desi Biryani',
    image: '/images/biryani.jpg',
  },
  {
    id: 'g4',
    title: 'Sizzling Charcoal BBQ Platter',
    caption: 'Tender seekh kababs, grilled chicken boti, and charred tikka served sizzling hot.',
    category: 'Charcoal BBQ',
    image: '/images/bbq-platter.jpg',
  },
  {
    id: 'g5',
    title: 'Sizzling Wok Chicken & Mutton Karahi',
    caption: 'High-heat stir-fried in cast-iron wok with fresh tomatoes, ginger slivers, and green chilies.',
    category: 'Karahi Special',
    image: '/images/karahi.jpg',
  },
  {
    id: 'g6',
    title: 'Velvety Traditional Handi',
    caption: 'Slow-braised boneless chicken in creamy almond and yoghurt masala.',
    category: 'Comfort Handi',
    image: '/images/handi.jpg',
  },
  {
    id: 'g7',
    title: 'Usmania Special Pistachio Ice Cream',
    caption: 'Artisanal rich kulfi ice cream garnished with roasted pistachios, almonds, and rose essence.',
    category: 'Desserts',
    image: '/images/usmania-ice-cream.jpg',
  },
  {
    id: 'g8',
    title: 'Traditional Dining Hall Atmosphere',
    caption: 'Warm Chinioti wooden craftsmanship, amber chandeliers, and gracious family hospitality.',
    category: 'Dining Ambiance',
    image: '/images/dining-ambiance.jpg',
  },
];

export const getWhatsAppOrderUrl = (dishName?: string) => {
  const message = dishName
    ? `Assalam-o-Alaikum New Usmania Restaurant, I would like to order: ${dishName}.`
    : 'Assalam-o-Alaikum New Usmania Restaurant, I would like to place an order / inquire about the menu.';
  return `https://wa.me/923007709927?text=${encodeURIComponent(message)}`;
};
