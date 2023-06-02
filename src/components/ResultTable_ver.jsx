import React, { useState, useEffect } from "react";
import { getServerData } from "../helper/helper";
import { LineChart } from "./Charts/LineChart";
import { BarGraph } from "./Charts/BarGraph";

export default function ResultTable_ver() {
  const [data, setData] = useState([]);
  const [showChart, setShowChart] = useState(false);
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
  useEffect(() => {
    // if (data.length > 0) return;
    getServerData("http://localhost:5000/api/result", (res) => {
      setData(res);
      console.log(res);
    });
    setShowChart(true);
  }, []);
  return (
    <div>
      {/* <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody> */}
          {!data ?? <div>No Data Found </div>}
          {/* {data.map((v, i) => (
            <tr className="table-body" key={i}>
              <td>{v?.username || ""}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0}</td>
              <td>{v?.achived || ""}</td>
            </tr>
          ))} */}
          {console.log('data',data)}
          {
            showChart && <>
                <div><BarGraph result = {data} /></div>
            </>
          }
        {/* </tbody>
      </table> */}
    </div>
  );
}
