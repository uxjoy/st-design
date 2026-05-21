import { Lato } from "next/font/google";
import { Suspense } from "react";
import NavigationLoader from "../components/NavigationLoader";
import "./globals.css";

const font = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata = {
  title: "ShareTrip Icons",
  icons: {
    icon: "/favicon.svg",
  },
  image: {
    src: "/metaImg.jpg",
    alt: "ShareTrip Meta Image",
  },
  description:
    "Bangladesh's leading online travel agency. Book air tickets, hotels, tour packages & more without any hassle at the most affordable rates with ShareTrip.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className} suppressHydrationWarning>
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
