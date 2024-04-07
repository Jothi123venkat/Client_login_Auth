import React, { useState } from "react";
import {
  Box,
  Container,
  FormLabel,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import app, { auth, facebookAuthProvider, googleAuthProvider } from "./Authentication/Firebase";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import DialogContentText from "@mui/material/DialogContentText";
import Enterotp from "./Authentication/Enterotp";
import { IoClose } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Homepage = () => {
  const [open, setOpen] = React.useState(false);
  const[number,setnumber]=useState()

  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xs");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  const handleGoogleRegister = async () => {
    try {
      const result = await auth.signInWithPopup(googleAuthProvider);
      // Prepare the request payload for the API call
      const req = {
        uniqueId: "DMFB5JOW+IQ9Imok9jeQVA==",
        prodid: "",
      };

      // Make the API call with the prepared request payload
      const response = await axios.post(
        "https://waxmk3iw8f.execute-api.ap-south-1.amazonaws.com/profcourier/save",
        req
      );

      // Handle the response from the API call correctly
      const userData = {
        roleId: response.data.roleId,
        uniqueId: response.data.uniqueId,
        tenantId: response.data.tenantId,
        token: response.data.token,
        name: response.data.name,
        role: response.data.role,
      };

      // Store userData in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(userData));
      alert("Login success");
      navigate("/signUp");
    } catch (error) {
      alert("Google Login Error: " + error.message);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await auth.signInWithPopup(provider);

      // Prepare the request payload for the API call
      const req = {
        uniqueId: "DMFB5JOW+IQ9Imok9jeQVA==",
        prodid: "",
      };

      // Make the API call with the prepared request payload
      const response = await axios.post(
        "https://zbigum5uo6.execute-api.ap-south-1.amazonaws.com/devauth/login",
        req
      );

      // Handle the response from the API call correctly
      const userData = {
        roleId: response.data.roleId,
        uniqueId: response.data.uniqueId,
        tenantId: response.data.tenantId,
        token: response.data.token,
        name: response.data.name,
        role: response.data.role,
      };

      // Store userData in sessionStorage
      sessionStorage.setItem("userData", JSON.stringify(userData));

      alert("Facebook login success");
      navigate("/signUp");
    } catch (error) {
      alert("Facebook Login Error: " + error.message);
    }
  };

  return (
    // <div className="login-page" >

    //       <div className="title">
    //         <img src="/images/varuvai-logo.webp" alt="img" className="varuvaai"/>
    //       </div>
    //       <h3
    //         className="project-head"
    //         // style={{ color: "white", textAlign: "center", fontWeight: "700" }}
    //       >
    //         GROW YOUR BUSINESS
    //       </h3>
    //       <form onSubmit={handleSubmit(handleLogin)} className="form-div">
    //         <div className="fields">
    //           <FormLabel sx={{ color: "#fff" }}>Mobile Number</FormLabel>
    //           <Controller
    //             name="phonenumber"
    //             control={control}
    //             rules={{
    //               required: "Enter Valid Mobile Number",
    //               minLength: {
    //                 value: 10,
    //                 message: "Enter Valid Mobile Number",
    //               },
    //               maxLength: {
    //                 value: 10,
    //                 message: "Enter Valid Mobile Number",
    //               },
    //             }}
    //             render={({ field }) => (
    //               <TextField
    //                 {...field}
    //                 placeholder="Enter a MobileNumber"
    //                 size="small"
    //                 type="email"
    //                 error={Boolean(errors?.phonenumber?.message)}
    //                 sx={{
    //                   background: "white",
    //                   borderRadius: "50px",
    //                   border: "none",
    //                 }}
    //                 InputProps={{ style: { borderRadius: "50px" } }}
    //               />
    //             )}
    //           />
    //           {errors?.phonenumber?.message && (
    //             <span className="aler">{errors?.phonenumber?.message}</span>
    //           )}
    //         </div>

    //         <div className="fields">
    //           <FormLabel sx={{ color: "#fff" }}>Password</FormLabel>
    //           <Controller
    //             name="password"
    //             control={control}
    //             rules={{
    //               required: "Enter Password",
    //               minLength: {
    //                 value: 3,
    //                 message: "Password must be at least 3 characters",
    //               },
    //             }}
    //             render={({ field }) => (
    //               <>
    //                 <FormControl fullWidth variant="outlined">
    //                   <OutlinedInput
    //                     {...field}
    //                     id="outlined-adornment-password"
    //                     type={showPassword ? "text" : "password"}
    //                     size="small"
    //                     sx={{
    //                       background: "white",
    //                       borderRadius: "50px",
    //                       border: "none",
    //                     }}
    //                     InputProps={{ style: { borderRadius: "50px" } }}
    //                     endAdornment={
    //                       <InputAdornment position="end">
    //                         <IconButton
    //                           aria-label="toggle password visibility"
    //                           onClick={handleClickShowPassword}
    //                           onMouseDown={handleMouseDownPassword}
    //                           edge="end"
    //                         >
    //                           {showPassword ? (
    //                             <VisibilityOff />
    //                           ) : (
    //                             <Visibility />
    //                           )}
    //                         </IconButton>
    //                       </InputAdornment>
    //                     }
    //                    placeholder="Enter a Password"
    //                     error={Boolean(errors?.password?.message)}
    //                   />
    //                 </FormControl>
    //                 {errors?.password?.message && (
    //                   <span className="alert">{errors?.password?.message}</span>
    //                 )}
    //               </>
    //             )}
    //           />
    //         </div>
    //         <div className="forgetPassword">
    //           <p>Forgot Password?</p>
    //         </div>
    //         <div className="actions">
    //           <Button
    //             className="button-submit"
    //             type="submit"
    //             variant="outlined"
    //             size="small"
    //           >
    //             Sign In
    //           </Button>
    //         </div>
    //         <div className="sign-up">
    //           <p >
    //             Don't have an account?
    //              {/* <Link to="/signUp">Sign up</Link> */}
    //              <span  onClick={handleClickOpen}> Sign Up</span>
    //           </p>
    //         </div>
    //         <div className="or-with">
    //           <p>Or With</p>
    //         </div>
    //       </form>
    //       <div className="form-divs">
    //         <Button
    //           variant="outlined"
    //           className="button-submit"
    //           onClick={handleGoogleRegister}
    //           size="small"
    //           startIcon={
    //             <FcGoogle style={{ fontSize: "22px", marginRight: "10px" }} />
    //           }
    //         >
    //           Google
    //         </Button>
    //         <Button
    //           variant="outlined"
    //           className="button-submit"
    //           onClick={signInWithFacebook}
    //           startIcon={
    //             <FaFacebookF
    //               style={{ fontSize: "22px", marginRight: "10px" }}
    //             />
    //           }
    //         >
    //           Facebook
    //         </Button>
    //       </div>
    // </div>

    <div className="client_login">
      <div className="client_content">
        <div className="content">
          <div className="product_image">
            <img
              src="../../../images/product_image.jpeg"
              alt="img"
              style={{ width: "100px", borderRadius: "50%" }}
            />
          </div>

          <div className="fieldsinput">
            <FormLabel sx={{ color: "#fff" }}>Mobile Number</FormLabel>
            <Controller
              name="phonenumber"
              control={control}
              rules={{
                required: "Enter Valid Mobile Number",
                minLength: {
                  value: 10,
                  message: "Enter Valid Mobile Number",
                },
                maxLength: {
                  value: 10,
                  message: "Enter Valid Mobile Number",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Enter a MobileNumber"
                  size="small"
                  type="number"
                  value={number}
                  onChange={(e)=>setnumber(e.target.value)}
                  error={Boolean(errors?.phonenumber?.message)}
                  sx={{
                    background: "white",
                    borderRadius: "50px",
                    border: "none",
                  }}
                  InputProps={{ style: { borderRadius: "50px" } }}
                />
              )}
            />
            {errors?.phonenumber?.message && (
              <span className="aler">{errors?.phonenumber?.message}</span>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
         { number && number.length === 10 && (
             <button onClick={handleClickOpen} className="starbucks-button"  >
             Sent OTP
           </button>
         )}
          </div>
          <div className="d-flex justify-content-center mt-1 mb-1  ">
          Or Sign In With
          </div>

     <div className="d-flex mt-3 justify-content-around mb-4 ">
     <div >


<button onClick={handleGoogleRegister} className="starbucks-button">
  <span>
    <FcGoogle style={{ fontSize: "22px", marginRight: "10px" }} />
    Google
  </span>
</button>
</div>

<div>
<button onClick={signInWithFacebook} className="starbucks-button">
  <span>
    <FaFacebookF
     style={{ fontSize: "22px", marginRight: "10px" }}
    />
    Facebook
  </span>
</button>
</div>
     </div>
        </div>

        <div>
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            className="modalcontent"
          >

      
       
            <DialogContent className="modalinsidecontent" >
           <div className="d-flex justify-content-end ">
           <CloseIcon onClick={handleClose}/>
           </div>
              <Enterotp  number={number}/>
            </DialogContent>
            <DialogActions className="modalcontent">
            
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
