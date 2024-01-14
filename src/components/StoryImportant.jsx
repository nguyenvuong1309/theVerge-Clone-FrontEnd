




const StoryImportant = ({ border, logo, content, author, time, image }) => {
    return (
        <div className={`w-[500px] px-[10px] pt-[30px] pb-[31px] hover:bg-slate-100 hover:bg-opacity-5 flex  ${border ? '  border border-[#313131CC] border-b-1 border-x-0 border-t-0  ' : ''}`}>
            <div className="w-[60px] flex justify-center items-center">{logo}</div>
            <div className="w-[320px]">
                <div class="w-full text-white text-2xl font-bold font-['Helvetica'] leading-[25px] tracking-tight pr-[10px]  hover:underline hover:underline-offset-[3px] decoration-[0.9px] decoration-[#3CFFD0]">{content}</div>
                <div className="flex gap-1 pt-2">
                    <div class="w-[79.28px] h-[13px] text-teal-300 text-[10px] font-normal font-['Helvetica'] uppercase leading-none tracking-widest">{author}</div>
                    <div class="w-[105.87px] h-[13px] text-neutral-400 text-[11px] font-normal font-['Helvetica'] uppercase leading-none tracking-widest">{time}</div>
                </div>
            </div>
            <div className="w-[22]"></div>
            <img className="w-[98px] h-[98px] object-fill" src={image} />
        </div>
    )
}

export default StoryImportant;