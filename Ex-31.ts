//list of users not empty
let userNames=['Abid','Mohsin','Admin','Zubair','Raheel']
if(userNames.length==0){console.log("We need to find some users!");}
else{
for(let i=0;i<userNames.length;i++){
    if(userNames[i]=='Admin'){
        console.log( "Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
            
        }
    }
}

//list of users empty
let user_Names:string[]=[]
if(user_Names.length===0){console.log("We need to find some users!");}
else{
for(let i=0;i<user_Names.length;i++){
    if(user_Names[i]=='Admin'){
        console.log( "Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${user_Names[i]}, thank you for logging in again.`);
            
        }
    }
}
