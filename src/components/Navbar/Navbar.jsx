
import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core'
import React from 'react';
import useStyles from './styles';
import logo from '../../assets/logo.png';
import {ShoppingCartOutlined } from '@material-ui/icons';
import {NavLink} from 'react-router-dom';

    
function Navbar({total_item}) {
    const classes=useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" classname={classes.title}>
                        <img src={logo} alt="FlipShop" height="25px" classname={classes.image} />FlipShop
                    </Typography>

                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <NavLink to='/cart'><Badge badgeContent={total_item} color="secondary"><ShoppingCartOutlined /></Badge></NavLink>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
