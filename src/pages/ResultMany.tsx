import { useState, useEffect } from "react";
import Table from "../styles/Table";

export default function ResultMany() {
  const [result, setResult] = useState([]);

  const handleLoading = async () => {
    const storageArr = JSON.parse(localStorage.getItem("resultMany") as string);

    console.log(storageArr)
    const resultArr = storageArr.map((item: any) => {
      console.log()
    })
  };

  useEffect(() => {
    handleLoading();
  }, [handleLoading]);

  return <></>;
}
