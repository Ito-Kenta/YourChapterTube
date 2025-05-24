import React, { Dispatch, SetStateAction } from 'react';
import { Chapter } from "@/types/chapter"
import { ChapterDeleteButton, ChapterLoopButton, ChapterPlayButton } from "@/components/ChapterPlayButton";
import { tableDiv, tableTable, tableHead, tableTr, tableTh, tableTd } from "@/styles/tableStyles"
import { transformNumberToTime } from '@/utils/chapterUtils';
import { handleSeek } from '@/utils/youtubeUtils';

type ChapterListProps = {
    chapterList: Chapter[];
    onChapterChange: Dispatch<SetStateAction<Chapter[]>>;
    playerRef: React.RefObject<any>;
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
        <div className={tableDiv}>
            <table className={tableTable}>
                <thead className={tableHead}>
                    <tr className={tableTr}>
                        <th className={`${tableTh} w-12`}>No</th>
                        <th className={`${tableTh} w-32`}>開始時間</th>
                        <th className={`${tableTh} w-32`}>終了時間</th>
                        <th className={`${tableTh} w-64`}>Title</th>
                        <th className={`${tableTh} w-20`}>再生</th>
                        <th className={`${tableTh} w-20`}>ループ</th>
                        <th className={`${tableTh} w-20`}>消去</th>

                    </tr>
                </thead>
                <tbody>
                    {chapterList.map((chapter, idx) => (
                        <tr key={chapter.id} 
                            className={chapter.isActive ? 
                                "${tableTr} bg-blue-300" : 
                                "${tableTr}"}
                        >
                            <td className={`${tableTd}`}>{idx + 1}</td>
                            <td className={`${tableTd}`}>{transformNumberToTime(chapter.startTime)}</td>
                            <td className={`${tableTd}`}>{transformNumberToTime(chapter.endTime)}</td>
                            <td className={`${tableTd}`}>{chapter.description}</td>
                            <td className={`${tableTd}`}>
                                <div className="flex justify-center items-center">
                                    <ChapterPlayButton
                                        chapter={chapter}
                                        handleClick={handlePlay}
                                    />
                                </div>
                            </td>
                            <td className={`${tableTh} justify-center items-center`}>
                                <div className="flex justify-center items-center">
                                    <ChapterLoopButton
                                        chapter={chapter}
                                        handleClick={handleLoop}
                                    />
                                </div>
                            </td>
                            <td className={`${tableTh} justify-center items-center`}>
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