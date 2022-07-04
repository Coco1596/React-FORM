import React from 'react'
import Appbar from '@material-ui/core/AppBar'
import {NavLink} from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import {makeStyles} from '@material-ui/core'

// import AddUser from './AddUser'

const style = makeStyles({
    tabs:{
        color:'#FFFFFF',
        textDecoration: 'none',
        marginRight: 20
    }
})

const Navbar = () => {
    const make = style();
  return (
   <Appbar position="static">
    <Toolbar>
        <NavLink className={make.tabs} to="/">Admin</NavLink>
        <NavLink className={make.tabs} to="/adduser">Add User</NavLink>
    </Toolbar>
   </Appbar>
  )
}

export default Navbar
