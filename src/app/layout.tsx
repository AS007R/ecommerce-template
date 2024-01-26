import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ASR Mart",
  description: "E-Commerce Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="px-4 sm:px-6 lg:px-8 max-w-[1345px] m-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
