import { Injectable } from "@angular/core";
import { Cart } from "./card.model";

@Injectable()
export class Order {
    
    public id?:number;
    public name?:string;
    public address?:string;
    public city?:string;
    public phone?:string;
    public email?:string;

    public isSent:boolean=false;

    constructor(public cart:Cart){}

    ClearOrder(){
        this.id=0;
        this.name=this.address=this.city=this.phone=this.email="";
        this.isSent=false;
        this.cart.clear();
    }
}
