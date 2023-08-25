import React from "react";
import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function CasesChart() {
  const { data, isLoading } = useQuery(["cases"], async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response;
  });

  if (isLoading) {
    return (
      <h1 className="text-pink-600 mb-4 font-bold text-2xl">Loading...</h1>
    );
  }
  const newChartData = {
    labels: Object.keys(data?.data.cases),
    datasets: [
      {
        label: "Cases",
        data: Object.values(data?.data.cases),
        fill: false,
        borderColor: "#8a68cf",
        tension: 0.2,
      },
    ],
  };

  ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
  );

  return (
    <div className="w-full border-teal-700 border-4">
      <h1 className="text-4xl font-bold mb-4 text-violet-500">
        Corona Cases Chart
      </h1>
      <div className="border-2 border-violet-100 w-11/12  m-auto ">
        <Line data={newChartData} className="w-full h-screen" />
      </div>
    </div>
  );
}

export default CasesChart;
