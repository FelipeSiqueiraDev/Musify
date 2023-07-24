import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TracksList } from "./styles";

import { Header } from "../../components/Header";
import { AudioCard } from "../../components/AudioCard";

export const Feed = () => {
  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [currentTrack, setCurrentTrack] = useState(null);

  const filteredTracks = tracks.filter((track) =>
    track.name.toUpperCase().includes(inputSearch.toUpperCase())
  );

  const handlePlayMusic = (audio) => {
    currentTrack?.pause();
    audio.play();
    setCurrentTrack(audio);
  };

  useEffect(() => {
    const getTracks = async () => {
      try {
        const response = await api.get("/tracks");
        setTracks(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    getTracks();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header setInputSearch={setInputSearch} />
      <TracksList>
        {filteredTracks.map((track) => (
          <AudioCard
            key={track.id}
            handlePlayMusic={handlePlayMusic}
            {...track}
          >
            {track.name}
          </AudioCard>
        ))}
      </TracksList>
    </>
  );
};
