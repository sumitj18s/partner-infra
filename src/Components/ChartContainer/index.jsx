import React from 'react';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer, PieChart, Pie, Cell,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import getAverageScore from '../../fn/calculation';
import Title from '../../Title';

function BarChartContainer({ data, columnFilter, columnAggregate }) {
  const output = getAverageScore(data, columnFilter, columnAggregate);

  return (
    <React.Fragment>
      <Title>Scores by country</Title>
      <ResponsiveContainer width={1000} height="80%">
        <BarChart width={1000} height={250} data={output}>
          <XAxis dataKey="uniqueColumn" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average" fill="#556CD6" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

function PieChartContainer({ data, columnFilter, columnAggregate }) {
  const output = getAverageScore(data, columnFilter, columnAggregate);
  const COLORS = ['#556CD6', '#00C49F'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <React.Fragment>
      <Title>Scores by gender</Title>
      <ResponsiveContainer width="80%" height={160}>
        <PieChart>
          <Tooltip />
          <Pie
            nameKey="uniqueColumn"
            labelLine={false}
            data={output}
            dataKey="average"
            label={renderCustomizedLabel}
          >
            {output.map((entry, index) => (
              <Cell
                key={`cell-${entry}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend dataKey="uniqueColumn" />
        </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}

export { BarChartContainer, PieChartContainer };
