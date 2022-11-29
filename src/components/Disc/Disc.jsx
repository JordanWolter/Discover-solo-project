// import * as React from 'react';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
import { ThemeProvider } from '@mui/system';
import { PrimaryMainTheme } from '../PrimaryMainTheme/PrimaryMainTheme';


function Disc() {

    const dispatch = useDispatch();
    const history = useHistory();
    const discResults = useSelector(store => store.disc)
    const id = useSelector(store => store.user.id)

    const [discType, setDiscType] = useState('');
    const [discBrand, setDiscBrand] = useState([]);
    const [userDisc, setUserDisc] = useState({});
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

        setUserDisc({
            disc: disc,
            user: id
        })

        console.log('USERDISC', userDisc)

        dispatch({
            type: 'ADD_TO_BAG',
            payload: userDisc
        })
    }

    const back = () => {
        history.push('/profile')
    }

    return (
        <>
            <ThemeProvider theme={PrimaryMainTheme}>
                <Box sx={{ minHeight: 705 }}>
                    <Box sx={{ backgroundColor: 'primary.dark', width: 374, ml: 1, mt: 4, pt: 3, pb: 3, borderRadius: 3 }}>
                        <Box sx={{ backgroundColor: 'white', width: 340, ml: 2, mt: -1, pt: 3, pb: 3, borderRadius: 3 }}>
                            <Box sx={{ minWidth: 80 }}>
                                <FormControl sx={{ width: 300, ml: 2.5 }}>
                                    <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={discType}
                                        label="Disc Type"
                                        onChange={handleType}
                                    // variant='filled'

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
                                sx={{ width: 300, ml: 2.5, mt: 3 }}
                                onChange={handleBrand}
                                renderInput={(params) => <TextField {...params} label="Brand"
                                />}
                            />
                        </Box>
                        <Button onClick={() => back()} sx={{ mt: 2, ml: 2, backgroundColor: 'primary.light' }} variant='contained'>Back</Button>
                        <Button onClick={() => submit()} sx={{ mt: 2, ml: 22, backgroundColor: 'primary.light' }} variant='contained'>search</Button>
                    </Box>
                    {discResults.map(disc => (
                        <>
                            <Accordion sx={{ backgroundColor: 'lightgrey', borderRadius: 3, mt: 1, ml: 1, mr: 1 }} >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Box sx={{ backgroundColor: 'white', padding: 2, borderRadius: 3 }}>
                                        <Typography>{disc.brand} {disc.name}</Typography>
                                    </Box>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* <Typography> */}
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 550 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow key={disc.dataId}>
                                                    <Button sx={{ ml: 5, mt: 2 }} variant='contained' onClick={() => addToBag(disc)}>add to bag</Button>
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
                                                    <TableCell><img src={disc.flightPath} /></TableCell>
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
                </Box>
            </ThemeProvider>
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