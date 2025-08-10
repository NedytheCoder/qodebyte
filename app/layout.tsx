import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import { Oswald } from "next/font/google";

export const metadata: Metadata = {
  title: "Qodebyte",
  description: "Profit des cours informatiques abordables",
};

//Declaration of the OSWALD font for the project
const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  subsets: ["cyrillic", "cyrillic-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className={oswald.variable}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
