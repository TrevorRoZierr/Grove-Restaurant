import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./(component)/(Navbar)/Navbar";
import SecNavbar from "./(component)/(SecNavbar)/SecNavbar";
import Footer from "./(component)/(Footer)/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Grove Restaurant",
  description: "What am on? -> SAINT LAURENT <-",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-josefin">
        <header>
          <Navbar />
          <SecNavbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
