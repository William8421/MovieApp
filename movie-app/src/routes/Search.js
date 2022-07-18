import React, {useState, useEffect} from 'react'
import { createTheme, ThemeProvider, } from '@mui/material/styles'
import  {Button, Tab, Tabs, TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import SingleContent from '../components/SingleContent';
import CustomPagination from '../components/CustomPagination';

export default function Search() {
    const [type, setType] = useState(0)
    const [page, setPage] = useState(1)
    const [searchText, setSearchText] = useState()
    const [content, setContent] = useState()
    const [numOfPages, setNumOfPages] = useState()


    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });


      const fetchSearch = async () =>{
              const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`)
              setContent(data.results)
              setNumOfPages(data.total_pages)
          }

          useEffect(() => {
              window.scroll(0, 0);
              fetchSearch();
              // eslint-disable-next-line
          }, [type, page])
      
      
      
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div style={{display: "flex", margin: "15px 0"}}>
      <TextField
      style={{flex: 1}}
      className="searchBox"
      label="search"
      variant='filled'
      onChange={(e) => setSearchText(e.target.value)}
      />
      <Button
      variant='contained'
      style={{marginLeft: "10px"}}
      onClick={fetchSearch}
      >
          <SearchIcon/>
          </Button>
      </div>

        <Tabs value={type}
        indicatorColor="primary"
        textColor='primary'
        onChange={(event, newValue) => {
            setType(newValue);
            setPage(1)
        }}
        style={{paddingBottom: "5px"}}
        >
        <Tab label="Search Movies"/>
        <Tab label="Search TV Series"/>
        </Tabs>

      </ThemeProvider>
      <div className='container' style={{width: "85%"}} >
            {
                content && content.map(item => (
                    <SingleContent
                    key={item.id} 
                    id={item.id}
                    poster={item.poster_path}
                    title={item.title || item.name}
                    date={item.first_air_date || item.release_date}
                    media_type={type ? "tv" : "movie"}
                    vote_average={item.vote_average}
                    />
                ))
            }
            {searchText &&
            content.length === 0 &&
            (type ? <h2>No Series Found</h2> : <h2>No Movie Found</h2>)
            }
        {numOfPages > 1 &&
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
        }
        </div>
    </div>
  )
}
