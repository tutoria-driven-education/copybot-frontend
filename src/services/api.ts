import axios from "axios";

const api = axios.create({
  baseURL: "https://plagiarism-checker-bot-v2.sistemas.driven.com.br",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env["VITE_API_TOKEN"]}`,
  },
});

type CheckOneToOne = {
  url1: string;
  url2: string;
  project: string;
};

type CheckOneToMany = {
  url: string;
  project: string;
};

const checkOneToOne = async (values: CheckOneToOne) => {
  return await api.post("/git/check-single", values);
};

const checkOneToMany = async (values: CheckOneToMany) => {
  return await api.post("/git/check-all", values);
};

export { checkOneToOne, checkOneToMany };
