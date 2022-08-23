import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { IoHome } from "react-icons/io5";
import { SidebarContext } from "../../hooks/Context/SidebarContext";
import { Sidebar, SidebarBackground, SidebarHeader } from "../Styles/Sidebar";

const SidebarComponent = ({ allReports }) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [allPercents, setAllPercents] = useState([]);

  let navigate = useNavigate();

  const getAllPercents = useCallback(async () => {
    let percentTeste = allReports.map((report) => {
      let htmlString = `${report.table}`;

      let percent = parseInt(htmlString.match(/(\d+(\.\d+)?%)/g));

      return percent;
    });

    setAllPercents(percentTeste);
  }, [allPercents]);

  useEffect(() => {
    getAllPercents();
  }, [allReports]);

  return (
    <>
      <SidebarBackground isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen}>
        <SidebarHeader>
          <IconBack onClick={() => navigate(-1, { replace: true })} />
          <IconClose onClick={() => setIsOpen(!isOpen)} />
        </SidebarHeader>

        <ul>
          {allReports.map((report, index) => {
            let htmlString = `${report.table}`;

            const percent = htmlString.match(/(\d+(\.\d+)?%)/g);

            return (
              <li key={index}>
                <HrefLink href={`#${index}`}>
                  Entregue:{" "}
                  {percent[0].length > 2 ? percent[0] : `0${percent[0]}`} /
                  Original:{" "}
                  {percent[1].length > 2 ? percent[1] : `0${percent[1]}`}
                </HrefLink>
              </li>
            );
          })}
        </ul>
      </Sidebar>
    </>
  );
};

export default SidebarComponent;

const HrefLink = styled.a`
  color: #fff;
  display: block;
  padding: 12px 0;
  margin: 6px 0;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;

  &:hover {
    background-color: #ffffff50;
  }
`;

const IconBack = styled(IoHome)`
  cursor: pointer;
  font-size: 1.4rem;
`;

const IconClose = styled(GoX)`
  cursor: pointer;
  font-size: 1.6rem;
`;
