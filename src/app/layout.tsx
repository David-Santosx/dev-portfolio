import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Santos - Frontend Developer",
  description:
    "Portfolio of David Santos, a frontend developer specializing in creating modern and responsive web applications.",
  openGraph: {
    title: "David Santos - Frontend Developer",
    description:
      "Portfolio of David Santos, a frontend developer specializing in creating modern and responsive web applications.",
    siteName: "David Santos",
  },
};

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}
