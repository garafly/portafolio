import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const glacialIndifference = localFont({
  src: [
    {
      path: "../public/fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/glacial-indifference.bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Garafly Portfolio",
  description: "Portfolio of Sara Garcia Rosado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={glacialIndifference.variable}>{children}</body>
    </html>
  );
}