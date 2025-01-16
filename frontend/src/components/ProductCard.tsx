import { ProductCardProps } from "../types";
import {useDispatch} from "react-redux";
import { addToCart } from "../store/cartSlice";
export const ProductCard =({
    product
}:{
    product:ProductCardProps;
})=>{
    const dispatch = useDispatch();
    return (
        <div
        className="bg-[#000000] p-4 rounded-lg shadow-md text-center border border-[#FFD700]"
    >
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 md:h-64 object-cover mb-4 rounded-md border border-[#FFFF00]"
            loading="lazy"
        />
        <h2 className="text-xl font-semibold text-[#FFFF00]">{product.name}</h2>
        <p className="text-[#FFD700] text-sm mt-2">{product.description}</p>
        <p className="text-lg font-bold text-[#FFFF00] mt-4">${product.price}</p>
        <button className="mt-4 px-4 py-2 bg-[#FFD700] text-black rounded hover:bg-[#FFFF00] transition"
        onClick={()=>{
            dispatch(
                addToCart(product)
            )
        }}>
            Add to Cart
        </button>
    </div>
    )
}