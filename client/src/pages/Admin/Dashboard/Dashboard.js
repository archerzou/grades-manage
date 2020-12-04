import React from 'react';
import { Grid } from '@material-ui/core';
import {
  InfoBox,
  Widget,
  SimpleTable,
  SimpleLineChart,
  SimpleRandarChart,
  SimpleBarChart
} from './components';
import useStyles from './styles';

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Students"
            value="1.256"
            differenceValue="+22%"
            caption=" Updated Today"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Teachers"
            value="270"
            differenceValue="-15%"
            caption=" Updated 1 Day ago"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Staffs"
            value="42"
            differenceValue="+7%"
            caption=" Updated 3 Days ago"
          />
        </Grid>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <InfoBox
            title="Lessons"
            value="25"
            differenceValue="-6%"
            caption=" Updated 5 Days ago"
          />
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Student Performance">
            <SimpleLineChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="Grades by Lesson ">
            <SimpleRandarChart />
          </Widget>
        </Grid>
        <Grid item lg={4} md={6} xl={3} xs={12}>
          <Widget title="Grades / Physics">
            <SimpleBarChart />
          </Widget>
        </Grid>
        <Grid item lg={8} md={12} xl={9} xs={12}>
          <Widget title="Overall">
            <SimpleTable />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
