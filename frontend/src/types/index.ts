export interface ProductCardProps{
    id:number;
    image:string;
    name:string;
    description:string;
    price:number;
    selectedProduct?:ProductCardProps;
}

export interface CartProps{
    toggleCart:()=>void;
    isCartOpen:boolean;
}

export interface CartItem{
    id:number;
    image:string;
    name:string;
    price:number;
    quantity:number;
}


export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}