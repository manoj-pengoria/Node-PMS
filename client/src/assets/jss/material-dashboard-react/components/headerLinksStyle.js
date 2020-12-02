import {
  defaultFont,
  dangerColor,
  whiteColor
} from "assets/jss/material-dashboard-react.js";

import dropdownStyle from "assets/jss/material-dashboard-react/dropdownStyle.js";

const headerLinksStyle = theme => ({
  ...dropdownStyle(theme),
  search: {
    "& > div": {
      marginTop: "0"
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 15px !important",
      float: "none !important",
      paddingTop: "1px",
      paddingBottom: "1px",
      padding: "0!important",
      width: "60%",
      marginTop: "40px",
      "& input": {
        color: whiteColor
      }
    }
  },
  radioBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItem: 'center',
    justifyContent: 'center',
  },
  radioBoxRoot: {
    display: 'flex',
    flexDirection: 'row',
  },
  textColorRadio: {
    color: "#595c5c",
    fontSize: "90%",
    fontStyle: "Helvetica, Arial,sans-serif",
    marginTop: '.5rem',
    marginLeft: '.5rem',
    marginRight: '1rem',
  },
  checkBox: {
    '&$checked': {
    color: '#00acc1',
    },
  },
  linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px",
    margin: "0px"
  },
  buttonLink: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      margin: "10px 15px 0",
      width: "-webkit-fill-available",
      "& svg": {
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& .fab,& .fas,& .far,& .fal,& .material-icons": {
        fontSize: "24px",
        lineHeight: "30px",
        width: "24px",
        height: "30px",
        marginRight: "15px",
        marginLeft: "-15px"
      },
      "& > span": {
        justifyContent: "flex-start",
        width: "100%"
      }
    }
  },
  searchButton: {
    [theme.breakpoints.down("sm")]: {
      top: "-50px !important",
      marginRight: "22px",
      float: "right"
    }
  },
  marginTop: {
    marginTop: '.7rem',
  },
  marginInput: {
    zIndex: "4",
    margin: "0"
  },
  searchIcon: {
    width: "17px",
    zIndex: "4"
  },
  notifications: {
    zIndex: "4",
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      top: "2px",
      border: "1px solid " + whiteColor,
      right: "4px",
      fontSize: "9px",
      background: dangerColor[0],
      color: whiteColor,
      minWidth: "16px",
      height: "16px",
      borderRadius: "10px",
      textAlign: "center",
      lineHeight: "16px",
      verticalAlign: "middle",
      display: "block"
    },
    [theme.breakpoints.down("sm")]: {
      ...defaultFont,
      fontSize: "14px",
      marginRight: "8px"
    }
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "inline-block"
  },
  searchWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: "-webkit-fill-available",
      margin: "10px 15px 0"
    },
    display: "inline-block"
  },
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
  marginTop: "4.5%",
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
fullInput: {
  width: "93.2%",
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
stepRoot: {
  backgroundColor: 'transparent'
},
stepBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: '1%',
    width: '50%',
    backgroundColor: 'black'
},
stepNumberBox: {
    backgroundColor: '#a1c5ff',
    width: '2%',
    height: '40%',
},
textColor: {
    color: '#ffffff',
},
readOnlyInput: {
  backgroundColor: '#f5f5f5',
  fontStyle: 'italic',
},
payLatterHeading: {
  color: '#a3a3a3'
},
payLatterCaption: {
  color: '#a3a3a3',
  marginTop: '.5rem',
  fontSize: 14,
},
});

export default headerLinksStyle;
