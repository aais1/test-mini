import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Cart } from "../components/Cart";

const Mainlayout = () => {
    const cart = useSelector((state: { cart: { totalQuantity: number } }) => state.cart);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCart = () => {
        setIsCartOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen">
            <Header />
            <Outlet />
            {
            cart.totalQuantity > 0 &&
                <div
                className="fixed bottom-4 right-4 bg-[#FFD700] rounded-full shadow-lg p-4 cursor-pointer flex items-center justify-center hover:bg-[#FFFF00] transition"
                onClick={toggleCart}
            >
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/flower-mall-color-icon/shopping-cart-114.png"
                    alt="Cart"
                    className="w-10 h-10"
                    loading="lazy"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cart.totalQuantity || 0}
                </span>
            </div>
            }

            <Cart toggleCart={toggleCart} isCartOpen={isCartOpen} /> 

            <Footer />
        </div>
    );
};

export default Mainlayout;
