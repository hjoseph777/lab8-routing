import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Replace Geist with widely available Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--geist-sans",
  display: "swap",
});

// Replace Geist Mono with JetBrains Mono
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--geist-mono",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}