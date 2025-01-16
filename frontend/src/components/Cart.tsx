import { useSelector, useDispatch } from "react-redux";
import { CartItem, CartProps } from "../types";
import { decreaseQuantity, emptyCart } from "../store/cartSlice";
import { increaseQuantity } from "../store/cartSlice";

export const Cart = ({ toggleCart, isCartOpen }: CartProps) => {
    const cart = useSelector((state: { cart: { items: CartItem[], totalQuantity: number } }) => state.cart);
    const dispatch = useDispatch();
    return (
        <div
            className={`fixed top-0 right-0 h-full w-full sm:w-80 bg-white shadow-lg transform ${isCartOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 z-50`}
        >
            <div className="p-4 flex items-center justify-between bg-[#FFD700]">
                <h2 className="text-lg font-bold text-black">Your Cart</h2>
                <button
                    className="text-black font-bold"
                    onClick={toggleCart}
                >
                    ✕
                </button>
            </div>
            <div className="p-4">
                {cart.items.length > 0 ? (
                    cart.items.map((item: CartItem) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between mb-4"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="h-[50px] min-w-[50px] rounded"
                                loading="lazy"
                            />
                            <div className="ml-4 text-left w-full">
                                <h3 className="text-xs md:text-sm font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    ${item.price}
                                </p>
                            </div>
                            <div className="flex items-center space-x-2 ">
                                <span className="text-xl px-2 border-2 border-[#ffff00] font-bold cursor-pointer"
                                onClick={()=>{
                                    dispatch(decreaseQuantity(item))
                                }}>
                                    -
                                </span>
                                <span className="text-sm font-bold">
                                    {item.quantity}
                                </span>
                                <span className="text-xl px-2 border-2 border-[#ffff00] font-bold cursor-pointer"
                                onClick={()=>{
                                    dispatch(increaseQuantity(item))
                                }}>+</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        Your cart is empty.
                    </p>
                )}
            </div>
            <div className="h-[2px] bg-[#ffff00]"></div>
            <div>
                {
                    cart.items.length > 0 && (
                        <div className="p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold">Total</h3>
                                <span className="text-lg font-bold">
                                    ${cart.items.reduce((acc, item) => {
                                        return acc + item.price * item.quantity;
                                    }, 0)}
                                </span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold">Items</h3>
                                {cart.totalQuantity}
                            </div>
                        </div>
                    )
                }
            </div>
            {
                cart.items.length > 0 ? (
                    <div>
                        {/* <div className="w-[80%] bg-red-500 text-white font-bold cursor-pointer  active:scale-95  duration-100 text-center py-2 rounded-lg mx-auto mt-4"
                            onClick={() => {
                                dispatch(emptyCart())
                            }}>
                            Clear Cart
                        </div> */}

                        <div className="w-[80%] bg-[#ffff00] text-black font-bold cursor-pointer hover:border-black hover:border active:scale-95 active:translate-y-1 active:-translate-x-2 duration-100 text-center py-2 rounded-lg mx-auto mt-4"
                            onClick={() => {
                                alert('checkedout');
                                dispatch(emptyCart())
                            }}>
                            Checkout
                        </div>
                    </div>
                ) : (
            <p className="text-center italic mt-6 underline animate-pulse">Add items to cart</p>
            )
        }
        </div>
    )
}