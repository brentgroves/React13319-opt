import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React, { PureComponent } from "react";

const data = [
  {
    name: "Jan",
    plt6: 40,
    plt8: 24,
    plt9: 24,
  },
  {
    name: "Feb",
    plt6: 30,
    plt8: 13,
    plt9: 22,
  },
  {
    name: "Mar",
    plt6: 20,
    plt8: 98,
    plt9: 22,
  },
  {
    name: "Apr",
    plt6: 27,
    plt8: 39,
    plt9: 20,
  },
  {
    name: "May",
    plt6: 18,
    plt8: 48,
    plt9: 21,
  },
  {
    name: "Jun",
    plt6: 23,
    plt8: 38,
    plt9: 25,
  },
];

export default class IssuesLineChart extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/xqjtetw0/";
  render() {
    return (
      <LineChart
        width={530}
        height={250}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="plt6" stroke="#faa702" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="plt8" stroke="#8884d8" />
        <Line type="monotone" dataKey="plt9" stroke="#82ca9d" />
      </LineChart>
    );
  }
}
//#fac002
