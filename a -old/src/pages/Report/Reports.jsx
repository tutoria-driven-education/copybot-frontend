import { useCallback, useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ModalLoader } from "../Styles/Modal";

import Report from "./Report";

const Reports = () => {
  const [allReports, setAllReports] = useState([]);

  const getMossGeneratedPage = useCallback(async () => {
    try {
      const storage = JSON.parse(localStorage.getItem("teste"));

      console.log(storage);

      setAllReports(storage);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMossGeneratedPage();
  }, [getMossGeneratedPage]);

  return (
    <>
      <Sidebar allReports={allReports} />
      <Container>
        {allReports ? (
          allReports.map((reports, index) => (
            <div key={index}>
              <Report index={index} {...reports} />
            </div>
          ))
        ) : (
          <>
            <ModalLoader>
              <ThreeCircles
                height="100"
                width="100"
                color="#FF4791"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="three-circles-rotating"
                outerCircleColor=""
                innerCircleColor=""
                middleCircleColor=""
              />
            </ModalLoader>
          </>
        )}
      </Container>
    </>
  );
};

export default Reports;

export const Container = styled.div`
  padding: 24px 0;

  hr {
    display: none;
  }
`;
