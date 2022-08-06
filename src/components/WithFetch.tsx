import React from "react";
import { $_get, $_useSwr } from "../utils/api";

function WithFetch({ children }: any) {
  const fetcher = (url: string) => $_get(url, {});
  const { data } = $_useSwr("mock", fetcher, { suspense: true });
  return data ? children(data) : null;
}

export default WithFetch;
