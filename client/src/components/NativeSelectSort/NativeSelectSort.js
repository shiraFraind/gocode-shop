import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

export default function NativeSelectDemoSort() {
  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort by:
        </InputLabel>
        <NativeSelect
          defaultValue={10}
          inputProps={{
            name: "Sort",
            id: "uncontrolled-native",
          }}
        >
          <option value={10}>All options</option>
          <option value={20}>Featured</option>
          <option value={20}>Best Selling</option>
          <option value={20}>Alphabetically, A-Z</option>
          <option value={20}>Alphabetically, Z-A</option>
          <option value={20}>Price, low to high</option>
          <option value={20}>Price, high to low</option>
          <option value={20}>Date, new to old</option>
          <option value={30}>Date, old to new</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
