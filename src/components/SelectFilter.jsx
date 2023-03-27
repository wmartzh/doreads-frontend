import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Select2 = styled(Select)(({ theme }) => ({
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: '#D6D6D6'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D6D6D6',
      borderWidth: '1px'
    },
    '& .MuiSelect-select': {
      fontSize: '12px',
      borderWidth: '0px',
      color: '#394C73',
      height: '26px',
      borderRadius: '5px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Open Sans, sans-serif',
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(0.2)})`,
      width: '17vh'
    },
    '& .MuiSelect-icon': {
      color: '#394C73'
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
      <InputLabel>
        <SortIcon sx={{ fontSize: '20px', color: '#394C73' }} />
      </InputLabel>
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
