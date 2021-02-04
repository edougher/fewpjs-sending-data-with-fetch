// Add your code here
//const destinationUrl = "http://localhost:3000/dogs"
const userUrl = `http://localhost:3000/users`
function submitData(name, email) {

    let formData = {
        name: name,
        email: email
    };
    
    const  configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch(userUrl, configObj)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        //const a = document.querySelector('body')
        //const b = document.createElement('p')
        //b.innerHTML = object.id
        //a.appendChild(b)
        console.log(object.id);
        document.body.innerHTML = object.id
    })
    .catch(function(error){
        //const a = document.querySelector('body')
        //const b = document.createElement('p')
        //b.innerHTML = error.message
        //a.appendChild(b)
        document.body.innerHTML = error.message;
    });
}

//function createNode() {
//    const a = document.querySelector('body')
//    const b = document.createElement('p')
//    return a,b
//}

//let formData = {
//    dogName: "Byron",
//    dogBreed: "Poodle"
//};
//c
