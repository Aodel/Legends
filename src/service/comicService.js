import axios from "axios"


// const baseUrl = "https://localhost:8080";


export const comicService = {
  getAllComics() {
    const comics = axios.get(baseUrl + "/comics").then((res) => res.data);
    return comics;
  },

  getComicById(id) {
    const comics = axios.get(baseUrl + "/comics/" +id).then((res) => res.data);
    return comics;
  }
}
