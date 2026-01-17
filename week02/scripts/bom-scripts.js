        const input = document.querySelector('#favchap')
        const button = document.querySelector('button')
        const list = document.getElementById('listing')
        const li = document.createElement('li')
        const delBut = document.createElement('button')

button.addEventListener('click',function(){
    if(input.value.trim() !== ''){
        li.textContent = input.value;
        delBut.textContent = '❌';
        li.append(delBut);
        list.append(li);
        
        delBut.addEventListener('click',function(){
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
})

