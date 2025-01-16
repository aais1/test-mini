
const mockProducts = [
    {
      id: 5,
      name: "Smartphone",
      category: "Electronics",
      price: 999,
      description: "Latest model with advanced features.",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    },
    {
      id: 6,
      name: "Headphones",
      category: "Accessories",
      price: 199,
      description: "High-quality sound and noise-canceling.",
      image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    },
    {
      id: 7,
      name: "Smartwatch",
      category: "Electronics",
      price: 299,
      description: "Track fitness and notifications on the go.",
      image: "https://xcessorieshub.com/wp-content/uploads/2021/10/Mibro-Lite.webp",
    },
    {
      id: 8,
      name: "Backpack",
      category: "Accessories",
      price: 49,
      description: "Durable and spacious for daily use.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1KjgKTymyRMtvRmRh8BJDIUKRQDS2yNVAqQ&s",
    },
    {
      id: 9,
      name: "Laptop",
      category: "Electronics",
      price: 1299,
      description: "Powerful laptop for work and gaming.",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    },
    {
      id: 10,
      name: "Camera",
      category: "Electronics",
      price: 699,
      description: "Capture high-quality photos and videos.",
      image: "https://i1.adis.ws/i/canon/eos-r8-frt_gallery-module_05_365x228_aa065f319187416e9ccdd3d67a9ba48b?$hotspot-dt-jpg$",
    },
    {
      id: 11,
      name: "Wireless Mouse",
      category: "Accessories",
      price: 25,
      description: "Ergonomic design with a smooth scroll.",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 12,
      name: "Keyboard",
      category: "Accessories",
      price: 49,
      description: "Mechanical keyboard for typing comfort.",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    },
    {
      id: 13,
      name: "Tablet",
      category: "Electronics",
      price: 499,
      description: "Portable device for reading and browsing.",
      image: "https://aws-obg-image-lb-3.tcl.com/content/dam/brandsite/region/global/products/tablets/tcl-nxtpaper-14/id/1.png?t=1721272443153&w=800&webp=undefined&dpr=2.625&rendition=1068",
    },
    {
      id: 14,
      name: "Power Bank",
      category: "Accessories",
      price: 59,
      description: "Charge your devices on the go.",
      image: "https://audionic.co/cdn/shop/files/ProductImage-5.png?v=1724679572",
    },
  ];

function getProducts(req,res){
    res.status(200).json({data:mockProducts});
}

module.exports={
    getProducts
};