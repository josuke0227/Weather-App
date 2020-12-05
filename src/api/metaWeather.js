import axios from "axios";

export default axios.create({
  baseURL: "https://www.metaweather.com",
  // baseURL: "https://cors-anywhere.herokuapp.com/https://www.metaweather.com",
});
