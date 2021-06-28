import React from 'react'
import useStyles from './style';                
import {CardMedia,Card,Typography,Button,CardContent,CardActions} from '@material-ui/core';

function CartItem({item,onUpdateCartQty,onRemoveFromCart}) {
    console.log(item.media.source)
    const classes = useStyles();
//     const handleUpdateCartQty = (lineItemId, newQuantity) => onUpdateCartQty(lineItemId, newQuantity);

//   const handleRemoveFromCart = (lineItemId) => onRemoveFromCart(lineItemId);
    return (
        <div><Card className={classes.cardHeight}>
            <CardMedia image={item.media.source} className={classes.media}/>

            <CardContent className = {classes.cardContent}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="h7">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>onUpdateCartQty(item.id,item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={()=>onUpdateCartQty(item.id,item.quantity+1)}>+</Button>
                    <Button type="button" variant="contained" color="secondary" size="small" onClick={()=>onRemoveFromCart(item.id)}>Remove</Button>
                </div>
            </CardActions>
            </Card>

        </div>
    )
}

export default CartItem
