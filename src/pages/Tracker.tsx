import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import React from "react";
import FormSelectField from "../components/form-select-field";
import FormTextField from "../components/form-text-field";
import Typography from "@mui/material/Typography";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import FormButtonAdd from "../components/form-button-add";
import FormTable from "../components/form-table";

const Tracker = () => {
    function createData(
        // take labels as param, some kind of loop through here
        id: number,
        expense: string,
        amount: number,
        type: string,
        date: Date,
    ) {
        return { id, expense, amount, type, date };
    }

    const expenses = [
        createData(1, "Game", 100, "entertainment", new Date("2022-01-01 00:00:00")),
        createData(2, "Lunch", 200, "food-and-drink", new Date("2022-02-02 00:00:00")),
    ];

    const selectOptions = {
        "entertainment": "Entertainment",
        "food-and-drink": "Food & Drink",
        "other": "Other"
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    margin: 4
                }}>
                Tracker
            </Typography>

            <FormControl
                sx={{
                    margin: 4,
                    display: "inline-flex"
                }}>
                <Grid container spacing={1}>
                    <Grid
                        xs={4}
                        sx={{ padding: 1 }}>
                        <FormLabel>Expense Amount</FormLabel>
                        <FormTextField adornment={"$"} errorMsg={"Enter a valid amount"} />
                    </Grid>

                    <Grid
                        xs={4}
                        sx={{ padding: 1 }}>
                        <FormLabel>Expense Type</FormLabel>
                        <FormSelectField arr={selectOptions} defaultText={"Select an expense type"} />
                    </Grid>

                    <Grid
                        xs={4}
                        sx={{ padding: 5 }}>
                        <FormButtonAdd label={"Add Expense"} />
                    </Grid>

                    <Grid
                        xs={12}
                        sx={{ padding: 1 }}>
                        <FormTable headers ={["ID", "Expense", "Amount ($)", "Type", "Date"]} items={expenses} />
                    </Grid>
                </Grid>
            </FormControl>
        </Box >
    );
}

export default Tracker;
