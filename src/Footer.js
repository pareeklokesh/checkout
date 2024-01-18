import { Link, Typography } from "@mui/material";
import React from "react";

function Footer(){
    return(
        <>
        <Typography variant="body2" color="text.secondary" align="center">
        Copyright © <Link color="inherit" href="#">Your Website</Link> {' '}
        {new Date().getFullYear()}{'.'}
        </Typography>
        </>
    )
}

export default Footer;
