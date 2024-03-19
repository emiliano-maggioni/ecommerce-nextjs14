import classes from "./Item.module.css";
import { ItemTypes } from 'utilities/types';
import Button from '@mui/material/Button';

const Item = ({idProd, nameProd, imgName, price, moreColors, discount, priceDiscounted }: ItemTypes) => {
    return(
        <div className={classes.container} >
           <figure>
             <img src={`/images/${imgName}`} alt="Product image" />
             <figcaption>{nameProd}</figcaption>
           </figure>
           <span className={(discount > 0) ? classes.priceDiscounted : classes.price }>{price} €</span>
           {(discount > 0) && <span className={classes.priceDiscountedRed}>{priceDiscounted} € (-{discount}%)</span>}
           <div className={classes.bottomContent}>
             {(moreColors) && <p>mas colores</p>}
             <Button variant="contained" onClick={()=> console.log(idProd)}>AÑADIR</Button>
           </div>
        </div>
  );
}

export default Item;