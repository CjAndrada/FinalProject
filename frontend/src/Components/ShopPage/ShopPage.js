import React, { useState } from "react";
import { Button, Grid, Tooltip, Menu, MenuItem } from "@mui/material";
import Headerbar from "../Headerbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Uniform from "./../../assets/Uniform.png";
import ProductTile from "./ProductTile/ProductTile";
import { useCart } from "../CheckoutPage/CartContext";

const measure = ["Small", "Medium", "Large"];


const ShopPage = () => {
  const [anchorSize, setAnchorSize] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useCart();

  const handleClick = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter, value) => {
    setter(null);
    if (value) setSelectedSize(value);
    console.log("Selected size:", value);
  };

  return (
    <>
      <Headerbar />

      <Grid container>
        <Grid item xs={1}></Grid>

        <Grid item xs={10}>
          <Grid container>
            <Grid item xs={12}>
              <h1 style={{ marginTop: "50px" }}>Shop</h1>
            </Grid>
          </Grid>

          {/* Size Dropdown */}
          <Grid container sx={{ mt: 4, mb: 2 }}>
            <Grid item xs={12}>
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
                  <b style={{ fontSize: "18px" }}>
                    Sizes {selectedSize ? `: ${selectedSize}` : ""}
                  </b>{" "}
                  <ArrowDropDownIcon />
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

          {/* Product Tiles */}
          <Grid container spacing={2}>
            <ProductTile
              label={"Uniform Boys"}
              imgSrc={Uniform}
              altLabel={"Uniform Boys"}
              price={900}
              itemId={1}
              stock={25} //stock count nya
              onAddToCart={() =>
                addToCart({
                  id: 1,
                  name: "Uniform Boys",
                  price: 900,
                  image: Uniform,
                })
              }
            />
            <ProductTile
              label={"Uniform Girls"}
              imgSrc={Uniform}
              altLabel={"Uniform Girls"}
              price={900}
              itemId={2}
              stock={30}
              onAddToCart={() =>
                addToCart({
                  id: 2,
                  name: "Uniform Girls",
                  price: 900,
                  image: Uniform,
                })
              }
            />
            <ProductTile
              label={"PE Uniform"}
              imgSrc={Uniform}
              altLabel={"PE Uniform"}
              price={850}
              itemId={3}
              stock={0}
              onAddToCart={() =>
                addToCart({
                  id: 3,
                  name: "PE Uniform",
                  price: 850,
                  image: Uniform,
                })
              }
            />
            <ProductTile
              label={"NSTP"}
              imgSrc={Uniform}
              altLabel={"NSTP"}
              price={500}
              itemId={4}
              stock={20}
              onAddToCart={() =>
                addToCart({
                  id: 4,
                  name: "NSTP",
                  price: 500,
                  image: Uniform,
                })
              }
            />
          </Grid>
        </Grid>

        <Grid item xs={1}></Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
