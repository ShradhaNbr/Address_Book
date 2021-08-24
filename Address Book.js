/*
*Purpose : Create Address Book System using javascript
*/
console.log("Welcome to Address Book Service")
class AddressBook {
    //properties
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

constructor(firstName,lastName,address,city,state,zip,phoneNumber,email) 
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
}
}
// creating contact
let contact = new AddressBook("Shradha", "Nambiar", "Keltron", "Kannur", "Kerala", 670562, 9567552477, "sradha@gmail.com")
//calling object
console.log(contact)
