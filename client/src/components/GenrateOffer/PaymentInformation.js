import React from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
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
const PaymentInformation = ({nextStep}) => {
  const classes = useStyles();
  const [selectedValue, setSelectedValue] = React.useState('a');
  const [selectedPayment, setSelectedPayment] = React.useState('a');
  const [showPayment, setShowPaymet] = React.useState(false);
  const [showCard, setShowCard] = React.useState(true);

  const handleChange = (event) => {
    if (event.target.value === 'b') {
      setSelectedValue(event.target.value);
      setShowPaymet(true);
    }
    if (event.target.value === 'a') {
      setSelectedValue(event.target.value);
      setShowPaymet(false);
    }
  };
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
    return <div>
        <Box height={40} className={classes.radioBox}>
          <div className={classes.radioBoxRoot}>
              <GreenRadio
              className={classes.checkBox}
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            <Typography className={classes.textColorRadio}>Pay Now</Typography>
          </div>
            <div className={classes.radioBoxRoot}>
                <GreenRadio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  className={classes.checkBox}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
            <Typography className={classes.textColorRadio}>Pay Later by patient</Typography>
          </div>
         </Box>
        {!showPayment ?
        <div>
          <Box>
          <Typography>
          Payment Information:
          </Typography>
        </Box>
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
          </div> : <div>
          <Grid container className={classes.margin}>
          <Box>
          <Typography className={classes.payLatterHeading}>
          Thanks for choosing payment option!!!
          </Typography>
          <Typography className={classes.payLatterCaption}>
          a link is sent to patient's registered mobile number. User has to access it and make the payments. link will be activated for 48 hours only.
          </Typography>
        </Box>
        </Grid>
            </div>}
    </div>;
}

export default PaymentInformation;
