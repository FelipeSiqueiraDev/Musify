import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Progress } from "./Progress";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { PlayerButton } from "./PlayerButton";

export const AudioCard = ({ name, cover, music, handlePlayMusic }) => {
  const [audio] = useState(new Audio(music));
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    handlePlayMusic(audio);
  };
  const handlePause = () => {
    audio.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    audio.addEventListener("pause", () => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("pause", () => setIsPlaying(false));
    };
  }, []);

  return (
    <Container>
      <div>
        <span>{name}</span>
        <img src={cover} alt={`Capa da música ${name}`} />
      </div>

      <Progress audio={audio}>
        <PlayerButton
          isPlaying={isPlaying}
          handlePause={handlePause}
          handlePlay={handlePlay}
        />
      </Progress>
    </Container>
  );
};
