import React, { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const Productchart = ({ dataProduct }) => {
  return (
    <ResponsiveContainer
      width='100%'
      height='80%'>
      <BarChart data={dataProduct}>
        <XAxis
          dataKey='name'
          stroke='#8884d8'
          tick={false}
        />
        <YAxis label={{ value: "stock", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <CartesianGrid
          stroke='#ccc'
          strokeDasharray='5 5'
        />
        <Bar
          dataKey='stock'
          fill='#8884d8'
          barSize={20}>
          <LabelList
            dataKey='name'
            angle='270'
            fill='#fff'
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Productchart;
