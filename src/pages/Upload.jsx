import { File } from "../components/file/File.jsx";
import { NextPage } from "../components/nextPage/NextPage.jsx";
import { PreviousPage } from "../components/previousPage/PreviousPage";
import AnimatedPage from "../components/animatedPage";
import { Link } from "react-router-dom";

const API_URL = "http://127.0.0.1:5000/";

export function Upload() {
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
        If you dont have any files to use here is an example file you can use: <Link to = "example_perday_sales.csv" target="_blank" download>example_perday_sales.csv</Link> and upload it.
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
        If you are using the perday sales example file you will have to use this one along with it: <Link to = "example_prices.csv" target="_blank" download>example_prices.csv</Link>. Dowload this and upload it.
      </p>
      <img src="second_file.PNG" />
      <File type={"prices"} />
      <PreviousPage href = {"/index"}/>
      <NextPage href={"/dataOverview"} />
    </AnimatedPage>
  );
}
