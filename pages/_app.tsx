import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Red_Hat_Text } from "next/font/google";

const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={redHatText.className}>
      <Component {...pageProps} />
    </main>
  );
}
