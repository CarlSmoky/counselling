import type { Metadata } from "next";
import "./globals.css";
import { paragraphFont, titleFont } from "./fonts";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import ContactInfoBar from "./_components/Header/ContactInfoBar"


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
            {children}
            <Contact />
            <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
