import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { checkMossStatus } from "../services/api";

type MossContextType = {
  mossStatus: boolean;
  setMossStatus: (value: boolean) => void;
  getMossStatus: (activedByButton: boolean) => void;
};

const MossContext = createContext<MossContextType>({
  mossStatus: false,
  setMossStatus: () => {},
  getMossStatus: () => {},
});

const MossContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mossStatus, setMossStatus] = useState<boolean>(false);

  const getMossStatus = async (activedByButton: boolean) => {
    const now = new Date().getTime();
    const storage = JSON.parse(localStorage.getItem("status") as string);

    if (storage?.lastUpdate && now - storage?.lastUpdate < 60000 * 10) {
      setMossStatus(storage.status);
      activedByButton && toast.info("Atualizado recentemente");
      return;
    }

    const responseStatus = await checkMossStatus();

    setMossStatus(responseStatus);
    toast.success("Status atualizado!");
    localStorage.setItem(
      "status",
      JSON.stringify({ status: responseStatus, lastUpdate: now })
    );
  };

  useEffect(() => {
    getMossStatus(false);

    const interval = setInterval(() => {
      getMossStatus(false);
    }, 60000 * 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <MossContext.Provider value={{ mossStatus, setMossStatus, getMossStatus }}>
      {children}
    </MossContext.Provider>
  );
};

export { MossContext, MossContextProvider };
