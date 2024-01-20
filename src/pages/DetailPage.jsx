
import amd_ryzen_7_chip from '../assets/amd_ryzen_7_chip.jpg';
import amd_ryzen from '../assets/amd_ryzen_1.png';




const DetailPage = () => {
    return (
        <div className={`App ${window.location.pathname.substring(1)} grid justify-center caret-transparent`}>
            <div className="w-full grid justify-center max-w-[1100px]">
                <div className="w-[100%]">
                    <div className='max-[800px]:flex max-[800px]:justify-center'>
                        <div className='max-[800px]:w-[95%]'>
                            <div className="min-h-4 pt-0.5 justify-start items-start gap-[5.80px] inline-flex flex-wrap">
                                <div className="w-[78.83px] h-3.5 text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-3 tracking-wider">PC Gaming</div>
                                <div className="w-[8.95px] h-3.5 text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-3 tracking-wider">/</div>
                                <div className="w-[52.62px] h-3.5 text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-3 tracking-wider">Gaming</div>
                                <div className="w-[8.95px] h-3.5 text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-3 tracking-wider">/</div>
                                <div className="w-[113.78px] h-3.5 text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-3 tracking-wider">Entertainment</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-start max-[1200px]:justify-center'>
                        <div className=" w-[80%] flex justify-center  text-[45px] font-bold font-['Arial'] leading-[45px] max-[1200px]:w-[700px] max-[800px]:w-[95%]">
                            AMD is quietly arming an entire new wave of Steam Deck competitors
                        </div>
                    </div>
                </div>

                <div className='flex max-[1200px]:grid justify-center'>

                    <div className="w-[600px] max-[1200px]:order-2 max-[1200px]:w-[700px] flex justify-center max-[800px]:w-full">
                        <div className='max-[800px]:w-full'>
                            <div className="max-[800px]:w-full flex justify-center bg-green-100">
                                <img src={amd_ryzen_7_chip} className='max-[1200px]:w-[700px] max-[800px]:w-[95%]' />
                            </div>
                            <div className='max-[800px]:flex max-[800px]:justify-center'>
                                <div className='leading-[15px] max-[800px]:w-[95%]'>
                                    <span className=" h-[29.60px] text-neutral-900 text-xs font-normal font-['Courier New'] leading-none tracking-tight">AMD’s Ryzen 7000 series will apparently add some lower power chips for<br />handhelds.</span>
                                    <span className=" h-3.5 text-zinc-600 text-xs font-normal font-['Courier New'] leading-none tracking-tight">Image: AMD via Aokzoe</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40px]'></div>

                    <div>
                        <div className="w-[460px] max-[1200px]:order-1 max-[1200px]:w-[700px] max-[800px]:w-full flex justify-center">
                            <div className='flex justify-start max-[1200px]:w-full max-[800px]:w-[95%]'>
                                <span className="text-violet-700 text-3xl font-bold font-['Arial'] leading-[33px]">/ </span>
                                <span className="text-black text-3xl font-bold font-['Arial'] leading-[33px] max-[800px]:w-[90%]">With Zen 4 and RDNA 3, can these handhelds keep up?</span>
                            </div>



                        </div>
                        <div className='max-[800px]:flex max-[800px]:justify-center pt-64'>
                            <div className='max-[800px]:w-[95%]'>
                                <div className="max-w-[460px] h-[122.39px]">
                                    <div className="">
                                        <span className="text-neutral-900 text-xs font-bold font-['Arial'] leading-[14.40px]">By&nbsp;</span>
                                        <span className="text-violet-700 text-xs font-bold font-['Arial'] leading-[14.40px]">Sean Hollister</span>
                                    </div>
                                    <div className="flex max-[500px]:flex-col gap-10">
                                        <span className="left-0 top-0  text-zinc-600 text-xs font-bold font-['Arial'] leading-[10px]">Apr 22, 2023, 3:20 AM GMT+7</span>
                                        <span className='flex items-center gap-2'>
                                            <div className="left-[181.19px] top-0  text-zinc-600 text-xs font-bold font-['Arial'] leading-[10px]">|</div>
                                            <div className="w-3 h-3 left-[191.50px] top-[4px]  justify-center items-center inline-flex">
                                                <div className="w-3 h-3 relative flex-col justify-start items-start flex"></div>
                                            </div>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.4 10.0199H2.193L2.046 10.1659L0.5 11.7129V2.11992C0.5 1.73592 0.816 1.41992 1.2 1.41992H10.8C11.184 1.41992 11.5 1.73592 11.5 2.11992V9.31992C11.5 9.70392 11.184 10.0199 10.8 10.0199H2.4Z" stroke="#5A5A5A" />
                                            </svg>

                                            <div className="left-[209.50px] top-0  text-center text-zinc-600 text-xs font-bold font-['Arial'] leading-[5px]">27</div>
                                            <div className="left-[229.94px] top-0  text-center text-zinc-600 text-xs font-bold font-['Arial'] leading-[5px]">Comments</div>
                                            <div className="left-[288.08px] top-0  text-center text-zinc-600 text-xs font-bold font-['Arial'] leading-[5px]"> / </div>
                                            <div className="left-[300.05px] top-0  text-center text-zinc-600 text-xs font-bold font-['Arial'] leading-[5px]">27</div>
                                            <div className="left-[315.64px] top-0  text-center text-zinc-600 text-xs font-bold font-['Arial'] leading-[5px]"> New</div>
                                        </span>
                                    </div>
                                    <div className="left-0 top-[46.39px]  justify-start items-start gap-2 inline-flex">
                                        <div className="bg-gray-200 rounded-full justify-start items-start flex">
                                            <div className="w-[30px] h-[30px] justify-center items-center flex">
                                                <div className="w-[30px] h-[30px] flex justify-center items-center">
                                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.108 13.4901C21.116 13.5981 21.116 13.7061 21.116 13.8161C21.116 17.1521 18.676 21.0001 14.216 21.0001V20.9981C12.8924 20.998 11.5988 20.6039 10.5 19.8661C10.692 19.8901 10.884 19.9021 11.077 19.9031C12.1758 19.9014 13.2399 19.5187 14.088 18.8201C13.051 18.8001 12.141 18.0951 11.823 17.0661C12.187 17.1391 12.561 17.1241 12.918 17.0231C11.787 16.7851 10.973 15.7501 10.973 14.5481V14.5161C11.31 14.7111 11.687 14.8201 12.073 14.8321C11.008 14.0901 10.68 12.6141 11.323 11.4611C12.554 13.0381 14.37 13.9971 16.32 14.0981C16.223 13.6696 16.2365 13.2234 16.3591 12.8016C16.4817 12.3797 16.7095 11.9958 17.021 11.6861C17.249 11.4595 17.5208 11.2819 17.8199 11.1641C18.119 11.0463 18.439 10.9909 18.7602 11.0012C19.0815 11.0115 19.3972 11.0873 19.6882 11.224C19.9791 11.3607 20.239 11.5554 20.452 11.7961C20.9973 11.6836 21.5186 11.4761 21.992 11.1831C21.8157 11.7613 21.4374 12.2568 20.926 12.5791C21.406 12.5201 21.876 12.3861 22.318 12.1821C21.993 12.6901 21.583 13.1331 21.108 13.4901Z" fill="#5200FF" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-200 rounded-full justify-start items-start flex">
                                            <div className="w-[30px] h-[30px] justify-center items-center flex">
                                                <div className="w-[30px] h-[30px]  flex justify-center items-center">
                                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.893 16.258L19.248 13.923H17.03V12.408C17.03 11.769 17.34 11.146 18.333 11.146H19.343V9.158C19.343 9.158 18.426 9 17.551 9C15.724 9 14.53 10.118 14.53 12.143V13.923H12.5V16.258H14.531V21.902C15.3588 22.0338 16.2022 22.0338 17.03 21.902V16.258H18.893Z" fill="#5200FF" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-200 rounded-full justify-start items-start flex">
                                            <div className="w-[30px] h-[30px] justify-center items-center flex">
                                                <div className="w-[30px] h-[30px]  flex justify-center items-center ">
                                                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.6869 21.1121C14.1163 21.6812 13.3433 22.0008 12.5374 22.0008C11.7315 22.0008 10.9585 21.6812 10.3879 21.1121C9.81884 20.5415 9.49927 19.7685 9.49927 18.9626C9.49927 18.1568 9.81884 17.3838 10.3879 16.8131L12.7759 14.4251C13.3465 13.8561 14.1195 13.5365 14.9254 13.5365C15.7313 13.5365 16.5043 13.8561 17.0749 14.4251C17.1223 14.4722 17.16 14.5281 17.1857 14.5897C17.2114 14.6513 17.2248 14.7173 17.2249 14.7841C17.225 14.8508 17.212 14.917 17.1865 14.9787C17.161 15.0404 17.1236 15.0964 17.0764 15.1437C17.0292 15.1909 16.9731 15.2283 16.9114 15.2538C16.8497 15.2792 16.7836 15.2923 16.7168 15.2921C16.6501 15.292 16.584 15.2787 16.5224 15.2529C16.4608 15.2272 16.4049 15.1896 16.3579 15.1421C15.5579 14.3421 14.2929 14.3421 13.4929 15.1421L11.1049 17.5302C10.3049 18.3302 10.3049 19.5951 11.1049 20.3952C11.9049 21.1952 13.1699 21.1952 13.9699 20.3952L16.2389 18.1272C16.2849 18.076 16.3409 18.0347 16.4034 18.0058C16.4659 17.977 16.5336 17.9612 16.6025 17.9593C16.6713 17.9575 16.7397 17.9697 16.8037 17.9952C16.8676 18.0207 16.9257 18.059 16.9744 18.1077C17.0231 18.1563 17.0613 18.2144 17.0868 18.2784C17.1123 18.3423 17.1245 18.4108 17.1227 18.4796C17.1209 18.5484 17.1051 18.6161 17.0762 18.6786C17.0474 18.7411 17.0061 18.7971 16.9549 18.8432L14.6869 21.1121ZM19.2239 16.5752C18.6533 17.1442 17.8803 17.4638 17.0744 17.4638C16.2685 17.4638 15.4955 17.1442 14.9249 16.5752C14.8298 16.4801 14.7764 16.3511 14.7764 16.2166C14.7764 16.0822 14.8298 15.9532 14.9249 15.8581C15.02 15.7631 15.1489 15.7097 15.2834 15.7097C15.4179 15.7097 15.5468 15.7631 15.6419 15.8581C16.4419 16.6581 17.7069 16.6581 18.5069 15.8581L20.8949 13.4701C21.6949 12.6702 21.6949 11.4051 20.8949 10.6051C20.0949 9.80515 18.8299 9.80515 18.0299 10.6051L15.7609 12.8731C15.7149 12.9243 15.6589 12.9656 15.5964 12.9945C15.5339 13.0233 15.4662 13.0391 15.3973 13.041C15.3285 13.0428 15.2601 13.0306 15.1961 13.0051C15.1322 12.9796 15.0741 12.9413 15.0254 12.8926C14.9767 12.844 14.9385 12.7859 14.913 12.7219C14.8875 12.658 14.8753 12.5895 14.8771 12.5207C14.8789 12.4519 14.8947 12.3842 14.9236 12.3217C14.9524 12.2592 14.9937 12.2032 15.0449 12.1571L17.3129 9.88815C17.8835 9.31908 18.6565 8.99951 19.4624 8.99951C20.2683 8.99951 21.0413 9.31908 21.6119 9.88815C22.181 10.4588 22.5005 11.2318 22.5005 12.0377C22.5005 12.8435 22.181 13.6165 21.6119 14.1872L19.2239 16.5752Z" fill="#5200FF" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="max-w-[1100px] mt-10 flex">

                <div className='w-[100px] h-10  max-[800px]:hidden'></div>

                <div className='w-[600px]  max-[800px]:w-full max-[800px]:flex max-[800px]:justify-center'>
                    <div className="max-[800px]:w-[95%] text-lg font-normal font-['Georgia'] leading-7">
                        <div>You've obviously heard of the Steam Deck, and perhaps Asus drew your attention to the upcoming ROG Ally with its not-an-April-Fools'-joke But that's apparently just the tip of the iceberg for AMD-powered Steam Deck rivals, which have at least four handhelds based on slivers of silicon the chipmaker has yet to reveal</div>
                        <div className='pt-5'>And today, Geekbench leaks (which should always be taken with a grain of salt) suggest Asus may actually be using two such chips: a six-core, 12-thread Ryzen Z1 with two RDNA 3 graphics compute units (CUs) and an eight-core, 16-thread Ryzen Z1 Extreme with six RNDA3 CUs, which could have higher performance and power consumption.</div>
                        <div className='pt-5'>But get this. A shipping manifest spotted by VideoCardz also shows an ROG Ally with another unannounced name: the Ryzen 77840U, a 3.3GHz chip with Radeon 780M graphics that's suspected to be all but identical to that Z1 Extreme.</div>
                        <div className='pt-5'>And that Ryzen 77840U appears to be very much not exclusive to Asus - it has now been tipped for the Aokzoe A1 Pro an unannounced Ayaneo 2S, and a GPD Win Mini clamshell, according to rumors and leaks.</div>
                        <div className='pt-10'><img src={amd_ryzen} className='w-full' /></div>
                        <div className='pt-5'>This wouldn't be the first time those boutique portable PC makers have attempted to challenge the Steam Deck. A year ago, I wrote how they were all gearing up with the off-the-shelf AMD 6800U laptop chip, which sadly didn't turn out to be efficient enough for a competent portable. (Read my Ayaneo 2 review for details.)</div>
                        <div className='pt-5'>But Aokzoe, at least, seems pretty confident that it can match the Steam Deck with a 7840U: it's been posting Pro's performance to YouTube, including video after video of its A1 one tiny clip where the A1 Pro is running the same game at the same processor wattage and with similar battery drain to the Steam Deck and still manages to run notably faster.</div>
                        <div className='pt-10'><img src={amd_ryzen} className='w-full' /></div>
                        <div className='pt-5'>If that's what a 7840U can do, I'm heartened. (It wouldn't be too much of a surprise considering we're looking at Zen 4 and RDNA 3 instead of the Zen 2 and RDNA 2 in the Steam Deck's Aerith chip. )</div>
                        <div className='pt-10'><img src={amd_ryzen} className='w-full' /></div>
                        <div className='pt-5'>But it's just a tiny glimpse for now, and we don't know whether any of these companies can hit the right price with these chips or get Microsoft's help to turn Windows into something easy and comfortable to use on a gaming handheld. And AMD didn't immediately respond to a request for this story.</div>
                        <div className='pt-5'>Another thing that heartens me, though:</div>
                        <div className='pt-5'>Last July, when I reached out to my AMD PR contacts about handheld gaming PCs, they told me they didn't even have a contact who could handle such a request, adding:</div>
                        <div>
                            <div className="pl-[33px] pt-[33px] border-l border-violet-700 justify-end items-center inline-flex">
                                <div className="self-stretch pr-[68px] pb-[0.75px] justify-start items-start inline-flex">
                                    <div className="text-neutral-600 text-[17px] font-normal font-['Georgia'] leading-7">We do not have any further details to share at this time<br />regarding AMD chips in handheld gaming PCs. We’ll certainly be in<br />touch with news and opportunities as it relates to AMD in the future<br />but unfortunately at this time are not able to connect you directly.</div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-5'>This week, they introduced me to a specific person who can help me going forward.</div>
                        <div className='pt-5'>
                            <div className="h-10  pt-[10.75px] pb-[11.75px] rounded-sm border border-violet-700 justify-center items-end gap-2.5 inline-flex">
                                <div className="w-3 h-3.5 flex-col justify-center items-center inline-flex">
                                    <div className="w-3 h-3.5 relative flex-col justify-start items-start flex"></div>
                                </div>
                                <div className="self-stretch pl-px pr-[1.20px] pb-[0.50px] justify-start items-start gap-[9.05px] inline-flex">
                                    <div className="text-center text-violet-700 text-[11px] font-normal font-['Courier New'] uppercase leading-none tracking-wider">27</div>
                                    <div className="text-center text-violet-700 text-[11px] font-normal font-['Courier New'] uppercase leading-none tracking-wider">Comments (27 New)</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className='w-[100px] max-[1200px]:hidden'></div>

                <div className='w-[300px] max-[1200px]:hidden'>
                    <div className='pt-[400px]'>
                        <div className="w-[300px] h-[441.88px] relative bg-white rounded">
                            <div className='absolute right-0 -mt-44'>
                                <svg width="150" height="785" viewBox="0 0 150 785" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M67.5758 784.273L67.5758 689.41H89.1383L89.1383 753.453L97.7516 689.41H113.045L122.127 751.988L122.127 689.41H143.689L143.689 784.273H111.755C110.818 778.57 109.822 771.852 108.767 764.117L105.369 739.977L99.7438 784.273H67.5758ZM4.82188 739.859V720.816C4.82188 713.824 5.17344 708.688 5.87656 705.406C6.57969 702.164 8.0836 699.117 10.3883 696.266C12.693 693.453 15.6617 691.363 19.2945 689.996C22.8883 688.668 27.0289 688.004 31.7164 688.004C36.9508 688.004 41.3844 688.57 45.0172 689.703C48.65 690.875 51.482 692.613 53.5133 694.918C55.5055 697.262 56.9313 700.074 57.7906 703.355C58.65 706.676 59.0797 711.637 59.0797 718.238V738.16C59.0797 745.387 58.2984 751.031 56.7359 755.094C55.1734 759.156 52.3609 762.418 48.2984 764.879C44.2359 767.34 39.0406 768.57 32.7125 768.57C27.4 768.57 22.8492 767.77 19.0602 766.168C15.232 764.605 12.2828 762.555 10.2125 760.016C8.14219 757.477 6.73594 754.859 5.99375 752.164C5.2125 749.469 4.82188 745.367 4.82188 739.859ZM28.4938 745.719C28.4938 749.703 28.7086 752.203 29.1383 753.219C29.568 754.273 30.4859 754.801 31.8922 754.801C33.2984 754.801 34.2359 754.273 34.7047 753.219C35.1734 752.203 35.4078 749.703 35.4078 745.719V710.621C35.4078 706.949 35.1734 704.547 34.7047 703.414C34.2359 702.32 33.318 701.773 31.9508 701.773C30.5445 701.773 29.6266 702.281 29.1969 703.297C28.7281 704.312 28.4938 706.5 28.4938 709.859V745.719ZM68.8648 570.32H89.8414V574.539C89.8414 578.133 90.0563 580.398 90.4859 581.336C90.8766 582.312 91.8922 582.801 93.5328 582.801C94.8609 582.801 95.857 582.352 96.5211 581.453C97.1852 580.594 97.5172 579.285 97.5172 577.527C97.5172 575.145 97.3609 573.387 97.0484 572.254C96.6969 571.16 95.7008 569.949 94.0602 568.621C92.3805 567.293 88.9625 565.359 83.8063 562.82C76.9313 559.461 72.4195 556.297 70.2711 553.328C68.1227 550.359 67.0484 546.043 67.0484 540.379C67.0484 534.051 67.8688 529.266 69.5094 526.023C71.15 522.82 73.9039 520.34 77.7711 518.582C81.5992 516.863 86.2281 516.004 91.6578 516.004C97.6734 516.004 102.83 516.941 107.127 518.816C111.384 520.691 114.314 523.23 115.916 526.434C117.517 529.637 118.318 534.48 118.318 540.965V544.715H97.3414V539.793C97.3414 535.613 97.0875 532.898 96.5797 531.648C96.0328 530.398 94.9781 529.773 93.4156 529.773C91.7359 529.773 90.5641 530.184 89.9 531.004C89.2359 531.863 88.9039 533.641 88.9039 536.336C88.9039 540.047 89.3336 542.371 90.193 543.309C91.0914 544.246 95.6813 547.02 103.963 551.629C110.916 555.535 115.154 559.07 116.677 562.234C118.201 565.438 118.963 569.227 118.963 573.602C118.963 579.812 118.142 584.383 116.502 587.312C114.861 590.281 112.088 592.566 108.181 594.168C104.236 595.77 99.6656 596.57 94.4703 596.57C89.3141 596.57 84.9391 595.906 81.3453 594.578C77.7125 593.289 74.9391 591.57 73.025 589.422C71.0719 587.273 69.9 585.281 69.5094 583.445C69.0797 581.609 68.8648 578.738 68.8648 574.832V570.32ZM35.7594 605.535V593.289H29.3727V580.984H35.7594L35.7594 539.383C35.7594 534.266 35.5055 531.414 34.9977 530.828C34.4508 530.242 32.2438 529.949 28.3766 529.949L28.3766 517.41H37.9273C43.318 517.41 47.1656 517.625 49.4703 518.055C51.775 518.523 53.8063 519.559 55.5641 521.16C57.3219 522.801 58.4156 524.656 58.8453 526.727C59.275 528.836 59.4898 533.758 59.4898 541.492L59.4898 580.984H64.5875V593.289H59.4898V605.535H35.7594ZM130.798 440.273H105.955C99.2359 440.273 94.0797 439.746 90.4859 438.691C86.8531 437.637 84.1383 436.113 82.3414 434.121C80.5055 432.129 79.275 429.707 78.65 426.855C77.9859 424.043 77.6539 419.668 77.6539 413.73V405.469C77.6539 399.414 78.2789 395 79.5289 392.227C80.7789 389.453 83.0836 387.324 86.443 385.84C89.7633 384.355 94.1188 383.613 99.5094 383.613H106.13V345.41H130.798V440.273ZM106.13 424.043V399.902C105.427 399.863 104.822 399.844 104.314 399.844C102.048 399.844 100.486 400.391 99.6266 401.484C98.7281 402.617 98.2789 404.941 98.2789 408.457V416.25C98.2789 419.492 98.7867 421.602 99.8023 422.578C100.818 423.555 102.927 424.043 106.13 424.043ZM17.7125 395.859V376.816C17.7125 369.824 18.0641 364.688 18.7672 361.406C19.4703 358.164 20.9742 355.117 23.2789 352.266C25.5836 349.453 28.5523 347.363 32.1852 345.996C35.7789 344.668 39.9195 344.004 44.607 344.004C49.8414 344.004 54.275 344.57 57.9078 345.703C61.5406 346.875 64.3727 348.613 66.4039 350.918C68.3961 353.262 69.8219 356.074 70.6813 359.355C71.5406 362.676 71.9703 367.637 71.9703 374.238V394.16C71.9703 401.387 71.1891 407.031 69.6266 411.094C68.0641 415.156 65.2516 418.418 61.1891 420.879C57.1266 423.34 51.9313 424.57 45.6031 424.57C40.2906 424.57 35.7398 423.77 31.9508 422.168C28.1227 420.605 25.1734 418.555 23.1031 416.016C21.0328 413.477 19.6266 410.859 18.8844 408.164C18.1031 405.469 17.7125 401.367 17.7125 395.859ZM41.3844 401.719C41.3844 405.703 41.5992 408.203 42.0289 409.219C42.4586 410.273 43.3766 410.801 44.7828 410.801C46.1891 410.801 47.1266 410.273 47.5953 409.219C48.0641 408.203 48.2984 405.703 48.2984 401.719V366.621C48.2984 362.949 48.0641 360.547 47.5953 359.414C47.1266 358.32 46.2086 357.773 44.8414 357.773C43.4352 357.773 42.5172 358.281 42.0875 359.297C41.6188 360.312 41.3844 362.5 41.3844 365.859V401.719ZM125.584 251.164L125.994 244.309C123.884 247.082 121.56 249.152 119.021 250.52C116.482 251.887 113.709 252.57 110.701 252.57C107.029 252.57 103.865 251.574 101.209 249.582C98.5133 247.629 96.8336 245.363 96.1695 242.785C95.5055 240.207 95.1734 235.832 95.1734 229.66L95.1734 196.906C95.1734 189.836 95.6031 184.797 96.4625 181.789C97.2828 178.82 99.0016 176.438 101.619 174.641C104.197 172.883 107.322 172.004 110.994 172.004C113.923 172.004 116.638 172.688 119.138 174.055C121.638 175.422 123.923 177.453 125.994 180.148V162.336H149.666V251.164H125.584ZM118.845 228.547C118.845 233.352 119.021 236.262 119.373 237.277C119.724 238.293 120.701 238.801 122.302 238.801C123.865 238.801 124.88 238.215 125.349 237.043C125.779 235.871 125.994 233.039 125.994 228.547V196.32C125.994 191.633 125.759 188.703 125.291 187.531C124.822 186.359 123.806 185.773 122.244 185.773C120.72 185.773 119.783 186.301 119.431 187.355C119.041 188.449 118.845 191.066 118.845 195.207V228.547ZM33.1227 251.164V173.41H57.2047L56.7945 179.855C58.4352 177.238 60.4664 175.266 62.8883 173.938C65.2711 172.648 68.025 172.004 71.15 172.004C74.7047 172.004 77.6539 172.629 79.9977 173.879C82.3414 175.129 84.0797 176.789 85.2125 178.859C86.3063 180.93 86.9898 183.078 87.2633 185.305C87.5367 187.57 87.6734 192.043 87.6734 198.723L87.6734 251.164H64.0016L64.0016 198.254C64.0016 192.199 63.8258 188.605 63.4742 187.473C63.0836 186.34 62.068 185.773 60.4273 185.773C58.6695 185.773 57.6344 186.359 57.3219 187.531C56.9703 188.703 56.7945 192.473 56.7945 198.84L56.7945 251.164H33.1227ZM0.251556 268.273V173.41H24.6266V268.273H0.251556ZM101.267 49.0469H123.474V54.2617C123.474 60.2773 122.791 64.9062 121.423 68.1484C120.017 71.4297 117.224 74.3203 113.045 76.8203C108.865 79.3203 103.435 80.5703 96.7555 80.5703C88.7477 80.5703 82.7125 79.1445 78.65 76.293C74.5875 73.4805 72.1461 70.0039 71.3258 65.8633C70.5055 61.7617 70.0953 53.2852 70.0953 40.4336V1.41016H93.1227V8.32422C94.568 5.55078 96.443 3.46094 98.7477 2.05469C101.013 0.6875 103.728 0.00390625 106.892 0.00390625C111.033 0.00390625 114.841 1.15625 118.318 3.46094C121.755 5.80469 123.474 10.9023 123.474 18.7539V25.1406C123.474 30.9609 122.556 34.9258 120.72 37.0352C118.884 39.1445 114.334 41.6055 107.068 44.418C99.2945 47.4648 95.1344 49.5156 94.5875 50.5703C94.0406 51.625 93.7672 53.7734 93.7672 57.0156C93.7672 61.0781 94.0797 63.7148 94.7047 64.9258C95.2906 66.1758 96.2867 66.8008 97.693 66.8008C99.2945 66.8008 100.291 66.2734 100.681 65.2188C101.072 64.2031 101.267 61.5273 101.267 57.1914V49.0469ZM93.7672 38.3828C97.5563 35.6094 99.7633 33.2852 100.388 31.4102C100.974 29.5352 101.267 26.8398 101.267 23.3242C101.267 19.3008 101.013 16.7031 100.505 15.5312C99.9586 14.3594 98.9039 13.7734 97.3414 13.7734C95.857 13.7734 94.9 14.2227 94.4703 15.1211C94.0016 16.0586 93.7672 18.4805 93.7672 22.3867V38.3828ZM38.2789 79.1641L39.2164 68.9688C35.7789 76.2734 30.7984 80.1406 24.275 80.5703L24.275 53.207C28.6109 53.207 31.7945 52.6211 33.8258 51.4492C35.857 50.2773 37.107 48.6367 37.5758 46.5273C38.0445 44.457 38.2789 39.6523 38.2789 32.1133V1.41016H61.9508V79.1641H38.2789Z" fill="#3CFFD0" />
                                </svg>
                            </div>

                            <div className="w-[260px] h-[381.88px] left-[20px] top-[20px] absolute">
                                <div className="pl-7 pr-[13.88px] pb-[22.19px] left-0 top-0 absolute justify-end items-center inline-flex">
                                    <div className="w-[218.12px] h-[38.19px] text-black text-base font-bold font-['Arial'] leading-tight tracking-tight">My week with Dyson’s<br />absurd wearable air purifier</div>
                                </div>
                                <div className="pl-7 pr-[18.10px] pb-[22.20px] left-0 top-[80.38px] absolute justify-end items-center inline-flex">
                                    <div className="w-[213.90px] h-[38.18px] text-black text-base font-bold font-['Arial'] leading-tight tracking-tight">The Hunger Games prequel<br />film gets its first trailer</div>
                                </div>
                                <div className="pl-7 pr-[0.72px] pb-[22.19px] left-0 top-[160.75px] absolute justify-end items-center inline-flex">
                                    <div className="w-[231.28px] h-[38.19px] text-black text-base font-bold font-['Arial'] leading-tight tracking-tight">The OnePlus Pad is an<br />impressive tablet for its price</div>
                                </div>
                                <div className="w-[160.20px] h-[19px] left-[28px] top-[241.13px] absolute text-black text-base font-bold font-['Arial'] leading-tight tracking-tight">They’re ‘skeets’ now</div>
                                <div className="pl-7 pr-[4.14px] pb-[22.18px] left-0 top-[302.31px] absolute justify-end items-center inline-flex">
                                    <div className="w-[227.86px] h-[57.38px] text-black text-[15px] font-bold font-['Arial'] leading-tight tracking-tight">Former Apple employee must<br />repay $19 million after<br />defrauding the company</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-[700px]'>
                        <div className="w-[300px] h-[188.88px] px-3 pt-4 border-t border-violet-700 flex-col justify-start items-start gap-2.5 inline-flex">
                            <div className="pr-[5px] pb-px justify-start items-start inline-flex">
                                <div className="text-violet-700 text-[15px] font-normal font-['Courier New'] leading-tight">Verge Deals / Sign up for Verge<br />Deals to get deals on products<br />we've tested sent to your inbox<br />daily.</div>
                            </div>
                            <div className="pb-[0.01px] flex-col justify-start items-end gap-1.5 flex">
                                <div className="pl-[19px] pr-[20.16px] pt-3 pb-[13.59px] rounded-sm border border-violet-700 justify-start items-start inline-flex">
                                    <div className="text-center text-violet-700 text-xs font-normal font-['Courier New'] uppercase leading-none tracking-wider">Sign up</div>
                                </div>
                                <div className="w-[276px] h-[36.28px] relative">
                                    <span className="left-0 top-[-1px]  text-violet-700 text-[11px] font-bold font-['Arial'] leading-3">By submitting your email, you agree to our&nbsp;</span>
                                    <span className="left-[198.67px] top-[-1px] "><span className="text-violet-700 text-[11px] font-bold font-['Arial'] underline leading-3">Terms&nbsp;</span><span className="text-violet-700 text-[11px] font-bold font-['Arial'] leading-3"> and&nbsp;</span></span>
                                    <span className="left-0 top-[11.10px] "><span className="text-violet-700 text-[11px] font-bold font-['Arial'] underline leading-3">Privacy Notice&nbsp;</span><span className="text-violet-700 text-[11px] font-bold font-['Arial'] leading-3">. This site is protected by reCAPTCHA and the Google&nbsp;</span></span>
                                    <span className="left-[54.02px] top-[23.19px]  text-violet-700 text-[11px] font-bold font-['Arial'] underline leading-3">Privacy Policy&nbsp;</span>
                                    <span className="left-[119.41px] top-[23.19px]  text-violet-700 text-[11px] font-bold font-['Arial'] leading-3">and&nbsp;</span>
                                    <span className="left-[140.05px] top-[23.19px]  text-violet-700 text-[11px] font-bold font-['Arial'] underline leading-3">Terms of Service&nbsp;</span>
                                    <span className="left-[219.72px] top-[23.19px]  text-violet-700 text-[11px] font-bold font-['Arial'] leading-3">apply.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >



            <div className='flex justify-center pt-20'>
                <div className="">
                    <div className='bg-[#3CFFD0]'>
                        <div className=" justify-center items-center inline-flex">
                            <div className="w-[1100px] relative flex-col justify-start items-start flex text-[25px] max-[1200px]:w-[95%]">
                                <div className="justify-start items-start gap-[9.86px] inline-flex">
                                    <div className="text-neutral-900 text-base font-normal font-['Courier New'] leading-tight tracking-tight">More from this stream</div>
                                    <div className="self-stretch pb-px border-b border-neutral-900 justify-center items-center inline-flex">
                                        <div className="text-neutral-900 text-base font-normal font-['Courier New'] leading-tight tracking-tight">Steam Deck, ROG Ally, and more: all the news about the handheld PC gaming revolution</div>
                                    </div>
                                </div>
                                <div className="flex-col justify-center items-start inline-flex">
                                    <div className="flex-col justify-start items-start flex">
                                        <div className='flex'>
                                            <div className="w-5 h-5 mt-2 -ml-[10.5px] bg-black rounded-full border border-black border-opacity-30"></div>
                                            <div className="text-black  font-bold font-['Arial'] leading-[34px]">Leak: the Asus ROG Ally will cost $699.99 with an AMD Z1 Extreme</div>
                                        </div>
                                        <div className="w-px border-l border-b border-black border-opacity-30"></div>
                                        <div className="pt-0.5 pb-[23px] border-b border-black border-opacity-30 justify-start items-center inline-flex">
                                            <div className="text-black text-xs font-bold font-['Arial'] leading-[18px]">Apr 27, 2023, 9:19 AM GMT+7</div>
                                        </div>
                                    </div>
                                    <div className="relative flex-col justify-start items-start flex">
                                        <div className='flex'>
                                            <div className="w-5 h-5 mt-2 -ml-[10.5px] bg-black rounded-full border border-black border-opacity-30"></div>
                                            <div className="pt-1 pb-[3px] justify-start items-start inline-flex">
                                                <div className="text-black  font-bold font-['Arial'] leading-[34px]">Ayaneo 2S will officially be one of the first Steam Deck rivals with<br />Ryzen 7000</div>
                                            </div>
                                        </div>
                                        <div className="w-px  border-l border-b border-black border-opacity-30"></div>
                                        <div className="pt-0.5 pb-[23px] border-b border-black border-opacity-30 justify-start items-center inline-flex">
                                            <div className="h-3.5 text-black text-xs font-bold font-['Arial'] leading-[18px]">Apr 27, 2023, 3:54 AM GMT+7</div>
                                        </div>
                                    </div>
                                    <div className="relative flex-col justify-start items-start flex">
                                        <div className='flex'>
                                            <div className="w-5 h-5 mt-2 -ml-[10.5px] bg-black rounded-full border border-black border-opacity-30"></div>
                                            <div className=" text-black  font-bold font-['Arial'] leading-[34px]">The Asus ROG Ally will have an Extreme upsell.</div>
                                        </div>
                                        <div className="w-px  border-l border-b border-black border-opacity-30"></div>
                                        <div className="pt-0.5 pb-[23px] border-b border-black border-opacity-30 justify-start items-center inline-flex">
                                            <div className="h-3.5 text-black text-xs font-bold font-['Arial'] leading-[18px]">Apr 27, 2023, 1:57 AM GMT+7</div>
                                        </div>
                                    </div>
                                    <div className="relative flex-col justify-start items-start flex">
                                        <div className='flex'>
                                            <div className="w-5 h-5 mt-2 -ml-[10.5px] bg-black rounded-full border-r border-t border-black border-opacity-30"></div>
                                            <div className="text-black  font-bold font-['Arial'] leading-[34px]">Asus ROG Ally hands-on: Windows but tiny</div>
                                        </div>
                                        <div className="h-3.5 text-black text-xs font-bold font-['Arial'] leading-[18px]">Apr 25, 2023, 9:00 PM GMT+7</div>
                                    </div>
                                </div>
                                <div className="pb-[5px] pt-[20px] border-b border-neutral-900 justify-center items-center inline-flex ">
                                    <div className="h-3.5 text-neutral-900 text-xs font-bold font-['Arial'] uppercase leading-[14.40px] tracking-widest">See all 114 stories</div>
                                </div>
                                <div className="w-3 h-3 justify-center items-center inline-flex">
                                    <div className="w-3 h-3 relative flex-col justify-start items-start flex"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default DetailPage;