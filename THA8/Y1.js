var row='<tr>';
for(i=0;i<30;i++){
    row+='<td></td>';
}
row+='</tr>';
console.log(row);
var result='';
for(i=0;i<30;i++){
    result+=row;
}
document.getElementById('yash').innerHTML= result;
let cell =document.querySelectorAll('td');
cell.forEach( (x) => {
    x.addEventListener("click",function() {
     x.classList.toggle("white");
    })
});