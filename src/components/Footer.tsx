import Image from "next/image"
export function Footer(){
    return(
        <footer className=" relative flex space-x-5">
            <section className="flex space-x-2">
                <div>
                    <Image src="/image-retro-pcs.jpg" alt="retro pcs" width={150} height={0}></Image>
                </div>
                <div className="w-[250px]">
                    <h1 className=" text-gray-400 text-7xl">01</h1>
                    <h2 className="  text-3xl cursor-pointer hover:text-[#f15e50]">Reviving Retro PCs</h2>
                    <p className="text-gray-600">What happens when old PCs are given modern upgrades?</p>
                </div>
            </section>
            <section className="flex space-x-2">
                <div>
                    <Image src="/image-top-laptops.jpg" alt="top laptops" width={150} height={0}></Image>
                </div>
                <div className="w-[250px]">
                    <h1 className=" text-gray-400 text-7xl ">02</h1>
                    <h2 className="  text-3xl cursor-pointer hover:text-[#f15e50]">Top 10 Laptops of 2022</h2>
                    <p className="text-gray-600">Our best picks for various needs and budgets.</p>
                </div>
            </section>
            <section className="flex space-x-2">
                <div>
                    <Image src="/image-retro-pcs.jpg" alt="retro pcs" width={150} height={0}></Image>
                </div>
                <div className="w-[250px]">
                    <h1 className=" text-gray-400 text-7xl">03</h1>
                    <h2 className="  text-3xl cursor-pointer hover:text-[#f15e50]">The Growth of Gaming</h2>
                    <p className="text-gray-600">How the pandemic has sparked fresh opportunities.</p>
                </div>
            </section>
        </footer>
    )
}