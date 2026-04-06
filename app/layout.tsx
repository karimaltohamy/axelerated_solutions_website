import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import { Navbar, Footer } from "../components/pages/home";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-body",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "الحلول المتسارعة | حلول تقنية مبتكرة للمملكة العربية السعودية",
  description: "نقدم حلولاً متكاملة في الأمن السيبراني، مراكز البيانات، الحوسبة السحابية، والخدمات المُدارة لتمكين مستقبلنا الرقمي.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={almarai.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}