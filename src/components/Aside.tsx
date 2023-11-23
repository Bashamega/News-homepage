export function Aside(){
    return(
        <aside className=" bg-[#00001a] w-[350px] p-5 text-white">
            <h1 className=" text-5xl font-extrabold text-[#e9ab53]">New</h1>
            <section className="mt-5">
                <div className=" pb-5 border-b-2 border-slate-500">
                    <a href="#" className=" hover:text-[#e9ab53] text-xl">
                        Hydrogen VS Electic Cars
                    </a>
                    <p className=" text text-slate-300">
                    Will hydrogen-fueled cars ever catch up to EVs?
                    </p>
                </div>
                <div className=" py-5 border-b-2 border-slate-500">
                    <a href="#" className=" hover:text-[#e9ab53] text-xl">
                    The Downsides of AI Artistry
                    </a>
                    <p className=" text text-slate-300">
                    What are the possible adverse effects of on-demand AI image generation?
                    </p>
                </div>
                <div className=" py-5 border-b-2 border-slate-500">
                    <a href="#" className=" hover:text-[#e9ab53] text-xl">
                    Is VC Funding Drying Up?
                    </a>
                    <p className=" text text-slate-300">
                    Private funding by VC firms is down 50% YOY. We take a look at what that means.
                    </p>
                </div>
            </section>
        </aside>
    )
}