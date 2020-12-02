import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import MenuItem from '@material-ui/core/MenuItem';
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import StayCurrentPortraitIcon from "@material-ui/icons/StayCurrentPortrait";
import PublicIcon from "@material-ui/icons/Public";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import LocationCityRoundedIcon from "@material-ui/icons/LocationCityRounded";
import NearMeRoundedIcon from "@material-ui/icons/NearMeRounded";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import AttachMoneyRoundedIcon from "@material-ui/icons/AttachMoneyRounded";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import OwnerInformation from "./OwnerInformation";
import {locationCity, countryList} from "./../../constant/locationConstant";
import styles from "assets/jss/material-dashboard-react/components/businessForm.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardFooter from "components/Card/CardFooter.js";
// import { Stepper } from "@material-ui/core";

// import avatar from "assets/img/faces/marc.jpg";

const useStyles = makeStyles(styles);

export default function BusinessForm() {
  const [check, setCheck] = React.useState(false);
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
    ownerCountry: '',
  });

  const [stateInput, setStateInput] = React.useState(true);

  const onChange = (value, type) => {
    const allState = {...values};
    if (type === 'businessCountry') {
      if (value === 'USA') {
        setStateInput(true);
        allState.businessState = '';
      } else {
        setStateInput(false);
        allState.businessState = '';
      }
    }
    allState[type] = value;
    handleInput(allState);
  }
  const classes = useStyles();
  return (
    <div>
      <Card>
        <Box className={classes.tittleColor} height={40}>
          <Typography className={classes.tittleTextColor}>
            Business Information
          </Typography>
        </Box>
        <FormControl className={classes.margin}>
        <Box className={classes.marginBox}>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <PersonIcon className={classes.inputBox} fontSize="small" />
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
                    focused: "focused",
                    input: classes.resize,
                  },
                }}
                label="Business Name"
                value={values.businessName}
                onChange={e => onChange(e.target.value, "businessName")}
                name="businessName"
                id="businessName"
              />
            </Grid>
            <Grid item xs>
            <BusinessCenterIcon className={classes.inputBox} fontSize="small" />
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
                    focused: "focused",
                    input: classes.resize,
                  },
                }}
                label="Legal Business Name"
                value={values.legalBusiness}
                onChange={e => onChange(e.target.value, "legalBusiness")}
                name="legalBusiness"
                id="legalBusiness"
              />
            </Grid>
            <Grid item xs>
            <EventNoteIcon className={classes.inputBox} fontSize="small" />
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
                    focused: "focused",
                    input: classes.resize,
                  },
                }}
                label="Business Start Date"
                value={values.businessStartDate}
                onChange={e => onChange(e.target.value, "businessStartDate")}
                name="businessStartDate"
                id="businessStartDate"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <BusinessCenterIcon className={classes.inputBox} fontSize="small" />
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
                label="Business Description"
                value={values.businessDiscrition}
                onChange={e => onChange(e.target.value, "businessDiscrition")}
                name="businessDiscrition"
                id="businessDiscrition"
              />  
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <PriorityHighIcon className={classes.inputBox} fontSize="small" />
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
                label="Ownership Type"
                value={values.ownerShipType}
                onChange={e => onChange(e.target.value, "ownerShipType")}
                name="ownerShipType"
                id="ownerShipType"
                select
              >
                <MenuItem value={1}>Sole Trader</MenuItem>
                  <MenuItem value={2}>Partnership</MenuItem>
                  <MenuItem value={3}>Public</MenuItem>
                  <MenuItem value={4}>Proprietary</MenuItem>
                  <MenuItem value={5}>Association Trust</MenuItem>
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
                label="Business Phone Number"
                value={values.businessPhoneNumber}
                onChange={e => onChange(e.target.value, "businessPhoneNumber")}
                name="businessPhoneNumber"
                id="businessPhoneNumber"
              />
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
                label="Email Address"
                value={values.businessEmail}
                onChange={e => onChange(e.target.value, "businessEmail")}
                name="businessEmail"
                id="businessEmail"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <PublicIcon className={classes.inputBox} fontSize="small" />
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
                label="Website"
                value={values.businessWebsite}
                onChange={e => onChange(e.target.value, "businessWebsite")}
                name="businessWebsite"
                id="businessWebsite"
              />
            </Grid>
            <Grid item xs>
            <DescriptionIcon className={classes.inputBox} fontSize="small" />
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
                label="Fedral Tax ID"
                value={values.businessTaxId}
                onChange={e => onChange(e.target.value, "businessTaxId")}
                name="businessTaxId"
                id="businessTaxId"
              />
            </Grid>
            <Grid item xs>
            <StorageRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="Stock Symbol"
                value={values.businessStock}
                onChange={e => onChange(e.target.value, "businessStock")}
                name="businessStock"
                id="businessStock"
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
                label="Business Address (No P.O. Box)"
                value={values.businessAddress}
                onChange={e => onChange(e.target.value, "businessAddress")}
                name="businessAddress"
                id="businessAddress"
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
                value={values.businessSuite}
                onChange={e => onChange(e.target.value, "businessSuite")}
                name="businessSuite"
                id="businessSuite"
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
              value={values.businessCountry}
              onChange={e => onChange(e.target.value, "businessCountry")}
              name="businessCountry"
              id="businessCountry"
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
              value={values.businessState}
              onChange={e => onChange(e.target.value, "businessState")}
              name="businessState"
              id="businessState"
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
          </Box>
          <Box className={classes.tittleColor} height={40}>
            <Typography className={classes.tittleTextColor}>
              Sattlement Account Information
            </Typography>
          </Box>
          <Box className={classes.marginBox}>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <AccountBalanceIcon className={classes.inputBox} fontSize="small" />
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
                label="Account Number"
                value={values.accountNumber}
                onChange={e => onChange(e.target.value, "accountNumber")}
                name="accountNumber"
                id="accountNumber"
              />
            </Grid>
            <Grid item xs>
            <AccountBalanceIcon className={classes.inputBox} fontSize="small" />
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
                label="Routing Number"
                value={values.routingNumber}
                onChange={e => onChange(e.target.value, "routingNumber")}
                name="routingNumber"
                id="routingNumber"
              />
            </Grid>
            <Grid item xs>
            <AccountBalanceIcon className={classes.inputBox} fontSize="small" />
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
                label="Name on Account"
                value={values.accountName}
                onChange={e => onChange(e.target.value, "accountName")}
                name="accountName"
                id="accountName"
              />
            </Grid>
            <Grid item xs>
            <AccountBalanceIcon className={classes.inputBox} fontSize="small" />
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
                label="Account Type"
                value={values.accountType}
                onChange={e => onChange(e.target.value, "accountType")}
                name="accountType"
                id="accountType"
                select
              >
                <MenuItem value={1}>Retail</MenuItem>
              <MenuItem value={2}>Restaurant</MenuItem>
              <MenuItem value={3}>MOTO</MenuItem>
              <MenuItem value={4}>Internet/Gateway</MenuItem>
              <MenuItem value={5}>Other</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          </Box>
          <Box className={classes.tittleColor} height={40}>
            <Typography className={classes.tittleTextColor}>
              Processing Method and Volume
            </Typography>
          </Box>
          <Box className={classes.marginBox}>
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
                label="Card Present/Swiped"
                value={values.cardPresent}
                onChange={e => onChange(e.target.value, "cardPresent")}
                name="cardPresent"
                id="cardPresent"
              />
            </Grid>
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
                label="Card Not Present/Keyed"
                value={values.cardNotPresent}
                onChange={e => onChange(e.target.value, "cardNotPresent")}
                name="cardNotPresent"
                id="cardNotPresent"
              />
            </Grid>
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
                label="E-Commerce"
                value={values.eCommers}
                onChange={e => onChange(e.target.value, "eCommers")}
                name="eCommers"
                id="eCommers"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="Monthly Card Volume"
                value={values.cardVolumeMonth}
                onChange={e => onChange(e.target.value, "cardVolumeMonth")}
                name="cardVolumeMonth"
                id="cardVolumeMonth"
              />
            </Grid>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="Average Ticket Size"
                value={values.averageTicketSize}
                onChange={e => onChange(e.target.value, "averageTicketSize")}
                name="averageTicketSize"
                id="averageTicketSize"
              />
            </Grid>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="High Ticket"
                value={values.highTicket}
                onChange={e => onChange(e.target.value, "highTicket")}
                name="highTicket"
                id="highTicket"
              />
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="Monthly ACH/eCheck Volume"
                value={values.eCheckVolumeMonth}
                onChange={e => onChange(e.target.value, "eCheckVolumeMonth")}
                name="eCheckVolumeMonth"
                id="eCheckVolumeMonth"
              />
            </Grid>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="Average ACH/eCheck"
                value={values.eCheckAverage}
                onChange={e => onChange(e.target.value, "eCheckAverage")}
                name="eCheckAverage"
                id="eCheckAverage"
              />
            </Grid>
            <Grid item xs>
            <AttachMoneyRoundedIcon className={classes.inputBox} fontSize="small" />
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
                label="High ACH/eCheck"
                value={values.eCheckHigh}
                onChange={e => onChange(e.target.value, "eCheckHigh")}
                name="eCheckHigh"
                id="eCheckHigh"
              />
            </Grid>
          </Grid>
          </Box>
          <Box className={classes.tittleColor} height={40}>
            <Typography className={classes.tittleTextColor}>
              Owner Information
            </Typography>
          </Box>
            <OwnerInformation />
          <Box className={classes.tittleColor} height={40}>
            <Typography className={classes.tittleTextColor}>
              Terms and Conditions
            </Typography>
          </Box>
          <Grid container className={classes.margin}>
            <Grid item xs>
              <Box className={classes.tncBox}>
              <Typography className={classes.resize}>
              <Checkbox
                className={classes.checkBox}
                checked={check}
                onChange={() => setCheck(!check)}
                name="checkedB"
                size="small"
                color="primary"
              />
              By clicking on the "Submit" below. I certify that i have read and agree to be bound by the
              Payment Data System Inc. termc and conditions accessible at the above hyperlink herein incorporated
              by reference. and that i am duly authorized to bind 2442 BENNETT AVENUE CORP, to such provisions.
            </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container className={classes.margin}>
            <Box className={classes.buttonBox}>
              <Button variant="contained" className={classes.buttonStyle} color="#696969" size="large">
                Submit
              </Button>
            </Box>
          </Grid>
        </FormControl>
      </Card>
    </div>
  );
}
