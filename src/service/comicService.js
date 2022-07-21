import axios from "axios"

const apiUrl =
"https://gateway.marvel.com/v1/public/comics?ts=3000&apikey=c8ddc405fae663f25d5aae45bac426cc&hash=648ac7a873f5e371d1e7929a23ade05d";

// const apiUrl = "https://62863be396bccbf32d71c5a2.mockapi.io";



export const comicService = {
  getAllComics() {
    const comics = axios.get(apiUrl).then((res) => res.data.data.result);
    return comics;
  },

  getComicById(id) {
    const comics = axios.get(apiUrl + "/movies/" +id).then((res) => res.data);
    return comics;
  }
}
