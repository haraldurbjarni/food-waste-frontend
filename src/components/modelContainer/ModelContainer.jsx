import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import {Bidirectional} from '../Bidirectional/Bidirectional';
import {Lstm} from '../Lstm/Lstm';
import {Rnn} from '../Rnn/Rnn';
import {Gru} from '../Gru/Gru';

export function ModelContainer({ type }) {
  return (
    <>
    {type === 'LSTM' &&
      <Lstm/>
    }
    {type === 'RNN' &&
      <Rnn/>
    }
    {type === 'GRU' &&
      <Gru/>
    }
    {type === 'Bidirectional LSTM' &&
      <Bidirectional/>
    }
    </>
  );
}
