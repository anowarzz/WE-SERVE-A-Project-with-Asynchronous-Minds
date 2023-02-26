import AuthProvider from "@/contexts/AuthProvider";
import Footer from "@/Shared/Footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
      <Component {...pageProps} />
      <Footer></Footer>
      </>
    </AuthProvider>
  );
}
