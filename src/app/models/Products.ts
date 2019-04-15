import { NumberSymbol } from '@angular/common';

export class Products {
    id: number;
    name: string;
    description: string;
    price: string;
    stock_id: number;
    type_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    stock: {
        id: number;
        name: string;
    }
    type: {
        id: number;
        name: string;
        user_id: number;
        created_at: string;
        updated_at: string;
        products_count: number;
    }
}