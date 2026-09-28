import {  Menu } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import ExploreMore from "./ExploreMore";

const Header = () => {
    const [isOpenMenu, setOpenMenu]=useState(false)
    const navItems = 
    <>
    <NavLink to={"/"} className={"px-3 py-2 hover:scale-120 transform-all hover:border-b hover:border-orange-700"}>Home</NavLink>
    <NavLink to={"/movies"} className={"px-3 py-2 hover:scale-120 transform-all hover:border-b hover:border-orange-700"} >Movies</NavLink>
    
    </>
    return (
        <nav className="bg-[#09090D] text-white dm-sans-font">
            <div className=" flex justify-between gap-10 p-5">
                {/* logo */}
                <div>
                    <img src="https://i.ibb.co.com/FbMrnXfZ/Cine-Scope-logo-1.jpg" alt="CineScope Logo" />
                </div>
                <div className="hidden md:flex gap-8">
                    {navItems}
                </div>
                <div className="hidden md:flex">
                    <ExploreMore></ExploreMore>
                </div>
                <div className="md:hidden relative text-white"
                onClick={()=>{setOpenMenu(!isOpenMenu)}}
                >
                    <button className="border border-[#FFFFFF1C] p-5"><Menu></Menu></button>
                    {isOpenMenu && <div className="flex flex-col gap-5">{navItems}</div>}
                </div>
            </div>
        </nav>
    );
};

export default Header;