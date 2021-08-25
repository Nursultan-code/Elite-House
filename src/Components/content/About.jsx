import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    about: {
        display: 'flex',
        // flexWrap: 'wrap',    
        marginTop: '100px',
        justifyContent: 'space-around',
        marginLeft: '180px',
        marginRight: '180px',
        marginBottom: '100px',
        // width: '100%'

    },
    block1: {
        display: 'block',

    },
    textAbout: {
        textAlign: 'left',
        fontSize: '40px',
        color: '#4c4d4f',
        fontWeight: "700",
        lineHeight: "1.55px",
        paddingBottom: '40px'
    },
    text: {
        textAlign: 'left',
        color: '#4c4d4f',
        fontSize: '18px',
        lineWeight: 300,
        lineHeight: 1.55,
        paddingTop: '20px',
        // minWidth: '500px',
        width: '400px'
    },
    // imageAbout: {

    // }

}))

const About = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Grid className={classes.about}>
                <Grid className={classes.block1}>
                    <Grid className={classes.textAbout}>О нас</Grid>
                    <Grid className={classes.text}>Компания Elite House основана в 2013 году и является одним из лидеров строительной отрасли страны. Сегодня Elite House реализует проекты жилой и коммерческой недвижимости, отличающихся высоким качеством, стильной архитектурой, современными инновациями.</Grid>
                </Grid>
                <Grid>
                    <img className={classes.imageAbout} src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg" alt="" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default About;