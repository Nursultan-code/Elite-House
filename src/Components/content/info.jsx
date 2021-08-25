import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    logos: {
        marginTop: '65px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginLeft: '90px',
        marginRight: '90px',
        // width: '100vw'

    },
    logo1: {
        display: 'flex',
        alignItems: 'center',




    },
    block1: {
        display: 'block',
        marginLeft: '20px'

    },
    number1: {
        textAlign: 'left',
        fontSize: '40px',
        color: '#4c4d4f',
        fontWeight: 700,
        lineHeight: 1

    },
    text1: {
        fontSize: '20px',
        color: '#4c4d4f',
    },
    logo2: {
        display: 'flex',
        alignItems: 'center',




    },
    block2: {
        display: 'block',
        marginLeft: '20px'

    },
    number2: {
        textAlign: 'left',
        fontSize: '40px',
        color: '#4c4d4f',
        fontWeight: 700,
        lineHeight: 1

    },
    text2: {
        fontSize: '20px',
        color: '#4c4d4f',
    },
    logo3: {
        display: 'flex',
        alignItems: 'center',




    },
    block3: {
        display: 'block',
        marginLeft: '20px'

    },
    number3: {
        textAlign: 'left',
        fontSize: '40px',
        color: '#4c4d4f',
        fontWeight: 700,
        lineHeight: 1

    },
    text3: {
        fontSize: '20px',
        color: '#4c4d4f',
    }

}))
const Info = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Grid className={classes.logos}>
                <div className={classes.logo1}>
                    <img src="https://static.tildacdn.com/tild6134-3436-4561-b238-663537343431/Frame_2.svg" alt="" />
                    <div className={classes.block1}>
                        <div className={classes.number1}>1700</div>
                        <div className={classes.text1}> И БОЛЕЕ ДОЛЬЩИКОВ</div>
                    </div>
                </div>
                <div className={classes.logo2}>
                    <img src="https://static.tildacdn.com/tild3234-3061-4935-b939-333264343438/Frame_4.svg" alt="" />
                    <div className={classes.block2}>
                        <div className={classes.number2}>№1</div>
                        <div className={classes.text2}>ВЫБОР ГОДА 2019</div>
                    </div>
                </div>
                <div className={classes.logo3}>
                    <img src="	https://static.tildacdn.com/tild3661-6166-4133-b632-353033343638/Frame_3.svg" alt="" />
                    <div className={classes.block3}>
                        <div className={classes.number3}>7</div>
                        <div className={classes.text3}>ЛЕТ НА РЫНКЕ</div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
};

export default Info;