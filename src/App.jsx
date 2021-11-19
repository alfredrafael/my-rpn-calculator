import React, { useState, useEffect } from "react";
import {
  Box,
  AppBar,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Button,
  ButtonGroup,
  TextField,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./app.css";

const useStyles = makeStyles((theme) => ({
  myLogo: {
    maxWidth: "5em",
  },
  myAppBar: {
    background: "#040182",
  },
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  display: {
    background: "#d3d3d3",
    width: "75%",
    textAlign: "center",
  },
  calcButton: {
    width: "4em",
  },
  activeBtn: {
    background: "#040182",
    color: "white",
    width: "4em",
  },
  resultBtn: {
    width: "fit-content",
  },
}));

const allOperations = [
  {
    name: "plus",
    sign: "+",
    className: "",
  },
  {
    name: "minus",
    sign: "-",
    className: "",
  },
  {
    name: "division",
    sign: "/",
    className: "",
  },
  {
    name: "multiplication",
    sign: "*",
    className: "",
  },
];

//////////////////////////////////////////////////////

/////////////////////////////////////////////////////

const App = () => {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [operations, setOperations] = useState();
  const [result, setResult] = useState(0);

  const handleSubmit = () => {
    if (operations === "+") {
      setResult(parseInt(valueA) + parseInt(valueB));
    }
    if (operations === "-") {
      setResult(parseInt(valueA) - parseInt(valueB));
    }
    if (operations === "*") {
      setResult(parseInt(valueA) * parseInt(valueB));
    }
    if (operations === "/") {
      setResult(parseInt(valueA) / parseInt(valueB));
    }
  };

  const clearField = () => {
    setValueA(0);
    setValueB(0);
    setResult(0);
  };

  const myClasses = useStyles();

  return (
    <React.Fragment>
      <CssBaseline>
        <AppBar position="relative" className={myClasses.myAppBar}>
          <Toolbar>
            <Box
              component="img"
              className={myClasses.myLogo}
              src={
                "https://rmrdetailing.com/wp-content/uploads/2021/10/AR-logo-white.png"
              }
            />
            <Typography variant="h6">&nbsp;RPN Calculator</Typography>
          </Toolbar>
        </AppBar>
        <main className={myClasses.container}>
          <div>
            <Container maxWidth="sm">
              <Typography
                variant="h4"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                RPM Calculator
              </Typography>
              <Grid container spacing={2} justify="center">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <Input
                    text
                    placeholder="Enter Value A"
                    value={valueA}
                    onChange={(e) => setValueA(e.target.value)}
                    inputProps={{ "aria-label": "description" }}
                  />
                  <br />
                  <Input
                    placeholder="Enter Value B"
                    value={valueB}
                    onChange={(e) => setValueB(e.target.value)}
                    inputProps={{ "aria-label": "description" }}
                  />
                  <br />
                  Choose Operation
                  <br />
                  <br />
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={myClasses.btnRow}
                  >
                    <Button
                      onClick={clearField}
                      className={myClasses.calcButton}
                    >
                      CLEAR
                    </Button>

                    {allOperations.map((operation, i) => (
                      <Button
                        onClick={() => setOperations(operation.sign)}
                        className={
                          operations == operation.sign
                            ? myClasses.activeBtn
                            : myClasses.calcButton
                        }
                        id={operation.name}
                      >
                        {operation.sign}
                      </Button>
                    ))}
                  </ButtonGroup>
                  <br />
                  <Button
                    variant="contained"
                    onClick={handleSubmit}
                    className={myClasses.resultBtn}
                  >
                    Get Result
                  </Button>
                  <br />
                  <Input
                    value={result}
                    inputProps={{ "aria-label": "description" }}
                  />
                </div>
              </Grid>
            </Container>
          </div>
        </main>
      </CssBaseline>
    </React.Fragment>
  );
};

export default App;
