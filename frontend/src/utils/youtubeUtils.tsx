import React from 'react';
import YouTube, { YouTubeProps } from "react-youtube";

export const onPlayerReady = (
    playerRef: React.RefObject<any>): 
    YouTubeProps["onReady"] => (event) => {
    playerRef.current = event.target;
};

export const handlePlay = (
    playerRef: React.RefObject<any>) => {
    playerRef.current?.playVideo();
};

export const handlePause = (
    playerRef: React.RefObject<any>) => {
    playerRef.current?.pauseVideo();
};

export const handleStop = (
    playerRef: React.RefObject<any>) => {
    playerRef.current?.stopVideo();
};

export const getTime = (playerRef: React.RefObject<any>) => {
    const currentTime = playerRef.current?.getCurrentTime();
    return currentTime;
};

export const handleGetTime = (playerRef: React.RefObject<any>) => {
    const currentTime = getTime(playerRef);
    alert(`${currentTime}`)
}

export const handleSeek = (playerRef: React.RefObject<any>, targetTime: number) => {
    playerRef.current.seekTo(targetTime, true)
}

export const getDuration = (playerRef: React.RefObject<any>) => {
    return playerRef.current?.getDuration();
};
