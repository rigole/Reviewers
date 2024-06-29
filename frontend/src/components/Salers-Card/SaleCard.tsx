import salerImage from "../../images/iuc.png";
import Rating from "../Rating/Rating";

const SaleCard = () => {
    return (
        <div className="relative saler_single_card w-[65%] h-[40%] px-3  shadow-[0_30px_30px_0_rgba(0,0,0,0.5)] rounded-2xl bg-slate-950">
            <div className="saler-infos flex justify-between px-2 py-3">
                <div className="flex">
                    <div className="pp_university bg-white h-[75px] w-[75px] shadow-[0_5px_5px_0_rgba(0,0,0,0.5)]  rounded-2xl">
                        <img src={salerImage} className="rounded-full h-full w-full" alt="" />
                    </div>

                    <div className="text-white px-6 py-1" >
                        <p >Name of the saler</p>
                        <Rating color='#e0e0e0' value={3.5} text="Score Reviews 3.5"  />
                        <p>Nombre de reviews: 55</p>
                    </div>
                </div>
                <div className="text-white location  flex justify-between">
                    <span className="px-5"> <i className="fa-sharp fa-solid fa-location-pin px-2"></i>Douala</span>
                </div>
            </div>
            
            
            <div className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </div>


            <div className="text-white py-3 flex justify-between">
                <span ><i className="fa fa-address-card" aria-hidden="true"></i> informations</span>

                <p>Categorie: categorie</p>

                <p> Avis recent <i className="fa fa-arrow-down" aria-hidden="true"></i></p>

            </div>
            
            
        </div>
    )
}

export default SaleCard