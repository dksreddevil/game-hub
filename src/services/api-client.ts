import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c9e952e116634b2097d4dc7124eb2a11",
  },
});
