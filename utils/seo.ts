import { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from './constants';

type SeoParams = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
};

/**
 * Génère les métadonnées SEO pour une page
 */
export function generateMetadata({
  title,
  description = APP_DESCRIPTION,
  image = '/images/og-image.png',
  url,
  noIndex = false,
}: SeoParams = {}): Metadata {
  const fullTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: image }],
      ...(url && { url }),
      type: 'website',
      locale: 'fr_FR',
      siteName: APP_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}
