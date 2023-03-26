import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import { useState } from 'react';

const DatePickerComp = (props) => {
  const [value, setValue] = useState('');

  const changeHandler = (newValue) => {
    setValue(newValue.toString());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: '50%' }} id={props.dpickerId} value={value}>
        <DatePicker label={props.label} onChange={changeHandler} />
      </Box>
    </LocalizationProvider>
  );
};

export default DatePickerComp;
