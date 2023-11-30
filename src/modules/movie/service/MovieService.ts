import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.MOVIES_API_KEY}`,
  },
});

export const getMovieByTitle = async (title: string, language: string) => {
  return await axiosInstance.get(`/search/movie?query=${title}&include_adult=true&language=${language}`);
};
