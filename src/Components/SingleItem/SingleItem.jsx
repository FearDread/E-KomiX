import React from "react";
import {
   makeStyles,
   Card,
   CardMedia,
   Grid,
   Typography,
   CardActionArea,
   CardContent,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 500,
      [theme.breakpoints.up("sm")]: {
         maxHeight: 400,
      },
   },
   media: {
      height: 140,
      [theme.breakpoints.up("sm")]: {
         height: 200,
      },
   },
}));

const SingleItem = ({ item }) => {
   console.log('single item call : ', item);
   const classes = useStyles();
   const { _id, name, images, price, quantity, description, info } = item;
   const navigate = useNavigate();
   return (
      <Grid item xs={10} sm={6} lg={3}>
         <Card className={classes.root}>
            <CardActionArea onClick={() => navigate(`/products/${_id}`)}>
               <CardMedia
                  className={classes.media}
                  src={images && images[0] ? images[0].url : ""}
                  title={name}
                  component="img"
                  loading="lazy"
               />
               <CardContent>
                  <Typography gutterBottom variant="body1" component="h4">
                     {name}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     ${price}
                  </Typography>
                  <Typography
                     variant="body2"
                     color="textSecondary"
                     component="p"
                  >
                     {description}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>
      </Grid>
   );
};

export default SingleItem;
