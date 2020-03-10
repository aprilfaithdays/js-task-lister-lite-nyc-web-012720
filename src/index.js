document.addEventListener("DOMContentLoaded", () => {
  // when button is clicked, get the user's input
  // event listener is 'click'
  // add a line inside "My Todos" section under the ul tag with the user's input
  
  let button = document.getElementsByTagName('input')[1];

  
  button.addEventListener('click', function(event){
    event.preventDefault()

    let listToUpdate = document.getElementById("tasks");
    let text = document.querySelector("input").value;
  
    function userInput(text) {
        let li = document.createElement('li')
        li.innerHTML =`${text} 
        <button data-description= ${text} >X</button>`
      return li;
    }
  
    listToUpdate.appendChild(userInput(text));

  })

});