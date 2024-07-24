"use client";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const WordandAudio = ({ word, phonetics }: IWordandAudio) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  console.log(playAudio, "== pudid");
  console.log(phonetics[0]?.audio, "=== audio");
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-0">
        <h1 className="text-4xl font-semibold tracking-wide">{word}</h1>
        <span className="text-violet-500">{phonetics[0]?.text}</span>
      </div>
      <div className="rounded-full p-4 bg-violet-200 flex items-center justify-center">
        <FaPlay className="text-violet-500" onClick={() => playAudio()} />
        <audio ref={audioRef} hidden controls>
          <source src={`${phonetics[0]?.audio}`} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

interface IWordandAudio {
  word: string;
  phonetics: { audio: string; text: string }[];
}

export default WordandAudio;
