import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const sendRepository = async (body) => {
  const promise = await api.post("/git/download-url", body);
  return promise;
};
