import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "foresee",
  description: "Your success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
