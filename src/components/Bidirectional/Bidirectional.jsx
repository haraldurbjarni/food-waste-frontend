export function Bidirectional() {
  return (
    <>
  <p>
  Bidirectional LSTMs are an extension of traditional LSTMs that can improve model performance on
   sequence classification problems.
   n problems where all timesteps of the input sequence are available,
  Bidirectional LSTMs train two instead of one LSTMs on the input sequence. 
  The first on the input sequence as-is and the second on a reversed copy of
   the input sequence. This can provide additional context to the network 
   and result in faster and even fuller learning on the problem.
  </p>
  <img alt = "" width="100%" src="bidirectional.png"></img>
  <p>
    This means that this model might give more accurate results than the
    regular LSTM. 
  </p>
  </>
  );
}

      