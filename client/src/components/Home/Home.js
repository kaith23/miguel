import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button } from "@material-ui/core";
import Form from "../Form/Form";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import DataTable from "../DataTable/DataTable";
import Navbar from "../Navbar/Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
  },
  buttonReports: {
    margin: theme.spacing(1),
    float: "right",
  },
  form: {
    marginTop: 10,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <div className={classes.form}>
            <Form setCurrentId={setCurrentId} currentId={currentId} />
          </div>
        </Grid>

        <Grid item xs={12} sm={8}>
          <div>
            <Button
              className={classes.buttonReports}
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => {
                console.info("I'm a button.");
              }}
              href="/reports"
            >
              View Reports
            </Button>
            <br></br>
          </div>
          <div className={classes.root}>
            <DataTable posts={posts} setCurrentId={setCurrentId} />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
