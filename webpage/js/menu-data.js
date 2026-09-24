/**
 * Miilaano Fine Dine — Official Digital Menu Catalog
 * Near P M Rohra Hospital, UMC Road, Ulhasnagar – 421003
 * Dedicated Separate Kitchens for Veg & Non-Veg
 */

const MENU_CATEGORIES = [
  { id: 'all', name: 'All Dishes', icon: '✨' },
  { id: 'signatures', name: 'Miilaano Signatures', icon: '👑' },
  { id: 'sindhi-special', name: 'Sindhi Specials', icon: '🍲' },
  { id: 'biryani', name: 'Royal Biryani', icon: '🍚' },
  { id: 'tandoor', name: 'Tandoor & Kebabs', icon: '🔥' },
  { id: 'indian', name: 'Indian Curries & Breads', icon: '🥘' },
  { id: 'chinese', name: 'Indo-Chinese', icon: '🥢' },
  { id: 'pizza-fastfood', name: 'Pizza & Fast Food', icon: '🍕' },
  { id: 'mocktails', name: 'Mocktails & Drinks', icon: '🍹' },
  { id: 'desserts', name: 'Desserts', icon: '🍨' }
];

const SIGNATURE_DISHES = [
  {
    id: 'sig-1',
    name: 'Sindhi Special Cheese Seyal Pav',
    category: 'sindhi-special',
    type: 'veg',
    price: '₹200',
    description: 'Authentic Sindhi specialty! Soft pav buns simmered in a spiced tomato, onion, ginger-garlic gravy and blanketed with molten melted cheese.',
    image: 'assets/images/food/sindhi-cheese-seyal-pav-miilaano.jpg',
    alt: 'Sindhi Special Cheese Seyal Pav at Miilaano Fine Dine Ulhasnagar',
    tag: 'Sindhi Special',
    spicyLevel: 2,
    kitchen: 'veg'
  },
  {
    id: 'sig-2',
    name: 'Chicken Dum Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹350 / ₹380',
    description: 'Royal aromatic dum biryani with marinated tender chicken, saffron aged basmati rice, caramelized onions and royal secret spices in copper handi.',
    image: 'assets/images/food/chicken-dum-biryani-miilaano-ulhasnagar.jpg',
    alt: 'Chicken Dum Biryani at Miilaano Fine Dine Ulhasnagar',
    tag: 'Chef Recommendation',
    spicyLevel: 2,
    kitchen: 'non-veg'
  },
  {
    id: 'sig-3',
    name: 'Paneer Tikka Charcoal Grill',
    category: 'tandoor',
    type: 'veg',
    price: '₹360',
    description: 'Plump cottage cheese cubes marinated in spiced mustard oil & hung curd, skewered with bell peppers and roasted in charcoal clay oven.',
    image: 'assets/images/food/paneer-tikka-tandoor-miilaano.jpg',
    alt: 'Paneer Tikka Tandoori Kebab at Miilaano Fine Dine Ulhasnagar',
    tag: 'Tandoor Classic',
    spicyLevel: 2,
    kitchen: 'veg'
  },
  {
    id: 'sig-4',
    name: 'Chicken Tandoori Sizzler',
    category: 'tandoor',
    type: 'non-veg',
    price: '₹320 / ₹580',
    description: 'Whole spring chicken leg marinated in rich Kashmiri spices and roasted to smoky crisp perfection, served on a sizzling hot plate.',
    image: 'assets/images/food/chicken-tandoori-kebab-miilaano.jpg',
    alt: 'Chicken Tandoori Kebab at Miilaano Fine Dine Ulhasnagar',
    tag: 'Crowd Favorite',
    spicyLevel: 3,
    kitchen: 'non-veg'
  },
  {
    id: 'sig-5',
    name: 'Butter Chicken Murgh Makhani',
    category: 'indian',
    type: 'non-veg',
    price: '₹420',
    description: 'Tandoor roasted chicken pieces simmered in a velvety, buttery tomato gravy with fenugreek leaves and fresh cream swirl.',
    image: 'assets/images/food/butter-chicken-gravy-miilaano.jpg',
    alt: 'Butter Chicken Gravy with Naan at Miilaano Fine Dine Ulhasnagar',
    tag: 'Bestseller',
    spicyLevel: 1,
    kitchen: 'non-veg'
  },
  {
    id: 'sig-6',
    name: 'Artisanal Chicken Tikka Pizza',
    category: 'pizza-fastfood',
    type: 'non-veg',
    price: '₹360',
    description: 'Stone-baked crispy crust topped with rich pizza sauce, spiced tandoori chicken tikka, mozzarella cheese, crisp peppers, and fresh herbs.',
    image: 'assets/images/food/chicken-tikka-pizza-miilaano.jpg',
    alt: 'Chicken Tikka Pizza at Miilaano Fine Dine Ulhasnagar',
    tag: 'House Special',
    spicyLevel: 2,
    kitchen: 'non-veg'
  },
  {
    id: 'sig-7',
    name: 'Indo-Chinese Schezwan Special',
    category: 'chinese',
    type: 'non-veg',
    price: '₹380',
    description: 'Wok-tossed noodles and crispy chilli chicken chunks tossed with spring onions, red peppers, and fiery homemade Schezwan sauce.',
    image: 'assets/images/food/chinese-schezwan-noodles-miilaano.jpg',
    alt: 'Indo Chinese Schezwan Noodles and Starters at Miilaano Fine Dine Ulhasnagar',
    tag: 'Spicy Delight',
    spicyLevel: 3,
    kitchen: 'non-veg'
  },
  {
    id: 'sig-8',
    name: 'Royal Tropical & Blue Lagoon Mocktails',
    category: 'mocktails',
    type: 'veg',
    price: '₹180 - ₹190',
    description: 'Chilled handcrafted mocktails layered with fresh mint, citrus juices, exotic passionfruit, and crushed ice in crystal glassware.',
    image: 'assets/images/food/royal-mocktails-miilaano-fine-dine.jpg',
    alt: 'Signature Mocktails at Miilaano Fine Dine Ulhasnagar',
    tag: 'Refreshing',
    spicyLevel: 0,
    kitchen: 'veg'
  }
];

