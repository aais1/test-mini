import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";

export const Hero = () => {
    const [time, setTime] = useState(new Date());
    const featuredProducts = [
        {
          id: 1,
          image: "https://www.kitchenaid.com/is/image/content/dam/global/kitchenaid/countertop-appliance/stand-mixer/images/hero-KSM85PBER.tif?hei=600",
          name: "Tilt-Head Stand Mixer",
          description: "A versatile and durable stand mixer with a 5-quart stainless steel bowl, perfect for all your baking needs.",
          price: 449.99,
          link: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-Stand/dp/B00005UP2P",
        },
        {
          id: 2,
          image: "https://m.media-amazon.com/images/I/71duCIUwKML._AC_UF350,350_QL80_.jpg",
          name: "Espresso Machine",
          description: "An all-in-one espresso machine with an integrated grinder and steam wand, delivering barista-quality coffee at home.",
          price: 691.00,
          link: "https://www.amazon.com/Breville-BES870XL-Barista-Express-Espresso/dp/B00CH9QWOU",
        },
        {
          id: 3,
          image: "https://dorandtan.com/cdn/shop/products/DORandTANMugCollection.jpg",
          name: "Le Creuset Stoneware Mugs",
          description: "A set of four durable and stylish 14-ounce stoneware mugs, perfect for your favorite hot beverages.",
          price: 48.00,
          link: "https://www.amazon.com/Le-Creuset-Stoneware-Mugs-Set/dp/B01N5I8L6T",
        },
        {
          id: 4,
          image: "https://online.babiesworld.com.pk/pub/media/catalog/product/cache/22f14f48b25e6ebb27dcec888bce4bf5/h/k/hkd-061-navy-i.jpg",
          name: "Insulated Stainless Steel Water Bottle",
          description: "A large-capacity insulated water bottle with a FreeSip spout and push-button lid, keeping your drinks cold for hours.",
          price: 40.00,
          link: "https://www.amazon.com/Owala-FreeSip-Insulated-Stainless-Bottle/dp/B08G4K8J6F",
        }
      ];
      

    useEffect(() => {
        setTime(new Date())
    }, []);

    const getGreeting = () => {
        const hour = time.getHours();
        if (hour < 12) return "Good Morning!";
        if (hour < 18) return "Good Afternoon!";
        return "Good Evening!";
    };

    return (
        <div className="bg-[#000500f5] p-6 min-h-[calc(100vh-160px)]">
            <div className="text-center mb-8">
                <h1 className="text-2xl md:text-4xl font-bold text-[#FFFF00]">
                    {getGreeting()} Welcome to TechStore Pro
                </h1>
                <p className="text-[#FFD700] mt-2 text-md md:text-lg">Your one-stop shop for all things tech.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product) => (
                   <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};
