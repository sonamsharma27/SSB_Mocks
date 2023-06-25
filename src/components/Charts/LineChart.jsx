import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Your Progress so far",
    },
  },
};

//   const obj = {
//     achived: "Passed",
//     attempts: 2,
//     createAt: "2023-04-24T09:03:49.993Z",
//     points: 3,
//     result: [1, 2, 3],
//     username: "ash",
//     __v: 0,
//     _id: "644645f53f0750a7864dac62",
//   };

export function LineChart({ result }) {
  let labels = [];
  let scores = [];
  console.log('length',result?.length);
  result?.forEach((result) => {
    labels.push(result.achived + "," + result.createAt.slice(0, 10));
    scores.push(result.points);
  });
  console.log(labels,scores);
  let nonVerbalScores = scores;
  const data = {
    labels,
    datasets: [
      {
        label: "Verbal",
        data: scores,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Non-verbal",
        data: nonVerbalScores,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
        <Line options={options} data={data} />
  );
}
