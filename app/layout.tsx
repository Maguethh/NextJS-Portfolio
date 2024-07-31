import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import Header from "@/components/header";
import LightEffect from "@/components/light-cursor";

export const metadata: Metadata = {
  title: "Magueth - Full Stack Developer",
  description: "Full Stack Developer based in Paris, France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <LightEffect />
        {children}
      </body>
    </html>
  );
}
