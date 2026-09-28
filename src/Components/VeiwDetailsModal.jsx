import { StarIcon, X, Calendar } from "lucide-react";

const VeiwDetailsModal = ({ onClose, movieData }) => {
    const cleanSummary = movieData.summary 
        ? movieData.summary.replace(/<[^>]*>/g, '') 
        : "No summary available.";
    console.log(movieData)
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60 text-black">
            <div className="w-md p-5 bg-gray-100 shadow-2xl rounded-2xl ">
                <div className="flex justify-end items-center ">

                    <button
                        onClick={onClose}
                        className="cursor-pointer flex justify-center items-center rounded-full w-10 h-10 p-1 bg-gray-400">
                        <X></X></button>


                </div>
                <div className="pt-2">
                    <div className="w-full flex justify-center items-center">
                        <img className="w-full h-65 rounded-2xl" src={movieData.image?.medium} alt="" />
                    </div>
                    <div className="w-full">
                        <div className="flex justify-between">
                            <h4 className="text-[20px] manrope-font font-bold">{movieData.name}</h4>

                            <p className="flex gap-1  items-center text-[16px] text-[#FFBD38]"><span ><StarIcon size={16} color="#FFBD38" fill="#FFBD38"></StarIcon></span>{movieData.rating.average}</p>
                        </div>
                        <div className="pt-2">

                            <p className="flex items-center text-[#5F5D68] gap-1 text-[14px]"><Calendar size={16} color="blue"></Calendar> {movieData.premiered}</p>
                        </div>
                        <p className="font-medium pt-2">Overview</p>
                        <p className="text-[13px]">{cleanSummary}</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default VeiwDetailsModal;