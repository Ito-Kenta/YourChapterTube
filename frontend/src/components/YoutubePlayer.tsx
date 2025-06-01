import React from "react";
import YouTube from "react-youtube";
import { onPlayerReady } from "@/utils/youtubeUtils";

type PlayerProps = {
    videoId: string,
    size: {
        width: number,
        height: number
    }
    playerRef: React.RefObject<YT.Player | null>
};

export const YoutubePlayer: React.FC<PlayerProps> = ({videoId, size, playerRef}) => {
    return (
        <YouTube
            videoId={videoId}
            onReady={onPlayerReady(playerRef)}
            opts={{
                width: "100%",      // ここを100%に
                height: "100%", // 高さは親divのaspect-ratioで調整
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                },
            }}
            className="w-full h-full"
        />
    );
};

export default YoutubePlayer;