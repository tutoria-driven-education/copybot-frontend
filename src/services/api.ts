import axios from "axios";

const mossServices = axios.create({
  baseURL: `${import.meta.env["VITE_API_URL"]}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env["VITE_API_TOKEN"]}`,
  },
});

const authServices = axios.create({
  baseURL: "https://spybot-auth-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

interface DataValues {
  url1: string;
  url2: string;
  project: string;
}

interface ILogin {
  email: string;
  password: string;
}

const compareTwoProject = async (data: DataValues) => {
  return await mossServices.post("/git/check-single", data);
};

const signIn = async (data: ILogin) => {
  return await authServices.post("/sign-in", data);
};

const verifyToken = async (token: string) => {
  return await authServices.get("/verify-token", {
    headers: { "x-access-token": `${token}` },
  });
};

export { compareTwoProject, signIn, verifyToken };
