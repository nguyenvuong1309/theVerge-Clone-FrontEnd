




const Top_Stories_Item = ({ number, content, author, logo, time, width, height, props }) => {
    console.log("🚀 ~ logo:", props)
    return (
        <div className="mt-[16px] mb-[17px] w-[380px]  flex items-start">
            <div className='w-[40px]'>
                <div class="w-5 h-5 pt-[2.75px] pb-[4.25px] bg-zinc-800 bg-opacity-90 rounded-full justify-center items-center inline-flex">
                    <div class="w-[4.43px] h-[13px] text-teal-300 text-[11px] font-normal font-['Helvetica'] leading-none flex justify-center items-center">{number}</div>
                </div>
            </div>
            <div>
                <div className="w-[240px] font-['Helvetica'] font-bold text-xl text-white leading-none tracking-tight">
                    {content}
                </div>
                <div className="font-normal font-['Helvetica'] uppercase  tracking-widest mt-2">
                    <div className='text-teal-300 text-[10px]'>
                        {author}
                    </div>
                    <div className='flex gap-2'>
                        {/* <div className='text-[#BDBDBD] text-[11px] ml-1'>AND</div>
                        <div className='text-teal-300 text-[10px]'>EMMA ROTH</div> */}
                        <div className="text-neutral-400 text-[11px] font-normal font-['Helvetica'] uppercase leading-none tracking-widest">{time}</div>
                    </div>
                </div>
            </div>
            <div>
                <img src={logo} className='w-[100px] h-[80px] object-fill' />
            </div>
        </div>
    )
}

export default Top_Stories_Item;