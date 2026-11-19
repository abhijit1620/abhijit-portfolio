import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const description =
  "Full-stack & AI developer. I build production web and mobile apps (Flutter, Django, Next.js, AWS) and AI systems (LLM fine-tuning, RAG, computer vision).";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "https://abhijit1620.github.io/abhijit-portfolio/"),
  title: "Abhijit Sharma · Full-Stack & AI Developer",
  description,
  openGraph: {
    title: "Abhijit Sharma · Full-Stack & AI Developer",
    description,
    images: [{ url: "og.png", width: 1200, height: 675 }],
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["og.png"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      style={{ scrollBehavior: "smooth" }}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
