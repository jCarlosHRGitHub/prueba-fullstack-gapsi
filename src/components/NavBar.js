// import * as React, from 'react';
import React, {useEffect, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.png'
// import { _infoCandidato } from './services/candidato.service';

export function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{boxShadow:'1px 0px 5px -2px'}}>
            <div className="container-fluid">
                <NavLink to={'/'} className="navbar-brand">
                  <img className='w-100 img-fluid' src={logo}/>
                </NavLink>
                <NavLink to={'/'} className="navbar-brand">e-Commerce Gaps</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to={'/proveedores'} className="nav-link">Proveedores</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="Buscar..." placeholder="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
                </div>
            </div>
        </nav>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" color="transparent">
    //     <Toolbar>
    //       <IconButton
    //         size="large"
    //         edge="start"
    //         color="inherit"
    //         aria-label="menu"
    //         sx={{ mr: 2 }}
    //       >
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //         e-Commerce Gaps
    //       </Typography>
    //       <Button color="inherit">Login</Button>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
  );
} 
