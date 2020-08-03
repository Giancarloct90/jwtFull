import view from "./homePageV.html";
import "./homePageS.css";

export default async () => {
    let div = document.createElement('div');
    try {
        let data = await fetch('http://192.168.10.7:3000/users/home', {
            method: 'GET',
            headers: {
                'x-access-token': window.localStorage.getItem('token') || false
            }
        });
        let data2 = await data.json();
        console.log(data2.users);
        if (data2.ok) {
            div.innerHTML = view;
            renderUsers(div, data2.users);
        } else {
            window.location.hash = '#/'
        }
    } catch (e) {
        console.log(e);
    }

    return div;
}

const renderUsers = (div, users) => {
    let usersTable = div.querySelector('#usersTable');
    let html = '';
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr');
    html += `<tr>`
    html += `<th scope="col">ID</th>`
    html += `<th scope="col">Nombre</th>`
    html += `<th scope="col">Contrasenia</th>`
    html += `<th scope="col">Numero</th>`
    html += `</tr>`

    thead.innerHTML = html;
    usersTable.appendChild(thead);

    users.map(user => {
        html = '';
        let tr = document.createElement('tr');
        html += `<th scope="row">${user._id}</th>`
        html += `<td>${user.nombre}</td>`
        html += `<td>${user.contrasenia}</td>`
        html += `<td>${user.numero}</td>`
        tr.innerHTML = html;
        tbody.appendChild(tr);

    });
    usersTable.appendChild(tbody);
}