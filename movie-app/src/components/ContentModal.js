import React, {useState, useEffect} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import axios from 'axios';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Carousel from './Carousel';

const style = {
  width: "90%",
  height: "80%",
  bgcolor: '#73130b',
  border: '1px solid #000',
  borderRadius: "10px",
  color: "#d0d5d9",
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  boxShadow: "1px 1px 5px #ffffff",
  p: 4,
};

export default function ContentModal({children, media_type, id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();


  
  const fetchData = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setContent(data)
  }
  
  const fetchVideo = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
    setVideo(data.results[0]?.key)
  }
  
  
  useEffect(() => {
    fetchData()
    fetchVideo()
    // eslint-disable-next-line
  }, [])
  
  
  // const link = `https://image.tmdb.org/t/p/w500/`;
  const unavailable = 'https;//www.movienewz.com/img/films/poster-holder.jpg';
  
  return (
    <>
      <div className='media' onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (<Box sx={style}>
           <div className='contentModal'>
             <img className='content_portrait'
             src={content.poster_path?`https://image.tmdb.org/t/p/w500${content.poster_path}`:unavailable}
             alt={content.name || content.title}
             />
             <img className='contentModal_landscape'
             src={content.poster_path?`https://image.tmdb.org/t/p/w500${content.backdrop_path}`:unavailable}
             alt={content.name || content.title}
             />
             <div className='contentModal_about'>
               <span className='contentModal_title'>{content.name || content.title} (
                 {(
                  content.first_air_dat ||
                  content.release_date ||
                  "-----"
               ).substring(0, 4)})
               </span>
               {content.tagline && (
                 <i className='tagline'>{content.tagline}</i>
               )}
               <span className='contentModal_description'>
                {content.overview}
               </span>
               <div>
                <Carousel media_type={media_type} id={id} />
                 
               </div>

               <Button
               variant='contained'
               startIcon={<YouTubeIcon />}
               target="__blank"
               href={`https://www.youtube.com/watch?v=${video}`}
               style={{backgroundColor: "#131212"}}
               >
                 WATCH TRAILER
               </Button>
             </div>
           </div>
          </Box>)}
        </Fade>
      </Modal>
    </>
  );
}