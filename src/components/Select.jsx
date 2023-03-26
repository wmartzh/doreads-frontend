import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  return (
    <Box sx={{ width: props.width }}>
      <FormControl fullWidth variant="filled">
        <InputLabel>{props.label}</InputLabel>
        <Select>
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
