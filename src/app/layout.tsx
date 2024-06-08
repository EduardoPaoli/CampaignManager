import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campaign Manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
          }}
        />
        <section>
          <Header siteName="CManager" />
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
          </main>
        </section>
      </body>
    </html>
  );
}
