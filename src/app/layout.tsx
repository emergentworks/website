import type { Metadata } from "next";
import { ibmPlexSans, ibmPlexMono } from "./fonts";
import "styles/main.scss";

export const metadata: Metadata = {
  title: "Emergent Works",
  description: "Emergent Works Site",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
