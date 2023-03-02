const result = document.getElementById("evenandOdd")
const para = document.createElement("p");
for (let i = 0; i < 16; i++) {
    if(i % 2 == 0){
        const node = document.createTextNode(`${i} is even\n`);
        const para = document.createElement("p");
        para.appendChild(node);
        result.appendChild(para)
    }
    else
    {
        const node = document.createTextNode(`${i} is odd\n`);
        const para = document.createElement("p");
        para.appendChild(node);
        result.appendChild(para)
    }
     
    
}