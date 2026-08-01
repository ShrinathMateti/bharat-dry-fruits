import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bharat Dry Fruits | Pure Quality, Premium Grade Nuts & Dry Fruits",
  description:
    "Export-quality Mamra almonds, king-size cashews, Afghan pistachios, Arabian dates and festive gift hampers. Direct wholesale & bulk inquiries across India — no checkout, just genuine quality.",
  keywords: [
    "dry fruits India",
    "wholesale almonds",
    "premium cashews",
    "dry fruit gift hampers",
    "bulk dry fruits supplier",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-ivory text-charcoal antialiased">{children}</body>
    </html>
  );
}
