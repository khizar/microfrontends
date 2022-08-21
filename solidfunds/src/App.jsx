import { render } from "solid-js/web";

import "./index.css";
import FundListing from "./FundListing";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div class="container">
      <Header />
      <FundListing />
      <Footer />
    </div>
  );
};
render(App, document.getElementById("app"));
