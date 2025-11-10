// Product Schema for SEO

export interface ProductData {
  id: number;
  name: string;
  description: string;
  category: string;
  features: string[];
  image: string;
}

export function generateProductsSchema(products: ProductData[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        '@id': `https://www.mayurasolar.xyz/products#${product.id}`,
        name: product.name,
        description: product.description,
        image: `https://www.mayurasolar.xyz${product.image}`,
        brand: {
          '@type': 'Brand',
          name: 'Mayura Solar Systems',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR',
          seller: {
            '@type': 'Organization',
            name: 'Mayura Solar Systems',
          },
        },
        category: product.category,
      },
    })),
  };
}

export function generateSingleProductSchema(
  product: ProductData,
  price?: number,
  warranty?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `https://www.mayurasolar.xyz/products#${product.id}`,
    name: product.name,
    description: product.description,
    image: `https://www.mayurasolar.xyz${product.image}`,
    brand: {
      '@type': 'Brand',
      name: 'Mayura Solar Systems',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Mayura Solar Systems',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      ...(price && { price: price.toString() }),
      seller: {
        '@type': 'Organization',
        name: 'Mayura Solar Systems',
        url: 'https://www.mayurasolar.xyz',
      },
    },
    category: product.category,
    ...(warranty && {
      warranty: {
        '@type': 'WarrantyPromise',
        durationOfWarranty: {
          '@type': 'QuantitativeValue',
          value: warranty,
        },
      },
    }),
    additionalProperty: product.features.map(feature => ({
      '@type': 'PropertyValue',
      name: 'Feature',
      value: feature,
    })),
  };
}
