import { useCallback, useEffect, useRef, useState } from "react";
import VideoPlayer from "./VideoPlayer";

function VideoPlayerContainer({
  width = "100%",
  height = "100%",
  url,
  onProgressUpdate,
  progressData,
}) {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [played, setPlayed] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const playerRef = useRef(null);
  const playerContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  const handlePlayAndPause = () => setPlaying((prev) => !prev);

  const handleRewind = () =>
    playerRef?.current?.seekTo(playerRef?.current?.getCurrentTime() - 5);

  const handleForward = () =>
    playerRef?.current?.seekTo(playerRef?.current?.getCurrentTime() + 5);

  const handleToggleMute = () => setMuted((prev) => !prev);

  const handleSeekChange = (newValue) => {
    setPlayed(newValue[0]);
    setSeeking(true);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    playerRef.current?.seekTo(played);
  };

  const handleVolumeChange = (newValue) => setVolume(newValue[0]);

  const pad = (string) => ("0" + string).slice(-2);

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());

    return hh ? `${hh}:${pad(mm)}:${ss}` : `${mm}:${ss}`;
  };

  const handleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      if (playerContainerRef?.current.requestFullscreen) {
        playerContainerRef?.current?.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }, [isFullScreen]);

  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  useEffect(() => {
    if (played === 1) {
      onProgressUpdate({
        ...progressData,
        progressValue: played,
      });
    }
  }, [played]);

  return (
    <VideoPlayer
      playerRef={playerRef}
      playerContainerRef={playerContainerRef}
      isFullScreen={isFullScreen}
      showControls={showControls}
      playing={playing}
      volume={volume}
      muted={muted}
      played={played}
      handlePlayAndPause={handlePlayAndPause}
      handleRewind={handleRewind}
      handleForward={handleForward}
      handleToggleMute={handleToggleMute}
      handleSeekChange={handleSeekChange}
      handleSeekMouseUp={handleSeekMouseUp}
      handleVolumeChange={handleVolumeChange}
      handleFullScreen={handleFullScreen}
      handleMouseMove={handleMouseMove}
      formatTime={formatTime}
      url={url}
      width={width}
      height={height}
    />
  );
}

export default VideoPlayerContainer;
