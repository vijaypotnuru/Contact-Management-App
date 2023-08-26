import React from "react";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CasesDashBoard() {
  const { data, isLoading } = useQuery(["wordWideData"], async () => {
    const response = await axios.get("https://disease.sh/v3/covid-19/all");
    return response;
  });

  const wordWideData = data?.data;
  console.log("wordWideData", wordWideData);

  if (isLoading) {
    return (
      <h1 className="text-violet-600 mb-4 font-bold text-2xl">Loading...</h1>
    );
  }

  const keyValuePairs = Object.entries(wordWideData);

  console.log("keyValuePairs", keyValuePairs);

  return (
    <div className=" overflow-x-auto w-10/12 portrait:w-11/12 border-violet-600 border-2 rounded-lg p-0">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-t-lg border-red-200 border-4">
        <caption className="p-5 text-lg font-bold text-left   text-white bg-violet-400 rounded-t-lg border-green-200 border-4">
          Covid Data Dashboard
          <p className="mt-1 text-sm font-normal">
            Covid Data Dashboard with World-Wide Data
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase  bg-indigo-300 text-white">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              Category
            </th>
            <th scope="col" className="px-6 py-3 ">
              Stats
            </th>
          </tr>
        </thead>
        <tbody>
          {keyValuePairs.map((keyValuePair: any) => {
            return (
              <tr className="bg-white bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium uppercase text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {keyValuePair[0]}
                </th>
                <td className="px-6 py-4">{keyValuePair[1]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CasesDashBoard;
