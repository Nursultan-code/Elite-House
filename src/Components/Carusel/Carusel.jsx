import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
    {
        label: 'Континенталь',
        imgPath:
            'https://static.tildacdn.com/tild3162-3734-4430-b564-383139653263/_1.jpg',
    },
    {
        label: 'Эль-Классик',
        imgPath:
            'https://static.tildacdn.com/tild6164-3739-4564-b935-376438653336/2_1.jpg',
    },
    {
        label: 'Александрия',
        imgPath:
            'https://static.tildacdn.com/tild3131-3335-4339-b931-636266336339/photo.jpg',
    },
    {
        label: 'Эль-Класик Плюс',
        imgPath:
            'https://static.tildacdn.com/tild6462-3631-4966-b864-336130653437/1_1.jpg',
    },
    {
        label: 'New York City',
        imgPath:
            'https://static.tildacdn.com/tild3731-3162-4164-b165-303435666536/ob_00047.jpg',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 1120,
        flexGrow: 1,
        width: '100vw'
    },
    header: {
        marginTop: 0,
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
        color: 'white',
        textAlign: 'center'
    },
    img: {
        height: 808,
        display: 'block',
        // maxWidth: '100vw',
        overflow: 'hidden',
        width: '100vw',
    },
}));

function Carusel() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div
            className={classes.root}
            style={{
                marginTop: "-20px",


            }}
        >
            {/* <Paper style={{
                background: 'transparent',
                backgroundColor: 'rgba(52, 52, 52, 0.3)',


            }} square elevation={0} className={classes.header}>
                <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper> */}
            <AutoPlaySwipeableViews
                controls={false}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <img className={classes.img} src={step.imgPath} alt={step.label} />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            {/* <MobileStepper
                steps={maxSteps}
                position="static"
                variant="text"
                activeStep={activeStep}

            /> */}
        </div >
    );
}

export default Carusel;
