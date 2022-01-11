


(function() {
    //создаем и возвращаем заголовок приложения
    function CreateTitle(title) {
        let appTitle=document.createElement('h2');
        appTitle.innerHTML=title;
        appTitle.classList.add('heading');
        return appTitle;
    }

    //создаем и возвращаем форму для создания дела
    
    function CreateFilterInput() {
        let form=document.createElement('form');
        form.id="form";
        let heading=document.createElement('h4');
        heading.textContent='Фильтр';
        let inputName=document.createElement('input');
        let inputFaculty=document.createElement('input');
        let inputBirthday=document.createElement('input');
        let inputStudy=document.createElement('input');

        inputName.classList.add('form-control', 'filter');
        inputName.id="Name";
        inputName.placeholder='ФИО';
        inputFaculty.classList.add('form-control', 'filter');
        inputFaculty.id="Faculty";
        inputFaculty.placeholder='Факультет';
        inputBirthday.classList.add('form-control', 'filter');
        inputBirthday.id="Birthday";
        inputBirthday.placeholder='Дата рождения';
        inputStudy.classList.add('form-control', 'filter');
        inputStudy.id="Study";
        inputStudy.placeholder='Годы обучения';

        form.append(heading); 
        form.append(inputName); 
        form.append(inputFaculty); 
        form.append(inputBirthday); 
        form.append(inputStudy);

        return {
            form,
            inputName,
            inputFaculty,
            inputStudy
        }

    } 

    function CreateForm() {
        let form=document.createElement('form');
        form.id='form-input';
        let input1=document.createElement('input');
        let input2=document.createElement('input');
        let input3=document.createElement('input');
        let input4=document.createElement('input');
        let input5=document.createElement('input');
        let input6=document.createElement('input');
        let buttonWrapper=document.createElement('div');
        let button=document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input1.classList.add('form-control');
        input1.placeholder='Имя';
        input2.classList.add('form-control');
        input2.placeholder='Фамилия';
        input3.classList.add('form-control');
        input3.placeholder='Отчество';
        input4.classList.add('form-control');
        input4.placeholder='Дата рождения';
        input4.type="date";
        input5.classList.add('form-control');
        input5.placeholder='Год начала обучения';
        input6.classList.add('form-control');
        input6.placeholder='Факультет';
        
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent='Добавить студента';

      
        
        buttonWrapper.append(button);
        form.append(input1); 
        form.append(input2); 
        form.append(input3); 
        form.append(input4);
        form.append(input5); 
        form.append(input6);
        form.append(buttonWrapper);
        return {
            form,
            input1,
            input2,
            input3,
            input4,
            input5,
            input6,
            button,
        };
    }
    // Создаем и возвращаем список элементов

    function createList() {
        let list=document.createElement('ul');
        list.classList.add('list-group');
        return list;
    } 


    // Делаем фильтр для каждого заголовка
    function Filter(filter0, filter1, filter2, filter3) {
        let table = document.getElementById("info");
        let tr = table.getElementsByTagName("tr");

        
        // Перебираем  строки в таблице и скрываем те, что не соответствует поисковому запросу
        
                
        for (let i = 1; i < tr.length; i++) {
            let td0=tr[i].getElementsByTagName("td")[0];
            let td1=tr[i].getElementsByTagName("td")[1];
            let td2=tr[i].getElementsByTagName("td")[2];
            let td3=tr[i].getElementsByTagName("td")[3];


                let firstCol = td0.textContent; 
                let secondCol = td1.textContent; 
                let thirdCol = td2.textContent.slice(0,4);
                let fourthCol = td3.textContent.slice(0,4);

            if ((firstCol.toUpperCase().indexOf(filter0) > -1) && (secondCol.toUpperCase().indexOf(filter1) > -1) && (thirdCol.toUpperCase().indexOf(filter2) > -1) && (fourthCol.toUpperCase().indexOf(filter3)> -1 )) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";}
                
        }
    }

    function CreateRow(object) {
        let table=document.getElementById('info');

        let row2=document.createElement('tr');
        let td1=document.createElement('td');
        let td2=document.createElement('td');
        let td3=document.createElement('td');
        let td4=document.createElement('td');
        

        td1.classList.add('border', 'size');
        td2.classList.add('border', 'size');
        td3.classList.add('border', 'size');
        td4.classList.add('border', 'size');

        td1.textContent=object.name;
        td2.textContent=object.faculty;
        td3.textContent=object.age;
        td4.textContent=object.study;

        
        table.append(row2);
        row2.append(td1);
        row2.append(td2);
        row2.append(td3);
        row2.append(td4);
    }
    
    function CreateTable(storage) {
        let table=document.getElementById('info');



        let row1=document.createElement('tr');
        let th1=document.createElement('th');
        th1.id="th1";
        let th2=document.createElement('th');
        th2.id="th2";
        let th3=document.createElement('th');
        th3.id="th3";
        let th4=document.createElement('th');
        th4.id="th4";

        th1.classList.add('border', 'table-heading1');
        th2.classList.add('border', 'table-heading2');
        th3.classList.add('border', 'table-heading3');
        th4.classList.add('border', 'table-heading4');

        th1.textContent='ФИО';
        th2.textContent='Факультет';
        th3.textContent='Дата рождения и возраст';
        th4.textContent='Годы обучения';

        table.append(row1);
        row1.append(th1);
        row1.append(th2);
        row1.append(th3);
        row1.append(th4);

        for (let i=0; i<storage.length; i++) {
            CreateRow(storage[i]);
        }

        let obj={};

        obj.name=document.getElementById('Name').value.toUpperCase();
        obj.faculty=document.getElementById('Faculty').value.toUpperCase();
        obj.birthday=document.getElementById('Birthday').value.toUpperCase();
        obj.study=document.getElementById('Study').value.toUpperCase();

 
        Filter(obj.name, obj.faculty, obj.birthday, obj.study); 

        document.getElementById('form').addEventListener('input', function() {
            
            obj.name=document.getElementById('Name').value.toUpperCase();
            obj.faculty=document.getElementById('Faculty').value.toUpperCase();
            obj.birthday=document.getElementById('Birthday').value.toUpperCase();
            obj.study=document.getElementById('Study').value.toUpperCase();

             Filter(obj.name, obj.faculty, obj.birthday, obj.study); 
          })

        return {
            row1,
            th1
        }

    }

    //Функция удаление старых строк из таблицы
    function RowDelete() {
        let table=document.getElementById('info');
        while(table.rows.length > 0) {
            table.deleteRow(0);
    }}

    function CreateApp(container, title) {

        let AppTitle=CreateTitle(title);
        let CreateFilter=CreateFilterInput();
        let ItemForm=CreateForm();
        let List=createList();


        container.append(AppTitle);
        container.append(ItemForm.form);
        container.append(List);
        container.append(CreateFilter.form);
        
        const formError=document.createElement('div');
        formError.classList.add('is-invalid', 'text-danger', 'mt-3');

        // Массив для хранения информации о студентах
        let storage=[];
        // Заполнение таблицы ранее введенными данными
        if (localStorage.getItem('table'))    {
            storage=JSON.parse(localStorage.getItem('table'));}
        table=CreateTable(storage);

        // Флаги для сортировки
        let booleanRow1=true;
        let booleanRow2=true;
        let booleanRow3=true;
        let booleanRow4=true;


        ItemForm.form.addEventListener('submit', function(e) {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера
            //в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы

            e.preventDefault();

            // игнорируем создание элемента, если пользователь ничего не ввел в форму
            const minDate=new Date('01.01.1900Z');
            let currentDate= new Date();
            let date=new Date(ItemForm.input4.value);
            formInput=document.getElementById('form-input');
            formInput.append(formError);
            
            let error=[];
            // Устанавливаем ограничения на вводимые данные
            if (!ItemForm.input1.value) error.push('Не введено имя');
            if (!ItemForm.input2.value) error.push('Не введена фамилия');
            if (!ItemForm.input3.value) error.push('Не введено отчество');
            if (!ItemForm.input4.value)  error.push('Не введена дата рождения');
            if (date<=minDate) error.push('Введена дата рождения ранее 01.01.1900 г.');
            if (date>=currentDate) error.push('Дата рождения не может быть позже текущей даты');
            if (!ItemForm.input5.value) error.push('Не введен год начала обучения');
            if ((ItemForm.input5.value)&&!(ItemForm.input5.value==parseInt(ItemForm.input5.value))) error.push('Введенное значение не является числом'); 
            if ((Number(ItemForm.input5.value)<2000)&&(ItemForm.input5.value==parseInt(ItemForm.input5.value))) error.push('Введена дата ранее 2000 года');
            if (!ItemForm.input6.value) error.push('Не введен факультет');

            let errorValue='';

            for (let err of error) {
                errorValue=errorValue+' '+ err;
            }
            formError.innerHTML='';

            if (errorValue!='') { 
                formError.textContent=errorValue;
                return
            };
      
           
            // Снимаем данные с формы для дальнейшего преобразования
            let obj={};

            obj.surname=document.querySelectorAll('input')[0].value;
            obj.name=document.querySelectorAll('input')[1].value;
            obj.middleName=document.querySelectorAll('input')[2].value;
            obj.birth=document.querySelectorAll('input')[3].value;
            obj.startingYear=document.querySelectorAll('input')[4].value;
            obj.faculty=document.querySelectorAll('input')[5].value;


            //обнуляем значение в поле, чтобы не пришлось стирать его вручную
            document.querySelectorAll('input').forEach(elements=>elements.value = '');

            let object={};
            object.name=obj.surname.trim()+' '+obj.name.trim()+' '+obj.middleName.trim();
            object.faculty=obj.faculty.trim();
            
            
            // Расчет возраста
            let birthDate=obj.birth;
            function getAge (birthDate) {
                let diff=new Date().getTime() - new Date(birthDate);
                let diffdays = diff / 1000 / (60 * 60 * 24);
                let age=Math.floor(diffdays / 365.25);
                return age;
            }  
            currentAge=getAge(birthDate);
            object.age=obj.birth.trim()+` (${currentAge} лет)`;
            
            // Расчет периода обучения
            let studyDate=obj.startingYear;
            function StudyYear(studyDate) {
                let duration=new Date().getFullYear() - Number(studyDate);
                let month = new Date().getMonth;
                if  (month>=9) duration++;
                return duration;
            }  
            currentStudy=StudyYear(studyDate);
            if (currentStudy<=4) object.study=obj.startingYear.trim()+'-'+String(Number(obj.startingYear)+4)+` (${currentStudy} курс)`;
            else object.study=obj.startingYear.trim()+'-'+String(Number(obj.startingYear)+4)+' (закончил)';
            
            //Вызов старых данных для дополнения массива новым значением и повторное сохранение
            if (localStorage.getItem('table'))    {
                storage=JSON.parse(localStorage.getItem('table'));}
            storage.push(object);
            localStorage.setItem('table', JSON.stringify(storage));

            RowDelete();

            
            // localStorage.clear();
            // Создание таблицы на основе новых введенных данных
            table=CreateTable(storage);
            
        });
       
                           
        // Делаем сортировку для каждого заголовка
        document.getElementById('info').addEventListener('click', function(event) {
            const target = event.target;

                        
            if (target.id === 'th1') {
                let sort=storage;
                if (booleanRow1) {
                sort.sort((a, b) => a.name.localeCompare(b.name));
                booleanRow1=!booleanRow1;
                } else {
                    sort.sort((a, b) => b.name.localeCompare(a.name));
                    booleanRow1=!booleanRow1;
                }
                RowDelete();
                table=CreateTable(sort);
            }
            if (target.id === 'th2') {
                let sort=storage;
                if (booleanRow2) {
                    sort.sort((a, b) => a.faculty.localeCompare(b.faculty));
                    booleanRow2=!booleanRow2;
                } else {
                    sort.sort((a, b) => b.faculty.localeCompare(a.faculty));
                    booleanRow2=!booleanRow2;
                }
                RowDelete();
                table=CreateTable(sort);
            }
            if (target.id === 'th3') {
                let sort=storage;
                if (booleanRow3) {
                    sort.sort((a, b) => a.age < b.age ? 1 : -1);
                    booleanRow3=!booleanRow3;
                } else {
                    sort.sort((a, b) => a.age > b.age ? 1 : -1);
                    booleanRow3=!booleanRow3;
                }
                RowDelete();
                table=CreateTable(sort);
            }
            if (target.id === 'th4') {
                let sort=storage;
                if (booleanRow4) {
                    sort.sort((a, b) => a.study.slice(0,4) > b.study.slice(0,4) ? 1 : -1);
                    booleanRow4=!booleanRow4;
                } else {
                    sort.sort((a, b) => a.study.slice(0,4) < b.study.slice(0,4) ? 1 : -1);
                    booleanRow4=!booleanRow4;
                }
                RowDelete();
                table=CreateTable(sort);
            }

          });



        //   Создаем событие под фильтры
        document.getElementById('form').addEventListener('input', function() {


            let obj={};

            obj.name=document.getElementById('Name').value.toUpperCase();
            obj.faculty=document.getElementById('Faculty').value.toUpperCase();
            obj.birthday=document.getElementById('Birthday').value.toUpperCase();
            obj.study=document.getElementById('Study').value.toUpperCase();
            
            Filter(obj.name, obj.faculty, obj.birthday, obj.study); 



          })


    }

    window.CreateApp=CreateApp;

})();

