import { RESTAURANT_DATA } from '@/data/restaurant';

export function getRestaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: RESTAURANT_DATA.brand.fullName,
    image: [
      'https://miilaanofinedine.com/images/hero-dining.jpg',
      'https://miilaanofinedine.com/images/dish-main.jpg',
      'https://miilaanofinedine.com/images/dish-dessert.jpg',
    ],
    '@id': 'https://miilaanofinedine.com',
    url: 'https://miilaanofinedine.com',
    telephone: RESTAURANT_DATA.contact.phone,
    priceRange: '₹₹₹',
    menu: 'https://miilaanofinedine.com/menu',
    servesCuisine: ['Fine Dining', 'Contemporary Indian', 'Gourmet Fusion', 'Artisanal Desserts'],
    acceptsReservations: 'True',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${RESTAURANT_DATA.location.addressLine1}, ${RESTAURANT_DATA.location.addressLine2}`,
      addressLocality: RESTAURANT_DATA.location.city,
      addressRegion: RESTAURANT_DATA.location.state,
      postalCode: RESTAURANT_DATA.location.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.2305221,
      longitude: 73.1565853,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '12:00',
        closes: '23:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '00:00',
      },
    ],
    sameAs: [
      RESTAURANT_DATA.contact.instagramUrl,
      RESTAURANT_DATA.contact.facebookUrl,
    ],
    hasMenu: {
      '@type': 'Menu',
      name: 'MIILAANO Fine Dine Menu',
      url: 'https://miilaanofinedine.com/menu',
      hasMenuItem: RESTAURANT_DATA.menuItems.slice(0, 10).map((item) => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.price.replace(/[^0-9]/g, ''),
          priceCurrency: 'INR',
        },
      })),
    },
  };
}
