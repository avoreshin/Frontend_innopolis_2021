// https://reqres.in/api/users

fetch('https://reqres.in/api/users?per_page=12')
    .then((response) => {
        return response.json();
    })
    .then((body) => {
        body?.data.forEach((item) => {
            console.log(item);
        })
    });
