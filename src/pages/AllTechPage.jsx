

import amd_ryzen from "../assets/amd_ryzen_1.png";
import elon_musk from "../assets/elon_musk_1.png";
import asus from "../assets/asus.png";
import Item1 from "../components/AllTechPage/Item1";
import Item2 from "../components/AllTechPage/Item2";



const AllTechPage = () => {
    return (
        <div>
            <div className="bg-[#5200FF] h-[182px]"></div>
            <div className=" caret-transparent">

                <div className="flex justify-center pb-10 bg-[#5200FF]">
                    <div className="w-[50%]">
                        <div className=" pt-0.5 pb-px flex-col justify-center items-start gap-[7.50px] inline-flex">
                            <div className=" text-teal-300 text-[13px] font-normal font-['Courier New'] uppercase leading-tight tracking-widest">All Stories Tagged:</div>
                            <div className="text-white text-[111px] font-normal font-['Impact'] leading-[128px] tracking-widest">Tech</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <div className="w-[1100px] max-[1200px]:w-[95%]">
                        <div className="max-w-[1100px] border border-slate-700 border-x-0 border-t-0 pb-5">
                            <div className="w-[902.37px] h-[85.19px] text-white text-[22px] font-normal font-['Georgia'] leading-7 max-[1200px]:w-full">The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily.</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <div className="w-[1100px] max-[1200px]:w-[95%] flex justify-around max-[800px]:grid border border-slate-700 border-x-0 border-t-0 pb-20 mb-[200px] ">

                        <div className="w-[492px] max-[1200px]:w-[44.73%] max-[800px]:w-full">
                            <div className="max-[800px]:flex max-[800px]:justify-end">
                                <img src={amd_ryzen} className="w-[492px]" />
                            </div>
                            <div className="max-[1000px]:grid max-[1000px]:justify-start">
                                <div className="flex justify-center -mt-[60px] max-[1000px]:justify-start">
                                    <div className="w-[80%]">
                                        <div className="w-[75%] max-[1000px]:">
                                            <div className="text-white text-2xl font-bold font-['Arial'] leading-[35px]">Schools bought millions of Chromebooks in 2020 — and three years later, they’re starting to break</div>
                                        </div>
                                        <div className=" text-white text-xl font-normal font-['Georgia'] leading-normal tracking-tight pt-5">The US Public Interest Research Group Education Fund has found that cheap Chromebooks, due to their short lifespans and lack of repairability, are both less sustainable and more expensive for schools than pricier devices might be.</div>
                                    </div>
                                </div>
                                <div className="flex justify-center pt-3">
                                    <div className="flex justify-start w-[80%] gap-4 max-[1000px]:w-full">
                                        <div className=" text-teal-300 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Monica Chin</div>
                                        <div className="w-[48.65px] h-[13px] text-neutral-400 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Apr 22</div>
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
                                            <div className="text-white text-2xl font-bold font-['Arial'] leading-[35px]">AMD is quietly arming an entire new wave of Steam Deck competitors</div>
                                        </div>
                                        <div className=" text-white text-xl font-normal font-['Georgia'] leading-normal tracking-tight mt-5">With Zen 4 and RDNA 3, can these handhelds keep up?</div>
                                    </div>
                                </div>
                                <div className="flex justify-center pt-3">
                                    <div className="flex justify-start w-[80%] gap-4 max-[1000px]:w-full">
                                        <div className=" text-teal-300 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Sean Hollister</div>
                                        <div className=" text-neutral-400 text-[11px] font-bold font-['Arial'] uppercase leading-none tracking-widest">Apr 22</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex justify-center pt-20">
                    <div className="w-[1100px] flex">

                        <div className="w-[700px] grid max-[800px]:w-full">
                            <div className="">
                                <Item1
                                    svg=
                                    {
                                        <svg className="mr-2" width="14" height="74" viewBox="0 0 14 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.8994 66.7202L12.8994 73.8784H8.54395V72.6675H11.7178V71.0806H8.76855V69.8745H11.7178V67.9263H8.43652V66.7202H12.8994ZM5.75137 66.7202L5.75137 73.8198H4.56973L4.56973 67.9263H1.62051V66.7202H5.75137ZM13.1387 57.2554C13.1387 58.1082 13.0133 58.8097 12.7627 59.3599C12.5088 59.9132 12.1784 60.325 11.7715 60.5952C11.3646 60.8654 10.8714 61.0005 10.292 61.0005C9.45215 61.0005 8.76855 60.6799 8.24121 60.0386C7.71061 59.3973 7.44531 58.4842 7.44531 57.2993C7.44531 56.1014 7.72526 55.1655 8.28516 54.4917C8.77669 53.896 9.44401 53.5981 10.2871 53.5981C11.1367 53.5981 11.8073 53.8927 12.2988 54.4819C12.8587 55.1558 13.1387 56.0802 13.1387 57.2554ZM11.918 57.3042C11.918 56.4806 11.7617 55.8621 11.4492 55.4487C11.1367 55.0386 10.7493 54.8335 10.2871 54.8335C9.82161 54.8335 9.43587 55.0369 9.12988 55.4438C8.82389 55.854 8.6709 56.4823 8.6709 57.3286C8.6709 58.1587 8.82064 58.7723 9.12012 59.1694C9.41634 59.5666 9.80534 59.7651 10.2871 59.7651C10.7689 59.7651 11.1611 59.5649 11.4639 59.1646C11.7666 58.7642 11.918 58.144 11.918 57.3042ZM12.8896 40.7202V47.8784H11.7373L9.33496 43.0981V47.8784H8.23145V40.7202H9.42285L11.7861 45.3882V40.7202H12.8896ZM12.9189 26.7202V33.8784H11.1465L10.082 28.9956L9.02734 33.8784H7.25L7.25 26.7202H8.34863L8.34863 32.355L9.51563 26.7202H10.6582L11.8154 32.355V26.7202H12.9189ZM12.9141 20.8784H11.7324V17.0015C11.7324 16.3993 11.7178 16.007 11.6885 15.8247C11.6364 15.509 11.5127 15.2648 11.3174 15.0923C11.1188 14.9198 10.8584 14.8335 10.5361 14.8335C10.2627 14.8335 10.0397 14.8937 9.86719 15.0142C9.69466 15.1379 9.57747 15.3071 9.51563 15.522C9.45052 15.7401 9.41797 16.2056 9.41797 16.9185V20.8784H8.23145V17.1187C8.23145 16.1584 8.28353 15.4634 8.3877 15.0337C8.48861 14.6073 8.71973 14.2606 9.08105 13.9937C9.43913 13.73 9.91276 13.5981 10.502 13.5981C11.1139 13.5981 11.5924 13.7072 11.9375 13.9253C12.2793 14.1466 12.5283 14.4559 12.6846 14.853C12.8376 15.2534 12.9141 15.9891 12.9141 17.0601V20.8784ZM5.63418 16.0493L4.47695 16.186C4.34674 15.2713 3.92031 14.814 3.19766 14.814C2.83958 14.814 2.55801 14.9067 2.35293 15.0923C2.14785 15.2811 2.04531 15.5138 2.04531 15.7905C2.04531 15.9533 2.08112 16.0916 2.15273 16.2056C2.22435 16.3195 2.3334 16.4123 2.47988 16.4839C2.62637 16.5588 2.98118 16.6825 3.54434 16.855C4.04889 17.008 4.41836 17.174 4.65273 17.353C4.88711 17.5321 5.07428 17.7664 5.21426 18.0562C5.35098 18.3491 5.41934 18.6632 5.41934 18.9985C5.41934 19.3892 5.33145 19.7407 5.15566 20.0532C4.97663 20.3657 4.73086 20.6017 4.41836 20.7612C4.10586 20.9207 3.72012 21.0005 3.26113 21.0005C2.57103 21.0005 2.03229 20.8133 1.64492 20.439C1.25755 20.0646 1.05247 19.5291 1.02969 18.8325L2.21621 18.769C2.26829 19.1532 2.3806 19.4217 2.55312 19.5747C2.72565 19.7277 2.97142 19.8042 3.29043 19.8042C3.60944 19.8042 3.85521 19.7375 4.02773 19.604C4.20026 19.4705 4.28652 19.3045 4.28652 19.106C4.28652 18.9106 4.2084 18.7463 4.05215 18.6128C3.8959 18.4793 3.5362 18.3328 2.97305 18.1733C2.37734 18.0008 1.94766 17.8185 1.68398 17.6265C1.41706 17.4377 1.21361 17.1919 1.07363 16.8892C0.933659 16.5897 0.863672 16.2251 0.863672 15.7954C0.863672 15.1737 1.05573 14.6512 1.43984 14.228C1.8207 13.8049 2.41803 13.5933 3.23184 13.5933C4.67064 13.5933 5.47142 14.4119 5.63418 16.0493ZM12.8896 0.720215V7.87842H11.708V4.69971L9.31055 7.87842H7.71387L9.92578 5.09033L7.59668 0.720215H9.12988L10.7461 4.07959L11.708 2.8833V0.720215H12.8896Z" fill="#BDBDBD" />
                                        </svg>
                                    }
                                    name="Elon Musk"
                                    content="Elon Musk’s wealth plummets by $12.6 billion after chaotic 24 hours at Twitter, Tesla, and SpaceX"
                                    author="Jess Weatherbed"
                                    time="Apr 22"
                                    image={elon_musk}
                                />
                            </div>
                            <div>
                                <Item1
                                    svg=
                                    {
                                        <svg width="14" height="36" viewBox="0 0 14 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3892 27.7502V34.2922H13.3066V35.6243H8.17725V34.2922H10.0894V27.7502H11.3892ZM5.67861 27.7502L5.67861 35.6243H0.887598V34.2922H4.37881V32.5466H1.13467V31.22H4.37881V29.0769H0.769433L0.769433 27.7502H5.67861ZM8.70898 17.6453L7.44678 17.1565C7.64372 16.2756 7.97135 15.6311 8.42969 15.2229C8.88802 14.8183 9.45199 14.616 10.1216 14.616C10.9631 14.616 11.6452 14.94 12.168 15.5881C12.7695 16.3365 13.0703 17.3463 13.0703 18.6174C13.0703 19.9602 12.7677 21.0111 12.1626 21.7703C11.6362 22.4291 10.929 22.7585 10.041 22.7585C9.31771 22.7585 8.71257 22.5115 8.22559 22.0173C7.87826 21.6664 7.62402 21.1454 7.46289 20.4543L8.75195 20.0784C8.83431 20.5045 8.99902 20.8303 9.24609 21.0559C9.48958 21.2851 9.77783 21.3997 10.1108 21.3997C10.5871 21.3997 10.9756 21.192 11.2764 20.7766C11.5771 20.3612 11.7275 19.6755 11.7275 18.7195C11.7275 17.7276 11.5807 17.0222 11.2871 16.6033C10.9935 16.1843 10.6121 15.9749 10.1431 15.9749C9.79932 15.9749 9.50212 16.1073 9.25146 16.3723C9.00081 16.6409 8.81999 17.0652 8.70898 17.6453ZM12.8394 0.750244V8.62427H11.5396V5.52515H8.98291V8.62427H7.67773L7.67773 0.750244H8.98291V4.19312H11.5396V0.750244H12.8394Z" fill="#BDBDBD" />
                                        </svg>

                                    }
                                    name="Tech"
                                    content="Another leak: The Asus ROG Ally will start at $600 with AMD Z1 and 256GB SSD"
                                    author="Sean Hollister"
                                    time="Two hours ago"
                                    image={asus}
                                />
                            </div>
                            <div className="">
                                <Item2
                                    svg=
                                    {
                                        <svg width="25" height="52" viewBox="0 0 25 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.2889 30.0708C17.0773 27.3257 17.0773 24.3629 20.2889 21.6177C22.156 20.0252 23.4898 17.8985 24.1104 15.5246C24.731 13.1506 24.6087 10.6435 23.7598 8.34123C22.9109 6.03897 21.3763 4.05228 19.363 2.64902C17.3496 1.24576 14.9543 0.493408 12.5 0.493408C10.0456 0.493408 7.65032 1.24576 5.63696 2.64902C3.62361 4.05228 2.08904 6.03897 1.24016 8.34123C0.391273 10.6435 0.2689 13.1506 0.889534 15.5246C1.51017 17.8985 2.84397 20.0252 4.71109 21.6177C7.92263 24.3629 7.92263 27.3257 4.71109 30.0708C2.84397 31.6634 1.51017 33.79 0.889534 36.164C0.2689 38.5379 0.391273 41.045 1.24016 43.3473C2.08904 45.6496 3.62361 47.6363 5.63696 49.0395C7.65032 50.4428 10.0456 51.1951 12.5 51.1951C14.9543 51.1951 17.3496 50.4428 19.363 49.0395C21.3763 47.6363 22.9109 45.6496 23.7598 43.3473C24.6087 41.045 24.731 38.5379 24.1104 36.164C23.4898 33.79 22.156 31.6634 20.2889 30.0708Z" fill="url(#paint0_linear_11_454)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_11_454" x1="0.50716" y1="0.499265" x2="0.50716" y2="24.494" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.4" stop-color="#3CFFD0" />
                                                    <stop offset="0.55" stop-color="#FF3D00" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    }
                                    author="Jay Peters"
                                    time="Two hours ago"
                                    header="Fortnite-ception."
                                    content="Five big streamers known for playing Fortnite - CourageJD, Nickmercs, Ninja, SypherPK, and TimtheTatman - are heading up a new 
                                in-Fortnite battle royale game built with the new Unreal Editor for Fortnite toolset. They're calling it Project V, and it's scheduled to 
                                launch in 2024."
                                    image={"image"}
                                />
                            </div>
                        </div>

                        <div className="w-[100px]"></div>

                        <div className="w-[300px] max-[1250px]:hidden">
                            <div className="rounded relative">

                                <div className="-mt-[50%]  absolute right-0  z-auto">
                                    <svg width="150" height="785" viewBox="0 0 150 785" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M67.5758 784.334L67.5758 689.47H89.1383L89.1383 753.513L97.7516 689.47H113.045L122.127 752.048L122.127 689.47H143.689L143.689 784.334H111.755C110.818 778.63 109.822 771.912 108.767 764.177L105.369 740.037L99.7438 784.334H67.5758ZM4.82188 739.92V720.877C4.82188 713.884 5.17344 708.748 5.87656 705.466C6.57969 702.224 8.0836 699.177 10.3883 696.326C12.693 693.513 15.6617 691.423 19.2945 690.056C22.8883 688.728 27.0289 688.064 31.7164 688.064C36.9508 688.064 41.3844 688.63 45.0172 689.763C48.65 690.935 51.482 692.673 53.5133 694.978C55.5055 697.322 56.9313 700.134 57.7906 703.416C58.65 706.736 59.0797 711.697 59.0797 718.298V738.22C59.0797 745.447 58.2984 751.091 56.7359 755.154C55.1734 759.216 52.3609 762.478 48.2984 764.939C44.2359 767.4 39.0406 768.63 32.7125 768.63C27.4 768.63 22.8492 767.83 19.0602 766.228C15.232 764.666 12.2828 762.615 10.2125 760.076C8.14219 757.537 6.73594 754.92 5.99375 752.224C5.2125 749.529 4.82188 745.427 4.82188 739.92ZM28.4938 745.779C28.4938 749.763 28.7086 752.263 29.1383 753.279C29.568 754.334 30.4859 754.861 31.8922 754.861C33.2984 754.861 34.2359 754.334 34.7047 753.279C35.1734 752.263 35.4078 749.763 35.4078 745.779V710.681C35.4078 707.009 35.1734 704.607 34.7047 703.474C34.2359 702.38 33.318 701.834 31.9508 701.834C30.5445 701.834 29.6266 702.341 29.1969 703.357C28.7281 704.373 28.4938 706.56 28.4938 709.92V745.779ZM68.8648 570.38H89.8414V574.599C89.8414 578.193 90.0563 580.459 90.4859 581.396C90.8766 582.373 91.8922 582.861 93.5328 582.861C94.8609 582.861 95.857 582.412 96.5211 581.513C97.1852 580.654 97.5172 579.345 97.5172 577.588C97.5172 575.205 97.3609 573.447 97.0484 572.314C96.6969 571.22 95.7008 570.009 94.0602 568.681C92.3805 567.353 88.9625 565.42 83.8063 562.88C76.9313 559.521 72.4195 556.357 70.2711 553.388C68.1227 550.42 67.0484 546.103 67.0484 540.439C67.0484 534.111 67.8688 529.326 69.5094 526.084C71.15 522.88 73.9039 520.4 77.7711 518.642C81.5992 516.923 86.2281 516.064 91.6578 516.064C97.6734 516.064 102.83 517.002 107.127 518.877C111.384 520.752 114.314 523.291 115.916 526.494C117.517 529.697 118.318 534.541 118.318 541.025V544.775H97.3414V539.853C97.3414 535.673 97.0875 532.959 96.5797 531.709C96.0328 530.459 94.9781 529.834 93.4156 529.834C91.7359 529.834 90.5641 530.244 89.9 531.064C89.2359 531.923 88.9039 533.701 88.9039 536.396C88.9039 540.107 89.3336 542.431 90.193 543.369C91.0914 544.306 95.6813 547.08 103.963 551.689C110.916 555.595 115.154 559.13 116.677 562.295C118.201 565.498 118.963 569.287 118.963 573.662C118.963 579.873 118.142 584.443 116.502 587.373C114.861 590.341 112.088 592.627 108.181 594.228C104.236 595.83 99.6656 596.63 94.4703 596.63C89.3141 596.63 84.9391 595.966 81.3453 594.638C77.7125 593.349 74.9391 591.63 73.025 589.482C71.0719 587.334 69.9 585.341 69.5094 583.505C69.0797 581.67 68.8648 578.798 68.8648 574.892V570.38ZM35.7594 605.595V593.349H29.3727V581.045H35.7594L35.7594 539.443C35.7594 534.326 35.5055 531.474 34.9977 530.888C34.4508 530.302 32.2438 530.009 28.3766 530.009L28.3766 517.47H37.9273C43.318 517.47 47.1656 517.685 49.4703 518.115C51.775 518.584 53.8063 519.619 55.5641 521.22C57.3219 522.861 58.4156 524.716 58.8453 526.787C59.275 528.896 59.4898 533.818 59.4898 541.552L59.4898 581.045H64.5875V593.349H59.4898V605.595H35.7594ZM130.798 440.334H105.955C99.2359 440.334 94.0797 439.806 90.4859 438.752C86.8531 437.697 84.1383 436.173 82.3414 434.181C80.5055 432.189 79.275 429.767 78.65 426.916C77.9859 424.103 77.6539 419.728 77.6539 413.791V405.529C77.6539 399.474 78.2789 395.06 79.5289 392.287C80.7789 389.513 83.0836 387.384 86.443 385.9C89.7633 384.416 94.1188 383.673 99.5094 383.673H106.13V345.47H130.798V440.334ZM106.13 424.103V399.963C105.427 399.923 104.822 399.904 104.314 399.904C102.048 399.904 100.486 400.451 99.6266 401.545C98.7281 402.677 98.2789 405.002 98.2789 408.517V416.31C98.2789 419.552 98.7867 421.662 99.8023 422.638C100.818 423.615 102.927 424.103 106.13 424.103ZM17.7125 395.92V376.877C17.7125 369.884 18.0641 364.748 18.7672 361.466C19.4703 358.224 20.9742 355.177 23.2789 352.326C25.5836 349.513 28.5523 347.423 32.1852 346.056C35.7789 344.728 39.9195 344.064 44.607 344.064C49.8414 344.064 54.275 344.63 57.9078 345.763C61.5406 346.935 64.3727 348.673 66.4039 350.978C68.3961 353.322 69.8219 356.134 70.6813 359.416C71.5406 362.736 71.9703 367.697 71.9703 374.298V394.22C71.9703 401.447 71.1891 407.091 69.6266 411.154C68.0641 415.216 65.2516 418.478 61.1891 420.939C57.1266 423.4 51.9313 424.63 45.6031 424.63C40.2906 424.63 35.7398 423.83 31.9508 422.228C28.1227 420.666 25.1734 418.615 23.1031 416.076C21.0328 413.537 19.6266 410.92 18.8844 408.224C18.1031 405.529 17.7125 401.427 17.7125 395.92ZM41.3844 401.779C41.3844 405.763 41.5992 408.263 42.0289 409.279C42.4586 410.334 43.3766 410.861 44.7828 410.861C46.1891 410.861 47.1266 410.334 47.5953 409.279C48.0641 408.263 48.2984 405.763 48.2984 401.779V366.681C48.2984 363.009 48.0641 360.607 47.5953 359.474C47.1266 358.38 46.2086 357.834 44.8414 357.834C43.4352 357.834 42.5172 358.341 42.0875 359.357C41.6188 360.373 41.3844 362.56 41.3844 365.92V401.779ZM125.584 251.224L125.994 244.369C123.884 247.142 121.56 249.213 119.021 250.58C116.482 251.947 113.709 252.63 110.701 252.63C107.029 252.63 103.865 251.634 101.209 249.642C98.5133 247.689 96.8336 245.423 96.1695 242.845C95.5055 240.267 95.1734 235.892 95.1734 229.72L95.1734 196.966C95.1734 189.896 95.6031 184.857 96.4625 181.849C97.2828 178.88 99.0016 176.498 101.619 174.701C104.197 172.943 107.322 172.064 110.994 172.064C113.923 172.064 116.638 172.748 119.138 174.115C121.638 175.482 123.923 177.513 125.994 180.209V162.396H149.666V251.224H125.584ZM118.845 228.607C118.845 233.412 119.021 236.322 119.373 237.338C119.724 238.353 120.701 238.861 122.302 238.861C123.865 238.861 124.88 238.275 125.349 237.103C125.779 235.931 125.994 233.099 125.994 228.607V196.38C125.994 191.693 125.759 188.763 125.291 187.591C124.822 186.42 123.806 185.834 122.244 185.834C120.72 185.834 119.783 186.361 119.431 187.416C119.041 188.509 118.845 191.127 118.845 195.267V228.607ZM33.1227 251.224V173.47H57.2047L56.7945 179.916C58.4352 177.298 60.4664 175.326 62.8883 173.998C65.2711 172.709 68.025 172.064 71.15 172.064C74.7047 172.064 77.6539 172.689 79.9977 173.939C82.3414 175.189 84.0797 176.849 85.2125 178.92C86.3063 180.99 86.9898 183.138 87.2633 185.365C87.5367 187.63 87.6734 192.103 87.6734 198.783L87.6734 251.224H64.0016L64.0016 198.314C64.0016 192.259 63.8258 188.666 63.4742 187.533C63.0836 186.4 62.068 185.834 60.4273 185.834C58.6695 185.834 57.6344 186.42 57.3219 187.591C56.9703 188.763 56.7945 192.533 56.7945 198.9L56.7945 251.224H33.1227ZM0.251556 268.334V173.47H24.6266V268.334H0.251556ZM101.267 49.1071H123.474V54.3219C123.474 60.3375 122.791 64.9664 121.423 68.2086C120.017 71.4899 117.224 74.3805 113.045 76.8805C108.865 79.3805 103.435 80.6305 96.7555 80.6305C88.7477 80.6305 82.7125 79.2047 78.65 76.3531C74.5875 73.5406 72.1461 70.0641 71.3258 65.9235C70.5055 61.8219 70.0953 53.3453 70.0953 40.4938V1.47034H93.1227V8.3844C94.568 5.61096 96.443 3.52112 98.7477 2.11487C101.013 0.747681 103.728 0.0640869 106.892 0.0640869C111.033 0.0640869 114.841 1.21643 118.318 3.52112C121.755 5.86487 123.474 10.9625 123.474 18.8141V25.2008C123.474 31.0211 122.556 34.986 120.72 37.0953C118.884 39.2047 114.334 41.6656 107.068 44.4781C99.2945 47.525 95.1344 49.5758 94.5875 50.6305C94.0406 51.6852 93.7672 53.8336 93.7672 57.0758C93.7672 61.1383 94.0797 63.775 94.7047 64.986C95.2906 66.236 96.2867 66.861 97.693 66.861C99.2945 66.861 100.291 66.3336 100.681 65.2789C101.072 64.2633 101.267 61.5875 101.267 57.2516V49.1071ZM93.7672 38.443C97.5563 35.6696 99.7633 33.3453 100.388 31.4703C100.974 29.5953 101.267 26.9 101.267 23.3844C101.267 19.361 101.013 16.7633 100.505 15.5914C99.9586 14.4196 98.9039 13.8336 97.3414 13.8336C95.857 13.8336 94.9 14.2828 94.4703 15.1813C94.0016 16.1188 93.7672 18.5406 93.7672 22.4469V38.443ZM38.2789 79.2242L39.2164 69.0289C35.7789 76.3336 30.7984 80.2008 24.275 80.6305L24.275 53.2672C28.6109 53.2672 31.7945 52.6813 33.8258 51.5094C35.857 50.3375 37.107 48.6969 37.5758 46.5875C38.0445 44.5172 38.2789 39.7125 38.2789 32.1735V1.47034H61.9508V79.2242H38.2789Z" fill="#5200FF" />
                                    </svg>
                                </div>

                                <div className="w-full left-[20px] top-[20px] absolute z-auto">
                                    <div className="pl-7 pr-[13.88px] pb-[22.19px] left-0 top-0   justify-end items-center inline-flex">
                                        <div className="text-white text-base font-bold font-['Arial'] leading-tight tracking-tight">My week with Dyson’s absurd wearable air purifier</div>
                                    </div>
                                    <div className="pl-7 pr-[18.10px] pb-[22.19px] left-0 top-[80.38px] justify-end items-center inline-flex">
                                        <div className="text-white text-base font-bold font-['Arial'] leading-tight tracking-tight">The Hunger Games prequel film gets its first trailer</div>
                                    </div>
                                    <div className="pl-7 pr-[0.72px] pb-[22.19px] left-0 top-[160.75px] justify-end items-center inline-flex">
                                        <div className="text-white text-base font-bold font-['Arial'] leading-tight tracking-tight">The OnePlus Pad is an impressive tablet for its price</div>
                                    </div>
                                    <div className="pl-7 pr-[0.72px] pb-[22.19px] left-0 top-[160.75px]   justify-end items-center inline-flex">
                                        <div className="w-[160.20px] h-[19px] left-[28px] top-[241.13px]   text-white text-base font-bold font-['Arial'] leading-tight tracking-tight">They’re ‘skeets’ now</div>
                                    </div>
                                    <div className="pl-7 pr-[4.14px] pb-[22.19px] left-0 top-[302.32px]   justify-end items-center inline-flex">
                                        <div className="text-white text-[15px] font-bold font-['Arial'] leading-tight tracking-tight">Former Apple employee must repay $19 million after defrauding the company</div>
                                    </div>
                                </div>

                            </div>

                            <div className="w-[300px]  px-3 mt-[800px] pt-3 border-t border-teal-300 flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="pr-[5px] pb-px justify-start items-start inline-flex">
                                    <div className="text-teal-300 text-[15px] font-normal font-['Courier New'] leading-tight">Verge Deals / Sign up for Verge Deals to get deals on products we've tested sent to your inbox daily.</div>
                                </div>
                                <div className="flex-col justify-start items-end gap-1.5 flex">
                                    <div className="pl-[19px] pr-[20.16px] pt-3 pb-[13.59px] rounded-sm border border-teal-300 justify-start items-start inline-flex">
                                        <div className="text-center text-teal-300 text-xs font-normal font-['Courier New'] uppercase leading-none tracking-wider">Sign up</div>
                                    </div>
                                    <div className="w-[276px] h-[36.28px] relative flex flex-wrap">
                                        <span className="left-0 top-[-1px] absolute text-teal-300 text-[11px] font-bold font-['Arial'] leading-3">By submitting your email, you agree to our Terms and Privacy Notice. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</span>
                                    </div>
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