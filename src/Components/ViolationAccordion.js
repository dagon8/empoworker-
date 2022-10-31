import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({name, count, description, expanded}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}: {count}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {expanded}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
