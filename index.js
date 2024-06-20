var elements = document.getElementsByClassName("project_card");

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    alert("You clicked on a project card!");
  });
}




document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    var name = document.querySelector('input[type="text"]').value;
    var email = document.querySelector('input[type="email"]').value;
  
    console.log('Name: ', name);
    console.log('Email: ', email);
  });