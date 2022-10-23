import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ProfilePlaceholder from './ProfilePlaceholder'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function CompanyCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.trade_nm}
        </Typography>
        <Typography variant="h11" component="div" color="text.secondary">
          {props.cty_nm}, {props.st_cd}
        </Typography>
        <Typography variant="h11" component="div" color="text.secondary">
          NAIC Code: {props.naic_cd}
        </Typography>
        <br/>
        <Typography variant="body2">
          No description available at the moment.
        </Typography>
        <br/>
        <Typography variant="body2">
          Total Violations: {props.violations.case_violtn_cnt} | Fair Labor Act Violations: {props.violations.flsa.flsa_cl_violtn_cnt} | OSHA Violations: {props.violations.osha_violtn_cnt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> 
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
