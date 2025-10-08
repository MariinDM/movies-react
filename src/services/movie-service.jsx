import api from "./api";

const movieService = {
  // upcoming
  getUpcomingMovies: async (page = 1) => {
    return api.get(`/tmdb/upcoming?page=${page}`);
  },
  // trending
  getTrendingMovies: async (timeWindow = "day") => {
    return api.get(`/tmdb/trending?timeWindow=${timeWindow}`);
  },
  // topRated
  getTopRatedMovies: async (page = 1) => {
    return api.get(`/tmdb/top-rated?page=${page}`);
  },
};

export default movieService;
