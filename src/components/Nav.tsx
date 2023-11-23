import React from "react"
import Image from "next/image"
export function Nav(){
    return(
        <nav className=" flex items-center">
            <Image src="logo.svg" alt="logo" width={65} height={40}></Image>
            <div className=" ml-[60%] space-x-3">
                <a href="#" className=" hover:text-[#f15e50]">Home</a>
                <a href="#" className=" hover:text-[#f15e50]">New</a>
                <a href="#" className=" hover:text-[#f15e50]">Popular</a>
                <a href="#" className=" hover:text-[#f15e50]">Trending</a>
                <a href="#" className=" hover:text-[#f15e50]">Categories</a>
            </div>
        </nav>
    )
}