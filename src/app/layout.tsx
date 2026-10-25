import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

/* Inter — clean, readable body sans-serif. Cormorant Garamond — the serif
   face used for headings in the source PDF. Both are self-hosted by Next
   so the built site needs no runtime font request. */
const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "House of Mzozoyana — Business Profile",
    template: "%s — House of Mzozoyana",
  },
  description:
    "House of Mzozoyana is a bold, vigorous technology company that builds software systems for other businesses. We solve the operational problems most companies face: slow processes, manual work, scattered information, and lost money or opportunities.",
  keywords: [
    "House of Mzozoyana",
    "business systems",
    "software systems",
    "business automation",
    "technology company",
    "operational problems",
    "business profile",
  ],
  authors: [{ name: "House of Mzozoyana" }],
  creator: "House of Mzozoyana",
  publisher: "House of Mzozoyana",
  icons: [{ rel: "icon", url: "/logo.png", type: "image/png", sizes: "500x500" }],
  metadataBase: new URL("https://www.houseofmzozoyanaglobal.org"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "House of Mzozoyana — Business Profile",
    description:
      "House of Mzozoyana builds software systems that solve the operational problems most businesses face.",
    type: "website",
    locale: "en",
    url: "https://www.houseofmzozoyanaglobal.org",
    siteName: "House of Mzozoyana",
    images: [
      {
        url: "/logo.png",
        width: 500,
        height: 500,
        alt: "House of Mzozoyana logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col bg-black text-body antialiased">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
