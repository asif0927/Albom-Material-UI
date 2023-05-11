import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicGrid() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop:'90px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card >
      <CardMedia  style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"left"}}>
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}} >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small"onClick={handleOpen} >Edit</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={12}sm={6} md={4}>
          <Item>
          <Card>
      <CardMedia   style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"left"}}>
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}} >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen}>Edit</Button>
      </CardActions>
    </Card>
    </Item>
    </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>

          <Card>
      <CardMedia  style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"left"}}>
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}} >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small"onClick={handleOpen} >Edit</Button>
      </CardActions>
    </Card>
   </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card>
      <CardMedia  style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"left"}}>
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary"  style={{textAlign:"left"}} >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen} >Edit</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card >
      <CardMedia  style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
       />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"left"}}>
          Heading
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"left"}}  >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small"onClick={handleOpen}  >Edit</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Item>
          <Card>
      <CardMedia   style={{paddingTop:"70px"}}
        component="img"
        alt="green iguana"
        image="https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{display:'flex',justifyContent:'flex-start'}}  >
          Heading
        </Typography>
        <Typography variant="body2" color="text.primary" style={{textAlign:"left"}}  >
        This is a media card. You can use this section to describe the content.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
        <Button size="small" onClick={handleOpen} >Edit</Button>
      </CardActions>
    </Card>
          </Item>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>




    </Box>
  );
}