import { createMuiTheme } from "@material-ui/core/styles";
const defaultTheme = createMuiTheme({});

//This color palette changes Material UI Buttons to use the same Blue used by Domo
//The override on MuiButton changes the fontsize and font color 
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

  }

});

