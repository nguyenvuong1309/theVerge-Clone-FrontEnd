
import { Fragment, useEffect, useRef, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useLocation, useNavigate } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        // Toggle body class to disable scrolling
        if (showOverlay) {
            document.body.classList.add('overflow-hidden');
            document.body.style.paddingRight = '15px'
            //document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('overflow-hidden');
            //document.body.classList.remove('no-scroll');
        }

        // Cleanup effect
        return () => {
            document.body.classList.remove('overflow-hidden');
            document.body.style.paddingRight = ''
            //document.body.classList.remove('no-scroll');
        };
    }, [showOverlay]);

    const handleTransitionExited = () => {
        setShowOverlay(false);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Update windowWidth when the component mounts or when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup: Remove event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const navigate = useNavigate();
    const location = useLocation();
    const [pathname, setPathName] = useState("");
    useEffect(() => {
        setPathName(location.pathname)
    }, [location.pathname])

    return (
        <div className={``}>
            {
                windowWidth >= 770 ? (
                    <div className={`flex items-center justify-around gap-2 w-[701px] h-[39px] border ${pathname === "/detailpage" ? ' border-black ' : ' border-white '} border-x-0 border-t-0 border-b-1 pb-1`}>
                        <div className={`absolute -left-32 top-0 ${pathname === "/" ? ' hidden ' : ' '}`}>
                            <svg width="767" height="149" viewBox="0 0 767 149" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                <path d="M575.644 20.4868L574.894 43.0347C548.565 41.23 541.043 47.9962 541.043 70.0917V72.9428H518.478V21.839H541.043V36.4202C547.814 24.5459 556.992 19.1345 575.644 20.4868ZM38.5686 112.182H61.1339V24.9934H38.5686V112.182ZM150.346 20.6384C134.549 20.6384 124.922 27.7028 119.807 35.5179V-12.5832H0.957275V8.46088H98.7453V72.9428H120.257C120.257 54.454 130.94 41.3817 144.028 41.3817C155.313 41.3817 160.426 46.9422 160.426 66.9348V112.182H182.991V58.819C182.991 33.2658 169.904 20.6384 150.346 20.6384ZM239.106 94.8916C225.417 94.8916 216.541 86.6242 215.037 72.9453H193.824C195.929 96.997 211.726 113.984 238.957 113.984C260.018 113.984 271.903 104.514 278.072 90.2334L258.964 81.8143C256.106 90.3826 250.841 94.8916 239.106 94.8916ZM238.204 21.0858C230.149 20.9079 222.18 22.7694 215.037 26.4972L225.867 41.8291C229.929 39.7262 234.294 38.6722 238.957 38.8214C251.594 38.8214 258.062 47.0914 258.964 57.9117H237.15V72.9453H280.178C280.478 70.6907 280.63 68.5853 280.63 66.3333C280.779 33.5616 259.116 21.0858 238.204 21.0858ZM461.61 94.8916C447.921 94.8916 439.044 86.6242 437.541 72.9453H416.328C418.433 96.997 434.23 113.984 461.461 113.984C482.522 113.984 494.406 104.514 500.576 90.2334L481.468 81.8143C478.461 90.3826 473.196 94.8916 461.61 94.8916ZM460.859 21.0858C452.803 20.9075 444.833 22.769 437.69 26.4972L448.523 41.8291C452.584 39.7262 456.947 38.6722 461.61 38.8214C474.247 38.8214 480.717 47.0914 481.62 57.9117H459.805V72.9453H502.833C503.134 70.6907 503.283 68.5853 503.283 66.3333C503.434 33.5616 481.769 21.0858 460.859 21.0858ZM725.334 94.8916C711.645 94.8916 702.769 86.6242 701.265 72.9453H680.052C682.157 96.997 697.954 113.984 725.185 113.984C746.246 113.984 758.131 104.514 764.3 90.2334L745.193 81.8143C742.185 90.3826 736.92 94.8916 725.334 94.8916ZM724.131 21.0858C716.076 20.9078 708.107 22.7693 700.964 26.4972L711.794 41.8291C715.859 39.7262 720.221 38.6722 724.884 38.8214C737.522 38.8214 743.989 47.0914 744.892 57.9117H723.08V72.9453H766.105C766.406 70.6907 766.557 68.5853 766.557 66.3333C766.706 33.5616 745.043 21.0858 724.131 21.0858ZM292.213 -23.2568L332.8 72.9428H357.473L326.514 -3.56501H366.531V-23.1052L292.213 -23.2544V-23.2568ZM412.567 -23.1077L366.079 94.5934L359.159 112.182H382.778L438.592 -23.1052H412.567V-23.1077ZM620.027 110.077C629.654 110.077 637.628 107.37 643.194 102.712L634.168 88.4313C631.31 89.6344 628.15 90.0843 624.991 90.0843C612.654 90.0843 605.582 82.7191 603.176 72.9478H581.061C584.071 93.8427 599.115 110.077 620.027 110.077ZM647.857 34.4664C642.744 26.3506 632.361 20.4868 617.919 20.4868C603.778 20.3376 590.69 28.0036 583.77 40.4794L602.575 52.5052C606.035 45.2892 612.806 40.4794 623.186 40.4794C637.929 40.4794 647.857 51.9037 647.857 65.431C647.857 67.9888 647.556 70.5441 646.805 72.9478H670.425V21.9906H647.857V34.4664ZM626.045 130.519C611.451 130.519 606.035 123.455 604.981 115.188H583.469C583.919 130.972 594.451 148.257 626.495 148.257C648.158 148.257 662.299 137.435 668.168 121.2L647.857 114.136C644.998 124.658 637.176 130.519 626.045 130.519Z"
                                    fill={`${pathname === "/detailpage" ? ' black ' : ' white '}`} />
                            </svg>
                        </div>
                        <div className='mb-3' onClick={() => navigate("/")}>
                            <div className=" font-[300] text-[20px] ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 309 70" role="img" className={`h-[28px] w-[117px] hover:opacity-60 hover:transition-all hover:ease-in-out md:translate-y-2 ${pathname === '/detailpage' ? ' fill-black  ' : ' fill-white  '}`} width="100%" height="100%" fill="none"><title>The Verge</title><desc>The Verge logo.</desc><path d="m231.196 17.897-.302 9.071c-10.592-.726-13.618 1.996-13.618 10.885V39h-9.078V18.441h9.078v5.866c2.724-4.777 6.416-6.954 13.92-6.41ZM15.131 54.786h9.078V19.71h-9.078v35.075Zm44.968-36.828c-6.355 0-10.228 2.842-12.286 5.986V4.593H0v8.466h39.34V39h8.654c0-7.438 4.298-12.697 9.563-12.697 4.54 0 6.597 2.237 6.597 10.28v18.203h9.078V33.318c0-10.28-5.265-15.36-13.133-15.36ZM95.807 47.83c-5.507 0-9.078-3.326-9.683-8.829H77.59c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.15 3.447-3.268 5.261-7.989 5.261Zm-.363-29.692a19.226 19.226 0 0 0-9.32 2.177l4.357 6.168c1.634-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68H95.02v6.048h17.31c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM185.32 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.302-29.692a19.226 19.226 0 0 0-9.321 2.177l4.358 6.168c1.634-.846 3.389-1.27 5.265-1.21 5.084 0 7.687 3.327 8.05 7.68h-8.776v6.048h17.31c.121-.907.181-1.754.181-2.66.061-13.184-8.655-18.203-17.067-18.203ZM291.416 47.83c-5.507 0-9.078-3.326-9.683-8.829h-8.534c.847 9.676 7.202 16.51 18.157 16.51 8.473 0 13.254-3.81 15.736-9.555l-7.687-3.387c-1.21 3.447-3.328 5.261-7.989 5.261Zm-.484-29.692a19.225 19.225 0 0 0-9.32 2.177l4.357 6.168c1.635-.846 3.39-1.27 5.266-1.21 5.084 0 7.686 3.327 8.049 7.68h-8.775v6.048h17.309c.121-.907.182-1.754.182-2.66.06-13.184-8.655-18.203-17.068-18.203ZM117.172.299 133.5 39h9.926L130.971 8.221h16.099V.36L117.172.3Zm48.418.06L146.888 47.71l-2.784 7.076h9.502L176.06.36h-10.47Zm83.461 53.58c3.873 0 7.081-1.089 9.32-2.963l-3.631-5.745c-1.15.484-2.421.665-3.692.665-4.963 0-7.808-2.963-8.776-6.894h-8.897c1.211 8.406 7.263 14.937 15.676 14.937Zm11.196-30.418c-2.057-3.265-6.234-5.624-12.044-5.624-5.689-.06-10.954 3.024-13.738 8.043l7.565 4.838c1.392-2.903 4.116-4.838 8.292-4.838 5.931 0 9.925 4.596 9.925 10.038 0 1.029-.121 2.057-.423 3.024h9.502v-20.5h-9.079v5.019Zm-8.775 38.642c-5.871 0-8.05-2.842-8.474-6.168h-8.654c.181 6.35 4.418 13.304 17.309 13.304 8.715 0 14.404-4.354 16.765-10.885l-8.171-2.842c-1.15 4.233-4.297 6.591-8.775 6.591Z"></path></svg>
                            </div>
                        </div>
                        <div className="text-[20px] ">/</div>
                        <div className="text-[20px]  hover:opacity-60 hover:transition-all hover:ease-in-out " onClick={() => navigate("/allTech")}>Tech</div>
                        <div className="text-[20px] ">/</div>
                        <div className="text-[20px]  hover:opacity-60 hover:transition-all hover:ease-in-out ">Reviews</div>
                        <div className="text-[20px] ">/</div>
                        <div className="text-[20px]  hover:opacity-60 hover:transition-all hover:ease-in-out ">Science</div>
                        <div className="text-[20px] ">/</div>
                        <div className="text-[20px]  hover:opacity-60 hover:transition-all hover:ease-in-out ">Entertainment</div>
                        <div className="text-[20px] ">/</div>

                        <Menu as="div" className="inline-block text-left">
                            <div className='flex gap-2 items-center justify-center hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                <Menu.Button
                                    //className="flex gap-1"
                                    onClick={() => setShowOverlay(!showOverlay)}
                                    className={`flex gap-1 focus:outline-none ${showOverlay ? 'pointer-events-none' : ''}`}
                                >
                                    <div className="text-[20px] ">
                                        More
                                    </div>
                                    <div>
                                        <div className='text-[50px]   h-[25px] mb-1 flex justify-center items-center font-medium'>+</div>
                                    </div>
                                </Menu.Button>
                            </div>
                            {showOverlay && (
                                <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
                                    {/* This is the overlay that will cover the entire screen when the transition is active */}
                                </div>
                            )}
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                afterLeave={handleTransitionExited}
                            >
                                <Menu.Items className=" fixed right-0 top-0 h-screen w-[340px] z-40 origin-top-right bg-[#5200ff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto">
                                    <div className="pt-[24px] pl-[16px]">
                                        <div>
                                            <div className='w-[257px] h-[51px] flex border-none bg-[#2e257e] justify-between'>
                                                <input className='h-full bg-[#2e257e] pl-2' placeholder='SEARCH...' />
                                                <div className='flex items-center w-8'>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Search</title>
                                                        <path d="M16.81 14.888h-1.013l-.358-.346a8.288 8.288 0 0 0 2.01-5.417A8.325 8.325 0 0 0 9.126.8 8.325 8.325 0 0 0 .8 9.125a8.325 8.325 0 0 0 8.325 8.325 8.288 8.288 0 0 0 5.417-2.011l.346.358v1.012l6.404 6.391 1.908-1.908-6.39-6.404Zm-7.685 0a5.756 5.756 0 0 1-5.763-5.763 5.756 5.756 0 0 1 5.763-5.763 5.756 5.756 0 0 1 5.763 5.763 5.756 5.756 0 0 1-5.763 5.763Z" fill="#3DFFD0">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Tech
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[552px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL TECH</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AMAZON</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>APPLE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>FACEBOOK</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GOOGLE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MICROSOFT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SAMSUNG</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AI</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>BUSINESS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>CREATORS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MOBILE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>POLICY</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SECURITY</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Reviews
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[508px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL REVIEWS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>BUYING GUIDES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DEALS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GIFT GUIDE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>LAPTOPS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>PHONES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HEADPHONES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TABLETS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SMART HOME</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SMARTWATCHES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SPEAKERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DRONES</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Science
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[244px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL SCIENCE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SPACE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ENERGY</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ENVIROMENT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HEALTH</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>COVID-19</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Entertainment
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[200px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL ENTERTAINMENT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GAMES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TV SHOWS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MOVIES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AUDIO</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Cars
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[268px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ELECTRIC CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AUTONOMOUS CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>RIDE-SHARING</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SCOOTERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out w-20'>OTHER TRANSPORTATION</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 border-black border-b-[0.5px] border-opacity-30 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                            <div className='flex justify-between items-center w-full'>
                                                <div className=''>
                                                    Features
                                                </div>
                                            </div>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Videos
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[156px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL VIDEO</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>YOUTUBE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TIKTOK</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>INSTAGRAM</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Podcasts
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[112px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL PODCASTS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DECODER</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>THE VERGECAST</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Newsletters
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[200px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL NEWSLETTERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>COMMAND LINE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HOT POD</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>INSTALLER</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>VERGE DEALS</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 hover:opacity-60 hover:transition-all hover:ease-in-out">
                                            <div className='flex justify-between items-center w-full'>
                                                <div className=''>
                                                    Store
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-[#3cffd0] text-[12px]'>
                                            ACCOUNT
                                        </div>

                                        <div className='flex gap-2 mt-2'>
                                            <div className='text-[#3cffd0] text-[18px] underline underline-offset-[5px] hover:opacity-60 hover:transition-all hover:ease-in-out'>Log In</div>
                                            <div className='text-[#3cffd0] text-[18px]'>/</div>
                                            <div className='text-[#3cffd0] text-[18px] underline underline-offset-[5px] hover:opacity-60 hover:transition-all hover:ease-in-out'>Sign Up</div>
                                        </div>


                                        <div className='text-[#3cffd0] text-[12px] mt-6'>
                                            FOLLOW US
                                        </div>

                                        <div className='flex justify-between mt-4 mb-4 w-[273px]'>
                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M26.0174 21.7497L26.8495 16.3604H21.6403V12.8637C21.6403 11.3906 22.3668 9.95151 24.7019 9.95151H27.0714V5.36435C27.0714 5.36435 24.9212 5 22.866 5C18.5761 5 15.7707 7.57929 15.7707 12.2529V16.3604H11V21.7497H15.7707V34.7746C16.727 34.924 17.707 35 18.7055 35C19.704 35 20.6841 34.9214 21.6403 34.7746V21.7497H26.0174Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M32.7239 13.5843C32.7435 13.8647 32.7435 14.1452 32.7435 14.4282C32.7435 23.0512 26.1393 32.9961 14.0635 32.9961V32.991C10.4962 32.9962 7.00305 31.9805 4 30.0654C4.51871 30.1274 5.04002 30.1584 5.56262 30.1597C8.51887 30.1623 11.3906 29.1763 13.7164 27.3608C10.907 27.3078 8.44347 25.487 7.58286 22.8289C8.56697 23.0176 9.58099 22.9788 10.5469 22.7165C7.48405 22.1014 5.28052 19.4265 5.28052 16.32C5.28052 16.2915 5.28052 16.2644 5.28052 16.2373C6.19313 16.7425 7.21495 17.0229 8.26017 17.054C5.37542 15.1376 4.48621 11.3229 6.22823 8.34048C9.56149 12.4175 14.4795 14.8959 19.7588 15.1583C19.2297 12.8917 19.9525 10.5166 21.6582 8.92327C24.3024 6.45254 28.4612 6.57918 30.9468 9.20627C32.4171 8.91811 33.8264 8.38183 35.116 7.622C34.6259 9.13262 33.6002 10.4158 32.2299 11.2312C33.5313 11.0787 34.8027 10.7324 36 10.2039C35.1186 11.5168 34.0084 12.6604 32.7239 13.5843Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M14.1274 6C9.65144 6 6 9.65144 6 14.1274V25.8726C6 30.3486 9.65144 34 14.1274 34H25.8726C30.3486 34 34 30.3486 34 25.8726V14.1274C34 9.65144 30.3486 6 25.8726 6H14.1274ZM14.1274 8.15385H25.8726C29.1833 8.15385 31.8462 10.8125 31.8462 14.1274V25.8726C31.8462 29.1833 29.1875 31.8462 25.8726 31.8462H14.1274C10.8167 31.8462 8.15385 29.1875 8.15385 25.8726V14.1274C8.15385 10.8167 10.8125 8.15385 14.1274 8.15385ZM28.0769 10.3077C27.1851 10.3077 26.4615 11.0313 26.4615 11.9231C26.4615 12.8149 27.1851 13.5385 28.0769 13.5385C28.9688 13.5385 29.6923 12.8149 29.6923 11.9231C29.6923 11.0313 28.9688 10.3077 28.0769 10.3077ZM20 12.4615C15.848 12.4615 12.4615 15.848 12.4615 20C12.4615 24.152 15.848 27.5385 20 27.5385C24.152 27.5385 27.5385 24.152 27.5385 20C27.5385 15.848 24.152 12.4615 20 12.4615ZM20 14.6154C22.9868 14.6154 25.3846 17.0132 25.3846 20C25.3846 22.9868 22.9868 25.3846 20 25.3846C17.0132 25.3846 14.6154 22.9868 14.6154 20C14.6154 17.0132 17.0132 14.6154 20 14.6154Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Youtube</title><path d="M33.4148 12.0057C33.0928 10.8232 32.1436 9.891 30.9396 9.57475C28.7556 9 20 9 20 9C20 9 11.2444 9 9.0604 9.57475C7.8564 9.891 6.9072 10.8232 6.5852 12.0057C6 14.1507 6 20 6 20C6 20 6 25.8492 6.5852 27.9942C6.9072 29.1767 7.8564 30.109 9.0604 30.4253C11.2444 31 20 31 20 31C20 31 28.7556 31 30.9396 30.4253C32.145 30.109 33.0928 29.1767 33.4148 27.9942C34 25.8492 34 20 34 20C34 20 34 14.1507 33.4148 12.0057ZM17.2 24.763V15.237L25.6 20L17.2 24.763Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><title>RSS</title><path fill="#3cffd0" d="M8.24016 26.6668C9.84547 26.6668 11.1468 25.3655 11.1468 23.7602C11.1468 22.1549 9.84547 20.8535 8.24016 20.8535C6.63485 20.8535 5.3335 22.1549 5.3335 23.7602C5.3335 25.3655 6.63485 26.6668 8.24016 26.6668Z"></path><path fill="#3cffd0" d="M5.3335 5.91992V9.69326C14.7068 9.69326 22.3068 17.2933 22.3068 26.6666H26.0802C26.0802 15.2133 16.7868 5.91992 5.3335 5.91992ZM5.3335 13.4666V17.2399C10.5335 17.2399 14.7602 21.4666 14.7602 26.6666H18.5335C18.5335 19.3733 12.6268 13.4666 5.3335 13.4666Z"></path></svg>
                                            </div>
                                        </div>


                                        {/* <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item> */}



                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>

                ) : (

                    <div className="">
                        <Menu as="div" className="inline-block text-left border border-slate-100 border-x-0 border-t-0 pb-2">
                            <div className='flex gap-2 items-center justify-center hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                <Menu.Button
                                    //className="flex gap-1"
                                    onClick={() => setShowOverlay(!showOverlay)}
                                    className={`flex gap-1 focus:outline-none ${showOverlay ? 'pointer-events-none' : ''}`}
                                >
                                    <div className="text-[20px] ">
                                        Menu
                                    </div>
                                    <div>
                                        <div className='text-[50px]   h-[25px] mb-1 flex justify-center items-center font-medium'>+</div>
                                    </div>
                                </Menu.Button>
                            </div>
                            {showOverlay && (
                                <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
                                    {/* This is the overlay that will cover the entire screen when the transition is active */}
                                </div>
                            )}
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                                afterLeave={handleTransitionExited}
                            >
                                <Menu.Items className=" fixed right-0 top-0 h-screen w-[340px] z-40 origin-top-right bg-[#5200ff] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-auto">
                                    <div className="pt-[24px] pl-[16px]">
                                        <div>
                                            <div className='w-[257px] h-[51px] flex border-none bg-[#2e257e] justify-between'>
                                                <input className='h-full bg-[#2e257e] pl-2' placeholder='SEARCH...' />
                                                <div className='flex items-center w-8'>
                                                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <title>Search</title>
                                                        <path d="M16.81 14.888h-1.013l-.358-.346a8.288 8.288 0 0 0 2.01-5.417A8.325 8.325 0 0 0 9.126.8 8.325 8.325 0 0 0 .8 9.125a8.325 8.325 0 0 0 8.325 8.325 8.288 8.288 0 0 0 5.417-2.011l.346.358v1.012l6.404 6.391 1.908-1.908-6.39-6.404Zm-7.685 0a5.756 5.756 0 0 1-5.763-5.763 5.756 5.756 0 0 1 5.763-5.763 5.756 5.756 0 0 1 5.763 5.763 5.756 5.756 0 0 1-5.763 5.763Z" fill="#3DFFD0">
                                                        </path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Tech
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[552px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'
                                                            onClick={() => {
                                                                console.log('Clicked on ALL TECH');
                                                                navigate("/allTech");
                                                            }}>ALL TECH</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AMAZON</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>APPLE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>FACEBOOK</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GOOGLE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MICROSOFT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SAMSUNG</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AI</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>BUSINESS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>CREATORS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MOBILE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>POLICY</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SECURITY</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Reviews
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[508px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL REVIEWS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>BUYING GUIDES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DEALS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GIFT GUIDE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>LAPTOPS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>PHONES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HEADPHONES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TABLETS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SMART HOME</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SMARTWATCHES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SPEAKERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DRONES</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Science
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[244px] bg-[#5200ff] ml-5'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL SCIENCE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SPACE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ENERGY</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ENVIROMENT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HEALTH</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>COVID-19</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Entertainment
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[200px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL ENTERTAINMENT</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>GAMES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TV SHOWS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>MOVIES</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AUDIO</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Cars
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[268px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>ELECTRIC CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>AUTONOMOUS CARS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>RIDE-SHARING</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>SCOOTERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out w-20'>OTHER TRANSPORTATION</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 border-black border-b-[0.5px] border-opacity-30 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                            <div className='flex justify-between items-center w-full'>
                                                <div className=''>
                                                    Features
                                                </div>
                                            </div>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Videos
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[156px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL VIDEO</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>YOUTUBE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>TIKTOK</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>INSTAGRAM</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Podcasts
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[112px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL PODCASTS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>DECODER</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>THE VERGECAST</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className=' border-black border-b-[0.5px] border-opacity-30 w-[273px]'>
                                            <Menu>
                                                <Menu.Button>
                                                    <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 flex items-center hover:opacity-60 hover:transition-all hover:ease-in-out">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <div className=''>
                                                                Newsletters
                                                            </div>
                                                            <div className='pr-5'>
                                                                <svg width="18px" height="18px" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className="ml-8 inline-block h-18 w-18 fill-franklin"><title>Expand</title><path d="M28 11.76H16.24V0h-4.48v11.76H0v4.48h11.76V28h4.48V16.24H28v-4.48Z" fill="#3cffd0"></path></svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <div className='w-[249px] h-[200px] bg-[#5200ff] ml-5 mb-2'>
                                                        <div className='text-[18px] text-[#3cffd0] mt-2 hover:opacity-60 hover:transition-all hover:ease-in-out'>ALL NEWSLETTERS</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>COMMAND LINE</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>HOT POD</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>INSTALLER</div>
                                                        <div className='text-[18px] text-[#3cffd0] mt-4 hover:opacity-60 hover:transition-all hover:ease-in-out'>VERGE DEALS</div>
                                                    </div>
                                                </Transition>
                                            </Menu>
                                        </div>


                                        <div className="w-[273px] h-[73px] text-[33px]  leading-[49.5px] font-medium pl-2 hover:opacity-60 hover:transition-all hover:ease-in-out">
                                            <div className='flex justify-between items-center w-full'>
                                                <div className=''>
                                                    Store
                                                </div>
                                            </div>
                                        </div>

                                        <div className='text-[#3cffd0] text-[12px]'>
                                            ACCOUNT
                                        </div>

                                        <div className='flex gap-2 mt-2'>
                                            <div className='text-[#3cffd0] text-[18px] underline underline-offset-[5px] hover:opacity-60 hover:transition-all hover:ease-in-out'>Log In</div>
                                            <div className='text-[#3cffd0] text-[18px]'>/</div>
                                            <div className='text-[#3cffd0] text-[18px] underline underline-offset-[5px] hover:opacity-60 hover:transition-all hover:ease-in-out'>Sign Up</div>
                                        </div>


                                        <div className='text-[#3cffd0] text-[12px] mt-6'>
                                            FOLLOW US
                                        </div>

                                        <div className='flex justify-between mt-4 mb-4 w-[273px]'>
                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M26.0174 21.7497L26.8495 16.3604H21.6403V12.8637C21.6403 11.3906 22.3668 9.95151 24.7019 9.95151H27.0714V5.36435C27.0714 5.36435 24.9212 5 22.866 5C18.5761 5 15.7707 7.57929 15.7707 12.2529V16.3604H11V21.7497H15.7707V34.7746C16.727 34.924 17.707 35 18.7055 35C19.704 35 20.6841 34.9214 21.6403 34.7746V21.7497H26.0174Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M32.7239 13.5843C32.7435 13.8647 32.7435 14.1452 32.7435 14.4282C32.7435 23.0512 26.1393 32.9961 14.0635 32.9961V32.991C10.4962 32.9962 7.00305 31.9805 4 30.0654C4.51871 30.1274 5.04002 30.1584 5.56262 30.1597C8.51887 30.1623 11.3906 29.1763 13.7164 27.3608C10.907 27.3078 8.44347 25.487 7.58286 22.8289C8.56697 23.0176 9.58099 22.9788 10.5469 22.7165C7.48405 22.1014 5.28052 19.4265 5.28052 16.32C5.28052 16.2915 5.28052 16.2644 5.28052 16.2373C6.19313 16.7425 7.21495 17.0229 8.26017 17.054C5.37542 15.1376 4.48621 11.3229 6.22823 8.34048C9.56149 12.4175 14.4795 14.8959 19.7588 15.1583C19.2297 12.8917 19.9525 10.5166 21.6582 8.92327C24.3024 6.45254 28.4612 6.57918 30.9468 9.20627C32.4171 8.91811 33.8264 8.38183 35.116 7.622C34.6259 9.13262 33.6002 10.4158 32.2299 11.2312C33.5313 11.0787 34.8027 10.7324 36 10.2039C35.1186 11.5168 34.0084 12.6604 32.7239 13.5843Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M14.1274 6C9.65144 6 6 9.65144 6 14.1274V25.8726C6 30.3486 9.65144 34 14.1274 34H25.8726C30.3486 34 34 30.3486 34 25.8726V14.1274C34 9.65144 30.3486 6 25.8726 6H14.1274ZM14.1274 8.15385H25.8726C29.1833 8.15385 31.8462 10.8125 31.8462 14.1274V25.8726C31.8462 29.1833 29.1875 31.8462 25.8726 31.8462H14.1274C10.8167 31.8462 8.15385 29.1875 8.15385 25.8726V14.1274C8.15385 10.8167 10.8125 8.15385 14.1274 8.15385ZM28.0769 10.3077C27.1851 10.3077 26.4615 11.0313 26.4615 11.9231C26.4615 12.8149 27.1851 13.5385 28.0769 13.5385C28.9688 13.5385 29.6923 12.8149 29.6923 11.9231C29.6923 11.0313 28.9688 10.3077 28.0769 10.3077ZM20 12.4615C15.848 12.4615 12.4615 15.848 12.4615 20C12.4615 24.152 15.848 27.5385 20 27.5385C24.152 27.5385 27.5385 24.152 27.5385 20C27.5385 15.848 24.152 12.4615 20 12.4615ZM20 14.6154C22.9868 14.6154 25.3846 17.0132 25.3846 20C25.3846 22.9868 22.9868 25.3846 20 25.3846C17.0132 25.3846 14.6154 22.9868 14.6154 20C14.6154 17.0132 17.0132 14.6154 20 14.6154Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Youtube</title><path d="M33.4148 12.0057C33.0928 10.8232 32.1436 9.891 30.9396 9.57475C28.7556 9 20 9 20 9C20 9 11.2444 9 9.0604 9.57475C7.8564 9.891 6.9072 10.8232 6.5852 12.0057C6 14.1507 6 20 6 20C6 20 6 25.8492 6.5852 27.9942C6.9072 29.1767 7.8564 30.109 9.0604 30.4253C11.2444 31 20 31 20 31C20 31 28.7556 31 30.9396 30.4253C32.145 30.109 33.0928 29.1767 33.4148 27.9942C34 25.8492 34 20 34 20C34 20 34 14.1507 33.4148 12.0057ZM17.2 24.763V15.237L25.6 20L17.2 24.763Z" fill="#3cffd0"></path></svg>
                                            </div>

                                            <div className='hover:opacity-60 hover:transition-all hover:ease-in-out'>
                                                <svg class="" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><title>RSS</title><path fill="#3cffd0" d="M8.24016 26.6668C9.84547 26.6668 11.1468 25.3655 11.1468 23.7602C11.1468 22.1549 9.84547 20.8535 8.24016 20.8535C6.63485 20.8535 5.3335 22.1549 5.3335 23.7602C5.3335 25.3655 6.63485 26.6668 8.24016 26.6668Z"></path><path fill="#3cffd0" d="M5.3335 5.91992V9.69326C14.7068 9.69326 22.3068 17.2933 22.3068 26.6666H26.0802C26.0802 15.2133 16.7868 5.91992 5.3335 5.91992ZM5.3335 13.4666V17.2399C10.5335 17.2399 14.7602 21.4666 14.7602 26.6666H18.5335C18.5335 19.3733 12.6268 13.4666 5.3335 13.4666Z"></path></svg>
                                            </div>
                                        </div>


                                        {/* <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Account settings
                                        </a>
                                    )}
                                </Menu.Item> */}



                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                )
            }
        </div>
    )
}

export default Header;




