import React, { useState } from "react";

type Props = {
    onChange: (url: string) => void;
};

const SetVideoUrl: React.FC<Props> = ({ onChange }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const match = input.match(/[?&]v=([^&#]+)/);
        if (!match || !match[1] || match[1].includes("/")) {
            alert("正しいYouTube動画URLを入力してください");
            return;
        }
        onChange(match[1]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <span className="text-black mx-1">動画URL</span>
            <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="動画URLを入力"
            className="m-1 w-100 px-2 py-1 
                        bg-blue-400/50 text-black
                        border border-blue-400"
            />
            <button
            type="submit"
            className="ml-2 px-4 py-1 bg-blue-500 rounded "
            >
            決定
            </button>
        </form>
    );
};

export default SetVideoUrl;