import type { Metadata } from "next";
import { Poppins } from 'next/font/google';
import Head from "next/head";
import "./globals.css";

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Vamos LC",
  description: "Home of Bets",
};
//https://embed.tawk.to/66deb70350c10f7a00a622fa/1i7avlqa7';
const url = 'https://embed.tawk.to/66deb70350c10f7a00a622fa/1i7avlqa7';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={roboto.className}
      >
        <Head>
          <title>Vamos LC</title>
        <script src="https://embed.tawk.to/66deb70350c10f7a00a622fa/1i7avlqa7" async />
        </Head>
        {children}
      </body>
    </html>
  );
}
