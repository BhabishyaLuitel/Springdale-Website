import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://springdale-lovat.vercel.app"),
  title: {
    default: "Shree Springdale Secondary School | Sipadol-8, Bhaktapur",
    template: "%s | Shree Springdale Secondary School",
  },
  description:
    "Shree Springdale Secondary School, Sipadol-8, Bhaktapur — Education is the Enlightenment of Mind. Quality education with boarding facilities since 2044 B.S.",
  keywords: [
    "Shree Springdale Secondary School",
    "SESBS",
    "school Bhaktapur",
    "boarding school Nepal",
    "best school Bhaktapur",
    "Sipadol Bhaktapur",
    "education Nepal",
  ],
  openGraph: {
    title: "Shree Springdale Secondary School",
    description:
      "Education is the Enlightenment of Mind — Quality education with boarding facilities in Sipadol-8, Bhaktapur since 2044 B.S.",
    type: "website",
    locale: "en_US",
    siteName: "Shree Springdale Secondary School",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased w-full overflow-x-hidden relative bg-[#F8FAFC]">
        {/* Global background removed for cleaner aesthetic */}

        <Navbar />
        <main className="w-full overflow-hidden relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
