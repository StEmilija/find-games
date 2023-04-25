import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e2cb376a1d34b9389e6fc858464d683",
  },
});
