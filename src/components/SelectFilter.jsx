import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Select from '@mui/material/Select';
import { FormControl, Typography } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import InputLabel from '@mui/material/InputLabel';

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
      width: '100px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Open Sans, sans-serif',
      fontSize: '10px'
    },
    '& .MuiOutlinedInput-input': {
      width: '70px',
      fontSize: '13px'
    },
    '& .MuiSelect-root': {},
    '& .label': {
      fontSize: '13px'
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
    <FormControl size="small">
      <InputLabel>
        <Box sx={{ display: 'flex', margin: 'auto' }}>
          <SvgIcon sx={{ height: '20px' }} color="#394c73">
            {props.icon ? props.icon : <SortIcon />}
          </SvgIcon>
          <Typography sx={{ fontSize: '14px' }} color="#394C73">
            {props.label ? props.label : 'Sort by'}
          </Typography>
        </Box>
      </InputLabel>
      <Select2 label="xxxxxxxxxx" id={props.selectId} value={value} onChange={handleChange}>
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
