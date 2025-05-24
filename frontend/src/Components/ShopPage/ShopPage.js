import React, { /*useEffect */ useState } from "react";
import { Button, Grid, Tooltip } from "@mui/material";
import Headerbar from "../Headerbar";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Menu, MenuItem } from "@mui/material";
import Uniform from "./../../assets/Uniform.png";
import ProductTile from "./ProductTile/ProductTile";
import { useCart } from "../CheckoutPage/CartContext";

const measure = ["Small", "Medium", "Large"];

const ShopPage = () => {
  const [anchorSize, setAnchorSize] = useState(null);
  const { addToCart } = useCart();
  // const [dynamicLabel, setDynamicLabel] = useState([]);

  const handleClick = (setter) => (event) => {
    setter(event.currentTarget);
  };

  const handleClose = (setter, value) => {
    console.log("Selected:", value);
    setter(null);
  };

  // const handleDynamicLabel = (itemId, labelInput) => {
  //   console.log("handleDynamicLabel", itemId, labelInput);
  //   const labelArr = [...dynamicLabel];
  //   const additionalLabel = {
  //     itemId: itemId,
  //     newLabel: labelInput + " - New",
  //   };

  //   labelArr.push(additionalLabel);

  //   console.log("test", labelArr);

  //   setDynamicLabel(labelArr);
  // };

  // useEffect(() => {
  //   console.log("dynamic label useEffect", dynamicLabel);
  // }, [dynamicLabel]);

  return (
    <>
      <Headerbar />

      <Grid container>
        <Grid size={1}></Grid>
        <Grid size={10}>
          <Grid container size={12}>
            <Grid item size={12} style={{ border: "" }}>
              <h1 style={{ marginTop: "50px" }}>Shop</h1>
            </Grid>
          </Grid>

          {/* Shop Components*/}
          <Grid container sx={{ mt: 4 }}>
            {/* Size Dropdown */}
            <Grid size={12}>
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
                  <b style={{ fontSize: "18 px" }}>Sizes</b>{" "}
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

          {/* Shop Components */}
          <Grid container spacing={2}>
            <ProductTile
              label={"Uniform Boys"}
              imgSrc={Uniform}
              altLabel={"Uniform Boys"}
              price={900}
              // handleDynamicLabel={handleDynamicLabel}
              // newLabel={dynamicLabel}
              itemId={1}
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
              // handleDynamicLabel={handleDynamicLabel}
              // newLabel={dynamicLabel}
              itemId={2}
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
              // handleDynamicLabel={handleDynamicLabel}
              // newLabel={dynamicLabel}
              itemId={3}
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
              // handleDynamicLabel={handleDynamicLabel}
              // newLabel={dynamicLabel}
              itemId={4}
              onAddToCart={() =>
                addToCart({ id: 4, name: "NSTP", price: 500, image: Uniform })
              }
            />
          </Grid>
        </Grid>
        <Grid size={1}></Grid>
      </Grid>
    </>
  );
};

export default ShopPage;
