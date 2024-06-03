import { Box } from '@mui/material';
import React, { FC } from 'react';
import "./Home.css";
import { Grid } from '@mui/material';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import { CardActions } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home: FC = () => {
    return <Box>
        <Box className={"background-image"}></Box>
        <Box className={'title-logo-container'}>
            <img src="../../asset/logo.png" alt="SpendWise Logo" className={'title-logo'}/>
        </Box>
        <Grid container spacing={{xs: 2, md: 3}}>
            <Grid item sm={6} md={4}>
            <Card className={"card"}>
                <img
                src="/asset/categories-logo.png"
                alt="Categories"
                className={"card-image"}
                />
                <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    className={"section-title"}
                >
                    Categories
                </Typography>
                </CardContent>
                <CardActions>
                <Button component={Link} to="/categories" variant="contained">
                    <Typography>Go to</Typography>
                </Button>
                </CardActions>
            </Card>
            </Grid>

            <Grid item sm={6} md={4}>
            <Card className={"card"}>
                <img
                src="/asset/receipt-logo.png"
                alt="Receipts"
                className={"card-image"}
                />
                <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    className={"section-title"}
                >
                    Receipts
                </Typography>
                </CardContent>
                <CardActions>
                <Button component={Link} to="/upload-receipt" variant="contained">
                    <Typography>Go to</Typography>
                </Button>
                </CardActions>
            </Card>
            </Grid>

            <Grid item sm={6} md={4}>
            <Card className={"card"}>
                <img
                src="/asset/statistics-logo.png"
                alt="Statistics"
                className={"card-image"}
                />
                <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                    className={"section-title"}
                >
                    Statistics
                </Typography>
                </CardContent>
                <CardActions>
                <Button component={Link} to="/Statistics" variant="contained">
                    <Typography>Go to</Typography>
                </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
    </Box>
}