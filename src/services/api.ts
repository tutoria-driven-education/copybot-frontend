import axios from "axios";

const api = axios.create({
  baseURL: "https://script-colinhas-bot.sistemas.driven.com.br",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.c2VuaGFfc3VwZXJfc2VjcmV0YV9wYXJhX2RyaXZlbg.8rodg9m182NA84woW_3xfL-HrwHdnDeDcgq81al0NB4",
  },
});

interface DataValues {
  url1: string;
  url2: string;
  project: string;
}

const compareTwoProject = async (data: DataValues) => {
  return await api.post("/git/check-single", data);
};

export { compareTwoProject };
