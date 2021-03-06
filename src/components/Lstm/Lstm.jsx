export function Lstm() {
  return (
    <>
  <p>
    Long Short-Term Memory (LSTM) networks are a type of recurrent neural network capable of
    learning order dependence in sequence prediction problems. A common LSTM
    unit is composed of a cell, an input gate, an output gate and a forget
    gate. The cell remembers values over arbitrary time intervals and the
    three gates regulate the flow of information into and out of the cell.
  </p>
  <img alt = "" width="100%" src="lstm.png"></img>
  <p>
    This makes the LSTM architecture suitible for this task since the units
    can recognize patterns for within the sequence of sales of the products
    between days and therefore make a prediction on how much will be sold in
    the future.
  </p>
  </>
  );
}

      