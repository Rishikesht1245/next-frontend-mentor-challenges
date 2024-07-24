import axios from "axios";

export const fetchMeaning = async (word: string): Promise<any> => {
  const apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  try {
    const response = await axios.get(`${apiUrl}${word}`);
    if (response?.status === 200) {
      return response?.data[0];
    } else {
      return [];
    }
  } catch (error) {
    console.log("Erorr in fetching meaning : ", error);
  }
};
