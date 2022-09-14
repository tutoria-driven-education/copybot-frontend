import { useContext, useEffect, useState } from "react";
import { Container } from "../home/styles";
import { ReportsContext } from "../../hooks/context/ReportsContext";
import { ThreeCircles } from "react-loader-spinner";

import Sidebar from "../../components/Sidebar";
import Report from "../../components/Report";
import { Loader, Timer } from "./styles";
import { TimerContext } from "../../hooks/context/TimerContext";

const Reports = () => {
  const { time } = useContext(TimerContext);
  const { reports } = useContext(ReportsContext);

  return (
    <>
      <Container>
        <Timer>Tempo estimado: {parseInt(time)} minutos</Timer>
        {reports ? (
          <>
            <Sidebar reports={reports} />

            {reports.map((report, index) => (
              <Report key={index} {...report} index={index} />
            ))}
          </>
        ) : (
          <Loader>
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
          </Loader>
        )}
      </Container>
    </>
  );
};

export default Reports;
