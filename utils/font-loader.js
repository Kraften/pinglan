import { VT323, Inter } from "next/font/google";
import localFont from "next/font/local";

export const superFont = localFont({
  src: "../public/super.ttf",
  variable: "--font-super",
});
export const inter = Inter({ subsets: ["latin"], weight: "400" });
export const vt323 = VT323({ subsets: ["latin"], weight: "400" });
