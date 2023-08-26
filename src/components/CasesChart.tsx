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
  // Fetch COVID-19 historical data using react-query
  const { data, isLoading } = useQuery(["cases"], async () => {
    const response = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return response;
  });

  // Display loading message while data is being fetched
  if (isLoading) {
    return (
      <h1 className="text-violet-600 mb-4 font-bold text-2xl">Loading...</h1>
    );
  }

  // Prepare data for chart rendering
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

  // Register required Chart.js components for rendering
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
    <div className="portrait:w-full w-10/12 ">
      <h1 className="text-4xl portrait:text-lg portrait:ml-4 font-bold mb-4 text-violet-500">
        Corona Cases Chart:
      </h1>
      <div className="border-2 border-violet-100 w-11/12  m-auto ">
        {/* Render the Line chart using react-chartjs-2 */}
        <Line data={newChartData} className="w-full h-screen" />
      </div>
    </div>
  );
}

// Export the CasesChart component as the default export
export default CasesChart;
