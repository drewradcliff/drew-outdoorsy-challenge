import axios from "axios";

const BASE_URL = `https://search.outdoorsy.com`;

export const getRentals = async (
  keywords: string,
  limit: number,
  offset: number
) => {
  const res = await axios.get(
    `${BASE_URL}/rentals?filter[keywords]=${keywords}&page[limit]=${limit}&page[offset]=${offset}`
  );
  return res.data;
};
