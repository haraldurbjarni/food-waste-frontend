import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";
import { Button } from "@material-ui/core";
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
      let result;
      if (type === "sales") {
        result = await uploadDataFile(file);
        sessionStorage.setItem("dataKey", result?.key);
      } else {
        result = await uploadPriceFile(file);
        sessionStorage.setItem("priceKey", result?.key);
      }
      console.log("storage key", sessionStorage.getItem("dataKey"));
    } catch (e) {
      console.log(e);
      setError("Couldn't upload file");
    } finally {
      setLoading(false);
      if (!error) {
        setUploaded(true);
      }
    }
  }

  return (
    <div>
      <Button color="primary">
        <input type="file" onChange={fileChange} />
      </Button>
      <Button color="primary" disabled={loading} onClick={uploadFile}>
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
