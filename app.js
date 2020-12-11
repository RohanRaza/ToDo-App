var ol = document.getElementById("list")
function addTask(){
    var Inp = document.getElementById("addInp")
    var li = document.createElement("li")
    li.setAttribute("class","litask")
    var liText = document.createTextNode(addInp.value)
    li.appendChild(liText)
ol.appendChild(li)
addInp.value = " "


var delbtn = document.createElement("button")
delbtn.setAttribute("id","del")
var btnText = document.createTextNode("Delete")
delbtn.setAttribute("onclick","remove(this)")
delbtn.appendChild(btnText)
li.appendChild(delbtn)

var edbtn = document.createElement("button")
var edText = document.createTextNode("Edit")
edbtn.setAttribute("id","edit")
edbtn.appendChild(edText)
li.appendChild(edbtn)
edbtn.setAttribute("onclick","ediText(this)")

}

function remAll(){
    var rembtn = document.getElementById("delall")
    ol.innerHTML = " "
}

function remove(e){
e.parentNode.remove();
}

function ediText(e){
    var edit = e.parentNode.firstChild.nodeValue;
var val = prompt("Enter New Task",edit)
e.parentNode.firstChild.nodeValue = val;
}