import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//Inter is a function that configures and loads the Inter font.... subsets; ["latin"] = only load latin subset 
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "My Super Cool Storefront",
  description: "Buy my stuff - you won't regret it!",
};

//React.ReactNode = represents anything react can render
//Readonly = props can't be modified. 
export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/*required for pricing table */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
//the inter font styling/function is applied to the <body> comprised of {children}