import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/them-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.muhammedfayazts.in"),

  title: {
    default: "Fayaz | Software Engineer",
    template: "%s | Fayaz",
  },

  description:
    "Muhammed Fayaz T S is a Software Engineer from Kerala specializing in Next.js, React, Node.js, TypeScript, and scalable web applications.",

  keywords: [
    "Fayaz Software Engineer",
    "Software Engineer Kerala",
    "Next.js Developer India",
    "React Developer Kerala",
    "Node.js Developer India",
    "Muhammed Fayaz T S",
  ],

  appleWebApp: {
    title: "Fayaz",
  },
  
  authors: [{ name: "Muhammed Fayaz T S", url: "https://www.muhammedfayazts.in" }],
  creator: "Muhammed Fayaz T S",
  publisher: "Muhammed Fayaz T S",

  openGraph: {
    title: "Fayaz | Software Engineer",
    description:
      "Portfolio of Muhammed Fayaz T S – Software Engineer specializing in Next.js, React and modern web technologies.",
    url: "https://www.muhammedfayazts.in",
    siteName: "Muhammed Fayaz T S Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fayaz | Software Engineer",
    description:
      "Portfolio of Muhammed Fayaz T S – Software Engineer specializing in Next.js, React and Node.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.muhammedfayazts.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
