import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {Link} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 5000
  }
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        aria-label="icon label tabs example"
      >
        <Tab icon={<AssignmentIndIcon />} component={Link} to="/Customer" label="Customers" />
        <Tab icon={<AccessibilityIcon />} component={Link} to="/Trainings" label="Trainings" />
        <Tab icon={<CalendarTodayIcon />} component={Link} to="/Calendar"  label="Calendar" />
      </Tabs>
    </Paper>
    
  );
}
