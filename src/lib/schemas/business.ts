// Enhanced LocalBusiness Schema with SEO optimization

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.mayurasolar.xyz/#business',
    name: 'Mayura Solar Systems',
    alternateName: 'Mayura Solar',
    description:
      'Leading solar energy solutions provider in Udupi, Karnataka. Specializing in solar water heaters, solar panels, street lights, and renewable energy systems since 2003.',
    url: 'https://www.mayurasolar.xyz',
    logo: 'https://www.mayurasolar.xyz/images/logo.svg',
    image: 'https://www.mayurasolar.xyz/images/peacock-icon.svg',
    telephone: '+91-63635-37253',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-24A, Mathibettu Varanga, Muniyalu Post',
      addressLocality: 'Udupi',
      addressRegion: 'Karnataka',
      postalCode: '574108',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.3409,
      longitude: 74.7421,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-63635-37253',
      contactType: 'Sales',
      areaServed: ['IN-KA'],
      availableLanguage: ['English', 'Hindi', 'Kannada', 'Tulu'],
    },
    sameAs: [
      // Add social media profiles when available
    ],
    areaServed: [
      {
        '@type': 'City',
        name: 'Udupi',
      },
      {
        '@type': 'City',
        name: 'Mangalore',
      },
      {
        '@type': 'City',
        name: 'Manipal',
      },
      {
        '@type': 'City',
        name: 'Karkala',
      },
      {
        '@type': 'City',
        name: 'Kundapura',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'Mayura Solar Systems Founder',
    },
    foundingDate: '2003',
    slogan: 'Powering Your Future with Clean Energy',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.mayurasolar.xyz/#organization',
    name: 'Mayura Solar Systems',
    url: 'https://www.mayurasolar.xyz',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.mayurasolar.xyz/images/logo.svg',
      width: 250,
      height: 60,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-63635-37253',
      contactType: 'Customer Service',
      email: 'mayurasolar.sys@gmail.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi', 'Kannada'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2-24A, Mathibettu Varanga, Muniyalu Post',
      addressLocality: 'Udupi',
      addressRegion: 'Karnataka',
      postalCode: '574108',
      addressCountry: 'IN',
    },
  };
}
