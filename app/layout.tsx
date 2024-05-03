import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photos by Seed",
  description: "Photos by Seed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${inter.className}`}>
        <header className="text-gray-600 body-font bg-gray-100">
          <NavBar />
        </header>
        <main className="flex flex-auto mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
