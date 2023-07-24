import { useEffect, useState } from "react";
import { ContainerButton } from "./styles";

export const Progress = ({ audio, children }) => {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const eventTimeUpdate = () => {
      const newCurrentTime = (audio.currentTime / audio.duration) * 100;
      setCurrentTime(Math.round(newCurrentTime));
    };

    audio.addEventListener("timeupdate", eventTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", eventTimeUpdate);
    };
  }, []);

  return <ContainerButton playertime={currentTime}>{children}</ContainerButton>;
};