const FULL_MENU_ITEMS = [
  // --- Sindhi & Miilaano Specials ---
  {
    id: 'm-101',
    name: 'Sindhi Special Cheese Seyal Pav',
    category: 'sindhi-special',
    type: 'veg',
    price: '₹200',
    description: 'Signature Sindhi style seasoned pav buns with rich masala gravy, melted cheese & fresh coriander.',
    isSignature: true,
    kitchen: 'veg'
  },
  {
    id: 'm-102',
    name: 'Sindhi Seyal Pav (Classic)',
    category: 'sindhi-special',
    type: 'veg',
    price: '₹160',
    description: 'Traditional spiced tomato-onion-garlic gravy infused into fluffy pav with a squeeze of fresh lime.',
    kitchen: 'veg'
  },
  {
    id: 'm-103',
    name: 'Miilaano Special Cheese Butter Masala',
    category: 'sindhi-special',
    type: 'veg',
    price: '₹360',
    description: 'Rich tomato cashew makhani gravy loaded with processed cheese cubes and melting butter.',
    kitchen: 'veg'
  },
  {
    id: 'm-104',
    name: 'Miilaano Royal Murgh Sizzler',
    category: 'sindhi-special',
    type: 'non-veg',
    price: '₹520',
    description: 'Sizzling platter with tandoori chicken, pepper sauce, buttered rice, grilled veggies and french fries.',
    kitchen: 'non-veg'
  },

  // --- Royal Biryani ---
  {
    id: 'm-201',
    name: 'Vegetable Dum Biryani',
    category: 'biryani',
    type: 'veg',
    price: '₹300',
    description: 'Fragrant basmati rice layered with fresh seasonal vegetables, saffron, mint and fried onions, cooked on dum.',
    kitchen: 'veg'
  },
  {
    id: 'm-202',
    name: 'Paneer Dum Biryani / Tikka Biryani',
    category: 'biryani',
    type: 'veg',
    price: '₹350 / ₹380',
    description: 'Succulent paneer cubes or smoky tandoori paneer tikka dum-cooked with spiced long grain basmati rice.',
    kitchen: 'veg'
  },
  {
    id: 'm-203',
    name: 'Mushroom Dum Biryani / Tikka Biryani',
    category: 'biryani',
    type: 'veg',
    price: '₹350 / ₹380',
    description: 'Juicy button mushrooms marinated in aromatic yogurt masala and slow cooked with basmati rice.',
    kitchen: 'veg'
  },
  {
    id: 'm-204',
    name: 'Egg Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹330',
    description: 'Boiled and golden fried spiced eggs layered with fragrant dum biryani rice and fried onions.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-205',
    name: 'Chicken Dum Biryani / Tikka Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹350 / ₹380',
    description: 'Traditional slow-cooked chicken dum biryani or boneless tandoori chicken tikka biryani with cooling raita.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-206',
    name: 'Butter Chicken Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹420',
    description: 'Fusion masterpiece combining aromatic biryani rice with creamy rich butter chicken gravy and chicken chunks.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-207',
    name: 'Fish Biryani / Prawns Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹480 / ₹500',
    description: 'Fresh seafood delicately marinated in coastal spices and cooked with fragrant saffron basmati rice.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-208',
    name: 'Mutton Dum Biryani',
    category: 'biryani',
    type: 'non-veg',
    price: '₹480',
    description: 'Tender baby mutton pieces marinated in royal spices and slow dum-cooked to melting perfection.',
    kitchen: 'non-veg'
  },

  // --- Tandoor & Kebabs ---
  {
    id: 'm-301',
    name: 'Paneer Tikka',
    category: 'tandoor',
    type: 'veg',
    price: '₹360',
    description: 'Cottage cheese cubes marinated in traditional spices, skewered and roasted in clay oven.',
    isSignature: true,
    kitchen: 'veg'
  },
  {
    id: 'm-302',
    name: 'Paneer Malai Tikka',
    category: 'tandoor',
    type: 'veg',
    price: '₹380',
    description: 'Melt-in-mouth paneer marinated in fresh cream, cashew paste, mild spices and green cardamom.',
    kitchen: 'veg'
  },
  {
    id: 'm-303',
    name: 'Tandoori Soya Chaap',
    category: 'tandoor',
    type: 'veg',
    price: '₹320',
    description: 'Protein rich soya chaap steeped in spicy tandoori marinade and grilled on charcoal skewers.',
    kitchen: 'veg'
  },
  {
    id: 'm-304',
    name: 'Mushroom Tikka',
    category: 'tandoor',
    type: 'veg',
    price: '₹340',
    description: 'Plump button mushrooms marinated in hung curd and tandoori masala, charred in clay oven.',
    kitchen: 'veg'
  },
  {
    id: 'm-305',
    name: 'Chicken Tandoori',
    category: 'tandoor',
    type: 'non-veg',
    price: 'Half ₹320 / Full ₹580',
    description: 'The king of kebabs! Whole spring chicken marinated in yogurt, Kashmiri red chillies and cooked in tandoor.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-306',
    name: 'Chicken Tikka',
    category: 'tandoor',
    type: 'non-veg',
    price: '₹380',
    description: 'Boneless chicken cubes infused with spiced mustard oil marinade and charcoal grilled.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-307',
    name: 'Murgh Malai Kebab',
    category: 'tandoor',
    type: 'non-veg',
    price: '₹420',
    description: 'Ultra-tender boneless chicken pieces steeped in cream, cheese, white pepper and cardamom.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-308',
    name: 'Chicken Pahadi Kebab',
    category: 'tandoor',
    type: 'non-veg',
    price: '₹390',
    description: 'Chicken pieces marinated in fresh mint, coriander, green chillies and fragrant spices.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-309',
    name: 'Tandoori Prawns / Fish Tikka',
    category: 'tandoor',
    type: 'non-veg',
    price: '₹520 / ₹490',
    description: 'Jumbo prawns or boneless fish fillets marinated in carom seeds (ajwain), lemon juice and tandoori spices.',
    kitchen: 'non-veg'
  },

  // --- Indian Curries, Gravies & Breads ---
  {
    id: 'm-401',
    name: 'Butter Chicken (Murgh Makhani)',
    category: 'indian',
    type: 'non-veg',
    price: '₹420',
    description: 'Rich, smooth tomato, cashew and butter gravy with succulent tandoori chicken pieces.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-402',
    name: 'Chicken Handi / Kadai Chicken',
    category: 'indian',
    type: 'non-veg',
    price: '₹390 / ₹410',
    description: 'Traditional earthen pot chicken preparation with freshly ground spices, onions and capsicum.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-403',
    name: 'Chicken Tikka Masala',
    category: 'indian',
    type: 'non-veg',
    price: '₹430',
    description: 'Smoky boneless tandoori chicken tikka cooked in a medium spicy onion-tomato gravy.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-404',
    name: 'Dal Makhani',
    category: 'indian',
    type: 'veg',
    price: '₹280',
    description: 'Slow-cooked black lentils simmered overnight with fresh cream, butter and mild spices.',
    kitchen: 'veg'
  },
  {
    id: 'm-405',
    name: 'Paneer Butter Masala',
    category: 'indian',
    type: 'veg',
    price: '₹350',
    description: 'Fresh cottage cheese cubes in an aromatic creamy tomato and cashew nut gravy.',
    kitchen: 'veg'
  },
  {
    id: 'm-406',
    name: 'Paneer Kadai / Paneer Handi',
    category: 'indian',
    type: 'veg',
    price: '₹350',
    description: 'Paneer tossed with chunky bell peppers, crushed coriander seeds and spicy tomato gravy.',
    kitchen: 'veg'
  },
  {
    id: 'm-407',
    name: 'Dal Tadka (Yellow Dal)',
    category: 'indian',
    type: 'veg',
    price: '₹220',
    description: 'Yellow toor dal tempered with desi ghee, cumin seeds, garlic, onions and whole red chillies.',
    kitchen: 'veg'
  },
  {
    id: 'm-408',
    name: 'Kaju Curry / Kaju Masala',
    category: 'indian',
    type: 'veg',
    price: '₹380',
    description: 'Roasted whole cashew nuts cooked in a rich, decadent golden spiced gravy.',
    kitchen: 'veg'
  },
  {
    id: 'm-409',
    name: 'Tandoori Roti / Butter Roti',
    category: 'indian',
    type: 'veg',
    price: '₹35 / ₹45',
    description: 'Whole wheat flatbread freshly baked in clay tandoor oven.',
    kitchen: 'veg'
  },
  {
    id: 'm-410',
    name: 'Butter Naan / Garlic Naan / Cheese Garlic Naan',
    category: 'indian',
    type: 'veg',
    price: '₹60 / ₹80 / ₹130',
    description: 'Soft leavened refined flour flatbread brushed with butter, garlic, or stuffed with melting cheese.',
    kitchen: 'veg'
  },

  // --- Indo-Chinese ---
  {
    id: 'm-501',
    name: 'Veg Hakka Noodles / Schezwan Noodles',
    category: 'chinese',
    type: 'veg',
    price: '₹240 / ₹260',
    description: 'Wok-tossed noodles with shredded cabbage, carrots, bell peppers, soy sauce and Schezwan spices.',
    kitchen: 'veg'
  },
  {
    id: 'm-502',
    name: 'Veg Triple Schezwan Fried Rice',
    category: 'chinese',
    type: 'veg',
    price: '₹320',
    description: 'Combination of fried rice, crispy fried noodles and delicious spicy Schezwan gravy with veg balls.',
    kitchen: 'veg'
  },
  {
    id: 'm-503',
    name: 'Paneer Chilli Dry / Gravy',
    category: 'chinese',
    type: 'veg',
    price: '₹310',
    description: 'Crispy fried paneer cubes tossed with diced bell peppers, green chillies, onions and dark soy sauce.',
    kitchen: 'veg'
  },
  {
    id: 'm-504',
    name: 'Veg Manchurian Dry / Gravy',
    category: 'chinese',
    type: 'veg',
    price: '₹270',
    description: 'Minced vegetable dumplings tossed in an aromatic ginger, garlic, coriander and soy sauce reduction.',
    kitchen: 'veg'
  },
  {
    id: 'm-505',
    name: 'Chicken Hakka Noodles / Schezwan Noodles',
    category: 'chinese',
    type: 'non-veg',
    price: '₹290 / ₹320',
    description: 'Noodles wok tossed with shredded chicken, egg, seasonal vegetables and spicy seasonings.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-506',
    name: 'Chicken Triple Schezwan Rice with Gravy',
    category: 'chinese',
    type: 'non-veg',
    price: '₹380',
    description: 'Legendary Indo-Chinese favourite: Schezwan chicken fried rice, fried egg noodles and spicy chicken gravy.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-507',
    name: 'Chilli Chicken Dry / Gravy',
    category: 'chinese',
    type: 'non-veg',
    price: '₹340',
    description: 'Boneless batter-fried chicken bites tossed with crunchy capsicum, onions, slit chillies and soy sauce.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-508',
    name: 'Chicken Lollipop (Oil Fry / Masala Szechuan)',
    category: 'chinese',
    type: 'non-veg',
    price: '₹330 / ₹360',
    description: 'Crispy fried chicken winglets served dry with hot dip or tossed in fiery red Schezwan sauce.',
    kitchen: 'non-veg'
  },

  // --- Pizza, Burgers & Fast Food ---
  {
    id: 'm-601',
    name: 'Chicken Tikka Pizza (Stone Baked)',
    category: 'pizza-fastfood',
    type: 'non-veg',
    price: '₹360',
    description: 'Crispy stone-baked base topped with tandoori chicken tikka, onions, capsicum, and mozzarella cheese.',
    isSignature: true,
    kitchen: 'non-veg'
  },
  {
    id: 'm-602',
    name: 'Veg Supreme Pizza',
    category: 'pizza-fastfood',
    type: 'veg',
    price: '₹310',
    description: 'Loaded with black olives, sweet corn, mushrooms, bell peppers, onions and mozzarella.',
    kitchen: 'veg'
  },
  {
    id: 'm-603',
    name: 'Paneer Tikka Pizza',
    category: 'pizza-fastfood',
    type: 'veg',
    price: '₹340',
    description: 'Spiced paneer tikka chunks, paprika, onions, bell peppers and molten cheese.',
    kitchen: 'veg'
  },
  {
    id: 'm-604',
    name: 'Chicken Cheese Burger',
    category: 'pizza-fastfood',
    type: 'non-veg',
    price: '₹190',
    description: 'Juicy chicken patty layered with cheddar cheese, lettuce, tomatoes and house special burger mayo.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-605',
    name: 'Chicken Tikka Panini / Veg Panini',
    category: 'pizza-fastfood',
    type: 'non-veg',
    price: '₹220 / ₹180',
    description: 'Toasted artisan ciabatta panini filled with chicken tikka or spiced veggies, cheese and herb dressing.',
    kitchen: 'non-veg'
  },
  {
    id: 'm-606',
    name: 'Alfredo White Sauce Pasta / Red Arrabiata',
    category: 'pizza-fastfood',
    type: 'veg',
    price: '₹290',
    description: 'Penne pasta tossed in rich parmesan cream sauce or spicy garlic tomato basil sauce.',
    kitchen: 'veg'
  },

  // --- Mocktails & Beverages ---
  {
    id: 'm-701',
    name: 'Electric Blue Lagoon Mocktail',
    category: 'mocktails',
    type: 'veg',
    price: '₹180',
    description: 'Refreshing blend of Blue Curacao syrup, fresh lemon juice, mint leaves and chilled Sprite.',
    isSignature: true,
    kitchen: 'veg'
  },
  {
    id: 'm-702',
    name: 'Tropical Passionfruit Sunrise',
    category: 'mocktails',
    type: 'veg',
    price: '₹190',
    description: 'Exotic passion fruit syrup, orange juice, grenadine drop and crushed ice in a tall crystal glass.',
    kitchen: 'veg'
  },
  {
    id: 'm-703',
    name: 'Classic Fresh Mint Mojito',
    category: 'mocktails',
    type: 'veg',
    price: '₹170',
    description: 'Muddled fresh garden mint, lime wedges, pure cane sugar and sparkling soda.',
    kitchen: 'veg'
  },
  {
    id: 'm-704',
    name: 'Green Apple Spritzer',
    category: 'mocktails',
    type: 'veg',
    price: '₹180',
    description: 'Crisp green apple syrup, mint, lime and fizz for an invigorating cooler.',
    kitchen: 'veg'
  },
  {
    id: 'm-705',
    name: 'Fresh Lime Soda (Sweet / Salt / Mixed)',
    category: 'mocktails',
    type: 'veg',
    price: '₹90',
    description: 'Freshly squeezed lemon with chilled soda, prepared sweet, salted, or mixed.',
    kitchen: 'veg'
  },
  {
    id: 'm-706',
    name: 'Thick Cold Coffee with Vanilla Ice Cream',
    category: 'mocktails',
    type: 'veg',
    price: '₹160',
    description: 'Rich brewed espresso blended with chilled milk and topped with rich vanilla ice cream.',
    kitchen: 'veg'
  },

  // --- Desserts ---
  {
    id: 'm-801',
    name: 'Sizzling Brownie with Vanilla Ice Cream',
    category: 'desserts',
    type: 'veg',
    price: '₹220',
    description: 'Hot walnut brownie on a smoking sizzler plate with vanilla ice cream and hot chocolate fudge.',
    kitchen: 'veg'
  },
  {
    id: 'm-802',
    name: 'Shahi Gulab Jamun with Rabdi',
    category: 'desserts',
    type: 'veg',
    price: '₹160',
    description: 'Warm, soft khoya dumplings soaked in saffron syrup, served with chilled rich rabdi.',
    kitchen: 'veg'
  },
  {
    id: 'm-803',
    name: 'Royal Kulfi Falooda',
    category: 'desserts',
    type: 'veg',
    price: '₹190',
    description: 'Traditional malai kulfi served with rose syrup, falooda sev, basil seeds and crushed pistachios.',
    kitchen: 'veg'
  }
];

// Google Reviews Dataset
const GOOGLE_REVIEWS = [
  {
    author: 'Karan Motwani',
    rating: 5,
    date: '2 weeks ago',
    text: 'Best fine dining experience in Ulhasnagar! The Chicken Dum Biryani and Sindhi Cheese Seyal Pav are must-tries. Loved the separate veg and non-veg kitchens concept.',
    avatar: 'KM'
  },
  {
    author: 'Priya Sharma',
    rating: 5,
    date: '1 month ago',
    text: 'Visited with family on UMC Road. The ambience is top class and the Butter Chicken with Garlic Naan is absolutely delicious. Fast home delivery service as well!',
    avatar: 'PS'
  },
  {
    author: 'Deepak Vazirani',
    rating: 5,
    date: '3 weeks ago',
    text: 'The Cheese Seyal Pav is out of this world! Perfect place for celebrating birthdays and family dinners. Service was warm and attentive.',
    avatar: 'DV'
  },
  {
    author: 'Anjali Ahuja',
    rating: 5,
    date: 'A month ago',
    text: 'Huge menu with Indian, Chinese, Tandoor and Pizzas. Great mocktails too. Having dedicated veg & non-veg kitchen facilities gives complete peace of mind.',
    avatar: 'AA'
  }
];
