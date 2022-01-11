(function () {
    function CreateForm(container) {
        let form=document.createElement('form');
        let input=document.createElement('input');
        let buttonWrapper=document.createElement('div');
        let button=document.createElement('button');
    
        form.classList.add('input-group', 'mb-1');
        input.classList.add('form-control');
        input.placeholder='Введите четное число карточек в игре от 2 до 10';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent='Готово';
    
        container.append(form);
        buttonWrapper.append(button);
        form.append(input); 
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    function FormInput(container) {
        formInp=CreateForm(container);
        console.log(25);
        formInp.form.addEventListener('submit', function(e) {
            e.preventDefault();
            if ((formInp.input.value%2==0) && (formInp.input.value>=2) && (formInp.input.value<=10))
            {
            if (formInp.input.value==2) window.location="2.html";
            if (formInp.input.value==4) window.location="4.html";
            if (formInp.input.value==6) window.location="6.html";
            if (formInp.input.value==8) window.location="8.html";
            if (formInp.input.value==10) window.location="10.html";
            } else {window.location="4.html"}
        })

    }

    window.FormInput=FormInput;

}) () 

