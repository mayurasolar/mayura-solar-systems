import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Mayura Solar Systems | 5+ Years of Solar Excellence in Udupi',
  description:
    'Leading solar energy solutions provider. Premium solar water heaters, panels, street lights, and renewable energy solutions in Udupi, Karnataka. 100+ satisfied customers, 200+ installations.',
  keywords: [
    'Mayura Solar Systems',
    'solar company Udupi',
    'solar water heater Udupi',
    'solar panels Karnataka',
    'solar street lights',
    'renewable energy Udupi',
    'ETC water heater',
    'solar installation Udupi',
  ],
  authors: [{ name: 'Mayura Solar Systems' }],
  openGraph: {
    title: 'About Mayura Solar Systems | Solar Energy Experts',
    description:
      'Pioneering renewable energy solutions in Udupi, Karnataka. 5+ years of experience, 100+ happy customers, and 200+ installations.',
    url: 'https://www.mayurasolar.xyz/about',
    siteName: 'Mayura Solar Systems',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'Mayura Solar Systems - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Mayura Solar Systems | 5+ Years of Solar Excellence',
    description:
      'Leading solar energy solutions provider in Udupi, Karnataka. 100+ customers, 200+ installations.',
  },
  alternates: {
    canonical: 'https://www.mayurasolar.xyz/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'Quality First',
      description:
        'We never compromise on product quality and customer satisfaction',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Innovation',
      description:
        'Constantly evolving with the latest solar technology advancements',
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: 'Sustainability',
      description:
        'Committed to protecting our environment for future generations',
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Customer Focus',
      description: 'Your needs and satisfaction are our top priority',
      icon: (
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            About{' '}
            <span className="bg-gradient-to-r from-[#0087d3] to-blue-600 bg-clip-text text-transparent">
              Mayura Solar Systems
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering quality renewable energy solutions since 2020
          </p>
        </div>
      </section>

      <AboutContent values={values} />

      <Footer />
    </div>
  );
}
