import FetchFunds from "solidfunds/FetchFunds";
const API_URL = "http://localhost:8080";

export const getFundsList = async () => {
  return FetchFunds.fetchAllFunds();
};

export const getFundFavs = async () => {
  return (await fetch(`${API_URL}/favs`)).json();
};
export const addFundFavs = async (id) => {
  return (
    await fetch(`${API_URL}/favs/${id}`, {
      method: "POST",
    })
  ).json();
};

export default {
  addFundFavs,
  getFundFavs,
};
