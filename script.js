let sortImage = document.querySelector('.sortImage');//объект, который хранит в себе кнопку для сортировки
let buttonAdd = document.querySelector('.buttonAdd');//объект, который хранит в себе кнопку для добавления элементов
let inputToDo = document.querySelector('.inputToDo');//объект, который хранит в себе поле Input целиком
let del = document.querySelector('.delete');//объект, который хранит в себе кнопку для удаления
let add = document.querySelector('.add')//объект, который хранит в себе общий div, в котором лежат все div с записями
let divInput = document.querySelector('.divInput')//объект, который хранит в себе div с записью (с Input и с кнопкой удаления)
let arrayOfTask = [];//пустой массив для записи значений из Input в качестве объектов
let check = 'Up';//переменная-флаг для смены классов у элемента "кнопка-сортировки"

function Sort(){//функция сортировки при нажатии на кнопку сортировки
    if (check === 'Up'){
        sortImage.className = 'sortImage1';
        check = 'Down';
        arrayOfTask.sort((a, b) =>{
            if (a.item > b.item){//item - это будет ключ свойства в массиве объектов
                return 1;
            } else if (a.item < b.item){
                return -1;
            }
            return 0;
        })
    } else if(check === 'Down'){
        sortImage.className = 'sortImage';
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

function Add(){//функция для обработки нажатия на кнопку добавления элемента
    let addElem = divInput.cloneNode(true);
    add.appendChild(addElem);
    addElem.querySelector('.inputToDo').value = '';
    addElem.querySelector('.delete').addEventListener('click', ()=>{//подписываемся на событие клик для кнопки удаления (у неё класс delete)
        if(add.children.length === 1){//проверяем, что если в списке 1 элемент, то мы стираем только текст, иначе, полностью удаляем поле div
            addElem.querySelector('.inputToDo').value = '';
        } else {
            addElem.remove();
        }
    })
}

function NewToDoList(){//функция, которая очищает To-Do List от всех значений и генерирует новые поля ввода с добавленными после ввода элементами
    document.querySelector('.add').innerHTML = '';
    for(let i = 0; i < arrayOfTask.length; i++){
        
        //Создание новых эелементов
        let newInput = document.createElement('input');
        newInput.className = 'inputToDo';
        newInput.type = 'text';
        newInput.value = arrayOfTask[i].item;

        let newButton = document.createElement('button');
        newButton.className = 'delete';
        newButton.type = 'button';

        let newDiv = document.createElement('div');
        newDiv.className = 'divInput';

        //Добавление к новосозданному div новых input и button
        newDiv.append(newInput);
        newDiv.append(newButton); 

        //Добавление на стрницу нового div со всеми элементами
        document.querySelector('.add').append(newDiv); 
        
        //Обработчик событий для кнопки удаления в новых элементах с условием удаления только текста, если элемент на странице 1
        newButton.addEventListener('click', () =>{
        if(add.children.length === 1){
            newInput.value = ''
        } else {
            newDiv.remove();
        }
        });
    }
}

function EnteryInMassiv(){//Функция записи всех значений элементов Input с экрана в массив
    for(let i = 0; i < add.children.length; i++){
        arrayOfTask.push({item:add.children[i].firstElementChild.value});
    }
}

//Обработчик кнопки сортировки
sortImage.addEventListener('click', () =>{
    EnteryInMassiv()
    Sort();
    NewToDoList()
    arrayOfTask=[];//очищаем массив после сортировки и отображения
})

//Обработчик кнопки удаления для самого первого элемента
del.addEventListener('click', () =>{
    if(add.children.length === 1){
        inputToDo.value = '';
    } else{
        divInput.remove();
    }
})

//Обработчик кнопки удаления
buttonAdd.addEventListener('click', () =>{
    Add();
})

