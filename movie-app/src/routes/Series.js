import React, {useState, useEffect} from 'react'
import useGenre from '../hooks/useGenre'
import Genres from '../components/Genres'
import SingleContent from '../components/SingleContent'
import CustomPagination from '../components/CustomPagination'
import axios from 'axios'

export default function Series() {
    const [page, setPage] = useState(1)
    const [content, setContent] = useState([])
    const [numOfPages, setNumOfPages] = useState()
    const [selectedGenres, setSelectedGenres] = useState([])
    const [genres, setGenres] = useState([])
    const genreforURL = useGenre(selectedGenres)

    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

        setContent(data.results)
        setNumOfPages(data.total_pages)
    };


    useEffect(() => {
        fetchMovies()
        // eslint-disable-next-line
    }, [page, genreforURL])


  return (
    <div className='container'>
      <span className='pageTitle'>Series</span>
      <Genres
      selectedGenres={selectedGenres}
      setSelectedGenres={setSelectedGenres}
      genres={genres}
      setGenres={setGenres}
      setPage={setPage}
      type="tv"
      />
      <div className='container'>
            {
                content && content.map(item => (
                    <SingleContent key={item.id} 
                    id={item.id} poster={item.poster_path}
                    title={item.title || item.name}
                    date={item.first_air_date || item.release_date}
                    media_type="tv"
                    vote_average={item.vote_average}
                    />
                ))
            }
        </div>
        {numOfPages > 1 && 
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        }
    </div>
  )
}
