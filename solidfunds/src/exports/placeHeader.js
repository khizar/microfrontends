import { render } from "solid-js/web";

import Header from "./../Header";

export default function placeHeader(el) {
  render(() => <Header />, el);
}
