import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const ExploreMore = () => {
    const navigate = useNavigate();
    const handleExploreMore =()=>{
        console.log("button clicked")
        navigate("/movies");
    }
    return (
        <button
        onClick={()=>{handleExploreMore()}} 
        className=" flex text-[14px] md:text-[18px] gap-2 bg-[linear-gradient(135deg,rgb(255,77,109),rgb(139,92,246))] px-2 md:px-5 py-3 rounded-2xl font-semibold cursor-pointer hover:scale-105 transition-all delay-500">Explore More <ArrowRight></ArrowRight></button>

    );
};

export default ExploreMore;