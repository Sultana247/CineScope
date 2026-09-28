
const Footer = () => {
    return (
        <div>
            <footer className="  bg-[#09090D] text-white p-18">
                <div className=" flex justify-around gap-16 text-[14px] ">
                    <div>
                        <img src="https://i.ibb.co.com/FbMrnXfZ/Cine-Scope-logo-1.jpg" alt="CineScope Logo" />
                        <p className="text-[#C1BEC7]">
                            A quieter, more intentional way to discover your next 
                            <br />
                            cinematic obsession.
                        </p>
                    </div>

                    <div className="flex flex-col ">

                        <h6 className="footer-title text-[#777481] pb-2">EXPLORE</h6>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">Browse</a>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">Our Story</a>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">Trending</a>
                        

                    </div>
                    <div className="flex flex-col ">

                        <h6 className="footer-title uppercase text-[#777481] pb-2">Elsewhere</h6>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">Instagram</a>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">Letterboard</a>
                        <a href="#" className="hover:cursor-pointer hover:text-orange-700">X/Twitter</a>


                    </div>


                </div>
                <div className="flex justify-center  items-center text-[#5D5A66] pt-10 uppercase">
                    <p > © {new Date().getFullYear()} cinescope - Made for those who stay for the credits.</p>

                </div>
            </footer>
        </div>
    );
};

export default Footer;