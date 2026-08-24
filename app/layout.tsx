import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UDS · Mi Universidad",
  description: "Formación con propósito, impacto que trasciende.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
