import { IProduct } from "../interfaces/i-product";

export class ProductModel implements IProduct {
    id:number=0;
    title:string="";
    description:string="";
    price:number=0;
    discountPercentage:number=0;
    stock:number=0;
    brand?:string="";
    rating?:number=0;
    category?:string="";
    thumbnail?:string="";
    images?:string[];
}
