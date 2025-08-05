

// // Reference elements
// let inputData = document.querySelector("#input-feild");
// let clickMe = document.querySelector(".btn");
// let addElemData = document.querySelector(".addElemData");

// // reload window to get data from local stroage 

// window.addEventListener('DOMContentLoaded', (e) => {
//     let getDataFromlocal = JSON.parse(localStorage.getItem("local-Data"))
//     getDataFromlocal.forEach((todo) => {
//         let createElem = document.createElement("div");
//         createElem.classList.add("CreateLi");


//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.classList.add("checkbox");

//         let li = document.createElement("li");
//         li.textContent = todo;


//         let deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.classList.add("DynamicBtn");


//         createElem.appendChild(checkbox);
//         createElem.appendChild(li);
//         createElem.appendChild(deleteBtn);
//         addElemData.appendChild(createElem);

//          checkbox.addEventListener("change", () => {
//         li.classList.toggle("completed");
//     });
//     });
// })

// // Function to add a todo
// let addTodo = () => {
//     let filterData = inputData.value.trim();

//     if (filterData === "") {
//         alert("Please! Enter Some Text");
//         return;
//     }

//     let createElem = document.createElement("div");
//     createElem.classList.add("CreateLi");


//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("checkbox");

//     let li = document.createElement("li");
//     li.textContent = filterData;


//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("DynamicBtn");


//     createElem.appendChild(checkbox);
//     createElem.appendChild(li);
//     createElem.appendChild(deleteBtn);
//     addElemData.appendChild(createElem);


//     let storedTodos = JSON.parse(localStorage.getItem("local-Data")) || [];
//     storedTodos.push(filterData);
//     localStorage.setItem("local-Data", JSON.stringify(storedTodos));


//     checkbox.addEventListener("change", () => {
//         li.classList.toggle("completed");
//     });

//     // Delete button
//     deleteBtn.addEventListener("click", () => {
//         createElem.remove();
//         let currentTodos = JSON.parse(localStorage.getItem("local-Data"));
//         let updatedTodos = currentTodos.filter((todo) => todo !== filterData);
//         localStorage.setItem("local-Data", JSON.stringify(updatedTodos));
//     });

//     inputData.value = "";


// };


// clickMe.addEventListener('click', addTodo);




// Reference elements
// let inputData = document.querySelector("#input-feild");
// let clickMe = document.querySelector(".btn");
// let addElemData = document.querySelector(".addElemData");

// // Reload window to get data from localStorage
// window.addEventListener('DOMContentLoaded', () => {
//     let getDataFromlocal = JSON.parse(localStorage.getItem("local-Data")) || [];

//     getDataFromlocal.forEach((todo, index) => {
//         let createElem = document.createElement("div");
//         createElem.classList.add("CreateLi");

//         let checkbox = document.createElement("input");
//         checkbox.type = "checkbox";
//         checkbox.classList.add("checkbox");

//         let li = document.createElement("li");
//         li.textContent = todo;

//         let deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.classList.add("DynamicBtn");

//         // Toggle complete
//         checkbox.addEventListener("change", () => {
//             li.classList.toggle("completed");
//         });

//         // Delete using index
//         deleteBtn.addEventListener("click", () => {
//             createElem.remove();
//             let currentTodos = JSON.parse(localStorage.getItem("local-Data")) || [];
//             currentTodos.splice(index, 1);
//             localStorage.setItem("local-Data", JSON.stringify(currentTodos));
//             location.reload(); // to fix index shift
//         });

//         createElem.appendChild(checkbox);
//         createElem.appendChild(li);
//         createElem.appendChild(deleteBtn);
//         addElemData.appendChild(createElem);
//     });
// });

// // Function to add a todo
// let addTodo = () => {
//     let filterData = inputData.value.trim();

//     if (filterData === "") {
//         alert("Please! Enter Some Text");
//         return;
//     }

//     let createElem = document.createElement("div");
//     createElem.classList.add("CreateLi");

//     let checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.classList.add("checkbox");

//     let li = document.createElement("li");
//     li.textContent = filterData;

//     let deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("DynamicBtn");

//     createElem.appendChild(checkbox);
//     createElem.appendChild(li);
//     createElem.appendChild(deleteBtn);
//     addElemData.appendChild(createElem);

//     // Save to localStorage
//     let storedTodos = JSON.parse(localStorage.getItem("local-Data")) || [];
//     storedTodos.push(filterData);
//     localStorage.setItem("local-Data", JSON.stringify(storedTodos));

//     // Toggle complete
//     checkbox.addEventListener("change", () => {
//         li.classList.toggle("completed");
//     });

//     // Delete button
//     deleteBtn.addEventListener("click", () => {
//         createElem.remove();

//         let currentTodos = JSON.parse(localStorage.getItem("local-Data")) || [];

//         // Important: find first matching index and remove only that
//         let indexToRemove = currentTodos.indexOf(filterData);
//         if (indexToRemove !== -1) {
//             currentTodos.splice(indexToRemove, 1);
//             localStorage.setItem("local-Data", JSON.stringify(currentTodos));
//         }
//     });

//     inputData.value = "";
// };

// clickMe.addEventListener('click', addTodo);

// References
let inputData = document.querySelector("#input-feild");
let clickMe = document.querySelector(".btn");
let addElemData = document.querySelector(".addElemData");

// On page load
window.addEventListener('DOMContentLoaded', () => {
    let getDataFromLocal = JSON.parse(localStorage.getItem("local-Data")) || [];

    getDataFromLocal.forEach((todo, index) => {
        let createElem = document.createElement("div");
        createElem.classList.add("CreateLi");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = todo.completed; // ✅ Restore checkbox state

        let li = document.createElement("li");
        li.textContent = todo.text;
        if (todo.completed) {
            li.classList.add("completed");
        }

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("DynamicBtn");

        // ✅ Checkbox toggle & update localStorage
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed");
            getDataFromLocal[index].completed = checkbox.checked;
            localStorage.setItem("local-Data", JSON.stringify(getDataFromLocal));
        });

        // ✅ Delete task
        deleteBtn.addEventListener("click", () => {
            createElem.remove();
            getDataFromLocal.splice(index, 1);
            localStorage.setItem("local-Data", JSON.stringify(getDataFromLocal));
            location.reload(); // So index stays correct
        });

        createElem.appendChild(checkbox);
        createElem.appendChild(li);
        createElem.appendChild(deleteBtn);
        addElemData.appendChild(createElem);
    });
});

// Function to add a todo
let addTodo = () => {
    let filterData = inputData.value.trim();
    if (filterData === "") {
        alert("Please! Enter Some Text");
        return;
    }

    let storedTodos = JSON.parse(localStorage.getItem("local-Data")) || [];

    let newTodo = {
        text: filterData,
        completed: false
    };

    storedTodos.push(newTodo);
    localStorage.setItem("local-Data", JSON.stringify(storedTodos));
    inputData.value = "";
    location.reload(); // Refresh to show added item
};

clickMe.addEventListener('click', addTodo);


