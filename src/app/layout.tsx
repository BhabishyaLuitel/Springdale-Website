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
        {/* Global Abstract Background for Glassmorphism */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gold/15 rounded-full blur-[120px] mix-blend-multiply animate-float" />
          <div className="absolute top-[30%] right-[-10%] w-[60vw] h-[60vw] bg-primary/10 rounded-full blur-[150px] mix-blend-multiply animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-[-20%] left-[15%] w-[50vw] h-[50vw] bg-gold-500/10 rounded-full blur-[120px] mix-blend-multiply animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <Navbar />
        <main className="w-full overflow-hidden relative z-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
