export class Product{
    push(p: Product): void {
        throw new Error('Method not implemented.');
    }
    constructor(
        public id?:number,
        public name?:string,
        public price?:number,
        public imageUrl?:string,
        public description?:string,
        public category?:string

    ){}
}