import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import ProductSingle from "./ProductSingle";

const Products = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product);
    //the above line can also be written like this:
    //const products = useSelector((state) => state.product.products);

    //above products is store.product.products
    //Where store is the state, product is the reducer and products is inside the initial state of the reducer
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    console.log(products);
    return (
        <div>
            {products.map((product) => (
                <ProductSingle key={product.id} {...product} />
            ))}
        </div>
    );
};
/* return (
    <div>
        {products.map((product) => {
            const reformattedTitle = product.title.toString().toLowerCase();
            return <div key={product.id}>{reformattedTitle}</div>;
        }
        )}
    </div>
); */

export default Products;