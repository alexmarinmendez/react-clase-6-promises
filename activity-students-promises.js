let is_ok = true;

data = [{
    name: 'Luis Gonzalez',
    course: 'ReactJS'
},
{
    name: 'Sevindzh Shukurova',
    course: 'Backend NodeJs'
}]

let fetchData = (time, task) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task)
            } else {
                reject("Error")
            }
        }, time);
    });
}

fetchData(2000, data)
    .then(response => console.log(response))
    .catch(err => console.log(err))