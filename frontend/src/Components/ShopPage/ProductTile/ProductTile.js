import React, { useState } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductTile = ({
  label,
  imgSrc,
  altLabel,
  price,
  itemId,
  onAddToCart,
  stock = 0, // add stock with default 0
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteButton = (value) => {
    setIsFavorite(value);
  };

  const isOutOfStock = stock <= 0;

  return (
    <Grid size={3}>
      <div
        style={{
          border: "2px solid",
          borderRadius: "10px",
          textAlign: "center",
          padding: "10px",
        }}
      >
        <div style={{ textAlign: "right" }}>
          {isFavorite ? (
            <IconButton onClick={() => handleFavoriteButton(false)}>
              <FavoriteIcon style={{ color: "red" }} />
            </IconButton>
          ) : (
            <IconButton onClick={() => handleFavoriteButton(true)}>
              <FavoriteBorderIcon />
            </IconButton>
          )}
        </div>
        <img
          style={{
            width: "100%",
            objectFit: "cover",
            maxHeight: "200px",
          }}
          alt={altLabel}
          src={imgSrc}
        />
        <div>
          <strong>{label}</strong>
        </div>
        <div>
          Php {price} | <StarIcon style={{ color: "yellow" }} />
          5.0
        </div>
        <div>
          {isOutOfStock ? (
            <Typography color="error" variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Out of Stock
            </Typography>
          ) : (
            <AddToCartButton
              label={"Add to Cart"}
              onClick={onAddToCart}
              style={{ border: "1px solid" }}
              disabled={isOutOfStock}
            />
          )}
        </div>
      </div>
    </Grid>
  );
};

export default ProductTile;
