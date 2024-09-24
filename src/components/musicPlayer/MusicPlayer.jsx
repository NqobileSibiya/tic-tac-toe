import React, {useContext, useState, useRef, useEffect}from 'react'
import { MusicPlayerWrapper } from "./MusicPlayerStyle";
import playList from "../../utils/MusicUtils/PlayList";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayerStyle";
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled";

function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SfxContext)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] =useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if(isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if(playerRef.current?.volumne)
        playerRef.current.volume = 0.1;
      return;
    }
    playerRef.current?.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickSfx()
    setIsPlaying(false)
    await playPromise?.then(() => {
      playerRef.current?.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  const displaySong = playList[currentSong].split("/")[6] || playList[currentSong]
  return (
    <MusicPlayerWrapper>
    {isPlaying ? (
      <PauseIcon 
        onClick={() => {
          clickSfx();
          setIsPlaying(false);
        }} 
        onMouseEnter={hoverSfx}
      />
    ) : (
      <PlayIcon 
        onClick={() => {
          clickSfx();
          setIsPlaying(true);
        }} 
        onMouseEnter={hoverSfx}
      />
    )}
    <NextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />


    <audio
      ref={playerRef} 
      src={playList[currentSong]} 
      onEnded={shuffleHandler}
    />
    <Text>{displaySong}</Text>
  </MusicPlayerWrapper>
  );
}

export default MusicPlayer;