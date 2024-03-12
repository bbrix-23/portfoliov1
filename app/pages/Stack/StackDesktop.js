import React, { useEffect, useState } from "react";
import TableBody from "@/app/components/Table/TableBody";

// data
import { TableData } from "./Data";

const TableHeading = ["Language & Tools", "Side", "Rate"];

const StackDesktop = () => {
  const [data, setData] = useState([]);

  const nextPage = () => {
    setData(TableData.slice(10, 20));
  };
  const prevPage = () => {
    setData(TableData.slice(0, 10));
  };
  const onSearch = (e) => {
    if (e === "") {
      setData(TableData.slice(0, 10));
    }
    setData((prev) => {
      return TableData.filter((i) =>
        i?.title.toLowerCase().includes(e.toLowerCase())
      ).slice(0, 10);
    });
  };

  useEffect(() => {
    setData(TableData.slice(0, 10));
  }, []);

  return (
    <div className="h-screen mt-10">
      <div className="heading">
        <p className="text-lg font-semibold">My Stack</p>
        <h1 className="text-5xl font-bold">What I Use</h1>
      </div>
      <div className="body flex justify-center mt-10">
        <TableBody
          TableHead={TableHeading}
          nextPage={nextPage}
          prevPage={prevPage}
          TableBody={data}
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default StackDesktop;
