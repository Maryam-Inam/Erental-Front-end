import {AppBar, Toobar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
// import logo from '';
import { Toolbar } from '@mui/material';
import {Link, useLocation} from 'react-router-dom'

const Navbar = ({totalItems}) => {
    const location = useLocation();
    return (
        <AppBar position='fixed' className='' color='inherit'>
            <Toolbar>
                {location.pathname==='/' && (
                <div>
                    <IconButton component={Link} to='./cart' aria-label='Show Cart Items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>    
                        </Badge>    
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    )

}
export default Navbar