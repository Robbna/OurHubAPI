import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  headers: {
    Accept: "application/json",
  },
});

export const getGameByTitle = async (title: string) => {
  return await axiosInstance.get(
    `/games/${title}?key=${process.env.GAMES_API_KEY}`,
  );
};
