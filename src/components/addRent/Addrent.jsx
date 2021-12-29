import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom"
import RentAgentSale from './RentAgentSale';
import RentAgentDetails from './RentAgentDetails';
import RentBuyerSeller from './RentBuyerSeller';
import RentOtherAgent from './RentOtherAgent';
import RentBrokerDetails from './RentBrokerDetails';
import RentReferringDetails from './RentReferringDetails';
import RentOtherDetails from './RentOtherDetails';

const steps = ['Agent Sale', 'Agent Details', 'Buyer/Seller Details',
    'Other Agent', 'Broker Details', 'Referring Details', 'Other Details'];

function getStepContent(step: number) {
    switch (step) {
        case 0:
            return (
                <div className='container-fluid pt-5 pb-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                           <RentAgentSale/>
                        </div>
                    </div>
                </div>
            );
        case 1:
            return (
                <div className='container-fluid pt-5 pb-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <RentAgentDetails/>
                        </div>
                    </div>
                </div>
            );
        case 2:
            return (
                <div className='container-fluid pt-5 pb-4'>
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <RentBuyerSeller/>
                        </div>
                    </div>
                </div>
            );
        case 3:
            return (
                <div className='container-fluid pt-5 pb-4'>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <RentOtherAgent/>
                    </div>
                </div>
            </div>
            );
        case 4:
            return (
                <div className='container-fluid pt-5 pb-4'>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                       <RentBrokerDetails/>
                    </div>
                </div>
            </div>
            );
        case 5:
            return (
                <div className='container-fluid pt-5 pb-4'>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                       <RentReferringDetails/>
                    </div>
                </div>
            </div>
            );
        case 6:
            return (
                <div className='container-fluid pt-5 pb-4'>
                <div className="row justify-content-center">
                    <div className="col-md-11">
                        <RentOtherDetails/>
                    </div>
                </div>
            </div>
            );
       
        default:
            return 'Unknown step';
    }
}

export default function Addrent() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [open, setOpen] = React.useState(false);
    const [second, setSecond] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <div className="addAgentsContatiner">


            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>

                    );
                })}
            </Stepper>


            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Link to="/rent">Go to Rent</Link>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                            class="rs-btn rs-btn-primary"
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />

                        <Button onClick={handleNext} class="rs-btn rs-btn-primary">
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </div>
    )
}
