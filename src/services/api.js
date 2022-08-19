import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getReports = async () => {
  try {
    const promise = api.get("/reports");
    return promise;
  } catch (error) {
    console.log(error);
  }
};

export const uploadRepository = async (body) => {
  try {
    const promise = api.post("/link", body);
    return promise;
  } catch (error) {
    console.log(error);
  }
};
