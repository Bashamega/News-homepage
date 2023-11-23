import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Center } from "@/components/center";
import React from "react";
export default function Home(){
  return(
    <main className=" max-w-[100vw] p-10">
      <Nav></Nav>
      <Center></Center>
      <Footer></Footer>
    </main>
  )
}