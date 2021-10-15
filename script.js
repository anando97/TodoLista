
console.log("script.js is loaded");


let completedCount = 0;


const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const info = document.querySelector("small");
const label = document.querySelector("p");



button.addEventListener("click", function () {

    
const text = input.value;

if (text.length == 0) {
    info.innerText = "Input must not be empty";
    return;
}
else{
    info.innerText = "";
}

    
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    const trashcan = document.createElement("span");
    trashcan.innerHTML = "&#x1f5d1;";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);



    
    itemLabel.addEventListener("click", function () {

        if (item.getAttribute("class") == "completed") {
            item.setAttribute("class", "");
            completedCount--;
        }
        else {
            item.setAttribute("class", "completed");
            completedCount++;
        }

        label.innerText = `${completedCount} completed`;


    });

    trashcan.addEventListener("click", function(){
        item.remove();

    })

    
    input.value = "";
});

