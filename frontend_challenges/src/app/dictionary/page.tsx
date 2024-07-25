"use client";
import React, { useState } from "react";
import { PiBookLight } from "react-icons/pi";
import { Dancing_Script } from "next/font/google";

// moon
import { IoMoonOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi2";
import SearchInput from "@/components/dictionary/SearchInput";
import WordandAudio from "@/components/dictionary/WordandAudio";
import { IResult } from "@/interfaces/dictionaryInterfaces";
import WordMeanings from "@/components/dictionary/WordMeanings";
import Link from "next/link";

const page = () => {
  const [result, setResult] = useState<IResult | null>(null);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="max-w-4xl w-full mx-auto mt-20 border rounded-md p-10 flex flex-col gap-10 ">
      {/* dictionary header */}
      <header className="flex justify-between items-center">
        <PiBookLight className="text-4xl text-gray-500" />
        <div className="flex gap-5 items-center">
          <select className="flex items-center gap-1 font-serif bg-white text-lg hover:border-none outline-none w-[80px]">
            <option value="Serif">Serif</option>
            <option value="Serif">Sans</option>
          </select>
          <div className="h-[30px] border border-l-2"></div>
          {/* toggle and moon icon */}
          <div
            className="flex gap-2 items-center justify-center"
            onClick={() => toggleTheme()}
          >
            <div className="flex w-[40px] rounded-full bg-gray-500 p-1 justify-start dark:justify-end transition-all duration-300">
              <span className="p-2 rounded-full bg-white"></span>
            </div>
            <IoMoonOutline className="text-2xl text-gray-500 dark:hidden" />
            <HiOutlineSun className="text-2xl text-gray-500 hidden dark:inline" />
          </div>
        </div>
      </header>

      {/* Search Input */}
      <SearchInput setResult={setResult} />

      {/* word and audio Input */}
      {result ? (
        <div className="ms-2 flex flex-col gap-10">
          <WordandAudio
            word={result?.word}
            phonetics={result?.phonetics?.filter((phonetic) => phonetic?.audio)}
          />
          <WordMeanings meanings={result?.meanings} />
          <hr />
          <div className="flex gap-3 items-center">
            <h5 className="text-[18px] text-gray-400 font-serif">Source</h5>
            {result?.sourceUrls?.map((url) => (
              <Link
                className="underline flex gap-1 items-center dark:text-blue-600 text-gray-600"
                href={url}
              >
                {url}
                <IoExitOutline className="text-lg font-semibold" />
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <h4 className="mx-auto">Search word for meaning</h4>
      )}
    </div>
  );
};

export default page;
