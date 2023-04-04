import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');
  const handleChange = async (event) => {
    await setValue(event.target.value);
  };
  return (
    <Box sx={{ width: props.width }}>
      <FormControl fullWidth variant="filled">
        <InputLabel>{props.label}</InputLabel>
        <Select id={props.selectId} value={value} onChange={handleChange}>
          {props.options &&
            props.options.map((el, i) => {
              return (
                <MenuItem value={el} key={i}>
                  {el}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </Box>
  );
}
