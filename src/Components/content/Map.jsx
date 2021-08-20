import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '100vw',
        height: '600px'
    },
    mapBody: {
        marginTop: '50px'
    }
}))

const Map = () => {

    const classes = useStyles()

    return (
        <div className={classes.mapBody} >
            <iframe className={classes.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.935438718929!2d74.58438321522767!3d42.87420681046955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ace05d4499%3A0xda7c0e6ae4dfde2c!2sololoManas!5e0!3m2!1sen!2skg!4v1629382022992!5m2!1sen!2skg" allowfullscreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Map;