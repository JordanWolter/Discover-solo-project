// import React from 'react';
// import Button from '@mui/material/Button';
// // import { makeStyles } from '@mui/material/styles';
// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';
// import Fade from '@mui/material/Fade';



// function AnimatedModal() {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(false);

//     // const useStyles = sx{(theme => ({
//     //     modal: {
//     //         display: 'flex',
//     //         alignItems: 'center',
//     //         justifyContent: 'center',
//     //     },
//     //     paper: {
//     //         backgroundColor: theme.palette.background.paper,
//     //         border: '2px solid #000',
//     //         boxShadow: theme.shadows[5],
//     //         padding: theme.spacing(2, 4, 3),
//     //     },
//     // }))};

//     const handleOpen = () => {
//         setOpen(true);
//     };
//     const handleClose = () => {
//         setOpen(false);
//     };
//     return (
//         <div>
//             <Button variant="contained" color="secondary" onClick={handleOpen}>
//                 Open Animated Modal
//             </Button>
//             <Modal
//                 aria-labelledby="transition-modal-title"
//                 aria-describedby="transition-modal-description"
//                 className={classes.modal}
//                 open={open}
//                 onClose={handleClose}
//                 closeAfterTransition
//                 BackdropComponent={Backdrop}
//                 BackdropProps={{
//                     timeout: 500,
//                 }}
//             >
//                 <Fade in={open}>
//                     <div className={classes.paper}>
//                         <h2>Animated React Modal</h2>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan odio enim.
//                         </p>
//                     </div>
//                 </Fade>
//             </Modal>
//         </div>
//     );
// }

// export default AnimatedModal;