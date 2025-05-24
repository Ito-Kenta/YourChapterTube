import React, { useEffect, useState } from "react";
import { useVideoProjects } from "@/hooks/useVideoProjects";
import { VideoProject } from "@/context/VideoProjectsContext";
import { useVideoController } from "@/context/VideoControllerContext";
import { useRouter } from "next/navigation";

const SavedChapterList: React.FC = () => {
    const { projects, setCurrentName, deleteProject } = useVideoProjects();
    const [mounted, setMounted] = useState(false);
    const videoControl = useVideoController();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // マウント前は何も描画しない

    const handleCallSavedProject = (project: VideoProject) => {
        videoControl.setVideoId(project.videoId);
        videoControl.setChapterList(project.chapterList);
        setCurrentName(project.name);
    };

    const handleDeleteProject = (project: VideoProject) => {
        if (window.confirm(`本当に「${project.name}」を削除しますか？`)) {
            deleteProject(project.name);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Video ID</th>
                    <th>呼び出し</th>
                    <th>削除</th>
                </tr>
            </thead>
            <tbody>
                {projects?.map((project) => (
                    <tr key={project.name}>
                        <td>{project.name}</td>
                        <td>{project.videoId}</td>
                        <td>
                            <button
                                className="bg-blue-100 hover:bg-blue-200"
                                onClick={() => {
                                    handleCallSavedProject(project);
                                    router.push("/");
                                }}
                            >
                                呼び出す
                            </button>
                        </td>
                        <td>
                            <button
                                className="bg-red-100 hover:bg-red-200"
                                onClick={() => {
                                    handleDeleteProject(project);
                                }}
                            >
                                削除
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SavedChapterList;