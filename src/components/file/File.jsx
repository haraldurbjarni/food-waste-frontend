import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { Button } from "../button/Button";
import { uploadPriceFile, uploadDataFile, testEndpoint } from "../../api";

export function File({ type }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  async function fileChange(e) {
    setFile(e.target.files[0]);
  }
  async function uploadFile() {
    setLoading(true);
    try {
      console.log("file", file, file.name);
      // const body = new FormData();
      // body.append('file', file, file.name);
      // const requestOptions = {
      //   method: 'POST',
      //   credentials: 'include',
      //   body,
      // };
      // const result = await fetch(url, requestOptions);
      // if (!result.ok) {
      //   throw new Error('result not ok');
      // }
      let result;
      if (type==='sales') {
        result = await uploadDataFile(file);
        sessionStorage.setItem('dataKey', result?.key);
      }
      else {
        result = await uploadPriceFile(file);
        sessionStorage.setItem('priceKey', result?.key);
      }
      console.log(result);

      const testres = await testEndpoint(result?.key);

      console.log('storage key', sessionStorage.getItem('dataKey'));
    } catch (e) {
      console.log(e);
      setError("Couldn't upload file");
    } finally {
      setLoading(false);
      setUploaded(true);
    }
  }

  return (
    <div>
      <input type="file" onChange={fileChange} />
      <Button disabled={loading} onClick={uploadFile}>
        Upload
      </Button>
      {loading && (
        <ReactLoading color={"black"} type={"spin"} c height={80} width={40} />
      )}
      {error && <p>An error occurred: {error}</p>}
      {uploaded && <p>File successfully uploaded!</p>}
    </div>
  );
}
