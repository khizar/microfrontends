import React, { useEffect, useState } from "react";

function FavFunds(props) {
  const [favFunds, setFavFunds] = useState({});
  useEffect(() => {
    fetch("http://localhost:8080/favs").then((favs) =>
      favs.json().then((funds) => setFavFunds(funds))
    );
  }, []);
  return (
    <>
      <div className="funds-table">
        <section className="row">
          <span>
            <b>Fund</b>
          </span>
          <span>
            <b>Stars</b>
          </span>
        </section>
        {Object.keys(favFunds).map((key) => {
          return (
            <section className="row">
              <span>{key}</span>
              <span>{favFunds[key]}</span>
            </section>
          );
        })}
      </div>
    </>
  );
}

export default FavFunds;
