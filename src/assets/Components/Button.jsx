import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" style={{marginTop:"50px",display:'flex',justifyContent:'center'}}>
      <Button variant="contained">Main Call To Action</Button>
      <Button variant="outlined">Secondary Action</Button>
    </Stack>
  );
}
