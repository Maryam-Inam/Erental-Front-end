import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart }) => {
    const classes = useStyles();
    console.log("helloo cart!");    
    const EmptyCart = () => (
        <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                        <div></div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography>Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" >Empty Cart</Button>;
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" >Checkout</Button>;
                </div>
            </div>
        </>
    );
    if(!cart.line_items.length) return 'Loading...';

    console.log("cart empty? ",!cart.line_items.length)
  return (
    <Container>
        <div/>
        <Typography variant='h3'gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart