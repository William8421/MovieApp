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
      <BottomNavigation style={{backgroundColor: "brown", position: "fixed", bottom: 0, width: "100%", display: 'flex',justifyContent: "space-around"}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <NavLink className="navIcon" to={'/'} ><BottomNavigationAction style={{color: 'white'}} icon={<WhatshotIcon />} />Trending</NavLink>
        <NavLink className="navIcon" to={'/movies'} ><BottomNavigationAction style={{color: 'white'}}icon={<MovieIcon />} /><div>Movies</div></NavLink>
        <NavLink className="navIcon" to={'/series'} ><BottomNavigationAction style={{color: 'white'}} icon={<SeriesIcon />} /><div>Series</div></NavLink>
        <NavLink className="navIcon" to={'/search'} ><BottomNavigationAction style={{color: 'white'}} icon={<SearchIcon />} /><div>Search</div></NavLink>
      </BottomNavigation>
  );
}