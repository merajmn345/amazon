import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
// import Main from "@/components/Main";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ProductFeed from "@/components/ProductFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products }) {
  return (
    <>
      <div className="bg-gray-200">
        <Header products={products} />
        <main className="max-w-screen-2xl mx-auto">
          <Banner />

          <ProductFeed products={products} />
          {/* <Main /> */}
        </main>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => {
      return res.json();
    }
  );

  return {
    props: {
      products,
    },
  };
}
