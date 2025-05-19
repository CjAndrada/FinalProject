import React, { useState } from "react";
import { Button, Grid, Tooltip } from "@mui/material";
import Headerbar from "../Headerbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem } from "@mui/material";
import Uniform from "./../../assets/Uniform.png";

const measure = ["Small", "Medium", "Large"];

const ShopPage = () => {
  const [anchorSize, setAnchorSize] = useState(null);

  const handleClick = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter, value) => {
    console.log("Selected:", value);
    setter(null);
  };

  return (
    <>
      <Headerbar />
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={11}>
          <h1 style={{ marginTop: "50px", marginLeft: "30px" }}>Shop</h1>
          <div
            style={{
              fontSize: "25px",
              padding: "5px",
              textAlign: "center",
              lineHeight: "40px",
            }}
          ></div>
        </Grid>
      </Grid>
      {/* Dropdown Buttons Row */}
      <Grid
        container
        spacing={8}
        justifyContent="flex-start"
        sx={{ mt: 4, pl: 4, p: 3 }}
      >
        {/* Size Dropdown */}
        <Grid item>
          <Button
            style={{
              backgroundColor: "white",
              fontSize: "15px",
              color: "black",
              textAlign: "center",
            }}
            variant="contained"
            onClick={handleClick(setAnchorSize)}
            sx={{ textTransform: "none", boxShadow: "none" }}
          >
            <Tooltip title="Choose Sizes">
              <b style={{ fontSize: "18 px" }}>Sizes</b> <ArrowDropDownIcon />
            </Tooltip>
          </Button>
          <Menu
            anchorEl={anchorSize}
            open={Boolean(anchorSize)}
            onClose={() => setAnchorSize(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {measure.map((item) => (
              <MenuItem
                key={item}
                onClick={() => handleClose(setAnchorSize, item)}
              >
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      {/* button add to cart */}
      <Grid container spacing={2}>
        <Grid
          size={3}
          style={{
            border: "1px solid",
            textAlign: "center",
          }}
        >
          <b>Uniform Boys</b>
          <img
            style={{
              marginTop: "3rem",
              width: "100%",
              objectFit: "fill",
            }}
            alt="Uniform img"
            src={Uniform}
          />
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                backgroundColor: "#00bf63",
                fontSize: "12px",
                color: "black",
              }}
              variant="contained"
            >
              <ShoppingCartIcon />
              <b>Add to Cart</b>
            </Button>
          </div>
        </Grid>
        <Grid size={3} style={{ border: "1px solid", textAlign: "center" }}>
          <b>Uniform Girls</b>
          <img
            style={{
              marginTop: "3rem",
              width: "100%",
              objectFit: "fill",
            }}
            alt="Uniform img"
            src={Uniform}
          />
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                backgroundColor: "#00bf63",
                fontSize: "12px",
                color: "black",
              }}
              variant="contained"
            >
              <ShoppingCartIcon />
              <b>Add to Cart</b>
            </Button>
          </div>
        </Grid>
        <Grid size={3} style={{ border: "1px solid", textAlign: "center" }}>
          <b>PE Uniform</b>
          <img
            style={{
              marginTop: "3rem",
              width: "100%",
              objectFit: "fill",
            }}
            alt="Uniform img"
            src={Uniform}
          />
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                backgroundColor: "#00bf63",
                fontSize: "12px",
                color: "black",
              }}
              variant="contained"
            >
              <ShoppingCartIcon />
              <b>Add to Cart</b>
            </Button>
          </div>
        </Grid>
        <Grid size={3} style={{ border: "1px solid", textAlign: "center" }}>
          <b>NSTP</b>
          <img
            style={{
              marginTop: "3rem",
              width: "100%",
              objectFit: "fill",
            }}
            alt="Uniform img"
            src={Uniform}
          />
          <div style={{ textAlign: "center" }}>
            <Button
              style={{
                backgroundColor: "#00bf63",
                fontSize: "12px",
                color: "black",
              }}
              variant="contained"
            >
              <ShoppingCartIcon />
              <b>Add to Cart</b>
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
