import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import AOSProvider from "@/components/AOSProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "SOLCASA — Wayanad • Highlands",
  description:
    "A peaceful homestay surrounded by the beauty of Wayanad, where green tea plantations, misty mountains, fresh air, and a calm atmosphere come together.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-surface font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-fixed w-full max-w-[100vw] overflow-x-hidden">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}

