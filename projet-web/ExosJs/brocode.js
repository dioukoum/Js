let fullName= "Dioukou Moussa Sissoko";
let firstName;
let lastName;

firstName= fullName.slice(0, fullName.lastIndexOf(" "));
lastName= fullName.slice(fullName.lastIndexOf(" ")+1);
console.log(`Your firstname is ${firstName}`);
console.log(`Your lastname is ${lastName.toUpperCase()}`);
console.log(`Your fullname is ${fullName}`);