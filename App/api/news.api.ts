import axios from './axios';

const ApiKey = 'ba5b6815d63e488eb0d5ed35e5e36a96';

export const getAllNews = (word: string) =>
  axios.get(
    `/top-headlines?country=us${word ? `&q=${word}` : ''}&apiKey=${ApiKey}`,
  );
