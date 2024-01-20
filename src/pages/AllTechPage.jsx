

import amd_ryzen from "../assets/amd_ryzen_1.png";



const AllTechPage = () => {
    return (
        <div>

            <div className="flex justify-center mt-20">
                <div className="w-[50%]">
                    <div class=" pt-0.5 pb-px flex-col justify-center items-start gap-[7.50px] inline-flex">
                        <div class=" text-teal-300 text-[13px] font-normal font-['Courier New'] uppercase leading-tight tracking-widest">All Stories Tagged:</div>
                        <div class="text-white text-[111px] font-normal font-['Impact'] leading-[128px] tracking-widest">Tech</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="w-[1100px] max-[1200px]:w-[95%]">
                    <div className="max-w-[1100px] border border-slate-700 border-x-0 border-t-0 pb-5">
                        <div class="w-[902.37px] h-[85.19px] text-white text-[22px] font-normal font-['Georgia'] leading-7 max-[1200px]:w-full">The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="w-[1100px] max-[1200px]:w-[95%] flex justify-around max-[800px]:grid">
                    <div className="w-[492px] max-[1200px]:w-[44.73%] max-[800px]:w-full">
                        <div className="max-[800px]:flex max-[800px]:justify-end">
                            <img src={amd_ryzen} className="w-[492px]" />
                        </div>
                        <div className="max-[1000px]:grid max-[1000px]:justify-start">
                            <div className="flex justify-center -mt-[60px] max-[1000px]:justify-start">
                                <div className="w-[80%]">
                                    <div className="w-[75%] max-[1000px]:">
                                        <div class="text-white text-2xl font-bold font-['Arial'] leading-[35px]">Schools bought millions of Chromebooks in 2020 — and three years later, they’re starting to break</div>
                                    </div>
                                    <div class=" text-white text-xl font-normal font-['Georgia'] leading-normal tracking-tight pt-5">The US Public Interest Research Group Education Fund has found that cheap Chromebooks, due to their short lifespans and lack of repairability, are both less sustainable and more expensive for schools than pricier devices might be.</div>
                                </div>
                            </div>
                            <div className="flex justify-center pt-3">
                                <div className="flex justify-start w-[80%] gap-4 max-[1000px]:w-full">
                                    <div class=" text-teal-300 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Monica Chin</div>
                                    <div class="w-[48.65px] h-[13px] text-neutral-400 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Apr 22</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[492px] max-[1200px]:w-[44.73%] max-[800px]:w-full">
                        <div className="max-[800px]:flex max-[800px]:justify-end">
                            <img src={amd_ryzen} className="w-[492px]" />
                        </div>
                        <div className="max-[1000px]:grid max-[1000px]:justify-start">
                            <div className="flex justify-center -mt-[60px] max-[1000px]:justify-start">
                                <div className="w-[80%]">
                                    <div className="w-[75%] max-[1000px]:">
                                        <div class="text-white text-2xl font-bold font-['Arial'] leading-[35px]">AMD is quietly arming an entire new wave of Steam Deck competitors</div>
                                    </div>
                                    <div class=" text-white text-xl font-normal font-['Georgia'] leading-normal tracking-tight mt-5">With Zen 4 and RDNA 3, can these handhelds keep up?</div>
                                </div>
                            </div>
                            <div className="flex justify-center pt-3">
                                <div className="flex justify-start w-[80%] gap-4 max-[1000px]:w-full">
                                    <div class=" text-teal-300 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Sean Hollister</div>
                                    <div class=" text-neutral-400 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Apr 22</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTechPage;