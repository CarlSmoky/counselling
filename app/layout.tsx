import "./globals.css";
import type { Metadata } from "next";
import { paragraphFont, titleFont } from "./fonts";
import ContactInfoBar from "./_components/Header/ContactInfoBar";
import Navbar from "./_components/Header/Navbar";
import Contact from "./_components/Contact";
import ScrollToTopButton from "./_components/ScrollToTopButton";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Integrative Counselling Resources",
    template: "%s | Integrative Counselling Resources",
  },
  description: "Hi! I am Bo Yih Thom, Registered Social Worker, Psychotherapist, and Clinical Supervisor that is based on racial liberation and anti-oppression principles in Toronto",
};

interface childrenProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<childrenProps> = ({ children }: childrenProps) => {
  return (
    <html lang="en">
      <body className="bg-white-100 w-full h-screen">
        <main className={`${titleFont.variable} ${paragraphFont.variable} margin-global relative`}>
            <ContactInfoBar />
            <Navbar />
            {children}
            <Contact />
            <ScrollToTopButton />
            <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
