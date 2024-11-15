import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { AuthProvider } from "./auth-provider";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"] 
});

export const metadata: Metadata = {
  title: "Transport Solution",
  description: "Your best option for transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <AuthProvider>
        {children}
        </AuthProvider>
      </body>
    </html>
  );
}
