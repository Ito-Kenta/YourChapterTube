import React from "react";
import { Chapter } from "@/types/chapter";
import Image from 'next/image';

type Props = {
    chapter: Chapter;
    handleClick: (chapter: Chapter) => void;
}

export const ChapterPlayButton: React.FC<Props> = ({chapter, handleClick}) => {
    return (
        <button
            className="group h-full flex items-center justify-center"
            type="button"
            style={{ height: "100%" }}
            onClick={() => { handleClick(chapter) }}
        >
            <Image
                src="/play.svg"
                alt="Play"
                className="group-hover:hidden h-10"
                width={30}
                height={30}
            />
            <Image
                src="/play_dark.svg"
                alt="Play (hover)"
                className="hidden group-hover:inline h-10"
                width={30}
                height={30}
            />
        </button>
    );
};

export const ChapterLoopButton: React.FC<Props> = ({chapter, handleClick}) => {
    return (
        <button
            className="group h-full"
            type="button"
            style={{ height: "100%" }}
            onClick={() => { handleClick(chapter) }}
        >
            <Image
                src={chapter.isLoop ? "/loop_play.svg" : "/loop_play_disable.svg"}
                alt="Loop"
                className="h-10 
                            group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-125 
                            transition-all duration-100"
                width={30}
                height={30}
            />
        </button>
    );
};

export const ChapterDeleteButton: React.FC<Props> = ({chapter, handleClick}) => {
    return (
        <button
            className="group h-full"
            type="button"
            style={{ height: "100%" }}
            onClick={() => { handleClick(chapter) }}
        >
            <Image
                src="./delete.svg"
                alt="Delete"
                className="h-10 
                            group-hover:scale-110 group-hover:drop-shadow-lg group-hover:brightness-125 
                            transition-all duration-100"
                width={30}
                height={30}
            />
        </button>
    );
};