




const Item1 = ({ svg, name, content, author, time, image }) => {
    return (
        <>
            <div className="max-[800px]:flex max-[800px]:justify-center pb-[41px] pt-[40px] border border-slate-700 border-x-0 border-t-0 ">
                <div className="w-[620px] ml-[20px] flex items-center max-[800px]:w-[95%] max-[800px]:m-0 max-[800px]:">

                    <div className="w-[38px] max-[800px]:hidden max-[700px]:w-0">
                        <div className="w-fit border border-[#3CFFD0] border-y-0 border-l-0 border-r-2" >
                            {svg}
                        </div>
                    </div>

                    <div className="w-full flex justify-between items-center">

                        <div className="max-[800px]:w-[60%]">
                            <div className="min-[800px]:[h-0] min-[800px]:hidden max-[800px]:h-3.5 mb-2 h-fit w-fit border border-[#3CFFD0] border-x-0 border-t-0">
                                <div class="text-stone-300 text-[10px] font-bold font-['Arial'] uppercase leading-[13.20px] tracking-widest">
                                    {name}
                                </div>
                            </div>
                            <div>

                                <div className="max-w-[360px]">
                                    <div class="text-white text-2xl font-bold font-['Arial'] leading-[25px] tracking-tight">
                                        {content}
                                    </div>
                                </div>

                                <div className="flex gap-2 pt-3">
                                    <div class="text-teal-300 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">
                                        {author}
                                    </div>
                                    <div class="text-neutral-400 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">
                                        {time}
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="max-w-[198px] max-[800px]:w-[30%]">
                            <img src={image} className="" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Item1;