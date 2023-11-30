import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  headers: {
    Accept: "application/json",
  },
});

export const getBookByTitle = async (title: string, language: string) => {
  return await axiosInstance.get(`/volumes?q=intitle:${title}&langRestrict=${language}`);
};
