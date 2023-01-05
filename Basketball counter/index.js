let count1 = document.getElementById("number1")
let count2 = document.getElementById("number2")

countNumber1 = 0
countNumber2 = 0

function add1points1() {
    if (countNumber1 < 99){
        countNumber1 += 1
        count1.textContent = countNumber1
    }
    else{
        console.log("Limit reached")
    }
}
function add2points1(){
     if (countNumber1 < 99){
        countNumber1 += 2
        count1.textContent = countNumber1
    }
    else{
        console.log("Limit reached")
    }
    
}
function add3points1(){
    if (countNumber1 < 99){
        countNumber1 += 3
        count1.textContent = countNumber1
    }
    else{
        console.log("Limit reached")
    }
    
}
function rest1() {
    count1.textContent = 0
    countNumber1 = 0
}



function add1points2() {
    if (countNumber2 < 99){
        countNumber2 += 1
        count2.textContent = countNumber2
    }
    else{
        console.log("Limit reached")
    }
}

function add2points2(){
       if (countNumber2 < 99){
        countNumber2 += 2
        count2.textContent = countNumber2
    }
    else{
        console.log("Limit reached")
    }
   
}
function add3points2(){
    if (countNumber2 < 99){
        countNumber2 += 1
        count2.textContent = countNumber2
    }
    else{
        console.log("Limit reached")
    }
    
}
function rest2() {
    count2.textContent = 0
    countNumber2 = 0
}
