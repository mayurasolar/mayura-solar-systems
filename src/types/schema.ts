export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  address?: {
    '@type': string;
    addressLocality?: string;
    addressRegion?: string;
    addressCountry?: string;
  };
  contactPoint?: {
    '@type': string;
    telephone?: string;
    contactType?: string;
  };
  sameAs?: string[];
}

export interface ProductSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  brand?: {
    '@type': string;
    name: string;
  };
  offers?: {
    '@type': string;
    availability?: string;
    priceCurrency?: string;
  };
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export interface WebPageSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  publisher?: {
    '@type': string;
    name: string;
  };
}
