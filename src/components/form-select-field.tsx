import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";

const FormSelectField = ({ arr, defaultText }) => {
    const [value, setValue] = useState("");

    const handleSelectValueChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <Box>
            <Select
                value={value}
                onChange={handleSelectValueChange}
                displayEmpty
                fullWidth={true}
                sx={{
                    minWidth: 250
                }}
            >
                <MenuItem disabled value="">
                    <em style={{ opacity: 0.5 }}>{defaultText}</em>
                </MenuItem>
                {Object.entries(arr).map(([key, val]) => {
                    return (
                        <MenuItem value={key}>{val.toString()}</MenuItem>
                    );
                })}
            </Select>
        </Box >
    );
}

export default FormSelectField;
