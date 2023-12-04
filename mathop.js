const operation = (a,b,op) =>{
    return new Promise((res,rej)=> {
    if (op === "+") {
        res(`addition of ${a} and ${b} is ${a+b}`);
    }
     else if (op === "-") {
        res(`substraction of ${a} and ${b} is ${a-b}`);
    }
     else if (op === "/") {
        res(`division of ${a} and ${b} is ${a/b}`);
    }
    else if (op === "*") {
        res(`multiplication of ${a} and ${b} is ${a*b}`);
    }
    else{
        rej(" no operation found ")
    }
})
}





const mathop = async () => {
    const output = await operation(2,8,"*").catch((err)=> {
         console.log(`err`,err)
    })
    if (output){

        console.log(`output`, output )
    }
};
mathop()