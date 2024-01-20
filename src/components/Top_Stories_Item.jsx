import { useNavigate } from "react-router-dom";





const Top_Stories_Item = ({ number, content, author, logo, time, width, height, props, border }) => {
    const navigate = useNavigate();
    return (
        <div className="w-[380px]  flex items-start " onClick={() => navigate("/detailpage")}>
            <div className='w-[40px] pt-[16px] pb-[17px]'>
                <div class="w-5 h-5 pt-[2.75px] pb-[4.25px] bg-zinc-800 bg-opacity-90 rounded-full justify-center items-center inline-flex">
                    <div class="w-[4.43px] h-[13px] text-teal-300 text-[11px] font-normal font-['Helvetica'] leading-none flex justify-center items-center">{number}</div>
                </div>
            </div>
            <div className={`flex pt-[16px] pb-[17px]  ${border ? ' border border-[#313131CC] border-b-1 border-x-0 border-t-0' : ''}`}>
                <div>
                    <div className="w-[240px] font-['Helvetica'] font-bold text-xl text-white leading-none tracking-tight hover:underline hover:underline-offset-[4px] decoration-[0.9px] decoration-[#3CFFD0]">
                        {content}
                    </div>
                    <div className="font-normal font-['Helvetica'] uppercase  tracking-widest mt-2">
                        <div className='text-teal-300 text-[10px] hover:underline hover:underline-offset-[2px] decoration-[0.9px] decoration-[#3CFFD0]'>
                            {author}
                        </div>
                        <div className='flex gap-2'>
                            <div className="text-neutral-400 text-[11px] font-normal font-['Helvetica'] uppercase leading-none tracking-widest">{time}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={logo} className='w-[100px] h-[80px] object-fill' />
                </div>
            </div>
        </div>
    )
}

export default Top_Stories_Item;