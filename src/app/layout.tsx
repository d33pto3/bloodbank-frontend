import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { AuthProvider } from "./contexts/AuthContexts";

export const metadata: Metadata = {
  title: "Bloodbank",
  description: "A blood donating site",
};

const poppins = Poppins({ subsets: ["devanagari"], weight: ["400", "500"] });
console.log(poppins.className);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-[#D9D9D9]">
        <div className={`${poppins.className} flex flex-col min-h-screen`}>
          <AuthProvider>
            <Navbar />
            <main className={`flex-grow overflow-y-auto`}>{children}</main>
            <Footer />
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
