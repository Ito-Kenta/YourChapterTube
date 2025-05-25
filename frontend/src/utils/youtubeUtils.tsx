import React from 'react';
import { YouTubeProps } from "react-youtube";

export const onPlayerReady = (
    playerRef: React.RefObject<YT.Player | null>): 
    YouTubeProps["onReady"] => (event) => {
    playerRef.current = event.target;
};

export const handlePlay = (
    playerRef: React.RefObject<YT.Player | null>) => {
    playerRef.current?.playVideo();
};

export const handlePause = (
    playerRef: React.RefObject<YT.Player | null>) => {
    playerRef.current?.pauseVideo();
};

export const handleStop = (
    playerRef: React.RefObject<YT.Player | null>) => {
    playerRef.current?.stopVideo();
};

export const getTime = (playerRef: React.RefObject<YT.Player | null>) => {
    const currentTime = playerRef.current?.getCurrentTime();
    return currentTime;
};

export const handleGetTime = (playerRef: React.RefObject<YT.Player | null>) => {
    const currentTime = getTime(playerRef);
    alert(`${currentTime}`)
}

export const handleSeek = (playerRef: React.RefObject<YT.Player | null>, targetTime: number) => {
    if (playerRef.current) {
        playerRef.current.seekTo(targetTime, true);
    }
}

export const getDuration = (playerRef: React.RefObject<YT.Player | null>) => {
    return playerRef.current?.getDuration();
};
