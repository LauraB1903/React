import Api from "../Component/Api";
import { useEffect, useState } from "react";

const ApiPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    return (
        <div className="d-flex justify-content-center flex-wrap ">
            {products.map((product) => (
                <Api
                    key={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    addToCart={product.addToCart}
                    buyProduct={product.buyProduct}
                />
            ))}
        </div>
    );
};
export default ApiPage;