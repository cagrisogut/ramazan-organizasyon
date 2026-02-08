import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata = {
  title: "GNŞ Organizasyon - Ramazan Etkinlik Takvimi",
  description: "Ramazan ayı boyunca gerçekleşecek etkinlikler.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased text-foreground`}>
        {children}
      </body>
    </html>
  );
}
