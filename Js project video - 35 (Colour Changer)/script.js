const colourChanger= document.querySelectorAll('.button')
const body = document.querySelector("body")
 colourChanger.forEach(function (button) {
    button.addEventListener('click', function(event) {
      if(button.id === "black"){
        body.style.backgroundColor = event.target.id
      }
    })

});
