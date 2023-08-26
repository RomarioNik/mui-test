import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import css from './RadioTheme.module.css';

const RadioTheme = () => {
  const [theme, setTheme] = useState('');

  const handleChange = e => {
    // setTheme(e.target.value);
    console.log(e.target.value);
  };
  return (
    <FormControl>
      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Light"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          value="Light"
          control={<Radio className={css.radio} />}
          label="Light"
        />
        <FormControlLabel value="Dark" control={<Radio />} label="Dark" />
        <FormControlLabel value="Violet" control={<Radio />} label="Violet" />
      </RadioGroup>
    </FormControl>
  );
};
export default RadioTheme;
