const BASE_URL = 'http://localhost:3000';

const template = {
      name: "John Doe",
      age: 20,
      email: "john.doe@example.com",
      phone: "555-1234"
    }


const options = {
    'method': 'POST',
    headers: {
        'Content-type': 'application/json'
    },
body: JSON.stringify(template)
}


// TASK-1


// function getAllStudents() {
//     fetch(`${BASE_URL}/students`)
//     .then(res => res.json())
//     .then(console.log)
// }

// getAllStudents()

/////////////////////////////////////////

// TASK-2

// function getStudentsById(studentId) {
//     fetch(`${BASE_URL}/students/${studentId}`)
//     .then(res => res.json())
//     .then(console.log)
// }

// getStudentsById(3);

/////////////////////////////////////////

// TASK-3

// function addNewStudents(template) {
//     const options = {
//     'method': 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//         body: JSON.stringify(template)
//     }
//     fetch(`${BASE_URL}/students`, options)
//     .then(res => res.json())
//     .then(console.log)
// }

// addNewStudents({
//     name: "Oleh Tsap",
//     age: 15,
//     email: "olehtsap07@gmail.com",
//     phone: "555-1234"
// })

/////////////////////////////////////

// TASK-4



/////////////////////////////////////