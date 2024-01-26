import { useSelector } from "react-redux";
import ProductSingle from "./ProductSingle";
const Cart = () => {
    const cartProducts = useSelector((state) => state.cart.cart);
    console.log(cartProducts);
    return (
        <div>
            <h1>Cart</h1>
            {cartProducts.map((product) => (
                <ProductSingle key={product.id} {...product} />
            ))}
        </div>
    );
}

export default Cart;