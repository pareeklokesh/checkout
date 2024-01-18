import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

function Header(){
    return(
        <>
        <Box>
            <AppBar color="default" elevation={0} sx={{position:'relative'}}>
                <Toolbar>
                    <Typography variant="h6" color={"inherit"} noWrap>
                    Company name
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Header;