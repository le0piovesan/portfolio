import { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata = {
  title: "Portolio",
  description:
    "My personal portfolio, built with Next.js, TypeScript and TailwindCSS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
