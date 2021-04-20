import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import Button from '@material-ui/core/Button';
import { uploadPriceFile, uploadDataFile, trainModel, testEndpoint } from "../../api";
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import s from './Prediction.module.scss'

export function Prediction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [profitMargin, setProfitMargin] = useState(0.1);

  const profitMarginChange = (e, newValue) => {
    setProfitMargin(newValue);
  };

  async function makePrediction() {
    setLoading(true);
    const dataKey = sessionStorage.getItem('dataKey');
    const priceKey = sessionStorage.getItem('priceKey');
    console.log(dataKey);
    console.log(priceKey);
    let result;
    try {
      result = await trainModel(dataKey,priceKey,profitMargin);
    } catch(e) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
   
  }

  return (
    <div>
      <Typography>
        Profit Margin:
      </Typography>
      <Slider value = {profitMargin}
      disabled = {loading}
      min={0}
      step={0.01}
      max={1}
      onChange={profitMarginChange}
      valueLabelDisplay="on" aria-label="pretto slider" defaultValue={0.1} />
      <Button variant="contained" color = "primary" disabled={loading} onClick={makePrediction}>Train and predict</Button>
      {error && <p>An error occurred: {error}</p>}
      {loading && (
        <div className = {s.circular}>
          <h3>Training model...</h3>
          <CircularProgress size = {70}/>
          <h4>This may take a couple of minutes</h4>
        </div>
      )
      }
    </div>
  );
}
