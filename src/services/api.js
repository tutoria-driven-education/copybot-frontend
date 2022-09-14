import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const sendRepository = async (body) => {
  const promise = await api.post("/git/check-all", body);
  return promise;
};

export const compareTwoProject = async (body) => {
  const promise = await api.post("/git/check-single/", body);
  return promise;
};
