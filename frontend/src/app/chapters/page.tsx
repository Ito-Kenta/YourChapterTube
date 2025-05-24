'use client'; // クライアント側で使うことを宣言（これがないとクライアント側でしか使えない機能を使えない）
import React from "react";
import Link from 'next/link';
import SavedChapterList from "@/components/SavedChapterList";


const ChaptersPage = () => {
  return(
    <div 
      className='text-black'
    >
        <Link href="/">TOP</Link>
        <SavedChapterList />
    </div>
  );
};

export default ChaptersPage;