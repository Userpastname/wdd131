        const input = document.querySelector('#favchap')
        const button = document.querySelector('button')
        const list = document.getElementById('listing')
        const li = document.createElement('li')
        const delBut = document.createElement('button')

        let prevChap = Array(localStorage.getItem("chapters-ls")||[])

        if(prevChap.length>0){
            prevChap.forEach(element => {
                li.textContent = element;
                delBut.textContent = '❌';
                li.append(delBut);
                list.append(li);
            });
        }

button.addEventListener('click',function(){
    if(input.value.trim() !== ''){
        li.textContent = input.value;
        delBut.textContent = '❌';

        li.append(delBut);
        list.append(li);

        localStorage.setItem("chapters-ls",list)
        
        delBut.addEventListener('click',function(){

            list.removeChild(li);
            localStorage.setItem("chapters-ls",JSON.stringify(list))
            input.focus();
            input.value = '';
        })
    }
})

