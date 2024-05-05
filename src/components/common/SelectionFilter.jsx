import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SelectionFilter(props) {

  const {options,label,placeholder,value,setValue}=props
 
  return (
    <Autocomplete
      multiple
      sx={{padding:'10px'}}
      id="fixed-tags-demo"
      value={value}
      onChange={(event, newValue) => {
        setValue([...newValue]);
      }}
      options={options}
      getOptionLabel={(option) => option.label.toString()}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip
             key={option.label.toString()+index}
            label={option.label.toString()}
            {...getTagProps({ index })}
          />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label={label} placeholder={placeholder} />
      )}
    />
  );
}


