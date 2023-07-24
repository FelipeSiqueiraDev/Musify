import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";

export const PlayerButton = ({ isPlaying, handlePause, handlePlay }) => {
  const Icon = isPlaying ? AiFillPauseCircle : AiFillPlayCircle;
  const callback = isPlaying ? handlePause : handlePlay;

  return (
    <button type="button" onClick={callback}>
      <Icon size={42} />
    </button>
  );
};
