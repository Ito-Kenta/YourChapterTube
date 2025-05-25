import React, { Dispatch, SetStateAction } from 'react';
import { ulid } from "ulid";
import ChapterButton from '@/components/ChapterButton';
import { getTime } from '@/utils/youtubeUtils';
import { Chapter } from '@/types/chapter';
import { transformNumberToTime } from '@/utils/chapterUtils';


type MakeChapterProps = {
    playerRef: React.RefObject<YT.Player | null>
    onChange: Dispatch<SetStateAction<Chapter[]>>;
}

const MakeChapterControll: React.FC<MakeChapterProps> = ({playerRef, onChange}) => {
    const [startTime, setStartTime] = React.useState<number | undefined>(undefined);
    const [endTime, setEndTime] = React.useState<number | undefined>(undefined);
    const [description, setDescription] = React.useState<string>("");
    
    const handleSetStartTime = () => {
        const time = getTime(playerRef);
        setStartTime(time);
    };
    const handleSetEndTime = () => { 
        const time = getTime(playerRef);
        setEndTime(time);
    };

    const handleAddChapter = () => {
        if ((startTime == undefined) || (endTime == undefined)) {
            alert("開始時間または終了時間が未設定です")
        } else if (startTime >= endTime) {
            alert("終了時間を開始時間より後に設定してください！")
        } else {
            const chapter: Chapter = {
                id: ulid(),
                startTime: startTime,
                endTime: endTime,
                description: description,
                isActive: false,
                isLoop: false
            };
            onChange(prev => prev ? [...prev, chapter] : [chapter]);
            setStartTime(undefined);
            setEndTime(undefined);
            setDescription("");
        }
    };
    const displayTimeStyle = "w-15 ml-1 flex items-center mt-1";

    return (
        <div className='text-black'>
            <div className='flex'>
                <ChapterButton
                    buttonText="開始セット"
                    onClick={() => handleSetStartTime()}
                />
                <span className={displayTimeStyle}>{startTime !== undefined ? transformNumberToTime(startTime) : '未設定'}</span>
                <span className='mx-3 mt-2'>{"-"}</span>
                <ChapterButton
                    buttonText="終了セット"
                    onClick={() => handleSetEndTime()}
                />
                <span className={displayTimeStyle}>{endTime !== undefined ? transformNumberToTime(endTime) : '未設定'}</span>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setDescription(description);
                    }}
                >
                    <label>説明</label>
                    <input 
                        type="text"
                        className='border mt-2'
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    ></input>
                </form>
            <ChapterButton 
                buttonText="Submit"
                onClick={() => handleAddChapter()}
                addStyle="w-30 bg-sky-600 text-white border-sky-700"
            />
            </div>
        </div>
    );
};

export default MakeChapterControll;