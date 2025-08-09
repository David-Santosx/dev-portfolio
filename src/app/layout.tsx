import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export const metadata: Metadata = {
  title: "David Santos - Front-end Developer",
  description:
    "Portfolio of David Santos, a front-end developer specializing in creating modern and responsive web applications.",
  openGraph: {
    title: "David Santos - Front-end Developer",
    description:
      "Portfolio of David Santos, a front-end developer specializing in creating modern and responsive web applications.",
    siteName: "David Santos",
  },
};

const raleway = Raleway({
  variable: "--font-raleway",
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
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
      <body className={`${raleway.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar className="top-2" />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
