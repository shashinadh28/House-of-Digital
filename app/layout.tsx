import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const reem_Kufi = localFont({
  src: [
    {
      path: "/fonts/ReemKufi-Regular.ttf",
      weight: "200",
    },
    {
      path: "/fonts/ReemKufi-Medium.ttf",
      weight: "400",
    },
    {
      path: "/fonts/ReemKufi-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "/fonts/ReemKufi-Bold.ttf",
      weight: "800",
    },
  ],
});

export const metadata: Metadata = {
  title: "House of Digital Growth",
  description: "One Stop Solution for all your Digital Needs",
  keywords: [
    "Digital Growth",
    "SEO",
    "Marketing",
    "Web Development",
    "Digital Solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title: "House of Digital Growth",
    description: "One Stop Solution for all your Digital Needs",
    type: "website",
    url: "https://www.houseofdigitalgrowth.com",
    images: [
      {
        url: "https://www.houseofdigitalgrowth.com/images/hodg-preview.png",
        width: 1200,
        height: 630,
        alt: "House of Digital Growth",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${reem_Kufi.className} antialiased scroll-smooth`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
