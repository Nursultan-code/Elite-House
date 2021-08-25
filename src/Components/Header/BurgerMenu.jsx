import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { API } from '../Helpers/Constants';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
    list: {
        width: 250,
        backgroundColor: '#4c4d4f '

    },
    fullList: {
        width: 'auto',
    },
});

export default function BurgerMenu() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List style={{
                backgroundColor: '#4c4d4f  !important',
            }} >
                {/* {['Туры', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Link><ListItemText primary={text} /></Link>
                    </ListItem>
                ))}, */}


                {['Квартиры'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon style={{
                            color: 'white',
                            textDecoration: 'none'

                        }} >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Link style={{
                            color: 'white',
                            textDecoration: 'none'

                        }} to='/list'><ListItemText primary={text} /></Link>
                    </ListItem>
                ))}
                {['Add'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon style={{
                            color: 'white',
                            textDecoration: 'none'

                        }} >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Link style={{
                            color: 'white',
                            textDecoration: 'none'

                        }} to='/add'><ListItemText primary={text} /></Link>
                    </ListItem>
                ))}
                {['О НАС'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon style={{
                            color: 'white',
                            textDecoration: 'none'

                        }}  >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <Link style={{
                            color: 'white',
                            textDecoration: 'none'

                        }} to='/about'><ListItemText primary={text} /></Link>
                    </ListItem>
                ))}
            </List>
            {/* <Divider /> */}
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    return (
        <div >
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>

                    <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>


                </React.Fragment>
            ))}
        </div>
    );
}
