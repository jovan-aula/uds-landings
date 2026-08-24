import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-heebo",
});

export const metadata: Metadata = {
  title: "UDS · Mi Universidad",
  description: "Formación con propósito, impacto que trasciende.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`h-full ${heebo.variable}`}>
      <body className="min-h-full flex flex-col antialiased font-[family-name:var(--font-heebo)]">{children}</body>
    </html>
  );
}
