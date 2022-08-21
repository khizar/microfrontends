export const fetchFund = async (id) =>
  (await fetch(`http://localhost:8080/funds/${id}/`)).json();

export const fetchAllFunds = async () =>
  (await fetch(`http://localhost:8080/funds/`)).json();

export default {
  fetchFund,
  fetchAllFunds,
};
