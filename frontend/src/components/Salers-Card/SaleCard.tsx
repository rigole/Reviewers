import salerImage from "../../images/iuc.png";
import Rating from "../Rating/Rating";

const SaleCard = () => {
    return (
        <div className="relative saler_single_card w-[40%] h-[40%]  shadow-[0_30px_30px_0_rgba(0,0,0,0.5)] rounded-2xl bg-slate-950">
            <div className="saler-infos flex px-2 py-3">
                <div className="pp_university bg-white h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]  rounded-2xl">
                    <img src={salerImage} className="rounded-full h-full w-full" alt="" />
                </div>

                <div className="text-white px-6 py-1" >
                    <p >Name of the saler</p>
                    <Rating color='#e0e0e0' value={3.5} text="Score Reviews 3.5"  />
                    <p>Nombre de reviews: 55</p>
                </div>
            </div>
            
            
            <div className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </div>


            
            
        </div>
    )
}

export default SaleCard