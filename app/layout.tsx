
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DM_Sans } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teralink.example"),
  title: {
    default: "Teralink Technical Solutions | Business IT & Technology Services",
    template: "%s | Teralink Technical Solutions",
  },
  description:
    "Business IT support, network and Wi-Fi solutions, cybersecurity, cloud services and IT infrastructure for organisations.",
  icons: {
    icon: "/icons/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Teralink Technical Solutions",
    description: "Practical technology. Dependable support.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
         <WhatsAppButton />
      </body>
    </html>
  );
}