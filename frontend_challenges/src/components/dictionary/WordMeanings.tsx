import { IMeanings } from "@/interfaces/dictionaryInterfaces";
import { Dancing_Script } from "next/font/google";
import React from "react";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
});
const WordMeanings = ({ meanings }: { meanings: IMeanings[] }) => {
  console.log(meanings[0]);
  return meanings?.map((meaning, index) => (
    <div key={index}>
      <div className="flex gap-3 justify-start items-center">
        <span
          className={`${dancingScript?.className} text-3xl dark:text-white`}
        >
          {meaning?.partOfSpeech}
        </span>
        <hr className="w-full mt-2"></hr>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <h6 className="text-gray-400 text-[24px] font-serif">Meaning</h6>
        <ul className="flex flex-col gap-3 list-disc ms-10">
          {meaning?.definitions?.map((def) => (
            <li
              key={def.definition}
              className="text-gray-600 dark:text-gray-50"
            >
              {def.definition}
            </li>
          ))}
        </ul>
        {meaning?.synonyms && meaning?.synonyms?.length > 0 && (
          <div className="flex gap-4 items-center justify-start">
            <h6 className="text-gray-400 text-[24px] font-serif">Synonyms</h6>
            {meaning?.synonyms?.map((synonym, index) => (
              <span className="text-violet-500 font-semibold font-serif mt-1">
                {synonym}
                {meaning?.synonyms.length !== index + 1 && ","}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  ));
};

export default WordMeanings;
