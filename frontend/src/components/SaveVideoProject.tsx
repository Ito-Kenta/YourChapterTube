'use client';

import React, { useState, useEffect } from "react";
import { useVideoProjectsContext } from "@/context/VideoProjectsContext";
import { useVideoController } from "@/context/VideoControllerContext";
import { buttonBase } from "@/styles/globalStyles";


const SaveVideoProjects: React.FC = () => {
    const { currentProject, setCurrentName, saveProject } = useVideoProjectsContext();
    const [inputName, setInputName] = useState(currentProject?.name || "");
    const videoControl = useVideoController();

    // currentProjectが切り替わったらinputも同期
    useEffect(() => {
        setInputName(currentProject?.name || "");
    }, [currentProject?.name]);

    const handleSaveProject = () => {
        if (inputName == "") {
            alert("設定名を入力してください")
        } else {
            saveProject({
                name: inputName,
                chapterList: videoControl.chapterList,
                videoId: videoControl.videoId
            });
        }
    };

    return (
        <div className="text-black flex flex-col sm:flex-row gap-2 w-full">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setCurrentName(inputName);
                }}
                className="flex-1 min-w-0"
            >
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="プロジェクト名を入力"
                    className="border rounded bg-blue-100 ml-2 mt-1 w-full min-w-0"
                />
                <button
                    type="submit"
                    className="ml-2 px-4 py-1 bg-blue-500 text-white rounded w-full sm:w-auto mt-2 sm:mt-0"
                >
                    確定
                </button>
            </form>

            <button
                className={buttonBase + " w-full sm:w-auto mt-2 sm:mt-0"}
                type="button"
                onClick={handleSaveProject}
            >
                現在の設定を保存
            </button>
        </div>

    );
};

export default SaveVideoProjects;