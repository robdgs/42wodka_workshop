import React from "react";
import Header from "../Header";
import Footer from "../Footer"
import { Inter } from "next/font/google";
import Banner from "../Banner";

const inter = Inter({ subsets: ["latin"] });


const Index = () => {
	return(
		<main className={inter.className}>
		  <Header></Header>
		  <Banner scrittina={'ciao sono una prop'}></Banner>
		  <Footer></Footer>
	  </main>
	)
}

export default Index;