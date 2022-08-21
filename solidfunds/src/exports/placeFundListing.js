import { render } from "solid-js/web";

import FundListing from "./../FundListing";

export default function placeHeader(el) {
  render(() => <FundListing />, el);
}
