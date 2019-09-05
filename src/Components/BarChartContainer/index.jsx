import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  ScatterChart, Scatter, Line, Area, 
} from 'recharts';
import {
  PieChart, Pie, Sector, Cell,
} from 'recharts';
import React from 'react';
import getAverageScore from '../../fn/calculation';
import result from './data'

function BarChartContainer(){
  const data = getAverageScore(result, 'gender', 'score')
  return (
  <BarChart width={730} height={250} data={data}>
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <XAxis dataKey="uniqueColumn" />
  <YAxis />
  <Tooltip />
  <Legend />
  {/* <Bar dataKey="uniqueColumn" fill="#8884d8" /> */}
  <Bar dataKey="avg" fill="#82ca9d" />
</BarChart>)
}

function ComposedChartContainer(){
  const data = getAverageScore(result, 'gender', 'score')

  return (
    <PieChart width={400} height={400}>
      <Tooltip/>
        <Pie data={data} dataKey="avg"  fill="#8884d8" />
      </PieChart>
  )
}
export {BarChartContainer, ComposedChartContainer}