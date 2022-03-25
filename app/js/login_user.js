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

function login(event) {
  event.preventDefault();

  if (name.value == '' && pass.value == '') {
    return console.log('Поля ввода не должны быть пустые!');
  }

  else if (name.value == '') {
    return console.log('Пустой логин!')
  }
  else if (pass.value == ''){
    return console.log('Не введен пароль!')
  }
  
  fetch('https://goncharov-server.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      name: name.value,
      pass: pass.value,
    })
  })
    .then(res => res.json())
    .then(result => {

      if (result.status == true){
        message(result.status, result.message);
        setTimeout(() => document.location.href = "shop.html", 5000)
      }
      else message(result.status, result.message);
      
      setTimeout(() => {
        success.style.display = 'none';
        error.style.display = 'none';
      }, 4000);
    })

    name.value = '';
    pass.value = '';

    

}