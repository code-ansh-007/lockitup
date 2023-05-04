import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <main className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
    </>
  );
}
