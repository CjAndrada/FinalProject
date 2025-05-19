import React from "react";
import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Student from "./../../assets/Student.png";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={0} style={{}}>
        <Grid size={1} style={{}} />
        <Grid size={4} style={{}}>
          <h1 style={{ marginTop: "50px", fontWeight: "bold" }}> Home </h1>
          <div
            style={{
              fontSize: "25px",
              padding: "15px",
              textAlign: "center",
              lineHeight: "40px",
            }}
          >
            <p style={{}}>
              Our UniPTC shop provides affordable and complete sets of uniforms,
              PE wear, and NSTP clothing for all students
            </p>
          </div>
          <div
            style={{
              fontSize: "25px",
              padding: "15px",
              width: "500px",
              textAlign: "center",
            }}
          >
            <Link to={"/Shop"}>
              <Button
                style={{
                  backgroundColor: "#00bf63",
                  fontSize: "18px",
                  color: "black",
                }}
                variant="contained"
              >
                SHOP NOW
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid size={6} style={{}}>
          <div
            style={{
              fontSize: "25px",
              padding: "0px",
              width: "500px",
              textAlign: "center",
              lineHeight: "40px",
            }}
          >
            {/* need official image */}
            <img
              style={{
                marginTop: "3rem",
                marginLeft: "3rem",
                width: "100%",
                objectFit: "fill",
              }}
              alt="UniPTC img"
              src={Student}
            />
          </div>
        </Grid>
        <Grid size={1} style={{}}></Grid>
      </Grid>
    </>
  );
};

export default HomePage;
