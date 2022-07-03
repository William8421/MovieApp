import { Pagination, createTheme, ThemeProvider } from '@mui/material';


export default function CustomPagination({setPage, numOfPages= 10}) {
  
  const darkTheme = createTheme({
    palette:{
      mode: "dark"
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0)
  }
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Pagination
        count={numOfPages}
        onChange={(e) => handlePageChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
        
        />
      </ThemeProvider>
    </div>
  )
}
