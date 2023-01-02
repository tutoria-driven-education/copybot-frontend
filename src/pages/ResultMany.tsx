import { useState, useEffect } from "react";
import Table from "../styles/Table";

export default function ResultMany() {
  const [result, setResultTest] = useState([])

  useEffect(() => {
    setResultTest(JSON.parse(localStorage.getItem("result") as string))
  }, [])

  return (
    <></>
  )
}
