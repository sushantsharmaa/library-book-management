import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getBooks } from './actions/books'
import Books from "./components/Books/Books";
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    },[dispatch]);
    return (
        <Container>
            <AppBar className={classes.appBar} position="static" color="inherit">
                 <Typography className={classes.heading} variant="h2" align="center">TECHNO LIBRARY</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                       {/* <Grid item lr={20} xs={12} sm={7}> */}
                           <Books />
                       {/* </Grid> */}
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};

export default App;