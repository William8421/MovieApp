import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SeriesIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';


export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
      <BottomNavigation className='header'
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <div className='nameBox' onClick={() => window.scroll(0, 0)} >
        <img src="/movie-icon.svg" alt=""/>
        <span className="appName">Movie App</span>
        </div>
        <NavLink className="navIcon" to={'/'} ><BottomNavigationAction style={{color: '#d0d5d9'}} icon={<WhatshotIcon />} />Trending</NavLink>
        <NavLink className="navIcon" to={'/movies'} ><BottomNavigationAction style={{color: '#d0d5d9'}}icon={<MovieIcon />} /><div>Movies</div></NavLink>
        <NavLink className="navIcon" to={'/series'} ><BottomNavigationAction style={{color: '#d0d5d9'}} icon={<SeriesIcon />} /><div>Series</div></NavLink>
        <NavLink className="navIcon" to={'/search'} ><BottomNavigationAction style={{color: '#d0d5d9'}} icon={<SearchIcon />} /><div>Search</div></NavLink>
      </BottomNavigation>
  );
}