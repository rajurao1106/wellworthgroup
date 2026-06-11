import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import Whatsapp from "@/components/layout/Whatsapp";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import StickySocials from "@/components/StickySocials";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wellworth Estate",
  description: "Wellworth Estate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Navbar />
        {children}
        <Whatsapp />
        <ScrollToTop/>
        <StickySocials/>
        <Footer />
      </body>
    </html>
  );
}
