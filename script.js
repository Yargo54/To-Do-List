let form = document.querySelector('.toDoListForm');
let icon = document.querySelector('.sortImage');
let newItem = 

icon.addEventListener('click', () =>{
    if (icon.value === '1'){
        icon.style.background = "url('" +"./images/FilledSortUp.png" + "')";
        icon.value = '2';
    } else if(icon.value === '2'){
        icon.style.background = "url('" +"./images/FilledSortDown.png" + "')";
        icon.value = '1';
    }
})



// form.addEventListener('click', () => {
//     if (icon.value === '1'){
//         icon.style.background = "url('" +"./images/NotFilledSortUp.png" + "')";
//         icon.value = '2';
//     } else if(icon.value === '2') {
//         icon.style.background = "url('" +"./images/NotFilledSortDown.png" + "')";
//         icon.value = '1';
//     }
// })