import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { portfolioConfig } from "@/config/portfolio";

export const metadata: Metadata = {
  title: `${portfolioConfig.name} | ${portfolioConfig.title}`,
  description: portfolioConfig.hero.description,
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "Machine Learning",
    "GenAI",
    "NLP",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: portfolioConfig.name }],
  openGraph: {
    title: `${portfolioConfig.name} | ${portfolioConfig.title}`,
    description: portfolioConfig.hero.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
