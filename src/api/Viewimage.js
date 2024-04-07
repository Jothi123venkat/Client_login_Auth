import React, { useEffect } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { AppBar, Button, Dialog, Divider, FormHelperText, FormLabel, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Viewimage = ({ viewImage, open, handleClose }) => {
  // useEffect(() => {
  //   componentDidMount()
  // }, []);
  // const componentDidMount = () => {
  //   var val = document.getElementsByTagName("iframe")
  //   debugger
  //   // val.getElementsByTagName("img").style.width = 100;
  // }
  // window.onload = function() {
  //   let frameElement = document.getElementsByTagName("iframe");
  //   let doc = frameElement.contentDocument;
  //   doc.body.innerHTML = doc.body.innerHTML + '<h1>Hai</h1>';
  // }
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: 'relative', backgroundColor: '#293b7b', boxShadow: '0px 0px 5px gainsboro' }}>
        <Toolbar>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            View Document
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <img src={viewImage} width="100%" height="100%" className='viewImage'/> */}
      <iframe className='text-center' src={viewImage} width="100%" height="100%" />

    </Dialog>
  )
}

export default Viewimage