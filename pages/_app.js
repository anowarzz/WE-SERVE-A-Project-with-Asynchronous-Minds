import AuthProvider from "@/contexts/AuthProvider";
import Footer from "@/Shared/Footer/Footer";
import Navbar from "@/Shared/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
      <Navbar />
      <Component {...pageProps} />
      <Footer></Footer>
      </>
    </AuthProvider>
  );
}
