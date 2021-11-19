import React from "react";
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
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  myAppBar: {
    background: "#040182",
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
    marginBottom: "1%",
  },
}));

//////////////////////////////////////////////////////

const createDigits = () => {
  const digits = [];

  for (let i = 1; i < 10; i++) {
    digits.push(
      <Button className="calcButton" key={i}>
        {i}
      </Button>
    );
  }

  return digits;
};

/////////////////////////////////////////////////////

const App = () => {
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
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                RPM Calculator
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              ></Typography>
              <Grid container spacing={2} justify="center">
                <div style={{}}>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={myClasses.btnRow}
                  >
                    {createDigits()}
                  </ButtonGroup>
                  <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                    className={myClasses.btnRow}
                  ></ButtonGroup>
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
