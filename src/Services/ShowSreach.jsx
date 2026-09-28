const ShowSreach = async (searchText) => {
        try{
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
            const data = await res.json()
            // console.log(data)
            
            
            if(!data){
            return ;
           }


            return data;
                
        }catch(e){
            console.log(e.message);
        }
       }
       
    
    


export default ShowSreach;