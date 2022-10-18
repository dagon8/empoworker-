import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CompanyCard(props) {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="h10" component="div" color="text.secondary">
          {props.city}, {props.state}
        </Typography>
        <Typography variant="h10" component="div" color="text.secondary">
          {props.industry}
        </Typography>
        <br></br>
        <Typography variant="body2">
          {props.description}
        </Typography>
        <Typography variant="body2">
          Total Violations: {props.total} | Fair Labor Act Violations: {props.flsa} | OSHA Violations: {props.osha}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
