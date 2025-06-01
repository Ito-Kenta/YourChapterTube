import React, { useState } from "react";

type Props = {
    onChange: (url: string) => void;
};

const SetVideoUrl: React.FC<Props> = ({ onChange }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})(?:\S+)?/;
        const match = input.match(regex);
        console.log(match)
        if (!match || !match[1] || match[1].includes("/")) {
            alert("正しいYouTube動画URLを入力してください");
            return;
        }
        console.log(match[1])
        onChange(match[1]);
    };

    return (
        <form onSubmit={handleSubmit}
            className="w-full flex flex-row gap-1 px-1 mb-1 sm:w-180"
        >
            <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="動画URLを入力"
                className="flex-1 px-1 bg-gray-400/50 text-black border rounded"
            />
            <button
                type="submit"
                className="px-2 py-0.5 w-13 bg-gray-500 rounded"
            >
            決定
            </button>
        </form>
    );
};

export default SetVideoUrl;