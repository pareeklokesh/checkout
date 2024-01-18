import { Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function PaymentForm() {
    return(
        <>
        <Typography variant="h6" gutterBottom>
        Payment method
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="nameoncard"
                name="nameoncard"
                label="Name on card"
                autoComplete="Name on card"
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                required
                id="cardnum"
                name="cardnum"
                label="Card number"
                autoComplete="Card Number"
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                required
                fullWidth
                id="expirydate"
                name="expirydate"
                label="Expiry date"
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField 
                required
                fullWidth
                id="cvv"
                name="cvv"
                label="CVV"
                variant="standard" />
            </Grid>
            <Grid item sm={12}>
            <FormControlLabel control={<Checkbox color="secondary" name="credit" value="yes" />}
                label="Remember credit card details for next time" />
            </Grid>
        </Grid>
        </>
    )
}

export default PaymentForm;