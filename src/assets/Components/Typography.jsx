import * as React from 'react';
import Typography from '@mui/material/Typography';

const h1style={
  fontSize:"48px",
  display:"flex",
  justifyContent:"center",
  marginTop:"30px",
  fontweight:"300"
}
const paragraphStyles = {
  fontSize: '1.2rem',
  lineHeight: 1.5,
  margin: '0 auto',
  maxWidth: '30%',
  textAlign: 'center',
  '@media (max-width: 600px)': {
    fontSize: '1rem',
    maxWidth: '90%',
    textAlign: 'left',
  },
};

export default function Types() {
    return (
        <>
        <Typography variant="h1" gutterBottom style={h1style}>
          Album Layout
        </Typography>
        <Typography variant="body1" gutterBottom style={paragraphStyles}>
         Something short and leading about the collection  below—its contents, the creator, etc.Make it short and sweet, but not too short so folks don't simply skip over it entirely.
        </Typography>
        </>
    );
}
