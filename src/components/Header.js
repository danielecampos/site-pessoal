import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../avatar.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#fff",
    textTransform: "uppercase"
  },
  subtitle: {
    color: "#6a4983",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src="https://media-exp1.licdn.com/dms/image/C4E03AQFHFeqaSV_uVQ/profile-displayphoto-shrink_400_400/0/1601765050762?e=1636588800&v=beta&t=T29-bxSK0vpam2YRRIPrKAkTsjlfNo5_jR15DNWR_Pg" alt="Daniele Campos" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Daniele Campos
      </Typography>

      <Typography className={classes.subtitle} variant="h6">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
