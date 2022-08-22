import React, { useRef, useEffect } from "react";

// import placeHeader from "solidfunds/Header";
import placeFooter from "solidfunds/Footer";
import Header from "./Header";
import placeListing from "solidfunds/FundListing";

import "./index.css";
import { addFundFavs } from "./fundsService";
import { Link } from "react-router-dom";
// import { getFundFavs } from "./fundsService";
// import { getFundsList } from "./fundsService";

const OnboardContent = () => {
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
  }, []);
  return (
    <div className="container">
      <Header />
      <Link className="link" to="/favs">
        Check out favorite funds
      </Link>
      {/*<div style={{ width: "100%" }} ref={headerRef}></div>*/}
      <div style={{ width: "100%" }} ref={listingRef}></div>
      <div style={{ width: "100%" }} ref={footerRef}></div>
    </div>
  );
};

export default OnboardContent;
