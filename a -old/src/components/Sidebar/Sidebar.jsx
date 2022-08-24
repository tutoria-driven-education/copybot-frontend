import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../hooks/Context/SidebarContext";

import {
  Href,
  IconBack,
  IconClose,
  SidebarBackground,
  SidebarStyle,
  SidebarHeader,
} from "./styles";

const Sidebar = ({ allReports }) => {
  const navigate = useNavigate();
  const [allPercents, setAllPercents] = useState([]);
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const getAllPercents = useCallback(async () => {
    try {
      const getNumberPercent = allReports.map((report) => {
        const string = `${report.table}`;
        const arrNumber = string.match(/(\d+(\.\d+)?%)/g);

        const integer = arrNumber.map((string) => {
          return parseInt(string);
        });
        return integer;
      });

      setAllPercents(getNumberPercent);
    } catch (error) {
      console.log(error);
    }
  }, [allReports]);

  useEffect(() => {
    getAllPercents();
  }, [allReports]);

  return (
    <>
      <SidebarBackground isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <SidebarStyle isOpen={isOpen}>
        <SidebarHeader>
          <IconBack onClick={() => navigate(-1, { replace: true })} />
          <IconClose onClick={() => setIsOpen(!isOpen)} />
        </SidebarHeader>

        <ul>
          {allPercents.map((number, index) => {
            return (
              <div key={index}>
                <Href href={`#${index}`}>
                  Entregue: {number[0] >= 10 ? number[0] : `0${number[0]}`}% /
                  Original: {number[1] >= 10 ? number[1] : `0${number[1]}`}%
                </Href>
              </div>
            );
          })}
        </ul>
      </SidebarStyle>
    </>
  );
};

export default Sidebar;
