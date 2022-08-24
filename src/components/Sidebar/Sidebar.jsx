import { useContext, useEffect, useState } from "react";
import { GoX } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../hooks/context/SidebarContext";
import Percent from "../Percent";
import { SideHeader, SideNavigation, Icon, SideBackground } from "./styles";

const Sidebar = ({ reports }) => {
  let navigate = useNavigate();
  const [newReports, setNewReports] = useState([]);
  const { isOpen, toggleSidebarOpen } = useContext(SidebarContext);

  useEffect(() => {
    const reportsNumber = reports.map((report) => {
      const arrNumber = report.table.match(/(\d+(\.\d+)?%)/g);

      return arrNumber.map((percent) => {
        return parseInt(percent);
      });
    });

    const deliveredIndex = 0;
    const soruceIndex = 1;

    let objReports = reportsNumber.map((numbers, index) => {
      return {
        delivered: numbers[deliveredIndex],
        source: numbers[soruceIndex],
        index,
      };
    });

    setNewReports(objReports);
  }, [reports]);
  return (
    <>
      <SideBackground isOpen={isOpen} onClick={toggleSidebarOpen} />
      <SideNavigation isOpen={isOpen}>
        <SideHeader>
          <Icon>
            <IoHome
              onClick={() => {
                navigate("/");
                toggleSidebarOpen();
              }}
            />
          </Icon>
          <Icon onClick={toggleSidebarOpen}>
            <GoX />
          </Icon>
        </SideHeader>

        <ul>
          {newReports.map((report, index) => (
            <li key={index}>
              <Percent {...report} index={index} />
            </li>
          ))}
        </ul>
      </SideNavigation>
    </>
  );
};

export default Sidebar;
