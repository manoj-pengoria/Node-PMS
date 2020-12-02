import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Menu, Typography } from "@material-ui/core";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import styles from "assets/jss/material-dashboard-react/components/businessForm.js";
import PersonIcon from "@material-ui/icons/Person";
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import {locationCity, countryList} from "./../../constant/locationConstant";


const useStyles = makeStyles(styles);

export default function OwnerInformation() {
    const classes = useStyles();
    const [businessArray, setBusinessArray] = React.useState([1]);
    const [tmp, setTmp] = React.useState(1);
    const [values, handleInput] = React.useState({
        businessName: '',
        legalBusiness: '',
        businessStartDate: '',
        businessDiscrition: '',
        ownerShipType: '',
        businessPhoneNumber: '',
        businessEmail: '',
        businessWebsite: '',
        businessTaxId: '',
        businessStock: '',
        businessAddress: '',
        businessSuite: '',
        businessCity: '',
        businessState: '',
        businessPostalCode: '',
        businessInterNational: '',
        businessCountry: 'USA',
        accountNumber: '',
        routingNumber: '',
        accountName: '',
        accountType: '',
        cardPresent: '',
        cardNotPresent: '',
        eCommers: '',
        cardVolumeMonth: '',
        averageTicketSize: '',
        highTicket: '',
        eCheckVolumeMonth: '',
        eCheckAverage: '',
        eCheckHigh: '',
        ownerFirstName: '',
        ownerLastName: '',
        lastSsn: '',
        ownerDob: '',
        ownerPercentage: '',
        tittle: '',
        ownerPhone: '',
        ownerAddress: '',
        ownerSuit: '',
        ownerCity: '',
        ownerState: '',
        ownerPostal: '',
        ownerInternation: '',
        ownerCountry: 'USA',
      });

      const [stateInput, setStateInput] = React.useState(true);
    
      const onChange = (value, type) => {
        const allState = {...values};
        if (type === 'ownerCountry') {
          if (value === 'USA') {
            setStateInput(true);
            allState.ownerState = '';
          } else {
            setStateInput(false);
            allState.ownerState = '';
          }
        }
        allState[type] = value;
        handleInput(allState);
      }
      const addOwner = () => {
        const value = businessArray;
        if (businessArray.length < 5) {
        value.push(businessArray.length + 1);
        setBusinessArray(value);
        setTmp(tmp + 1);
        }
      }
      const deleteOwner = (index) => {
        const value = [];
        if (businessArray.length > 1) {
        businessArray.forEach((v, i) => {
          if (v !== index) {
            value.push(v);
          }
        });
        setBusinessArray(value);
        setTmp(tmp - 1);
      }
      }
      const form = 
         <div>
        <Grid container className={classes.margin}>
          <Grid item xs>
          <PersonIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.quaterInput}
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
              label="First Name"
              value={values.ownerFirstName}
              onChange={e => onChange(e.target.value, "ownerFirstName")}
              name="ownerFirstName"
              id="ownerFirstName"
            />
          </Grid>
          <Grid item xs>
          <PersonIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.quaterInput}
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
              label="Last Name"
              value={values.ownerLastName}
              onChange={e => onChange(e.target.value, "ownerLastName")}
              name="ownerLastName"
              id="ownerLastName"
            />
          </Grid>
          <Grid item xs>
          <MenuBookRoundedIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.quaterInput}
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
              label="Last 4 SSN"
              value={values.lastSsn}
              onChange={e => onChange(e.target.value, "lastSsn")}
              name="lastSsn"
              id="lastSsn"
            />
          </Grid>
          <Grid item xs>
          <DateRangeRoundedIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.quaterInput}
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
              label="Date Of Birth"
              value={values.ownerDob}
              onChange={e => onChange(e.target.value, "ownerDob")}
              name="ownerDob"
              id="ownerDob"
            />
          </Grid>
        </Grid>
        <Grid container className={classes.margin}>
          <Grid item xs>
          <StrikethroughSIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              label="Ownership Percentage"
              value={values.ownerPercentage}
              onChange={e => onChange(e.target.value, "ownerPercentage")}
              name="ownerPercentage"
              id="ownerPercentage"
            />
          </Grid>
          <Grid item xs>
          <MenuBookRoundedIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              label="Tittle"
              value={values.tittle}
              onChange={e => onChange(e.target.value, "tittle")}
              name="tittle"
              id="tittle"
              select
              >
                <MenuItem value={1}>CEO</MenuItem>
              <MenuItem value={2}>President</MenuItem>
              </TextField>
          </Grid>
          <Grid item xs>
          <StayCurrentPortraitIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              label="Phone"
              value={values.ownerPhone}
              onChange={e => onChange(e.target.value, "ownerPhone")}
              name="ownerPhone"
              id="ownerPhone"
            />
          </Grid>
        </Grid>
        <Grid container className={classes.margin}>
          <Grid item xs>
          <HomeRoundedIcon className={classes.inputBox} fontSize="small" />
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
              label="Street Address (No P.O. Box)"
              value={values.ownerAddress}
              onChange={e => onChange(e.target.value, "ownerAddress")}
              name="ownerAddress"
              id="ownerAddress"
            />
          </Grid>
          <Grid item xs>
          <MoreHorizRoundedIcon className={classes.inputBox} fontSize="small" />
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
              label="Suite"
              value={values.ownerSuit}
              onChange={e => onChange(e.target.value, "ownerSuit")}
              name="ownerSuit"
              id="ownerSuit"
            />
          </Grid>
        </Grid>
        <Grid container className={classes.margin}>
        <Grid item xs>
          <AddIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              value={values.ownerCountry}
              onChange={e => onChange(e.target.value, "ownerCountry")}
              name="ownerCountry"
              id="ownerCountry"
              select
            >
               {countryList.map(key => <MenuItem value={key.value}>{key.name}</MenuItem>)}
              </TextField>
              </Grid>
              <Grid item xs>
          <NearMeRoundedIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              value={values.ownerState}
              onChange={e => onChange(e.target.value, "ownerState")}
              name="ownerState"
              id="ownerState"
              select={stateInput}
            >
              {stateInput && locationCity.map(key => <MenuItem value={key.value}>{key.name}</MenuItem>)}
              </TextField>
          </Grid>
          <Grid item xs>
          <LocationCityRoundedIcon className={classes.inputBox} fontSize="small" />
          <TextField
              className={classes.root}
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
              label="City"
              value={values.ownerCity}
              onChange={e => onChange(e.target.value, "ownerCity")}
              name="ownerCity"
              id="ownerCity"
              />
          </Grid>
        </Grid>
        <Grid container className={classes.margin}>
          <Grid item xs>
          <StarIcon className={classes.inputBox} fontSize="small" />
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
              label="International Province"
              value={values.ownerInternation}
              onChange={e => onChange(e.target.value, "ownerInternation")}
              name="ownerInternation"
              id="ownerInternation"
            />
          </Grid>
          <Grid item xs>
          <RoomIcon className={classes.inputBox} fontSize="small" />
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
              value={values.ownerPostal}
              onChange={e => onChange(e.target.value, "ownerPostal")}
              name="ownerPostal"
              id="ownerPostal"
            />
          </Grid>
        </Grid>
  </div>;
  

  return (
    businessArray.map((key, i) => 
      <div>
      <Box className={classes.ownerHeader}>
        <Typography className={classes.ownerTittle}>{`Owner ${i + 1}`}</Typography>
        <div>
        <Tooltip title="Add Owner" aria-label="add">
        <Button
        className={classes.addIcon}
        size="sm"
        aria-label="open drawer"
        onClick={addOwner}
      >        
        <AddIcon />
        </Button>
        </Tooltip>
        {i !== 0 && 
        
        <Tooltip title="Remove" aria-label="Remove">
        <Button
        className={classes.deleteIcon}
        aria-label="open drawer"
        onClick={() => deleteOwner(key)}
      >        
        <DeleteOutlineRoundedIcon />
        </Button>
        </Tooltip>}
        </div>
        </Box>
        <Box>
        {form}
        </Box>
        </div>)
  );
}
