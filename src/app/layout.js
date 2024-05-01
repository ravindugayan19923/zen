import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Head from "next/head";
import React from "react";
import { GoogleAnalytics } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });
const env = process.env
export const metadata = {
  icon: `${env.IMAGE_URL}images/favicon.ico`,
  title: "Zenex Solutions | Software Company",
  description: "Zenex Solutions is a leading Sri Lankan software company, specializing in innovative business solutions. Delivering high-quality software products and services.",
  keywords: "zenex solutions, zenex, zenexsltns, software company, web applications, software, software development, technology solutions, software company sri lanka, mobile development, java, mysql, spring framework, next.js, react, nest.js, mongodb, typescript",
  twitter: {
    images: `${env.IMAGE_URL}images/logo.png`,
  },
  openGraph: {
    siteName: "Zenex Solutions",
    title: "Zenex Solutions | Software Company",
    description: "Zenex Solutions is a leading Sri Lankan software company, specializing in innovative business solutions. Delivering high-quality software products and services.",
    type: "website",
    url: "https://zenexsltns.com",
    images: `${env.IMAGE_URL}images/logo.png`,
  },
  alternates: {
    canonical: "https://zenexsltns.com",
  },
  robots: "https://zenexsltns.com/robots.txt"

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
      <meta charSet="utf-8"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <link href={`${env.IMAGE_URL}images/apple-touch-icon.png`} rel="apple-touch-icon"/>
      <GoogleAnalytics gaId={"G-EDKMMZ0N6V"}/>
      <meta name="robots" content="index, follow"/>
      <meta name="googlebot" content="index, follow"/>
      <meta name="p:domain_verify" content="fc6708bdbbaa8b83294b91b8b28775f3"/>
      <script type="application/ld+json">
        {`
                {
                    "@type": "Organization",
                    "name": "Zenex Solutions",
                    "url": "https://zenexsltns.com",
                    "logo": "https://storage.googleapis.com/zenexweb/images/logo.png"
                }
                `}
      </script>
    </Head>
    <body className={inter.className} id={'root'}>

    <main>
      <Header/>
      {children}
      <Footer/>
    </main>
    </body>

    </html>
  );
}
