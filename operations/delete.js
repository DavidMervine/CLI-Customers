import { readDatabase } from '../Data/import_db.js';
import fs from 'fs';

let customers = readDatabase("./data/db.txt");

export function removeCustomerById(id) {
    let customer_match = false;
    let tempArray = customers;
    //loop through customer data
    for(let i=0; i < customers.length; i++) {
        if(customers[i].id==id) {
            customer_match = true;
            tempArray.splice(i, 1);
            fs.writeFile("./data/db.txt", "", function(){})
            //loop through temp array
            for(let i = 0; i < tempArray.length; i++) {
                // for each item convert to json string then write that string to db.txt
                let obj = JSON.stringify(tempArray[i]);
                fs.appendFile("./data/db.txt", obj+"\n", err => {if(err) console.error(err)})
            }
            return tempArray;

        }
    }
    // if no match, return empty object
    if(!customer_match) {
        return {};
    }
}
