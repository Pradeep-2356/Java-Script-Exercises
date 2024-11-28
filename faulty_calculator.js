console.log("Enter Two Numbers");

let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");

console.log("Enter Your Choice");
console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");
let choice = +prompt("Please Enter Your Choice");
let random = Math.random();
switch(choice){
    case 1:
        if (random < 0.1){
            console.log(num1-num2);
        }
        else{
            console.log(num1 + num2);
        }
        break;
        case 2:
            if (random < 0.1){
                console.log(num1/num2);
            }
            else{
                console.log(num1 - num2);
                }
            break;
            case 3:
                console.log(num1 * num2);
                if (random < 0.1){
                    console.log(num1+num2);
                }
                else{
                        console.log(num1 * num2);
                    }
                break;
                case 4:
                    if(random < 0.1){
                        
                        console.log(num1**num2);
                    }
                    else
                    if(num2 != 0){
                        console.log(num1 / num2);
                    }
                    else
                    alert("Invalid Operation");
                break;
                default:
                    console.log("Invalid Choice");
                        
                }