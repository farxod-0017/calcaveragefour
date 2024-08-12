let form = document.querySelector("#form")
let input = document.querySelector("#input")
let arr = [1,2]
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let number = input.value
    let four = number * 4 

    if(number>5) {

    
    let a= Math.floor(number*2 - 1)
    let b= Math.floor(number/2 + 1)
    let c= Math.floor(number/4)
    let d = four-a-b-c
    const array1 = [a, b, c, d] 
    
    let a1= Math.floor(number - 1 + 2)
    let b1= Math.floor(number -1)
    let c1= Math.floor(number - 2)
    let d1 = four-a1-b1-c1 
    const array2 = [a1, b1, c1, d1] 

    let a2= Math.floor(number/2)
    let b2= Math.floor(number/2 -2)
    let c2= Math.floor(number/2 - 2 + 3)
    let d2 = four-a2-b2-c2
    const array3 = [a2, b2, c2, d2] 
        
    document.querySelector("h2:nth-of-type(1)").innerHTML += `<h4>${array1.join(', ')}</h4>`;
    document.querySelector("h2:nth-of-type(2)").innerHTML += `<h4>${array2.join(', ')}</h4>`;
    document.querySelector("h2:nth-of-type(3)").innerHTML += `<h4>${array3.join(', ')}</h4>`;
    }else {
        alert("Kombinatsiya natijalari musbat sonlardan iborat bo'lishi uchun 6dan katta yoki unga teng qiymat kiriting")
    }
    
})