
import "./globals.css";
import type { Metadata } from "next";
import Head from 'next/head';
import { paragraphFont, titleFont } from "./fonts";
import ContactInfoBar from "./_components/Header/ContactInfoBar";
import NavbarWrapper from './_components/Header/NavbarWrapper';
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Integrative Counselling Resources",
    template: "%s | Integrative Counselling Resources",
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface childrenProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index"/>
      </Head>
      <body className="bg-white-100 w-full h-screen">
        <main className={`${titleFont.variable} ${paragraphFont.variable} flex flex-col justify-between margin-global relative`}>
            <div id="contactInfo"><ContactInfoBar /></div>
            <NavbarWrapper />
            <div id="main-content">{children}</div>
            <div id="contact"><Contact /></div>
            <div id="scrollToTopButton"><ScrollToTopButton /></div>
            <div id="footer"><Footer /></div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
