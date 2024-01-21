import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";







const Layout = () => {
    const [theme, setTheme] = useState('light'); // Assume 'light' as the default theme
    const location = useLocation();

    useEffect(() => {
        // Change theme based on the current path
        if (location.pathname !== "/detailpage") {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [location.pathname]);

    return (
        <div className={`${theme === 'light' ? ' text-black bg-white' : ' text-white bg-black'} `}>
            <div className={`flex justify-center ${location.pathname === '/allTech' ? ' bg-[#5200FF] ' : ''} `}>
                <div className="relative pt-[41px] w-[1100px] flex justify-end caret-transparent max-[1180px]:w-full max-[1180px]:justify-center max-[770px]:w-[80%] max-[770px]:justify-end">
                    <Header />
                </div>
            </div>

            <Outlet />
            <div className="w-full flex justify-center pt-40 pb-[70px] bg-black text-white">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;