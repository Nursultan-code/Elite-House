import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    about: {
        display: 'flex',
        marginTop: '100px',
        justifyContent: 'space-around',
        marginLeft: '180px',
        marginRight: '180px',
        marginBottom: '100px'

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
    }

}))

const About = () => {
    const classes = useStyles()
    return (
        <div className={classes.about}>
            <div className={classes.block1}>
                <div className={classes.textAbout}>О нас</div>
                <div className={classes.text}>Компания Elite House основана в 2013 году и является одним из лидеров строительной отрасли страны. Сегодня Elite House реализует проекты жилой и коммерческой недвижимости, отличающихся высоким качеством, стильной архитектурой, современными инновациями.</div>
            </div>
            <img className={classes.imageAbout} src="https://static.tildacdn.com/tild6265-6630-4638-a434-343938353661/1.jpg" alt="" />
        </div>
    );
};

export default About;