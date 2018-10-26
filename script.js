function getById(id) {
  return document.querySelector(id)  
}

getById('#next').addEventListener('click', function(e) {
  e.preventDefault();
  var dest = getById('#form-travel').value
  
  if(dest != '') {
    getById('#destination').style.display = 'none';
    getById('#email').style.display = 'flex';
    document.body.classList.add("airplane");
  } else {
    $(e.target).parent().find('.error').css('display', 'block')
  }
})

getById('#submit').addEventListener('click', function(e) {
  e.preventDefault();
  var dest = getById('#form-travel').value
  var email = getById('#form-email').value

  var url ='https://script.google.com/macros/s/AKfycbzb-ZQ4Bn9mw5J5ykAsU2elrgT5BWSrjVAUzcBLydV8Y4AfN7k/exec'
  
  var data = {
    email: email,
    destination: dest
  }

  if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    getById('#email').style.display = 'none';
    getById('#submitting').style.display = 'flex';

    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: data
    }).then(function(res){
      // do something
      getById('#submitting').style.display = 'none';
      getById('#thank').style.display = 'flex';
      }
    );
  } else {
    $(e.target).parent().find('.error').css('display', 'block')
  }
})