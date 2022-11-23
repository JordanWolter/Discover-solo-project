// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';


function Disc() {

    const dispatch = useDispatch();
    const discResults = useSelector(store => store.disc)

    const [discType, setDiscType] = React.useState('');
    const [discBrand, setDiscBrand] = useState([]);
    const handleBrand = (event, value) => setDiscBrand(value);

    const handleType = (event) => {
        setDiscType(event.target.value);

    };

    const submit = () => {

        dispatch({
            type: 'FETCH_DISC_TYPE',
            payload: {
                discType: discType,
                brandName: discBrand.label
            }
        })
    }

    const addToBag = (disc) => {
        dispatch({
            type: 'ADD_TO_BAG',
            payload: disc
        })
    }

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={discType}
                        label="Disc Type"
                        onChange={handleType}
                    >
                        <MenuItem value={10}>Putter</MenuItem>
                        <MenuItem value={20}>Disc</MenuItem>

                    </Select>
                </FormControl>
            </Box>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={discBrands}
                sx={{ width: 300 }}
                onChange={handleBrand}
                renderInput={(params) => <TextField {...params} label="Brand"
                />}
            />
            <Button onClick={() => submit()}>search</Button>
            {discResults.map(disc => (
                <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >

                            <Typography>{disc.brand} {disc.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* <Typography> */}
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow key={disc.dataId}>
                                                <Button sx={{ml:5, mt:2}} onClick={() => addToBag(disc)}>add to bag</Button>
                                                <TableCell align="left">Type</TableCell>
                                                <TableCell align="left">Speed</TableCell>
                                                <TableCell align="left">Glide</TableCell>
                                                <TableCell align="left">Fade</TableCell>
                                                <TableCell align="left">Turn</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow
                                                key={disc.dataId}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell><img src={disc.flightPath}/></TableCell>
                                                <TableCell align="left">{disc.flightType}</TableCell>
                                                <TableCell align="left">{disc.speed}</TableCell>
                                                <TableCell align="left">{disc.glide}</TableCell>
                                                <TableCell align="left">{disc.fade}</TableCell>
                                                <TableCell align="left">{disc.turn}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            {/* </Typography> */}
                        </AccordionDetails>
                    </Accordion>

                </>

            ))}
        </>
    )
}
export default Disc;

// flightPath : "https://mst12.inboundsdiscgolf.com/5634740.png"


const discBrands = [
    { label: 'Kastaplast' },
    { label: 'Innova' },
    { label: 'Daredevil Discs' },
    { label: 'Westside Discs' },
    { label: 'DGA' },
    { label: 'Discraft' },
    { label: 'Prodigy' },
    { label: 'Lone Star Discs' },
    { label: 'Latitude 64' },
    { label: 'Vibram' },
    { label: 'RPM' },
    { label: 'Millennium' },
    { label: 'Infinite Discs' },
    { label: 'Dynamic Discs' },
    { label: 'Discmania' },
    { label: 'Gateway' },
    { label: 'Legacy' },
    { label: 'MVP' },
    { label: 'Thought Space Athletics' },
    { label: 'Mint Discs' },
    { label: 'Other' },
    { label: 'Above Ground Level' },
    { label: 'Clash Discs' },
    { label: 'Yikun' },
    { label: 'Wild Discs' },
    { label: 'Axiom Discs' },
    { label: 'Løft Discs' },
    { label: 'Prodiscus' },
    { label: 'Viking' },
    { label: 'AquaFlight' },
    { label: 'Disctroyer' },
    { label: 'Streamline' },
    { label: 'Lightning' },
    { label: 'Storm' },
    { label: 'Disc Golf UK' },
    { label: 'Crosslap' }
]