import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
import DataTable from "../DataTable/DataTable";
import Navbar from "../Navbar/Navbar";

const Pagination = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container>
      <Navbar />
      <br></br>
      
      <DataTable posts={posts} setCurrentId={setCurrentId} />
      <br></br>

      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => {
            console.info("I'm a button.");
          }}
          href="/create"
        >
          Back
        </Button>
      </div>
    </Container>
  );
};

export default Pagination;
