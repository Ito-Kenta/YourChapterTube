'use client';

import React, { useState, useEffect } from "react";
import { useVideoProjectsContext } from "@/context/VideoProjectsContext";
import { useVideoController } from "@/context/VideoControllerContext";


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
        <div className="w-full sm:w-[800px] flex flex-row gap-1 mx-1 mt-1">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setCurrentName(inputName);
                }}
                className="flex gap-1 flex-1"
            >
                <input
                    type="text"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    placeholder="設定の保存名を入力"
                    className="min-w-0 flex-1 
                                px-1 text-black 
                                border border-black rounded 
                                bg-gray-300"
                />
                <button
                    type="submit"
                    className="w-16 px-2 py-0.5
                        bg-gray-500 text-white rounded"
                >
                    確定
                </button>
            </form>

            <button
                className="w-25 px-2 py-0.5 mr-3
                        bg-gray-500 text-white rounded"
                type="button"
                onClick={handleSaveProject}
            >
                設定を保存
            </button>
        </div>

    );
};

export default SaveVideoProjects;