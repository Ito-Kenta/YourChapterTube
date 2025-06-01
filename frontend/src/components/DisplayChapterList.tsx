/// <reference types="youtube" />
import React, { Dispatch, SetStateAction } from 'react';
import { Chapter } from "@/types/chapter"
import { ChapterDeleteButton, ChapterLoopButton, ChapterPlayButton } from "@/components/ChapterPlayButton";
import { tableDiv, tableTable, tableHead, tableTr, tableTh, tableTd } from "@/styles/tableStyles"
import { transformNumberToTime } from '@/utils/chapterUtils';
import { handleSeek } from '@/utils/youtubeUtils';

type ChapterListProps = {
    chapterList: Chapter[];
    onChapterChange: Dispatch<SetStateAction<Chapter[]>>;
    playerRef: React.RefObject<YT.Player | null>;
}
const DisplayChapterList: React.FC<ChapterListProps> = ({chapterList, onChapterChange, playerRef}) => {
    const handlePlay = (chapter: Chapter) => {
        if (onChapterChange) {
            onChapterChange(
                chapterList.map((c) =>
                    c.id === chapter.id ? { ...c, isActive: true } : { ...c, isActive: false }
                )
            );
        }
        if (typeof chapter.startTime === "number") {
            handleSeek(playerRef, chapter.startTime);
        };
    };

    const handleLoop = (chapter: Chapter) => {
        if (onChapterChange) {
            onChapterChange(
                chapterList.map((c) =>
                    c.id === chapter.id ? { ...c, isLoop: !c.isLoop } : { ...c }
                )
            );
        }
    };

    function handleDelete(chapter: Chapter): void {
        if (onChapterChange) {
            onChapterChange(
                chapterList.filter((c) => c.id !== chapter.id)
            );
        };
    };

    return (
        <div className={tableDiv + " w-full overflow-x-auto"}>
            <table className={tableTable + " min-w-[600px] w-full"}>
                <thead className={tableHead}>
                    <tr className={tableTr}>
                        <th className={tableTh + " w-3 min-w-0 text-xs sm:text-base"}>No</th>
                        <th className={tableTh + " w-20 sm:w-10 min-w-0 text-xs sm:text-base"}>開始時間</th>
                        <th className={tableTh + " w-20 sm:w-10 min-w-0 text-xs sm:text-base"}>終了時間</th>
                        <th className={tableTh + " w-40 sm:w-20 min-w-0 text-xs sm:text-base"}>Title</th>
                        <th className={tableTh + " w-14 sm:w-10 min-w-0 text-xs sm:text-base"}>再生</th>
                        <th className={tableTh + " w-14 sm:w-10 min-w-0 text-xs sm:text-base"}>ループ</th>
                        <th className={tableTh + " w-14 sm:w-10 min-w-0 text-xs sm:text-base"}>消去</th>
                    </tr>
                </thead>
                <tbody>
                    {chapterList.map((chapter, idx) => (
                        <tr key={chapter.id} 
                            className={chapter.isActive ? `${tableTr} bg-blue-300` : `${tableTr}`}>
                            <td className={tableTd + " text-xs sm:text-base"}>{idx + 1}</td>
                            <td className={tableTd + " text-xs sm:text-base"}>{transformNumberToTime(chapter.startTime)}</td>
                            <td className={tableTd + " text-xs sm:text-base"}>{transformNumberToTime(chapter.endTime)}</td>
                            <td className={tableTd + " text-xs sm:text-base break-words max-w-[120px]"}>{chapter.description}</td>
                            <td className={tableTd + " p-1 sm:p-2"}>
                                <div className="flex justify-center items-center">
                                    <ChapterPlayButton
                                        chapter={chapter}
                                        handleClick={handlePlay}
                                    />
                                </div>
                            </td>
                            <td className={tableTh + " p-1 md:p-2 justify-center items-center"}>
                                <div className="flex justify-center items-center">
                                    <ChapterLoopButton
                                        chapter={chapter}
                                        handleClick={handleLoop}
                                    />
                                </div>
                            </td>
                            <td className={tableTh + " p-1 md:p-2 justify-center items-center"}>
                                <div className="flex justify-center items-center">
                                    <ChapterDeleteButton
                                        chapter={chapter}
                                        handleClick={handleDelete}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DisplayChapterList;