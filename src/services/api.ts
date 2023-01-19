import axios from "axios";

// https://plagiarism-checker-bot-v2.sistemas.driven.com.br

const api = axios.create({
  baseURL: "https://plagiarism-checker-bot-v2.sistemas.driven.com.br",
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

type SignIn = {
  email: string;
  password: string;
};

const checkOneToOne = async (values: CheckOneToOne) => {
  const token = JSON.parse(localStorage.getItem("token") as string);
  return await api.post("/git/check-single", values, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    timeout: 100 * 600,
  });
};

const checkOneToMany = async (values: CheckOneToMany) => {
  const token = JSON.parse(localStorage.getItem("token") as string);

  return await api.post("/git/check-all", values, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    timeout: 10000 * 600,
  });
};

const signIn = async (values: SignIn) => {
  const token = JSON.parse(localStorage.getItem("token") as string);
  return await api.post("/auth/sign-in", values, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export { checkOneToOne, checkOneToMany, signIn };
