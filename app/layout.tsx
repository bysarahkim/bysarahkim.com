import type { Metadata } from "next";
import "./globals.css";

const title = "Sarah Kim — Housing, Social Stratification & Urban Research";
const description =
  "Sarah Kim is an urban researcher studying housing, social stratification, displacement, housing stigma, and urban inequality through mixed methods.";

export const metadata: Metadata = {
  metadataBase: new URL("https://bysarahkim.com"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://bysarahkim.com",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Sarah Kim — Urban Research",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
