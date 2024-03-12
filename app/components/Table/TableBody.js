import React, { useState } from "react";
import { useMode } from "../../context/theme";
import Star from "../../assets/star.png";
import Image from "next/image";

const Table = ({ TableHead, TableBody, nextPage, prevPage, onSearch }) => {
  const { isDark, setDark } = useMode();
  const [isNext, setNext] = useState(false);

  return (
    <div className="flex flex-col items-center w-1/2">
      {/* filtering */}
      <div className="flex justify-between p-3 w-full space-x-2 items-center">
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search Language or tools..."
          className="p-3 flex-1 border-2 rounded-lg border-gray-200"
        />
        <button className=" self-end flex p-3 bg-[#6B29BF] rounded-lg text-white hover:bg-[#532490]">
          Search
        </button>
      </div>
      {/* filtering */}
      <table className="table-fixed w-full">
        <thead>
          <tr className="text-left p-20">
            {TableHead?.map((i) => (
              <th className="p-3">{i}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TableBody?.map(({ id, title, rate, side }, index) => (
            <tr
              key={id}
              className={`text-left ${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="p-3">{title}</td>
              <td className="p-3">{side}</td>

              <td className="p-3 flex items-center ">
                {Array.from({ length: rate }, (_, i) => (
                  <Image key={i} src={Star} width={30} alt="Star" />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* toggle */}
      <div className="flex justify-end w-full pr-5 space-x-3">
        <p>Page</p>
        <button onClick={prevPage} className={`${isNext && "underline"}`}>
          1
        </button>
        <button onClick={nextPage} className={`${!isNext && "underline"}`}>
          2
        </button>
      </div>
    </div>
  );
};

export default Table;
