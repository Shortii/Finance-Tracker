import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import React from "react";

const FormButtonAdd = ({ label }) => {
    const handleButtonClick = (event) => {
    }

    return (
        <Box>
            <Button
                variant="contained"
                color="info"
                startIcon={<AddIcon />}
                fullWidth={true}
                sx={{
                    minWidth: 160,
                }}>
                {label}
            </Button>
        </Box >
    );
}

export default FormButtonAdd;
