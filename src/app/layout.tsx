import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100,000 Trump Supporters — The Mosaic",
  description:
    "Join 100,000 supporters. Pay $2, upload your face, and become part of a historic mosaic portrait of Donald Trump.",
  openGraph: {
    title: "100,000 Trump Supporters — The Mosaic",
    description:
      "Be part of a once-in-a-lifetime portrait. 100,000 supporters. One monumental gift.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
