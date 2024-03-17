

 export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWRjMjEwYzA3MzI5Zjk1ZDYwNTdlOGFjZmY5NjMyMSIsInN1YiI6IjY1ZTk4YWJhYWY5NTkwMDE4NGRjZmJkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wY9ipfnxNBzZ4i0-lF0Pj3xrRwNdWshCQ1u61oAe1TE',
    }
  };
  
  export const  NOW_PLAYING_API ='https://api.themoviedb.org/3/movie/now_playing?&page=1'
  export const POSTER_API="https://image.tmdb.org/t/p/w500"
  export const POPULER_API = " https://api.themoviedb.org/3/movie/popular"
  export const TOP_RATED = "https://api.themoviedb.org/3/movie/top_rated"
  export const UP_COMING = "https://api.themoviedb.org/3/movie/upcoming"