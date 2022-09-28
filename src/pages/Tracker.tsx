import { FormControl, InputAdornment, InputLabel, MenuItem, NativeSelect, TextField } from "@mui/material";
import React from "react";

export default function Tracker() {
    const [amount, setAmount] = React.useState("");
    const [type, setType] = React.useState("");
    const [amountError, setAmountError] = React.useState(false);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        !parseFloat(amount) ? setAmountError(true) : setAmountError(false);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    return (
        <div>
            <h1>
                Tracker
            </h1>
            <FormControl>
                <InputLabel>Expense Type</InputLabel>
                <NativeSelect
                    value={type}
                    onChange={handleTypeChange}
                >
                    <option value={"entertainment"}>Entertainment</option>
                    <option value={"food-drink"}>Food &#38; Drink</option>
                    <option value={"other"}>Other</option>
                </NativeSelect>
                <TextField
                    label="Amount Spent"
                    error={amountError}
                    helperText={amountError ? "Enter a valid number" : ""}
                    value={amount}
                    onChange={handleAmountChange}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
            </FormControl>

        </div >
    );
}
