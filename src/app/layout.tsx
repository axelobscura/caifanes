import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOS CAIFANES | banda de rock mexicana",
  description: "Caifanes es una banda de rock mexicana formada en la Ciudad de México en 1986. El grupo logró éxito comercial a finales de los 80 y principios de los 90. La formación original de integrantes estaba formada por Saúl Hernández, Sabo Romo, Alfonso André y Diego Herrera. Posteriormente se incorporó Alejandro Marcovich como guitarrista principal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
