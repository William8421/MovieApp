const useGenre =(selectedGenres) => {
    if(selectedGenres.length < 1){
        return ""
    }
    const GenreIds = selectedGenres.map(item => item.id)
    return GenreIds.reduce((acc, cur) => acc + ','+ cur);

}

export default useGenre