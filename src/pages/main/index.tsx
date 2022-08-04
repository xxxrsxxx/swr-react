import React, { Suspense } from "react";
import { $_get, $_useSwr } from "../../utils/api";

interface ListItems {
  id: number;
  label: string;
}

function Main() {
  const fetcher = (url: string) => $_get(url, {});
  const { data } = $_useSwr("mock", fetcher);
  //const [dummy, setDummy] = useState([]);
  console.log("data", data);

  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <div>start {data?.key}</div>
        {data?.list.length &&
          data.list.map((e: ListItems) => (
            <div key={e.id}>
              {e.label}
              {e.id}
            </div>
          ))}
      </Suspense>
    </>
  );
}

export default Main;
