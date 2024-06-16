import { useState } from "react";
import { Link } from "react-router-dom";
import  useModal  from "../components/Modal/useModal"


const  Header = () => {

const [isActive, setIsActive] = useState<boolean>(false);
const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
const registered = useSelector((state:any) => state.userRegister);
const { isOpen, toggle } = useModal();
const loggedUser = useSelector((state:any) => state.userSignIn);


//const { userInfo }  =  loggedUser

//const { registeredUser  } = registered

//const dispatch = useDispatch()

//console.log(registeredUser);

/*const logoutHandler = () => {
    dispatch<any>(logout())
}*/

const changeIcon = () => {
    setIsActive(current => !current);
}

const toggleOpen = () => {
    changeIcon();
    setMenuDisplay(!menuDisplay);
    const menu = document.querySelector("div.main_menu") as HTMLDivElement;
    const list = document.querySelector("ul.testing_list") as HTMLElement;

    menu.style.transition = "0.5s";
    menu.style.width="250px";

    list.style.transition="0.5s";

    if (isActive){
        menu.style.width="0";
    }


}

function ModalComponent(){
    const { isOpen, toggle } = useModal();
}

    return (
        <div className="fixed w-full z-10">
            This is the header
            <nav className=" w-full px-5 absolute list-none  right-0 left-0 z-10 text-blue-400 bg-[#1a1a37]">
                <div className="mx-auto flex py-5 justify-between font-comf">
                    <div>
                        <Link to="/" className="text-lg  py-2 px-4 rounded-md bg-transparent text-white transition-all"> Reviewers</Link>
                    </div>
                    
                </div>
            </nav>
            
        </div>
    )
} 


export default Header

function useSelector(arg0: (state: any) => any) {
    throw new Error("Function not implemented.");
}
