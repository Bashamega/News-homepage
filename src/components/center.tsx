import React from "react"
import Image from "next/image"
import { Aside } from "./Aside"
export function Center(){
    return(
        <main className=" relative h-[550px]">
            <section className=" mt-5 flex space-x-2">
                <section>
                    <Image alt="banner" src="/image-web-3-desktop.jpg" width={900} height={0}></Image>
                </section>
                <Aside></Aside>  
            </section>
            <section className=" flex w-[900px] absolute top-[405px] space-x-20">
                <div className=" w-1/2">
                    <h1 className=" text-4xl font-bold">The Bright Future of Web 3.0?</h1>
                </div>
                <div>
                    <p className="text-slate-500">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p>
                <button className=" bg-[#00001a] text-white p-5 hover:bg-[#f15e50]">READ MORE</button>
                </div>
                
            </section>
        </main>
    )
}