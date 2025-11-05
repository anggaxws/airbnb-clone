import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import ClientOnly from "./components/Navbar/ClientOnly";
import RegisterModal from "./components/Modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import { Metadata } from "next";
import LoginModal from "./components/Modals/LoginModal";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb-clone by Wibisono",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar/>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
