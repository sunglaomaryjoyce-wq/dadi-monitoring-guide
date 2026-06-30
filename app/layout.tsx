import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GuideChatbot from "@/components/GuideChatbot";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: site.name,
  description: site.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <GuideChatbot />
        <Footer />
      </body>
    </html>
  );
}
