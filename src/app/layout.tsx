import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const korataki = localFont({
  src: "../../public/fonts/korataki_extrabold.otf",
  variable: "--font-korataki",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full Torx | Website Development Studio",
  description:
    "Full Torx is an interaction design and product studio building high-performance websites and digital products.",
  openGraph: {
    title: "Full Torx",
    description:
      "Interaction design and product services for modern web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${korataki.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
