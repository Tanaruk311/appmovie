
import axios from 'axios';
import Searchbar from './Searchbar';
import { useState, useEffect } from 'react';

interface MovieCardProps {
  Title: string;
  Poster: string;
  imdbID: string;
}

const MovieCard = () => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [searchquery, setSearchQuery] = useState<string>("avengers");

  
  const API_KEY = "ae342e84"; // แทนที่ด้วย API Key ของคุณ
  const API_URL = "https://www.omdbapi.com/";


  const fetchMovieData = async (title: string) => {
    try {
      const response = await axios.get(`${API_URL}?s=${title}&apikey=${API_KEY}`);
      const data = response.data;
  
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]); // ตั้งค่าเป็น array ว่างถ้าไม่พบข้อมูล
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setMovies([]); // ตั้งค่าเป็น array ว่างในกรณีที่เกิดข้อผิดพลาด
    }
  };
    
  useEffect(() => {
    fetchMovieData(searchquery); // แทนที่ด้วยคำค้นหาที่ต้องการ
  }, [searchquery]);

  const handleSearch = (searchTerm: string) => {
    setSearchQuery(searchTerm);
  };

  return (
    <>
    
         <Searchbar onSearch={handleSearch} />
      <div className='m-10 flex flex-wrap gap-10 mr-10'>
      
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="card bg-base-100 w-96 shadow-xl mb-4">
              <div className="card-body">
                <img src={movie.Poster} alt={movie.Title} className="w-full h-100 object-cover" />
                <h1 className="card-title">{movie.Title}</h1>
              </div>
            </div>
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    
    </>
  );
};

export default MovieCard;
