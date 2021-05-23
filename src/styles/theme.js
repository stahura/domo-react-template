import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme({});
//"#FF0000"

export default createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#9ccaeb",
    },

  },
  overrides: {
    MuiButton: {
      label: {
        color: "white",
        fontSize: "16px"
      }
    },

    MuiInputLabel: {
      root: {

        '&$focused': {
          color: "black"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: "#9ccaeb"
        },
        '&$focused $notchedOutline': {
          borderColor: "#9ccaeb",

        },
      },


    }
  }

});


 // notchedOutline : {
   // borderColor: "#9ccaeb",
 // },

/*
       '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
         border: '2px solid #5c6bc0',

       }
*/