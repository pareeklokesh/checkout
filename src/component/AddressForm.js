import { Checkbox, FormControl, FormControlLabel, FormLabel, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function AddressForm() {
    return(
        <>
        <Typography variant="h6" gutterBottom>
        Shipping address
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField required 
                id="firstName" 
                name="firstName" 
                label="First Name" 
                fullWidth 
                autoComplete="given-name" 
                variant="standard" />

                
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required
                id="lastName"
                name="lastName"
                label="Last Name"
                fullWidth
                autoComplete="given-name"
                variant="standard" />
            </Grid>
            <Grid item sm={12}>
                <TextField
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="shipping address-line1"
                variant="standard" required />
            </Grid>
            <Grid item sm={12}>
                <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="shipping address-line2"
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="city"
                required
                name="city"
                label="City"
                autoComplete="city"
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                autoComplete="state"
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="zipcode"
                required
                name="zipcode"
                label="Zip/Postal code"
                autoComplete="zipcode"
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                id="country"
                required
                name="country"
                label="Country"
                autoComplete="country"
                fullWidth
                variant="standard" />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                label="Use this address for payment details" />
            </Grid>
        </Grid>
        </>
    )
}

export default AddressForm;