import React, {useEffect} from 'react';
import {Link} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CompanyCard({name, info}) {

  useEffect(() => {
    console.log(info.violations)
  }, [])

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {info.trade_nm}
        </Typography>
        <Typography variant="h11" component="div" color="text.secondary">
          {info.cty_nm}, {info.st_cd}
        </Typography>
        <Typography variant="h11" component="div" color="text.secondary">
          NAIC Code: {info.naic_cd}
        </Typography>
        <br/>
        <Typography variant="body2">
          No description available.
        </Typography>
        <br/>
        <Typography variant="body2">
          Total Violations: {info.violations.case_violtn_cnt.count} | Fair Labor Act Violations: {info.violations.flsa_violtn_cnt.count} | OSHA Violations: {info.violations.osha_violtn_cnt.count}
        </Typography>
      </CardContent>
      <CardActions>

        <Link to={`/company/${name}`}>
          <Button size="small">Learn More</Button>
        </Link>

      </CardActions>
    </Card>
  );
}
