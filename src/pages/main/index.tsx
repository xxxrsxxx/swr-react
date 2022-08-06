import React, { Suspense } from "react";
import WithFetch from "../../components/WithFetch";

interface ListItems {
  id: number;
  label: string;
}

const ListWithData = (data: { list: ListItems[] }) => (
  <>
    {data?.list.length &&
      data.list.map((e: ListItems) => (
        <div key={e.id}>
          {e.label}
          {e.id}
        </div>
      ))}
  </>
);

function Main() {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <WithFetch>{ListWithData}</WithFetch>
      </Suspense>
    </>
  );
}

export default Main;
