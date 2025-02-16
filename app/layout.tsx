import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";
import ReduxProvider from "@/components/redux-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expense Tracker Enhanced",
  description: "Improve your budget!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        <Header />
        <div className="flex flex-col flex-1 w-full max-w-4xl">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
