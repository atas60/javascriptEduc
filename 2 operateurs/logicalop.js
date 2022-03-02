//logical AND(&&)
//returns TRUE if both operands are TRUE
//logical AND(||)
//Returns TRUE if one of the oprands is TRUE

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('eligible', eligibleForLoan);

//NOT (!)

let applicationRefused = !eligibleForLoan;
//applicationRefused is the oposite of eligibleForLoan

console.log('application Refused',applicationRefused);  

