import { NextPage } from "../components/nextPage/NextPage";
import {PreviousPage} from "../components/previousPage/PreviousPage";
import AnimatedPage from "../components/animatedPage";
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export function DataOverview(){
  const perdayTotals = JSON.parse(sessionStorage.getItem('perdayTotals'));
  const productTotals = JSON.parse(sessionStorage.getItem('productTotals'));
  console.log(perdayTotals)
  return (
    <AnimatedPage>
      <h3>Data Overview</h3>
      <p>
        This little page is dedicated to some data overview, or visualization, just
        to get a little feel of it.
      </p>
      {perdayTotals 
      ? <>
        <h4>Units sold each day</h4>
        <div style = {{"width":"100", "display":"flex", "justifyContent":"center"}} >
        <LineChart
          width={800}
          height={500}
          data={perdayTotals}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis angle = '15' dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line name = "Units sold" type="monotone" dataKey="data" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
      </>
      : <p>No data uploaded</p>
      }
      {productTotals &&
        <>

        <h4>Total number of sales for top 10 products</h4>
        <div style = {{"width":"100", "display":"flex", "justifyContent":"center"}} >
        <BarChart
        width={800}
        height={500}
        data={productTotals}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="name" name = "Units sold" fill="#82ca9d" />
      </BarChart>
      </div>
      </>

      }
      <PreviousPage href = {"/upload"}/>
      <NextPage href={"/model"} />
    </AnimatedPage>
    
  );
}
