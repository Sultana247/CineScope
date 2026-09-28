import { Calendar, StarIcon } from "lucide-react";
import { useState } from "react";
import VeiwDetailsModal from "./VeiwDetailsModal";

const MovieCard = (movie) => {
    const [clicked, setClicked]=useState(false);
    if(!movie){

        return ;
    }
    let movieData;
    if(movie.movie.show){
        movieData = movie.movie.show;
    }
    else if(movie.movie){
        movieData= movie.movie;
    }

    return (

        <div className="p-4 rounded-2xl flex justify-center item-center  border border-[#FFFFFF1C]">
            <div className="">
                <div className="pb-5">
                    <img className=" rounded-2xl " src={movieData.image?.medium} alt="No image found" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <h4 className="text-[20px] manrope-font font-bold">{movieData.name}</h4>

                        <p className="flex gap-1  items-center text-[12px] text-[#FFBD38]"><span ><StarIcon size={12} color="#FFBD38" fill="#FFBD38"></StarIcon></span>{movieData.rating.average}</p>
                    </div>
                    <div className="pt-2">

                        <p className="flex items-center text-[#5F5D68] gap-1 text-[14px]"><Calendar size={16} ></Calendar> {movieData.premiered}</p>
                    </div>
                </div>
                <div className="flex justify-center text-center pt-3">
                    <button 
                    onClick={()=>{setClicked(true)}}
                    type="button"
                    className="text-black hover:scale-105 transition-all delay-500 px-4 py-2 bg-white rounded-2xl">Veiw Details</button>
                </div>
                {/* Modals */}
                {clicked && <VeiwDetailsModal movieData={movieData} onClose={()=>{setClicked(false)}}></VeiwDetailsModal>}
            </div>
        </div>

    );
};

export default MovieCard;