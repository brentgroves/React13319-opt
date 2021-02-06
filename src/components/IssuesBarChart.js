import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const TABLE_LIST = [
  { name: "Tool Life", plt6: 24, plt8: 24,plt9: 13 },
  { name: "Tool Machining Time", plt6: 13, plt8: 22,plt9: 34 },
];

export default class IssuesBarChart extends Component {
  state = {
    list: [...TABLE_LIST]
  };
  render() {
    const { list } = this.state;
    return (
      <BarChart
        width={530}
        height={250}
        data={list}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="plt6" fill="#faa702" />
        <Bar dataKey="plt8" fill="#8884d8" />
        <Bar dataKey="plt9" fill="#82ca9d" />
      </BarChart>
    );
  }
}
