





const Item2 = ({ svg, author, time, header, content, image }) => {
    return (
        <>
            <div className="max-[800px]:flex max-[800px]:flex-col max-[800px]:justify-center max-[800px]:w-full pt-[36px] pb-[37px] border border-slate-700 border-x-0 border-t-0">
                <div className="w-[623px] pl-[17px] flex max-[800px]:w-[95%]">
                    <div className="w-[38px]">
                        {svg}
                    </div>
                    <div>
                        <div className="w-full">
                            <div className="flex items-center gap-3 flex-wrap">
                                <div className="text-stone-300 text-[10px] font-bold font-['Arial'] uppercase leading-[14.30px] tracking-widest">{author}</div>
                                <div className="text-stone-300 text-[11px] font-bold font-['Arial'] uppercase leading-[14.30px] tracking-widest">{time}</div>
                                <div>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.39471 16.9752C8.02806 18.3418 5.80176 18.3418 4.43514 16.9752C3.06851 15.6085 3.06848 13.3822 4.43514 12.0156L7.19046 9.26024C8.55716 7.89359 10.7834 7.89359 12.1501 9.26024C12.2622 9.36939 12.3259 9.51874 12.327 9.67519C12.3281 9.83164 12.2664 9.98194 12.1558 10.0925C12.0453 10.2032 11.8948 10.2649 11.7386 10.2638C11.5821 10.2627 11.4326 10.199 11.3235 10.0868C10.4004 9.16379 8.94011 9.16379 8.01701 10.0868L5.26169 12.8422C4.33863 13.7652 4.33863 15.2256 5.26169 16.1486C6.18476 17.0717 7.64506 17.0715 8.56811 16.1486L11.1857 13.5309C11.2948 13.4188 11.4443 13.3552 11.6007 13.3541C11.7572 13.353 11.9075 13.4147 12.0181 13.5254C12.1286 13.636 12.1903 13.7863 12.1892 13.9427C12.1881 14.0992 12.1244 14.2485 12.0123 14.3577L9.39471 16.9752ZM14.6299 11.74C13.2632 13.1067 11.0369 13.1067 9.67026 11.74C9.55816 11.6309 9.49441 11.4817 9.49331 11.3252C9.49236 11.1688 9.55391 11.0185 9.66456 10.9079C9.77521 10.7973 9.92551 10.7356 10.0819 10.7366C10.2384 10.7377 10.3877 10.8015 10.4969 10.9136C11.4199 11.8366 12.8802 11.8366 13.8033 10.9136L16.5586 8.15824C17.4817 7.23519 17.4817 5.77489 16.5586 4.85182C15.6356 3.92876 14.1753 3.92876 13.2522 4.85182L10.6347 7.46934C10.5255 7.58149 10.376 7.64534 10.2196 7.64644C10.0632 7.64754 9.91286 7.58584 9.80221 7.47519C9.69161 7.36454 9.62991 7.21424 9.63101 7.05769C9.63206 6.90124 9.69581 6.75174 9.80806 6.64274L12.4256 4.02524C13.7923 2.65858 16.0186 2.65858 17.3852 4.02524C18.7518 5.39189 18.7519 7.61819 17.3852 8.98479L14.6299 11.74Z" fill="#636363" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <span className="text-zinc-100 text-[17px] font-bold font-['Arial'] leading-snug">{header}&nbsp;</span>
                                <span className="text-zinc-100 text-base font-normal font-['Georgia'] leading-tight">
                                    {content}
                                </span>
                            </div>
                        </div>
                        {
                            image &&
                            (
                                <div className="max-w-[398px] max-h-[373px] border border-slate-700 mt-10">
                                    <img src={image} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item2;