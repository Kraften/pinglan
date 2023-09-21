import {
  VT323,
  Inter,
  Montserrat,
  Montserrat_Alternates,
  Montserrat_Subrayada,
  Inconsolata,
} from "next/font/google";
import localFont from "next/font/local";

export const superFont = localFont({
  src: "../public/super.ttf",
  variable: "--font-super",
});

export const inter = Inter({ subsets: ["latin"], weight: "400" });
export const vt323 = VT323({ subsets: ["latin"], weight: "400" });
export const montserrat_medium = Montserrat({
  subsets: ["latin"],
  weight: "500",
});
export const montserrat_semiBold = Montserrat({
  subsets: ["latin"],
  weight: "600",
});
export const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

export const montserrat_subrayada = Montserrat_Subrayada({
  subsets: ["latin"],
  weight: "400",
});

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: "400",
});

export const montserrat_alternates_header = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "500",
});
