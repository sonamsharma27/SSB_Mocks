import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

export function BarGraph({ result }) {
  let labels = [];
  let scores = [];
  result?.forEach((result) => {
    labels.push(result.achived + "," + result.createAt.slice(0, 10));
    scores.push(result.points);
  });
  const data = {
    labels,
    datasets: [
      {
        label: "Verbal",
        data: scores,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ],
  };

  return <Bar options={options} data={data} />
}
