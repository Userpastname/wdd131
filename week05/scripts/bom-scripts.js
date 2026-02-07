        const input = document.querySelector('#favchap')
        const button = document.querySelector('button')
        const list = document.getElementById('listing')


        let chaptersArray;
        chaptersArray = getChapterList() || [];
         

button.addEventListener('click',function(){
    if(input.value.trim() !== ''){
        displayList(input.value)
        chaptersArray.append(input.value)
        setChapterList(chaptersArray)
        input.value = '';
        input.focus();
    }
})

chaptersArray.array.forEach(element => {
    displayList(chapter)
});

function displayList(item){
        let li = document.createElement('li')
        let delBut = document.createElement('button')
        li.textContent = item;
        delBut.textContent = '❌';
        delBut.classList.add('delete');
        li.append(delBut);
        list.append(li);
        delBut.addEventListener('click',function(){
            list.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        })
}

function setChapterList(arry){
    localStorage.setItem('myFavBomList', JSON.stringify(arry))
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('myFavBomList'))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length-1)
    chaptersArray = chaptersArray.filter((item) => item !== chapter)
    setChapterList();
}