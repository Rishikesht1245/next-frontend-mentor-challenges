export interface IResult {
  word: string;
  phonetics: { audio: string; text: string }[];
  meanings: IMeanings[];
  sourceUrls: string[];
}

export interface IMeanings {
  antonyms: [];
  definitions: { definition: string }[];
  partOfSpeech: string;
  synonyms: string[];
}
