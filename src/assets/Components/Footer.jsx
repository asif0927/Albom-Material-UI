import * as React from 'react';
import Typography from '@mui/material/Typography';
const linkstyle={
  color:"rgba(0,0,0,.6)",
  marginLeft:"10px",
  alignItems:"center",
  display:"flex",
  justifyContent:"center",
  marginTop:"-7px"
}
function Footer() {
  return (
    <>
    <Typography variant="h6" gutterBottom style={{textAlign:"center",marginTop:"40px",fontSize:"23px"}}>
        Footer
     </Typography>
     <Typography variant="subtitle2" gutterBottom style={{textAlign:"center",marginTop:"10px",color:"rgba(0,0,0,.6)"}} >
     Something here to give the footer a purpose!
      </Typography>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginBottom:"50px",alignItems:"center"}}>
      <Typography variant="subtitle2" gutterBottom style={{color:"rgba(0,0,0,.6)"}} >
       Copyright ©
      </Typography>
      <a href='#'style={linkstyle} >Your Website</a>
      </div>
    </>
  )
}

export default Footer
