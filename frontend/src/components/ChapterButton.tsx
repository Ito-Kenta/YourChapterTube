import React from "react";
import { buttonBase } from "@/styles/globalStyles"

type ChapterButtonProps = {
    buttonText: string;
    onClick?: () => void;
    addStyle?: string;
};

const ChapterButton: React.FC<ChapterButtonProps> = ({ buttonText, onClick, addStyle="w-30"}) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${buttonBase} mt-1 ${addStyle}`}
        >
            {buttonText}
        </button>
    );
};

export default ChapterButton;