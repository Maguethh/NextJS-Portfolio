import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "./globals.css";
import Header from "@/components/header";
import LightEffect from "@/components/light-cursor";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconBrandDiscord,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Magueth - Full Stack Developer",
  description: "Full Stack Developer based in Paris, France.",
};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },
  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Stack",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#stack",
  },
  {
    title: "Discord",
    icon: (
      <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://discord.com/users/224217349782241280",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/Maguethh",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <LightEffect />
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 mb-4 z-[101]">
          <FloatingDock items={links} />
        </div>
        {children}
      </body>
    </html>
  );
}
