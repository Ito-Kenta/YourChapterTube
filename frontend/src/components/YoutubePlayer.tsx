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
                height: size.width,
                width: size.height,
                playerVars: {
                    autoplay: 0,
                    controls: 1,
                },
            }}
        />
    );
};

export default YoutubePlayer;