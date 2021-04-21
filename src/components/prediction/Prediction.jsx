import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import Button from "@material-ui/core/Button";
import {
  uploadPriceFile,
  uploadDataFile,
  trainModel,
  testModel,
  testEndpoint,
} from "../../api";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import s from "./Prediction.module.scss";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import cloneDeep from "lodash.clonedeep";
import { createBatcher } from "framer-motion";

// Value er tala í heilum krónum
const formatCurrency = (value) =>
  new Intl.NumberFormat("is-IS", { style: "currency", currency: "ISK" }).format(
    value
  );

export function Prediction() {
  const [loading, setLoading] = useState(false);
  const [loadingTest, setLoadingTest] = useState(false);
  const [error, setError] = useState(null);
  const [profitMargin, setProfitMargin] = useState(0.1);
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(
    JSON.parse(sessionStorage.getItem("modelResult"))?.[0] ?? null
  );
  const [scalePrediction, setScalePrediction] = useState(1.0);

  const profitMarginChange = (e, newValue) => {
    setProfitMargin(newValue);
  };

  const scalePredictionChange = (e, newValue) => {
    setScalePrediction(newValue);
  };

  async function makePrediction() {
    setLoading(true);
    const dataKey = sessionStorage.getItem("dataKey");
    const priceKey = sessionStorage.getItem("priceKey");
    let result;
    try {
      result = await trainModel(dataKey, priceKey, profitMargin);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
    console.log(result);
    //setData(result[0]);
    setOriginalData(result[0]);
    console.log(result[0]);
    console.log(result[1]?.["Total sales profit"]);
    sessionStorage.setItem("modelResult", JSON.stringify(result));
  }

  async function makeFuturePrediction() {
    setLoadingTest(true);
    const dataKey = sessionStorage.getItem("dataKey");
    let result;
    try {
      result = await testModel(dataKey);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoadingTest(false);
    }
    setData(result);
  }
  const transformData = () => {
    let salesSum = 0;
    let wastedSum = 0;
    let missedSum = 0;

    const tableData = Object.keys(originalData).map((key) => {
      const rowData = originalData[key];

      const scaledPredictedValue = rowData["Predicted value"] * scalePrediction;

      const capitalWasted =
        scaledPredictedValue > rowData["Actual value"]
          ? (scaledPredictedValue - rowData["Actual value"]) *
            (rowData["Price"] * (1 - profitMargin))
          : 0;

      const capitalMissedOutOn =
        scaledPredictedValue < rowData["Actual value"]
          ? (rowData["Actual value"] - scaledPredictedValue) *
            (rowData["Price"] * profitMargin)
          : 0;

      const salesProfit =
        scaledPredictedValue < rowData["Actual value"]
          ? scaledPredictedValue * rowData["Price"] * profitMargin
          : rowData["Actual value"] * rowData["Price"] * profitMargin;

      const newRow = {
        name: key,
        data: {
          ...originalData[key],
          "Predicted value": scaledPredictedValue,
          "Capital wasted": capitalWasted,
          "Capital missed out on": capitalMissedOutOn,
          "Sales profit": salesProfit,
        },
      };

      salesSum += newRow.data["Sales profit"];
      wastedSum += newRow.data["Capital wasted"];
      missedSum += newRow.data["Capital missed out on"];

      return newRow;
    });

    return { tableData, missedSum, wastedSum, salesSum };
  };

  function renderNewTable() {
    console.log(data);
    let keys = Object.keys(data);
    console.log("keys", keys);
    return (
      <>
        <Paper>
          <TableContainer className={s.container}>
            <Table className={s.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell align="right">Predicted value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {keys.map((key) => (

                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {key}
                    </TableCell>
                    <TableCell align="right">
                      {data[key]["Predicted value"]}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell align="right">2</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
      );
      }

  function renderTable() {
    const { tableData, missedSum, wastedSum, salesSum } = transformData();
    return (
      <>
        <Paper>
          <TableContainer className={s.container}>
            <Table className={s.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell align="right">Predicted value</TableCell>
                  <TableCell align="right">Actual value</TableCell>
                  <TableCell align="right">Sales profit</TableCell>
                  <TableCell align="right">Capital missed out on</TableCell>
                  <TableCell align="right">Capital wasted</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map(({ name, data }) => (
                  <TableRow key={name}>
                    <TableCell component="th" scope="row">
                      {name}
                    </TableCell>
                    <TableCell align="right">
                      {formatCurrency(data["Price"])}
                    </TableCell>
                    <TableCell align="right">
                      {Math.round(data["Predicted value"])}
                    </TableCell>
                    <TableCell align="right">{data["Actual value"]}</TableCell>
                    <TableCell align="right">
                      {formatCurrency(Math.round(data["Sales profit"]))}
                    </TableCell>
                    <TableCell align="right">
                      {formatCurrency(
                        Math.round(data["Capital missed out on"])
                      )}{" "}
                    </TableCell>
                    <TableCell align="right">
                      {formatCurrency(Math.round(data["Capital wasted"]))}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <div className={s.totals}>
          <h3>Total Sales profit: {formatCurrency(Math.round(salesSum))}</h3>
          <h3>
            Total Capital missed out on: {formatCurrency(Math.round(missedSum))}{" "}
          </h3>
          <h3>Total Capital wasted: {formatCurrency(Math.round(wastedSum))}</h3>
        </div>
        <p>
          Now you can scale all of the models prediction values by a constant
          factor and see how that affects the variables. You can also change the
          profit margin above.
        </p>
        <Typography>Scaling factor:</Typography>
        <Slider
          value={scalePrediction}
          min={0.5}
          step={0.01}
          max={2}
          onChange={scalePredictionChange}
          valueLabelDisplay="on"
          aria-label="pretto slider"
          defaultValue={1}
        />
      </>
    );
  }

  return (
    <div>
      <Typography>Profit Margin:</Typography>
      <Slider
        value={profitMargin}
        disabled={loading}
        min={0}
        step={0.01}
        max={1}
        onChange={profitMarginChange}
        valueLabelDisplay="on"
        aria-label="pretto slider"
        defaultValue={0.1}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={loading || data}
        onClick={makePrediction}
      >
        Train and predict
      </Button>
      {error && <p>An error occurred: {error}</p>}
      {loading && (
        <div className={s.circular}>
          <h3>Training model...</h3>
          <CircularProgress size={70} />
          <h4>This may take a couple of minutes</h4>
        </div>
      )}
      {originalData && renderTable()}
      {originalData && (
        <>
          <p>You can also predict the next week of sales</p>
          <Button
            variant="contained"
            color="primary"
            disabled={loadingTest || data}
            onClick={makeFuturePrediction}
          >
            Predict next week
          </Button>
        </>
      )}
      {loadingTest && (
        <div className={s.circular}>
          <h3>Predicting the Futre</h3>
          <CircularProgress size={70} />
          <h4>This will only take a few seconds</h4>
        </div>
      )}
      {data && renderNewTable()}
    </div>
  );
}
