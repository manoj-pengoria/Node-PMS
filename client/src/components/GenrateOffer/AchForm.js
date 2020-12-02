import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);
const GreenCheckbox = withStyles({
    root: {
        '&$checked': {
            color: '#00acc1',
        },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
const AchForm = ({nextStep}) => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        cardHolderName: '',
        expirationDate: '',
        card: '',
        cvv: '',
        zipCode: '',
    });

    const onChange = (e, type) => {
        const value = {...values};
        value[type] = e;
        setValues(value);
    };
    return <div>
        <Box className={classes.margin}>
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
                  label="A/C Holder Name"
                  value={values.cardHolderName}
                  onChange={e => onChange(e.target.value, "cardHolderName")}
                  name="cardHolderName"
                  id="cardHolderName"
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
                  label="Bank"
                  value={values.card}
                  onChange={e => onChange(e.target.value, "card")}
                  name="card"
                  id="card"
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
                  label="Routing No."
                  value={values.expirationDate}
                  onChange={e => onChange(e.target.value, "expirationDate")}
                  name="expirationDate"
                  id="expirationDate"
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
                    classes: {
                      root: classes.activeInputColor,
                      input: classes.resize,
                      focused: "focused",
                    },
                  }}
                  label="A/C Number"
                  value={values.cvv}
                  onChange={e => onChange(e.target.value, "cvv")}
                  name="cvv"
                  id="cvv"
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
                  label="Zip Code"
                  value={values.zipCode}
                  onChange={e => onChange(e.target.value, "zipCode")}
                  name="zipCode"
                  id="zipCode"
                />  
            </Grid>
            <Grid item xs className={classes.marginTop}>
            <FormControlLabel
                control={<GreenCheckbox name="checkedH" />}
                label="Save For future"
            />
           </Grid>
          </Grid>
        </Box>
        </div>;
};

export default AchForm;
