import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';

const DatePickerComp = (props) => {
  return (
    <Box sx={{ width: '50%' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label={props.label} />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerComp;
