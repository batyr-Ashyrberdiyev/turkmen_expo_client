import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import StoreProvider from "./StoreProvider";

import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TurkmenExpo",
  description: "",
  icons: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <StoreProvider>
        <body className={`${roboto.className}`}>{children}</body>
      </StoreProvider>
    </html>
  );
}
