let form = document.querySelector('.toDoListForm');
let icon = document.querySelector('.sortImage');
let newItem = document.querySelector('.buttonAdd');
let inputVal = document.querySelector('.inputToDo');
let del = document.querySelector('.delete'); 
let add = document.querySelector('.add')
let divInput = document.querySelector('.divInput')
let maintodo = document.querySelector('.mainToDo')
let arrayOfTask = [];
let check = 'Up';
function ChangeSortImage(){
    if (check === 'Up'){
        icon.className = 'sortImage1';
        check = 'Down';
        arrayOfTask.sort((a, b) =>{
            if (a.item > b.item){
                return 1;
            } else if (a.item < b.item){
                return -1;
            }
            return 0;
        })
    } else if(check === 'Down'){
        icon.className = 'sortImage';
        check = 'Up';
        arrayOfTask.sort((a, b) =>{
            if (a.item > b.item){
                return -1;
            } else if (a.item < b.item){
                return 1;
            }
            return 0;
        })
    }
}

function Add(){
    let addElem = divInput.cloneNode(true);
    add.appendChild(addElem);
    let val = addElem.querySelector('.inputToDo')
    val.value = '';
    let but = addElem.querySelector('.delete');
    but.addEventListener('click', ()=>{
        if(add.children.length === 1){
            val.value = '';
        } else {
            addElem.remove();
        }
    })
}

icon.addEventListener('click', () =>{
    for(let i = 0; i < add.children.length; i++){
        arrayOfTask.push({item:add.children[i].firstElementChild.value});
    }

    ChangeSortImage();

    document.querySelector('.add').innerHTML = '';

    for(let i = 0; i < arrayOfTask.length; i++){
        
        let newInput = document.createElement('input');
        newInput.className = 'inputToDo';
        newInput.type = 'text';
        newInput.value = arrayOfTask[i].item;

        let newButton = document.createElement('button');
        newButton.className = 'delete';
        newButton.type = 'button';
        newButton.innerText = 'X';

        let newDiv = document.createElement('div');
        newDiv.className = 'divInput';  
        newDiv.append(newInput);
        newDiv.append(newButton); 
        document.querySelector('.add').append(newDiv);  
        newButton.addEventListener('click', () =>{
        if(add.children.length === 1){
            newInput.value = ''
        } else {
            newDiv.remove();
        }
        });
    }

    arrayOfTask=[];
})

del.addEventListener('click', () =>{
    if(add.children.length === 1){
        inputVal.value = '';
    } else{
        divInput.remove();
    }
})

newItem.addEventListener('click', () =>{
    Add();
})

