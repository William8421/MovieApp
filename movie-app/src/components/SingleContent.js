import React from 'react'
import ContentModal from './ContentModal'

export default function SingleContent({id, poster, title, media_type, vote_average}) {
  const link = `https://image.tmdb.org/t/p/w300/${poster}`
  return (
    <ContentModal media_type={media_type} id={id} >
      <img src={link} alt="poster"/>
      <h4 className='title'>{title}</h4>
      <div className='container'>
      <span className='subTitle'>
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
      </span>
      <span className='subTitle'>
        {vote_average.toFixed(1)}
      </span>
      </div>
    </ContentModal>
  )
}