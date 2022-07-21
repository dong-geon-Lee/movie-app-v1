const API_KEY = process.env.API_KEY;

export const requests = {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },

  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
};


//  `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`;
//  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`;