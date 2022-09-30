import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const FormTextField = ({ adornment, errorMsg}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleFieldValueChange = (event) => {
        setValue(event.target.value);

        // input validation for number
        const isValueValid = isNaN(Number(value));
        setError(isValueValid);
    }

    return (
        <Box>
            <TextField
                error={error}
                helperText={error ? errorMsg : ""}
                value={value}
                onChange={handleFieldValueChange}
                fullWidth={true}
                InputProps={{
                    startAdornment: <InputAdornment position="start">{adornment}</InputAdornment>,
                }}
                sx={{
                    minWidth: 100
                }}
            />
        </Box >
    );
}

export default FormTextField;
