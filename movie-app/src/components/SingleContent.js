import React from 'react'
import ContentModal from './ContentModal'

export default function SingleContent({id, poster, title, media_type, vote_average}) {
  const link = `https://image.tmdb.org/t/p/w300/${poster}`
  function setVoteClass(vote){
    if(vote >= 8) {
        return 'green'
    } else if (vote >= 6){
        return 'orange'
    }else{
        return 'red'
    }
    }
  return (
    <ContentModal media_type={media_type} id={id} >
      <img src={link} alt="poster"/>
      <div className='container'>
      <h4 className='title'>{title}</h4>
      <div className='sybContainer'>
      <span className='subTitle'>
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
      </span>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average.toFixed(1)}
      </span>
      </div>
      </div>
    </ContentModal>
  )
}