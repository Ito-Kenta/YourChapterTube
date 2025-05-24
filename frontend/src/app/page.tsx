'use client'; // クライアント側で使うことを宣言（これがないとクライアント側でしか使えない機能を使えない）
import React from "react";
import Link from 'next/link';
import YoutubeController from "@/components/YoutubeController";
import { VideoControllerProvider,  } from "@/context/VideoControllerContext";
import { gradientTextBase } from "@/styles/globalStyles";

const StartPage = () => {
  return (
    <div
      className=''
    >
      <h1 className={gradientTextBase}>Youtube Player</h1>
      <Link href="/chapters" className="text-blue-500">保存チャプター一覧</Link>
      <YoutubeController />
      {/* h1n6kPZhmOc */}
    </div>
  );
};

export default StartPage;