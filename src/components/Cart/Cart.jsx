import React from 'react'
import { Container, Typography, Button, Grid} from '@material-ui/core'
import CartItem from './CartItem/CartItem';

const Cart = ({ cart }) => {

    const EmptyCart = () => {
        <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some</Typography>
    };

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => {
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item}/>
                        <div>{cart.subtotal.formatted_with_symbol}</div>
                    </Grid>
                })}
            </Grid>
        </>
    }
    if(!cart.line_items.length) return 'Loading...';
  return (
    <Container>
        <div/>
        <Typography variant='h3'gutterBottom>Your Shopping Cart</Typography>
        { !cart.line_items.length ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart