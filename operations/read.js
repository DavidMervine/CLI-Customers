import { readDatabase } from '../Data/import_db.js';

let customers = readDatabase("./data/db.txt");

// read info on ONE customer, by its ID
// build a FUNCTION that can be called by other parts of your program, when you need info on a customer

export function getCustomerByID(id) {
    var customer_match = false;
    for (let i = 0; i < customers.length; i++) {
        if(customers[i].id == id) {
            customer_match = true;
            return customers[i];
        }
    }
    if(!customer_match) { 
        return {};
    }
}

// read info on ALL customers
export function getAllCustomers() {
    return customers;
}