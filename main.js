const form  = document.getElementById('form_group');



form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    var author = document.getElementById('author').value;
    var published_date = document.getElementById('published_date').value;
    var isbn  = document.getElementById('isbn').value;

    if(name === '' || author === '' ||    published_date === '' || isbn === ''){
        alert('Please Fill all field');
        return;
    }
    var table = document.querySelector('table');

    console.dir(name, author, published_date, isbn);
    // console.log(name);
    // console.log('Hello');
    var row = document.createElement('tr');


    var table_data_name = document.createElement('td');
    table_data_name.textContent = name;
    row.appendChild(table_data_name);

    var table_data_author = document.createElement('td');
    table_data_author.textContent = author;
    row.appendChild(table_data_author);


    var table_data_date = document.createElement('td');
    table_data_date.textContent = published_date;
    row.appendChild(table_data_date);


    var table_data_isbn = document.createElement('td');
    table_data_isbn.textContent = isbn;
    row.appendChild(table_data_isbn);

    // document.getElementById('name').value = ' '
 
    table.insertRow(row);

       form.reset();
    table.children[1].appendChild(row);

    console.dir(table.children[1]);

    console.dir(form);


});
