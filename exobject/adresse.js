const address = {
    street: 'street',
    city: 'Berlin',
    zipCode: '123'
};

function showAdress(address) {
    for (let key in address) 
    console.log(key, address[key]);

}


showAdress(address);