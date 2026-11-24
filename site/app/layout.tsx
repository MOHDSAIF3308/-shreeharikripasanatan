import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shreeharikripasanatanseva.org"),
  title: "श्री हरि कृपा सनातन सेवा ट्रस्ट | धर्म, भक्ति और सेवा",
  description:
    "श्री हरि कृपा सनातन सेवा ट्रस्ट — धर्म, भक्ति, ज्ञान, योग एवं सनातन संस्कृति की सेवा में समर्पित।",
  keywords: [
    "श्री हरि कृपा सनातन सेवा ट्रस्ट",
    "श्रीमद्भागवत कथा",
    "श्रीरामकथा",
    "वैदिक यज्ञ",
    "योग-साधना",
    "सनातन सेवा",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shree Hari Kripa Sanatan Seva Trust",
    description: "धर्म, भक्ति, ज्ञान, योग एवं सनातन संस्कृति की सेवा में समर्पित।",
    type: "website",
    locale: "hi_IN",
    images: ["/images/temple-sunrise.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5a201c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
