import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cedar Core | Digital Excellence",
  description:
    "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences. Web development, mobile apps, and more.",
  icons: {
    icon: "/logo-dark.png",
    shortcut: "/logo-dark.png",
    apple: "/logo-dark.png",
  },
  openGraph: {
    title: "Cedar Core | Digital Excellence",
    description:
      "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences.",
    images: [
      {
        url: "/logo-dark.png",
        width: 512,
        height: 512,
        alt: "Cedar Core Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cedar Core | Digital Excellence",
    description:
      "Cedar Core delivers innovative software solutions that transform ideas into powerful digital experiences.",
    images: ["/logo-dark.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
