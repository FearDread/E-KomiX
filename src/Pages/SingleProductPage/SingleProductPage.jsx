import React, { useEffect } from "react";
import { SingleProduct } from "../../Components";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CircularProgress, makeStyles, Grid } from "@material-ui/core";
import { getSingleItem } from "../../Redux/slices/appSlice";

const useStyles = makeStyles((theme) => ({
   container: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(5),
      padding: theme.spacing(10),
   },
}));

const SingleProductPage = () => {
   const { id } = useParams();
   const { pending } = useSelector((state) => state.app);
   const classes = useStyles();

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getSingleItem(id));
   }, [id, dispatch]);
   return (
      <>
         {!pending ? (
            <SingleProduct />
         ) : (
            <Grid className={classes.container} container>
               <CircularProgress size="5rem" />
            </Grid>
         )}
      </>
   );
};

export default SingleProductPage;
