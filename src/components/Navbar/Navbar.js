import {AppBar, Toobar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
// import logo from '';
import { Toolbar } from '@mui/material';

const Navbar = ({totalItems}) => {
    return (
        <AppBar position='fixed' className='' color='inherit'>
            <Toolbar>
                <div>
                    <IconButton aria-label='Show Cart Items' color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>    
                        </Badge>    
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )

}
export default Navbar