export interface Order {
    id: number;
    session_id: string;
    reference_no: string;
    fname: string;
    lname: string;
    cnumber: string;
    number: string;
    numtype: string;
    arrival_date: Date;
    total_products: string;
    total_price: number;
    placed_on: string;
    payment_status: string;
    seen: boolean;
}