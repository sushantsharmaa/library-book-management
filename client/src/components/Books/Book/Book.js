import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import useStyles from './styles';

const Book = ({ book }) => {
    const classes = useStyles();
    return (    
          <Card className={classes.card}>
               <CardMedia  className={classes.media} image={book.thumbnailUrl} />
               <div className={classes.overlay}>
                    <Typography variant="h2">{book.title}</Typography>
                    <Typography variant="h3">{book.authors[0]}</Typography>
               </div>
          </Card>
    );
}

export default Book;