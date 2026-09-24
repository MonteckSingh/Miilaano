export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'breads-rice' | 'desserts' | 'beverages' | 'specials' | string;
  description: string;
  price: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  spiciness?: number; // 0: Mild, 1: Medium, 2: Spicy, 3: Very Spicy
  tags?: string[];
  image?: string;
}

export interface Review {
  id: string;
  guestName: string;
  rating: number;
  date: string;
  comment: string;
  source: 'Google' | 'Instagram' | 'Zomato' | 'Direct Guest';
  occasion?: string;
}

export interface InstagramPost {
  id: string;
  caption: string;
  imageUrl: string;
  likes: number;
  url: string;
}

export const RESTAURANT_DATA = {
  brand: {
    name: 'MIILAANO',
    subtitle: 'Fine Dine',
    fullName: 'MIILAANO – Fine Dine',
    instagramTagline: 'Serving happiness on a plate at MIILAANO',
    heroTagline: 'Perfect place. Perfect bite. Perfect memories.',
    experienceHeading: 'MORE THAN A MEAL.',
    experienceDescription:
      'MIILAANO is an experience created around great food, memorable moments and an atmosphere worth returning to. Every recipe is an ode to culinary craftsmanship, served in a space designed for effortless luxury.',
    whyMilaanoHeading: 'COME FOR THE FOOD. STAY FOR THE MOMENTS.',
    story:
      'Born from a deep passion for elevated gastronomy, MIILAANO brings together the warmth of heartfelt hospitality and the precision of modern fine dining. Whether celebrating life’s milestones or seeking an intimate evening over handcrafted flavors, our table is set for you.',
  },
  contact: {
    phone: '+91 98604 99000',
    phoneClean: '919860499000',
    whatsapp: '+91 98604 99000',
    whatsappClean: '919860499000',
    email: 'reservations@miilaanofinedine.com',
    instagramHandle: '@miilaano.finedine',
    instagramUrl: 'https://instagram.com/miilaano.finedine',
    facebookUrl: 'https://facebook.com/miilaano.finedine',
  },
  location: {
    addressLine1: 'Near UMC Circle, Beside P.M. Rohra Hospital',
    addressLine2: 'Section 17, Ulhasnagar 3',
    city: 'Ulhasnagar',
    state: 'Maharashtra',
    postalCode: '421003',
    fullAddress: 'Near UMC Circle, Beside P.M. Rohra Hospital, Section 17, Ulhasnagar 3, Maharashtra - 421003',
    googleMapsUrl: 'https://maps.app.goo.gl/33LmxatqFMkTSbsUA',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=19.2305221,73.1565853&hl=en&z=17&output=embed',
    parking: 'Complimentary Valet Parking Available at Entrance',
    landmark: 'Beside P.M. Rohra Hospital, Near UMC Circle',
  },
  hours: [
    { days: 'Monday – Thursday', lunch: '12:00 PM – 03:30 PM', dinner: '07:00 PM – 11:30 PM' },
    { days: 'Friday – Sunday', lunch: '12:00 PM – 04:00 PM', dinner: '07:00 PM – 12:00 AM' },
  ],
  experienceHighlights: [
    {
      number: '01',
      title: 'THE FOOD',
      description:
        'Artisanal recipes blending authentic regional secrets with contemporary culinary technique and Michelin-level plating.',
    },
    {
      number: '02',
      title: 'THE AMBIENCE',
      description:
        'Warm ambient candlelight, plush emerald textures, refined acoustic comfort, and intimate booth seating.',
    },
    {
      number: '03',
      title: 'THE MOMENTS',
      description:
        'From romantic anniversary dinners to celebratory family gatherings, every detail is orchestrated to create lasting memories.',
    },
  ],
  signatureDishes: [
    {
      id: 'sig-1',
      name: 'Pan-Seared Truffle Scallop & Cauliflower Silk',
      category: 'starters' as const,
      description: 'Diver scallops seared in cultured butter, velvet cauliflower purée, herb emulsion & edible 24k gold leaf.',
      price: '₹ 895',
      isVeg: false,
      isChefSpecial: true,
      image: '/images/dish-starter.jpg',
      tags: ['Chef Signature', 'Gluten-Free', 'Gourmet'],
    },
    {
      id: 'sig-2',
      name: 'Charred Chilean Seabass in Saffron Velouté',
      category: 'mains' as const,
      description: 'Slow-braised ocean sea bass with a fragrant saffron reduction, seasonal glazed baby root vegetables and chive oil.',
      price: '₹ 1,450',
      isVeg: false,
      isChefSpecial: true,
      image: '/images/dish-main.jpg',
      tags: ['Signature Main', 'Artisanal', 'Seafood'],
    },
    {
      id: 'sig-3',
      name: 'Miilaano Imperial Dark Chocolate Sphere',
      category: 'desserts' as const,
      description: '70% Valrhona dark chocolate dome, hazelnut praline core, warm wild raspberry coulis pour-over & gold dust.',
      price: '₹ 625',
      isVeg: true,
      isChefSpecial: true,
      image: '/images/dish-dessert.jpg',
      tags: ['Table-side Theater', 'Signature Sweet'],
    },
  ],
  menuCategories: [
    { id: 'all', label: 'All Items' },
    { id: 'starters', label: 'Artisanal Starters' },
    { id: 'mains', label: 'Main Course' },
    { id: 'breads-rice', label: 'Breads & Fragrant Rice' },
    { id: 'specials', label: "Chef's Specials" },
    { id: 'desserts', label: 'Decadent Desserts' },
    { id: 'beverages', label: 'Signature Beverages' },
  ],
  menuItems: [
    // Starters
    {
      id: 'm-1',
      name: 'Truffle Glazed Cottage Cheese Medallions',
      category: 'starters' as const,
      description: 'Smoked artisanal paneer steeped in black truffle oil marinade, roasted peppers & mint dust.',
      price: '₹ 595',
      isVeg: true,
      isChefSpecial: true,
      isPopular: true,
      spiciness: 1,
      tags: ['Vegetarian', 'Truffle'],
      image: '/images/dish-starter.jpg',
    },
    {
      id: 'm-2',
      name: 'Melt-in-Mouth Awadhi Galouti Kebab',
      category: 'starters' as const,
      description: 'Finely minced lamb infused with 32 rare spices, served over miniature saffron sheermal crisps.',
      price: '₹ 745',
      isVeg: false,
      isChefSpecial: true,
      isPopular: true,
      spiciness: 2,
      tags: ['Heritage Recipe', 'Royal Awadh'],
      image: '/images/dish-starter.jpg',
    },
    {
      id: 'm-3',
      name: 'Smoked Burrata & Heirloom Tomato Tart',
      category: 'starters' as const,
      description: 'Creamy artisanal burrata, charred heirloom tomatoes, basil foam & aged Modena balsamic glaze.',
      price: '₹ 645',
      isVeg: true,
      tags: ['Vegetarian', 'Artisanal Cheese'],
      image: '/images/dish-starter.jpg',
    },
    {
      id: 'm-4',
      name: 'Crispy Tempura Rock Shrimp with Yuzu Mayo',
      category: 'starters' as const,
      description: 'Lightly battered crisp shrimp tossed in a velvety citrus yuzu emulsion with toasted sesame.',
      price: '₹ 795',
      isVeg: false,
      tags: ['Seafood', 'Crispy'],
      image: '/images/dish-starter.jpg',
    },

    // Mains
    {
      id: 'm-5',
      name: 'Smoked Butter Chicken Miilaano Reserve',
      category: 'mains' as const,
      description: 'Tandoor-charred chicken supreme simmered in velvety slow-cooked San Marzano tomato gravy with churned white butter.',
      price: '₹ 825',
      isVeg: false,
      isPopular: true,
      spiciness: 1,
      tags: ['House Classic', 'Guest Favorite'],
      image: '/images/dish-main.jpg',
    },
    {
      id: 'm-6',
      name: 'Paneer Makhani Saffron Truffle',
      category: 'mains' as const,
      description: 'Fresh malai paneer simmered in a silken cashew-tomato reduction infused with Kashmiri saffron & truffle oil.',
      price: '₹ 695',
      isVeg: true,
      isPopular: true,
      spiciness: 1,
      tags: ['Vegetarian', 'Creamy'],
      image: '/images/dish-main.jpg',
    },
    {
      id: 'm-7',
      name: 'Slow-Cooked Dum Nalli Gosht',
      category: 'mains' as const,
      description: 'Melt-off-the-bone lamb shanks slow-simmered for 8 hours in aromatic saffron and brown onion jus.',
      price: '₹ 1,195',
      isVeg: false,
      isChefSpecial: true,
      spiciness: 2,
      tags: ['Slow Braised', 'Signature'],
      image: '/images/dish-main.jpg',
    },
    {
      id: 'm-8',
      name: 'Wild Mushroom & Morel Truffle Stroganoff',
      category: 'mains' as const,
      description: 'Himalayan morels and wild forest mushrooms flambéed with aged brandy in a rich shallot crème.',
      price: '₹ 785',
      isVeg: true,
      tags: ['Vegetarian', 'Wild Mushrooms'],
      image: '/images/dish-main.jpg',
    },

    // Breads & Rice
    {
      id: 'm-9',
      name: 'Miilaano Signature Dum Pukht Biryani (Lamb / Chicken / Subz)',
      category: 'breads-rice' as const,
      description: 'Aged long-grain basmati rice layered with aromatic spices and sealed in an artisanal clay pot with puff pastry seal.',
      price: '₹ 845',
      isVeg: false,
      isPopular: true,
      spiciness: 2,
      tags: ['Dum Cooking', 'Aromatic'],
      image: '/images/dish-main.jpg',
    },
    {
      id: 'm-10',
      name: 'Truffle & Aged Cheddar Stuffed Naan',
      category: 'breads-rice' as const,
      description: 'Artisanal clay oven flatbread stuffed with vintage English cheddar and brushed with black truffle butter.',
      price: '₹ 265',
      isVeg: true,
      tags: ['Artisan Bread', 'Truffle'],
    },
    {
      id: 'm-11',
      name: 'Olive & Herb Zaatar Butter Roti',
      category: 'breads-rice' as const,
      description: 'Whole wheat tandoori bread layered with Mediterranean zaatar herbs and cold-pressed olive butter.',
      price: '₹ 185',
      isVeg: true,
      tags: ['Whole Wheat'],
    },

    // Chef Specials
    {
      id: 'm-12',
      name: 'Charred Chilean Seabass in Saffron Velouté',
      category: 'specials' as const,
      description: 'Slow-braised ocean sea bass with a fragrant saffron reduction, seasonal glazed baby root vegetables and chive oil.',
      price: '₹ 1,450',
      isVeg: false,
      isChefSpecial: true,
      image: '/images/dish-main.jpg',
      tags: ['Signature Main', 'Artisanal', 'Seafood'],
    },
    {
      id: 'm-13',
      name: 'Sous-Vide 24k Gold Crusted Lamb Rack',
      category: 'specials' as const,
      description: 'New Zealand lamb rack crusted with pistachios, edible 24k gold leaf, port wine reduction & smoked garlic mash.',
      price: '₹ 1,850',
      isVeg: false,
      isChefSpecial: true,
      image: '/images/dish-starter.jpg',
      tags: ['Ultra Luxury', 'Chef Feature'],
    },

    // Desserts
    {
      id: 'm-14',
      name: 'Miilaano Imperial Dark Chocolate Sphere',
      category: 'desserts' as const,
      description: '70% Valrhona dark chocolate dome, hazelnut praline core, warm wild raspberry coulis pour-over & gold dust.',
      price: '₹ 625',
      isVeg: true,
      isChefSpecial: true,
      isPopular: true,
      image: '/images/dish-dessert.jpg',
      tags: ['Table-side Theater', 'Signature Sweet'],
    },
    {
      id: 'm-15',
      name: 'Saffron & Cardamom Crème Brûlée',
      category: 'desserts' as const,
      description: 'Silken French custard infused with organic Kashmiri saffron, cracked caramel glaze & pistachio shortbread.',
      price: '₹ 495',
      isVeg: true,
      tags: ['French-Indian Fusion'],
      image: '/images/dish-dessert.jpg',
    },
    {
      id: 'm-16',
      name: 'Artisanal Rose Petal & Pistachio Kulfi Gelato',
      category: 'desserts' as const,
      description: 'Slow-churned rabdi gelato with organic damask rose essence and toasted Iranian pistachios.',
      price: '₹ 445',
      isVeg: true,
      tags: ['House Churned'],
      image: '/images/dish-dessert.jpg',
    },

    // Beverages
    {
      id: 'm-17',
      name: 'Smoked Rosemary & Blood Orange Elixir',
      category: 'beverages' as const,
      description: 'Handcrafted mocktail with cold-pressed blood orange, clarified botanical cordial, torch-smoked rosemary mist.',
      price: '₹ 385',
      isVeg: true,
      isChefSpecial: true,
      image: '/images/cocktail.jpg',
      tags: ['Signature Mocktail', 'Botanical'],
    },
    {
      id: 'm-18',
      name: 'Saffron Elderflower Fizz',
      category: 'beverages' as const,
      description: 'Wild elderflower liqueur, sparkling artisanal tonic, saffron strands, and edible gold shimmer.',
      price: '₹ 425',
      isVeg: true,
      image: '/images/cocktail.jpg',
      tags: ['Refreshing', 'Sparkling'],
    },
    {
      id: 'm-19',
      name: 'Single Origin Artisanal Roast Espresso / Cortado',
      category: 'beverages' as const,
      description: 'Estate-grown Arabica beans pulled to perfection, served with house-made hazelnut biscotti.',
      price: '₹ 295',
      isVeg: true,
      tags: ['Specialty Coffee'],
    },
  ],
  reviews: [
    {
      id: 'r-1',
      guestName: 'Dr. Ananya Sharma',
      rating: 5,
      date: 'Visited February 2026',
      comment:
        'MIILAANO is truly in a league of its own. The ambiance is breathtaking—warm, intimate, and so sophisticated. The Awadhi Galouti and the Dark Chocolate Sphere were culinary masterpieces. Best dining experience in the city!',
      source: 'Google',
      occasion: 'Anniversary Dinner',
    },
    {
      id: 'r-2',
      guestName: 'Vikramaditya Rao',
      rating: 5,
      date: 'Visited January 2026',
      comment:
        'Discovered them through Instagram and the reality exceeded all expectations. Flawless hospitality, exquisite plating, and the Chilean Seabass is unforgettable. The staff treats you like royalty.',
      source: 'Instagram',
      occasion: 'Business Dinner',
    },
    {
      id: 'r-3',
      guestName: 'Pooja & Rohan Mehta',
      rating: 5,
      date: 'Visited February 2026',
      comment:
        'We booked the private dining section for a milestone birthday. Everything from the table arrangement to the bespoke tasting menu was impeccable. Truly serving happiness on a plate!',
      source: 'Direct Guest',
      occasion: 'Birthday Celebration',
    },
    {
      id: 'r-4',
      guestName: 'Siddharth Sen',
      rating: 5,
      date: 'Visited January 2026',
      comment:
        'Every single dish has so much thought behind it. The subtle emerald and warm gold interiors create such a relaxed luxury vibe. Can’t wait to return with family.',
      source: 'Google',
      occasion: 'Family Gathering',
    },
  ],
  instagramPosts: [
    {
      id: 'ig-1',
      caption: 'The art of the pour: Imperial Dark Chocolate Sphere melting under warm raspberry coulis. ✨ #MiilaanoFineDine',
      imageUrl: '/images/dish-dessert.jpg',
      likes: 1840,
      url: 'https://instagram.com/miilaano.finedine',
    },
    {
      id: 'ig-2',
      caption: 'Evenings at MIILAANO: Where soft candlelight meets timeless culinary craftsmanship. 🥂 #FineDining #LuxuryDining',
      imageUrl: '/images/hero-dining.jpg',
      likes: 2420,
      url: 'https://instagram.com/miilaano.finedine',
    },
    {
      id: 'ig-3',
      caption: 'The signature Pan-Seared Scallop & Cauliflower Silk with 24k edible gold. 🌟 #MichelinStyle #PlatingPerfection',
      imageUrl: '/images/dish-starter.jpg',
      likes: 1980,
      url: 'https://instagram.com/miilaano.finedine',
    },
    {
      id: 'ig-4',
      caption: 'Intimate moments, bespoke tables, and unforgettable conversations. Reserve your table for tonight. 🕯️',
      imageUrl: '/images/private-dining.jpg',
      likes: 2150,
      url: 'https://instagram.com/miilaano.finedine',
    },
    {
      id: 'ig-5',
      caption: 'Botanical perfection: Smoked Rosemary & Blood Orange Elixir crafted at our marble bar counter. 🍸',
      imageUrl: '/images/cocktail.jpg',
      likes: 1670,
      url: 'https://instagram.com/miilaano.finedine',
    },
    {
      id: 'ig-6',
      caption: 'Charred Chilean Seabass bathed in rich saffron reduction. A taste worth remembering. 🍽️',
      imageUrl: '/images/dish-main.jpg',
      likes: 2890,
      url: 'https://instagram.com/miilaano.finedine',
    },
  ],
  whyMilaanoPoints: [
    {
      title: 'Artisanal Culinary Mastery',
      description: 'Every dish is curated by seasoned master chefs using handpicked spices, authentic reduction techniques, and modern plating aesthetics.',
    },
    {
      title: 'Cinematic, Intimate Ambience',
      description: 'Designed with acoustic warmth, mood candlelight, plush velvet textures, and private dining corners tailored for celebration.',
    },
    {
      title: 'Intuitive & Discreet Hospitality',
      description: 'Anticipatory service where every guest request is met with grace, discreet attention, and warm sincerity.',
    },
    {
      title: 'Seamless Digital Reservation',
      description: 'Instant confirmation via WhatsApp and table allocation with priority seating preferences for special occasions.',
    },
  ],
  faq: [
    {
      q: 'Do you require prior table reservations?',
      a: 'While we welcome walk-in guests whenever seating is available, we strongly recommend reserving in advance—especially for weekend dinners and private dining rooms.',
    },
    {
      q: 'Is there a dress code at MIILAANO?',
      a: 'We embrace an elegant smart casual or formal dining attire to complement the refined ambience of our dining room.',
    },
    {
      q: 'Do you cater to dietary restrictions and vegetarian preferences?',
      a: 'Yes, absolutely. Our menu features a dedicated, extensive selection of gourmet vegetarian and vegan dishes, and our chefs happily accommodate allergies or dietary preferences upon request.',
    },
    {
      q: 'Is valet parking available?',
      a: 'Yes, we provide complimentary valet parking for all guests at our main entrance.',
    },
  ],
};
