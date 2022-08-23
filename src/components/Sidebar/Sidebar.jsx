import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarContext } from "../../hooks/Context/SidebarContext";

const Sidebar = ({ allReports }) => {
  const navigate = useNavigate();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const [allPercents, setAllPercents] = useState([]);

  const getAllPercents = useCallback(async () => {
    try {
      const getNumberPercent = allReports.map((report) => {
        const string = `${report.table}`;
        return parseInt(string.match(/(\d+(\.\d+)?%)/g));
      });

      setAllPercents(getNumberPercent);
    } catch (error) {
      console.log(error);
    }
  }, [allReports]);

  useEffect(() => {
    getAllPercents();
  }, [allReports]);

  return <></>;
};

export default Sidebar;
