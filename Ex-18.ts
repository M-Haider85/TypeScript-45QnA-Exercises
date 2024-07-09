let places:string[]=['Russia','Japan','America','Canada','Switzerland']
console.log('Original Order',places);
console.log('Alphabetical Order:', [...places].sort());
console.log('Original Order after sort:',places);
console.log('Reverse Alphabetical Order:', [...places].sort().reverse());
console.log('Original Order after reverse sort:', places);
console.log('Reversed Order',places.reverse());
console.log('Reversed back to Original Order',places.reverse());
console.log('Sorted in Alphabetical Order',places.sort());
console.log('Sorted in Reverse Alphabetical Order',places.sort().reverse());

