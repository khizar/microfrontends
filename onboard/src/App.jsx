import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

// import placeHeader from "solidfunds/Header";
import placeFooter from "solidfunds/Footer";
import Header from "./Header";
import placeListing from "solidfunds/FundListing";

import "./index.css";
import { addFundFavs } from "./fundsService";
// import { getFundFavs } from "./fundsService";
// import { getFundsList } from "./fundsService";

const App = () => {
  // const headerRef = useRef(null);
  const footerRef = useRef(null);
  const listingRef = useRef(null);

  useEffect(() => {
    // if (listingRef.current) {
    //   placeListing(listingRef.current);
    // }
    if (listingRef.current) {
      placeListing(listingRef.current);
    }
    if (footerRef.current) {
      placeFooter(footerRef.current);
    }
    // addFundFavs("IE0032126645").then((list) => console.log(list));
  }, []);
  return (
    <div className="container">
      <Header />
      {/*<div style={{ width: "100%" }} ref={headerRef}></div>*/}
      <div style={{ width: "100%" }} ref={listingRef}></div>
      <div style={{ width: "100%" }} ref={footerRef}></div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
