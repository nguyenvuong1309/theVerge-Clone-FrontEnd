



const TodayStoriesItem = ({ border, author, time, content, summary, origin }) => {

    return (
        <div className={`w-[500px] pt-[24px] pr-[10px] pb-[25px] pl-[7px]  hover:bg-slate-100 hover:bg-opacity-5 flex ${border ? ` border border-[#313131CC] border-b-1 border-x-0 border-t-0 ` : ' '} text-white`}>
            <div className="w-[38px]">
                <svg width="25" height="51" viewBox="0 0 25 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame">
                        <g id="Layer 2">
                            <g id="Layer 1">
                                <path id="Vector" d="M19.9861 29.6111C16.7746 26.8659 16.7746 23.9032 19.9861 21.158C21.8533 19.5654 23.1871 17.4388 23.8077 15.0649C24.4283 12.6909 24.306 10.1838 23.4571 7.88152C22.6082 5.57925 21.0736 3.59256 19.0603 2.1893C17.0469 0.78604 14.6516 0.0336914 12.1973 0.0336914C9.74293 0.0336914 7.34761 0.78604 5.33425 2.1893C3.3209 3.59256 1.78633 5.57925 0.937448 7.88152C0.0885654 10.1838 -0.033808 12.6909 0.586826 15.0649C1.20746 17.4388 2.54126 19.5654 4.40839 21.158C7.61993 23.9032 7.61993 26.8659 4.40839 29.6111C2.54126 31.2037 1.20746 33.3303 0.586826 35.7042C-0.033808 38.0782 0.0885654 40.5853 0.937448 42.8876C1.78633 45.1898 3.3209 47.1765 5.33425 48.5798C7.34761 49.9831 9.74293 50.7354 12.1973 50.7354C14.6516 50.7354 17.0469 49.9831 19.0603 48.5798C21.0736 47.1765 22.6082 45.1898 23.4571 42.8876C24.306 40.5853 24.4283 38.0782 23.8077 35.7042C23.1871 33.3303 21.8533 31.2037 19.9861 29.6111Z" fill="url(#paint0_linear_1_145)" />
                            </g>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1_145" x1="0.204452" y1="0.0395486" x2="0.204452" y2="24.0343" gradientUnits="userSpaceOnUse">
                            <stop offset="0.4" stop-color="#3CFFD0" />
                            <stop offset="0.55" stop-color="#FF3D00" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className="w-full">
                <div className="w-full min-h-[20px] flex justify-start items-center gap-3">
                    <div class="text-stone-300 text-[10px] font-bold font-['Helvetica'] uppercase leading-[14.30px] tracking-widest">{author}</div>
                    <div class="text-stone-300 text-[10px] font-normal font-['Helvetica'] uppercase leading-[14.30px] tracking-widest">{time}</div>
                    <div className="w-[20px] h-[20px]">
                        <svg width="20px" height="20px" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame">
                                <path id="Vector" d="M9.09182 16.5155C7.72517 17.8821 5.49887 17.8821 4.13225 16.5155C2.76562 15.1488 2.76559 12.9225 4.13225 11.5559L6.88757 8.80053C8.25427 7.43388 10.4805 7.43388 11.8472 8.80053C11.9593 8.90968 12.023 9.05903 12.0241 9.21548C12.0252 9.37193 11.9635 9.52223 11.8529 9.63283C11.7424 9.74348 11.5919 9.80518 11.4357 9.80408C11.2792 9.80298 11.1297 9.73928 11.0206 9.62713C10.0975 8.70408 8.63722 8.70408 7.71412 9.62713L4.9588 12.3825C4.03574 13.3055 4.03574 14.7659 4.9588 15.6889C5.88187 16.612 7.34217 16.6118 8.26522 15.6889L10.8828 13.0712C10.9919 12.9591 11.1414 12.8955 11.2978 12.8944C11.4543 12.8933 11.6046 12.955 11.7152 13.0657C11.8257 13.1763 11.8874 13.3266 11.8863 13.483C11.8852 13.6395 11.8215 13.7888 11.7094 13.898L9.09182 16.5155ZM14.327 11.2803C12.9603 12.647 10.734 12.647 9.36737 11.2803C9.25527 11.1712 9.19152 11.022 9.19042 10.8655C9.18947 10.7091 9.25102 10.5588 9.36167 10.4482C9.47232 10.3376 9.62262 10.2759 9.77902 10.2769C9.93547 10.278 10.0848 10.3418 10.194 10.4539C11.117 11.3769 12.5773 11.3769 13.5004 10.4539L16.2557 7.69853C17.1788 6.77548 17.1788 5.31518 16.2557 4.39211C15.3327 3.46905 13.8724 3.46905 12.9493 4.39211L10.3318 7.00963C10.2226 7.12178 10.0731 7.18563 9.91672 7.18673C9.76027 7.18783 9.60997 7.12613 9.49932 7.01548C9.38872 6.90483 9.32702 6.75453 9.32812 6.59798C9.32917 6.44153 9.39292 6.29203 9.50517 6.18303L12.1227 3.56552C13.4894 2.19886 15.7157 2.19886 17.0823 3.56552C18.4489 4.93218 18.449 7.15848 17.0823 8.52508L14.327 11.2803Z" fill="#636363" />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="w-full">
                    <span className="text-zinc-100 text-base font-normal font-['Georgia'] leading-tight">

                        {content && content.map((item, index) => (
                            <span key={index}>
                                {typeof item === 'object' && Object.entries(item).map(([key, value], innerIndex) => (
                                    <span key={innerIndex}>
                                        {
                                            key === 'b' ? <span className="text-zinc-100 text-[17px] font-bold font-['Helvetica'] leading-snug">{value}&nbsp;</span> : <span></span>
                                        }
                                        {
                                            key === 'sub' ?
                                                <div className="flex border border-stone-300 border-l-1 border-y-0 border-r-0 mt-5">
                                                    <div>
                                                        <div className="text-stone-300 text-base font-normal font-['Georgia'] leading-tight tracking-tight pl-[20px]">{value}&nbsp;</div>
                                                    </div>
                                                    <div className="w-[31px]"></div>
                                                </div> : <span></span>
                                        }
                                        {
                                            key === 'i' ? <i>{value}&nbsp;</i> : <span></span>
                                        }
                                        {
                                            key === 'u' ? <span className="underline underline-offset-[4px] decoration-[#3CFFD0] hover:text-[#3CFFD0]">{value}&nbsp;</span> : <span></span>
                                        }
                                        {
                                            key === 'n' ? <span>{value}&nbsp;</span> : <span></span>
                                        }
                                    </span>
                                ))}
                            </span>
                        ))}
                    </span>
                </div>

                <div className="pt-[12.79px] w-full text-zinc-100 text-base font-normal font-['Helvetica'] leading-tight">
                    {summary && summary.map((item, index) => (
                        <span key={index}>
                            {typeof item === 'object' && Object.entries(item).map(([key, value], innerIndex) => (
                                <span key={innerIndex}>
                                    {
                                        key === 'u' ? <span>{value}</span> : <span></span>
                                    }
                                    {
                                        key === 'n' ? <span>{value}</span> : <span></span>
                                    }
                                </span>
                            ))}
                        </span>
                    ))}
                </div>
                <div className="pt-[7.19px] text-stone-300 text-[11px] font-bold font-['Helvetica'] uppercase leading-[14.40px] tracking-widest">
                    {origin}
                </div>
            </div>
        </div >
    )
}

export default TodayStoriesItem;