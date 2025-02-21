import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/main_section/navbar";
import Footer from "@/app/main_section/footer";
import WhatsApp from "./main_section/whatsAppPop";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body className={`font-poppins antialiased transition-all`}>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}
