import { createContext, useState, useEffect } from "react";
import { checkMossStatus } from "../services/api";

type MossContextType = {
  mossStatus: boolean;
  setMossStatus: (value: boolean) => void;
};

const MossContext = createContext<MossContextType>({
  mossStatus: true,
  setMossStatus: () => {},
});

const MossContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mossStatus, setMossStatus] = useState<boolean>(true);

  const getMossStatus = async () => {
    const status = await checkMossStatus();

    return setMossStatus(status);
  };

  useEffect(() => {
    getMossStatus();
  }, []);

  return (
    <MossContext.Provider value={{ mossStatus, setMossStatus }}>
      {children}
    </MossContext.Provider>
  );
};

export { MossContext, MossContextProvider };
