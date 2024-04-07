import React, { useState } from "react";
import {
  Box,
  Container,
  FormLabel,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useNavigate } from "react-router-dom";
import app, { auth, googleAuthProvider } from "./Authentication/Firebase";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const AdminRegister = ({handleClose}) => {
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
      alert("Login success");
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
    } catch (error) {
      alert("Facebook Login Error: " + error.message);
    }
  };
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "	#008000",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: "	#008000",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 3,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...(ownerState.active && {
      backgroundColor: "#FF0000",
      boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
      backgroundColor: "green",
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: <SettingsIcon />,
      2: <GroupAddIcon />,
      3: <VideoLabelIcon />,
      4: <SettingsIcon />,
      5: <GroupAddIcon />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }

  ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
  };

  const steps = ["Create Your Account", "More About You ", "Register"];

  return (
    <div className="login-page">
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ padding: "2rem" }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div>
            <img
              src="/images/varuvaaistatue.png"
              alt="img"
              className="varuvaai-statue"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <div className="title">
            <img src="/images/varuvai-logo.webp" alt="img" />
          </div>
          <h3
            className="project-head"
            style={{ color: "white", textAlign: "center", fontWeight: "700" }}
          >
            GROW YOUR BUSINESS
          </h3>
          <Stack sx={{ width: "100%" }} spacing={4}>
            <Stepper
              alternativeLabel
              activeStep={1}
              connector={<ColorlibConnector />}
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel
                    StepIconComponent={ColorlibStepIcon}
                    style={{ color: "#fff" }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Stack>
          <form onSubmit={handleSubmit(handleLogin)} className="form-div">
            
            <div className="fields">
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
                    fullWidth
                    placeholder="Enter a MobileNumber"
                    size="small"
                    type="email"
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
            {/* <div className="fields">
              <FormLabel sx={{ color: "#fff" }}>Password</FormLabel>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Enter Password",
                  minLength: {
                    value: 3,
                    message: "Password must be in 3 characters",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    placeholder="Enter a Password"
                    size="small"
                    type="password"
                    error={Boolean(errors?.password?.message)}
                    sx={{
                      background: "white",
                      borderRadius: "50px",
                      border: "none",
                    }}
                    InputProps={{ style: { borderRadius: "50px" } }}
                  />
                )}
              />
              {errors?.password?.message && (
                <span className="aler">{errors?.password?.message}</span>
              )}
            </div>
            <div className="forgetPassword">
              <p>Forgot Password?</p>
            </div> */}
            <div className="actions">
              <Button
                className="button-submit"
                type="submit"
                variant="outlined"
              >
                Sign Up
              </Button>
            </div>
            <div className="sign-up">
              <p>
                Don't have an account? <span onClick={handleClose}>Sign in</span>
              </p>
            </div>
            <div className="or-with">
              <p>Or With</p>
            </div>
          </form>
          <div className="form-divs">
            <Button
              variant="outlined"
              className="button-submit"
              onClick={handleGoogleRegister}
              startIcon={
                <FcGoogle style={{ fontSize: "22px", marginRight: "10px" }} />
              }
            >
              Google
            </Button>
            <Button
              variant="outlined"
              className="button-submit"
              onClick={signInWithFacebook}
              startIcon={
                <FaFacebookF
                  style={{ fontSize: "22px", marginRight: "10px" }}
                />
              }
            >
              Facebook
            </Button>
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
};

export default AdminRegister;
