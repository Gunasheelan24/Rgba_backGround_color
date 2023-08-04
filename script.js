//Creating a new div for container
let newCon = document.createElement("div");
newCon.setAttribute("class", "container-fluid  p-3");
newCon.setAttribute("id", "container-id");
document.body.appendChild(newCon);

//Creating Row For The Column's 
let newRow = document.createElement("div");
newRow.setAttribute("class", "row p-3");
newRow.setAttribute("id", "row-id");
newCon.appendChild(newRow);

//Creating a New Div For Column 
let newCol = document.createElement("div");
newCol.setAttribute("class", "col-sm-12 p-3");
newRow.appendChild(newCol);

let newCenter = document.createElement("div");
newCenter.setAttribute("class", "text-center p-3 ");
newCenter.setAttribute("id", "center-text");
newCol.appendChild(newCenter);

//Creating Heading For This Page 
let newHead = document.createElement("h3");
newHead.setAttribute("class", "h3 text-color");
newHead.innerText = "OnClick Of This Button New Bg Will Render";
newCenter.appendChild(newHead)

//Creating a New Button For Change The Bg When Toggle
let newButton = document.createElement("button");
newButton.innerText = "Click me"
newButton.setAttribute("class", "mt-3 btn btn-danger btn-block button text-light");
newButton.setAttribute("id", "button-id");
newCenter.appendChild(newButton);


window.onload = () => { 
    mainFun();
}

function mainFun() {
    let main = document.getElementById("container-id")
    let btn = document.getElementById("button-id")
    btn.addEventListener("click", function () {
       const color = randomNumber();
       main.style.backgroundColor = color;
       main.style.color = "white";
    })
};


function randomNumber() { 
    let red   =parseInt(Math.random() * 255);
    let green =parseInt(Math.random() * 255);
    let blue  =parseInt(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}