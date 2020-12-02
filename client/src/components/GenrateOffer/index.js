import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import StepButton from '@material-ui/core/StepButton';
import Card from "components/Card/Card.js";
import FormControl from "@material-ui/core/FormControl";
import Search from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.js";
import MenuItem from '@material-ui/core/MenuItem';
import ShowOffer from './ShowOffer';
import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import PaymentInformation from './PaymentInformation';
import MonthlyPayment from "./MonthlyPayment";
import { Typography } from "@material-ui/core";
import {locationCity, countryList} from "./../../constant/locationConstant";

  
  const useStyles = makeStyles(styles);
  function getSteps() {
    return ['Generate Offer', 'Payment Information', 'Monthly Payment Information', 'Accept & Confirm'];
  }

  const patientArray = [
    {
      patientName: 'Justin Jones',
      procedureCode: 'A-205',
      patientAddress: 'P.O. Box 283 8562',
      mobileNumber: '(372) 587-2335',
      email: 'justinJones19@hotmail.com',
      counrty: 'USA',
      state: 'AL',
      city: 'Frederick Nebraska ',
      postalCode: '20620',
      insurancePlan: 'Family Floater',
      dateOfProcedure: '20/1/2021',
      copay: '$2,807',
      totalEstimate: '$18,000',
      searchName: 'Justin',
  },
  {
    patientName: 'Talles Micky',
    procedureCode: 'A-209',
    patientAddress: '606-3727 Ullamcorper',
    mobileNumber: '(786) 713-8616',
    email: 'tallesMicky@yahoo.com',
    counrty: 'USA',
    state: 'AZ',
    city: 'Roseville NH',
    postalCode: '11523',
    insurancePlan: 'Family Floater',
    dateOfProcedure: '20/12/2020',
    copay: '$1,807',
    totalEstimate: '$15,000',
    searchName: 'Talles',
},
{
  patientName: 'Nicky Galler',
  procedureCode: 'A-206',
  patientAddress: '928-3313 Vel Av',
  mobileNumber: '(802) 668-8240',
  email: 'nicky@galler.com',
  counrty: 'USA',
  state: 'CA',
  city: 'Aliso Viejo',
  postalCode: '37232',
  insurancePlan: 'Family Floater',
  dateOfProcedure: '2/1/2021',
  copay: '$3,807',
  totalEstimate: '$20,000',
  searchName: 'Nicky',
}]

