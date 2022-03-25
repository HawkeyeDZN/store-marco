let name = document.getElementById('name');
let pass = document.getElementById('password');
let success = document.getElementById('success')
let error = document.getElementById('error')
let errorText = document.getElementById('error-text')
let successText = document.getElementById('success-text')

function message(bool, text) {

  if (bool == true) {

    success.style.display = 'block';
    successText.innerHTML = text;

  }
  else {
    error.style.display = 'block';
    errorText.innerHTML = text;
  }


}

function register(event) {
  event.preventDefault();
  
  if (name.value == '' && pass.value == ''){
    return console.log('Поля ввода не должны быть пустые!');
    
  }

  else if (name.value == ''){
    return console.log('Пустой логин!')
  }

  else if (pass.value == '') {
    return console.log('Не введен пароль!')
  }

  // else console.log('Не введен пароль!');
  

  let users = {
    'name': name.value,
    'pass': pass.value,


  }

  fetch('https://goncharov-server.herokuapp.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(users)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result)
      message(result.status, result.message);
      setTimeout(() => document.location.href = "login.html", 4000)
      
      setTimeout(() => {
        success.style.display = 'none';
        error.style.display = 'none';
      }, 4000)
    })
    name.value = '';
    pass.value = '';
    
  


}

