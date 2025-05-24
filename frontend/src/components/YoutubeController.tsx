import React, { useEffect, useRef } from 'react';
import { buttonBase, gradientTextBase } from "@/styles/globalStyles";
import { onPlayerReady, handlePlay, handlePause, handleStop, getTime, handleGetTime, handleSeek} from '@/utils/youtubeUtils';
import YoutubePlayer from '@/components/YoutubePlayer';
import DisplayChapterList from "@/components/DisplayChapterList";
import MakeChapterControll from '@/components/MakeChapterControll';
import { Chapter } from "@/types/chapter";
import { useVideoController } from '@/context/VideoControllerContext';
import SetVideoUrl from './SetVideoUrl';
import SaveVideoProjects from '@/components/SaveVideoProject';


const YoutubeController: React.FC = () => {
    const playerRef = useRef<any>(null);
    const videoControl = useVideoController();

    useEffect(() => {
        const getTimeInTime = setInterval(() => {
            const currentTime = getTime(playerRef);
            if (videoControl.chapterList && videoControl.chapterList.some(chapter => chapter.isActive)) {
                const activeChapter = videoControl.chapterList.find(chapter => chapter.isActive);
                if (activeChapter?.startTime == undefined || 
                    activeChapter?.endTime == undefined
                ) {} else {
                    if (activeChapter && 
                        activeChapter?.isLoop && 
                        currentTime > activeChapter.endTime) {
                        handleSeek(playerRef, activeChapter.startTime);
                    }
                }
            }
        }, 100);
        return () => clearInterval(getTimeInTime);
    }, [videoControl.chapterList]);

    useEffect(() => { 
        const excludeKeys = ["isActive", "isLoop"];
        console.log(
          JSON.stringify(
            videoControl.chapterList,
            (key, value) => (excludeKeys.includes(key) ? undefined : value),
            4
          )
        );
    }, [videoControl.chapterList]);

    return (
        <div>
            <SetVideoUrl 
                onChange={videoControl.setVideoId}
            />
            <YoutubePlayer 
                videoId={videoControl.videoId}
                size={{ width: 560, height: 1000}}
                playerRef={playerRef}
            />
            <SaveVideoProjects />
            <MakeChapterControll 
                playerRef={playerRef}
                onChange={videoControl.setChapterList}
            />
            {videoControl.chapterList && videoControl.chapterList[0] && (
                <DisplayChapterList
                    chapterList={videoControl.chapterList}
                    onChapterChange={videoControl.setChapterList}
                    playerRef={playerRef}
                />
            )}
        </div>
    );
};

export default YoutubeController;