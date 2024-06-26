import { useState } from "react";
import { Link } from "react-router-dom";
import  useModal  from "../components/Modal/useModal"
import  Modal  from "../components/Modal/Modal"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import SignIn from "../components/SignIn/SignIn";

const  Header = () => {

const [isActive, setIsActive] = useState<boolean>(false);
const [menuDisplay, setMenuDisplay] = useState<boolean>(false);
const registered = useSelector((state:any) => state.userRegister);
const { isOpen, toggle } = useModal();
const loggedUser = useSelector((state:any) => state.userSignIn);


const { userInfo }  =  loggedUser

const { registeredUser  } = registered

const dispatch = useDispatch()

//console.log(registeredUser);

const logoutHandler = () => {
    dispatch<any>(logout())
}

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
    <div className="fixed w-full z-10 ">
        <nav className=" w-fulsl px-5 absolute flex justify-between list-none text-base font-bold right-0 left-0 z-10  bg-[#e0e0e0]">
            <div className=" flex py-5 justify-between font-comf">
                <div>
                    <Link to="#" className="text-lg  py-2 px-4 rounded-md bg-transparent   transition-all">Reviewers Logo</Link>
                </div>
                

                <button className="md:hidden mobile-menu-button flex flex-col" onClick={toggleOpen}>
                    <i className = { isActive ? `fa-solid fa-x w-16 h-6 text-white text-center items-center  justify-items-center rounded-full  border-1  ` : `fa-solid fa-bars w-16 h-6 text-white text-center rounded-full   border-1 `}>

                    </i>
                </button>


                    <div className= { !menuDisplay ?  `md:hidden main_menu  w-0 fixed top-0 left-0  z-1 h-full overflow-x-hidden bg-gray-700 ` : `md:hidden main_menu  w-0 fixed top-0 left-0 z-1 overflow-x-hidden  h-full  bg-gray-700 `}  >
                        <ul className="testing_list  py-14 px-4  bg-gray-700 ">
                            <Link to="/universities" className="block  px-1 py-7  text-white  font-semibold">
                                <li className="w-1/2 px-1">
                                    Decouvrir
                                </li>
                            </Link>
                            <Link to="/programs"className="block px-1 py-7 text-white hover:bg-green-500 transition duration-300">
                                <li className="w-1/2 px-1">
                                    Commercants
                                </li>
                            </Link>
                            <Link to="/fields" className="block  px-1 py-7 text-white hover:bg-green-500 transition duration-300">
                                <li className="w-1/2 px-1">
                                    Avis
                                </li>
                            </Link>
                            { userInfo  ?
                            (
                                <>
                                    <Link className="" to="">
                                        <li
                                        className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                            My Favourites
                                        </li>
                                    </Link>
                                    <Link className="" to="">
                                        <li 
                                        onClick={logoutHandler}
                                            className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                            Sign out
                                            
                                        </li>
                                    </Link>

                                    <Link className="" to="">
                                        <li 
                                            className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                        {userInfo.username}
                                            
                                        </li>
                                    </Link>
                                </>
                                
                           
                             ):(
                                
                            <Link to="/signin"  className="rounded-full text-white py-1 px-4 border-1 hover:bg-amber-300">
                                <li className="w-1/2 px-1" >
                                    Sign In
                                </li>
                            </Link>   
                            )
                         }

                          { registeredUser  ?
                            (
                                <>
                                    <Link className="" to="">
                                        <li
                                        className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                            My Favourites
                                        </li>
                                    </Link>
                                    <Link className="" to="">
                                        <li 
                                        onClick={logoutHandler}
                                            className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                            Sign out
                                            
                                        </li>
                                    </Link>

                                    <Link className="" to="">
                                        <li 
                                            className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                        >
                                        {userInfo.username}
                                            
                                        </li>
                                    </Link>
                                </>
                                
                           
                             ):(
                                
                              <></>
                            )
                         }
                            <Link to="/fr" className="block  px-1 py-7 hover:bg-green-500 transition duration-300">
                                <li className="w-1/2 px-1">
                                    FR
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <Modal isOpen={isOpen} toggle={toggle}>
                        <SignIn/>
                    </Modal>

                            



            </div>
            <ul className="hidden mt-5 list-none md:flex  space-x-1">
                    <div className="menu_links">
                        <Link to="/universities">
                            <li
                                className="py-2 px-4 rounded-md bg-transparent hover:bg-amber-500 hover:text-white transition-all">
                                Decouvrir
                            </li>
                        </Link>
                        <Link to="/programs">
                            <li
                                className="py-2 px-4 rounded-md bg-transparent t hover:bg-amber-500 hover:text-white transition-all">
                                Commercants
                            </li>
                        </Link>
                        <Link to="/fields">
                            <li
                                className="py-2 px-4 rounded-md bg-transparent  hover:bg-amber-500 hover:text-white transition-all">
                                Avis
                            </li>
                        </Link>
                    </div>
                   
                
            </ul>
            <ul className="hidden list-none mt-5 md:flex  space-x-1">
            <Link to="">
                    <li
                        className="py-2 px-4 rounded-md bg-transparent  hover:bg-amber-500 hover:text-white transition-all">
                        En
                    </li>
                </Link>
                { userInfo  ?
                    (
                        <>
                                <Link className="" to="">
                                <li
                                    className="py-2 px-4 rounded-md bg-transparent  hover:bg-amber-500 hover:text-white transition-all"
                                >
                                    My Favourites
                                </li>
                            </Link>
                            <Link className="" to="">
                                <li 
                                onClick={logoutHandler}
                                    className="py-2 px-4 rounded-md bg-transparent hover:bg-amber-500 hover:text-white transition-all"
                                >
                                    Sign out
                                    
                                </li>
                            </Link>

                            <Link className="" to="">
                                <li 
                                    className="py-2 px-4 rounded-md bg-transparent text-white hover:bg-amber-500 hover:text-white transition-all"
                                >
                                    {userInfo.username}
                                    
                                </li>
                            </Link>
                        </>
                            
                        
                    ):(
                            
                        <div  className="rounded-full py-2 px-4 border-1 hover:bg-amber-300">
                            <Link className="space-x-5  rounded-md bg-transparent  hover:text-white transition-all" to="/signin">
                                Sign In
                            </Link>
                        </div>   
                    )
                }
                
            </ul>
        </nav>
    </div>
)
} 


export default Header