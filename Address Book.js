/*
*Purpose : Create Address Book System using javascript
*/
console.log("Welcome to Address Book Service")
class AddressBook {


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

//Using getters and Setters
get firstName() { return this.first_Name; }
set firstName(firstName) {
    let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(firstNameRegex.test(firstName))
    this.first_Name = firstName;
    else throw 'First Name Should contain one upper case and minimum 3 characters';    
}
get lastName() { return this.last_Name; }
set lastName(lastName) {
    let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if(lastNameRegex.test(lastName))
    this.last_Name = lastName;
    else throw 'Last Name Should contain one upper case and minimum 3 characters';   
}
get address() { return this.address_; }
set address(address) {
    let addressRegex = RegExp('^[a-zA-Z0-9\\s\\-]{4,}$');
    if(addressRegex.test(address))
    this.address_ = address;
    else throw 'Address should either be a letter or number';   
}
get city() { return this.city_; }
set city(city) {
    let cityRegex = RegExp('^[a-zA-Z\\s\\-]{4,}$');
    if(cityRegex.test(city))
    this.city_ = city;
    else throw 'City can have only letters';   
}
get state() { return this.state_; }
set state(state) {
    let stateRegex = RegExp('^[a-zA-Z\\s\\-]{4,}$');
    if(stateRegex.test(state))
    this.state_ = state;
    else throw 'State can have only letters';   
}
get zip() { return this.zip_; }
set zip(zip) {
    let zipRegex = RegExp('^[0-9]{6}$');
    if(zipRegex.test(zip))
    this.zip_ = zip;
    else throw 'Zip can have only 6 digits number';   
}
get phoneNumber() { return this.phone_Number; }
set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp('^[6-9]{1}[0-9]{9}$');
    if(phoneRegex.test(phoneNumber))
    this.phone_Number = phoneNumber;
    else throw 'Phone number can have 10 digits numbers';   
}
get email() { return this.email_; }
set email(email) {
    let emailRegex = RegExp('^[a-z\\+\\-\\_\\.a-z0-9]{3,}\\@[a-z]*\\.[a-z]{1,3}$');
    if(emailRegex.test(email))
    this.email_ = email;
    else throw 'Email should be in proper format';   
}
}
// creating contact
let contact = new AddressBook("Shradha", "Nambiar", "Keltron", "Kannur", "Kerala", 670562, 9567552477, "sradha@gmail.com")
//calling object
console.log(contact);
try {
    contact.firstName = "s23";
    console.log(contact.firstName);  
} catch (error) {
   console.log(error); 
}
