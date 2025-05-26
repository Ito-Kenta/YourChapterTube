import React from "react";
import Link from 'next/link';
import YoutubeController from "@/components/YoutubeController";
import { gradientTextBase } from "@/styles/globalStyles";

export const metadata = {
  title: "Chapter Maker",
  description: "YouTube動画に自分だけのチャプターを付けられます"
}

const StartPage = () => {
  return (
    <div
      className=''
    >
      <h1 className={gradientTextBase}>Youtube Chapter Maker</h1>
      <Link href="/chapters" className="text-blue-500">保存チャプター一覧</Link>
      <YoutubeController />
      {/* h1n6kPZhmOc */}
    </div>
  );
};

export default StartPage;