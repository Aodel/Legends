import axios from "axios"

const apiUrl =
    "https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=3189be3503287e3df629857ce15d59e6&hash=cf6a9776c1b8521c81ca954cd05f310e";

export const comicService = {
  getAllComics() {
    const comics = axios.get(apiUrl + "/comics").then((res) => res.data);
    return comics;
  },

  getComicById(id) {
    const comics = axios.get(apiUrl + "/comics/" +id).then((res) => res.data);
    return comics;
  }
}
