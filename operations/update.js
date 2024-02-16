import { createRequire } from 'module'
const require = createRequire(import.meta.url);


var prompt = require('prompt');


import { readDatabase } from '../Data/import_db.js';
import { getCustomerByID } from './read.js';
import { removeCustomerById } from './delete.js';
import fs from 'fs';

let customers = readDatabase("./data/db.txt");

export function updateCustomerByID(id) {
    let currentCustomer = getCustomerByID(id);

    console.log("Details for customer id " + id + ":");
    console.log("First Name: " + currentCustomer.first_name);
    console.log("Last Name: " + currentCustomer.last_name);
    console.log("Email Address: " + currentCustomer.email_address);
    console.log("User Name: " + currentCustomer.user_name);

    console.log("Please enter the new customer.");
    prompt.get(['first_name', 'last-name', 'email_address', 'user_name'], function (err, result) {

        let customer = {

            first_name: (result.first_name == "") ? currentCustomer.first_name : result.first_name,
            last_name: (result.last_name == "") ? currentCustomer.last_name : result.last_name,
            email_address: (result.email_address == "") ? currentCustomer.email_address : result.email_address,
            user_name: (result.user_name == "") ? currentCustomer.user_name : result.user_name,

        };

    //remove the current entry in db.txt
    //deleting the product
    let updatedCustomers = removeCustomerById(id);     
    //add the edited entry to db.txt
    customer.id = Number(id);
    fs.appendFile('./data/db.txt', "\n" + JSON.stringify(customer), null, function () {});
    return customers;

    })


}