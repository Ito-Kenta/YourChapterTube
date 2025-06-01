import React from "react";

type ChapterButtonProps = {
    buttonText: string;
    onClick?: () => void;
    addStyle?: string;
};

const ChapterButton: React.FC<ChapterButtonProps> = ({ buttonText, onClick}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-25 px-1
                    bg-slate-500 text-white hover:bg-slate-400 rounded"
        >
            {buttonText}
        </button>
    );
};

export default ChapterButton;

export const SubmitChapterButton: React.FC<ChapterButtonProps> = ({ buttonText, onClick}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-25 px-1
                    bg-blue-500 text-white hover:bg-blue-400 rounded"
        >
            {buttonText}
        </button>
    );
};