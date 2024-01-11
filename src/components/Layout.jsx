import { Outlet } from "react-router-dom";
import Header from "./Header";







const Layout = () => {
    return (
        <div>
            <div className="relative pt-[41px] pr-[183px] pl-[582px] caret-transparent">
                <Header />
            </div>
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
}

export default Layout;