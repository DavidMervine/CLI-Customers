import { createRequire } from 'module'
const require = createRequire(import.meta.url);


var prompt = require('prompt');

import { readDatabase } from "./Data/import_db.js";
import { getAllCustomers, getCustomerByID } from "./operations/read.js";
import { removeCustomerById } from "./operations/delete.js";
import { createCustomer } from './operations/create.js';
import { updateCustomerByID } from './operations/update.js';

prompt.start();

console.log("Pick from the following operations:");
console.log("A: List all customers.");
console.log("I: Find individual customer by ID.");
console.log("D: Delete individual customer by ID.");
console.log("C: Create a new customer");
console.log("U: Update a customer by ID");


prompt.get(['operation'], function(err, result) {
    switch(result.operation) {
        case "A":
            console.log(getAllCustomers());
            break;
        case "I":
            prompt.get(['id'], function(err, result){
                var customer = getCustomerByID(result.id);
                console.log(customer)
            })
            break;
        case "D":
            prompt.get(['id'], function(err, result){
                var customer = removeCustomerById(result.id);
                console.log(customer);
            })
            break;
        case "C":
            prompt.get(['first_name', 'last_name', 'email_address', 'user_name'], function(err, result){
                let customer = {
                    // use the user input to create this new customer object that we are going to pass into the createcustomer()
                    first_name: result.first_name,
                    last_name: result.last_name,
                    email_address: result.email_address,
                    user_name: result.user_name,
                };
                var result = createCustomer(customer);
                console.log(customer);
            })
            break;
        case "U":
            prompt.get(['id'], function(err, result){
                var customer = updateCustomerByID(result.id);
                console.log(customer)
            })
            break;
        default:
            console.log("Please enter a valid opperation code.")
            break;
    }
});
