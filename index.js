var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'none';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob';
  let favoriteCustomer = 'ninja';
}