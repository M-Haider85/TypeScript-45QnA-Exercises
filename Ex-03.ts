let personName:string='';

personName=prompt('Please enter your name!') || '';

let lowerCase:string=personName.toLowerCase();
let upperCase:string=personName.toUpperCase();

let titleCase:string=personName.split(' ').map(word=> word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase()).join(' ');

if(personName !== null && personName !== ''){
    alert(`Hello ${personName}, Here is your name in:
    lowerCase:${lowerCase}
    upperCase:${upperCase}
    titleCase:${titleCase}`)
}
else{
    alert(`Please fill your name!`)
}