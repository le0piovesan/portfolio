import { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Portolio",
  description:
    "My personal portfolio, built with Next.js, TypeScript and TailwindCSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 font-sans text-gray-100">{children}</body>
    </html>
  );
}
