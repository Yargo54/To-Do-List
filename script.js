let form = document.querySelector('.toDoListForm');
let icon = document.querySelector('.sortImage');
let newItem = document.querySelector('.buttonAdd');
let inputVal = document.querySelector('.inputToDo');
let del = document.querySelector('.delete'); 
let add = document.querySelector('.add')
let divInput = document.querySelector('.divInput')
let maintodo = document.querySelector('.mainToDo')

function Add(){
    let addElem = divInput.cloneNode(true);
    add.appendChild(addElem);
    inputVal.value = '';
    maintodo.style.height = '1%';
}

newItem.addEventListener('click', () =>{
    Add();
})

icon.addEventListener('click', () =>{
    if (icon.value === '1'){
        icon.style.background = "url('" +"./images/FilledSortUp.png" + "')";
        icon.value = '2';
    } else if(icon.value === '2'){
        icon.style.background = "url('" +"./images/FilledSortDown.png" + "')";
        icon.value = '1';
    }
})

del.addEventListener('mousedown', ()=>{
    if(inputVal.id === "0"){
        del.style.backgroundColor = "indigo"
        inputVal.value = '';  
        console.log('del')
    }
})

del.addEventListener('mouseup', ()=>{
    del.style.backgroundColor = "white"
})