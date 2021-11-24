import "./Header.css";
import * as React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useState } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import NativeSelectDemoSort from "../NativeSelectSort/NativeSelectSort";
import NativeSelectDemoFilter from "../NativeSelectFilter/NativeSelectFilter";

function Header({ Categories, filterProducts, filterPrices }) {
  const [value, setValue] = useState([0, 1000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    filterPrices(newValue);
  };
  return (
    <nav class="product-filter">
      <h3>products</h3>

      <div class="sort">
        <div class="collection-sort">
          <NativeSelectDemoSort />
        </div>
      </div>
      <div className="collection-sort">
        <div class="collection-sort">
          <NativeSelectDemoFilter
            filterProducts={filterProducts}
            Categories={Categories}
          />
        </div>
      </div>

      <Box sx={{ width: 250 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
        {value[0]} - {value[1]}
      </Box>
    </nav>
  );
}
export default Header;
