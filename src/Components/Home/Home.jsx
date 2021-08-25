import { Grid } from '@material-ui/core';
import React from 'react';

import Carusel from '../Carusel/Carusel';
import { makeStyles } from '@material-ui/core';
import Info from '../content/info';
import About from '../content/About';
import News from '../content/News';
import Map from '../content/Map';
import Footer from '../content/Footer';

const useStyles = makeStyles((theme) => ({

}))

const Home = () => {
    const classes = useStyles()
    return (
        <Grid>
            <div >
                <div className={classes.carusel}>
                    <Carusel />
                    <Info />
                    <About />
                    <News />
                    <Map />
                    {/* <Footer /> */}
                </div>
            </div>


        </Grid>
    );
};

export default Home;