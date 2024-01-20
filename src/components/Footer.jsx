


const Footer = () => {
    return (
        <div className="max-w-[1300px] h-[215px]">
            <div className="flex justify-center">
                <div className="h-[90.16px] flex justify-start items-start max-[1200px]:justify-center  w-[90%]">
                    <svg
                        //width="397" height="89" 
                        className="w-[50%] max-w-[397px]"
                        //width={300}
                        viewBox="0 0 397 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M297.978 22.8174L297.589 34.4983C283.947 33.5634 280.049 37.0686 280.049 48.5151V49.9921H268.357V23.518H280.049V31.0717C283.558 24.9203 288.313 22.1169 297.978 22.8174ZM19.6976 70.3199H31.3895V25.1521H19.6976V70.3199ZM77.6139 22.896C69.429 22.896 64.4408 26.5557 61.7902 30.6043V5.6857H0.209648V16.5875H50.8774V49.9921H62.0233C62.0233 40.4141 67.5589 33.642 74.3399 33.642C80.1872 33.642 82.8365 36.5226 82.8365 46.8797V70.3199H94.5285V42.6753C94.5285 29.4376 87.7475 22.896 77.6139 22.896ZM123.604 61.3626C116.511 61.3626 111.912 57.0797 111.133 49.9934H100.141C101.232 62.4533 109.417 71.2535 123.527 71.2535C134.439 71.2535 140.597 66.3473 143.794 58.9494L133.893 54.5879C132.412 59.0267 129.684 61.3626 123.604 61.3626ZM123.136 23.1278C118.963 23.0356 114.834 24 111.133 25.9311L116.744 33.8738C118.849 32.7844 121.11 32.2384 123.527 32.3156C130.075 32.3156 133.426 36.5999 133.893 42.2053H122.59V49.9934H144.885C145.04 48.8254 145.119 47.7347 145.119 46.5681C145.196 29.5908 133.972 23.1278 123.136 23.1278ZM238.892 61.3626C231.799 61.3626 227.2 57.0797 226.421 49.9934H215.429C216.52 62.4533 224.705 71.2535 238.814 71.2535C249.727 71.2535 255.885 66.3473 259.082 58.9494L249.181 54.5879C247.623 59.0267 244.895 61.3626 238.892 61.3626ZM238.503 23.1278C234.329 23.0354 230.199 23.9998 226.498 25.9311L232.111 33.8738C234.215 32.7844 236.476 32.2384 238.892 32.3156C245.44 32.3156 248.792 36.5999 249.26 42.2053H237.957V49.9934H260.251C260.407 48.8254 260.484 47.7347 260.484 46.5681C260.563 29.5908 249.337 23.1278 238.503 23.1278ZM375.538 61.3626C368.445 61.3626 363.846 57.0797 363.066 49.9934H352.075C353.166 62.4533 361.351 71.2535 375.46 71.2535C386.373 71.2535 392.531 66.3473 395.728 58.9494L385.827 54.5879C384.269 59.0267 381.541 61.3626 375.538 61.3626ZM374.914 23.1278C370.741 23.0356 366.612 23.9999 362.911 25.9311L368.522 33.8738C370.628 32.7844 372.888 32.2384 375.304 32.3156C381.852 32.3156 385.204 36.5999 385.671 42.2053H374.369V49.9934H396.663C396.818 48.8254 396.897 47.7347 396.897 46.5681C396.974 29.5908 385.75 23.1278 374.914 23.1278ZM151.121 0.15625L172.15 49.9921H184.935L168.893 10.3575H189.628V0.234801L151.121 0.157538V0.15625ZM213.481 0.233513L189.393 61.2081L185.808 70.3199H198.046L226.965 0.234801H213.481V0.233513ZM320.974 69.2292C325.962 69.2292 330.094 67.8269 332.977 65.4137L328.301 58.0158C326.82 58.6391 325.183 58.8722 323.546 58.8722C317.154 58.8722 313.49 55.0567 312.243 49.9947H300.784C302.344 60.8192 310.138 69.2292 320.974 69.2292ZM335.394 30.0596C332.744 25.8552 327.365 22.8174 319.882 22.8174C312.555 22.7402 305.773 26.7115 302.188 33.1745L311.931 39.4045C313.724 35.6663 317.232 33.1745 322.611 33.1745C330.25 33.1745 335.394 39.0929 335.394 46.1006C335.394 47.4257 335.238 48.7494 334.849 49.9947H347.087V23.5965H335.394V30.0596ZM324.092 79.8194C316.53 79.8194 313.724 76.1597 313.178 71.8768H302.032C302.265 80.0538 307.722 89.0085 324.325 89.0085C335.549 89.0085 342.877 83.4018 345.917 74.9918L335.394 71.3321C333.913 76.783 329.859 79.8194 324.092 79.8194Z" fill="white" />
                    </svg>
                </div>
            </div>
            {/* <div className=" text-[11px] font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider grid min-w-[733px]">
                <div className="flex gap-2">

                    <div className="hover:underline hover:underline-offset-2">Terms of Use</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Privacy Notice</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Privacy Notice</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Cookie Policy</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Do Not Sell Or Share My Personal Info</div>
                </div>
                <div className="flex gap-2">
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Licensing FAQ</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Accessibility</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">Platform Status</div>
                    <div className="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                    <div className="hover:underline hover:underline-offset-2">How We Rate and Review Products</div>
                </div>
            </div> */}
            <div className="pt-[29.98px]  flex gap-5 max-[1200px]:grid max-[1200px]:grid-cols-1">
                <div className="">
                    <div className="flex justify-center">

                        <div class="flex flex-wrap  w-[90%]">

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Terms of Use</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Privacy Notice</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Cookie Policy</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Do Not Sell Or Share My Personal Info</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Licensing FAQ</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Accessibility</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">Platform Status</div>
                                <div class="text-teal-300 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider w-8 flex justify-center">/</div>
                            </div>

                            <div class="flex items-center">
                                <div class="hover:underline hover:underline-offset-2">How We Rate and Review Products</div>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <div className="w-[90%] ">
                            <div className="flex flex-wrap  text-[11px] font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider max-w-[733px] pt-[16px]  gap-2">
                                <div className="hover:underline hover:underline-offset-2">Contact</div>
                                <div className="text-yellow-400 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                                <div className="hover:underline hover:underline-offset-2">Tip Us</div>
                                <div className="text-yellow-400 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                                <div className="hover:underline hover:underline-offset-2">Community Guidelines</div>
                                <div className="text-yellow-400 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                                <div className="hover:underline hover:underline-offset-2">About</div>
                                <div className="text-yellow-400 text-xs font-normal font-['Helvetica'] uppercase leading-[21px] tracking-wider">/</div>
                                <div className="hover:underline hover:underline-offset-2">Ethics Statement</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className="w-[90%] h-[95px] relative flex-col justify-start items-start inline-flex">
                        <div className=" text-[11px] font-bold font-['Helvetica'] uppercase leading-[21px] tracking-wider flex justify-center">
                            <div>
                                The Verge is a vox media network
                            </div>
                        </div>
                        <div className="pr-[76.47px] justify-start items-start gap-[12.31px] inline-flex">
                            <div className=" text-[11px] font-normal font-['Helvetica'] uppercase leading-tight tracking-wider hover:underline hover:underline-offset-2">Advertise with us</div>
                            <div className="pr-[6.39px] justify-start items-start gap-[10.49px] flex">
                                <div className="text-orange-600 text-xs font-normal font-['Helvetica'] uppercase leading-tight tracking-wider">/</div>
                                <div className=" text-[11px] font-normal font-['Helvetica'] uppercase leading-tight tracking-wider hover:underline hover:underline-offset-2">Jobs @ Vox Media</div>
                            </div>
                        </div>
                        <div className="pr-[20.57px] pb-px justify-start items-start gap-[6.09px] inline-flex">
                            <div className=" text-xs font-normal font-['Georgia'] uppercase leading-[21px] tracking-wider">© 2023</div>
                            <div><span className=" text-xs font-normal font-['Georgia'] uppercase leading-[21px] tracking-wider">Vox Media</span><span className=" text-xs font-normal font-['Georgia'] uppercase leading-[21px] tracking-wider">, LLC. All Rights Reserved</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;