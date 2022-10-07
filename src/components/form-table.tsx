import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface ItemType {
    id: number;
    expense: string;
    amount: number;
    type: string;
    date: Date;
}

interface FormTableProps {
    tableName?: string;
    headers: string[];
    items: Array<ItemType>;
}

const FormTable = ({ headers, items } : FormTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((header) => {
                            return (
                                <TableCell>{header}</TableCell>
                            );
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {Object.entries(item).map(([key, val]) => {
                                // revisit below
                                const isDate = typeof val.getMonth === 'function'

                                const formattedValue = isDate ? val.toLocaleString() : val;
                                return (
                                    <TableCell key={key} align="left">{formattedValue}</TableCell>
                                );
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default FormTable;