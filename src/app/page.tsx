import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Center } from "@/components/center";
import CreditFooter from "@/components/Credits";
import React from "react";

export default function Home(){
  return(
    <main className=" max-w-[100vw] p-10">
      <Nav></Nav>
      <Center></Center>
      <Footer></Footer>
      <CreditFooter></CreditFooter>
    </main>
  )
}
