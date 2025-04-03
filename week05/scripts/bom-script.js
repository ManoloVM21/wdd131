const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

function displayList(item) {
    const listElement = document.createElement("li");
    const deleteButton = document.createElement("button");
    listElement.textContent = item;
    deleteButton.textContent = '❌';

    listElement.append(deleteButton);
    list.append(listElement);

    deleteButton.addEventListener('click',function(){
        list.removeChild(listElement);
        deleteChapter(listElement.textContent);
        input.focus();
    });
}
function setChapterList(){
    localStorage.setItem("myFavBOMList",JSON.stringify(chaptersArray));
}
function getChapterList(){
    return JSON.parse(localStorage.getItem("myFavBOMList"))
}
function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length-1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
button.addEventListener('click',function(){
    if (input != ""){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value ="";
        input.focus();
    } 
    button.addEventListener('click', () =>{
        menuitems.classList.toggle
    })
});
