import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import ShowSreach from "../Services/ShowSreach";
import MovieCard from "../Components/MovieCard";
const Movies = () => {
    const [searchText, setSearchText] = useState("")
    const [searchedShows, setSearchedShows] = useState([]);
    const [allShows, setAllShows] = useState([])
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchText(value)

    }
    // showst  all movies
    const showAllShows = async () => {
        const res = await fetch("https://api.tvmaze.com/shows");
        const allData = await res.json();
       
        setAllShows(allData)
        setSearchedShows([]);
    }

    useEffect(() => {
        if (!searchText) {

            return;
        }
        const setData = setTimeout(async () => {
            try {
                const data = await ShowSreach(searchText);
                setSearchedShows(data);
                setAllShows([]);
            } catch (err) {
                console.log(err);
            }
        }, 1000);

        return () => clearTimeout(setData)
    }, [searchText])



    return (
        <div className="bg-[#09090D] text-white">
            <div className="p-25">
                {/* search button */}
                <div className="bg-[#14141B]">
                    <label className="flex gap-5 text-[16px] space-mono-regular text-[#6F6D79] border border-[#FFFFFF1C] focus-within:border-[#8B5CF6] rounded-2xl p-5  transition-colors duration-200">
                        <Search></Search>
                        <input
                            value={searchText}
                            onChange={handleSearch}
                            className="w-full bg-transparent focus:outline-none text-white"
                            type="search"
                            required
                            placeholder="Search By Title"
                        />
                    </label>
                </div>
                <p className="pt-2 text-center space-mono-regular text-[#6F6D79]">{searchedShows.length} shows found</p>

                {/*All movies tabs */}
                <div className="pt-10">
                    <button
                        onClick={() => { showAllShows() }}
                        className="p-5 rounded-2xl border border-[#FFFFFF1C] focus-within:bg-[linear-gradient(135deg,rgb(255,77,109),rgb(139,92,246))]">
                        All
                    </button>

                </div>
                {/*Searched Movies shows here */}
                 
                 <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                    {searchedShows.map((movie)=>(
                    <MovieCard key={movie.show.id} movie={movie}></MovieCard>
                ))}
                </div>
                
                
                
                {/* all movies shows here*/}
                <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-4">
                    {allShows.map((movie)=>(
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))}
                </div>
            </div>
        </div>
    );
};

export default Movies;