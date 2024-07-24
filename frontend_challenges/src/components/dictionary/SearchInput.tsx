"use client";

import { fetchMeaning } from "@/actions/dictionary/actions";
import { IResult } from "@/interfaces/dictionaryInterfaces";
import React, { FormEvent, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const SearchInput = ({
  setResult,
}: {
  setResult: React.Dispatch<React.SetStateAction<IResult | null>>;
}) => {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await fetchMeaning(searchInput);
    setResult(result);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex justify-between p-4 bg-gray-200 dark:bg-white rounded-[20px]"
    >
      <input
        className="border-none outline-none bg-inherit placeholder:text-gray-800 font-serif tracking-wider"
        value={searchInput}
        placeholder="Enter word here"
        onChange={(event) => setSearchInput(event?.target?.value)}
      />
      <button>
        <IoSearchOutline className="text-gray-500 text-2xl" />
      </button>
    </form>
  );
};

export default SearchInput;
