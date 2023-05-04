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


async function getAllStudents() {
    const res = await fetch(`${BASE_URL}/students`);
    const student = await res.json();
    const articles = await student.articles
    return articles
}

getAllStudents()

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
    // const options = {
    // 'method': 'POST',
    // headers: {
    //     'Content-type': 'application/json'
    // },
    //     body: JSON.stringify(template)
    // }
    // fetch(`${BASE_URL}/students`, options)
    // .then(res => res.json())
    // .then(console.log)
// }

// addNewStudents({
//     name: "Oleh Tsap",
//     age: 15,
//     email: "olehtsap07@gmail.com",
//     phone: "555-1234"
// })

/////////////////////////////////////

// TASK-4

// function updateStudentsById(studentId, update) {
// const options = {
//     'method': 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//         body: JSON.stringify(update)
//     }
//     fetch(`${BASE_URL}/students/${studentId}`, options)
//     .then(res => res.json())
//     .then(console.log)
// }

// updateStudentsById(4, {
//     name: "Ira Sokolova",
//     age: 18,
//     email: "sokolova@gmail.com",
//     phone: "555-1234"
// })

/////////////////////////////////////

// TASK-5

// function updatePartialInformationAboutStudentsById(studentId, update) {
// const options = {
//     'method': 'PATCH',
//     headers: {
//         'Content-type': 'application/json'
//     },
//         body: JSON.stringify(update)
//     }
//     fetch(`${BASE_URL}/students/${studentId}`, options)
//     .then(res => res.json())
//     .then(console.log)
// }

// updatePartialInformationAboutStudentsById(4, {
//     age: 20,
//     phone: "555-7777"
// })

/////////////////////////////////////

// TASK-6

// function deleteStudentById(studentId) {
//     fetch(`${BASE_URL}/students/${studentId}`, { method: `DELETE` })
//     .then(res => res.json())
//     .then(console.log())
// }

// deleteStudentById(5)

/////////////////////////////////////

// TASK-7

function getStudentsByAge(studentAge) {
    fetch(`${BASE_URL}/students/age=${studentAge}`)
    .then(res => res.json())
    .then(console.log)
}

getStudentsByAge(20)

/////////////////////////////////////