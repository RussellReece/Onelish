import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Onelish - English Club Satu University",
  description:
    "It's learning, but make it fun! The official website for Onelish English Club at Satu University Bandung.",
  keywords: [
    "Onelish",
    "English Club",
    "Satu University",
    "fun learning",
    "Bandung",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
