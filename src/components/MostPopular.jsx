import { useNavigate } from "react-router-dom";
import MostPopularItem from "./MostPopularItem";







const MostPopular = ({ name, logo, mostpopularitem }) => {
    const navigate = useNavigate();
    return (
        <div className="w-[500px] bg-[#5200FF] relative rounded-[20px]  overflow-hidden h-fit" onClick={() => navigate("/detailpage")}>
            <div className="py-[20px] pl-[20px]">
                <div class="w-[96.37px] h-3 text-white text-[10px] font-normal font-['Helvetica'] uppercase leading-[15px] tracking-wider">{name}</div>
            </div>

            <div className="absolute right-0 top-0">
                {logo}
            </div>
            {mostpopularitem && mostpopularitem.map((item, index) => (
                <div className="ml-[20px]" key={index}>
                    <MostPopularItem number={item?.[0]} content={item?.[1]} author={item?.[2]} time={item?.[3]} border={index === mostpopularitem.length - 1 ? false : true} />
                </div>
            ))}
            {/* <div className="ml-[20px]">
                <MostPopularItem number={"1"} content={"Google Authenticator  finally, mercifully adds account syncing for two-factor codes"} author={"CHRIS WELCH"} time={"APR 24"} border={true} />
            </div>
            <div className="ml-[20px]">
                <MostPopularItem number={"1"} content={"Twitter users are now wondering if mandatory blue checks are illegal"} author={"ADI ROBERTSON"} time={"APR 24"} border={true} />
            </div>
            <div className="ml-[20px]">
                <MostPopularItem number={"1"} content={"Twitter claims dead celebs are subscribing to Blue from beyond the grave"} author={"JAMES VINCENT"} time={"APR 24"} border={true} />
            </div>
            <div className="ml-[20px]">
                <MostPopularItem number={"1"} content={"Schools bought milions of Chromebooks in 2020 - and three years later, they're starting to break"} author={"MONICA CHIN"} time={"APR 24"} border={true} />
            </div>
            <div className="ml-[20px]">
                <MostPopularItem number={"1"} content={"Grimes says anyone can use her voice for AI-generated songs"} author={"MIA SATO"} time={"APR 24"} />
            </div> */}
        </div>
    )
}

export default MostPopular;