import { File } from "../components/file/File.jsx";
import { NextPage } from "../components/nextPage/NextPage.jsx";
const API_URL = "http://127.0.0.1:5000/";

export function Upload() {
  return (
    <>
      <h3>Uploading the data</h3>
      <p>
        Here you can upload your data, as mentioned earlier, it has to be a .csv
        file and in a specific format.
      </p>
      <h4>The first file</h4>
      <p>
        The first file is the product sales where the top row denotes the
        product and the first column is the date. The entries in the table
        denote the number of products sold for each day for each product. See
        example:
      </p>
      <img src = 'first_file.PNG'/>
      <File type = {'sales'}/>
      <h4>The second file</h4>
      <p>
        The second file the the price list of the products the first column denotes
        the product name, and the second, the price in ISK. See example:
      </p>
      <img src = 'second_file.PNG'/>
      <File type = {'prices'}/>
      <NextPage href = {'/model'}/>
    </>
  );
}
