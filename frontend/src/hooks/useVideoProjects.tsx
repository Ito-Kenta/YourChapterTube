import { useState, useEffect } from "react";
import { VideoProject } from "@/context/VideoProjectsContext";

const STORAGE_KEY = "videoProjects";


export function useVideoProjects() {
    const [projects, setProjects] = useState<VideoProject[]>(() => {
        if (typeof window === "undefined") return [];
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [];
    });
    const [currentName, setCurrentName] = useState<string>("");

    // 保存
    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    }, [projects]);

    // 現在のプロジェクト取得
    const currentProject = projects.find(p => p.name === currentName);

    // プロジェクト追加・更新
    const saveProject = (project: VideoProject) => {
        setProjects(prev => {
            const exists = prev.some(p => p.name === project.name);
            if (exists) {
                return prev.map(p => p.name === project.name ? project : p);
            } else {
                return [...prev, project];
            }
        });
        setCurrentName(project.name);
    };

    // プロジェクト削除
    const deleteProject = (name: string) => {
        setProjects(prev => prev.filter(p => p.name !== name));
        if (currentName === name) setCurrentName("");
    };

    return {
        projects,
        currentProject,
        setCurrentName,
        saveProject,
        deleteProject,
    };
}