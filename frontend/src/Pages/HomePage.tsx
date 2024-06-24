import { useState } from "react";



const HomePage = () => {

    const [input, setInput] = useState("");


    return (
        <div className="pt-40">
             <div className="text-center ">
                <p className="text-4xl capitalize font-bold mb-4 font-comf">Rechercher un commercant, un prestataire ou des avis</p>
            </div>
            <div className="text-center" >
                <form className="px-0 py-0">
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="nosubmit w-1/2 h-15 rounded-xl" type="search" placeholder="Rechercher un commercant" required/>
                </form>
            </div>

        </div>
    )
}

export default HomePage