import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qodebyte Tech Academy - Learn Software Development, AI, Web Development",
  description: "Master modern tech skills with Qodebyte Academy. Learn web development, AI, Python, cybersecurity, and more with expert instructors and hands-on projects. Start your tech career today!",
  keywords: [
    "coding bootcamp",
    "software development",
    "web development",
    "AI programming",
    "Python course",
    "cybersecurity training",
    "tech academy",
    "programming courses",
    "coding school",
    "software engineering"
  ],
  authors: [{ name: "Qodebyte Tech Academy" }],
  creator: "Qodebyte Tech Academy",
  publisher: "Qodebyte Tech Academy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://qodebyte.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Qodebyte Tech Academy - Learn Software Development & AI",
    description: "Master modern tech skills with expert instructors. Learn web development, AI, Python, cybersecurity, and more with hands-on projects.",
    url: 'https://qodebyte.com',
    siteName: 'Qodebyte Tech Academy',
    images: [
      {
        url: '/imgs/pexels-fauxels-3182774.jpg',
        width: 1200,
        height: 630,
        alt: 'Qodebyte Tech Academy - Modern Learning Environment',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Qodebyte Tech Academy - Learn Software Development & AI",
    description: "Master modern tech skills with expert instructors. Learn web development, AI, Python, cybersecurity, and more with hands-on projects.",
    images: ['/imgs/pexels-fauxels-3182774.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
