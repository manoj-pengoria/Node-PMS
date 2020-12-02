import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Box from "@material-ui/core/Box";
import CardForm from "./CardForm";
import AchForm from "./AchForm";
import Radio from '@material-ui/core/Radio';
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";


const GreenRadio = withStyles({
  root: {
      '&$checked': {
          color: '#00acc1',
      },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);


const useStyles = makeStyles(styles);
const MonthlyPayment = ({nextStep}) => {
  const classes = useStyles();
  const [values, setValue] = React.useState({
    paymentAmount: '$175.41',
    noOfPayment: '9',
    paymentStartDate: '10/12/2020',
    paymentLastDate: '20/12/2020',
});
  const [selectedPayment, setSelectedPayment] = React.useState('a');
  const [showCard, setShowCard] = React.useState(true);

  const handlePayment = (event) => {
    if (event.target.value === 'b') {
      setSelectedPayment(event.target.value);
      setShowCard(false)
    }
    if (event.target.value === 'a') {
      setSelectedPayment(event.target.value);
      setShowCard(true);
    }
  };
  const onChange = () => {
      console.log('hello');
  };
    return <div>
          <Box>
          <Typography>
          Monthly Payment Information:
          </Typography>
        </Box>
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
                  label="Payment Amount"
                  value={values.paymentAmount}
                  onChange={e => onChange(e.target.value, "paymentAmount")}
                  name="paymentAmount"
                  id="paymentAmount"
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
                  label="No. Of Payment"
                  value={values.noOfPayment}
                  onChange={e => onChange(e.target.value, "noOfPayment")}
                  name="noOfPayment"
                  id="noOfPayment"
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
                  label="Payment Start Date"
                  value={values.paymentStartDate}
                  onChange={e => onChange(e.target.value, "paymentStartDate")}
                  name="paymentStartDate"
                  id="paymentStartDate"
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
                  label="Payment Last Date"
                  value={values.paymentLastDate}
                  onChange={e => onChange(e.target.value, "paymentLastDate")}
                  name="paymentLastDate"
                  id="paymentLastDate"
                />  
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
        <Box height={40} className={classes.radioBox}>
          <Typography className={classes.textColorRadio}>Down Payment via</Typography>
            <div className={classes.radioBoxRoot}>
              <GreenRadio
              className={classes.checkBox}
              checked={selectedPayment === 'a'}
              onChange={handlePayment}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
         <Typography className={classes.textColorRadio}>Card</Typography>
      </div>
      <div className={classes.radioBoxRoot}>
          <GreenRadio
            checked={selectedPayment === 'b'}
            onChange={handlePayment}
            className={classes.checkBox}
            value="b"
            name="radio-button-demo"
            inputProps={{ 'aria-label': 'B' }}
          />
      <Typography className={classes.textColorRadio}>ACH</Typography>
      </div>
    </Box>
  </Grid>
</Grid>
      {showCard ? <CardForm /> : <AchForm />}
          <Grid container className={classes.margin}>
            <Box className={classes.buttonBox}>
              <Button variant="contained" className={classes.buttonStyle} color="#696969" size="large" onClick={() => nextStep()} >
                Save and Confirm
                </Button>
            </Box>
          </Grid>
    </div>;
}

export default MonthlyPayment;
