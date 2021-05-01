import { NextPage } from "../components/nextPage/NextPage";
import { PreviousPage } from "../components/previousPage/PreviousPage";
import AnimatedPage from "../components/animatedPage";
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState } from "react";
import { ModelContainer } from "../components/modelContainer/ModelContainer";

export function Model() {

  const [menuValue, setMenuValue] = useState('LSTM');
  sessionStorage.setItem('modelType', )

  const handleChange = (e) => {
    setMenuValue(e.target.value);
  };

  return (
    <AnimatedPage>
      <h3>Model Selection</h3>
      <p>Here you can select what type of recurrent network you train your dataset
        on. Select one from the dropdown list and go to the next page when you've chosen
        your model.
      </p>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={menuValue}
          onChange={handleChange}
        >
          <MenuItem value={'LSTM'}>LSTM</MenuItem>
          <MenuItem value={'RNN'}>Vanilla RNN</MenuItem>
          <MenuItem value={'GRU'}>GRU</MenuItem>
          <MenuItem value={'Bidirectional LSTM'}>Bidirectional LSTM</MenuItem>
        </Select>
      </FormControl>
      <ModelContainer type = {menuValue}/>
      <PreviousPage href = {"/dataOverview"}/>
      <NextPage href={"/train"} />
    </AnimatedPage>
  );
}
