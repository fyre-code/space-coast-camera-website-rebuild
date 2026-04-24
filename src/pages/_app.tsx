import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/components/layout/Layout";
import PopupModal from "@/components/PopupModal";

const NO_POPUP_ROUTES = ["/privacy", "/terms"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showPopup = !NO_POPUP_ROUTES.includes(router.pathname);

  return (
    <Layout>
      <Component {...pageProps} />
      {showPopup && <PopupModal />}
    </Layout>
  );
}