const GenrateOffer = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [values, setValue] = React.useState({
        patientName: '',
        procedureCode: '',
        patientAddress: '',
        mobileNumber: '',
        email: '',
        counrty: '',
        state: '',
        city: '',
        postalCode: '',
        insurancePlan: '',
        dateOfProcedure: '',
        copay: '',
        totalEstimate: '',
        searchName: '',
    });
    const [showOffers, setShowOffers] = React.useState(false);
    const [showGenrateOffer, setGenrateOffer] = React.useState(false);
    const [completed, setCompleted] = React.useState({});
    const [nopatient, setNoPatient] = React.useState(false);
    
      const [stateInput, setStateInput] = React.useState(true);
    const onChange = (value, type) => {
      const allState = {...values};
      if (type === 'counrty') {
        if (value === 'USA') {
          setStateInput(true);
          allState.state = '';
        } else {
          setStateInput(false);
          allState.state = '';
        }
      }
      allState[type] = value;
      setValue(allState);
    }
      const onChangeSearch = (e) => {
          const value = {...values};
          value.searchName = e;
          setValue(value);
      }
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    setShowOffers(false);
  };
      if (values.searchName === '' && showGenrateOffer) {
        const value = {...values};
        value.patientName = '';
        setValue(value);
        setGenrateOffer(false);
        setShowOffers(false);
        setActiveStep(0);
        setNoPatient(false);
      }

      const showPatientName = () => {
        const hello = patientArray.filter(key => key.patientName.toLowerCase().match(values.searchName.toLowerCase()));
        if (hello.length) {
        setNoPatient(false);
        setGenrateOffer(true);
        setValue(hello[0]);
        } 
        if (!hello.length) {
          setNoPatient(true);
        }
      }
    return <div>
        <div className={classes.searchWrapper}>
          <CustomInput
            formControlProps={{
              className: classes.marginInput + " " + classes.search,
            }}
            inputProps={{
              placeholder: "Search by Patient Name",
              inputProps: {
                "aria-label": "Search by Patient Name",
                "onChange": e => onChangeSearch(e.target.value)
              },
            }}
          />
          <Button color="white" aria-label="edit" justIcon round onClick={() => showPatientName()}>
            <Search />
          </Button>
        </div>
        {nopatient && <Grid container className={classes.margin}>
          <Typography>
            No Patient Available With This Name
            </Typography>
            </Grid>}
        {showGenrateOffer && 
        <div>
          <Stepper className={classes.stepRoot} activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepButton onClick={handleStep(index)}>
              {label}
            </StepButton>
            </Step>
          );
        })}
      </Stepper>
     <Card>
        <FormControl className={classes.margin}>
        {activeStep === 0 &&
            <div>
                <Box>
            <Grid container className={classes.margin}>
            <Grid item xs>            
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Patient Name"
                value={values.patientName}
                onChange={e => onChange(e.target.value)}
                name="businessAddress"
                id="businessAddress"
              />
            </Grid>
            <Grid item xs>
          <TextField
              className={classes.halfInput}
              InputLabelProps={{
                classes: {
                  root: classes.activeInputLableColor,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.activeInputColor,
                  input: classes.resize,
                  focused: "focused",
                },
              }}
              label="Mobile Number"
              value={values.mobileNumber}
              onChange={e => onChange(e.target.value, "mobileNumber")}
              name="mobileNumber"
              id="mobileNumber"
            />
          </Grid>
          </Grid>
          <Grid container className={classes.margin}>
          <Grid item xs>
          <TextField
              className={classes.halfInput}
              InputLabelProps={{
                classes: {
                  root: classes.activeInputLableColor,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.email,
                  input: classes.resize,
                  focused: "focused",
                },
              }}
              label="E-Mail"
              value={values.email}
              onChange={e => onChange(e.target.value, "email")}
              name="email"
              id="email"
            />
          </Grid>
            <Grid item xs>
          <TextField
              className={classes.halfInput}
              InputLabelProps={{
                classes: {
                  root: classes.activeInputLableColor,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.activeInputColor,
                  input: classes.resize,
                  focused: "focused",
                },
              }}
              label="Country"
              value={values.counrty}
              onChange={e => onChange(e.target.value, "counrty")}
              name="counrty"
              id="counrty"
              select
            >
               {countryList.map(key => <MenuItem value={key.value}>{key.name}</MenuItem>)}
              </TextField>
              </Grid>
              </Grid>

          <Grid container className={classes.margin}>
            <Grid item xs>
          <TextField
              className={classes.halfInput}
              InputLabelProps={{
                classes: {
                  root: classes.activeInputLableColor,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.activeInputColor,
                  input: classes.resize,
                  focused: "focused",
                },
              }}
              label="State"
              value={values.state}
              onChange={e => onChange(e.target.value, "state")}
              name="state"
              id="state"
              select={stateInput}
            >
              {stateInput && locationCity.map(key => <MenuItem value={key.value}>{key.name}</MenuItem>)}
              </TextField>
          </Grid>
          <Grid item xs>
          <TextField
              className={classes.halfInput}
              InputLabelProps={{
                classes: {
                  root: classes.activeInputLableColor,
                  focused: "focused"
                }
              }}
              InputProps={{
                classes: {
                  root: classes.activeInputColor,
                  input: classes.resize,
                  focused: "focused",
                },
              }}
              label="Postal Code"
              value={values.postalCode}
              onChange={e => onChange(e.target.value, "postalCode")}
              name="postalCode"
              id="postalCode"
            />
          </Grid>
          </Grid>
          <Grid container className={classes.margin}>
          <Grid item xs>
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Procedure Code"
                value={values.procedureCode}
                onChange={e => onChange(e.target.value, "procedureCode")}
                name="procedureCode"
                id="procedureCode"
              />
            </Grid>
            <Grid item xs>            
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Insurance Plan details"
                value={values.insurancePlan}
                onChange={e => onChange(e.target.value, "insurancePlan")}
                name="insurancePlan"
                id="insurancePlan"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
          <Grid item xs>            
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Date Of Procedure"
                value={values.dateOfProcedure}
                onChange={e => onChange(e.target.value, "dateOfProcedure")}
                name="dateOfProcedure"
                id="dateOfProcedure"
              />
            </Grid>
            <Grid item xs>            
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Total Estimate"
                value={values.totalEstimate}
                onChange={e => onChange(e.target.value, "totalEstimate")}
                name="totalEstimate"
                id="totalEstimate"
              />
            </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs={6}>            
            <TextField
                className={classes.halfInput}
                InputLabelProps={{
                  classes: {
                    root: classes.activeInputLableColor,
                    focused: "focused"
                  }
                }}
                InputProps={{
                  classes: {
                    root: classes.activeInputColor,
                    input: classes.resize,
                    focused: "focused",
                  },
                }}
                label="Copay+Deductibie"
                value={values.copay}
                onChange={e => onChange(e.target.value, "copay")}
                name="copay"
                id="copay"
              />
            </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Box className={classes.buttonBox}>
              <Button variant="contained" className={classes.buttonStyle} size="md" onClick={() => setShowOffers(true)} >
                Genrate Offer
              </Button>
            </Box>
          </Grid>
            </Box>
            {showOffers && <ShowOffer nextStep={() => handleNext()} />}
            </div>}
            {activeStep === 1 && <PaymentInformation nextStep={() => handleNext()} />}
            {activeStep === 2 && <MonthlyPayment nextStep={() => handleNext()} />}
            <Box>
              
            </Box>
            </FormControl>
      </Card>
      </div>}
    </div>;
};

export default GenrateOffer;
