import axios from "axios";

const mossServices = axios.create({
  baseURL: "https://spybot.sistemas.driven.com.br/",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.c2VuaGFfc3VwZXJfc2VjcmV0YV9wYXJhX2RyaXZlbg.8rodg9m182NA84woW_3xfL-HrwHdnDeDcgq81al0NB4",
  },
});

const authServices = axios.create({
  baseURL: "https://spybot-auth-api.herokuapp.com/",
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
