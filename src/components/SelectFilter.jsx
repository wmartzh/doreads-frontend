import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Select2 = styled(Select)(({ theme }) => ({
    '& .MuiSelect-select': {
      fontSize: '14px',
      color: '#394C73',
      height: '24px',
      borderRadius: '5px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Open Sans, sans-serif',
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
      width: '170px'
    }
  }));

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    console.log(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <FormControl>
      <InputLabel sx={{ fontSize: '14px' }}>Filter</InputLabel>
      <Select2 label="Filter" id={props.selectId} value={value} onChange={handleChange}>
        {props.options &&
          props.options.map((el, i) => {
            return (
              <MenuItem value={el} key={i}>
                {el}
              </MenuItem>
            );
          })}
      </Select2>
    </FormControl>
  );
}
