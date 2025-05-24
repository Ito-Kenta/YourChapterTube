"use client";
import React, { createContext, useContext, useState} from "react";
import { Chapter } from "@/types/chapter";

// 型の定義
type VideoControllerContextType = {
    chapterList: Chapter[];
    setChapterList: React.Dispatch<React.SetStateAction<Chapter[]>>;
    videoId: string;
    setVideoId: React.Dispatch<React.SetStateAction<string>>;
};

const VideoContext = createContext<VideoControllerContextType | undefined>(undefined);

export const VideoControllerProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [chapterList, setChapterList] = useState<Chapter[]>([]);
    const [videoId, setVideoId] = useState<string>("");

    return (
        <VideoContext.Provider value={{ chapterList, setChapterList, videoId, setVideoId }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideoController = () => {
    const context = useContext(VideoContext);
    if (context === undefined) {
        throw new Error("useVideoController must be used within a VideoControllerProvider");
    }
    return context;
};