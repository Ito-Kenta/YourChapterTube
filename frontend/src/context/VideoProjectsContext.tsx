"use client"
import React, { createContext, useContext } from "react";
import { useVideoProjects } from "@/hooks/useVideoProjects";
import { Chapter } from "@/types/chapter";

export type VideoProject = {
    name: string;
    chapterList: Chapter[];
    videoId: string;
};

const VideoProjectsContext = createContext<ReturnType<typeof useVideoProjects> | undefined>(undefined);

export const VideoProjectsProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const value = useVideoProjects();
    return (
        <VideoProjectsContext.Provider value={value}>
            {children}
        </VideoProjectsContext.Provider>
    );
};

export const useVideoProjectsContext = () => {
    const context = useContext(VideoProjectsContext);
    if (!context) throw new Error("useVideoProjectsContext must be used within a VideoProjectsProvider");
    return context;
};