export function Rnn() {
  return (
    <>
  <p>
  Derived from feedforward neural networks, RNNs can use their internal 
  state (memory) to process variable length sequences of inputs.
  This makes them applicable to tasks such as unsegmented, 
  connected handwriting recognition or speech recognition.
  This network connects the outputs of all neurons to the inputs of all neurons. 
  </p>
  <img alt = "" width="100%" src="rnn.png"></img>
  <p>
    The main problem with the vanilla RNN is the vanishing gradient problem.
    The longer you get in the network, the lower the gradient becomes and thus
    the gradient stops updateing after a fixed amount of update steps. So this network
    my not be optimal for this task.
  </p>
  </>
  );
}

      