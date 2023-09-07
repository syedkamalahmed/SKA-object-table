var a = {
    name:"Qasim",
    lastName:"kashif",
    age :45
}
var b = {
    name:"Qasim",
    lastName:"kashif",
    age :45
}
var c = {
    name:"Qasim",
    lastName:"kashif",
    age :45
}
var d = {
    name:"Qasim",
    lastName:"kashif",
    age :45
}
var e = {
    name:"Qasim",
    lastName:"kashif",
    age :45
}

var array = [a,b,c,d,e];
var tbody =document.getElementById("tbody");
var sad = document.getElementById("sad");

function render(){
    sad.textContent = array.length;
    tbody.innerHTML ="";
    for(var i = 0; i <array.length; i++){
        var tar = document.createElement("tr");
        tar.innerHTML=`
        <td>${i+1}</td>
        <td>${array[i].name}</td>
        <td>${array[i].lastName}</td>
        <td>${array[i].age}</td>`;
        tbody.appendChild(tar);
    }
}
render()