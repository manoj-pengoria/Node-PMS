import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import PersonIcon from "@material-ui/icons/Person";
import Button from "components/CustomButtons/Button.js";

const styles = {
    tittleColor: {
        backgroundColor: "#696969",
        display: "flex",
        alighItem: "center",
        justifyContent: "center",
        paddingTop: ".7%",
        height: "2rem",
      },
      tittleTextColor: {
        color: "#ffffff",
        fontSize: "120%",
        fontStyle: "Helvetica, Arial,sans-serif",
      },
    searchGrid: {
        display: 'flex',
        flexDirection: 'row',
    },
    autoFill: {
        width: '100%',
    },
    margin: {
      margin: "1%",
      marginTop: "2%",
    },
    textColor: {
      color: "#595c5c",
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif",
    },
    input: {
      width: "80%",
    },
    cardWidth: {
      width: "100%",
    },
    iconBox: {
      backgroundColor: "#b8fcf9",
    },
    tncBox: {
      height: "40px",
      display: "flex",
      alighItem: "center",
      justifyContent: "center",
      borderColor: "black",
    },
    buttonBox: {
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
      alighItem: "center",
      margin: "2rem"
    },
    buttonStyle: {
      backgroundColor: "#00acc1"
    },
    inputBox: {
      marginTop: "9%",
      color: "#bfbdbd",
    },
    searchBox: {
        marginTop: "2.5%",
        color: "#bfbdbd",
      },
    gridBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    activeInputLableColor: {
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif",
      "&.focused": {
        color: "#00acc1"
      }
    },
    root: {
      width: "30%",
       "&.focused": {
        color: "#00acc1",
        fontSize: "90%",
        fontStyle: "Helvetica, Arial,sans-serif",
      }
    },
    rootSelectInput: {
      width: "80%",
      marginBottom: "10%",
      fontSize: "90%",
      fontStyle: "Helvetica, Arial,sans-serif",
    },
    resize: {
      fontSize: "80%",
      fontStyle: "Helvetica, Arial,sans-serif",
      color: "#696969",
    },
    checkBox: {
    padding: "0px",
    },
    tncBox: {
      backgroundColor: "#fff4cc",
      margin: "1rem",
    },
    fullInput: {
      width: "80%",
       "&.focused": {
        color: "#00acc1",
        fontSize: "90%",
        fontStyle: "Helvetica, Arial,sans-serif",
      }
    },
    halfInput: {
      width: "87%",
       "&.focused": {
        color: "#00acc1",
        fontSize: "90%",
        fontStyle: "Helvetica, Arial,sans-serif",
      }
    },
    quaterInput: {
      width: "73%",
       "&.focused": {
        color: "#00acc1",
        fontSize: "90%",
        fontStyle: "Helvetica, Arial,sans-serif",
      }
    },
    readOnlyInput: {
      backgroundColor: '#f5f5f5',
      fontStyle: 'italic',
    },
  };

  const useStyles = makeStyles(styles);
const ShowOffer = ({nextStep}) => {
    const [values, setValues] = React.useState({
        downPayment: '$451.75',
        monthlyPayment: '9',
        balance: '$175.41',
        APR: '18.8',
    });
    const onChange = () => {
        console.log('hello');
    };
    const acceptOffer = () => {
        console.log('hello');
    }
    const classes = useStyles();
    return <div>
        <Box height={40}>
          <Typography>
          Your Best Available Offer is:
          </Typography>
        </Box>
        <Box className={classes.margin} >
        <Grid container className={classes.margin}>
            <Grid item xs>
            <TextField
                className={classes.fullInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused",
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Down Payment"
                value={values.downPayment}
                onChange={e => onChange(e.target.value, "businessDiscrition")}
                name="businessDiscrition"
                id="businessDiscrition"
              />  
            </Grid>
            <Grid item xs>
            <TextField
                className={classes.fullInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused",
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Monthly EMIs"
                value={values.monthlyPayment}
                onChange={e => onChange(e.target.value, "businessDiscrition")}
                name="businessDiscrition"
                id="businessDiscrition"
              />  
            </Grid>
          </Grid>

        <Grid container className={classes.margin}>
          <Grid item xs>
            <TextField
                className={classes.fullInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused",
                  }
                }}
                InputProps={{
                  readOnly: true,
                  classes: {
                    root: classes.readOnlyInput,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                disabled
                label="Balance"
                value={values.balance}
                onChange={e => onChange(e.target.value, "businessDiscrition")}
                name="businessDiscrition"
                id="businessDiscrition"
              />  
            </Grid>
            <Grid item xs>
            <TextField
                className={classes.fullInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused",
                  }
                }}
                InputProps={{
                  readOnly: true,
                  classes: {
                    root: classes.readOnlyInput,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                disabled
                label="APR(%)"
                value={values.APR}
                onChange={e => onChange(e.target.value, "businessDiscrition")}
                name="businessDiscrition"
                id="businessDiscrition"
              />  
            </Grid>
            </Grid>
          </Box>
          <Grid container className={classes.margin}>
            <Box className={classes.buttonBox}>
              <Button variant="contained" className={classes.buttonStyle} color="#696969" size="large" onClick={() => nextStep()} >
                Accept Offer
              </Button>
            </Box>
          </Grid>
    </div>;
}

export default ShowOffer;
