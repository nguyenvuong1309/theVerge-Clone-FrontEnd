import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";







const Layout = () => {
    return (
        <div className={`App ${window.location.pathname.substring(1)} `}>
            <div className="flex justify-center">
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