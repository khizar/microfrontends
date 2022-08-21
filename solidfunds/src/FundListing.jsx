import { render } from "solid-js/web";
import { createSignal, createResource } from "solid-js";

import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import { fetchFund, fetchAllFunds } from "./FetchFunds";
import fundsService from "onboard/fundsService";

const FundListing = () => {
  const [fundId, setFundId] = createSignal();
  const [fund] = createResource(fundId, fetchFund);
  const [funds] = createResource(fetchAllFunds);
  return (
    <>
      <input
        className="input"
        type="string"
        min="1"
        placeholder="Enter ISIN"
        onInput={(e) => {
          const val = e.currentTarget.value;
          !!val && val.length === 12
            ? setFundId(e.currentTarget.value)
            : setFundId("nothing");
        }}
      />
      <span>{fund.loading && "Loading..."}</span>
      {!fund.error && fund() && (
        <div className="single-fund-content">
          <pre>{JSON.stringify(fund(), null, 2)}</pre>
          <button
            className="button"
            onClick={() => {
              fundsService
                .addFundFavs(fund()["assetIsin"])
                .then((data) => console.log(data));
            }}
          >
            Add to Favs
          </button>
        </div>
      )}
      <div className="funds-list-content">
        <pre>{JSON.stringify(funds(), null, 2)}</pre>;
      </div>
    </>
  );
};
export default FundListing;
