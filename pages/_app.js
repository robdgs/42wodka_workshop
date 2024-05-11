import "@/styles/globals.css";

import Layout from "@/components/Layout"
/* import Header from "@/components"
import Footer from "@/components" */

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
   <Layout>
      <Component {...pageProps} />
    </Layout>
)
}
