import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Instagram from "@material-ui/icons/Instagram";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "#a74b80",
  },
  root: {
    "& .MuiSvgIcon-root": {
      fill: "#fff",
      fontSize: "20px",
      "&:hover": {
        fill: "#e91e63",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<GitHubIcon />} className={classes.root} />
      <BottomNavigationAction icon={<LinkedInIcon />} className={classes.root} />
      <BottomNavigationAction icon={<Instagram />} className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
