import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider>
          <main className="flex flex-col h-screen">
            <Navbar />
            <div className="flex-grow">
              <Component {...pageProps} />
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
