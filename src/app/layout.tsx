import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import './normalize.css';
import "./globals.css";

const maven = Maven_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce NextJS 14",
  description: "E-commerce NextJS 14 ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={maven.className}>{children}</body>
    </html>
  );
}
