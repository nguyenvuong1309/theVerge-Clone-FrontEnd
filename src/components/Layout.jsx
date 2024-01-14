import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";







const Layout = () => {
    return (
        <div>
            <div className="flex justify-center">
                <div className="relative pt-[41px] w-[1100px] flex justify-end caret-transparent">
                    <Header />
                </div>
            </div>
            <Outlet />
            <div className="w-full flex justify-center pt-[40px] pb-[70px]">
                <Footer />
            </div>
        </div>
    )
}

export default Layout;