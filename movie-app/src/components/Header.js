import React, {useState} from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SeriesIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
// import { NavLink } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [menu, setMenu] = useState('off');
  const [burger, setBurger] = useState('close');

  function switcher(){
    setMenu(menu => {
      if(menu === "off"){
        console.log('off');
        return "on"
      }else {
        console.log('on');

        return "off"
      }
    })
    setBurger(burger => {
      if(burger === 'close'){
        return "open"
      }else{
        return "close"
      }
    })
  }


  function blurHandler(e){
    setMenu('off', e.target.value)
    setBurger('close', e.target.value)
  }
  

  return (
    <div>
      <div className='header'
      >
      <div className={`barButton`} onClick={switcher}>
          <div className={`bar top ${burger}`}></div>
          <div className={`bar middle ${burger}`}></div>
          <div className={`bar bottom ${burger}`}></div>
        </div>
        
        <a className='nameBox' href={'/'}>
        <img src="/movie-icon.svg" alt=""/>
        <span className="appName">Movie App</span>
        </a>
        <div className={`navbar ${menu}`} onBlur={blurHandler} >
        <a className="navIcon" href={'/'} ><BottomNavigationAction className='icon' icon={<WhatshotIcon />} />Trending</a>
        <a className="navIcon" href={'/movies'} ><BottomNavigationAction className='icon' icon={<MovieIcon />} /><div>Movies</div></a>
        <a className="navIcon" href={'/series'} ><BottomNavigationAction className='icon'  icon={<SeriesIcon />} /><div>Series</div></a>
        <a className="navIcon" href={'/search'} ><BottomNavigationAction className='icon'  icon={<SearchIcon />} /><div>Search</div></a>
        </div>
      </div>
      </div>
  );
}