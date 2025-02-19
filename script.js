function generatepassword(e){
    const leng=document.getElementById("len").value;
    const upperCase=document.getElementById("upp").checked;
    const lowerCase=document.getElementById("lower").checked;
    const number=document.getElementById("num").checked;
    const special=document.getElementById("spec").checked;
     


    
    if (upperCase==0 && lowerCase==0 && number==0 && special==0){
        window.alert("Please Enter Atleast One Option")

    }
    else{
    let upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
    let numbersAll="0123456789"
    let specialAll="!@#$%^&*()_+="



    let charValue="";

    if(upperCase){
        const upperC=window.prompt("ENTER THE UPPERCLASS STRING");
        if(upperC===upperC.toUpperCase()){

            upperCaseLetters=upperC;
            
                    charValue+=upperCaseLetters
        }
        else{
            window.alert("You should Enter Uppercase")
            window.location.reload()
            e.preventDefault();
        }
  
    }if(lowerCase){
        
const lowerC=window.prompt("enter the lowercase string");
if (lowerC===lowerC.toLowerCase()) {
    
    lowerCaseLetters=lowerC;
            charValue+=lowerCaseLetters
} else {
    window.alert("You should Enter Lowercase")
    window.location.reload();
    e.preventDefault();
}
    }if(number){
        charValue+=numbersAll
    }if(special){
        charValue+=specialAll
    }

    let i=0;
console.log(charValue);
console.log(charValue.length);

    let passwordGenerated=" ";
    for (i; i < leng; i++) {
        passwordGenerated+=charValue[Math.floor(Math.random()*charValue.length)]
        console.log(passwordGenerated);
        
    }
 window.alert(passwordGenerated)
 valuePlace.value=passwordGenerated
}

}
const submitBtn=document.getElementById("button")

submitBtn.addEventListener("click",()=>{
generatepassword()
})


