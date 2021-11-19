import React, { useState } from "react";
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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
    width: "3.5em",
  },
  calcBtnDouble: {
    width: "7em",
  },
  btnRow: {
    marginBottom: "1%",
  },
  myBtnRow: {
    margin: "2% 0",
  },
}));

//////////////////////////////////////////////////////

/////////////////////////////////////////////////////

const App = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clearAll = () => {
    if (calc === "") {
      return;
    }
    const value = "";
    const result = "";
    setCalc(value);
    setResult(result);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <Button
          onClick={() => updateCalc(i.toString())}
          key={i}
          className={myClasses.calcButton}
        >
          {i}
        </Button>
      );
    }

    return digits;
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
                <div className={myClasses.display}>
                  {result ? <span>({result})</span> : ""}
                  &nbsp;
                  {calc || "0"}
                </div>
              </Grid>
              <Grid container spacing={2} justify="center">
                <div style={{}}>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={myClasses.myBtnRow}
                  >
                    {createDigits()}
                  </ButtonGroup>
                </div>
              </Grid>
              <Grid container spacing={2} justify="center">
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  className={myClasses.btnRow}
                >
                  <Button onClick={clearAll} className={myClasses.calcButton}>
                    C
                  </Button>

                  <Button
                    onClick={() => updateCalc("+")}
                    className={myClasses.calcButton}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => updateCalc("-")}
                    className={myClasses.calcButton}
                  >
                    -
                  </Button>
                  <Button
                    onClick={() => updateCalc("*")}
                    className={myClasses.calcButton}
                  >
                    *
                  </Button>
                  <Button
                    onClick={() => updateCalc("/")}
                    className={myClasses.calcButton}
                  >
                    /
                  </Button>
                  <Button onClick={calculate} className={myClasses.calcButton}>
                    =
                  </Button>
                  <Button onClick={deleteLast} className={myClasses.calcButton}>
                    DEL
                  </Button>
                </ButtonGroup>
              </Grid>
            </Container>
          </div>
        </main>
      </CssBaseline>
    </React.Fragment>
  );
};

export default App;
