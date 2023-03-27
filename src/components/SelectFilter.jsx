import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

export default function BasicSelect(props) {
  const [value, setValue] = useState('');

  const Select2 = styled(Select)({
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: '#D6D6D6'
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D6D6D6',
      borderWidth: '1px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '1px',
      borderColor: '#D6D6D6',
      width: '90px',
      height: '55px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '10px'
    },
    '& .MuiOutlinedInput-input': {
      padding: '10',
      width: '60px',
      fontSize: '14px'
    },
    '& .MuiSelect-root': {
      padding: '10px 26px 10px 12px'
    },
    '& .MuiSelect-icon': {
      color: '#394C73'
    }
  });

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    console.log(selectedValue);
    props.onChange(selectedValue);
  };

  return (
    <FormControl>
      <InputLabel>
        <SortIcon sx={{ fontSize: '13px', color: '#394C73' }} />
        <span style={{ fontSize: '13px' }}>Sort by</span>
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
