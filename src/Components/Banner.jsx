import ExploreMore from "./ExploreMore";

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url('https://i.ibb.co.com/5WzHBWVh/banner.jpg')` }} className='h-screen w-full bg-cover bg-center bg-no-repeat  '>
            <div className="bg-[linear-gradient(90deg,#09090d_0%,transparent_50%,#09090d_100%)] text-white">
                <div className="containar  mx-auto p-15 md:p-15 ">
                    <button className=" flex justify-center items-center gap-2 border border-[#FFBD38] px-3 py-2 rounded-3xl">
                        <div className="w-2 h-2 bg-[#FFBD38] rounded-full"></div>
                        Now streaming</button>
                    <h2 className="manrope-font text-[40px] md:text-[64px] font-bold pt-5 pb-5">Every story. <br />
                        One <span className="bg-[linear-gradient(135deg,rgb(255,77,109),rgb(139,92,246))] bg-clip-text text-transparent">screen.</span></h2>
                    <p className="pb-5 dm-sans-font text-[17px] text-[#AAA7B2]">Search, discover, and dive into extraordinary stories from around the <br /> world, all in one beautifully simple place.</p>
                    <ExploreMore></ExploreMore>

                </div>
            </div>
        </div>
    );
};

export default Banner;