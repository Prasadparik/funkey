import React from "react";

import { Link } from "react-router-dom";

// MUI
import { TextField, Grid, Item, Paper, Button } from "@mui/material";

// Image
import LoginBg from "../assets/imgs/loginBg.jpg";
import { Box } from "@mui/system";
import Login from "./Login";

export default function SignUp() {
  return (
    <>
      <Grid container spacing={2} className="signup-container">
        <Grid item xs={6} md={8} className="login-img-wrap"></Grid>
        <Grid item xs={6} md={4} className="login-wrap">
          <div className="form-wrapper">
            <form>
              <h1 style={{ textAlign: "center" }}>FunKey</h1>
              <br />
              <TextField id="outlined-basic" label="Email" variant="filled" />
              <br />
              <TextField
                style={{ marginTop: "1rem" }}
                id="outlined-basic"
                label="Password"
                variant="filled"
              />
              <br />
              <Button className="Login-Btn" variant="contained">
                Sign Up
              </Button>
              <p style={{ marginTop: "1rem" }}>
                Already have an account? <Link to={"/login"}>Log In</Link>
              </p>
            </form>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
