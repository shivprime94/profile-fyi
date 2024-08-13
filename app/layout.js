import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from './_components/navBar';
import { CartProvider } from './_context/cartContext';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-Commerce Page",
  description: "Profile.FYI Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <NavBar />
          <main className="container mx-auto p-6">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}

