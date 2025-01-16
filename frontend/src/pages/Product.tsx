import { useEffect, useState } from "react";
import { ProductCardWithDetails } from "../components/ProductCardWithDetails";
import { ProductCardProps } from "../types";
import { Product } from "../types";
import { mockProducts } from "../constants/links";

export const Products = () => {
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCardProps | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true); 

  const handleFilter = (category: string) => setFilter(category);

  const handleSort = (order: string) => setSortOrder(order);

  const filteredProducts = products.filter(
    (product) => filter === "All" || product.category === filter
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortOrder === "LowToHigh") return a.price - b.price;
    if (sortOrder === "HighToLow") return b.price - a.price;
    return 0;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        setProducts(mockProducts);//if the backend req fails then render the products from mock data
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 bg-[#000500f5] min-h-screen">
      <div className="flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center mb-6">
        <div className="w-full text-center md:text-start md:space-y-0 space-y-2">
          <button
            className={`px-4  py-2 mr-2 rounded ${
              filter === "All" ? "bg-[#FFFF00]" : "bg-[#bda835c4]"
            }`}
            onClick={() => handleFilter("All")}
          >
            All
          </button>
          <button
            className={`px-4  flex-1 py-2 mr-2 rounded ${
              filter === "Electronics" ? "bg-[#FFFF00]" : "bg-[#bda835c4]"
            }`}
            onClick={() => handleFilter("Electronics")}
          >
            Electronics
          </button>
          <button
            className={`px-4   py-2 rounded ${
              filter === "Accessories" ? "bg-[#FFFF00]" : "bg-[#bda835c4]"
            }`}
            onClick={() => handleFilter("Accessories")}
          >
            Accessories
          </button>
        </div>
        <div className="w-full text-center md:text-end space-y-2 sm:space-x-2  md:space-y-2">
          <button
            className="px-4  py-2 bg-[#FFD700] rounded mx-1"
            onClick={() => handleSort("LowToHigh")}
          >
            Price: Low to High
          </button>
          <button
            className="px-4  py-2 bg-[#FFD700] rounded mx-1"
            onClick={() => handleSort("HighToLow")}
          >
            Price: High to Low
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-80">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-400"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <ProductCardWithDetails
              key={product.id}
              product={product}
              setSelectedProduct={setSelectedProduct}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedProduct && (
        <div
          onClick={() => {
            setSelectedProduct(null);
          }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white p-6 rounded-lg shadow-lg relative"
          >
            <button
              className="px-3 py-1 absolute top-2 right-2 text-xl font-bold bg-red-500 text-white rounded"
              onClick={() => setSelectedProduct(null)}
            >
              X
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="mb-4">{selectedProduct.description}</p>
            <img
              className="w-[80%] h-64 mx-auto rounded-lg"
              src={selectedProduct.image}
              alt={selectedProduct.name}
              loading="lazy"
            />
            <p className="text-lg font-bold mb-4">${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
