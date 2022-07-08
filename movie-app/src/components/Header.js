import React, {useState} from 'react';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SeriesIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [menu, setMenu] = useState('off');
  const [burger, setBurger] = useState('close');

  function switcher(){
    setMenu(menu => {
      if(menu === "off"){
        return "on"
      }else {
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

  return (
    <div>
      <div className='header'
      >
      <div className={`barButton`} onClick={switcher}>
          <div className={`bar top ${burger}`}></div>
          <div className={`bar middle ${burger}`}></div>
          <div className={`bar bottom ${burger}`}></div>
        </div>
        
        <NavLink className='nameBox' to={'/'}>
        <img src="/movie-icon.svg" alt=""/>
        <span className="appName">Movie App</span>
        </NavLink>
        <div className={`navbar ${menu}`}>
        <NavLink className="navIcon" to={'/'} ><BottomNavigationAction className='icon' icon={<WhatshotIcon />} />Trending</NavLink>
        <NavLink className="navIcon" to={'/movies'} ><BottomNavigationAction className='icon' icon={<MovieIcon />} /><div>Movies</div></NavLink>
        <NavLink className="navIcon" to={'/series'} ><BottomNavigationAction className='icon'  icon={<SeriesIcon />} /><div>Series</div></NavLink>
        <NavLink className="navIcon" to={'/search'} ><BottomNavigationAction className='icon'  icon={<SearchIcon />} /><div>Search</div></NavLink>
        </div>
      </div>
      </div>
  );
}