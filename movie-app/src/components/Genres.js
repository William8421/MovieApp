import { Chip } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export default function Genres({genres, setGenres, selectedGenres, setSelectedGenres, setPage, type}) {

    const handleAdd =(genre) => {
        setSelectedGenres([...selectedGenres, genre])
        setGenres(genres.filter(item => item.id !== genre.id))
        setPage(1)
    }

    const handleRemove = (genre) => {
        setSelectedGenres(selectedGenres.filter(selected => selected.id !== genre.id))
        setGenres([...genres, genre])
        setPage(1)
    }

    const fetchGenres = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)


        setGenres(data.genres)
    }



    useEffect(() => {
        fetchGenres()

        return () => {
            setGenres({})
        }
        // eslint-disable-next-line
    }, [])

  return (
    <div style={{padding: "6px 0"}} >
      {selectedGenres && selectedGenres.map((genre) => (
          <Chip
          label={genre.name}
          clickable
          size='small'
          color='primary'
          key={genre.id}
          onDelete={() => handleRemove(genre)}
          style={{margin: "4px"}}
          />
          ))}
      {genres.length && genres.map((genre) => (
          <Chip
          label={genre.name}
          clickable
          size='small'
          key={genre.id}
          onClick={() => handleAdd(genre)}
          style={{margin: "4px", backgroundColor: "white"}}
          />
          ))}
    </div>
  )
}
