// const { createElement } = require("react");

let input_value = document.querySelector("#input");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector(".task-list");

addBtn.addEventListener("click", ()=>{
    if(input_value.value ==""){
        alert("Please enter something.");
    }
    else {
        let li = document.createElement("li");
        //circle
        let circle = document.createElement("i");
        circle.className="fa-regular fa-circle circle";
        circle.style.color=" #000000";

        //bin
        let bin = document.createElement("i");
        bin.className="fa-solid fa-trash bin";
        bin.style.color="#000000";

        li.append(circle);
        li.append( input_value.value);
        li.append(bin);
        taskList.append(li);
        input_value.value="";
       


        circle.addEventListener("click", ()=>{
            if(circle.classList.contains("fa-circle")){
                circle.classList.remove("fa-circle");
                circle.classList.add("fa-circle-check");
                li.style.textDecoration ="line-through";
                // saveData();
            }
            else {
                circle.classList.remove("fa-circle-check");
                circle.classList.add("fa-circle");
                li.style.textDecoration ="none";
                // saveData();
            }
        });

        bin.addEventListener("click", ()=>{
            li.remove();
            //saveDate();
        });







        
    }

    
})

// function saveData(){
//     localStorage.setItem("Data", taskList.innerHTML);
// }

// function showdata(){
//     taskList.innerHTML=localStorage.getItem("Data");
// }
// showdata();