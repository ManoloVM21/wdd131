const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click',function(){
    if (input.value.trim() != ""){
        
        const listElement = document.createElement("li");
        const deleteButton = document.createElement("button");
        listElement.textContent = input.value;
        deleteButton.textContent = '❌';

        listElement.append(deleteButton);
        list.append(listElement);

        deleteButton.addEventListener('click',function(){
            list.removeChild(listElement);
            input.focus();
        })
        input.value = "";
        input.focus();
    } else {
        input.focus();
    }
    button.addEventListener('click', () =>{
        menuitems.classList.toggle
    })
});