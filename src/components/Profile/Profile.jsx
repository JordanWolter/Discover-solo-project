import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function Profile() {
    const user = useSelector(store => store.user)
    console.log(user)

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <h1>{user.username}</h1>
            <h2>favorite courses</h2>
            <h3>round history</h3>
            <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        disc 1 name
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>disc 1 type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                       this is going to be disc stats
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>disc 2 name</Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        disc 2 type
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        disc 2 stats
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Advanced settings
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>
                        Filtering has been entirely disabled for whole web server
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>

        </>
    )
}
export default Profile;
