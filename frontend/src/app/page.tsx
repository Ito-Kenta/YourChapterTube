import React from "react";
import Link from 'next/link';
import YoutubeController from "@/components/YoutubeController";

export const metadata = {
  title: "Chapter Maker",
  description: "YouTube動画に自分だけのチャプターを付けられます"
}

const titleStyle = "ml-1 text-3xl font-light tracking-wide bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 text-transparent bg-clip-text tracking-tight"

const StartPage = () => {
  return (
    <div
      className=''
    >
      <h1 className={titleStyle}>
        Youtube Chapter Maker
      </h1>
      <Link href="/chapters" className="ml-1 font-medium text-blue-600 dark:text-blue-500 hover:underline">保存チャプター一覧</Link>
      <YoutubeController />
    </div>
  );
};

export default StartPage;