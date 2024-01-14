


const MostPopularItem = ({ number, border, content, author, time }) => {
    return (
        <div className={` w-[320px] mb-[20px]  flex items-start ${border ? ' border border-[#3CFFD0 ] border-b-1 border-x-0 border-t-0' : ''}`}>
            <div className='w-[28px]'>
                <div class="w-5 h-5 pt-[2.75px] pb-[4.25px] bg-zinc-800 bg-opacity-90 rounded-full justify-center items-center inline-flex">
                    <div class="w-[4.43px] h-[13px] text-teal-300 text-[11px] font-normal font-['Helvetica'] leading-none flex justify-center items-center">{number}</div>
                </div>
            </div>
            <div className={`flex w-full mb-[20px]`}>
                <div>
                    <div className="pr-[32px] text-white text-lg font-normal font-['Helvetica'] leading-tight tracking-tight  hover:text-[#3CFFD0]">
                        {content}
                    </div>
                    <div className="font-normal flex justify-start gap-2 items-center font-['Helvetica'] uppercase  tracking-widest mt-2">
                        <div className='text-teal-300 text-[10px] hover:underline hover:underline-offset-[2px] decoration-[0.9px] decoration-[#3CFFD0]'>
                            {author}
                        </div>
                        <div className='flex gap-2'>
                            <div className="text-neutral-400 text-[11px] font-normal font-['Helvetica'] uppercase leading-none tracking-widest">{time}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostPopularItem;