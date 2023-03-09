import axios from "axios";

//https://plagiarism-checker-bot-v2.sistemas.driven.com.br

const api = axios.create({
  baseURL: "http://localhost:5000",
});

type CheckOneToOne = {
  url1: string;
  url2: string;
  project: string;
  basefile: Blob[];
};

type CheckOneToMany = {
  url: string;
  project: string;
  basefile: Blob[];
};

type SignIn = {
  email: string;
  password: string;
};

const checkOneToOne = async (values: CheckOneToOne) => {
  const token = JSON.parse(localStorage.getItem("token") as string);

  const formData = new FormData();
  formData.append("basefile", values.basefile[0] || null);
  formData.append("url1", values.url1);
  formData.append("url2", values.url2);
  formData.append("project", values.project);

  return await api.post("/git/check-single", formData, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

const checkOneToMany = async (values: CheckOneToMany) => {
  const token = JSON.parse(localStorage.getItem("token") as string);

  const formData = new FormData();
  formData.append("basefile", values.basefile[0] || null);
  formData.append("url", values.url);
  formData.append("project", values.project);

  return await api.post("/git/check-all", formData, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    timeout: 10000000 * 600,
  });
};

const checkMossStatus = async () => {
  const response = await axios.get(
    "https://check-moss-status.onrender.com/moss/check-status"
  );

  return response.data.status;
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

const getHistoric = async () => {
  const token = JSON.parse(localStorage.getItem("token") as string);
  return await api.get("/moss/historic", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export { checkOneToOne, checkOneToMany, checkMossStatus, signIn, getHistoric };
