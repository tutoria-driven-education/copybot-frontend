import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const TimerContext = createContext();

const TimerContextProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    setTime((currentTime - initialTime) / 60000);
  }, [initialTime, currentTime]);

  return (
    <TimerContext.Provider
      value={{
        time,
        initialTime,
        setInitialTime,
        currentTime,
        setCurrentTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerContextProvider };
