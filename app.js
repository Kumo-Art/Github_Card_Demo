//step 1 target my elements by Id to know where to target.
const form = document.getElementById("search-form");
const input = document.getElementById("username-input");
const card = document.getElementById("card");
const status = document.getElementById("status");
//const button = document.getElementById("search-button");

const showUser = (user) => {
    document.getElementById("card-avatar").src = user.avatar_url;
    document.getElementById("card-login").textContent = `@${user.login}`;
    document.getElementById("card-repos").textContent = user.public_repos
    document.getElementById("card-followers").textContent = user.followers
    card.hidden = false;
}
//^^^^^^^^^^^^^^^^this is equivalent to .appendChild()^^^^^^^^^^^^^^//


//We are going to add an event listener, and capture the users input from input save it to a variable

//we can do some validation


form.addEventListener("submit", (event) => {
     //dealing with forms, they have there own way of behaving
     event.preventDefault();
     //variable to store the users input
     const username = input.value.trim();
    

     //we need to validate
     if(username === ""){
       //p tag with message

       //return
     }

    //How to fetch
    fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((user) => {
        //we will create a function to help us call the data.
        //call it here
        showUser(user)
    })



});