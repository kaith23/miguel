import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Navbar from "../Navbar/Navbar";
import { Grid } from "@material-ui/core";
// import { useParams } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
  table: {
    minWidth: 700,
  },
}));

// FOR TABLE OF REPORTS
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(
  name,
  jan,
  feb,
  mar,
  apr,
  may,
  jun,
  jul,
  aug,
  sep,
  oct,
  nov,
  dec
) {
  return { name, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec };
}

const rows = [
  createData("2020", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
  createData("2021", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
];

const Reports = () => {
  //   const { id } = useParams();

  //   const xlocation = id.split("*").slice(0, 1).join(" ");

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid >
        <Card className={classes.root}>
          {/* FOR EACH REGISTERED NUMBER IN A LOCATION */}
          <CardContent>
            <h3>Reports</h3>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <b>Number of Registered users in Manila:</b> &nbsp;
              {/* {xlocation} */}
            </Typography>

            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              <b>Number of Registered users in Cebu:</b> &nbsp;
              {/* {xlocation} */}
            </Typography>
          </CardContent>
          {/* END FOR EACH REGISTERED NUMBER IN A LOCATION */}

          {/* FOR TABLE OF REPORTS */}
          <CardContent>
            <h3>Resources Registered:</h3>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell></StyledTableCell>
                    <StyledTableCell align="right">Jan</StyledTableCell>
                    <StyledTableCell align="right">Feb</StyledTableCell>
                    <StyledTableCell align="right">Mar</StyledTableCell>
                    <StyledTableCell align="right">Apr</StyledTableCell>
                    <StyledTableCell align="right">May</StyledTableCell>
                    <StyledTableCell align="right">Jun</StyledTableCell>
                    <StyledTableCell align="right">Jul</StyledTableCell>
                    <StyledTableCell align="right">Aug</StyledTableCell>
                    <StyledTableCell align="right">Sep</StyledTableCell>
                    <StyledTableCell align="right">Oct</StyledTableCell>
                    <StyledTableCell align="right">Nov</StyledTableCell>
                    <StyledTableCell align="right">Dec</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">{row.jan}</StyledTableCell>
                      <StyledTableCell align="right">{row.feb}</StyledTableCell>
                      <StyledTableCell align="right">{row.mar}</StyledTableCell>
                      <StyledTableCell align="right">{row.apr}</StyledTableCell>
                      <StyledTableCell align="right">{row.may}</StyledTableCell>
                      <StyledTableCell align="right">{row.jun}</StyledTableCell>
                      <StyledTableCell align="right">{row.jul}</StyledTableCell>
                      <StyledTableCell align="right">{row.aug}</StyledTableCell>
                      <StyledTableCell align="right">{row.sep}</StyledTableCell>
                      <StyledTableCell align="right">{row.oct}</StyledTableCell>
                      <StyledTableCell align="right">{row.nov}</StyledTableCell>
                      <StyledTableCell align="right">{row.dec}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
          {/* END FOR TABLE OF REPORTS */}

          <CardActions>
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
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};

export default Reports;
