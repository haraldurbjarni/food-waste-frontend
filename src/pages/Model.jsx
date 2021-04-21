import { NextPage } from "../components/nextPage/NextPage";
import AnimatedPage from "../components/animatedPage";

export function Model() {
  return (
    <AnimatedPage>
      <h3>The Model</h3>
      <p>
        The model that is used for this task is a stacked two layer LSTM, each
        comprising of 50 units. Long Short-Term Memory (LSTM) networks are a
        type of recurrent neural network capable of learning order dependence in
        sequence prediction problems. A common LSTM unit is composed of a cell,
        an input gate, an output gate and a forget gate. The cell remembers
        values over arbitrary time intervals and the three gates regulate the
        flow of information into and out of the cell.
      </p>
      <img width="100%" src="lstm.png"></img>
      <p>
        This makes the LSTM architecture suitible for this task since the units
        can recognize patterns for within the sequence of sales of the products
        between days and therefore make a prediction on how much will be sold in
        the future.
      </p>

      <NextPage href={"/train"} />
    </AnimatedPage>
  );
}
