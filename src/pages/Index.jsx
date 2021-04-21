import { NextPage } from "../components/nextPage/NextPage";
import AnimatedPage from "../components/animatedPage";

export function Index() {
  return (
    <AnimatedPage>
      <h3>Introduction</h3>
      <p>
        Hi there! This is little website is a project in the course{" "}
        <a href="https://ugla.hi.is/kennsluskra/index.php?tab=nam&chapter=namskeid&id=71079820220&kennsluar=2021">
          REI603M - The AI lifecycle{" "}
        </a>
        at the University of Iceland This website provides a framework where
        food companies can upload their files of their sales numbers and product
        prices. A Deep Learning Neural Network is then fed with the data and the
        Network is trained on this data and predicts the last week of the total
        amount of sales for each product. The files are of course expected to be
        on a paticular format which will be mentioned a bit later. The actual
        sales are then compared with the predicted sales and various variables
        decided and analyzed. The user will then have the option of scaling the
        prediction by a constant factor to see how the variables change. The
        variables will also be explained later on. The user will also have the
        option of predicting the sale numbers of the next week outside of the
        data timeframe. React JS was used for the frontend of this application
        and flask for the backend. The whole project as well as the ipython
        notebook for the model selection can be found <a href="https://github.com/haraldurbjarni">here</a>.
      </p>
      <NextPage href={"/upload"} />
    </AnimatedPage>
  );
}
