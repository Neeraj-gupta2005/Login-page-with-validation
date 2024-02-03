const password=document.querySelector("#pass");
let see=document.querySelector(".password i");
const inputValue=document.querySelector(".password input");
const weak=document.querySelector(".weak");
const normal=document.querySelector(".normal");
const strong=document.querySelector(".strong");
const userValue=document.querySelector(".username input");
const loginButton=document.querySelector("#btn");
let usernameDiv=document.querySelector(".username");


function checkErrorMessage(){
    let errorMessages = document.querySelector(".error-message");
    message.parentNode.removeChild(message);
}

loginButton.addEventListener("click",(e)=>{
    if (userValue.value.trim()===""){
        let newdiv=document.createElement("div");
        newdiv.innerText="*Please enter your username";
        newdiv.classList.add="error-message";
        newdiv.style.cssText=`font-size:18px;
        color:red;
        font-weight:bold;
        width:100%;`

        userValue.parentNode.appendChild(newdiv);
        e.preventDefault();
        checkErrorMessage();
    }
})





// an array of passwords requirements
// regular expressions and their index
const requirements=[
    {regex:/.{5,}/ , index: 0}, //minimum 8 characters passwords
    {regex:/[a-z]/ , index: 1}, //at least one lower case character
    {regex:/[0-9]/, index: 2}, //at least one number
    {regex:/[^A-Za-z0-9]/, index: 3}, //at least one symbol
    {regex:/[A-Z]/, index: 4} //at least one uppercase character
]

// checking the username and making choice 
inputValue.addEventListener("keyup",(e)=>{

    if (e.key === "Backspace") {

        if (requirements[0].regex.test(e.target.value )==false){
            weak.style.cssText=`border: 2px solid rgba(255, 255, 255,0.3);
            color:rgba(255, 255, 255,0.3);`;}
            

            if (requirements[3].regex.test(e.target) || requirements[4].regex.test(e.target.value) ==false){
                strong.style.cssText=`border: 2px solid rgba(255, 255, 255,0.3);
                color:rgba(255, 255, 255,0.3);`; }
            
                if (requirements[1].regex.test(e.target) && requirements[2].regex.test(e.target.value)==false ){
                    normal.style.cssText=`border: 2px solid rgba(255, 255, 255,0.3);
                    color:rgba(255, 255, 255,0.3);`;
                
                  
                }
            }
    




        // checking a key is pressed 
    if (requirements[0].regex.test(e.target.value) && requirements[1].regex.test(e.target)){
        weak.style.cssText=`border: 2px solid white;
        color:white;`;
        
        // if key is pressed then checking the key has number in it 
        if ( requirements[2].regex.test(e.target.value)){
            normal.style.cssText=`border: 2px solid white;
            color:white;`;
            
            // if the input has numbers then checking does it has symbol and uppercase 
            if (requirements[3].regex.test(e.target) && requirements[4].regex.test(e.target.value)){
                strong.style.cssText=`border: 2px solid white;
                color:white;`;      
            }
        }
    }
    
})

see.addEventListener("click",()=>{
    password.type= password.type==="text"?"password":"text";

    see.className= password.type==="password"? see.className='fa-solid fa-lock' : see.className='fa-solid fa-lock-open' ;
    }
)

