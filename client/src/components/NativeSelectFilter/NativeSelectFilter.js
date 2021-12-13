import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemo(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Filter by:
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "filter",
            id: "uncontrolled-native",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            props.filterProducts(e.target.value);
          }}
        >
          <option value={10}>All the products</option>
          {props.Categories.map((category) => (
            <option value={category}>{category}</option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
