import { File } from "../components/file/File.jsx";
import { NextPage } from "../components/nextPage/NextPage.jsx";
import { PreviousPage } from "../components/previousPage/PreviousPage";
import AnimatedPage from "../components/animatedPage";
import { Link } from "react-router-dom";
import {CSVLink, CSVDownload} from 'react-csv';
import Papa from 'papaparse';
import React, { useEffect, useRef, useState } from 'react';

export function Upload() {

 // const [perdayData, setPerdayData] = useState(null);
 // const [priceData, setPriceData] = useState(null);
//
//
 // const getData = async (filename) => {
 //   const data = Papa.parse(await fetchCsv(filename));
 //   return data;
 // };
 // 
 // const fetchCsv = async (filename) => {
 //   const response = await fetch(`files/${filename}`);
 //   const reader = response.body.getReader();
 //   const result = await reader.read();
 //   const decoder = new TextDecoder('utf-8');
 //   const csv = decoder.decode(result.value);
 //   return csv;
 // };
//
 // useEffect(() => {
 //   let isMounted = true;
 //   const getDat = async () => {
 //   const perDay = await getData('exapmle_perday_sales.csv');
 //   const price = await getData('exapmle_prices.csv');
 //   console.log('perday', perDay.data);
 //   if (isMounted) {
 //     setPerdayData(perDay.data);
 //     setPriceData(price.data);
 //     }
 //   } 
 //   getDat();
 //   return () => {isMounted = false};
 // });
  return (
    <AnimatedPage>
      <h3>Uploading the data</h3>
      <p>
        Here you can upload your data, as mentioned earlier, it has to be a .csv
        file and in a specific format.
      </p>
      <h4>The first file</h4>
      <p>
        The first file is the product sales where the top row denotes the
        product and the first column is the date. The entries in the table
        denote the number of products sold for each day for each product.
      </p>
      <p>
        If you dont have any files to use here is an example file you can use: <a href = 'files/exapmle_perday_sales.csv' downlaod>example_perday_sales.csv</a> and upload it.
      </p>   
      <img src="first_file.PNG" />
      <File type={"sales"} />
      <h4>The second file</h4>
      <p>
        The second file the the price list of the products the first column
        denotes the product name, and the second, the price in ISK. Note that
        the products column has to match excatly the one of the perday sales column 
        above.
      </p>
      <p>
        If you are using the perday sales example file you will have to use this one along with it: <a href = 'files/exapmle_prices.csv' donwlaod> example_prices.csv</a>. Dowload this and upload it.
      </p>
      <img src="second_file.PNG" />
      <File type={"prices"} />
      <PreviousPage href = {"/index"}/>
      <NextPage href={"/dataOverview"} />
    </AnimatedPage>
  );}

  //exapmle_perday_sales
  //exapmle_perday_sales