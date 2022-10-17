// import { Container } from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/style.scss'
import SimpleBottomNavigation from './components/Header.js'
import Trending from './routes/Trending.js'
import Movies from './routes/Movies.js'
import Series from './routes/Series.js'
import Search from './routes/Search.js'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <div style={{width: "80%"}}>
    <Routes>
      <Route path='/' element={<Trending/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/series' element={<Series/>}/>
        <Route path='/search' element={<Search/>}/>
    </Routes>
    </div>

    </div>
    <SimpleBottomNavigation/>
    </BrowserRouter>
  );
}

export default App;
