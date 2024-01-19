// The general admission ticket price is $20.
// If the guest is under 12 or over 65, they qualify for a discounted ticket price of $10.
// If the guest is attending a matinee show, they get an additional $3 off any ticket price.

let buyBtn = document.querySelector('.buyBtn');
const genAdmission = 20;
const ChildAndSeniorTix = 10;


buyBtn.addEventListener("click", buyTicket);

// function buyTicket(){
//     let age = prompt('What is your age?')
//     let cost = genAdmission

//     if(age <= 12 || age >= 65){
//         cost = ChildAndSeniorTix
//     }else{
//         cost = genAdmission
//     }
    
//     let isMatinee = prompt('Is this a matinee showing').toLowerCase();
//     cost = isMatinee == 'yes' ? cost = cost - 3 : cost
    
//     alert('Your ticket will cost $' + cost)
// }

function getBaseTicketCost(age){
    if(age <= 12 || age >= 65){
        return ChildAndSeniorTix
    }else{
        return genAdmission
    }
}

function buyTicket(){
    let age = prompt('What is your age?')
    let cost = getBaseTicketCost(age)
    
    let isMatinee = prompt('Is this a matinee showing').toUpperCase();
    cost = isMatinee == 'Yes' || isMatinee == 'Y' ? cost = cost - 3 : cost
    
    alert('Your ticket will cost $' + cost)
}